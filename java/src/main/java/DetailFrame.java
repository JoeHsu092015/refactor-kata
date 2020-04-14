public class DetailFrame {

    private String description;
    private String accountSymbol;
    private int frameLength;
    private int frameWidth;
    public void show() {
        System.out.println(description);
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setAccountSymbol(String symbol) {
        this.accountSymbol = symbol;
    }

    public String getAccountSymbol() {
        return this.accountSymbol;
    }

    public void setFrameLength(int length) {
        this.frameLength = length;
    }

    public void setFrameWidth(int width) {
        this.frameWidth = width;
    }

    public int getFrameLength() {
        return this.frameLength;
    }

    public int getFrameWidth() {
        return this.frameWidth;
    }
}
