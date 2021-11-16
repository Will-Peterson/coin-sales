import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoinsService } from 'src/app/coins.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-coin-form',
  templateUrl: './edit-coin-form.component.html',
  styleUrls: ['./edit-coin-form.component.css']
})
export class EditCoinFormComponent implements OnInit {

  constructor(private coin: CoinsService, private router: ActivatedRoute) { }

  editCoin = new FormGroup({
    year: new FormControl(''),
    type: new FormControl(''),
    mint: new FormControl(''),
    variation: new FormControl(''),
    strike: new FormControl(''),
    grade: new FormControl(''),
    company: new FormControl(''),
    date: new FormControl(''),
    price: new FormControl(''),
    shipping: new FormControl(''),
    label: new FormControl(''),
    offer: new FormControl(''),
    comments: new FormControl('')
  })

  successMessage: boolean = false;

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.coin.getCoinDataById(this.router.snapshot.params.id).subscribe((currentData: any) => {
      this.editCoin = new FormGroup({
        year: new FormControl(currentData['year']),
        type: new FormControl(currentData['type']),
        mint: new FormControl(currentData['mint']),
        variation: new FormControl(currentData['variation']),
        strike: new FormControl(currentData['strike']),
        grade: new FormControl(currentData['grade']),
        company: new FormControl(currentData['company']),
        date: new FormControl(currentData['date']),
        price: new FormControl(currentData['price']),
        shipping: new FormControl(currentData['shipping']),
        label: new FormControl(currentData['label']),
        offer: new FormControl(currentData['offer']),
        comments: new FormControl(currentData['comments'])
      })
    });
  }

  updateCoin() {
    this.coin.UpdateCoinData(this.router.snapshot.params.id, this.editCoin.value).subscribe((result) => {
      this.successMessage = true;
    });
  }

  removeSuccessMessage() {
    this.successMessage = false;
  }
}