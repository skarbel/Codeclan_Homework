package instruments;

public class Trumpet extends Instrument {

    private int numberOfValves;

    public Trumpet(String colour, String material, String brand, int buyingPrice, int sellingPrice, String sound, int numberOfValves) {
        super(colour, material, brand, buyingPrice, sellingPrice, sound);
        this.numberOfValves = numberOfValves;
    }

    public int getNumberOfValves() {
        return numberOfValves;
    }

    public void setNumberOfValves(int numberOfValves) {
        this.numberOfValves = numberOfValves;
    }
}
