/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  TextInput,
  View as DefaultView,
  Pressable,
  PressableProps as DefaultPressableProps,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type InputProps = TextInput["props"] & ThemeProps;
export type PressableProps = ThemeProps & DefaultPressableProps;

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function AccentView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "accent"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const EmailInput = (props: InputProps) => {
  const { value, onChangeText, style, lightColor, darkColor, ...otherProps } =
    props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "secondaryBackground"
  );
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <TextInput
      style={[{ padding: 10, backgroundColor, borderRadius: 5, color }, style]}
      value={value}
      textContentType="emailAddress"
      autoCapitalize="none"
      keyboardType="email-address"
      onChangeText={onChangeText}
      {...otherProps}
    />
  );
};

export const PasswordInput = (props: InputProps) => {
  const { value, onChangeText, style, lightColor, darkColor, ...otherProps } =
    props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "secondaryBackground"
  );

  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <TextInput
      style={[
        { padding: 10, backgroundColor, borderRadius: 5, color: "#000" },
        style,
      ]}
      value={value}
      textContentType="password"
      secureTextEntry={true}
      onChangeText={onChangeText}
      {...otherProps}
    />
  );
};

export const Input = (props: InputProps & { size?: "s" | "m" | "l" }) => {
  const {
    value,
    onChangeText,
    style,
    lightColor,
    darkColor,
    size,
    ...otherProps
  } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "secondaryBackground"
  );

  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const placeholderTextColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  const fontSize =
    size === "s" ? 12 : size === "m" ? 17 : size === "l" ? 24 : 17;

  return (
    <TextInput
      style={[
        {
          paddingVertical: 12.9,
          paddingHorizontal: 10,
          backgroundColor,
          borderRadius: 5,
          color,
          fontSize,
        },
        style,
      ]}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
      {...otherProps}
    />
  );
};
