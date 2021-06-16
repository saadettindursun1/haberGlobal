import { ApiService } from './../../services/api.service';
import { haberler } from './../../models/haberler';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { sonuc } from 'src/app/models/sonuc';
import { MyAlertService } from 'src/app/services/my-alert.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;
  haberlerim : haberler[];
  constructor(
    public apiServis: ApiService,
    public alert: MyAlertService,
    public matDialog: MatDialog,
    ) {}
  ngOnInit(): void {
    this.haberListele();
  }

  AlertAc(p: boolean) {
    var s: sonuc = new sonuc();
    s.islem = p;
    s.mesaj = 'Bu bir Alert Test Mesajıdır';

    this.alert.AlertUygula(s);
  }



  ConfirmAc() {
this.confirmDialogRef=this.matDialog.open(ConfirmDialogComponent,{
  width:'350px'
});
this.confirmDialogRef.componentInstance.dialogMesaj="Kayit Silinecektir Onay Veriyor musunuz ?";
this.confirmDialogRef.afterClosed().subscribe(d=> {
  console.log(d);
})

  }

  haberListele(){
    this.apiServis.haberListele().subscribe((d:haberler[])=>{
this.haberlerim=d;
console.log(d);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }


}
