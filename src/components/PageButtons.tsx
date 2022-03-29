import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {ISSUES_PER_PAGE} from '../../App';

interface IProps {
  page: number;
  issueCount: number;
  pageChange: (newPage: number) => void;
}

export const PageButtons: React.FunctionComponent<IProps> = props => {
  return (
    <View style={styles.buttonContainer}>
      {props.page > 1 && (
        <Button
          title={'Back'}
          onPress={() => props.pageChange(props.page - 1)}
          testID="back-button"
        />
      )}
      {props.issueCount === ISSUES_PER_PAGE && (
        <View style={styles.buttonWrapper}>
          <Button
            title={'Next page'}
            onPress={() => props.pageChange(props.page + 1)}
            testID="forward-button"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonWrapper: {
    position: 'absolute',
    right: 0,
  },
});
