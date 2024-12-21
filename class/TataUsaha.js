"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TataUsaha = void 0;
const Member_1 = require("./Member");
class TataUsaha extends Member_1.Member {
    constructor(nama, nip, alamat, id_member, gender) {
        super(nama, alamat, id_member, gender);
        this.role = "TU";
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
exports.TataUsaha = TataUsaha;
