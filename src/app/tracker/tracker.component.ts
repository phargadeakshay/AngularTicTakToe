import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent implements OnInit {
  A = 'A';
  B = 'B';
  C = 'C';
  D = 'D';
  E = 'E';
  constructor() {}

  ngOnInit(): void {}
  expenses: any = [
    { user: this.A, value: 50 },
    { user: this.B, value: 90 },
    { user: this.C, value: 80 },
  ];
  users = [this.A, this.B, this.C, this.D, this.E];
  ngOnChanges(expense: any) {
    return this.expenses.map((expense: any) => {
      return this.users.map((user: any) => {
        if (user === expense.user) {
          return expense.value * ((this.users.length - 1) / this.users.length);
        } else {
          return (expense.value / this.users.length) * -1;
        }
      });
    });
  }
}
