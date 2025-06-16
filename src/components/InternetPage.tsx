import { faker } from "@faker-js/faker";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import NetworkCellIcon from "@mui/icons-material/NetworkCell";
import NetworkWifi1BarOutlinedIcon from "@mui/icons-material/NetworkWifi1BarOutlined";
import NetworkWifi2BarOutlinedIcon from "@mui/icons-material/NetworkWifi2BarOutlined";
import NetworkWifi3BarOutlinedIcon from "@mui/icons-material/NetworkWifi3BarOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SignalWifi0BarOutlinedIcon from "@mui/icons-material/SignalWifi0BarOutlined";
import SignalWifi4BarOutlinedIcon from "@mui/icons-material/SignalWifi4BarOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import Page from "./page/Page";
import { useMemo } from "react";

const NetworkCellIcons = {
  0: SignalWifi0BarOutlinedIcon,
  1: NetworkWifi1BarOutlinedIcon,
  2: NetworkWifi2BarOutlinedIcon,
  3: NetworkWifi3BarOutlinedIcon,
  4: SignalWifi4BarOutlinedIcon,
} as const;

export default function InternetPage() {
  const networks = useMemo(() => {
    return Array.from(
      { length: faker.number.int({ min: 15, max: 20 }) },
      (_, index) => {
        const networkStrength = faker.number.int({
          min: 0,
          max: 4,
        }) as keyof typeof NetworkCellIcons;
        return {
          key: index,
          networkStrength,
          name: faker.internet.displayName(),
          open: faker.datatype.boolean(0.75),
        };
      }
    );
  }, []);

  return (
    <Page title="Internet">
      <Stack py={1}>
        <Stack direction="row" alignItems="center" gap={2} px={3} mb={1}>
          <NetworkCellIcon sx={{ mr: 1 }} />
          <Stack flex={1}>
            <Typography
              variant="h6"
              component="span"
              fontWeight={400}
              lineHeight={1.4}
            >
              SFR
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Connected/5G
            </Typography>
          </Stack>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton aria-label="Settings" size="large">
            <SettingsOutlinedIcon />
          </IconButton>
        </Stack>
        <Divider variant="fullWidth" sx={{ mb: 1 }} />
        <Typography
          variant="h6"
          component="span"
          fontWeight={400}
          px={3}
          py={1}
          mb={1}
        >
          Wi-Fi networks
        </Typography>
        {networks
          .sort((a, b) => b.networkStrength - a.networkStrength)
          .map((network) => {
            const NetworkCellIcon = NetworkCellIcons[network.networkStrength];
            return (
              <Button
                key={network.key}
                size="large"
                color="inherit"
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  textAlign: "left",
                  height: "3.5rem",
                  gap: 2.5,
                  px: 3,
                }}
              >
                <NetworkCellIcon />
                <Typography
                  variant="h6"
                  component="span"
                  fontWeight={400}
                  flex="1"
                  noWrap
                >
                  {network.name}
                </Typography>
                <Stack
                  height={40}
                  width={40}
                  alignItems="center"
                  justifyContent="center"
                >
                  {network.open ? <LockOutlinedIcon /> : null}
                </Stack>
              </Button>
            );
          })}
        <Button
          size="large"
          color="inherit"
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            height: "3.5rem",
            gap: 2.5,
            px: 3,
          }}
        >
          <AddIcon />
          <Typography variant="h6" component="span" fontWeight={400}>
            Add network
          </Typography>
        </Button>
        <Divider variant="fullWidth" />
        <Button
          size="large"
          color="inherit"
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            py: 1.75,
            px: 3,
          }}
        >
          <Stack alignItems={"flex-start"} flex={1}>
            <Typography
              variant="h6"
              component="span"
              fontWeight={400}
              lineHeight={1.4}
            >
              Network preferences
            </Typography>
            <Typography variant="body2" color="textSecondary" fontWeight={400}>
              Wi-Fi turns back on automatically
            </Typography>
          </Stack>
        </Button>
        <Button
          size="large"
          color="inherit"
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            py: 1.75,
            px: 3,
          }}
        >
          <Stack alignItems={"flex-start"} flex={1}>
            <Typography
              variant="h6"
              component="span"
              fontWeight={400}
              lineHeight={1.4}
            >
              Saved networks
            </Typography>
            <Typography variant="body2" color="textSecondary" fontWeight={400}>
              {faker.number.int({ min: 5, max: 300 })} networks
            </Typography>
          </Stack>
        </Button>
        <Button
          size="large"
          color="inherit"
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            py: 1.75,
            px: 3,
          }}
        >
          <Stack alignItems={"flex-start"} flex={1}>
            <Typography
              variant="h6"
              component="span"
              fontWeight={400}
              lineHeight={1.4}
            >
              Non-operator data usage
            </Typography>
            <Typography variant="body2" color="textSecondary" fontWeight={400}>
              {faker.number.float({
                min: 0.1,
                max: 50,
                fractionDigits: 2,
              })}{" "}
              GB used{" "}
              {faker.date.recent({ days: 30 }).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
              })}{" "}
              -{" "}
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
              })}
            </Typography>
          </Stack>
        </Button>
      </Stack>
    </Page>
  );
}
