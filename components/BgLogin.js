import React from 'react';
import { Image } from 'react-native';

const remoteBg = 'https://chaos-dev.yuelaobank.com/src/img_banner/p_sign.png';

export default class BgLogin extends React.Component {
  render() {
    return (
      <Image
        style={styles.bgimg}
        source={{ uri: remoteBg }}
      />
    );
  }
};

const styles = StyleSheet.create({
  bgimg: {
    flex: 1,
    width: null,
    height: null,
    paddingTop: 110,
    justifyContent: 'center',
    resizeMode: 'contain'
  }
});
