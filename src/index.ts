import * as readline from 'readline';
import * as fs from 'fs';

const args = process.argv;

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
      break;
    case 'rack':
      break;
    case 'rack_out':
      break;
    case 'status':
      break;
    case 'sku_numbers_for_product_with_exp_date':
      break;
    case 'slot_numbers_for_product_with_exp_date':
      break;
    case 'slot_number_for_sku_number':
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
