import type { Meta, StoryObj } from "@storybook/react-vite";
import Page from "./Page";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import NetworkCellIcon from "@mui/icons-material/NetworkCell";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SignalWifi0BarOutlinedIcon from "@mui/icons-material/SignalWifi0BarOutlined";
import NetworkWifi1BarOutlinedIcon from "@mui/icons-material/NetworkWifi1BarOutlined";
import NetworkWifi2BarOutlinedIcon from "@mui/icons-material/NetworkWifi2BarOutlined";
import NetworkWifi3BarOutlinedIcon from "@mui/icons-material/NetworkWifi3BarOutlined";
import SignalWifi4BarOutlinedIcon from "@mui/icons-material/SignalWifi4BarOutlined";
import { faker } from "@faker-js/faker";

const meta: Meta<typeof Page> = {
  title: "Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

const NetworkCellIcons = {
  0: SignalWifi0BarOutlinedIcon,
  1: NetworkWifi1BarOutlinedIcon,
  2: NetworkWifi2BarOutlinedIcon,
  3: NetworkWifi3BarOutlinedIcon,
  4: SignalWifi4BarOutlinedIcon,
} as const;

export const Default: Story = {
  args: {
    title: "Internet",
    children: (
      <Stack gap={1}>
        <Stack direction="row" alignItems="center" gap={2} px={2}>
          <NetworkCellIcon />
          <Stack flex={1}>
            <Typography variant="subtitle1">SFR</Typography>
            <Typography variant="body2" color="text.secondary">
              Connected/5G
            </Typography>
          </Stack>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </Stack>
        <Divider variant="fullWidth" />
        <Typography variant="h6" fontWeight={400} px={2} py={1}>
          Wi-Fi networks
        </Typography>
        {Array.from({ length: 100 }, () => {
          const iconIndex = faker.number.int({
            min: 0,
            max: 4,
          }) as keyof typeof NetworkCellIcons;
          const IconComponent = NetworkCellIcons[iconIndex];
          return (
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              px={2}
              height="3rem"
            >
              <IconComponent />
              <Typography variant="subtitle1" flex="1">
                {faker.internet.displayName()}
              </Typography>
              <IconButton disabled>
                <LockOutlinedIcon />
              </IconButton>
            </Stack>
          );
        })}
      </Stack>
    ),
  },
};
