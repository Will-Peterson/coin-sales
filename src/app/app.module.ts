import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddCoinComponent } from './pages/add-coin/add-coin.component';
import { ViewDbComponent } from './pages/view-db/view-db.component';
import { AddCoinFormComponent } from './components/add-coin-form/add-coin-form.component';
import { MasterListComponent } from './components/master-list/master-list.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { VersionComponent } from './pages/version/version.component';
import { EditComponent } from './pages/edit/edit.component';
import { EditCoinFormComponent } from './components/edit-coin-form/edit-coin-form.component';
import { CoinDetailsComponent } from './pages/coin-details/coin-details.component';
import { Year1977Component } from './components/year1977/year1977.component';
import { Year1978Component } from './components/year1978/year1978.component';
import { Year1979Component } from './components/year1979/year1979.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddCoinComponent,
    ViewDbComponent,
    AddCoinFormComponent,
    MasterListComponent,
    MainListComponent,
    VersionComponent,
    EditComponent,
    EditCoinFormComponent,
    CoinDetailsComponent,
    Year1977Component,
    Year1978Component,
    Year1979Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
