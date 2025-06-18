export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">Contact Us</h1>

      <p className="text-center text-gray-600 mb-8">
        Have questions, feedback, or just want to say hello? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form className="space-y-6 bg-white shadow-md rounded-lg p-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="text-center text-sm text-gray-500 mt-10">
        Or reach out via Twitter or GitHub from the footer below.
      </div>
    </section>
  );
}
