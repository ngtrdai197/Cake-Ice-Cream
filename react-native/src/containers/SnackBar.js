import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Snackbar } from 'react-native-paper';

import { inVisible } from '../store/actions/snackbar';

const SnackBar = ({ snackState, inVisible }) => {
  const { visible, text } = snackState;
  return (
    <>
      <Snackbar
        visible={visible}
        onDismiss={() => inVisible()}
        duration={1000}
        action={{
          label: 'Close',
          onPress: () => {
            // Do something
            inVisible();
          }
        }}
      >
        {text}
      </Snackbar>
    </>
  );
};

const mapStateToProps = state => ({
  snackState: state.snackBar
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ inVisible }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
