import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Stock } from '../model/stock';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import test from 'node:test';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = '/api/stocks';

  constructor(private http: HttpClient) {}
  //lấy danh sách cổ phiếu
  getStocks() : Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock', {
      headers: new HttpHeaders()
        .set('Authorization', 'MyAuthorizationHeaderValue')
        .set('X-example-header', 'TestValue'),
        params: {
          q: 'test',
          test: 'value'
        }
    });
  }

  getStocksAsResponse(): Observable<HttpResponse<Stock[]>> {
    return this.http.get<Stock[]>('api/stock', {
      observe: 'response'
    });
  }

  getStocksEvents(): Observable<HttpEvent<any>> {
    return this.http.get('/api/stock', {
      observe: 'events'
    });
  }

  getStocksAsString(): Observable<string> {
    return this.http.get('/api/stock', {
      responseType: 'text'
    });
  }

  getStocksAsBlob(): Observable<Blob> {
    return this.http.get('/api/stock', {
      responseType: 'blob'
    });
  }
  //tạo cổ phiếu mới trên máy chủ
  createStock(stock: Stock) : Observable<any> {
    return this.http.post('/api/stock', stock);
  }

  
//thay đổi trạng tháu yêu thích mới trong yêu cầu
  toggleFavorite(stock: Stock): Observable<Stock> {
    return this.http.patch<Stock>('/api/stock/' + stock.code,
      {
        favorite: !stock.favorite
      });
  }
}