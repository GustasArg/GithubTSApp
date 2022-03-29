import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {SortDirection, SortType} from './Controlls';

interface IProps {
  setSortType: (sortType: SortType) => void;
  setSortDirection: (sortDirection: SortDirection) => void;
  currentSortDirection: SortDirection;
}

export const SortButtons: React.FunctionComponent<IProps> = props => {
  const ascending = props.currentSortDirection === SortDirection.ASC;
  return (
    <View style={styles.buttonWrapper}>
      <Button
        title={'Comments'}
        onPress={() => props.setSortType(SortType.COMMENTS)}
      />
      <Button
        title={'Created'}
        onPress={() => props.setSortType(SortType.CREATED)}
      />
      <Button
        title={'Updated'}
        onPress={() => props.setSortType(SortType.UPDATED)}
      />
      <Button
        title={ascending ? 'Ascending' : 'Descending'}
        onPress={() =>
          props.setSortDirection(
            ascending ? SortDirection.DEC : SortDirection.ASC,
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
