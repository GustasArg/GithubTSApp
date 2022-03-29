import React from 'react';
import {render} from '@testing-library/react-native';
import {IssueList} from '../components/IssueList';

test('issue list renders issues in the provided order', () => {
  const issueListMock = [
    {
      comments: 12,
      created_at: 'created_at',
      id: 21,
      state: 'state',
      updated_at: 'updated_at',
      title: 'title',
      body: 'body',
    },
    {
      comments: 5,
      created_at: 'created_at',
      id: 5,
      state: 'state',
      updated_at: 'updated_at',
      title: 'title',
      body: 'body',
    },
    {
      comments: 0,
      created_at: 'created_at',
      id: 12,
      state: 'state',
      updated_at: 'updated_at',
      title: 'title',
      body: 'body',
    },
  ];

  const {getAllByTestId} = render(<IssueList issues={issueListMock} />);

  expect(getAllByTestId('comment_count')[0].children[1]).toBe('12');
  expect(getAllByTestId('comment_count')[1].children[1]).toBe('5');
  expect(getAllByTestId('comment_count')[2].children[1]).toBe('0');
});
