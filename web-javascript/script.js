function kendaraan(jenis,roda,warna) {
    this.jenis = jenis;
    this.roda = roda;
    this.warna = warna;

    this.Maju = function() {
        document.write("Kendaraan Jenis"+this.jenis+" Sedang Bergerak Maju"+"<br>");
    }

    this.Mundur = function() {
        document.write("Kendaraan Jenis"+this.jenis+" Sedang Bergerak Mundur"+"<br>");

    }
    this.Belok = function(arah) {
        document.write("Kendaraan Jenis"+this.jenis+" Sedang Bergerak ke"+arah+"<br>");

    }
    this.Berhenti = function() {
        document.write("Kendaraan Jenis"+this.jenis+" Sedang Berhenti"+"<br>");
    }
}

//membuat instance
var Sedan = new kendaraan("Sedan",4,"Hitam");

var SepedaMotor = new kendaraan("Motor",2,"Biru");

//menuliskan hasil ke browser
document.write("<h2>Kendaraan Jenis  "+SepedaMotor.jenis+"</h2>");
document.write("<h3>Kendaraan Warna  "+SepedaMotor.warna+"</h3>");
document.write("<h4>Kendaraan Beroda  "+SepedaMotor.roda+"</h4>");

//memanggil fungsi
SepedaMotor.Belok("Kanan");
Sedan.Maju();
SepedaMotor.Mundur();
Sedan.Berhenti();