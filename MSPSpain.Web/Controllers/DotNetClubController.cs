using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MSPSpain.Service.Database;
using MSPSpain.Service.Model;
using System.Threading.Tasks;

namespace MSPSpain.Web.Controllers
{
    public class DotNetClubController : ApiController
    {
        private readonly IDotNetClubRepository _dotNetClubRepo;

        public DotNetClubController()
        {
            _dotNetClubRepo = new DotNetClubRepository(); //TODO: use DI.
        }

        // GET api/<controller>
        public async Task<IEnumerable<DotNetClub>> Get()
        {
            var dotNetClubs = await _dotNetClubRepo.GetDotNetClubs();
            return dotNetClubs;
        }

        public async Task<IEnumerable<DotNetClub>> Get([FromUri]string city)
        {
            //we're not spiriling down to GetDotNetClubsByCity/ByAddress/ByMember, but this is not the place.
            var dotNetClubsByCity = (await _dotNetClubRepo.GetDotNetClubs()).Where(x => x.City.ToLower().Contains(city.ToLower()));
            return dotNetClubsByCity;
        }
       
    }
}