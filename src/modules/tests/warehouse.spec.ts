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

  it('should throw an error because rack length is 0', () => {
    const warehouse = new Warehouse(0);
    const productSlotNo = '1';
    const productSku = 'ZG11AQA';
    const productExpDate = '2024-02-28';
    const newProduct = new Product(productSlotNo, productSku, productExpDate);
    const fn = () => {
      warehouse.add(newProduct);
    };
    expect(fn).toThrowError();
  });

  it('rackNo should return -1 ', () => {
    const warehouse = new Warehouse(0);

    let emptyRackNo = warehouse.findEmptyRack();
    expect(warehouse).toBeDefined();
    expect(warehouse.racks.length).toBe(0);
    expect(emptyRackNo).toBe(-1);
  });

  it('rackNo should return 0 ', () => {
    const warehouse = new Warehouse(3);

    let emptyRackNo = warehouse.findEmptyRack();
    expect(warehouse).toBeDefined();
    expect(warehouse.racks.length).toBe(3);
    expect(emptyRackNo).toBe(0);
  });

  it('rackNo should return 1 ', () => {
    const warehouse = new Warehouse(3);

    const productSlotNoOne = '1';
    const productSkuOne = 'ZG11AQA';
    const productExpDateOne = '2024-02-28';
    const newProductOne = new Product(
      productSlotNoOne,
      productSkuOne,
      productExpDateOne
    );
    warehouse.add(newProductOne);

    const emptyRackNo = warehouse.findEmptyRack();
    expect(warehouse).toBeDefined();
    expect(warehouse.racks.length).toBe(3);
    expect(emptyRackNo).toBe(1);
  });

  it('rackNo should return 2 ', () => {
    const warehouse = new Warehouse(3);

    const productSlotNoOne = '1';
    const productSkuOne = 'ZG11AQA';
    const productExpDateOne = '2024-02-28';
    const newProductOne = new Product(
      productSlotNoOne,
      productSkuOne,
      productExpDateOne
    );
    warehouse.add(newProductOne);

    const productSlotNoTwo = '2';
    const productSkuTwo = 'ZG11AQB';
    const productExpDateTwo = '2024-02-21';
    const newProductTwo = new Product(
      productSlotNoTwo,
      productSkuTwo,
      productExpDateTwo
    );
    warehouse.add(newProductTwo);

    const emptyRackNo = warehouse.findEmptyRack();
    expect(warehouse).toBeDefined();
    expect(warehouse.racks.length).toBe(3);
    expect(emptyRackNo).toBe(2);
  });

  it('should remove rack slot inside warehouse', () => {
    const warehouse = new Warehouse(3);
    const productSlotNo = '1';
    const productSku = 'ZG11AQA';
    const productExpDate = '2024-02-28';
    const newProduct = new Product(productSlotNo, productSku, productExpDate);
    warehouse.add(newProduct);

    warehouse.remove(Number(productSlotNo));
    expect(warehouse).toBeDefined();
    expect(warehouse.racks.length).toBe(3);
    expect(warehouse.racks[0]).toStrictEqual(
      new Product('', '', new Date('').toDateString())
    );
  });

  it('should get list filtered rack by desired exp date', () => {
    const warehouse = new Warehouse(3);
    const productSlotNoOne = '1';
    const productSkuOne = 'ZG11AQA';
    const productExpDateOne = '2024-02-28';
    const newProductOne = new Product(
      productSlotNoOne,
      productSkuOne,
      productExpDateOne
    );
    warehouse.add(newProductOne);

    const productSlotNoTwo = '2';
    const productSkuTwo = 'ZG11AQB';
    const productExpDateTwo = '2024-02-21';
    const newProductTwo = new Product(
      productSlotNoTwo,
      productSkuTwo,
      productExpDateTwo
    );
    warehouse.add(newProductTwo);

    const filteredRacks = warehouse.getByExpDate(productExpDateOne);
    expect(filteredRacks[0]).toBe(newProductOne);
  });

  it('should get single filtered rack by desired exp date', () => {
    const warehouse = new Warehouse(3);
    const productSlotNoOne = '1';
    const productSkuOne = 'ZG11AQA';
    const productExpDateOne = '2024-02-28';
    const newProductOne = new Product(
      productSlotNoOne,
      productSkuOne,
      productExpDateOne
    );
    warehouse.add(newProductOne);

    const productSlotNoTwo = '2';
    const productSkuTwo = 'ZG11AQB';
    const productExpDateTwo = '2024-02-21';
    const newProductTwo = new Product(
      productSlotNoTwo,
      productSkuTwo,
      productExpDateTwo
    );
    warehouse.add(newProductTwo);

    const filteredRacks = warehouse.findBySku(productSkuTwo);
    expect(filteredRacks).toBe(newProductTwo);
  });
});
