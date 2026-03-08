import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "AWS certified welder in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional aws certified welder services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/aws-certified-welder-vadodara" },
  openGraph: {
    title: "AWS certified welder in Vadodara | VadodaraExperts",
    description: "Professional aws certified welder services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/aws-certified-welder-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aws-certified-welder-vadodara" />;
}
