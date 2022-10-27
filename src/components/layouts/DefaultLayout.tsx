import { SafeAreaView, View } from 'react-native';

import { AppBar } from '@atoms';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <SafeAreaView className="flex-1 justify-center">
      <AppBar />
      {children}
    </SafeAreaView>
  );
};

export default DefaultLayout;
