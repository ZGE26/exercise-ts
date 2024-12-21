import { Member } from "./Member";

export class TataUsaha extends Member {
    nip: string;
    role: string = "TU";

    constructor(nama: string, nip: string, alamat: string, id_member: number, gender: string) {
        super(nama, alamat, id_member, gender);
        this.nip = nip;
    }

    getNama() {
        return this.nama;
    }

    getGender() {
        return this.gender;
    }

    getNip() {
        return this.nip;
    }

    getAlamat() {
        return this.alamat;
    }

    getRole() {
        return this.role;
    }
}