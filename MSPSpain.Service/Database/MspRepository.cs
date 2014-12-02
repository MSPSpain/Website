using MSPSpain.Service.Model;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace MSPSpain.Service.Database
{
    public class MspRepository : IMspRepository
    {
        public Task<IQueryable<Msp>> GetMsps()
        {
            throw new NotImplementedException();
        }
    }
}
