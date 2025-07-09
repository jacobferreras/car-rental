// import MessageModal from "./MessageModal";
// import useEmail from "@/hooks/useEmail";

const ContactForm = () => {
  //   const {
  //     form,
  //     showModal,
  //     isLoading,
  //     handleChange,
  //     handleSubmit,
  //     setShowModal,
  //   } = useEmail();

  return (
    <>
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-auto md:w-100 lg:w-166 xl:w-224 border p-4 shadow-md shadow-red-500/50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-auto"
            placeholder="Name"
            // value={form.name}
            // onChange={handleChange}
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-auto"
            placeholder="Email"
            // value={form.email}
            // onChange={handleChange}
            required
          />

          <label className="label">Subject</label>
          <input
            type="text"
            name="subject"
            className="input w-auto"
            placeholder="Subject"
            // value={form.subject}
            // onChange={handleChange}
            required
          />

          <label className="label">Message</label>
          <textarea
            name="message"
            className="input w-auto h-30"
            placeholder="Message"
            // value={form.message}
            // onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn btn-neutral mt-4"
            // disabled={isLoading}
          >
            {/* {isLoading ? "Sending..." : "Send Message"} */}
            Send
            <i className="bi bi-send-fill"></i>
          </button>
        </fieldset>
      </form>

      {/* <MessageModal
        showModal={showModal}
        title="Message Sent!"
        message="Thank you for reaching out! Your message has been sent successfully.
            I will get back to you as soon as possible."
        onClose={() => setShowModal(false)}
      /> */}
    </>
  );
};

export default ContactForm;
