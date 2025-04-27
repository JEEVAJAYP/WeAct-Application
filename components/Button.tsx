import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
}

const Button = ({ title, className, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-[#08d9ac] py-3 px-6 rounded-xl items-center justify-center "
      {...props}
    >
      <Text className=" text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
