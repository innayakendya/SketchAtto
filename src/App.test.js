// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SketchAtto title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SketchAtto/i);
    expect(titleElement).toBeInTheDocument();
});
