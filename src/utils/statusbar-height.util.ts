import { Platform, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;

export const statusbarHeight = () => {
  const iosHeight = StatusBarManager.getHeight((height: number) => height);

  return Platform.OS === 'ios' ? iosHeight : StatusBarManager.HEIGHT;
};
