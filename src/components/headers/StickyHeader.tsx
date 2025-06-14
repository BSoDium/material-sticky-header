import { IconButton, Paper, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { MotionValue } from "motion";
import { motion } from "motion/react";

export type StickyHeaderProps = {
  /** The title of the sticky header */
  title: string;
  /** The visibility of the sticky header, as a percentage. 0% means hidden, 100% means fully visible */
  visibility: MotionValue<number>;
};

export default function StickyHeader({ title, visibility }: StickyHeaderProps) {
  return (
    <Stack
      component={Paper}
      elevation={0}
      direction="row"
      sx={{
        zIndex: 1000,
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
      <Typography>
        <motion.span
          style={{
            opacity: visibility,
          }}
        >
          {title}
        </motion.span>
      </Typography>
    </Stack>
  );
}
