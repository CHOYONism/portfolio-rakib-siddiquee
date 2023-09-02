import { ReactNode } from "react";
import RootStyleRegistry from "./emotion";

export const metadata = {
  title: "Rakib Siddiquee",
  description: "A user-friendly human being",
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body suppressHydrationWarning={true}>
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </body>
  </html>
);

export default RootLayout;
