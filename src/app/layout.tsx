import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import ImagePopup from "@/components/pop-up/ImagePopup";
import { WebProvider } from "@/context-api/WebContext";
import { contact } from "@/utils/constent";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import "./style.scss";
import AmenitiesPopup from "@/components/pop-up/AmenitiesPopup";
import Script from "next/script";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Acacia Resort and Spa Morjim GoaResort and Spa Morjim GoaMorjim Goa | Cliff-Top Resort in Morjim, Goa",
  description:
    "Located in the thick of nature, The Acacia Resort and Spa Morjim GoaResort and Spa Morjim GoaMorjim Goa is a cliff-top resort with captivating views of the Arabian Sea, luxury rooms, infinity pool, spa, banquet facilities, and multi-cuisine dining in Morjim, Goa.",
  keywords: [
    "The Acacia Resort and Spa Morjim GoaMorjim Goa",
    "Morjim Goa Resort",
    "Luxury Resort Goa",
    "Cliff Top Resort Goa",
    "Beach Resort Morjim",
    "Goa Hotel",
    "Resort Near Morjim Beach",
    "Luxury Stay Goa",
    "Spa Resort Goa",
    "Infinity Pool Resort Goa",
  ],

  openGraph: {
    title: "The Acacia Resort and Spa Morjim GoaMorjim Goa | Luxury Cliff-Top Resort",
    description:
      "Enjoy luxury stays, infinity pool, spa experiences, and breathtaking Arabian Sea views at The Acacia Resort and Spa Morjim GoaMorjim Goa.",
    url: "",
    siteName: "The Acacia Resort and Spa Morjim GoaMorjim Goa",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="MfTU1p7E3cgBqPya-J2xqN77IfwdNrOBgNtl8CBbMr4"
        />
        <Script
          strategy="afterInteractive"
          id="google-analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1W5EZ5KY14"
        ></Script>
        <Script strategy="afterInteractive" id="google-analytics-config">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1W5EZ5KY14');`}
        </Script>

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSDTN8VH');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>

      <body
        className={` ${jost.variable} h-full antialiased`}
        suppressHydrationWarning={true}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSDTN8VH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <WebProvider>
          {children}
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <Call callNumber={contact.phone[0]} />
          <ImagePopup />
          <AmenitiesPopup />
        </WebProvider>
        {/* <!-- Eazbot Script (Next.js) --> */}
        <Script id="chatbot-config" strategy="afterInteractive">
          {`
            window.eazbotConfig = {
              ndid: "89a12ffb-e4b7-41a7-869c-1af0eacc76c7",
              hid: "79374052",
            };
          `}
        </Script>
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
