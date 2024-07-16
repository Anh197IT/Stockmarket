import { Stock } from './../../model/stock';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { StockListComponent } from '../stock-list/stock-list.component';
import { Observable } from 'rxjs';
import { StockService } from '../../services/stock.service';
import { HttpServerService } from '../../services/http-service.service';
import { error } from 'console';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent {

  @Input() public stock!: Stock;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<any>();
  @Output() toggleFavorite: EventEmitter<any> = new EventEmitter<any>(); // Output để thông báo sự kiện

  public isUpdateFormVisible: boolean = false;

  constructor(
    private stockService: StockService, 
    private HttpServerService: HttpServerService) { }
  
  // onToggleFavorite(event: any){
  //   this.stockService.toggleFavorite(this.stock)
  //     .subscribe((stock) => this.stock.favorite = !this.stock.favorite);
  // }

  deleteStock(stock: Stock) {
    this.HttpServerService.deleteStock(stock.id)
      .subscribe((result) => {location.reload()});
  }

  toggleUpdateForm() {
    this.isUpdateFormVisible = !this.isUpdateFormVisible;
  }

  updateStock(event: any) {
    // var inputdata = {
    //   name: this.stock.name,
    //   code : this.stock.code,
    //   price: this.stock.price,
    //   previous: this.stock.previousPrice,
    // }
    this.HttpServerService.updateStock(this.stock.id, this.stock).subscribe((result: any) => {
        location.reload();
      }, (err) => {
        console.error('Error');
      });
  }

  onToggleFavorite(event: MouseEvent): void {
    event.stopPropagation();
    
    // Lưu trạng thái yêu thích hiện tại của cổ phiếu
    const currentFavoriteState = this.stock.favorite;
  
    // Đảo ngược trạng thái favorite ngay lập tức để cập nhật giao diện
    this.stock.favorite = !this.stock.favorite;
  
    // Gửi yêu cầu cập nhật đến máy chủ chỉ với trạng thái favorite mới của cổ phiếu
    this.HttpServerService.toggleFavorite(this.stock)
      .subscribe(
        (response) => {
          console.log('Stock updated successfully!', response);
          // Trạng thái đã được cập nhật thành công trên máy chủ, không cần phải làm gì cả
        },
        (error) => {
          console.error('Failed to update stock:', error);
          // Nếu gặp lỗi, phục hồi trạng thái yêu thích trước đó trên giao diện
          this.stock.favorite = currentFavoriteState;
        }
      );
  }

  onDetails(stock: Stock): void {
    this.HttpServerService.getStockDetails(stock.id)
    .subscribe((response) => {
        console.log('Stock details:', response);
        const stockDetail = `Stock Details: \nStock Name: ${this.stock.name}\nStock Code: ${this.stock.code}\nStock Price: $${this.stock.price}\nExchange: ${this.stock.exchange}`;
        alert(stockDetail);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}