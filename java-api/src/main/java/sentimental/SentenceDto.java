package sentimental;

public class SentenceDto {

    private String sentence;

    public SentenceDto() {
    }

    public SentenceDto(String sentence) {
        this.sentence = sentence;
    }

    public String getSentence() {
        return sentence;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }
}
