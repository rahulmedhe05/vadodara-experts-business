import Link from "next/link";
import { slugToTitle, getRelatedNiches } from "@/lib/data";
import { vadodaraAreas, generateLongTailKeywords } from "@/lib/content";
import { getNicheKeywordSlugs } from "@/lib/niche-keywords";

interface NicheFooterProps {
  nicheSlug: string;
  nicheName: string;
  category: string;
  currentKeyword?: string;
}

export default function NicheFooter({
  nicheSlug,
  nicheName,
  category,
  currentKeyword,
}: NicheFooterProps) {
  const longTails = currentKeyword
    ? generateLongTailKeywords(nicheSlug, nicheName, currentKeyword)
    : [];
  const keywordSlugs = getNicheKeywordSlugs(nicheSlug);
  const relatedNiches = getRelatedNiches(nicheSlug, 10);
  const n = nicheName.toLowerCase();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      {/* Long-tail Keywords Section (only on keyword pages) */}
      {currentKeyword && longTails.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Popular {nicheName} Searches in Vadodara
          </h2>
          <div className="flex flex-wrap gap-2">
            {longTails.map((lt, i) => (
              <span
                key={i}
                className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600"
              >
                {lt}
              </span>
            ))}
            <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
              best {n} near me Vadodara
            </span>
            <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
              affordable {n} Vadodara price
            </span>
            <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
              top rated {n} Vadodara reviews
            </span>
            <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
              {n} Vadodara contact number
            </span>
            <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
              cheap {n} Vadodara Gujarat
            </span>
            <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
              {n} home service Vadodara
            </span>
            <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
              {n} Vadodara online booking
            </span>
            <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
              emergency {n} Vadodara 24 hours
            </span>
          </div>
        </section>
      )}

      {/* Internal Links - Same Niche Keywords */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            All {nicheName} Services in Vadodara
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
            {keywordSlugs.map((kwSlug) => {
              const isCurrent = currentKeyword && kwSlug === currentKeyword;
              if (isCurrent) {
                return (
                  <span key={kwSlug} className="text-blue-800 font-semibold py-1">
                    {slugToTitle(kwSlug.replace(/-vadodara$/, ""))} Vadodara
                  </span>
                );
              }
              return (
                <Link
                  key={kwSlug}
                  href={`/${nicheSlug}/${kwSlug}`}
                  className="text-gray-600 hover:text-blue-700 no-underline py-1"
                >
                  {slugToTitle(kwSlug.replace(/-vadodara$/, ""))} Vadodara
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {nicheName} Available in All Areas of Vadodara
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-sm">
            {vadodaraAreas.map((area) => (
              <Link
                key={area}
                href={`/${nicheSlug}`}
                className="text-gray-600 hover:text-blue-700 no-underline py-1"
              >
                {nicheName} in {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services - Cross-Niche Links */}
      {relatedNiches.length > 0 && (
        <section className="bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Related Services in Vadodara
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-sm">
              {relatedNiches.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="text-gray-600 hover:text-blue-700 no-underline py-1"
                >
                  {r.name} in Vadodara
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </footer>
  );
}
