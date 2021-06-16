import { uyeler } from './../../models/uyeler';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminBilgiler:uyeler;
  durum:boolean=false;
  mesaj:string="";
  constructor(
    public apiServis : ApiService
  ) { }

  ngOnInit(): void {
  }

  adminGiris(mail:string,parola:string)
  {
    this.apiServis.uyeGiris(mail,parola).subscribe((d:uyeler)=>{
      this.durum=true;
      this.adminBilgiler=d;
      try{
      if(this.adminBilgiler[0].rol=="Admin"){
        
       this.mesaj="Giriş Başarılı";
       localStorage.setItem("user", JSON.stringify(d));
       location.pathname="/adminEkran";  
      }
    }
      catch{
        this.mesaj="Giriş Başarısız..";
      }
   
   })
  }

}