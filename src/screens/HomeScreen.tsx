import { Text, View } from 'react-native';

type HomeScreenProps = {};

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg text-red-500">Hello, World!</Text>
    </View>
  );
};

export default HomeScreen;
