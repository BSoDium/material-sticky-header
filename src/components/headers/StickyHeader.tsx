import { IconButton, Paper, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export type StickyHeaderProps = {
  title: string;
};

export default function StickyHeader({ title }: StickyHeaderProps) {
  return (
    <Stack
      component={Paper}
      elevation={0}
      direction="row"
      sx={{
        position: "sticky",
        alignItems: "center",
        width: "100%",
        padding: 1,
        gap: 2,
        top: 0,
      }}
    >
      <IconButton>
        <ArrowBackIcon />
      </IconButton>
      <Typography>{title}</Typography>
    </Stack>
  );
}
