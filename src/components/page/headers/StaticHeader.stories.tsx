import type { Meta, StoryObj } from "@storybook/react-vite";
import StaticHeader from "./StaticHeader";
import { MotionValue } from "motion/react";

const meta: Meta<typeof StaticHeader> = {
  title: "Headers/StaticHeader",
  component: StaticHeader,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof StaticHeader>;

export const Default: Story = {
  args: {
    title: "Static Header Title",
    visibility: new MotionValue(1),
  },
};
