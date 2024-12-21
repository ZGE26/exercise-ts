import { Member } from './Member';

export class Guru extends Member {
    nip: string;
    id_mapel: number;
    role: string = "Guru";

    constructor(nama: string, nip: string, alamat: string, id_mapel: number, id_member: number, gender: string) {
        super(nama, alamat, id_member, gender);
        this.nip = nip;
        this.id_mapel = id_mapel;
    }

    getNama() {
        return this.nama;
    }

    getNip() {
        return this.nip;
    }

    getAlamat() {
        return this.alamat;
    }

    getGender() {
        return this.gender;
    }

    getIdMapel() {
        return this.id_mapel;
    }

    getRole() {
        return this.role;
    }

    setNama(nama: string) {
        this.nama = nama;
    }

    setNip(nip: string) {
        this.nip = nip;
    }

    setAlamat(alamat: string) {
        this.alamat = alamat;
    }


    setIdMapel(id_mapel: number) {
        this.id_mapel = id_mapel;
    }

    setRole(role: string) {
        this.role = role;
    }
}