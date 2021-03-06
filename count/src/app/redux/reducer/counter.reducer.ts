/**
 * 1. @ngrx/store import 하기 (createReducer, on)
 * 2. action.ts import 하기 (Increment, Decrement, reset)
 */
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

// 초기값 세팅
export const initalState = 0;

const _counterReducer = createReducer(
  initalState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
