const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form action="">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Phone"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Message"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 h-32"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-500 text-white py-3 px-10 uppercase font-bold border border-red-500 transition hover:bg-transparent hover:text-red-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

