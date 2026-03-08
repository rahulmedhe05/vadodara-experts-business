import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "hastelloy welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional hastelloy welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/hastelloy-welding-vadodara" },
  openGraph: {
    title: "hastelloy welding in Vadodara | VadodaraExperts",
    description: "Professional hastelloy welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/hastelloy-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hastelloy-welding-vadodara" />;
}
