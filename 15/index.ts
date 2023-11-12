import { of, interval, take, Observable, fromEvent } from "rxjs";
import { map, filter, scan } from "rxjs/operators";

const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 3000);
});
observable.subscribe({
    next: (x) => console.log(x),
    error: (err) => console.log(err),
    complete: () => console.log("done"),
});

// interval(500) 输出 0 1 2 3 4 5 6 7 8 9 10 ... 500
const subs = interval(500)
    .pipe(
        map((v) => ({ num: v })),
        filter((v) => v.num % 2 === 0)
    )
    .subscribe((e) => {
        console.log(e);
        if (e.num === 10) {
            subs.unsubscribe();
        }
    });

// of(5) 自定义数据
const source = of(1, 2, 3, 4, 5);
// retry(2) 重试2次
// formEvent(document, 'click') 事件监听
const click$ = fromEvent(document, "click").pipe(map((e) => e.target));
click$.subscribe((e) => console.log(e));
// take(3) 只取前3个
