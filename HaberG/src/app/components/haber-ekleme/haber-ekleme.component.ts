import { haberler } from './../../models/haberler';
import { ApiService } from './../../services/api.service';
import { sonuc } from 'src/app/models/sonuc';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-haber-ekleme',
  templateUrl: './haber-ekleme.component.html',
  styleUrls: ['./haber-ekleme.component.css']
})
export class HaberEklemeComponent implements OnInit {

  secilenFoto:string="assets/logo.png";
  selectedFile:File=null;
  haberim:haberler=new haberler();
  sonucum:sonuc=new sonuc;
 
  constructor(
    private http:HttpClient,
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];

  }



  onUpload(){
  
    const fileData=new FormData();
    var tarih= new Date();
    fileData.append('image', this.selectedFile, this.selectedFile.name);
    this.haberim.haberKategoriAdi="Siyaset";
    this.haberim.haberOkunma=0;
    this.haberim.haberTarih=tarih.getTime().toString();
    this.haberim.haberYazarId=2;
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


  haberEkle(){
    var tarih= new Date();
    this.haberim.haberKategoriAdi="Siyaset";
    this.haberim.haberBaslik="bakalım";
    this.haberim.haberIcerik="bakalım";

    this.haberim.haberOkunma=0;
    this.haberim.haberTarih=tarih.getTime().toString();
    this.haberim.haberYazarId=2;
    this.haberim.haberVideo="Yok";
    this.haberim.haberResim="denemeler";
    console.log(this.haberim);
    this.apiServis.haberEkle(this.haberim).subscribe((s:sonuc)=>{
  
      console.log("Başarılı");
      this.sonucum.islem=true;
      this.sonucum.mesaj="Haber Paylaşıldı";
    },(err) => {
      console.log('Başarısız.. ' + Error);
    })
  }
}
