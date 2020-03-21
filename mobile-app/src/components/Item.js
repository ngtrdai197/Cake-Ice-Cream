import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Item = ({ product, addToCart }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.coverContent}>
          <Image
            style={styles.image}
            source={{
              uri: product.url
            }}
          />
          <Text style={{ fontWeight: '500' }}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            title="add to cart"
            color="#ffca28"
            onPress={() => {
              addToCart(product);
            }}
          />
        </View>
      </View>
      <View style={styles.likeIcon}>
        <AntIcon
          name="hearto"
          style={{
            fontSize: 18,
            color: 'yellow'
          }}
        />
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 150,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    paddingTop: 15,
    marginRight: 6,
    marginLeft: 6
  },
  coverContent: {
    marginTop: 15,
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: 130,
    height: 120
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  likeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 23,
    height: 23,
    borderRadius: 25 / 2,
    backgroundColor: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
