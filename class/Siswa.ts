import { Member } from "./Member";
import { Nilai } from "./Nilai";

export class Siswa extends Member {
    nisn: string;
    id_kelas: number;
    role: string = "Siswa";
    nilai: Nilai[] = [];


    constructor(nama: string, nisn: string, alamat: string, id_kelas: number, id_meber: number, gender: string) {
        super(nama, alamat, id_meber, gender);
        this.nisn = nisn;
        this.id_kelas = id_kelas;
    }

    addNilai(nilai: Nilai) {
        this.nilai.push(nilai);
    }

    getGender() {
        return this.gender;
    }

    getNama() {
        return this.nama;
    }

    getNisn() {
        return this.nisn;
    }

    getAlamat() {
        return this.alamat;
    }


    getIdKelas() {
        return this.id_kelas;
    }

    getRole() {
        return this.role;
    }

    setNama(nama: string) {
        this.nama = nama;
    }

    setNisn(nisn: string) {
        this.nisn = nisn;
    }

    setAlamat(alamat: string) {
        this.alamat = alamat;
    }


    setIdKelas(id_kelas: number) {
        this.id_kelas = id_kelas;
    }

    setRole(role: string) {
        this.role = role;
    }

    addNilaiSiswa(nilai: Nilai) {
        this.nilai.push(nilai);
    }

    rataRata(): number {
        const totalNilai = this.nilai.reduce((acc, nilai) => acc + nilai.nilai, 0);
        return this.nilai.length ? totalNilai / this.nilai.length : 0;
    }
}