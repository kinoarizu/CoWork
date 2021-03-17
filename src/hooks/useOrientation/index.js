import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useOrientation = () => {
  const [deviceOrientation, setDeviceOrientation] = useState(null);

  useEffect(() => {
    const updateState = () => {
      const { height, width } = Dimensions.get('window');
      if (height >= width) {
        setDeviceOrientation('portrait');
      } else {
        setDeviceOrientation('landscape');
      }
    };

    updateState();
    Dimensions.addEventListener('change', updateState);
    return () => Dimensions.removeEventListener('change', updateState);
  }, []);

  return deviceOrientation;
};
