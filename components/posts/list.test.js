import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';

import PostList from './list';

jest.mock('axios');

describe('posts list', () => {
  test('renders Post component', async () => {
    const posts = [
      { id: '1', userId: '1', title: 'title 1', body: 'body 1' },
      { id: '2', userId: '2', title: 'title 2', body: 'body 2' },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: posts }));

    const { findAllByText } = render(<PostList />);

    const items = await findAllByText(/title (1|2)/);

    expect(items).toHaveLength(2);
  });
});
