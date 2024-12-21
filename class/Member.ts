export class Member {
    gender: string = "";
    nama: String = "";
    alamat: String = "";
    id_member: number = 0;

    constructor(nama: string, alamat: string, id_member: number, gender: string) {
        if(gender === "L" || gender === "P") {
            this.gender = gender;
        }
        this.nama = nama;
        this.alamat = alamat;
        this.id_member = id_member;
    }

    getGender() {
        return this.gender;
    }

    getNama() {
        return this.nama;
    }

    getAlamat() {
        return this.alamat;
    }

    getIdMember() {
        return this.id_member;
    }

    setNama(nama: string) {
        this.nama = nama;
    }

    setAlamat(alamat: string) {
        this.alamat = alamat;
    }
}