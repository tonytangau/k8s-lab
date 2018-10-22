using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace dotnet_api.Controllers
{
    [Route("analyse/[controller]")]
    [ApiController]
    public class SentimentController : ControllerBase
    {
        const string LOGIC_URL = "http://192.168.99.100:31501/analyse/sentiment";
        
        [HttpPost]
        public async Task<ActionResult<PolarityDto>> Post([FromBody] SentenceDto sentence)
        {
            using (var client = new HttpClient())
            {
                var jsonString = JsonConvert.SerializeObject(sentence);
                var response = await client.PostAsync(LOGIC_URL, new StringContent(jsonString, Encoding.UTF8, "application/json"));
                response.EnsureSuccessStatusCode();

                return await response.Content.ReadAsAsync<PolarityDto>();
            }
        }
    }

    public class SentenceDto
    {
        public string Sentence { get; set; }
    }

    public class PolarityDto
    {
        public string Polarity { get; set; }
    }
}
