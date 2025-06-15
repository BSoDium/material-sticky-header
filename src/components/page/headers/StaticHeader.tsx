import { Paper, Typography } from "@mui/material";
import type { MotionValue } from "motion";
import { motion } from "motion/react";

export type StaticHeaderProps = {
  /** The title of the static header */
  title: string;
  /** The visibility of the static header, as a percentage. 0% means hidden, 100% means fully visible */
  visibility: MotionValue<number>;
  ref?: React.Ref<HTMLDivElement>;
};

export default function StaticHeader({
  title,
  visibility,
  ref,
}: StaticHeaderProps) {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        paddingTop: 6,
        paddingLeft: 2,
        paddingRight: 5,
        paddingBottom: 3,
        width: "100%",
        scrollSnapAlign: "end",
      }}
      ref={ref}
    >
      <Typography variant="h4">
        <motion.span
          style={{
            opacity: visibility,
          }}
        >
          {title}
        </motion.span>
      </Typography>
    </Paper>
  );
}
