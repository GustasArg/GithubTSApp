import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {SortButtons} from './SortButtons';
import {PageButtons} from './PageButtons';

interface IProps {
  issueCount: number;
  page: number;
  currentSortDirection: SortDirection;
  owner: string;
  repo: string;
  pageChange: (newPage: number) => void;
  fetchIssues: (fetch: boolean) => void;
  setSortType: (sortType: SortType) => void;
  setSortDirection: (sortDirection: SortDirection) => void;
  setNewOwner: (newOwner: string) => void;
  setNewRepo: (newRepo: string) => void;
}

export enum SortDirection {
  ASC = 'asc',
  DEC = 'desc',
}

export enum SortType {
  CREATED = 'created',
  UPDATED = 'updated',
  COMMENTS = 'comments',
}

export const Controls: React.FunctionComponent<IProps> = props => {
  return (
    <View style={styles.controlsWrapper} testID="controls-wrapper">
      <TextInput
        onChangeText={(value: string) => props.setNewOwner(value)}
        placeholder="Owner"
        value={props.owner}
        testID="owner-input"
      />
      <TextInput
        onChangeText={(value: string) => props.setNewRepo(value)}
        placeholder="Repo"
        value={props.repo}
        testID="repo-input"
      />
      {props.issueCount === 0 && (
        <Button
          title="Fetch"
          onPress={() => props.fetchIssues(true)}
          testID="fetch-button"
        />
      )}
      <PageButtons
        page={props.page}
        pageChange={props.pageChange}
        issueCount={props.issueCount}
      />
      <SortButtons
        setSortType={props.setSortType}
        setSortDirection={props.setSortDirection}
        currentSortDirection={props.currentSortDirection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  controlsWrapper: {
    height: '30%',
    overflow: 'hidden',
  },
});
