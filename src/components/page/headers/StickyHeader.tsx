import {
  IconButton,
  Stack,
  Typography,
  useTheme,
  type CSSProperties,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import type { MotionValue } from "motion";
import { motion, useTransform } from "motion/react";

export type StickyHeaderProps = {
  /** The title of the sticky header */
  title: string;
  /** The visibility of the sticky header, as a percentage. 0% means hidden, 100% means fully visible */
  visibility: MotionValue<number>;
  ref?: React.Ref<HTMLDivElement>;
};

export default function StickyHeader({
  title,
  visibility,
  ref,
}: StickyHeaderProps) {
  const { palette } = useTheme();
  const backgroundDarkness = useTransform(visibility, [0, 1], ["0%", "100%"]);

  return (
    <Stack
      component={motion.div}
      direction="row"
      sx={{
        backgroundColor: `color-mix(in srgb, ${palette.background.default}, ${palette.grey[200]} var(--background-darkness))`,
        alignItems: "center",
        position: "sticky",
        width: "100%",
        zIndex: 1000,
        padding: 1,
        gap: 2,
        top: 0,
      }}
      style={
        {
          "--background-darkness": backgroundDarkness,
        } as CSSProperties
      }
      ref={ref}
    >
      <IconButton aria-label="Back">
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h6" fontWeight={400} flex={1}>
        <motion.span
          style={{
            opacity: visibility,
          }}
        >
          {title}
        </motion.span>
      </Typography>
      <IconButton aria-label="Fix connectivity">
        <RestartAltOutlinedIcon />
      </IconButton>
    </Stack>
  );
}
