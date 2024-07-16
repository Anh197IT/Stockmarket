import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../model/stock';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { Observable, of, throwError } from 'rxjs';
import { HttpServerService } from '../../services/http-service.service';
import { response } from 'express';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css'
})
export class StockListComponent implements OnInit{

  stocks: Stock[] = [];

  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
      this.getStocks();
  }

  getStocks(): void {
    this.httpServerService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }

  // public stocks$: Observable<Stock[]> = of([]);

  // constructor(private stockService: StockService) {}

  // ngOnInit(): void {
  //   this.stocks$ = this.stockService.getStocks();
  //   this.stockService.getStocksAsResponse()
  //     .subscribe((response) => {
  //         console.log('OBSERVE "response" RESPONSE is', response);
  //     });
    
  //   this.stockService.getStocksEvents()
  //     .subscribe((response) => {
  //         console.log('OBSERVE "events" RESPONSE is', response);
  //     }); 
      
  //   this.stockService.getStocksAsString()
  //     .subscribe((response) => {
  //       console.log('Response Type "text" RESPONSE is', response);
  //     });
    
  //   this.stockService.getStocksAsBlob()
  //     .subscribe((response) => {
  //         console.log('Response Type "blob" RESPONSE is', response);
  //     });
  // }

  // updateStock(stockId: number, updatedStock: any): void {
  //   this.HttpServerService.updateStock(stockId, updatedStock)
  //     .subscribe(
  //       response => {
  //         // Xử lý kết quả sau khi cập nhật thành công
  //         console.log('Cập nhật cổ phiếu thành công:', response);
  //       },
  //       error => {
  //         // Xử lý lỗi nếu có
  //         console.error('Lỗi khi cập nhật cổ phiếu:', error);
  //       }
  //     );
  // }

  // // Phương thức để xóa một cổ phiếu
  // deleteStock(stockId: number): void {
  //   this.httpServerService.deleteStock(stockId)
  //     .subscribe(
  //       response => {
  //         // Xử lý kết quả sau khi xóa thành công
  //         console.log('Xóa cổ phiếu thành công:', response);
  //       },
  //       error => {
  //         // Xử lý lỗi nếu có
  //         console.error('Lỗi khi xóa cổ phiếu:', error);
  //       }
  //     );
  // }
}