export class Product {
  slotNo: string;
  sku: string;
  expDate: string;

  constructor(slotNo: string, sku: string, expDate: string) {
    this.slotNo = slotNo;
    this.sku = sku;
    this.expDate = expDate;
  }
}
