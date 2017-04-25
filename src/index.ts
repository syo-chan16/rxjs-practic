import { Observable } from "rxjs";

// SetTimeoutを使った非同期処理
class SetTimeoutAsync {
    notify() {
        console.log('hello');
    }

    asyncOperation(callback) {
        setTimeout(callback, 2000);
    }

    constructor() {
        this.asyncOperation(this.notify);
        console.log('world');
    }
}

// Promiseを使った非同期処理
class PromiseAsync {
    notify() {
        console.log('hello');
    }

    asyncOperation() {
        var promise = new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        });
        return promise;
    }

    constructor() {
        this.asyncOperation().then(this.notify);
        console.log('world');
    }
}

// Observableを使った非同期処理
class ObservableAsync {
    observable: Observable<any>;
    constructor() {
        this.observable = Observable.create(observer => {
            // 一定時間ごとに繰り返す！
            setInterval(() => {
                observer.onNext('hello');
            }, 2000);
        });
        this.observable.subscribe(response => console.log(response));
        console.log('world');
    }
}

// この辺で実行
(() => {
    new SetTimeoutAsync();

    new PromiseAsync();

    new ObservableAsync();
});