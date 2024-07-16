import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../services/http-service.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.css'
})
export class PostDataComponent implements OnInit {
  constructor(private HttpServerService :HttpServerService){}

  ngOnInit(): void {
    const body={"name": " Last Stock Company",
    "code": "LSC",
    "price": "876",
    "PreviousPrice": "765",
    "exchange": "NYSE",
    "favorite": "false"};
    this.HttpServerService.postStock(body).subscribe((data)=>{
      console.log('postStock', data);
    })
  }
}
