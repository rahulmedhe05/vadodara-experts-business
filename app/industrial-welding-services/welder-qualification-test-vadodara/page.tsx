import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "welder qualification test in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional welder qualification test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/welder-qualification-test-vadodara" },
  openGraph: {
    title: "welder qualification test in Vadodara | VadodaraExperts",
    description: "Professional welder qualification test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/welder-qualification-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="welder-qualification-test-vadodara" />;
}
