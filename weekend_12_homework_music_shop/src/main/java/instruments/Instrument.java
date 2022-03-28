package instruments;

import interfaces.iPlay;
import interfaces.iSell;

public abstract class Instrument implements iPlay, iSell {

    private String colour;
    private String material;
    public String brand;
    private int buyingPrice;
    private int sellingPrice;
    private String sound;

    public Instrument(String colour, String material, String brand, int buyingPrice, int sellingPrice, String sound) {
        this.colour = colour;
        this.material = material;
        this.brand = brand;
        this.buyingPrice = buyingPrice;
        this.sellingPrice = sellingPrice;
        this.sound = sound;
    }

    public String getSound() {
        return sound;
    }

    public void setSound(String sound) {
        this.sound = sound;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getBuyingPrice() {
        return buyingPrice;
    }

    public void setBuyingPrice(int buyingPrice) {
        this.buyingPrice = buyingPrice;
    }

    public int getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(int sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    public String play() {
        return this.sound;
    }

    public int calculateMarkup() {
        return this.sellingPrice - this.buyingPrice;
    }
}
