import { Routes } from "@angular/router";
import { LojaComponent } from "./loja.component";
import { NotFoundPageComponent } from "src/app/utils/not-found-page/not-found-page.component";
import { HomeComponent } from "./components/home/home.component";

export const LojaRotas: Routes = [
  {
    path:'',
    component:LojaComponent,
    children:[
      {path:'',component:HomeComponent,data:{titulo:'Bem vindo!'}}
    ]
  },
  {
    path:'**',
    redirectTo:'page-not-found'
  },
  {
    path:'page-not-found',
    component:NotFoundPageComponent
  }
]
