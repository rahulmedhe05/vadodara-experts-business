import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "Coaching Classes in Vadodara | VadodaraExperts",
  description: "Find the best coaching classes in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes" },
  openGraph: {
    title: "Coaching Classes in Vadodara | VadodaraExperts",
    description: "Find the best coaching classes in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/coaching-classes",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
