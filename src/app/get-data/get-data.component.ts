import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../services/http-service.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrl: './get-data.component.css'
})
export class GetDataComponent implements OnInit {
 constructor(private HttpServerService : HttpServerService){}
 ngOnInit(): void {
     this.HttpServerService.getStocks().subscribe((data)=>{
      console.log('stock',data);
     })
 }
}
