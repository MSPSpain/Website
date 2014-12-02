using MSPSpain.Service.Database;
using MSPSpain.Service.Model;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace MSPSpain.Web.Controllers
{
    public class MspController : ApiController
    {
        private readonly IMspRepository _mspRepository;

        public MspController()
        {
            _mspRepository = new MspRepository(); //TODO: use DI.
        }

        [Route("api/msp")]
        public async Task<IEnumerable<Msp>> Get()
        {
            return await _mspRepository.GetMsps();
        }
    }
}
