import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  num = 1;
  num1 = 1;
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
    setInterval(() => {
      this.num += 1;
      this.num1 += 1;
      if (this.num1 === 36) this.num1 = 1;
    }, 1000)
  }

}
