import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { decrement, increment } from '../store/actions/orders';
import OrderItem from '../components/OrderItem';

const MyOrder = ({ ordersState, increment, decrement }) => {
  const { orders } = ordersState;

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={orders}
          renderItem={({ item }) => (
            <OrderItem
              order={item}
              increment={increment}
              decrement={decrement}
            />
          )}
          keyExtractor={(_, index) => index + ''}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  ordersState: state.ordersReducer
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ increment, decrement }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);

const styles = StyleSheet.create({});
