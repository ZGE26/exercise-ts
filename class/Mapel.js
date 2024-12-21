"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapel = void 0;
var Mapel = /** @class */ (function () {
    function Mapel(id_mapel, nama_mapel) {
        this.id_mapel = id_mapel;
        this.nama_mapel = nama_mapel;
    }
    Mapel.prototype.getIdMapel = function () {
        return this.id_mapel;
    };
    Mapel.prototype.getNamaMapel = function () {
        return this.nama_mapel;
    };
    return Mapel;
}());
exports.Mapel = Mapel;
