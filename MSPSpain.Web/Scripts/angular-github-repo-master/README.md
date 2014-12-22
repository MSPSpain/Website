# AngularJS GitHub Repository

[![Github Repo Demonstration](https://cloud.githubusercontent.com/assets/398893/3528396/064b1fa4-078f-11e4-8460-2593d190c2fc.png)](http://github.com/lucasconstantino/angular-github-repo/)

> An AngularJS service and directive to display your GitHub repositories in a nice and simple widget.

## Getting started

Use [Bower](http://bower.io/) to install it in your project:

```sh
bower install angular-github-repo --save
```

Alternatively, you can [download the latest release](https://github.com/lucasconstantino/angular-github-repo/archive/master.zip).

## Usage

### 1. Include AngularJS and the module's files into your HTML:

```html
<link rel="stylesheet" href="angular-github-repo/assets/base.css">

<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
<script src="angular-github-repo/angular-github-repo.js"></script>
```

### 2. Define the module as an AngularJS dependency:

```javascript
angular.module('myApp', ['angular-github-repo']);
```

### 3. Use the directive in your HTML:

```html
<!-- Simple usage: -->
<div github-repo="lucasconstantino/angular-github-repo"></div>

<!-- Options usage: -->
<div github-repo="lucasconstantino/angular-github-repo" github-repo-options="{issues: true}"></div>
```

## Options

Here's a list of available settings, showing the defaults:

```javascript
{
    dateFormat: 'mediumDate',
    stars:      true,
    forks:      true,
    issues:     false,
    author:     false
}
```

| Attribute    | Type      | Default      | Description                      |
|--------------|-----------|--------------|----------------------------------|
| `dateFormat` | *String*  | `mediumDate` | AngularJS format filter for date |
| `stars`      | *Boolean* | `true`       | Displays the number of starts    |
| `forks`      | *Boolean* | `true`       | Displays the number of forks     |
| `issues`     | *Boolean* | `false`      | Displays the number of issues    |
| `author`     | *Boolean* | `false`      | Displays the auther username     |

## Credits

Forked from [jQuery Github](https://github.com/zenorocha/jquery-github), by Zeno Rocha.

## License

The MIT License (MIT)

Copyright © 2014 Zeno Rocha <hi@zenorocha.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
