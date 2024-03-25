import { Component } from '@angular/core';
import { MenuSide } from './Model/modelGeral.model';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent {
  Title = "E-Commerce";
  date = new Date();
  ano = this.date.getFullYear();
  menu:MenuSide[] = [];

  constructor(
  ){
    this.menu=[
      {icon:"home",label:"HOME",link:"/"},
      {icon:"sell",label:"Vendas",link:"/"}
    ]
  }

  ToastOk(msg:String){
    Toastify({
      text:msg as string,
      duration:3000,
      gravity:"top",
      position:"left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(358deg, #62ab4b, #4aed03)",
      },
    }).showToast();
  }
  ToastError(msg:String){
    Toastify({
      text:msg as string,
      duration:3000,
      gravity:"top",
      position:"left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(358deg, #ab4b4b, #ed0303)",
      },
    }).showToast();
  }
}
