package sentimental;

public class SentimentDto {

    private float polarity;

    public SentimentDto() {
    }

    public SentimentDto(float polarity) {
        this.polarity = polarity;
    }

    public float getPolarity() {
        return polarity;
    }

    public void setPolarity(float polarity) {
        this.polarity = polarity;
    }
}
