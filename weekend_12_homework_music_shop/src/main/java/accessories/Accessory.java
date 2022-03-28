package accessories;

import interfaces.iSell;

public abstract class Accessory implements iSell {

    private String description;
    public String brand;
    public int buyingPrice;
    public int sellingPrice;

    public Accessory(String description, String brand, int buyingPrice, int sellingPrice) {
        this.description = description;
        this.brand = brand;
        this.buyingPrice = buyingPrice;
        this.sellingPrice = sellingPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public int calculateMarkup() {
        return this.sellingPrice - this.buyingPrice;
    }
}
