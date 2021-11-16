import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCoinComponent } from './pages/add-coin/add-coin.component';
import { ViewDbComponent } from './pages/view-db/view-db.component';
import { EditComponent } from './pages/edit/edit.component';
import { VersionComponent } from './pages/version/version.component';
import { CoinDetailsComponent } from './pages/coin-details/coin-details.component';

const routes: Routes = [
  {
    path: 'add-coin',
    component: AddCoinComponent
  },
  {
    path: 'view-db',
    component: ViewDbComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'version',
    component: VersionComponent
  },
  {
    path: 'coin-details',
    component: CoinDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
