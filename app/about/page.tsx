export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About VadodaraExperts</h1>
          <p className="text-blue-200 text-lg max-w-3xl">
            Your trusted platform for finding verified service providers in Vadodara city.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-4">
          VadodaraExperts.com is Vadodara&apos;s premier platform for connecting residents and
          businesses with verified service providers. We cover 200+ service categories spanning
          home services, professional services, industrial solutions, and construction &amp; infrastructure.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to make it easy for anyone in Vadodara to find reliable, affordable,
          and quality service providers for any need — from AC repair to architecture firms,
          plumbing to property consulting.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">What We Offer</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✓ Verified and rated service providers</li>
          <li>✓ Coverage across all areas of Vadodara</li>
          <li>✓ Transparent pricing and free estimates</li>
          <li>✓ 200+ service categories</li>
          <li>✓ Same-day and emergency service options</li>
          <li>✓ Customer reviews and ratings</li>
        </ul>
      </section>
    </div>
  );
}
