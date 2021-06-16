import { sonuc } from './../../models/sonuc';
import { ApiService } from './../../services/api.service';
import { iletisim } from './../../models/iletisim';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-iletisim',
  templateUrl: './admin-iletisim.component.html',
  styleUrls: ['./admin-iletisim.component.css']
})
export class AdminIletisimComponent implements OnInit {

  displayedColumns=['iletisimMail','iletisimIcerik','Silme'];
  dataSource:any;
  iletiler:iletisim[];
  rol:string;
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
    this.rolKontrol();
    this.iletisimListele();
  }

  rolKontrol(){
    try{
      var user: any = JSON.parse(localStorage.getItem("user"));
      this.rol=user[0].rol;
      if(this.rol!="Admin"){ location.pathname="yazarEkran"; }
    }
    catch{location.pathname="/admin";}
  
   }

  iletisimListele(){
this.apiServis.iletiListele().subscribe((d:iletisim[])=>{
  this.iletiler=d;
  console.log(d);
})
  }

  iletiSil(id:number){
this.apiServis.iletisimSil(id).subscribe((s:sonuc)=>{
  this.iletisimListele();
})
  }

}
