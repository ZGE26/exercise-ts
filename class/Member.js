"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = /** @class */ (function () {
    function Member(nama, alamat, id_member, gender) {
        this.gender = "";
        this.nama = "";
        this.alamat = "";
        this.id_member = 0;
        if (gender === "L" || gender === "P") {
            this.gender = gender;
        }
        this.nama = nama;
        this.alamat = alamat;
        this.id_member = id_member;
    }
    Member.prototype.getGender = function () {
        return this.gender;
    };
    Member.prototype.getNama = function () {
        return this.nama;
    };
    Member.prototype.getAlamat = function () {
        return this.alamat;
    };
    Member.prototype.getIdMember = function () {
        return this.id_member;
    };
    Member.prototype.setNama = function (nama) {
        this.nama = nama;
    };
    Member.prototype.setAlamat = function (alamat) {
        this.alamat = alamat;
    };
    return Member;
}());
exports.Member = Member;
