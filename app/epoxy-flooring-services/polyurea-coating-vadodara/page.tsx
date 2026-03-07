import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "polyurea coating in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional polyurea coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/polyurea-coating-vadodara" },
  openGraph: {
    title: "polyurea coating in Vadodara | VadodaraExperts",
    description: "Professional polyurea coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/polyurea-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="polyurea-coating-vadodara" />;
}
