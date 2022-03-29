import React from 'react';
import {render} from '@testing-library/react-native';
import {Issue} from '../components/Issue';

test('issue renders all provided params', () => {
  const issueMock = {
    comments: 12,
    created_at: 'created_at',
    id: 21,
    state: 'state',
    updated_at: 'updated_at',
    title: 'title',
    body: 'body',
  };

  const {getByTestId} = render(<Issue issue={issueMock} />);

  expect(getByTestId('issue_body').children[0]).toBe('body');
  expect(getByTestId('issue_title').children[0]).toBe('title');
  expect(getByTestId('comment_count').children[1]).toBe('12');
  expect(getByTestId('created_at').children[1]).toBe('created_at');
  expect(getByTestId('updated_at').children[1]).toBe('updated_at');
  expect(getByTestId('state').children[0]).toBe('state');
});
