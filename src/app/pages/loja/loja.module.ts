import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaComponent } from './loja.component';
import { RouterModule } from '@angular/router';
import { LojaRotas } from './loja.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AlertsComponent } from 'src/app/utils/alerts/alerts.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    LojaComponent,
    HomeComponent,
    AlertsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule.forChild(LojaRotas)
  ]
})
export class LojaModule { }
