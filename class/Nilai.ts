import { Mapel } from "./Mapel";

export class Nilai {
    nisn: string;
    nilai: number;
    mapel : Mapel
    id_mapel: number;

    constructor(nisn: string, mapel: Mapel, nilai: number) {
        this.nisn = nisn;
        this.mapel = mapel;
        this.nilai = nilai;
        this.id_mapel = mapel.getIdMapel();
    }

    getIdMember() {
        return this.nisn;
    }

    getIdMapel() {
        return this.mapel.getIdMapel;
    }


    getNilai() {
        return this.nilai;
    }

    setIdMember(nisn: string) {
        this.nisn = nisn;
    }

    setNilai(nilai: number) {
        this.nilai = nilai;
    }


    toString() {
        return `ID Member: ${this.nisn}, ID Mapel: ${this.mapel.getIdMapel}, Nilai: ${this.nilai}`;
    }

}