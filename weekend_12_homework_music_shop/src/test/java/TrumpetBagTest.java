import accessories.TrumpetBag;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TrumpetBagTest {

    TrumpetBag trumpetBag;

    @Before
    public void before() {
        trumpetBag = new TrumpetBag("horse hair", "popular brand", 10, 15, "L");
    }

    @Test
    public void canGetTrumpetBag() {
        assertEquals("L", trumpetBag.getTrumpetBag());
    }

    @Test
    public void canCalculate() {
        assertEquals(5, trumpetBag.calculateMarkup());
    }
}
