using System;
using System.Linq;
using MSPSpain.Model;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace MSPSpain.Repository
{
    public class MspRepository : IMspRepository
    {
        public Task<IQueryable<Msp>> GetByCity(string city)
        {
            return Task.FromResult<IQueryable<Msp>>(new List<Msp>
            {
                new Msp
                {
                    Name = "Daniel",
                    Lastname  = "Rozo"
                }
            }
            .AsQueryable());
        }

        public Task<IQueryable<Msp>> GetByUniversity(string university)
        {
            return Task.FromResult<IQueryable<Msp>>(new List<Msp>
            {
                new Msp
                {
                    Name = "Daniel",
                    Lastname  = "Rozo"
                }
            }
            .AsQueryable());
        }

        public Task<IQueryable<Msp>> GetMsps()
        {
            return Task.FromResult<IQueryable<Msp>>(new List<Msp>
            {
                new Msp
                {
                    Name = "Daniel",
                    Lastname  = "Rozo"
                }
            }
            .AsQueryable());
        }
    }
}
