import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ListHeading = ({
  title,
  actionTitle,
}: {
  title: string;
  actionTitle: string;
}) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>
      <TouchableOpacity className="list-action">
        <Text className="list-action-text">{actionTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;
