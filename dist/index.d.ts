export declare class AsyncTask<T = void> implements Promise<T> {
    [Symbol.toStringTag]: "Promise";
    private _promise;
    private _resolve;
    private _reject;
    constructor();
    then<TResult1 = T, TResult2 = never>(onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    finally(onFinally?: (() => void) | undefined | null): Promise<T>;
    resolve(val: T): void;
    reject(reason: any): void;
}
