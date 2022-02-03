"use strict";

const CRC32 = require("crc-32");


class HashTable {
    constructor() {
        this.table = [];
    }

    set(key, value) {
        const record = this.getRecord(key);
        if (record) {
            record.value = value;
            return;
        }

        const {x, y} = this.hash(key);
        if (!this.table[x]) {
            this.table[x] = [];
        }
        if (!this.table[x][y]) {
            this.table[x][y] = [];
        }
        this.table[x][y].push({key, value});
    }

    has(key) {
        return !!this.getRecord(key);
    }

    get(key) {
        const record = this.getRecord(key);
        return record?.value;
    }

    delete(key) {
        if (this.has(key)) {
            const {x, y} = this.hash(key);
            const records = this.table[x][y];
            this.table[x][y] = records.filter(record => record.key !== key);
        }
    }

    hash(key) {
        const leftPartOfKey = key.slice(0, key.length / 2);
        const rightPartOfKey = key.slice(key.length / 2);
        const x = CRC32.str(leftPartOfKey) % 10000;
        const y = CRC32.str(rightPartOfKey) % 10000;

        return {x, y};
    }

    getRecord(key) {
        const {x, y} = this.hash(key);
        const subTable = this.table[x] || [];
        const records = subTable[y] || [];

        return records.find(record => record.key === key);
    }

}

module.exports = { HashTable };
