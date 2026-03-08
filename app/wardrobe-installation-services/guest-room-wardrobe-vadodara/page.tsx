import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Guest room wardrobe in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional guest room wardrobe services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/guest-room-wardrobe-vadodara" },
  openGraph: {
    title: "Guest room wardrobe in Vadodara | VadodaraExperts",
    description: "Professional guest room wardrobe services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/guest-room-wardrobe-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="guest-room-wardrobe-vadodara" />;
}
