import type { Meta, StoryObj } from "@storybook/react-vite";
import StaticHeader from "./StaticHeader";
import { useMotionValue } from "motion/react";
import { useEffect } from "react";

const meta: Meta<typeof StaticHeader> = {
  title: "Headers/StaticHeader",
  component: StaticHeader,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Static Header Title",
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

type Story = StoryObj<typeof StaticHeader>;

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

    return <StaticHeader {...args} visibility={visibility} ref={null} />;
  },
};
