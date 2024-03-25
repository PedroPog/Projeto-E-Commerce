import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imagens = [
    "https://place-hold.it/700x100","https://place-hold.it/700x200","https://place-hold.it/700x300"
  ];
  posIndex=0;

  ngOnInit(): void {
    setInterval(()=>{
      this.posIndex = (this.posIndex+1)%this.imagens.length;
      console.log(this.posIndex);
    },2000);

  }
}
