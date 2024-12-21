"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guru = void 0;
const Member_1 = require("./Member");
class Guru extends Member_1.Member {
    constructor(nama, nip, alamat, id_mapel, id_member, gender) {
        super(nama, alamat, id_member, gender);
        this.role = "Guru";
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
    setNama(nama) {
        this.nama = nama;
    }
    setNip(nip) {
        this.nip = nip;
    }
    setAlamat(alamat) {
        this.alamat = alamat;
    }
    setIdMapel(id_mapel) {
        this.id_mapel = id_mapel;
    }
    setRole(role) {
        this.role = role;
    }
}
exports.Guru = Guru;
