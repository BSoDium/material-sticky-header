import { Typography } from "@mui/material";
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
  args: {
    title: "Page title",
    children: (
      <Typography variant="body2" px={2}>
        Page content goes here. This is a simple example of a page component
        with a title and some content. You can customize it as needed.
        <br />
        By default, short content will not scroll, but you can add more to see
        the scrolling behavior.
      </Typography>
    ),
  },
};
