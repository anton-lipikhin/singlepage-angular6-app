import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContractNumberComponent } from './contract-number/contract-number.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextValidatorDirective } from './validators/text-validator.directive';
import { UppercaseDirective } from './validators/uppercase.directive';
import { HttpClientModule }    from '@angular/common/http';
import { PermutationComponent } from './permutation/permutation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractNumberComponent,
    HomeComponent,
    ResultComponent,
    TextValidatorDirective,
    UppercaseDirective,
    PermutationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
