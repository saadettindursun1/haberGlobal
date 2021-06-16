import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { MyAlertService } from './services/my-alert.service';
import { MaterialModule } from './material.module';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { YazarComponent } from './components/yazar/yazar.component';
import { HaberEkleComponent } from './components/haber-ekle/haber-ekle.component';
import { HaberEklemeComponent } from './components/haber-ekleme/haber-ekleme.component';
import { FormsModule } from '@angular/forms';
import { YazarEkranComponent } from './components/yazar-ekran/yazar-ekran.component';
import { HaberDuzenleComponent } from './components/haber-duzenle/haber-duzenle.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminEkranComponent } from './components/admin-ekran/admin-ekran.component';
import { AdminUyeComponent } from './components/admin-uye/admin-uye.component';
import { AdminHaberComponent } from './components/admin-haber/admin-haber.component';
import { AdminKategoriComponent } from './components/admin-kategori/admin-kategori.component';
import { HaberDetayComponent } from './components/haber-detay/haber-detay.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { AdminIletisimComponent } from './components/admin-iletisim/admin-iletisim.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    //Dialoglar
    AlertDialogComponent,

    ConfirmDialogComponent,

    AnasayfaComponent,
    MainNavComponent,
    YazarComponent,
    HaberEkleComponent,
    HaberEklemeComponent,
    YazarEkranComponent,
    HaberDuzenleComponent,
    AdminComponent,
    AdminEkranComponent,
    AdminUyeComponent,
    AdminHaberComponent,
    AdminKategoriComponent,
    HaberDetayComponent,
    KategoriComponent,
    AdminIletisimComponent,
    IletisimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFileUploaderModule,
    FormsModule,

  ],
  entryComponents: [AlertDialogComponent, ConfirmDialogComponent,AnasayfaComponent],
  providers: [MyAlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
