using Newtonsoft.Json;

namespace MSPSpain.Model
{
    public class Location
    {
        [JsonProperty(PropertyName = "lon")]
        public float Lon { get; set; }

        [JsonProperty(PropertyName = "lat")]
        public float Lat { get; set; }
    }
}
