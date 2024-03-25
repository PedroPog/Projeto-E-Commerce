import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { NotFoundPageComponent } from "src/app/utils/not-found-page/not-found-page.component";

export const AdminRotas: Routes = [
  {
    path:'',
    component:AdminComponent,
    data:{titulo:'Bem vindo!'}
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
