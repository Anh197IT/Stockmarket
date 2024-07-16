import { HttpServerService } from '../../services/http-service.service';
import { Component } from '@angular/core';
import {Stock} from '../../model/stock';
import { StockService } from '../../services/stock.service';
import { MessageService } from '../../services/message.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.css'
})
export class CreateStockComponent {

  public stock!: Stock;

  public confirmed = false;
  public message: string = '';
  public exchanges  = ['NYSE', 'NASDAQ', 'OTHER'];

  constructor(private HttpServerService: HttpServerService , private router: Router) {
      this.initializeStock();
  }

  initializeStock() {
    this.stock = {
      id: 0,
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favorite: false
    };
  }
          
 setStockPrice(price: any){
  this.stock.price = price;
  this.stock.previousPrice = price;
 }
 
 createStock(stockForm: any): void {
  if(stockForm.valid) {
    this.HttpServerService.postStock(this.stock)
    .subscribe((result: any) => {
      this.message = result.msg;
      this.initializeStock();
      window.location.reload();
    });
  }
 else {
    console.error('Stock form is in an invalid state');
 }
}

// updateStock(stock: any) {
//   this.HttpServiceService.updateStock(this.stock.id, stock)
//     .subscribe((updatedStock: Stock) => {
//       //
//       this.stock = updatedStock;
//     });
// }
}