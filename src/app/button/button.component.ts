import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  song: string[] = [
    'Группа крови - на рукаве,',
    'Мой порядковый номер - на рукаве,',
    'Пожелай мне удачи в бою, пожелай мне:',
    'Не остаться в этой траве,',
    'Не остаться в этой траве.',
    'Пожелай мне удачи, пожелай мне удачи!'
  ]
  constructor() { }

  ngOnInit(): void{
  
  }

}
