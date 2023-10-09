import { Product } from './product';

export class Warehouse {
  racks: Array<Product> = [];

  constructor(length: number) {
    this.racks = new Array<Product>(length);
    for (let i = 0; i < length; i++) {
      this.racks[i] = new Product(
        String(i + 1),
        '',
        new Date('').toDateString()
      );
    }
  }

  add(product: Product) {}

  remove(rackNo: number) {}

  getByExpDate(expDate: string) {}

  findBySku(sku: string) {}

  findEmptyRack() {}
}
