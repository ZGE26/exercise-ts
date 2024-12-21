"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nilai = void 0;
var Nilai = /** @class */ (function () {
    function Nilai(nisn, mapel, nilai) {
        this.nisn = nisn;
        this.mapel = mapel;
        this.nilai = nilai;
        this.id_mapel = mapel.getIdMapel();
    }
    Nilai.prototype.getIdMember = function () {
        return this.nisn;
    };
    Nilai.prototype.getIdMapel = function () {
        return this.mapel.getIdMapel;
    };
    Nilai.prototype.getNilai = function () {
        return this.nilai;
    };
    Nilai.prototype.setIdMember = function (nisn) {
        this.nisn = nisn;
    };
    Nilai.prototype.setNilai = function (nilai) {
        this.nilai = nilai;
    };
    Nilai.prototype.toString = function () {
        return "ID Member: ".concat(this.nisn, ", ID Mapel: ").concat(this.mapel.getIdMapel, ", Nilai: ").concat(this.nilai);
    };
    return Nilai;
}());
exports.Nilai = Nilai;
