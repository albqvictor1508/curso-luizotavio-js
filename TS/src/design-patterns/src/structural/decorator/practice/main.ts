import { ProductDecorator } from "./product/product-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { Tshirt } from "./product/tshirt";

const tshirt = new Tshirt("seaway", 10);
const decoratedTshirt = new ProductDecorator(tshirt);
const tshirtWithStamp = new ProductStampDecorator(tshirt);
