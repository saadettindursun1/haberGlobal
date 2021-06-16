import { kategoriler } from './../../models/kategori';
import { ApiService } from './../../services/api.service';
import { haberler } from './../../models/haberler';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {

  haberlerim : haberler[];
  haberlerim2 : haberler[];
  kategori:kategoriler[]

  
  constructor(
    public apiServis: ApiService
  ) { }

  ngOnInit(): void {
    this.haberListele();
    this.kategoriListele();

  }

  haberListele(){
    this.apiServis.haberListele2().subscribe((d:haberler[])=>{
this.haberlerim=d;
console.log(d);
    });
  }

  kategoriListele(){
    this.apiServis.kategoriListele2().subscribe((d:kategoriler[])=>{
      this.kategori=d;
      console.log(d);
    
          });
  }



}
