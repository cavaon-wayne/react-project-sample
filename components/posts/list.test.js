import React from 'react';
import { render, screen } from '@testing-library/react';

import PostList from './list';

describe('posts list', () => {
  test('renders Post component', () => {
    render(<PostList />);

    screen.debug();
  });
});
