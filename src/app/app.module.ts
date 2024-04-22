import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropetyComponent } from './input-propety/input-propety.component';
import { OutputPropetyComponent } from './output-propety/output-propety.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { FundoAmareloDirective } from './diretivas/fundo-amarelo.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    InputPropetyComponent,
    OutputPropetyComponent,
    CicloComponent,
    DiretivasComponent,
    FundoAmareloDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
