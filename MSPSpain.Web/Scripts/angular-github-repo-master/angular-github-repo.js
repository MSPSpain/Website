/**
 * GitHub Repository service and directive for AngularJS
 * @version v0.0.1
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

'use strict';

angular.module('githubRepo', [])
  .factory('GitHubRepo', function ($http, $q, $injector) {

    var githubApi = 'https://api.github.com/repos/'
      , $localStorage = $injector.has('$localStorage') ? $injector.get('$localStorage') : null;

    // Prepare localStorage cache, if not available.
    if ($localStorage && !$localStorage.githubRepo) {
      $localStorage.githubRepo = {};
    }

    // Grab caching object.
    var cache = $localStorage && $localStorage.githubRepo || {};

    /**
     * GitHub Repository conntructor.
     */
    function GitHubRepo(data, repo) {
      this.name = data.name;
      this.description = data.description;
      this.url = data.html_url;
      this.forks = data.forks_count;
      this.issues = data.open_issues;
      this.pushedAt = new Date(data.pushed_at);
      this.stargazers = data.stargazers_count;
      this.author = data.owner.login;

      // Save only necessary data to local cache.
      this.setCache(repo);

      this.fullData = data;
    }

    /**
     * Set cache, if available.
     */
    GitHubRepo.prototype.setCache = function (repo) {
      cache[repo] = this;
    };

    var factory = {};

    /**
     * Get cached data, if any.
     */
    factory.fecthCached = function (repo) {
      return cache[repo] || null;
    };

    /**
     * Get GitHub Repository object for a given repo.
     */
    factory.fecth = function (repo) {
      var deferred = $q.defer(),
        cached = factory.fecthCached(repo);

      if (cached) {
        deferred.resolve(cached);
      } else {
        $http.get(githubApi + repo, { cache: true })
          .success(function (data) {
            deferred.resolve(new GitHubRepo(data, repo));
          })
          .error(deferred.reject);
      }


      return deferred.promise;
    };

    return factory;
  })

  .directive('githubRepo', function(GitHubRepo, $parse) {
    return {
      restrict: 'A',
      scope: true,
      template:
        '<div class="github-box">' +
          '<div class="github-box-header">' +
            '<h3>' +
              '<a href="{{url}}">{{name}}</a><small ng-if="options.author">, by {{author}}</small>' +
            '</h3>' +
            '<div class="github-stats">' +
              '<a ng-if="options.stars" class="repo-stars" title="Stars" data-icon="7" href="{{url}}/stargazers">{{stargazers}}</a>' +
              '<a ng-if="options.forks" class="repo-forks" title="Forks" data-icon="f" href="{{url}}/network">{{forks}}</a>' +
              '<a ng-if="options.issues" class="repo-issues" title="Issues" data-icon="i" href="{{url}}/issues">{{issues}}</a>' +
            '</div>' +
          '</div>' +
          '<div class="github-box-content">' +
            '<p>{{description}} &mdash; <a href="{{url}}#readme">Read More</a></p>' +
          '</div>' +
          '<div class="github-box-download">' +
            '<p class="repo-update">Latest commit to <strong>master</strong> on {{pushedAt | date:options.dateFormat}}</p>' +
            '<a class="repo-download" title="Download as zip" data-icon="w" href="{{url}}/zipball/master"></a>' +
          '</div>' +
        '</div>',
      link: function(scope, element, attr) {
        if (!attr.githubRepo) throw 'GitHub Repository not defined.';

        var defaults = {
          dateFormat: 'mediumDate',
          stars:      true,
          forks:      true,
          issues:     false,
          author:     false
        };

        GitHubRepo.fecth(attr.githubRepo)
          .then(function (repo) {
            angular.extend(scope, repo, {
              options: defaults
            });

            angular.extend(scope.options, attr.githubRepoOptions ? $parse(attr.githubRepoOptions)(scope) : {});
          })
          .catch(function (err) {
            throw err;
          });
      }
    };
  });

