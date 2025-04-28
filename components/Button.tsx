import { Text, TouchableOpacityProps, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
}

const Button = ({ title, className, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity className=" bg-primary py-5" {...props}>
      <Text className=" bg-primary text-white text-center text-xl">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
