import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Yoga Classes in Vadodara | VadodaraExperts",
  description: "Find the best yoga classes in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes" },
  openGraph: {
    title: "Yoga Classes in Vadodara | VadodaraExperts",
    description: "Find the best yoga classes in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/yoga-classes",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
