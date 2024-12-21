export class Mapel {
    id_mapel: number;
    nama_mapel: string;

    constructor(id_mapel: number, nama_mapel: string) {
        this.id_mapel = id_mapel;
        this.nama_mapel = nama_mapel;
    }

    getIdMapel() {
        return this.id_mapel;
    }

    getNamaMapel() {
        return this.nama_mapel;
    }
}