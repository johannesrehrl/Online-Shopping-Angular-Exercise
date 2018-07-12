import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutComponent } from './about/about.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { TransactionComponent } from './transaction/transaction.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ShoppingCartComponent,
    AboutComponent,
    TransactionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
