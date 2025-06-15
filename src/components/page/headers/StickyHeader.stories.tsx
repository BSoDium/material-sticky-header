import type { Meta, StoryObj } from "@storybook/react-vite";
import StickyHeader from "./StickyHeader";
import { useMotionValue } from "motion/react";
import { useEffect } from "react";

const meta: Meta<typeof StickyHeader> = {
  title: "Headers/StickyHeader",
  component: StickyHeader,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Sticky Header Title",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "min(80vw, 40rem)" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof StickyHeader>;

export const Default: Story = {
  argTypes: {
    visibility: {
      control: false,
    },
    ref: {
      control: false,
    },
  },
  render: (args) => {
    const visibility = useMotionValue(1);

    // Simulate visibility change for demonstration purposes
    useEffect(() => {
      const interval = setInterval(() => {
        visibility.set(Math.random());
      }, 1000);
      return () => clearInterval(interval);
    }, [visibility]);

    return <StickyHeader {...args} visibility={visibility} ref={null} />;
  },
};
