import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

// const inter = Inter({ subsets: ["latin"] });

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
        {/* <body suppressHydrationWarning={true} className={inter.className}> */}
        <body suppressHydrationWarning={true}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
