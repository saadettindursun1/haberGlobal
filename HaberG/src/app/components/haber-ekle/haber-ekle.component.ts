import { sonuc } from './../../models/sonuc';
import { ApiService } from './../../services/api.service';
import { haberler } from './../../models/haberler';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-haber-ekle',
  templateUrl: './haber-ekle.component.html',
  styleUrls: ['./haber-ekle.component.css']
})
export class HaberEkleComponent implements OnInit {

   haber:haberler= new haberler();
  secilenFoto:string="assets/logo.png";
  selectedFile:File=null;
  urlLink:string;
  haberim:haberler=new haberler();
  fotoDurum:boolean=false;
  yazarKategori:string;
  yazarId:number;
  sonucum:sonuc=new sonuc;
  rolDurum:boolean;
 
  constructor(
    private http:HttpClient,
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
 this.rolKontrol();
 this.rolDurumKontrol();
    console.log("hey"+this.yazarId);
  }

  
  rol:string;
  rolKontrol(){
   try{
     var user: any = JSON.parse(localStorage.getItem("user"));
     this.rol=user[0].rol;
     this.yazarId=user[0].uyeid;
     this.yazarKategori=user[0].haberAlan;
     if(this.rol=="Admin"){ location.pathname="adminEkran"; }
   }
   catch{location.pathname="/yazar";}
 
  }

  rolDurumKontrol(){
    if(this.rol=="Beklemede"){this.rolDurum=false;}
    if(this.rol=="Yazar"){this.rolDurum=true;}
  }

  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];

    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload=(event:any)=>{
        this.urlLink = event.target.result
        this.fotoDurum=true;
    }


  }
  onUpload(){
  
  const fileData=new FormData();
  var tarih= new Date();
  fileData.append('image', this.selectedFile, this.selectedFile.name);
  this.haberim.haberKategoriAdi=this.yazarKategori;
  this.haberim.haberOkunma=0;
  this.haberim.haberTarih=tarih.getTime().toString();
  this.haberim.haberYazarId=this.yazarId;
  this.haberim.haberVideo="Yok";
  this.haberim.haberResim=this.selectedFile.name;
  console.log(this.haberim);
  this.apiServis.haberEkle(this.haberim).subscribe((s:sonuc)=>{

    console.log("Başarılı");
    this.sonucum.islem=true;
    this.sonucum.mesaj="Haber Paylaşıldı";
  },(err) => {
    console.log('Başarısız.. ' + Error);
  })
  
  
  this.http.post('https://localhost:44321/api/PostEkle',fileData).subscribe(res=>{
  //  console.log(res);
   // console.log(this.selectedFile.name);
  })
}
}
