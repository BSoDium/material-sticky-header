import type { Meta, StoryObj } from "@storybook/react-vite";
import StaticHeader from "./StaticHeader";

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
  args: {},
};
