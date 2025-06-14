import { Stack } from "@mui/material";
import StickyHeader from "./headers/StickyHeader";
import StaticHeader from "./headers/StaticHeader";

export type PageProps = {
  children?: React.ReactNode;
};

export default function Page({ children }: PageProps) {
  return (
    <Stack>
      <StickyHeader />
      <StaticHeader />
      {children}
    </Stack>
  );
}
