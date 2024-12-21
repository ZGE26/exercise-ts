"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Siswa_1 = require("./class/Siswa");
var Mapel_1 = require("./class/Mapel");
var Nilai_1 = require("./class/Nilai");
var Kelas_1 = require("./class/Kelas");
var Sekolah_1 = require("./class/Sekolah");
// Data Sekolah
// Data Mata Pelajaran
var matematika = new Mapel_1.Mapel(1, "Matematika");
var fisika = new Mapel_1.Mapel(2, "Fisika");
// Data Siswa
var siswa1 = new Siswa_1.Siswa("Andi", "12345", "Jl. Mawar", 1, 1, "L");
var siswa2 = new Siswa_1.Siswa("Budi", "12346", "Jl. Melati", 1, 2, "L");
var siswa = [siswa1, siswa2];
// Tambahkan Nilai
siswa1.addNilai(new Nilai_1.Nilai("12345", matematika, 90));
siswa1.addNilai(new Nilai_1.Nilai("12345", fisika, 85));
siswa2.addNilai(new Nilai_1.Nilai("12346", matematika, 80));
// Data Kelas
var kelas1 = new Kelas_1.Kelas(1, "Kelas A", [siswa1, siswa2]);
var kelas2 = new Kelas_1.Kelas(2, "Kelas B", []);
var kelas = [kelas1, kelas2];
var sekolah = new Sekolah_1.Sekolah("SMK Negeri 1 Jakarta", "Jl. Merdeka No. 1", 1, kelas, siswa);
// Hitung Ranking Kelas
var ranking = kelas1.rankingKelas();
// Tampilkan Ranking Kelas
console.log("Ranking Kelas:");
ranking.forEach(function (siswa, index) {
    console.log("Ranking ke-".concat(index + 1, ": ").concat(siswa.getNama(), " dengan nilai rata-rata ").concat(siswa.rataRata()));
});
// Cari Ranking Berdasarkan NISN
var rankingAndi = -1;
for (var i = 0; i < ranking.length; i++) {
    if (ranking[i].getNisn() === "12346") {
        rankingAndi = i + 1;
        break;
    }
}
console.log("Ranking Andi: ".concat(rankingAndi));
var ratarataAndi = rankingAndi !== -1 ? ranking[rankingAndi - 1].rataRata() : 0;
console.log("Rata-rata Andi: ".concat(ratarataAndi));
var rankingParalel = sekolah.perankinganSiswa();
console.log("Ranking Paralel:");
rankingParalel.forEach(function (siswa, index) {
    console.log("Ranking ke-".concat(index + 1, ": ").concat(siswa.getNama(), " dengan nilai rata-rata ").concat(siswa.rataRata()));
});
//cari siswa berada di kelas mana menggunakan nisn dengan memunculkan id kelas
var siswaKelas = -1;
for (var i = 0; i < kelas.length; i++) {
    for (var j = 0; j < kelas[i].siswa.length; j++) {
        if (kelas[i].siswa[j].getNisn() === "12346") {
            siswaKelas = kelas[i].getIdKelas();
            break;
        }
    }
}
console.log("Siswa berada di kelas: ".concat(siswaKelas));
//cari sekolah berdasarkan id kelas dan menampilkan nama sekolah
var sekolahKelas = -1;
for (var i = 0; i < kelas.length; i++) {
    if (kelas[i].getIdKelas() === 1) {
        sekolahKelas = sekolah.getIdSekolah();
        break;
    }
}
var cariSekolah = sekolahKelas !== -1 ? sekolah.getNamaSekolah() : "Tidak ditemukan";
console.log("Sekolah dari kelas 1: ".concat(cariSekolah));
