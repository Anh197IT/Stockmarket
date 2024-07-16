import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    // Cung cấp các tham số cho constructor của Stock
    const stock = new Stock(
      1, // id
      'Example Stock', // name
      'EXM', // code
      100, // price
      90, // previousPrice
      'Example Exchange', // exchange
      false // favorite
    );
    
    expect(stock).toBeTruthy();
  });
});