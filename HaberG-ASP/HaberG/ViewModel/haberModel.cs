using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HaberG.ViewModel
{
    public class haberModel
    {
        public int haberId { get; set; }
        public string haberKategoriadi { get; set; }
        public string haberBaslik { get; set; }
        public string haberIcerik { get; set; }
        public string haberResim { get; set; }
        public string haberVideo { get; set; }
        public System.DateTime haberTarih { get; set; }
        public int haberOkunma { get; set; }
        public int haberyazarId { get; set; }
        public uyeModel yazarlar { get; set; }
    }
}