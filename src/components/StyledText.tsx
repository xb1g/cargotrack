import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function TitleText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontSize: 36, fontWeight: "bold" }]}
    />
  );
}

export function SubtitleText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontSize: 24, fontWeight: "700" }]}
    />
  );
}

export function BodyText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontSize: 16, fontWeight: "normal" }]}
    />
  );
}
