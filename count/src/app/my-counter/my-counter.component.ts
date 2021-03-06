import { Component } from '@angular/core';
import { Store } from '@ngrx/store'; // store Store import 한다.
import { Observable } from 'rxjs';
// actions 파일 import
import { increment, decrement, reset } from '../redux/actions/counter.actions';
/**
 * Store 작업을 위해 dispatch 해야 한다.
 * rxjs import 한다 Observable
 */
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  // Observable 설정
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    // TODO: 'this.count$' 스트림을 현재 스토어 'count' 상태에 연결
    this.count$ = store.select('count');
  }

  increment(): void {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }
  decrement(): void {
    // TODO: Dispatch an decrement action
    this.store.dispatch(decrement());
  }
  reset(): void {
    // TODO: Dispatch an reset action
    this.store.dispatch(reset());
  }
}
