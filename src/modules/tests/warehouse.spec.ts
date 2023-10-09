import { Product } from '../product';
import { Warehouse } from '../warehouse';

describe('Warehouse Class', () => {
  it('should create an object warehouse with given parameters', () => {
    const warehouse = new Warehouse(3);
    expect(warehouse).toBeDefined();
    expect(warehouse.racks.length).toBe(3);
  });

  it('should add rack slot inside warehouse', () => {
    const warehouse = new Warehouse(3);
    const productSlotNo = '1';
    const productSku = 'ZG11AQA';
    const productExpDate = '2024-02-28';
    const newProduct = new Product(productSlotNo, productSku, productExpDate);
    warehouse.add(newProduct);
    expect(warehouse).toBeDefined();
    expect(warehouse.racks.length).toBe(3);
    expect(warehouse.racks[0]).toBe(newProduct);
  });
});
