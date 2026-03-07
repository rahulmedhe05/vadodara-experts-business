import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Control room operation in Vadodara | Security Guard Services | VadodaraExperts",
  description: "Professional control room operation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services/control-room-operation-vadodara" },
  openGraph: {
    title: "Control room operation in Vadodara | VadodaraExperts",
    description: "Professional control room operation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/security-guard-services/control-room-operation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="control-room-operation-vadodara" />;
}
