import { Pressable, ScrollView, Text, View } from 'react-native';
import { PlusCircleIcon } from 'react-native-heroicons/solid';

import { DefaultLayout } from '@layouts';

type HomeScreenProps = {};

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <DefaultLayout>
      <ScrollView className="flex-1 bg-darker-900 py-8 px-6">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="text-white text-lg font-bold">Invoices</Text>
            <Text className="text-darker-50">7 Invoices</Text>
          </View>
          <View className="flex flex-row space-x-4 items-center">
            {/* // TODO: find a component for selects or something like that. */}
            <Text className="text-white">Filter</Text>
            <Pressable onPress={() => {}}>
              {({ pressed }) => (
                <View
                  className={` px-2 py-2 rounded-full flex flex-row space-x-2 items-center ${
                    pressed ? 'bg-dracula-400' : 'bg-dracula-500'
                  }`}
                >
                  <PlusCircleIcon color="#fff" size={28} />
                  <Text className="text-white font-bold text-xs uppercase">
                    Create
                  </Text>
                </View>
              )}
            </Pressable>
          </View>
        </View>
        <View className="flex flex-col mt-8 space-y-4">
          <View className="bg-darker-800 rounded-xl p-6 shadow space-y-6">
            <View className="flex flex-row justify-between items-baseline">
              <Text className="text-white font-bold">
                <Text className="text-darker-400">#</Text> RT3080
              </Text>
              <Text className="text-white">Jack Ryan</Text>
            </View>
            <View className="flex flex-row justify-between items-center">
              <View>
                <Text className="text-darker-50">Due 19 Oct 2022</Text>
                <Text className="text-xl font-bold text-white mt-2">
                  $ 1,800.90
                </Text>
              </View>
              <View className="px-6 py-3 bg-[#2df76033] rounded-xl flex flex-row space-x-2 items-center">
                <View className="h-2 w-2 bg-green-500 rounded-full" />
                <Text className="font-bold uppercase text-xs text-green-500">
                  Paid
                </Text>
              </View>
            </View>
          </View>
          <View className="bg-darker-800 rounded-xl p-6 shadow space-y-6">
            <View className="flex flex-row justify-between items-baseline">
              <Text className="text-white font-bold">
                <Text className="text-darker-400">#</Text> RT3081
              </Text>
              <Text className="text-white">Viviana Sandoval</Text>
            </View>
            <View className="flex flex-row justify-between items-center">
              <View>
                <Text className="text-darker-50">Due 16 Oct 2022</Text>
                <Text className="text-xl font-bold text-white mt-2">
                  $ 1,200.45
                </Text>
              </View>
              <View className="px-6 py-3 bg-[#fb932533] rounded-xl flex flex-row space-x-2 items-center">
                <View className="h-2 w-2 bg-orange-400 rounded-full" />
                <Text className="font-bold uppercase text-xs text-orange-400">
                  Pending
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default HomeScreen;
