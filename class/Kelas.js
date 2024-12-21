"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kelas = void 0;
var Kelas = /** @class */ (function () {
    function Kelas(id_kelas, nama_kelas, siswa) {
        this.id_kelas = id_kelas;
        this.nama_kelas = nama_kelas;
        this.siswa = siswa;
    }
    Kelas.prototype.getIdKelas = function () {
        return this.id_kelas;
    };
    Kelas.prototype.getNamaKelas = function () {
        return this.nama_kelas;
    };
    Kelas.prototype.getsiswa = function () {
        return this.siswa;
    };
    Kelas.prototype.addMemberSiswa = function (siswa) {
        this.siswa.push(siswa);
    };
    Kelas.prototype.showSiswa = function () {
        return this.siswa;
    };
    Kelas.prototype.removeMemberSiswa = function (id_member) {
        this.siswa = this.siswa.filter(function (member) { return member.id_member !== id_member; });
    };
    Kelas.prototype.rankingKelas = function () {
        return this.siswa.sort(function (a, b) { return b.rataRata() - a.rataRata(); });
    };
    return Kelas;
}());
exports.Kelas = Kelas;
