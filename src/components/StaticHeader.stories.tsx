import type { Meta, StoryObj } from "@storybook/react-vite";
import StaticHeader from "./StaticHeader";

const meta: Meta<typeof StaticHeader> = {
  title: "StaticHeader",
  component: StaticHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof StaticHeader>;

export const Default: Story = {
  args: {},
};
