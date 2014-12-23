using MSPSpain.Model;
using System.Linq;
using System.Threading.Tasks;

namespace MSPSpain.Repository
{
    public interface IMspRepository
    {
        Task<IQueryable<Msp>> GetMsps();

        Task<IQueryable<Msp>> GetByCity(string city);

        Task<IQueryable<Msp>> GetByUniversity(string university);
    }
}