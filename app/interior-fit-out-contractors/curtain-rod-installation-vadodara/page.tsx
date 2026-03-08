import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "curtain rod installation in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional curtain rod installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/curtain-rod-installation-vadodara" },
  openGraph: {
    title: "curtain rod installation in Vadodara | VadodaraExperts",
    description: "Professional curtain rod installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/curtain-rod-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="curtain-rod-installation-vadodara" />;
}
