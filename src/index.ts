import * as readline from 'readline';
import * as fs from 'fs';
import { Warehouse } from './modules/warehouse';

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

function getStatusRack(warehouse: Warehouse) {}

function addRack(sku: string, expDate: string) {}

function removeRack(rackNo: number) {}

function getSkuProductByExpDate(expDate: string) {}

function getSlotNumberProductByExpDate(expDate: string) {}

function findSlotNumberProductBySku(sku: string) {}
