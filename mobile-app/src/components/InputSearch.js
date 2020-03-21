import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const InputSearch = () => {
  // TODO: need to implement
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.areaSearch}>
          <View style={styles.itemIcon}>
            <AntIcon name="search1" style={styles.commonIcon} />
          </View>
          <View>
            <TextInput placeholder="Search Product ..." />
          </View>
        </View>
        <View style={styles.itemIcon}>
          <AntIcon name="filter" style={styles.commonIcon} />
        </View>
      </View>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#ffca28'
  },
  wrapper: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10
  },
  itemIcon: {
    paddingLeft: 10,
    paddingRight: 10
  },
  commonIcon: {
    fontSize: 24,
    color: 'gray'
  },
  areaSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 3
  }
});
