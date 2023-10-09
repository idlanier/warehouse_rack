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

  add(product: Product): void {
    const rackNo = this.findEmptyRack();
    if (rackNo === -1) {
      throw Error();
    }
    this.racks[rackNo] = product;
  }

  remove(rackNo: number): void {
    this.racks[rackNo - 1] = new Product('', '', new Date('').toDateString());
  }

  getByExpDate(expDate: string): Product[] | [] {
    return [];
  }

  findBySku(sku: string): Product | undefined {
    return undefined;
  }

  findEmptyRack(): number {
    let rackNo = -1;
    for (let i = 0; i < this.racks.length; i++) {
      if (this.racks[i].sku === '') {
        rackNo = i;
        return rackNo;
      }
    }
    return rackNo;
  }
}
