import { sonuc } from './../../models/sonuc';
import { ApiService } from './../../services/api.service';
import { kategoriler } from './../../models/kategori';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-kategori',
  templateUrl: './admin-kategori.component.html',
  styleUrls: ['./admin-kategori.component.css']
})
export class AdminKategoriComponent implements OnInit {

  displayedColumns=['kategoriId','kategoriAdi','haberSayi','Silme'];
  dataSource:any;
  kategorilerim:kategoriler[];
  kategorim:kategoriler=new kategoriler();
  durum:boolean=false;
  mesaj:string="Başarısız..";
  rol:string;
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
    this.rolKontrol();
    this.kategoriListele(); 
   }


   
  kategoriListele(){
    this.apiServis.kategoriListele().subscribe((d:kategoriler[])=>{
      this.kategorilerim=d;
    })
  }
  rolKontrol(){
    try{
      var user: any = JSON.parse(localStorage.getItem("user"));
      this.rol=user[0].rol;
      if(this.rol!="Admin"){ location.pathname="yazarEkran"; }
    }
    catch{location.pathname="/admin";}
  
   }

  kategoriEkle(k:string){
    this.kategorim.kategoriAdi=k;
    this.apiServis.kategoriEkle(this.kategorim).subscribe((s:sonuc)=>{
     this.durum=true;
     this.mesaj="Kategori Başarıyla Eklendi..";
     this.kategoriListele();
    });
  }

  kategoriSil(kategoriAdi:string){
    this.apiServis.kategoriSil(kategoriAdi).subscribe((s:sonuc)=>{
      this.kategoriListele();
    });
   
  }
}
