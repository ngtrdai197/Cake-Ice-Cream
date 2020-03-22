import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';

const Navbar = ({ ordersState, navigation }) => {
  const { total } = ordersState;
  return (
    <View style={styles.header}>
      <View>
        <AntIcon name="menu-fold" style={{ fontSize: 24, paddingLeft: 15 }} />
      </View>
      <Text style={styles.nameNav}>Products</Text>
      <TouchableOpacity onPress={() => navigation.push('MyOrder')}>
        <View style={{ position: 'relative' }}>
          <AntIcon
            name="shoppingcart"
            style={{ fontSize: 24, paddingRight: 15 }}
          />
          <View style={styles.counter}>
            <Text>{total}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  ordersState: state.ordersReducer
});

export default connect(mapStateToProps, null)(Navbar);

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 22,
    paddingBottom: 22,
    backgroundColor: '#ffca28'
  },
  nameNav: {
    color: '#000',
    fontSize: 23,
    fontWeight: 'bold'
  },
  counter: {
    position: 'absolute',
    top: -10,
    right: 10,
    color: '#000',
    backgroundColor: '#fff',
    width: 15,
    height: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15 / 2
  }
});
