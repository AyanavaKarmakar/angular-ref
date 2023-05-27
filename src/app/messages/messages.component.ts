import { MessageService } from './../message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
