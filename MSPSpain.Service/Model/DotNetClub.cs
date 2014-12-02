using System.Collections.Generic;

namespace MSPSpain.Service.Model
{
    public class DotNetClub
    {
        public int Id { get; set; }
        public string University { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public virtual IList<Msp> MspMembers { get; set; }
    }
}
