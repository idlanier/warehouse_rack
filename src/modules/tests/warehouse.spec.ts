import { Warehouse } from '../warehouse';

describe('Warehouse Class', () => {
  it('should create an object warehouse with given parameters', () => {
    const warehouse = new Warehouse(3);
    expect(warehouse).toBeDefined();
    expect(warehouse.racks.length).toBe(3);
  });
});
