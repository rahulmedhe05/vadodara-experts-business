import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "experienced vastu expert in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional experienced vastu expert services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/experienced-vastu-expert-vadodara" },
  openGraph: {
    title: "experienced vastu expert in Vadodara | VadodaraExperts",
    description: "Professional experienced vastu expert services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/experienced-vastu-expert-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="experienced-vastu-expert-vadodara" />;
}
