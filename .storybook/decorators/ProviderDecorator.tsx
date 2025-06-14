import { JSX } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function ProviderDecorator(
  storyFn: () => JSX.Element
): JSX.Element {
  return storyFn();
}
