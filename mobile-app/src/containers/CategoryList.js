import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../store/actions/orders';
import { visible, inVisible } from '../store/actions/snackbar';
import Item from '../components/Item';

const CategoryList = ({
  ordersState,
  category,
  addToCart,
  visible,
  inVisible
}) => {
  const { orders } = ordersState;
  const addProduct = product => {
    const index = orders.findIndex(rec => rec.id === product.id);
    if (index > -1) {
      visible('Product already exist in cart ...');
      return;
    }
    inVisible('');
    addToCart(product);
  };
  return (
    <View style={{ marginBottom: 17 }}>
      <Text style={styles.nameProduct}>{category.categoryName}</Text>
      <SafeAreaView>
        <FlatList
          data={category.products}
          horizontal={true}
          renderItem={({ item }) => (
            <Item product={item} addToCart={addProduct} />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index + ''}
        />
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => ({
  ordersState: state.ordersReducer
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCart, visible, inVisible }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

const styles = StyleSheet.create({
  nameProduct: {
    fontSize: 19,
    fontWeight: 'bold'
  }
});
