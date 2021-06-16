import { sonuc } from 'src/app/models/sonuc';
import { haberler } from './../../models/haberler';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-haber-duzenle',
  templateUrl: './haber-duzenle.component.html',
  styleUrls: ['./haber-duzenle.component.css']
})
export class HaberDuzenleComponent implements OnInit {
  haber:haberler[];
  yazarId:number;
  sonucum:sonuc;
  bilgi:string="";
  bilgi2:string="";
  bilgi3:string="";
  bilgi4:number;
  guncellemeMesaj:string="";
  guncellemeDurum:boolean=false;
  durum:boolean=false;
  haberim:haberler=new haberler();

  displayedColumns=['haberBaslik','haberOkunma','haberResim','haberTarih','duzenle','Silme'];
  dataSource:any;
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
    this.rolKontrol();
    this.haberListele();
  }

  rol:string;
  rolKontrol(){
   try{
     var user: any = JSON.parse(localStorage.getItem("user"));
     this.rol=user[0].rol;
     this.yazarId=user[0].uyeid;
     if(this.rol=="Admin"){ location.pathname="adminEkran"; }
   }
   catch{location.pathname="/yazar";}
 
  }

  haberListele(){
    this.apiServis.haberListelebyYazar(this.yazarId).subscribe((x:haberler[])=>{

      this.haber=x;
      //console.log(this.haber);
      
    })
  }




  haberListele2(id:number){
    this.durum=true;
    this.apiServis.haberListelebyId(id).subscribe((x:haberler)=>{
      this.haberim=x;
     // console.log(this.haberim[0].haberBaslik);
      this.bilgi=this.haberim[0].haberBaslik;
      this.bilgi2=this.haberim[0].haberIcerik;
      this.bilgi3=this.haberim[0].haberResim;
      this.bilgi4=id;
    })
  }
  haberSil(id:number){
this.apiServis.haberSil(id).subscribe((s:sonuc)=>{
  this.sonucum=s;
  this.haberListele();
})
  }

  haberGuncelle(baslik:string,icerik:string){

    this.apiServis.haberGuncelle2(this.bilgi4,baslik,icerik).subscribe((s:sonuc)=>{
      this.guncellemeDurum=true;
      this.guncellemeMesaj="Güncelleme Başarılı";
      
    })
  }

}
