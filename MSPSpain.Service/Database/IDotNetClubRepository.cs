using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSPSpain.Service.Database
{
    public interface IDotNetClubRepository
    {
        Task<IList<DotNetClub>> GetDotNetClubs();
    }
}
