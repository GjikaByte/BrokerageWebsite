import React from "react";

export const ContactEsp = () => {
  return (
    <section className="page contact">
      <h2>Contactos</h2>

      <p>Para solicitudes comerciales o información: <strong>info@nombresocieta.example</strong></p>

      <form className="contact-form" onSubmit={(e)=>{ e.preventDefault(); alert("Grazie! Il form è demo."); }}>
        <label>
          Nombre
          <input name="name" required/>
        </label>
        <label>
          Correo electrónico
          <input type="email" name="email" required/>
        </label>
        <label>
          Mensaje
          <textarea name="message" rows="5" required></textarea>
        </label>
        <div className="form-row">
          <button className="btn primary" type="submit">Invia</button>
          <button className="btn ghost" type="reset">Reset</button>
        </div>
      </form>
    </section>
  );
};
