import React, { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:andi.gjika@europeflow.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page contact">
      <h2>Contatti</h2>

      <p>
        Per richieste commerciali o informazioni:{" "}
        <strong>andi.gjika@europeflow.com</strong>
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Messaggio
          <textarea
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <div className="form-row">
          <button className="btn primary" type="submit">
            Invia
          </button>
          <button className="btn ghost" type="reset">
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};
