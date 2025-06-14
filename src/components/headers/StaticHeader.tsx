import { Paper, Typography } from "@mui/material";

export type StaticHeaderProps = {
  title: string;
};

export default function StaticHeader({ title }: StaticHeaderProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        paddingTop: 5,
        paddingLeft: 2,
        paddingRight: 5,
        paddingBottom: 4,
        width: "100%",
      }}
    >
      <Typography variant="h4">{title}</Typography>
    </Paper>
  );
}
