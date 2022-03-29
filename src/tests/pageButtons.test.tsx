import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {PageButtons} from '../components/PageButtons';

describe('Page buttons', () => {
  test('should render one forward button on first full page', () => {
    const page = 1;
    const issueCount = 5;
    const mockFn1 = jest.fn();

    const {queryAllByTestId} = render(
      <PageButtons page={page} pageChange={mockFn1} issueCount={issueCount} />,
    );

    expect(queryAllByTestId('forward-button').length).toBe(1);
    expect(queryAllByTestId('back-button').length).toBe(0);
  });

  test('should render two buttons on second full page', () => {
    const page = 2;
    const issueCount = 5;
    const mockFn1 = jest.fn();

    const {queryAllByTestId} = render(
      <PageButtons page={page} pageChange={mockFn1} issueCount={issueCount} />,
    );

    expect(queryAllByTestId('forward-button').length).toBe(1);
    expect(queryAllByTestId('back-button').length).toBe(1);
  });

  test('should render one back buttons on second not full page', () => {
    const page = 2;
    const issueCount = 3;
    const mockFn1 = jest.fn();

    const {queryAllByTestId} = render(
      <PageButtons page={page} pageChange={mockFn1} issueCount={issueCount} />,
    );

    expect(queryAllByTestId('forward-button').length).toBe(0);
    expect(queryAllByTestId('back-button').length).toBe(1);
  });

  test('should render no buttons on first non full page', () => {
    const page = 1;
    const issueCount = 3;
    const mockFn1 = jest.fn();

    const {queryAllByTestId} = render(
      <PageButtons page={page} pageChange={mockFn1} issueCount={issueCount} />,
    );

    expect(queryAllByTestId('forward-button').length).toBe(0);
    expect(queryAllByTestId('back-button').length).toBe(0);
  });

  test('should call the page change function with appropriate page when clicked', () => {
    const page = 2;
    const issueCount = 5;
    const mockFn1 = jest.fn();

    const {getByTestId} = render(
      <PageButtons page={page} pageChange={mockFn1} issueCount={issueCount} />,
    );

    fireEvent.press(getByTestId('forward-button'));
    expect(mockFn1).toBeCalledWith(3);
    fireEvent.press(getByTestId('back-button'));
    expect(mockFn1).toBeCalledWith(1);
  });
});
