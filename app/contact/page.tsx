export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact VadodaraExperts</h1>
          <p className="text-blue-200 text-lg max-w-3xl">
            Get in touch with us for any queries or service requirements.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Vadodara, Gujarat, India</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@vadodaraexperts.com</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
