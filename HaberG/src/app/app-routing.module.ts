import { IletisimComponent } from './components/iletisim/iletisim.component';
import { AdminIletisimComponent } from './components/admin-iletisim/admin-iletisim.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { HaberDetayComponent } from './components/haber-detay/haber-detay.component';
import { AdminKategoriComponent } from './components/admin-kategori/admin-kategori.component';
import { AdminHaberComponent } from './components/admin-haber/admin-haber.component';
import { AdminUyeComponent } from './components/admin-uye/admin-uye.component';
import { AdminEkranComponent } from './components/admin-ekran/admin-ekran.component';
import { AdminComponent } from './components/admin/admin.component';
import { HaberDuzenleComponent } from './components/haber-duzenle/haber-duzenle.component';
import { YazarEkranComponent } from './components/yazar-ekran/yazar-ekran.component';
import { HaberEkleComponent } from './components/haber-ekle/haber-ekle.component';
import { YazarComponent } from './components/yazar/yazar.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 // { path: '', component: HomeComponent },
  { path: '', component: AnasayfaComponent },
  { path: 'yazar', component: YazarComponent },
  { path: 'haberEkle', component: HaberEkleComponent },
  { path: 'yazarEkran', component: YazarEkranComponent },
  { path: 'haberDuzenle', component: HaberDuzenleComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminEkran', component: AdminEkranComponent },
  { path: 'adminUye', component: AdminUyeComponent },
  { path: 'adminHaber', component: AdminHaberComponent },
  { path: 'adminKategori', component: AdminKategoriComponent },
  { path: 'haberDetay/:id', component: HaberDetayComponent },
  { path: 'kategori/:kategori', component: KategoriComponent },
  { path: 'adminiletisim', component: AdminIletisimComponent },
  { path: 'iletisim', component: IletisimComponent },
 // { path: 'haberEkle', component: HaberEklemeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
