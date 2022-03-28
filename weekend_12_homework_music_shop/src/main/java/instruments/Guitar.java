package instruments;

public class Guitar extends Instrument {

    private int numberOfStrings;

    public Guitar(String colour, String material, String brand, int buyingPrice, int sellingPrice, String sound, int numberOfStrings) {
        super(colour, material, brand, buyingPrice, sellingPrice, sound);
        this.numberOfStrings = numberOfStrings;
    }

    public int getNumberOfStrings() {
        return numberOfStrings;
    }

    public void setNumberOfStrings(int numberOfStrings) {
        this.numberOfStrings = numberOfStrings;
    }


}
