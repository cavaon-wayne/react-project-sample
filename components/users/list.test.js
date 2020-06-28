import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';

import UserList from './list';

jest.mock('axios');

describe('users list', () => {
  test('renders users component', async () => {
    const users = [
      {
        id: 1,
        name: 'Username 1',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          city: 'Gwenborough',
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
        },
      },
      {
        id: 2,
        name: 'Username 2',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          city: 'Wisokyburgh',
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
        },
      },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: users }));

    const { findAllByText } = render(<UserList />);

    const items = await findAllByText(/(Shanna@melissa\.tv|Sincere@april\.biz)/);

    expect(items).toHaveLength(2);
  });
});
