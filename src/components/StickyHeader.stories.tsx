import type { Meta, StoryObj } from "@storybook/react-vite";
import StickyHeader from "./StickyHeader";

const meta: Meta<typeof StickyHeader> = {
  title: "StickyHeader",
  component: StickyHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof StickyHeader>;

export const Default: Story = {
  args: {},
};
