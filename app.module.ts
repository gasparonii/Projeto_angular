import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendaPassagensComponent } from './venda-passagens/venda-passagens.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ResumoService } from './resumo/resumo.service';

@NgModule({
  declarations: [
    AppComponent,
    VendaPassagensComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    ResumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResumoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
