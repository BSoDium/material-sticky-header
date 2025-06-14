import { Stack } from "@mui/material";
import StickyHeader from "./headers/StickyHeader";
import StaticHeader from "./headers/StaticHeader";
import { useRef } from "react";
import { useScroll } from "motion/react";

export type PageProps = {
  title: string;
  children?: React.ReactNode;
};

export default function Page({ title, children }: PageProps) {
  const containerRef = useRef(null);
  const staticHeaderRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    container: containerRef,
    target: staticHeaderRef,
    layoutEffect: true,
    axis: "y",
  });

  return (
    <Stack
      id="page-container"
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        maxWidth: "100dvw",
        maxHeight: "100dvh",
        overflowY: "auto",
        overflowX: "hidden",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
      }}
    >
      <StickyHeader title={title} />
      <StaticHeader title={title} ref={staticHeaderRef} />
      {children}
    </Stack>
  );
}
