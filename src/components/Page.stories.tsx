import type { Meta, StoryObj } from "@storybook/react-vite";
import Page from "./Page";

const meta: Meta<typeof Page> = {
  title: "Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {},
};
