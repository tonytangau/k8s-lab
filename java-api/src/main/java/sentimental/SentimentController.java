package sentimental;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "*")
@RestController
public class SentimentController {

    @Value("${logic.url}")
    private String logicUrl;

    @PostMapping("/analyse/sentiment")
    public SentimentDto sentimentAnalysis(@RequestBody SentenceDto sentence) {
        RestTemplate restTemplate = new RestTemplate();

        return restTemplate
            .postForEntity(logicUrl + "/analyse/sentiment", sentence, SentimentDto.class)
            .getBody();
    }
}
