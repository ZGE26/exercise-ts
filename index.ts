import { Siswa } from "./class/Siswa";
import { Mapel } from "./class/Mapel";
import { Nilai } from "./class/Nilai";
import { Kelas } from "./class/Kelas";
import { Sekolah } from "./class/Sekolah";

// Data Sekolah

// Data Mata Pelajaran
const matematika = new Mapel(1, "Matematika");
const fisika = new Mapel(2, "Fisika");

// Data Siswa
const siswa1 = new Siswa("Andi", "12345", "Jl. Mawar", 1, 1, "L");
const siswa2 = new Siswa("Budi", "12346", "Jl. Melati", 1, 2, "L");

const siswa = [siswa1, siswa2];

// Tambahkan Nilai
siswa1.addNilai(new Nilai("12345", matematika, 90));
siswa1.addNilai(new Nilai("12345", fisika, 85));
siswa2.addNilai(new Nilai("12346", matematika, 80));

// Data Kelas
const kelas1 = new Kelas(1, "Kelas A", [siswa1, siswa2]);
const kelas2 = new Kelas(2, "Kelas B", []);

const kelas = [kelas1, kelas2];

const sekolah = new Sekolah("SMK Negeri 1 Jakarta", "Jl. Merdeka No. 1", 1, kelas, siswa);

// Hitung Ranking Kelas
const ranking = kelas1.rankingKelas();

// Tampilkan Ranking Kelas
console.log("Ranking Kelas:");
ranking.forEach((siswa, index) => {
    console.log(
        `Ranking ke-${index + 1}: ${siswa.getNama()} dengan nilai rata-rata ${siswa.rataRata()}`
    );
});

// Cari Ranking Berdasarkan NISN
let rankingAndi = -1;
for (let i = 0; i < ranking.length; i++) {
    if (ranking[i].getNisn() === "12346") {
        rankingAndi = i + 1;
        break;
    }
}

console.log(`Ranking Andi: ${rankingAndi}`);

const ratarataAndi = rankingAndi !== -1 ? ranking[rankingAndi - 1].rataRata() : 0;

console.log(`Rata-rata Andi: ${ratarataAndi}`);

let rankingParalel = sekolah.perankinganSiswa();

console.log("Ranking Paralel:");
rankingParalel.forEach((siswa, index) => {
    console.log(
        `Ranking ke-${index + 1}: ${siswa.getNama()} dengan nilai rata-rata ${siswa.rataRata()}`
    );
});


//cari siswa berada di kelas mana menggunakan nisn dengan memunculkan id kelas
let siswaKelas = -1;
for (let i = 0; i < kelas.length; i++) {
    for (let j = 0; j < kelas[i].siswa.length; j++) {
        if (kelas[i].siswa[j].getNisn() === "12346") {
            siswaKelas = kelas[i].getIdKelas();
            break;
        }
    }
}


console.log(`Siswa berada di kelas: ${siswaKelas}`);

//cari sekolah berdasarkan id kelas dan menampilkan nama sekolah
let sekolahKelas = -1;
for (let i = 0; i < kelas.length; i++) {
    if (kelas[i].getIdKelas() === 1) {
        sekolahKelas = sekolah.getIdSekolah();
        break;
    }
}

const cariSekolah = sekolahKelas !== -1 ? sekolah.getNamaSekolah() : "Tidak ditemukan";

console.log(`Sekolah dari kelas 1: ${cariSekolah}`);