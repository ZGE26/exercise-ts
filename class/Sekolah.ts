import { Kelas } from "./Kelas";
import { Member } from "./Member";

export class Sekolah {
    nama_sekolah: string;
    alamat: string;
    id_sekolah: number;
    listKelas: Kelas[];
    member: Member[];
    constructor(nama_sekolah: string, alamat: string, id_sekolah: number, listKelas: Kelas[], member : Member[]) {
        this.nama_sekolah = nama_sekolah;
        this.alamat = alamat;
        this.id_sekolah = id_sekolah;
        this.listKelas = listKelas;
        this.member = member;
    }

    getNamaSekolah() {
        return this.nama_sekolah;
    }

    getAlamat() {
        return this.alamat;
    }

    getIdSekolah() {
        return this.id_sekolah;
    }

    setNamaSekolah(nama_sekolah: string) {
        this.nama_sekolah = nama_sekolah;
    }

    setAlamat(alamat: string) {
        this.alamat = alamat;
    }

    setIdSekolah(id_sekolah: number) {
        this.id_sekolah = id_sekolah;
    }

    addKelas(kelas: Kelas) {
        this.listKelas.push(kelas);
    }

    addMember(member : Member) {
        this.member.push(member);
    }   

    showKelas() {
        return this.listKelas;
    }

    showListMember() {
        return this.member;
    }

    perankinganSiswa() {
        let listRanking = [];
        for (let i = 0; i < this.listKelas.length; i++) {
            for (let j = 0; j < this.listKelas[i].siswa.length; j++) {
                listRanking.push(this.listKelas[i].siswa[j]);
            }
        }
        return listRanking.sort((a, b) => {
            return b.rataRata() - a.rataRata();
        });
    }
}