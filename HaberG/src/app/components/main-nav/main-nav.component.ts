import { kategoriler } from './../../models/kategori';
import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  kategorilerim:kategoriler[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    kategoriListele(){
      this.apiServis.kategoriListele().subscribe((d:kategoriler[])=>{
  this.kategorilerim=d;
  console.log(d);
      }, err => {
        console.log("Başarısız.. "+Error);
  
      });
    }

    ngOnInit(): void {
      this.kategoriListele();
    }

  constructor(private breakpointObserver: BreakpointObserver,
    public apiServis: ApiService,) {}

}
