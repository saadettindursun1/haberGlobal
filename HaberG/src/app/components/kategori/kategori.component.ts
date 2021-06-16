import { haberler } from './../../models/haberler';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {

  kategori:string;
  haberlerim:haberler[];
  constructor(
    public route:ActivatedRoute,
    public apiServis:ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.kategori = p.kategori; 
    });
    this.haberListeleKategori();
  }

  haberListeleKategori(){
    this.apiServis.haberListeleKategori(this.kategori).subscribe((d:haberler[])=>{
this.haberlerim=d;
console.log(d);
    });
  }

}
