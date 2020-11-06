import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentComponent from './ContentComponent';

describe('<ContentComponent />', () => {
  test('it should mount', () => {
    render(<ContentComponent />);
    
    const contentComponent = screen.getByTestId('ContentComponent');

    expect(contentComponent).toBeInTheDocument();
  });
});