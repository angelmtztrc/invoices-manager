import { StatusBar, View } from 'react-native';
import { CubeTransparentIcon } from 'react-native-heroicons/solid';

const AppBar = () => {
  return (
    <View className="h-16 bg-darker-800 w-full">
      <StatusBar
        backgroundColor="#373a4d"
        barStyle="dark-content"
        animated={true}
      />
      <View className="flex w-full justify-between items-center flex-row">
        <View className="h-16 w-16 bg-dracula-600 rounded-r-xl flex items-center justify-center">
          <CubeTransparentIcon color="#fff" size={28} />
        </View>
        <View className="h-16 w-16 flex items-center justify-center border-l border-darker-700">
          <View className="h-10 w-10 bg-red-500 rounded-full" />
        </View>
      </View>
    </View>
  );
};

export default AppBar;
