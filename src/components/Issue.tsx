import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IProps {
  issue: IssueInterface;
}

export interface IssueInterface {
  body: string;
  title: string;
  id: number;
  comments: number;
  created_at: string;
  updated_at: string;
  state: string;
}

export const Issue: React.FunctionComponent<IProps> = ({issue}) => {
  return (
    <View style={styles.issueWrapper}>
      <Text style={styles.issueTitle} testID="issue_title">
        {issue.title}
      </Text>
      <Text style={styles.issueBody} numberOfLines={5} testID="issue_body">
        {issue.body}
      </Text>
      <View style={styles.issueDetails}>
        <Text testID="comment_count" style={styles.commentCount}>
          Comments: {issue.comments}
        </Text>
        <Text testID="created_at">Created: {issue.created_at}</Text>
        <Text testID="updated_at">Updated: {issue.updated_at}</Text>
        <Text testID="state">{issue.state}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  issueWrapper: {
    marginLeft: 20,
    marginRight: 20,
  },
  issueTitle: {
    fontSize: 20,
    marginTop: 10,
    color: 'black',
  },
  issueBody: {
    marginTop: 20,
  },
  issueDetails: {
    marginTop: 10,
  },
  commentCount: {
    fontWeight: 'bold',
  },
});
