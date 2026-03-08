import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Registered office change in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional registered office change services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/registered-office-change-vadodara" },
  openGraph: {
    title: "Registered office change in Vadodara | VadodaraExperts",
    description: "Professional registered office change services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/registered-office-change-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="registered-office-change-vadodara" />;
}
