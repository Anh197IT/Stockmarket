import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Stock Market App';

  constructor(public messageService: MessageService){}
  ngOnInit(): void {
    this.messageService.message = 'Hello Message Serive';
  }

}
