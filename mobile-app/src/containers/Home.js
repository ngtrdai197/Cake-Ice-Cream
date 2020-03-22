import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import InputSearch from '../components/InputSearch';
import CategoryList from './CategoryList';

const HomePage = ({ navigation }) => {
  const [categories, _] = useState([
    {
      id: 1,
      categoryName: 'Chocolate Cake',
      products: [
        {
          id: 1,
          name: 'Item Cake 1',
          url:
            'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg',
          price: 12
        },
        {
          id: 2,
          name: 'Item Cake 2',
          url:
            'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg',
          price: 13
        },
        {
          id: 3,
          name: 'Item Cake 3',
          url:
            'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg',
          price: 17
        }
      ]
    },
    {
      id: 2,
      categoryName: 'Ice Cream',
      products: [
        {
          id: 1,
          name: 'Item Cake 1',
          url:
            'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg',
          price: 12
        },
        {
          id: 2,
          name: 'Item Cake 2',
          url:
            'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg',
          price: 13
        },
        {
          id: 3,
          name: 'Item Cake 3',
          url:
            'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg',
          price: 17
        }
      ]
    }
  ]);
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
  orders: state.ordersReducer.orders
});

export default HomePage;

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
