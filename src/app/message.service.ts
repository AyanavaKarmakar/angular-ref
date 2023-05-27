import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }

  /**
   * @see clear() method is used to clear the messages array
   */
  clear(): void {
    this.messages = [];
  }
}
