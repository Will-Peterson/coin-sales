import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/coins.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})

export class MainListComponent implements OnInit {
  
  constructor(private coins: CoinsService) { }
  
  coinData: any = [];

  ngOnInit(): void {
    this.coins.getFullList().subscribe((db) => {
      this.coinData = db;
    })
  }

  deleteCoin(coin_id: number) {
    this.coins.deleteCoinData(coin_id).subscribe((result) => {
      this.ngOnInit();
    })
  }

  key: string = 'id';
  reverse: boolean = false;
  caseInsensitive: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
