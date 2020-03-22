import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllCategory } from '../store/actions/category';
import InputSearch from '../components/InputSearch';
import CategoryList from './CategoryList';

const HomePage = ({ categoryState, getAllCategory }) => {
  const [categories, _] = useState(categoryState.categories);

  useEffect(() => {
    getAllCategory();
  }, []);

  const [searchName, setSearchName] = useState('');
  return (
    <View style={styles.container}>
      <InputSearch setSearchName={setSearchName} />
      <View style={styles.wrapper}>
        <SafeAreaView>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <CategoryList category={item} searchName={searchName} />
            )}
            keyExtractor={(_, index) => index + ''}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  categoryState: state.categoryReducer
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllCategory }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
  },
  wrapper: {
    paddingLeft: 30,
    flex: 1
  }
});
