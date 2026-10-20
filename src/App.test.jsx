import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders Mudy Engineering and links to all pages', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /built on good thinking/i })).toBeDefined();
  const navigation = within(screen.getByRole('navigation', { name: /main navigation/i }));
  expect(navigation.getByRole('link', { name: 'Home' })).toBeDefined();
  expect(navigation.getByRole('link', { name: 'Contact' })).toBeDefined();
});

test('shows the contact enquiry form on its route', () => {
  window.location.hash = '#/contact';
  render(<App />);
  expect(screen.getByRole('heading', { name: /what are you working on/i })).toBeDefined();
  expect(screen.getByRole('button', { name: /send enquiry/i })).toBeDefined();
});
