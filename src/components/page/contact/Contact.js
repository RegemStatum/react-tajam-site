import React from "react";
import { clientsList } from "../../../data";

const Contact = () => {
  const initialMessage = {
    name: "",
    email: "",
    subject: "",
    text: "",
  };

  const handleForm = (e) => {
    e.preventDefault();

    setMessage(initialMessage);
  };

  const [message, setMessage] = React.useState(initialMessage);

  return (
    <section className="contact container">
      <div className="contact-form">
        <h2>Give us good news</h2>
        <form onSubmit={handleForm}>
          <input
            type="text"
            required
            placeholder="Name"
            value={message.name}
            onChange={(e) => {
              setMessage({ ...message, name: e.target.value });
            }}
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={message.email}
            onChange={(e) => {
              setMessage({ ...message, email: e.target.value });
            }}
          />
          <input
            type="text"
            required
            placeholder="Subject"
            value={message.subject}
            onChange={(e) => {
              setMessage({ ...message, subject: e.target.value });
            }}
          />
          <textarea
            required
            placeholder="Your Message"
            value={message.text}
            onChange={(e) => {
              setMessage({ ...message, text: e.target.value });
            }}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>

      <div className="clients">
        <h2>Our Happy Client</h2>
        {clientsList.map((client) => {
          const { id, image } = client;
          return (
            <img key={id} src={image} alt="client-logo" className="client" />
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
