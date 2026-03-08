import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("bearing-dealers")!;

export const metadata: Metadata = {
  title: "Book Bearing Dealers in Vadodara | Bearing Dealers | VadodaraExperts",
  description: "Professional book bearing dealers services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/bearing-dealers/book-bearing-dealers-vadodara" },
  openGraph: {
    title: "Book Bearing Dealers in Vadodara | VadodaraExperts",
    description: "Professional book bearing dealers services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/bearing-dealers/book-bearing-dealers-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="book-bearing-dealers-vadodara" />;
}
