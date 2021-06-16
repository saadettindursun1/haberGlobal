import { sonuc } from './../../models/sonuc';
import { iletisim } from './../../models/iletisim';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.css']
})
export class IletisimComponent implements OnInit {

  iletim:iletisim=new iletisim();
durum:boolean=false;
mesaj:string="İleti Gönderilemedi";
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
  }

  iletisimGonder(mail:string,ileti:string){
  this.iletim.iletisimMail=mail;
  this.iletim.iletisimIcerik=ileti;
  this.apiServis.iletisimEkle(this.iletim).subscribe((s:sonuc)=>{
    this.durum=true;
    this.mesaj="İletiniz başarıyla gönderildi..";
  })
  }
}
