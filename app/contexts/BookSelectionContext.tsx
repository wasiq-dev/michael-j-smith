'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Book data structure (display only — no pricing / commerce)
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

// Available books
const books: Book[] = [
  {
    id: 'book1',
    title: 'The First Title',
    author: 'AUTHOR',
    description:
      'A sweeping story about resilience, memory and the quiet courage it takes to begin again. Placeholder description — replace this with the real synopsis for the first book. It should run two to four sentences so the layout keeps its shape, drawing the reader in without giving away the ending.',
    heroImage: '/images/hero-book.jpg',
    aboutImage: '/images/book-other-position.png',
    featuresImage: '/images/goodthings.png',
    handsImage: '/images/book-in-hand.png',
  },
  {
    id: 'book2',
    title: 'The Second Title',
    author: 'AUTHOR',
    description:
      'A warm, observant novel about starting over in an unfamiliar place and the unexpected friendships that follow. Placeholder description — swap in the real blurb for the second book here. Keep it to a few sentences so the surrounding design stays balanced on every screen size.',
    heroImage: '/images/hero-book2.png',
    aboutImage: '/images/about-the-book2.png',
    featuresImage: '/images/goodthings2.png',
    handsImage: '/images/hand-left2.png',
  },
];

// Context state
interface BookSelectionState {
  selectedBook: Book;
  availableBooks: Book[];
}

// Action types
type BookSelectionAction =
  | { type: 'SELECT_BOOK'; payload: string }
  | { type: 'RESET_TO_BOOK1' };

// Initial state
const initialState: BookSelectionState = {
  selectedBook: books[0],
  availableBooks: books,
};

// Reducer
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

// Context
interface BookSelectionContextType {
  state: BookSelectionState;
  selectBook: (bookId: string) => void;
  resetToBook1: () => void;
}

const BookSelectionContext = createContext<BookSelectionContextType | undefined>(
  undefined
);

// Provider component
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

// Hook to use the context
export function useBookSelection() {
  const context = useContext(BookSelectionContext);
  if (context === undefined) {
    throw new Error('useBookSelection must be used within a BookSelectionProvider');
  }
  return context;
}
