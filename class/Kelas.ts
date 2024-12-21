import { Siswa } from "./Siswa";

export class Kelas {
    id_kelas: number;
    nama_kelas: string;
    siswa: Siswa[];

    constructor(id_kelas: number, nama_kelas: string, siswa: Siswa[]) {
        this.id_kelas = id_kelas;
        this.nama_kelas = nama_kelas;
        this.siswa = siswa;
    }

    getIdKelas() {
        return this.id_kelas;
    }

    getNamaKelas() {
        return this.nama_kelas;
    }

    getsiswa() {
        return this.siswa;
    }

    addMemberSiswa(siswa: Siswa) {
        this.siswa.push(siswa);
    }

    showSiswa() {
        return this.siswa;
    }

    removeMemberSiswa(id_member: number) {
        this.siswa = this.siswa.filter((member) => member.id_member !== id_member);
    }

    rankingKelas(): Siswa[] {
        return this.siswa.sort((a, b) => b.rataRata() - a.rataRata());
    }
}