import { Routes } from "@angular/router";
import { NotFoundPageComponent } from "./utils/not-found-page/not-found-page.component";
export const AppRotas: Routes = [

  {
    path:'',
    redirectTo:'loja',
    pathMatch:'full'
  },
  {
    path:'loja',
    loadChildren:()=>import('./pages/loja/loja.module').then(x=>x.LojaModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./pages/admin/admin.module').then(x=>x.AdminModule)
  },
  {
    path:'**',
    redirectTo:'page-not-found'
  },
  {
    path:'page-not-found',
    component:NotFoundPageComponent
  }
];
