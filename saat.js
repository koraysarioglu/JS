
function Dijital_saat(){
    var gunler = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
    var zaman = new Date();
    var saat = zaman.getHours();
    var dakika = zaman.getMinutes();
    var saniye = zaman.getSeconds();
    var gunadi = zaman.getDay();
    var tarih = saat+ ":" + dakika+ ":" + saniye + "  "+ gunler[gunadi]; 
    setInterval("Dijital_saat()", 1000);
    document.getElementById("islem").value=tarih;
}
    

Dijital_saat();







  