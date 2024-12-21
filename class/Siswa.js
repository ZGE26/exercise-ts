"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Siswa = void 0;
var Member_1 = require("./Member");
var Siswa = /** @class */ (function (_super) {
    __extends(Siswa, _super);
    function Siswa(nama, nisn, alamat, id_kelas, id_meber, gender) {
        var _this = _super.call(this, nama, alamat, id_meber, gender) || this;
        _this.role = "Siswa";
        _this.nilai = [];
        _this.nisn = nisn;
        _this.id_kelas = id_kelas;
        return _this;
    }
    Siswa.prototype.addNilai = function (nilai) {
        this.nilai.push(nilai);
    };
    Siswa.prototype.getGender = function () {
        return this.gender;
    };
    Siswa.prototype.getNama = function () {
        return this.nama;
    };
    Siswa.prototype.getNisn = function () {
        return this.nisn;
    };
    Siswa.prototype.getAlamat = function () {
        return this.alamat;
    };
    Siswa.prototype.getIdKelas = function () {
        return this.id_kelas;
    };
    Siswa.prototype.getRole = function () {
        return this.role;
    };
    Siswa.prototype.setNama = function (nama) {
        this.nama = nama;
    };
    Siswa.prototype.setNisn = function (nisn) {
        this.nisn = nisn;
    };
    Siswa.prototype.setAlamat = function (alamat) {
        this.alamat = alamat;
    };
    Siswa.prototype.setIdKelas = function (id_kelas) {
        this.id_kelas = id_kelas;
    };
    Siswa.prototype.setRole = function (role) {
        this.role = role;
    };
    Siswa.prototype.addNilaiSiswa = function (nilai) {
        this.nilai.push(nilai);
    };
    Siswa.prototype.rataRata = function () {
        var totalNilai = this.nilai.reduce(function (acc, nilai) { return acc + nilai.nilai; }, 0);
        return this.nilai.length ? totalNilai / this.nilai.length : 0;
    };
    return Siswa;
}(Member_1.Member));
exports.Siswa = Siswa;
