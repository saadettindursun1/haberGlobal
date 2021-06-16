import { sonuc } from './../../models/sonuc';
import { haberYorumlar } from './../../models/haberYorum';
import { haberler } from './../../models/haberler';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-haber-detay',
  templateUrl: './haber-detay.component.html',
  styleUrls: ['./haber-detay.component.css']
})
export class HaberDetayComponent implements OnInit {

  haberId:number;
  haber:haberler=new haberler();
  yorumlar:haberYorumlar=new haberYorumlar();
  sonucum:sonuc=new sonuc();
  yorum:haberYorumlar=new haberYorumlar();
  constructor(
    public apiServis:ApiService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.haberId = p.id; 
      console.log("haberId: "+this.haberId);
    });
    this.haberOkunma();
    this.haberListele();
    this.haberyorumListele();


  }
     

  haberOkunma(){
    this.apiServis.haberOkunma(this.haberId).subscribe((s:sonuc)=>{

    })
  }
  haberListele(){

    this.apiServis.haberListelebyId(this.haberId).subscribe((d:haberler)=>{
      this.haber=d;
      console.log(this.haber);
    })
  }
  haberyorumListele(){
    this.apiServis.haberYorumListele(this.haberId).subscribe((y:haberYorumlar)=>{
      this.yorumlar=y;
    })
  }

  yorumYap(yorum:string){
    var tarih = new Date();
  this.yorum.yorumHaberId=this.haberId;
  this.yorum.yorumIcerik=yorum;
  this.yorum.yorumTarih=tarih.getTime().toString();
this.apiServis.yorumEkle(this.yorum).subscribe((s:sonuc)=>{
  this.sonucum.islem=true;
  this.sonucum.mesaj="Yorumunuz eklendi..";
  this.haberyorumListele();

})
  }
}
