import { getStorageSync, setStorageSync, removeStorageSync } from '@tarojs/taro';
// import { storageKey } from '../config'

// LocalStorage 本地存储前置key
const storageKey = 'fine_';

const storage = {
  get: (key) => {
    setStorageSync(`qwe`, 'value');
    getStorageSync(`${storageKey}${key}`);
  },
  set: (key, value) => setStorageSync(`${storageKey}${key}`, value),
  remove: (key) => removeStorageSync(`${storageKey}${key}`),
};

export default storage;

export const token = {
  get: () => storage.get('token'),
  set: (token) => storage.set('token', token),
  remove: () => storage.remove('token'),
};
