import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const OrderItem = ({ order, increment, decrement }) => {
  return (
    <View style={styles.container}>
      <View style={styles.coverImage}>
        <Image
          source={{ uri: order.url }}
          style={{ width: '100%', height: 100 }}
        />
      </View>
      <View style={styles.content}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{order.name}</Text>
        <View style={styles.areaQuantity}>
          <TouchableOpacity onPress={() => decrement(order.id)}>
            <AntIcon name="minus" style={styles.commonIcon} />
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            {order.quantity}
          </Text>
          <TouchableOpacity onPress={() => increment(order.id)}>
            <AntIcon name="plus" style={styles.commonIcon} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{order.amount}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  coverImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 1
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaQuantity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  },
  commonIcon: {
    backgroundColor: '#ffca28',
    fontSize: 17,
    padding: 3,
    borderRadius: 7
  }
});
