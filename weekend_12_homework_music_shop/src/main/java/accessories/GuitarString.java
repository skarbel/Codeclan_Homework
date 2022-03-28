package accessories;

public class GuitarString extends Accessory {

    private String material;

    public GuitarString(String description, String brand, int buyingPrice, int sellingPrice, String material) {
        super(description, brand, buyingPrice, sellingPrice);
        this.material = material;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }
}
