import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "post weld heat treatment in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional post weld heat treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/post-weld-heat-treatment-vadodara" },
  openGraph: {
    title: "post weld heat treatment in Vadodara | VadodaraExperts",
    description: "Professional post weld heat treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/post-weld-heat-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-weld-heat-treatment-vadodara" />;
}
