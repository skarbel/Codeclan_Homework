import instruments.Guitar;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class GuitarTest {

    Guitar guitar;

    @Before
    public void before() {
        guitar = new Guitar("brown", "wood", "brand", 100, 150, "tin", 5);
    }

    @Test
    public void canPlay() {
        assertEquals("tin", guitar.play());
    }

    @Test
    public void canCalculate() {
        assertEquals(50, guitar.calculateMarkup());
    }
}
