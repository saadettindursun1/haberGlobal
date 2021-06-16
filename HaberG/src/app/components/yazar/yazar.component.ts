import { ilceler } from './../../models/ilce';
import { sehirler } from './../../models/sehir';
import { kategoriler } from './../../models/kategori';
import { sonuc } from './../../models/sonuc';
import { uyeler } from './../../models/uyeler';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-yazar',
  templateUrl: './yazar.component.html',
  styleUrls: ['./yazar.component.css']
})
export class YazarComponent implements OnInit {

  uye:uyeler=new uyeler();
  uyeBilgiler:uyeler=new uyeler();
  kategorilerim:kategoriler[];
  sehirlerim:sehirler[];
  ilcelerim:ilceler[];
  sonucum:sonuc=new sonuc();
  durum:boolean=false;
  mesaj:string="";
  ilceDurum:boolean=false;
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
    this.kategoriListele();
    this.sehirListele();
  }

  uyeGiris(mail:string,parola:string){
    this.apiServis.uyeGiris(mail,parola).subscribe((d:uyeler)=>{

      this.apiServis.uyeGiris(mail,parola).subscribe((d:uyeler)=>{
        this.durum=true;
        this.uyeBilgiler=d;
        try{
        if(this.uyeBilgiler[0].rol!="Admin"){
          
         this.mesaj="Giriş Başarılı";
         localStorage.setItem("user", JSON.stringify(d));
         location.pathname="/yazarEkran";  
        }
      }
        catch{
          this.mesaj="Giriş Başarısız..";
        }
     
     })
  
})

  }
  uyeEkle(){

    var tarih = new Date();
    this.uye.rol="Beklemede";
    this.uye.kayitTarih=tarih.getTime().toString();
    console.log(this.uye);
    this.apiServis.uyeEkle(this.uye).subscribe((s:sonuc)=>{
   this.sonucum=s;
      console.log("mesaj: ",s.mesaj);
    })
  }

  kategoriListele(){
    this.apiServis.kategoriListele().subscribe((d:kategoriler[])=>{
this.kategorilerim=d;
console.log(d);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }

  sehirListele(){
    this.apiServis.sehirListele().subscribe((d:sehirler[])=>{
this.sehirlerim=d;
console.log(d);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }

  ilceListele(id:number){
    console.log(id);
    this.apiServis.ilceListele(id).subscribe((d:ilceler[])=>{
this.ilcelerim=d;
console.log(d);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }
}
