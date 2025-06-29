import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const forme = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation for all fields
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      toast.error('Please fill in all fields.', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
      })
      return
    }

    emailjs
      .sendForm('service_0f4qp7q', 'template_i71b3xk', forme.current, {
        publicKey: 'SJMPjIAkdZvv20ZuX',
      })
      .then(
        () => {
          toast.success('Your message has been sent!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          })
          setForm({ name: '', email: '', phone: '', subject: '', message: '' })
        },
        (error) => {
          toast.error('Failed to send message. Please try again.', {
            position: "top-right",
            autoClose: 3000,
            theme: "colored"
          })
        }
      );
  };

  return (
    <div id='contact'>
      <ToastContainer />
      <div className='mt-14'>
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center tracking-wide drop-shadow-lg uppercase">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent">
              Send a Message 
            </span>
          </h2>
          {/* Two underlines: one long, one short, both thin */}
          <div className="flex flex-col items-center mt-2">
            <div className="h-1 w-56 bg-amber-300 rounded-full mb-2 shadow-[0_0_8px_2px_rgba(251,191,36,0.7)]"></div>
            <div className="h-1 w-40 bg-yellow-200 rounded-full shadow-[0_0_6px_1px_rgba(253,224,71,0.5)]"></div>
          </div>
          <p className="text-gray-300 text-center mt-4 max-w-2xl">
            Feel free to reach out! Whether you have a question, want to collaborate, or just want to say hello, send me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        <form
          onSubmit={sendEmail}
          className="max-w-lg mx-auto bg-gray-900/80 rounded-xl p-8 shadow-lg border border-amber-300/40 neon-edu-box flex flex-col gap-6"
          ref={forme}
        >
          <div>
            <label className="block text-amber-300 font-semibold mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
            
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-amber-300 font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
            
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-amber-300 font-semibold mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              
              pattern="[0-9]{10,15}"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label className="block text-amber-300 font-semibold mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={form.subject}
              onChange={handleChange}
            
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Subject"
            />
          </div>
          <div>
            <label className="block text-amber-300 font-semibold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold py-2 px-6 rounded-lg shadow transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

