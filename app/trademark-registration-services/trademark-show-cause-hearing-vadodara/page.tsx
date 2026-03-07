import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Trademark show cause hearing in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional trademark show cause hearing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/trademark-show-cause-hearing-vadodara" },
  openGraph: {
    title: "Trademark show cause hearing in Vadodara | VadodaraExperts",
    description: "Professional trademark show cause hearing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/trademark-show-cause-hearing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trademark-show-cause-hearing-vadodara" />;
}
