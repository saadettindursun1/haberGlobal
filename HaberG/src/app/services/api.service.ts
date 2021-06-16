import { iletisim } from './../models/iletisim';
import { kategoriler } from './../models/kategori';
import { haberYorumlar } from './../models/haberYorum';
import { haberler } from './../models/haberler';
import { uyeler } from './../models/uyeler';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:"https://localhost:44321/api/";
  constructor(
    public http: HttpClient
  ) { }

  //LİSTELEMELER
  uyeListele(){
    return this.http.get("https://localhost:44321/api/uyeListele");
  }

  uyeGiris(mail:string,parola:string){
    return this.http.get("https://localhost:44321/api/uyeGiris/"+mail+"/"+parola);
  }

  uyeListelebyRol(rol:string){
    return this.http.get("uyeListelebyRol/"+rol);
  }
/////////////////////////////////////
  yazarListelebyId(yazarid:number){
    return this.http.get("yazarListelebyId/"+yazarid);
  }

  haberListele(){
    return this.http.get("https://localhost:44321/api/haberListele");
  }

  haberListele2(){
    return this.http.get("https://localhost:44321/api/haberListele2");
  }

  haberListelebyId(haberid:number){
    return this.http.get("https://localhost:44321/api/haberListelebyId/"+haberid);
  }

  haberListelebyYazar(yazarid:number){
    return this.http.get("https://localhost:44321/api/haberListelebyYazar/"+yazarid);
  }

  haberListeleBaslik(baslik:string){
    return this.http.get("https://localhost:44321/api/haberListeleBaslik/"+baslik);
  }

  haberListeleKategori(kategori:string){
    return this.http.get("https://localhost:44321/api/haberListeleKategori/"+kategori);
  }

  haberListeleKategori2(kategori:string){
    return this.http.get("https://localhost:44321/api/haberListeleKategori2/"+kategori);
  }

  haberYorumListele(yorumid:number){
    return this.http.get("https://localhost:44321/api/haberYorumListele/"+yorumid);
  }
/////////////////////////////

  kategoriListele(){
   return this.http.get("https://localhost:44321/api/kategoriListele");
  }

  kategoriListele2(){
    return this.http.get("https://localhost:44321/api/kategoriListele2");
   }

  sehirListele(){
   return this.http.get("https://localhost:44321/api/sehirListele");
  }

  iletiListele(){
    return this.http.get("https://localhost:44321/api/iletisimListele");
   }
  ////////////////////

  ilceListele(sehirId:number){
    return this.http.get("https://localhost:44321/api/ilceListele/sehirID?sehirID="+sehirId);
   }
    //LİSTELEME BİTİŞ

    //KAYIT BAŞLANGIÇ

    uyeEkle(uye:uyeler){
      return this.http.post("https://localhost:44321/api/uyeEkle",uye);
     }

     haberEkle(haber:haberler){
      return this.http.post("https://localhost:44321/api/haberEkle",haber);
     }

     yorumEkle(yorum:haberYorumlar){
      return this.http.post("https://localhost:44321/api/yorumEkle",yorum);
     }

     kategoriEkle(kategori:kategoriler){
      return this.http.post("https://localhost:44321/api/kategoriEkle",kategori);
     }

     iletisimEkle(ileti:iletisim){
      return this.http.post("https://localhost:44321/api/iletisimEkle",ileti);
     }

    //KAYIT BİTİŞ

    //GÜNCELLEME BAŞLANGIÇ

    yazarGuncelle(uye:uyeler){
      return this.http.put("yazarGuncelle",uye);
     }

     yazarDurumGuncelle(uyeid:number,rol:string){
      return this.http.get("https://localhost:44321/api/yazarDurumGuncelle/"+uyeid+"?rol="+rol);
     }

     haberGuncelle2(id:number,baslik:string,icerik:string){
      return this.http.get("https://localhost:44321/api/haberGuncelle2/"+id+"?baslik="+baslik+"&icerik="+icerik);

     }



     haberOkunma(id:number){
      return this.http.get("https://localhost:44321/api/haberOkunma/"+id);
     }

     haberGuncelle(haber:haberler){
      return this.http.put("haberGuncelle",haber);
     }

     
    //GÜNCELLEME BİTİŞ

    //SİLME BAŞLANGIÇ
    
     uyeSil(uyeid:number){
      return this.http.delete("https://localhost:44321/api/uyeSil/"+uyeid);
     }
     
     haberSil(haberid:number){
      return this.http.delete("https://localhost:44321/api/haberSil/"+haberid);
     }
     
     yorumSil(yorumid:number){
      return this.http.delete("https://localhost:44321/api/yorumSil/"+yorumid);
     }

     kategoriSil(kategoriAdi:string){
      return this.http.delete("https://localhost:44321/api/kategoriSil/"+kategoriAdi);
     }

     iletisimSil(iletiId:number){
      return this.http.delete("https://localhost:44321/api/iletisimSil/"+iletiId);
     }

    //SİLME BİTİŞ
  }
