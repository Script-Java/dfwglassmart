import "./globals.css";

export const metadata = {
  /* ---------- SEO core ---------- */
  title: {
    default: "Windshield Replacement & Auto Glass Repair in Dallas‑Fort Worth | DFW Glass Mart",
    template: "%s | DFW Glass Mart"
  },
  description:
    "Mobile windshield replacement, chip repair, and auto glass services throughout Dallas‑Fort Worth. Same‑day appointments, lifetime workmanship warranty, and free online estimates.",

  /* ---------- Search‑engine helpers ---------- */
  keywords: [
    "windshield replacement Dallas",
    "auto glass repair Dallas",
    "mobile windshield repair Dallas",
    "car window replacement Dallas",
    "rock chip repair"
  ],
  alternates: {
    canonical: "https://dfwglassmart.com/"
  },

  /* ---------- Social previews ---------- */
  openGraph: {
    title: "Windshield Replacement & Auto Glass Repair | DFW Glass Mart",
    description:
      "Need fast, affordable auto glass service in Dallas‑Fort Worth? Book mobile windshield replacement or rock‑chip repair with DFW Glass Mart today.",
    url: "https://dfwglassmart.com/",
    siteName: "DFW Glass Mart",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DFW Glass Mart — Mobile Windshield Replacement & Chip Repair",
    description:
      "Top‑rated auto glass experts serving Dallas‑Fort Worth. Free quotes, same‑day service, and lifetime warranty."
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>{children}</body>
    </html>
  );
}
