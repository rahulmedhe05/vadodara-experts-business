import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "elevator cabin renovation in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional elevator cabin renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/elevator-cabin-renovation-vadodara" },
  openGraph: {
    title: "elevator cabin renovation in Vadodara | VadodaraExperts",
    description: "Professional elevator cabin renovation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/elevator-cabin-renovation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-cabin-renovation-vadodara" />;
}
