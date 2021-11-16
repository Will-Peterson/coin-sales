import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  url = 'http://localhost:3000/coins';

  constructor(private http: HttpClient) { }

  getFullList() {
    return this.http.get(this.url);
  }

  saveNewCoinData(data: any) {
    return this.http.post(this.url, data);
  }

  deleteCoinData(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCoinDataById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  UpdateCoinData(id: number, data: any){
    return this.http.put(`${this.url}/${id}`, data);
  }

}
