using System.Web.Http;
using MSPSpain.Repository;
using System.Threading.Tasks;
using System.Collections.Generic;
using MSPSpain.Model;
using System.Linq;

namespace MSPSpain.Web.Controllers
{
    public class MspController : ApiController
    {
        private readonly IMspRepository _mspRepository;

        public MspController(IMspRepository mspRepository)
        {
            _mspRepository = mspRepository;
        }

        public async Task<IList<Msp>> Get()
        {
            return (await _mspRepository.GetMsps()).ToList();
        }

        public async Task<IList<Msp>> Get(string city)
        {
            return (await _mspRepository.GetByCity(city)).ToList();
        }
    }
}
