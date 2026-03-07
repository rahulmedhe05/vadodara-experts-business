import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "Spoken English Classes in Vadodara | VadodaraExperts",
  description: "Find the best spoken english classes in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes" },
  openGraph: {
    title: "Spoken English Classes in Vadodara | VadodaraExperts",
    description: "Find the best spoken english classes in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/spoken-english-classes",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
