// 1. ngrx/store import  => createAction
import { createAction } from '@ngrx/store';

// 2. event export 하기
export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const reset = createAction('Reset');
