import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/coins.service';

@Component({
  selector: 'app-year1977',
  templateUrl: './year1977.component.html',
  styleUrls: ['./year1977.component.css']
})
export class Year1977Component implements OnInit {

 

  constructor(private coins: CoinsService) { }
  coinData: any = [];

  ngOnInit(): void {
    this.coins.getFullList().subscribe((db) => {
      this.coinData = db;
      console.log(this.coinData)
    })
  }

  // display() {
  //   this.coinData
  // }

}
