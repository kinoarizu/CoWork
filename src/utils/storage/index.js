import AsyncStorage from '@react-native-async-storage/async-storage';
import { showError } from '../message';

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    showError(`Failed Get ${key} in LocalStorage`);
  }
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    showError(`Failed Save ${key} in LocalStorage`);
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    showError(`Failed Remove ${key} in LocalStorage`);
  }
};
