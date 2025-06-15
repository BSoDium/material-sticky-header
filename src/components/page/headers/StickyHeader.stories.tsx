import type { Meta, StoryObj } from "@storybook/react-vite";
import StickyHeader from "./StickyHeader";
import { MotionValue } from "motion/react";

const meta: Meta<typeof StickyHeader> = {
  title: "Headers/StickyHeader",
  component: StickyHeader,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof StickyHeader>;

export const Default: Story = {
  args: {
    title: "Sticky Header Title",
    visibility: new MotionValue(1),
  },
};
