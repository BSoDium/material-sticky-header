import type { Meta, StoryObj } from "@storybook/react-vite";
import InternetPage from "./InternetPage";

const meta: Meta<typeof InternetPage> = {
  title: "InternetPage",
  component: InternetPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof InternetPage>;

export const Default: Story = {
  args: {},
};
