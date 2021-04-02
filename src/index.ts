export class AsyncTask<T = void> implements Promise<T> {
  [Symbol.toStringTag]: "Promise";
  
  private _promise: Promise<T>;
  private _resolve!: (value: (T | PromiseLike<T>)) => void;
  private _reject!: (reason?: any) => void;
  
  public constructor() {
    this._promise = new Promise((resolve, reject) => (this._resolve = resolve, this._reject = reject));
  }
  
  public then<TResult1 = T, TResult2 = never>(
    onFulfilled?: ((value: T) =>
      TResult1 | PromiseLike<TResult1>) | undefined | null,
    onRejected?: ((reason: any) =>
      TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): Promise<TResult1 | TResult2> {
    return this._promise.then(onFulfilled, onRejected);
  }
  
  public catch<TResult = never>(
    onRejected?: ((reason: any) =>
      TResult | PromiseLike<TResult>) | undefined | null,
  ): Promise<T | TResult> {
    return this._promise.catch(onRejected);
  }
  
  public finally(onFinally?: (() => void) | undefined | null): Promise<T> {
    return this._promise.finally(onFinally);
  }
  
  public resolve(val: T) {
    this._resolve(val);
  }
  
  public reject(reason: any) {
    this._reject(reason);
  }
}
