namespace MSPSpain.Service.Model
{
    public class Msp
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastNames { get; set; }
        public string City { get; set; }
        public string AutonomousCommunity { get; set; }

        public virtual DotNetClub DotNetClub { get; set; }
    }
}
