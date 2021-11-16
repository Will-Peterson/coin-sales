import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {
  
  year77visible: boolean = false;
  year78visible: boolean = false;
  year79visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showHide77() {
    this.year77visible = this.year77visible ? false : true;
  }

  showHide78() {
    this.year78visible = this.year78visible ? false : true;
  }
  showHide79() {
    this.year79visible = this.year79visible ? false : true;
  }

}
