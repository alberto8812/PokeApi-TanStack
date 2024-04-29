import React, {useContext} from 'react';
import {Image, ImageStyle, StyleProp, Text, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/TthemeContext';

interface Props {
  style: StyleProp<ImageStyle>;
}

export const PokeballBg = ({style}: Props) => {
  const {isDark} = useContext(ThemeContext);
  const pokemonImg = isDark
    ? require('../../../assets/pokeball-light.png')
    : require('../../../assets/pokeball-dark.png');
  return (
    <Image
      source={pokemonImg}
      style={[
        {
          width: 300,
          height: 300,
          opacity: 0.3,
        },
        style
      ]}
    />
  );
};
