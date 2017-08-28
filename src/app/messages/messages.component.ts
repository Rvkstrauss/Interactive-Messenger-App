import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  currentMessages: any[];
  currentUser: any;
  message;
  currentMessagesReverse: any[];

  constructor(
    private auth: AuthService,
    private messageService: MessageService,
  ) {  }
  ngOnInit() {
    this.messageService.getMessages().subscribe(
      messages => this.currentMessages = messages
    );
    if (this.currentMessages) {
      this.currentMessagesReverse = this.currentMessages.reverse();
    }
    this.auth.getAuthState().subscribe(user => {
      this.currentUser = user;
    });
  }

  messageSend(formValue) {
    const email = this.currentUser ? this.currentUser.email : 'anonymous';
    const newMessage = Object.assign(formValue, { user: email || 'anonymous', message: this.message});
    this.messageService.submitMessage(newMessage);
    this.message = '';
  }


}
