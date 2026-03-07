import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "server room AC in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional server room ac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/server-room-ac-vadodara" },
  openGraph: {
    title: "server room AC in Vadodara | VadodaraExperts",
    description: "Professional server room ac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/server-room-ac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="server-room-ac-vadodara" />;
}
