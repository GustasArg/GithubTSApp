import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Issue, IssueInterface} from './Issue';

interface IProps {
  issues: Array<IssueInterface>;
}

export const IssueList: React.FunctionComponent<IProps> = props => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollWrapper}>
      {props.issues.map((issue: IssueInterface) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollWrapper: {
    backgroundColor: 'white',
    height: '70%',
  },
});
