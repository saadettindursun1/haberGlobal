import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ekran',
  templateUrl: './admin-ekran.component.html',
  styleUrls: ['./admin-ekran.component.css']
})
export class AdminEkranComponent implements OnInit {

  rol:string;
  constructor() { }

  ngOnInit(): void {
    this.rolKontrol();
  }
  cikisYap(){
    localStorage.clear();
  }

  
 rolKontrol(){
  try{
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.rol=user[0].rol;
    if(this.rol!="Admin"){ location.pathname="yazarEkran"; }
  }
  catch{location.pathname="/admin";}

 }

}
