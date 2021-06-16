using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HaberG.ViewModel
{
    public class uyeModel
    {
        public int uyeid { get; set; }
        public string adsoyad { get; set; }
        public string mail { get; set; }
        public string parola { get; set; }
        public string telefon { get; set; }
        public string haberAlan { get; set; }
        public string konum { get; set; }
        public string rol { get; set; }
        public System.DateTime kayitTarih { get; set; }
        public int haberSayisi { get; set; }
    }
}
