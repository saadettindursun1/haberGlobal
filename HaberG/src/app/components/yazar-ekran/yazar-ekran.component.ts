import { uyeler } from './../../models/uyeler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yazar-ekran',
  templateUrl: './yazar-ekran.component.html',
  styleUrls: ['./yazar-ekran.component.css']
})
export class YazarEkranComponent implements OnInit {

  yazarId:number;
  adsoyad:string;
  uyem:uyeler=new uyeler();
  constructor() { }

  ngOnInit(): void {
    this.rolKontrol();
  }
  cikisYap(){
    localStorage.clear();
    location.pathname="/yazar";
  }


  rol:string;
  rolKontrol(){
   try{
     var user: any = JSON.parse(localStorage.getItem("user"));
     this.rol=user[0].rol;
     this.yazarId=user[0].uyeid;
     this.adsoyad=user[0].adsoyad;
     if(this.rol=="Admin"){ location.pathname="adminEkran"; }
   }
   catch{location.pathname="/yazar";}
 
  }
}
