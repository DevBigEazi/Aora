import { useState } from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
} from "react-native";
// import * as Animatable from "react-native-animatable";
import { icons } from "../constants";

// const ZoomIn = {
//   0: {
//     scale: 0.9,
//   },
//   1: {
//     scale: 1,
//   },
// };

// const ZoomOut = {
//   0: {
//     scale: 1,
//   },
//   1: {
//     scale: 0.9,
//   },
// };

// const TrendingItem = ({ activeItem, item }) => {
//   const [play, setPlay] = useState(false);
//   return (
//     <Animatable.View
//       className="mr-5"
//       animation={activeItem === item.$id ? ZoomIn : ZoomOut}
//       duration={500}>
//       {play ? (
//         <Text className="text-whites">Loading...</Text>
//       ) : (
//         <TouchableOpacity
//           className="relative justify-center items-center"
//           activeOpacity={0.7}
//           onPress={setPlay(true)}>
//           <ImageBackground
//             source={{ uri: item.thumbnail }}
//             className="w-52 h-72 my-5 rounded-[35px] overflow-hidden shadow-lg shadow-black/40"
//             resizeMode="cover"
//           />
//           <Image
//             source={icons.play}
//             resizeMode="contain"
//             className="absolute w-12 h-12"
//           />
//         </TouchableOpacity>
//       )}
//     </Animatable.View>
//   );
// };

const Trending = ({ posts}) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  const [play, setPlay] = useState(false);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <View className="mr-5">
          {!play ? (
            <Text className="text-white">Loading...</Text>
          ) : (
            <TouchableOpacity
              className="relative justify-center items-center"
              activeOpacity={0.7}
              onPress={setPlay(true)}>
              <ImageBackground
                source={{ uri: item.thumbnail }}
                className="w-52 h-72 my-5 rounded-[35px] overflow-hidden shadow-lg shadow-black/40"
                resizeMode="cover"
              />
              <Image
                source={icons.play}
                resizeMode="contain"
                className="absolute w-12 h-12"
              />
            </TouchableOpacity>
          )}
        </View>
      )}
      horizontal
    />
  );
};

export default Trending;
