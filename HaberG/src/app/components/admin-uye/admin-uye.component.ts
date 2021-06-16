import { sonuc } from './../../models/sonuc';
import { uyeler } from './../../models/uyeler';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-uye',
  templateUrl: './admin-uye.component.html',
  styleUrls: ['./admin-uye.component.scss']
})
export class AdminUyeComponent implements OnInit {

  uyelerim:uyeler[];
  displayedColumns=['rol','adsoyad','haberAlan','haberSayisi','konum','mail','telefon'];
  dataSource:any;
  yeniRol:string;
  rol:string;
  yazarim:uyeler=new uyeler();
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
    this.rolKontrol();
    this.uyeListele();
  }

  rolKontrol(){
    try{
      var user: any = JSON.parse(localStorage.getItem("user"));
      this.rol=user[0].rol;
      if(this.rol!="Admin"){ location.pathname="yazarEkran"; }
    }
    catch{location.pathname="/admin";}
  
   }

  durumGuncelle(id:number,rol:string){
  
  if (rol=="Yazar"){this.yeniRol="Beklemede";}
  if (rol=="Beklemede"){this.yeniRol="Yazar";}
  if (rol=="Admin"){window.alert("Admin Rolünü Değiştiremezsiniz :)");return}
  this.yazarim.rol=this.yeniRol;
  this.yazarim.uyeId=id;
  this.apiServis.yazarDurumGuncelle(id,this.yeniRol).subscribe((s:sonuc)=>{
    s.islem=true;
    s.mesaj="Güncelleme Başarılı";
    console.log(s);
    window.alert(id+" id kullanıcının rolü '"+this.yeniRol+"' olarak Değiştirildi.");
    this.uyeListele();
  })
  }

  uyeListele(){
this.apiServis.uyeListele().subscribe((d:uyeler[])=>{

  this.uyelerim=d;
  console.log(d);
})
  }

}
