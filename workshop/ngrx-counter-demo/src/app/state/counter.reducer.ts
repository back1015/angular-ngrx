import { on } from '@ngrx/store';
import {  CounterActionType } from './counter.actions';

export interface CounterState {
    count: number;
}

export const initialState: CounterState = {
    count: 0
}

export const counterReducer = (state = initialState, action: CounterActionType ) => {
    on('INCREMENT', state => state + 1),
    on('DECREMENT', state => state - 1),
    on(reset, state => 0),
}
