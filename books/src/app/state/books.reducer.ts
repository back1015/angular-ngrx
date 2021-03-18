import { createReducer, on, Action } from '@ngrx/store';
import { retrievedBookList } from './books.actions';
import { Book } from '../book-list/books.model';

export const initalState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initalState,
  on(retrievedBookList, (state, { Book }) => [...Book])
);
