import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "zinc phosphating in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional zinc phosphating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/zinc-phosphating-vadodara" },
  openGraph: {
    title: "zinc phosphating in Vadodara | VadodaraExperts",
    description: "Professional zinc phosphating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/zinc-phosphating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zinc-phosphating-vadodara" />;
}
