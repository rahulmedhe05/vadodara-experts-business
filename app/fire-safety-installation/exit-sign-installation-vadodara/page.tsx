import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "exit sign installation in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional exit sign installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/exit-sign-installation-vadodara" },
  openGraph: {
    title: "exit sign installation in Vadodara | VadodaraExperts",
    description: "Professional exit sign installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/exit-sign-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="exit-sign-installation-vadodara" />;
}
