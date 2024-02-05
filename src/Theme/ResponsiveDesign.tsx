import {StyleSheet, Dimensions} from 'react-native';

const defaultMaxWidth = 360;
const defaultMaxHeight = 800;

// export const w = (targetWidth: number): number => {
//   const {width: screenWidth} = Dimensions.get('window');
//   const widthScale = screenWidth / targetWidth;
//   const calculatedWidth = targetWidth * Math.min(widthScale, 1);

//   // Ensure the calculated width does not exceed the default maximum width
//   return Math.min(calculatedWidth, defaultMaxWidth);
// };
// export const w = (targetWidth: number): number => {
//   const {width: screenWidth} = Dimensions.get('window');
//   console.log('screenWidth', screenWidth);
//   const widthScale = screenWidth / targetWidth;
//   console.log('widthScale', widthScale);
//   const calculatedWidth = targetWidth * Math.min(widthScale, 1);
//   console.log('calculatedWidth', calculatedWidth);
//   console.log('defaultMaxWidth', defaultMaxWidth);

//   // Ensure the calculated width does not exceed the default maximum width
//   return Math.min(calculatedWidth, defaultMaxWidth);
// };

// export const h = (targetHeight: number): number => {
//   const {height: screenHeight} = Dimensions.get('window');
//   const heightScale = screenHeight / targetHeight;
//   const calculatedHeight = targetHeight * Math.min(heightScale, 1);

//   // Ensure the calculated height does not exceed the default maximum height
//   return Math.min(calculatedHeight, defaultMaxHeight);
// };

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800;

const ws = (size: any) => (width / guidelineBaseWidth) * size;
const hs = (size: any) => (height / guidelineBaseHeight) * size;
// moderateScale
const ms = (size: any, factor = 0.5) => size + (ws(size) - size) * factor;

export {ws, hs, ms};
