import { Product } from '../product';

describe('Product Class', () => {
  it('should create an object product with given parameters', () => {
    const productSlotNo = '1';
    const productSku = 'ZG11AQA';
    const productExpDate = '2024-02-28';
    const product = new Product(productSlotNo, productSku, productExpDate);
    expect(product).toBeDefined();
    expect(product.slotNo).toBe(productSlotNo);
    expect(product.sku).toBe(productSku);
    expect(product.expDate).toBe(productExpDate);
  });
});
