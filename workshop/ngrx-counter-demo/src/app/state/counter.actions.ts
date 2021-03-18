import { Action, createAction } from '@ngrx/store';

export enum CounterActionType {
  Increment = '[Counter Page] Increment',
  Decrement = '[Counter Page] Decrement',
}

export const increment = createAction(CounterActionType.Increment);
export const decrement = createAction(CounterActionType.Decrement);
