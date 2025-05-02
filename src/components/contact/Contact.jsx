import React, { useState } from "react";
import "./contact.css";
import { Inbox, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0edf4337-2081-4ea7-983a-b7de49dc8858");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message{" "}
          <span>
            <Mail />
          </span>
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          dolores quasi, veritatis illum atque eligendi. Aut assumenda sit, enim
          vero natus error aliquam.
        </p>
        <ul>
          <li>
            <span>
              <Inbox />
            </span>
            info@example.az
          </li>
          <li>
            <span>
              <Phone />
            </span>
            +994 50 000 00 00
          </li>
          <li>
            <span>
              <MapPin />
            </span>
            Baku, Azerbaijan
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your name </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
