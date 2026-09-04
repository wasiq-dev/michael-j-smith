'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { SITE } from '../lib/site-content';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  heroImage: string;
  aboutImage: string;
  featuresImage: string;
  handsImage: string;
}

const books: Book[] = [
  {
    id: 'book1',
    title: SITE.book.title,
    author: SITE.book.author,
    description: SITE.book.fullDescription,
    heroImage: SITE.book.cover,
    aboutImage: SITE.book.aboutImage,
    featuresImage: '/images/goodthings.png',
    handsImage: '/images/book-in-hand.png',
  },
];

interface BookSelectionState {
  selectedBook: Book;
  availableBooks: Book[];
}

type BookSelectionAction =
  | { type: 'SELECT_BOOK'; payload: string }
  | { type: 'RESET_TO_BOOK1' };

const initialState: BookSelectionState = {
  selectedBook: books[0],
  availableBooks: books,
};

function bookSelectionReducer(
  state: BookSelectionState,
  action: BookSelectionAction
): BookSelectionState {
  switch (action.type) {
    case 'SELECT_BOOK': {
      const book = state.availableBooks.find((b) => b.id === action.payload);
      return book ? { ...state, selectedBook: book } : state;
    }
    case 'RESET_TO_BOOK1':
      return { ...state, selectedBook: books[0] };
    default:
      return state;
  }
}

interface BookSelectionContextType {
  state: BookSelectionState;
  selectBook: (bookId: string) => void;
  resetToBook1: () => void;
}

const BookSelectionContext = createContext<BookSelectionContextType | undefined>(
  undefined
);

export function BookSelectionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookSelectionReducer, initialState);

  const selectBook = (bookId: string) => {
    dispatch({ type: 'SELECT_BOOK', payload: bookId });
  };

  const resetToBook1 = () => {
    dispatch({ type: 'RESET_TO_BOOK1' });
  };

  return (
    <BookSelectionContext.Provider value={{ state, selectBook, resetToBook1 }}>
      {children}
    </BookSelectionContext.Provider>
  );
}

export function useBookSelection() {
  const context = useContext(BookSelectionContext);
  if (context === undefined) {
    throw new Error('useBookSelection must be used within a BookSelectionProvider');
  }
  return context;
}
