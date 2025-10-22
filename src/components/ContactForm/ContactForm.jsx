import React, { useState } from "react";

const ContactForm = () => {

  const email = '1805387ba304704d86dfd42b494bad41';

  return (
    <section className="bg-white " id="contacto">
      <div className="py-6 px-4 mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contacto
        </h2>
        <p className="mb-8 font-light text-center text-gray-500 text-md">
          Envianos tus consultas y te responderemos a la brevedad.
        </p>
        <form
          action={`https://formsubmit.co/${email}`}
          method="POST"
          className="space-y-8"
        >
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre
            </label>
            <input
              name="nombre"
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-black font-semibold bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 placeholder:font-normal"
              placeholder="Nombre completo"
              required
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-black font-semibold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-gray-500 placeholder:font-normal"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="asunto"
              className="block p-3 w-full text-sm text-black font-semibold bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 placeholder:font-normal"
              placeholder="Ingrese el nombre de su empresa o proyecto"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="mensaje"
              rows="6"
              className="block p-2.5 w-full text-sm text-black font-semibold bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 placeholder:font-normal"
              placeholder="Deja un comentario..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-20 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Enviar
            </button>
          </div>
          <input type="hidden" name="_next" value="http://localhost:3000/emailEnviado" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
