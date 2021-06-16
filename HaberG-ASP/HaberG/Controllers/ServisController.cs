using HaberG.Models;
using HaberG.ViewModel;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace HaberG.Controllers
{
    public class ServisController : ApiController
    {
  
    habergEntities1 db = new habergEntities1();
        sonucModel sonuc = new sonucModel();

     
    #region yazarlar

        [HttpPost]

        [Route("api/uyeEkle")]

        public sonucModel uyeEkle(uyeModel yazar)
        {
            uyeler yeni = new uyeler();
            yeni.adsoyad = yazar.adsoyad;
            yeni.mail = yazar.mail;
            yeni.parola = yazar.parola;
            yeni.telefon = yazar.telefon;
            yeni.haberAlan = yazar.haberAlan;
            yeni.konum = yazar.konum;
            yeni.rol = yazar.rol;
            yeni.kayitTarih = yazar.kayitTarih;
           

            if (db.uyeler.Where(x => x.mail == yeni.mail).Count() == 0)
            {
                sonuc.islem = true;
                sonuc.mesaj = "Kayıt Başarılı..";
               db.uyeler.Add(yeni);
                db.SaveChanges();
                return sonuc;
            }

            sonuc.islem = false;
            sonuc.mesaj = "Bu E posta Daha Önce Kullanılmış";

           
            return sonuc;

        }

        [HttpGet]

        [Route("api/uyeListele")]
        public List<uyeModel> uyeListele() {
            List<uyeModel> yazarlar = db.uyeler.Select(x => new uyeModel() {
              uyeid = x.uyeId,
                adsoyad = x.adsoyad,
                mail = x.mail,
                parola = x.parola,
                telefon = x.telefon,
                haberAlan = x.haberAlan,
                konum = x.konum,
                rol = x.rol,
                kayitTarih = x.kayitTarih,
                haberSayisi = db.Haberler.Count(t=> t.haberYazarId == x.uyeId)


            }).ToList();
            return yazarlar;

        }

    [HttpGet]


    [Route("api/uyeListelebyRol/{rol}")]
    public List<uyeModel> uyeListelebyRol(string rol)
    {
      List<uyeModel> yazarlar = db.uyeler.Where(s => s.rol == rol).Select(x => new uyeModel()
      {
        uyeid = x.uyeId,
        adsoyad = x.adsoyad,
        mail = x.mail,
        parola = x.parola,
        telefon = x.telefon,
        haberAlan = x.haberAlan,
        konum = x.konum,
        rol = x.rol,
        kayitTarih = x.kayitTarih

      }).ToList();
      return yazarlar;

    }

        [HttpGet]
        [Route("api/uyeGiris/{mail}/{parola}")]
        public List<uyeModel> uyeGiris(string mail,string parola)
        {

           
            List<uyeModel> yazarlar = db.uyeler.Where(s => s.mail == mail && s.parola==parola).Select(x => new uyeModel()
            {
                uyeid = x.uyeId,
                adsoyad = x.adsoyad,
                mail = x.mail,
                parola = x.parola,
                telefon = x.telefon,
                haberAlan = x.haberAlan,
                konum = x.konum,
                rol = x.rol,
                kayitTarih = x.kayitTarih

            }).ToList();
            return yazarlar;

        }

        [HttpGet]

        [Route("api/yazarListelebyId/{id}")]
        public uyeModel yazarListelebyId(int id)
        {
            uyeModel yazarlar = db.uyeler.Where(s => s.uyeId == id).Select(x => new uyeModel()
            {
              uyeid = x.uyeId,
                adsoyad = x.adsoyad,
                mail = x.mail,
                parola = x.parola,
                telefon = x.telefon,
                haberAlan = x.haberAlan,
                konum = x.konum,
                rol = x.rol,
                kayitTarih = x.kayitTarih

            }).FirstOrDefault();
            return yazarlar;

        }

        [HttpPut]
        [Route("api/yazarGuncelle/{id}")]
        public sonucModel yazarGuncelle(uyeModel yazarim, int id)
        {

            uyeler yeni = db.uyeler.Where(s => s.uyeId == id).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }

            yeni.adsoyad = yazarim.adsoyad;
            yeni.mail = yazarim.mail;
            yeni.parola = yazarim.parola;
            yeni.telefon = yazarim.telefon;
            yeni.haberAlan = yazarim.haberAlan;
            yeni.konum = yazarim.konum;
            yeni.rol = yazarim.rol;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Güncelleme Başarılı";


            return sonuc;
        }

        [HttpGet]
        [Route("api/yazarDurumGuncelle/{id}")]
        public sonucModel yazarDurumGuncelle(int id,string rol)
        {
            uyeler yeni = db.uyeler.Where(s => s.uyeId == id).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }

            yeni.rol =rol;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Güncelleme Başarılı";


            return sonuc;
        }


        [HttpDelete]
        [Route("api/uyeSil/{id}")]
        public sonucModel uyeSil(int id)
        {

            uyeler yeni = db.uyeler.Where(s => s.uyeId == id).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }

            db.uyeler.Remove(yeni);
            sonuc.islem = true;
            sonuc.mesaj = "silme Başarılı";
            db.SaveChanges();

            return sonuc;
        }
        #endregion

        #region haberler
        [HttpPost]
        [Route("api/haberEkle")]
        public sonucModel haberEkle(haberModel haberler)
        {
  
          
            Haberler yeni = new Haberler();
            yeni.haberKategori = haberler.haberKategoriadi;
            yeni.haberBaslik = haberler.haberBaslik;
            yeni.haberIcerik = haberler.haberIcerik;
            yeni.haberVideo = haberler.haberVideo;
            yeni.haberTarih = haberler.haberTarih;
            yeni.haberOkunma = haberler.haberOkunma;
            yeni.haberYazarId = haberler.haberyazarId;
            yeni.haberResim = haberler.haberResim;
            sonuc.islem = true;
            sonuc.mesaj = "başarılı";
            db.Haberler.Add(yeni);
            db.SaveChanges();
            return sonuc;
        }

        [HttpPost]

        [Route("api/PostEkle")]
        public string PostEkle()
        {
            var file = HttpContext.Current.Request.Files.Count > 0 ? HttpContext.Current.Request.Files[0] : null;
            if (file != null && file.ContentLength > 0)
            {
                var fileName = Path.GetFileName(file.FileName);
                var path = Path.Combine(HttpContext.Current.Server.MapPath("~/Resimler"), fileName);
                file.SaveAs(path);
            }
            return "Success" + file != null ? "/uploads/" + file.FileName : null;
        }

        [HttpDelete]
        [Route("api/haberSil/{id}")]
        public sonucModel haberSil(int id)
        {

            Haberler yeni = db.Haberler.Where(s => s.haberId == id).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }

            db.Haberler.Remove(yeni);
            sonuc.islem = true;
            sonuc.mesaj = "silme Başarılı";
            db.SaveChanges();

            return sonuc;
        }



      [HttpGet]
        [Route("api/haberListele")]
        
        public List<haberModel> haberListele()
        {
            List<haberModel> liste = db.Haberler.Select(x => new haberModel() {
                haberId = x.haberId,
                haberKategoriadi = x.haberKategori,
                haberBaslik = x.haberBaslik,
                haberIcerik = x.haberIcerik,
                haberResim = x.haberResim,
                haberVideo = x.haberVideo,
                haberTarih = x.haberTarih,
                haberOkunma = x.haberOkunma,
                haberyazarId = x.haberYazarId,
                

        }).OrderByDescending(x=>x.haberOkunma).ToList();

            foreach (var item in liste)
            {
                item.yazarlar = yazarListelebyId(item.haberyazarId);
            }
            return liste;

        }

        [HttpGet]
        [Route("api/haberListele2")]

        public List<haberModel> haberListele2()
        {
            List<haberModel> liste = db.Haberler.Select(x => new haberModel()
            {
                haberId = x.haberId,
                haberKategoriadi = x.haberKategori,
                haberBaslik = x.haberBaslik,
                haberIcerik = x.haberIcerik,
                haberResim = x.haberResim,
                haberVideo = x.haberVideo,
                haberTarih = x.haberTarih,
                haberOkunma = x.haberOkunma,
                haberyazarId = x.haberYazarId,


            }).Take(10).ToList();

            foreach (var item in liste)
            {
                item.yazarlar = yazarListelebyId(item.haberyazarId);
            }
            return liste;

        }


        [HttpGet]
        [Route("api/haberListelebyId/{haberId}")]
        public List<haberModel> haberListelebyId(int haberId)
        {
            List<haberModel> liste = db.Haberler.Where(s=> s.haberId == haberId ).Select(x => new haberModel()
            {
                haberId = x.haberId,
                haberKategoriadi = x.haberKategori,
                haberBaslik = x.haberBaslik,
                haberIcerik = x.haberIcerik,
                haberResim = x.haberResim,
                haberVideo = x.haberVideo,
                haberTarih = x.haberTarih,
                haberOkunma = x.haberOkunma,
                haberyazarId = x.haberYazarId,
               

            }).ToList();

            foreach (var item in liste)
            {
                item.yazarlar = yazarListelebyId(item.haberyazarId);
            }
            return liste;
        }

        [HttpGet]
        [Route("api/haberListelebyYazar/{yazarid}")]
        public List<haberModel> haberListelebyYazar(int yazarid)
        {
            List<haberModel> liste = db.Haberler.Where(s => s.haberYazarId == yazarid).Select(x => new haberModel()
            {
                haberId = x.haberId,
                haberKategoriadi = x.haberKategori,
                haberBaslik = x.haberBaslik,
                haberIcerik = x.haberIcerik,
                haberResim = x.haberResim,
                haberVideo = x.haberVideo,
                haberTarih = x.haberTarih,
                haberOkunma = x.haberOkunma,
                haberyazarId = x.haberYazarId,


            }).ToList();

            foreach (var item in liste)
            {
                item.yazarlar = yazarListelebyId(item.haberyazarId);
            }
            return liste;
        }


        [HttpGet]
        [Route("api/haberListeleBaslik/{baslik}")]
        public List<haberModel> haberListelebyId(string baslik)
        {


            List<haberModel> liste = db.Haberler.Where(s => s.haberBaslik == baslik).Select(x => new haberModel()
            {
                haberId = x.haberId,
                haberKategoriadi = x.haberKategori,
                haberBaslik = x.haberBaslik,
                haberIcerik = x.haberIcerik,
                haberResim = x.haberResim,
                haberVideo = x.haberVideo,
                haberTarih = x.haberTarih,
                haberOkunma = x.haberOkunma,
                haberyazarId = x.haberYazarId,


            }).ToList();

            foreach (var item in liste)
            {
                item.yazarlar = yazarListelebyId(item.haberyazarId);
            }
            return liste;
        }

        [HttpGet]
        [Route("api/haberListeleKategori/{kategori}")]
        public List<haberModel> haberListeleKategori(string kategori)
        {


            List<haberModel> liste = db.Haberler.Where(s => s.haberKategori == kategori).Select(x => new haberModel()
            {
                haberId = x.haberId,
                haberKategoriadi = x.haberKategori,
                haberBaslik = x.haberBaslik,
                haberIcerik = x.haberIcerik,
                haberResim = x.haberResim,
                haberVideo = x.haberVideo,
                haberTarih = x.haberTarih,
                haberOkunma = x.haberOkunma,
                haberyazarId = x.haberYazarId,


            }).ToList();

            foreach (var item in liste)
            {
                item.yazarlar = yazarListelebyId(item.haberyazarId);
            }
            return liste;
        }

        [HttpGet]
        [Route("api/haberListeleKategori2/{kategori}")]
        public List<haberModel> haberListeleKategori2(string kategori)
        {


            List<haberModel> liste = db.Haberler.Where(s => s.haberKategori == kategori).Select(x => new haberModel()
            {
                haberId = x.haberId,
                haberKategoriadi = x.haberKategori,
                haberBaslik = x.haberBaslik,
                haberIcerik = x.haberIcerik,
                haberResim = x.haberResim,
                haberVideo = x.haberVideo,
                haberTarih = x.haberTarih,
                haberOkunma = x.haberOkunma,
                haberyazarId = x.haberYazarId,


            }).Take(4).ToList();

            foreach (var item in liste)
            {
                item.yazarlar = yazarListelebyId(item.haberyazarId);
            }
            return liste;
        }


        [HttpPut]
        [Route("api/haberGuncelle/{id}")]
        public sonucModel haberGuncelle(haberModel haberim, int id)
        {

            Haberler yeni = db.Haberler.Where(s => s.haberId == id).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }

            yeni.haberKategori = haberim.haberKategoriadi;
            yeni.haberBaslik = haberim.haberBaslik;
            yeni.haberIcerik = haberim.haberIcerik;
            yeni.haberResim = haberim.haberResim;
            yeni.haberVideo = haberim.haberVideo;
            yeni.haberTarih = haberim.haberTarih;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Güncelleme Başarılı";


            return sonuc;
        }


        [HttpGet]
        [Route("api/haberGuncelle2/{id}")]
        public sonucModel haberGuncelle2(int id,string baslik,string icerik)
        {
            Haberler yeni = db.Haberler.Where(s => s.haberId == id).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }

            yeni.haberBaslik =baslik;
            yeni.haberIcerik =icerik;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Güncelleme Başarılı";


            return sonuc;
        }



        [HttpGet]
        [Route("api/haberOkunma/{id}")]
        public sonucModel haberOkunma(int id)
        {
            Haberler yeni = db.Haberler.Where(s => s.haberId == id).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }

            yeni.haberOkunma =yeni.haberOkunma+1;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Güncelleme Başarılı";


            return sonuc;
        }
        #endregion

        #region yorumlar

        [HttpGet]
        [Route("api/haberYorumListele/{id}")]
        public List<haberYorumModel> haberYorumListele(int id)
        {
            List<haberYorumModel> haberler = db.HaberYorumlar.Where(s => s.yorumHaberId == id).Select(x => new haberYorumModel()
            {
                yorumId = x.yorumId,
                yorumIcerik = x.yorumIcerik,
                yorumHaberId = x.yorumHaberId,
                yorumTarih = x.yorumTarih

            }).ToList();

            return haberler;
        }


        [HttpPost]

        [Route("api/yorumEkle")]

        public sonucModel yorumEkle(haberYorumModel yorum)
        {
            HaberYorumlar yeni = new HaberYorumlar();

            yeni.yorumIcerik = yorum.yorumIcerik;
            yeni.yorumHaberId = yorum.yorumHaberId;
            yeni.yorumTarih = yorum.yorumTarih;


            sonuc.islem = true;
            sonuc.mesaj = "Kayıt Başarılı..";


            db.HaberYorumlar.Add(yeni);

            db.SaveChanges();

            return sonuc;

        }

        [HttpDelete]
        [Route("api/yorumSil/{id}")]
        public sonucModel yorumSil(int id)
        {

            HaberYorumlar yeni = db.HaberYorumlar.Where(s => s.yorumId == id).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }



            db.HaberYorumlar.Remove(yeni);
            sonuc.islem = true;
            sonuc.mesaj = "silme Başarılı";
            db.SaveChanges();

            return sonuc;
        }

        #endregion

        #region kategori
        [HttpGet]
        [Route("api/kategoriListele")]
        public List<kategoriModel2> kategoriListele()
        {
            List<kategoriModel2> kategoriler = db.Kategoriler.Select(x => new kategoriModel2()
            {
                 kategoriId= x.kategoriId,
                kategoriAdi = x.kategoriAdi,
                haberSayi=db.Haberler.Where(d=>d.haberKategori==x.kategoriAdi).Count()
               

            }).ToList();

            return kategoriler;
        }

        [HttpGet]
        [Route("api/kategoriListele2")]
        public List<kategoriModel> kategoriListele2()
        {
            List<kategoriModel> kategoriler = db.Kategoriler.Select(x => new kategoriModel()
            {
                kategoriId = x.kategoriId,
                kategoriAdi = x.kategoriAdi,


            }).ToList();


            foreach (var item in kategoriler)
            {
                item.haberler = haberListeleKategori2(item.kategoriAdi);
            }


            return kategoriler;
        }



        [HttpPost]

        [Route("api/kategoriEkle")]

        public sonucModel kategoriEkle(kategoriModel kategori)
        {
            Kategoriler yeni = new Kategoriler();

            yeni.kategoriId = kategori.kategoriId;
            yeni.kategoriAdi = kategori.kategoriAdi;

            sonuc.islem = true;
            sonuc.mesaj = "Kayıt Başarılı..";

            db.Kategoriler.Add(yeni);

            db.SaveChanges();

            return sonuc;

        }

        [HttpDelete]
        [Route("api/kategoriSil/{kategoriAdi}")]
        public sonucModel kategoriSil(string kategoriAdi)
        {

            Kategoriler yeni = db.Kategoriler.Where(s => s.kategoriAdi == kategoriAdi).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }

            if (db.Haberler.Count(s => s.haberKategori == kategoriAdi) > 0)
            {
                List<Haberler> liste = db.Haberler.Where(s => s.haberKategori == kategoriAdi).ToList();
                db.Haberler.RemoveRange(liste);
            }

            db.Kategoriler.Remove(yeni);
            sonuc.islem = true;
            sonuc.mesaj = "silme Başarılı";
            db.SaveChanges();

            return sonuc;
        }

        #endregion

        #region iletisim

        [HttpGet]
        [Route("api/iletisimListele")]
        public List<iletisimModel> iletisimListele()
        {
            List<iletisimModel> iletisim = db.iletisim.Select(x => new iletisimModel()
            {
                Id = x.id,
                iletisimMail = x.iletisimMail,
                iletisimIcerik = x.iletisimIcerik,


            }).ToList();

            return iletisim;
        }



        [HttpPost]

        [Route("api/iletisimEkle")]

        public sonucModel iletisimEkle(iletisimModel iletisim1)
        {
            iletisim yeni = new iletisim();

            yeni.id = iletisim1.Id;
            yeni.iletisimMail = iletisim1.iletisimMail;
            yeni.iletisimIcerik = iletisim1.iletisimIcerik;

            sonuc.islem = true;
            sonuc.mesaj = "Kayıt Başarılı..";

            db.iletisim.Add(yeni);

            db.SaveChanges();

            return sonuc;

        }

        [HttpDelete]
        [Route("api/iletisimSil/{id}")]
        public sonucModel iletisimSil(int id)
        {

            iletisim yeni = db.iletisim.Where(s => s.id == id).FirstOrDefault();
            if (yeni == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen İD Geçersiz..";
                return sonuc;
            }

            db.iletisim.Remove(yeni);
            sonuc.islem = true;
            sonuc.mesaj = "silme Başarılı";
            db.SaveChanges();

            return sonuc;
        }
        #endregion

        #region Sehir İlce

        [HttpGet]
    [Route("api/sehirListele")]
    public List<sehirModel> sehirListele()
        {
            List<sehirModel> sehirler = db.Sehirler.Select(x => new sehirModel() { 
            sehirId = x.sehirId,
            sehirIsim = x.sehirIsim
            }).ToList();

            return sehirler;
        }


        [HttpGet]
        [Route("api/ilceListele/sehirID")]
        public List<ilceModel> ilceListele(int sehirID)
        {
            List<ilceModel> ilceler = db.ilceler.Where(s=> s.ilceSehirId == sehirID).Select(x => new ilceModel()
            {
                ilceId = x.ilceId,
                ilceIsim = x.ilceIsim,
                ilceSehirId= x.ilceSehirId
                
            }).ToList();

            return ilceler;
        }



           #endregion


    }

    }

