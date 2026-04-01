import { formatCurrency } from "@/constants/lib/utils";
import React from "react";
import { Image, Text, View } from "react-native";

const UpcomingSubscriptionCard = ({
  icon,
  price,
  currency,
  daysLeft,
  name,
}: UpcomingSubscriptionCardProps) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View>
          <Text className="upcoming-price" numberOfLines={1}>
            {formatCurrency(price, currency)}
          </Text>
          <Text className="upcoming-date">
            {daysLeft > 1 ? `${daysLeft} days left` : "Last day"}
          </Text>
        </View>
      </View>
      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

export default UpcomingSubscriptionCard;
