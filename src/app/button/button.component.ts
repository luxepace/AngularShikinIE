import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
 
  public notifySuccess (): void {
    Notify.success('Успех', () => {
      alert('Успех');
      });
  }
  public notifyFailure (): void {
    Notify.failure('Провал', () => {
      alert('Успешный провал');
      });
  }
  
}

