package accessories;

public class TrumpetBag extends Accessory {

    public String trumpetBag;

    public TrumpetBag(String description, String brand, int buyingPrice, int sellingPrice, String trumpetBag) {
        super(description, brand, buyingPrice, sellingPrice);
        this.trumpetBag = trumpetBag;
    }

    public String getTrumpetBag() {
        return trumpetBag;
    }

    public void setTrumpetBag(String trumpetBag) {
        this.trumpetBag = trumpetBag;
    }
}
