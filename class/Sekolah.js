"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sekolah = void 0;
var Sekolah = /** @class */ (function () {
    function Sekolah(nama_sekolah, alamat, id_sekolah, listKelas, member) {
        this.nama_sekolah = nama_sekolah;
        this.alamat = alamat;
        this.id_sekolah = id_sekolah;
        this.listKelas = listKelas;
        this.member = member;
    }
    Sekolah.prototype.getNamaSekolah = function () {
        return this.nama_sekolah;
    };
    Sekolah.prototype.getAlamat = function () {
        return this.alamat;
    };
    Sekolah.prototype.getIdSekolah = function () {
        return this.id_sekolah;
    };
    Sekolah.prototype.setNamaSekolah = function (nama_sekolah) {
        this.nama_sekolah = nama_sekolah;
    };
    Sekolah.prototype.setAlamat = function (alamat) {
        this.alamat = alamat;
    };
    Sekolah.prototype.setIdSekolah = function (id_sekolah) {
        this.id_sekolah = id_sekolah;
    };
    Sekolah.prototype.addKelas = function (kelas) {
        this.listKelas.push(kelas);
    };
    Sekolah.prototype.addMember = function (member) {
        this.member.push(member);
    };
    Sekolah.prototype.showKelas = function () {
        return this.listKelas;
    };
    Sekolah.prototype.showListMember = function () {
        return this.member;
    };
    Sekolah.prototype.perankinganSiswa = function () {
        var listRanking = [];
        for (var i = 0; i < this.listKelas.length; i++) {
            for (var j = 0; j < this.listKelas[i].siswa.length; j++) {
                listRanking.push(this.listKelas[i].siswa[j]);
            }
        }
        return listRanking.sort(function (a, b) {
            return b.rataRata() - a.rataRata();
        });
    };
    return Sekolah;
}());
exports.Sekolah = Sekolah;
