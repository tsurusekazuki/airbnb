import * as React from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import colors from '../../colors';

interface Props {
  text: string;
  color: string;
  backgroundColor: string;
  icon: object;
  handleOnPress: Function;
}

interface Style {
  wrapper: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  wrapper: {
    display: 'flex',
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
  },
  buttonText: {
    fontSize: 17,
    width: '100%',
    textAlign: 'center',
  },
});

const RoundedButton: React.FC<Props> = ({
  text,
  color,
  backgroundColor,
  handleOnPress,
}) => {
  return (
    <TouchableHighlight
      style={[{ backgroundColor }, styles.wrapper]}
      onPress={handleOnPress}
    >
      <Text style={[{ color }, styles.buttonText]}>{text}</Text>
    </TouchableHighlight>
  );
};

export default RoundedButton;
