import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window',
);

export const widthToPercent = (percentage) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

export const heightToPercent = (percentage) => {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
};
