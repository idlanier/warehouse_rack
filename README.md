# Warehouse Rack

Warehouse Rack is an simple app to store product with desired length.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install **Warehouse Rack** depedencies.

```bash
npm install
```

Run this command to build the apps

```
npm run build
```

## Usage

### Command

`create_warehouse_rack [Rack Length]` for creating warehouse rack \
`rack [SKU] [Exp. Date]` for insert product into rack\
`rack_out [Slot Number]` for removing a product from the rack by its rack number\
`status` for displaying current rack status \
`sku_numbers_for_product_with_exp_date [Exp. Date]` for searching SKU number by its expiration date\
`slot_numbers_for_product_with_exp_date [Exp. Date]` for searching slot number by its expiration date\
`slot_number_for_sku_number [SKU]` for searching slot number by SKU number

Run the apps

```
npm run start
```

or

```
npm run start file_input.txt
```

Note: Please put your file inside `files/..`

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
