import { sonuc } from './../../models/sonuc';
import { ApiService } from './../../services/api.service';
import { haberler } from './../../models/haberler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-haber',
  templateUrl: './admin-haber.component.html',
  styleUrls: ['./admin-haber.component.css']
})
export class AdminHaberComponent implements OnInit {

  displayedColumns=['haberKategoriAdi','haberBaslik','haberOkunma','haberResim','haberTarih','yazarlar','Silme'];
  dataSource:any;
  haberlerim:haberler[];
  rol:string;
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
    this.rolKontrol();
    this.haberListele();
  }
  rolKontrol(){
    try{
      var user: any = JSON.parse(localStorage.getItem("user"));
      this.rol=user[0].rol;
      if(this.rol!="Admin"){ location.pathname="yazarEkran"; }
    }
    catch{location.pathname="/admin";}
  
   }

  haberListele(){
    this.apiServis.haberListele().subscribe((d:haberler[])=>{
      this.haberlerim=d;
      console.log(d);
      
    })
  }

  haberSil(id:number){
    this.apiServis.haberSil(id).subscribe((s:sonuc)=>{
      s.mesaj="Silme Başarılı";
      s.islem=true;
      this.haberListele();
    })
  }
}
