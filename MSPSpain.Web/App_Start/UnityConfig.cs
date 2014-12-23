using Microsoft.Practices.Unity;
using MSPSpain.Repository;
using System.Web.Http;
using Unity.WebApi;

namespace MSPSpain.Web
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            container.RegisterType<IMspRepository, MspRepository>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}