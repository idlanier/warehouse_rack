import * as readline from 'readline';
import * as fs from 'fs';
import { Warehouse } from './modules/warehouse';
import { Product } from './modules/product';

const args = process.argv;

let warehouse: Warehouse = new Warehouse(0);
let rl: readline.Interface;

if (args[2] !== undefined) {
  const fileStream = fs.createReadStream(args[2]);
  fileStream;
  rl = readline.createInterface({
    input: fileStream,
    output: process.stdout,
    crlfDelay: Infinity,
  });
} else {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    crlfDelay: Infinity,
  });
}

rl.prompt();

rl.on('line', function (line) {
  const input = line.split(' ');
  switch (input[0].trim()) {
    case 'create_warehouse_rack':
      createWarehouse(Number(input[1]));
      console.log(`Created a warehouse rack with ${input[1]} slots`);
      break;
    case 'rack':
      addRack(input[1], input[2]);
      break;
    case 'rack_out':
      removeRack(Number(input[1]));
      break;
    case 'status':
      getStatusRack(warehouse);
      break;
    case 'sku_numbers_for_product_with_exp_date':
      getSkuProductByExpDate(input[1]);
      break;
    case 'slot_numbers_for_product_with_exp_date':
      getSlotNumberProductByExpDate(input[1]);
      break;
    case 'slot_number_for_sku_number':
      findSlotNumberProductBySku(input[1]);
      break;
    case 'exit':
      process.exit(0);
    default:
      console.log('Please Try Again');
      break;
  }
  rl.prompt();
}).on('close', function () {
  process.exit(0);
});

function createWarehouse(rackLength: number) {
  warehouse = new Warehouse(rackLength);
}

function addRack(sku: string, expDate: string) {
  let rackNo = warehouse.findEmptyRack();
  if (rackNo !== -1) {
    const newProduct = new Product(
      String(rackNo + 1),
      sku,
      new Date(expDate).toISOString().slice(0, 10)
    );
    warehouse.add(newProduct);
    console.info('Allocated slot number: ', rackNo + 1);
  } else {
    console.info('Sorry, rack is full');
  }
}

function removeRack(rackNo: number) {
  warehouse.remove(rackNo);
  console.info(`Slot number ${rackNo} is free`);
}

function getStatusRack(warehouse: Warehouse) {
  console.info('Slot No. \t SKU No. \t Exp Date \t');
  if (warehouse.racks.length > 0) {
    for (const rack of warehouse.racks) {
      if (rack.sku != '') {
        const expDate =
          rack.expDate.toString() !== 'Invalid Date' ? rack.expDate : '';
        console.info(`${rack.slotNo} \t\t ${rack.sku} \t ${expDate} `);
      }
    }
  }
}

function getSkuProductByExpDate(expDate: string) {
  const racks = warehouse.getByExpDate(expDate);
  let result = '';

  for (const rack of racks) {
    result += rack.sku + ' ';
  }

  console.info(result);
}

function getSlotNumberProductByExpDate(expDate: string) {
  const racks = warehouse.getByExpDate(expDate);
  let result = '';

  for (const rack of racks) {
    result += rack.slotNo + ' ';
  }

  console.info(result);
}

function findSlotNumberProductBySku(sku: string) {}
