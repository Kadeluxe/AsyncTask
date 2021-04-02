"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncTask = void 0;
class AsyncTask {
    constructor() {
        this._promise = new Promise((resolve, reject) => (this._resolve = resolve, this._reject = reject));
    }
    then(onFulfilled, onRejected) {
        return this._promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this._promise.catch(onRejected);
    }
    finally(onFinally) {
        return this._promise.finally(onFinally);
    }
    resolve(val) {
        this._resolve(val);
    }
    reject(reason) {
        this._reject(reason);
    }
}
exports.AsyncTask = AsyncTask;
