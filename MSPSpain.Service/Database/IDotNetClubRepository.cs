using MSPSpain.Service.Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MSPSpain.Service.Database
{
    public interface IDotNetClubRepository
    {
        Task<IQueryable<DotNetClub>> GetDotNetClubs();
    }
}
