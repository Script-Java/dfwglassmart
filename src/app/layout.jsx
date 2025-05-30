import "./globals.css";

export const metadata = {
  title: "DFW Glass Mart",
  description: "At DFW Glass Mart, we are a full-service auto glass repair company dedicated to providing top-quality solutions. As your trusted source for auto glass repair and windshield replacement services in Dallas, we pride ourselves on delivering exceptional service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>{children}</body>
    </html>
  );
}
