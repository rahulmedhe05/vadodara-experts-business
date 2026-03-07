import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Advance tax due date in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional advance tax due date services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/advance-tax-due-date-vadodara" },
  openGraph: {
    title: "Advance tax due date in Vadodara | VadodaraExperts",
    description: "Professional advance tax due date services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/advance-tax-due-date-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="advance-tax-due-date-vadodara" />;
}
