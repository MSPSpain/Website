using Newtonsoft.Json;

namespace MSPSpain.Model
{
    public class Msp
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "isMsp")]
        public bool IsMsp { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "lastname")]
        public string Lastname { get; set; }

        [JsonProperty(PropertyName = "years")]
        public int[] Years { get; set; }

        [JsonProperty(PropertyName = "city")]
        public string City { get; set; }

        [JsonProperty(PropertyName = "university")]
        public string University { get; set; }

        [JsonProperty(PropertyName = "email")]
        public string Email { get; set; }

        [JsonProperty(PropertyName = "skills")]
        public string Skills { get; set; }

        [JsonProperty(PropertyName = "twitter")]
        public string Twitter { get; set; }

        [JsonProperty(PropertyName = "linkedin")]
        public string Linkedin { get; set; }

        [JsonProperty(PropertyName = "website")]
        public string Website { get; set; }

        [JsonProperty(PropertyName = "image")]
        public string Image { get; set; }

        [JsonProperty(PropertyName = "thumbnail")]
        public string Thumbnail { get; set; }

        [JsonProperty(PropertyName = "location")]
        public Location Location { get; set; }
    }

}
