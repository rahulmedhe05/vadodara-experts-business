import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "LAP balance transfer in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional lap balance transfer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/lap-balance-transfer-vadodara" },
  openGraph: {
    title: "LAP balance transfer in Vadodara | VadodaraExperts",
    description: "Professional lap balance transfer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/lap-balance-transfer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lap-balance-transfer-vadodara" />;
}
