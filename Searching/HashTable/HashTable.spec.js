"use strict";

const { HashTable } = require("./HashTable");
const assert = require("assert");

describe("Hash table", () => {

    let hashTable;

    beforeEach(() => {
        hashTable = new HashTable();
    });

    it("set data in hash table", () => {
        hashTable.set("name", "Masha");
        assert.strictEqual(hashTable.get("name"), "Masha");
        hashTable.set("name", "Sasha");
        assert.strictEqual(hashTable.get("name"), "Sasha");
    });

    it("check hash table has key", () => {
        hashTable.set("name", "Masha");
        assert.ok(hashTable.has("name"));
        assert.ok(!hashTable.has("surname"));
    });

    it("get data from hash table", () => {
        hashTable.set("age", "20");
        assert.strictEqual(hashTable.get("age"), "20");
        assert.strictEqual(hashTable.get("name"), undefined);
    });

    it("delete data from hash table", () => {
        hashTable.set("age", "20");
        hashTable.delete("age");
        assert.ok(!hashTable.has("age"));
        assert.strictEqual(hashTable.get("age"), undefined);
    });

    it("no error on deleting unknown key", () => {
        hashTable.delete("age");
    });

});