"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.generateObjectId = () => mongoose.Types.ObjectId();
// mongoose.Types.ObjectId.isValid(id);
exports.isValidObjectId = (id) => new RegExp("^[0-9a-fA-F]{24}$").test(id);
function lean(document) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return leanObject(yield document.lean());
        }
        catch (err) {
            return err;
        }
    });
}
exports.lean = lean;
function leanObject(doc) {
    try {
        if (doc && doc["_id"]) {
            doc.id = doc["._id"];
            delete doc["_id"];
            delete doc["__v"];
        }
        return doc;
    }
    catch (err) {
        return err;
    }
}
exports.leanObject = leanObject;
function isEmpty(val) {
    if (typeof val === "string") {
        return !val || 0 === val.trim().length;
    }
    if (val === 0) {
        return false;
    }
    return !val || 0 === val.length;
}
exports.isEmpty = isEmpty;
function isEmptyArray(arr) {
    if (arr && !arr.length) {
        return true;
    }
    return false;
}
exports.isEmptyArray = isEmptyArray;
exports.isBoolean = (item) => typeof item === "boolean";
exports.isObject = (item) => item && typeof item === "object" && item.constructor === Object && Object.keys(item).length > 0;
exports.isPositiveInteger = (skip) => new RegExp("^(0*[1-9]+[0-9]*)$").test(skip);
exports.isString = (item) => typeof item === "string";
exports.isNumber = (item) => typeof item === "number";
exports.isValidEmail = (email) => new RegExp("[a-zA-Z0-9_]+.[a-zA-Z0-9_]+@[a-zA-Z0-9]+.[a-z]{1,8}").test(email);
exports.isValidUTCDate = date => /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z$/.test(date);
/**
* Return true if date is correct and formatted
* @param date date to test
* @returns An invalid date object returns NaN for getTime() and NaN is the only object not strictly equal to itself
*/
function isValidDate(data) {
    try {
        const parms = data.split(/[\-\/]/);
        const yyyy = parseInt(parms[2], 10);
        const mm = parseInt(parms[1], 10);
        const dd = parseInt(parms[0], 10);
        const date = new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
        return mm === date.getMonth() + 1 && dd === date.getDate() && yyyy === date.getFullYear();
    }
    catch (err) {
        return false;
    }
}
exports.isValidDate = isValidDate;
/**
 * Returns true if existing entity has the spesified id.
 * @param id 'id' to test.
 * @returns A true if the value is null or undefined, false otherwise.
 */
function isNullOrUndefined(x) {
    return x === null || x === undefined;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNull(x) {
    return x === null;
}
exports.isNull = isNull;
function isValidArrayOfIds(arr) {
    if (Array.isArray(arr)) {
        return arr.every(item => exports.isValidObjectId(item));
    }
    return false;
}
exports.isValidArrayOfIds = isValidArrayOfIds;
function getKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}
exports.getKeyByValue = getKeyByValue;
function isPlatformService(nodeEnv) {
    return nodeEnv.includes("g1ps");
}
exports.isPlatformService = isPlatformService;
function isValidArrayOfNumbers(arr) {
    if (Array.isArray(arr)) {
        return arr.every(item => typeof item === "number");
    }
    return false;
}
exports.isValidArrayOfNumbers = isValidArrayOfNumbers;
function isValidArrayOfStrings(arr) {
    if (Array.isArray(arr)) {
        return arr.every(item => typeof item === "string");
    }
    return false;
}
exports.isValidArrayOfStrings = isValidArrayOfStrings;
function isArrayOfStringsAndNulls(arr) {
    if (Array.isArray(arr)) {
        return arr.every(item => typeof item === "string" || item === null);
    }
    return false;
}
exports.isArrayOfStringsAndNulls = isArrayOfStringsAndNulls;
/****************************************************************************************
 * FUNCTIONAL OPERATIONS *
 ****************************************************************************************/
/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = await forEachSync(arr, func);
 */
function forEachSync(arr, func) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const item of arr) {
            yield func(item);
        }
    });
}
exports.forEachSync = forEachSync;
/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = await forEachSync(arr, func);
 */
function mapSync(arr, func) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = [];
        for (const item of arr) {
            result.push(yield func(item));
        }
        return result;
    });
}
exports.mapSync = mapSync;
/**
 * Returns true if existing entity has the specified id.
 * @param id 'id' to test.
 * @returns A Function that takes the object to test
 */
function negate(fn) {
    return function negated(...args) {
        return !fn(...args);
    };
}
exports.negate = negate;
/**
 * Returns the value of a key in a given object
 * @param key 'key' to test.
 * @returns A Function that takes the object to test
 */
function pluck(key) {
    return (obj) => {
        return obj[key];
    };
}
exports.pluck = pluck;
/**
 * Returns a new object with the lselected key/value pairs of a given object
 * @param keys 'key's to test.
 * @returns A Function that takes the object to test
 */
function plucks(keys) {
    return (obj) => {
        const res = {};
        keys.forEach(k => {
            res[k] = obj[k];
        });
        return res;
    };
}
exports.plucks = plucks;
/**
 * Returns true if an item is the same as the other one.
 * @param x Item 1 to test.
 * @returns A Function that takes the second item to test
 */
function isSame(x) {
    return y => {
        return x === y;
    };
}
exports.isSame = isSame;
function isSameString(a, isCaseSensitive = false) {
    return (b) => {
        return a && b && (isCaseSensitive ? a === b : a.toLowerCase().trim() === b.toLowerCase().trim());
    };
}
exports.isSameString = isSameString;
/**
 * Returns true if existing entity has the specified id.
 * @param id 'id' to test.
 * @returns A Function that takes the object to test
 */
function isSameEntity(id, isCaseSensitive = false) {
    return function isSameId(entity) {
        return id && entity && (isCaseSensitive ? entity.id === id : entity.id.toLowerCase() === id.toLowerCase());
    };
}
exports.isSameEntity = isSameEntity;
/**
 * Returns true if a field of an object is same as the item.
 * @param item Item to test.
 * @returns A Function that takes the field of the object to test
 */
function isSameItemAsField(item) {
    return field => {
        return obj => {
            return obj[field] === item;
        };
    };
}
exports.isSameItemAsField = isSameItemAsField;
/**
* Sorts a list of data (case-insensitive)
* @param data The data to sort
* @param sortBy The field that will be used in sorting
* @param isAsc Indicates if sort direction ascending or non-ascengind (descending)
*/
function sort(data, sortBy, isAsc = true) {
    return data.sort((a, b) => {
        return isAsc ? (sortBy ? compare(a[sortBy], b[sortBy]) : compare(a, b)) : sortBy ? compare(b[sortBy], a[sortBy]) : compare(b, a);
    });
}
exports.sort = sort;
/**
 * Compares two items (case-insensitive - used mainly for sorting).
 * @param a The first item to compare
 * @param b The second item to compare
 * @returns -1, 0 or 1
 */
function compare(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    return a === b ? 0 : a < b ? -1 : 1;
}
exports.compare = compare;
/**
* Returns string representation of the key or value of the item in the enum list.
* @param enums Enum list.
* @param enumKeyOrValue Key or Value in the enum list.
* @returns A new object that has same structure as the input.
*/
function getEnumKeyOrValue(enums, enumKeyOrValue) {
    return enums[enumKeyOrValue];
}
exports.getEnumKeyOrValue = getEnumKeyOrValue;
function sliceData(data, { limit = 1000, skip = 0 }) {
    return limit === -1 ? data.slice(skip) : data.slice(skip, skip + limit);
}
exports.sliceData = sliceData;
exports.getUniqueData = (data, searchKey) => {
    const filteredKeys = [...new Set(data.map(item => item[searchKey]))];
    const filteredData = [];
    filteredKeys.forEach(filteredKey => {
        const result = data.find(app => app[searchKey] === filteredKey);
        if (result) {
            filteredData.push(result);
        }
    });
    return filteredData;
};
function hasOwnProperty(obj, key) {
    return obj.hasOwnProperty(key);
}
exports.hasOwnProperty = hasOwnProperty;
function isSubset(arr, arr2) {
    if (Array.isArray(arr) && Array.isArray(arr2)) {
        return arr.every(item => arr2.includes(item));
    }
    return false;
}
exports.isSubset = isSubset;
//# sourceMappingURL=utilities.js.map