import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
  title: "Kamil Bobrowski",
  description: "Environment for learning and fun!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body suppressHydrationWarning={true}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
