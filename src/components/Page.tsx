import { Stack } from "@mui/material";
import StickyHeader from "./headers/StickyHeader";
import StaticHeader from "./headers/StaticHeader";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import useHeightObserver from "../hooks/useHeightObserver";

export type PageProps = {
  title: string;
  children?: React.ReactNode;
};

export default function Page({ title, children }: PageProps) {
  const containerRef = useRef(null);
  const staticHeaderRef = useRef(null);
  const stickyHeaderRef = useRef(null);

  // Track sticky header height
  const { height } = useHeightObserver({ ref: stickyHeaderRef });

  // Track scroll progress to orchestrate header visibility
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: staticHeaderRef,
    layoutEffect: true,
    axis: "y",
    offset: [`${-height}px start`, `${height}px start`],
  });

  const staticHeaderVisibility = useTransform(
    scrollYProgress,
    [0.5, 0],
    [0, 1]
  );
  const stickyHeaderVisibility = useTransform(
    scrollYProgress,
    [1, 0.5],
    [1, 0]
  );

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
        scrollSnapType: "y proximity",
        scrollPaddingTop: `${height}px`,
      }}
    >
      <StickyHeader
        ref={stickyHeaderRef}
        title={title}
        visibility={stickyHeaderVisibility}
      />
      <StaticHeader
        ref={staticHeaderRef}
        title={title}
        visibility={staticHeaderVisibility}
      />
      <Stack
        sx={{
          scrollSnapAlign: "start",
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}
