import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoinsService } from 'src/app/coins.service';

@Component({
  selector: 'app-add-coin-form',
  templateUrl: './add-coin-form.component.html',
  styleUrls: ['./add-coin-form.component.css']
})
export class AddCoinFormComponent implements OnInit {

  constructor(private coin: CoinsService) { }

  addCoin = new FormGroup({
    year: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    mint: new FormControl('S', Validators.required),
    composition: new FormControl(''),
    variation: new FormControl(''),
    strike: new FormControl('PF', Validators.required),
    grade: new FormControl('70', Validators.required),
    company: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    shipping: new FormControl(''),
    label: new FormControl(''),
    offer: new FormControl(''),
    comments: new FormControl('')
  });

  successMessage: boolean = false;

  ngOnInit(): void {}

  saveCoinData() {
    this.coin.saveNewCoinData(this.addCoin.value).subscribe((coinData) => {
      this.successMessage = true;
      this.addCoin.reset({});
    });
  }

  clearForm() {
    this.addCoin.reset({});
  }

  removeSuccessMessage() {
    this.successMessage = false;
  }
}
