import React, { useRef, useState } from "react";
import Swal from "sweetalert2"; // Restauramos la importación de Swal

// Clave de acceso de Web3Forms (proporcionada en tu ejemplo)
const WEB3FORMS_ACCESS_KEY = "585bf19a-a9a2-4df7-9619-c948b3ee0b3e";
const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";

const ContactForm = () => {
  const formRef = useRef(null);
  const [enviando, setEnviando] = useState(false);

  // Eliminamos el fallback manual, confiando en la importación de arriba.
  // const Swal = typeof window !== 'undefined' && window.Swal ? window.Swal : { ... }; 

  const onSubmit = async (e) => {
    e.preventDefault();
    if (enviando) return;
    setEnviando(true);

    try {
      const fd = new FormData(formRef.current);
      
      // 1. Añadir la clave de acceso de Web3Forms al FormData
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);

      // 2. Realizar la petición POST a la API de Web3Forms
      const response = await fetch(WEB3FORMS_API_URL, {
        method: 'POST',
        body: fd
      });

      // 3. Leer la respuesta JSON y verificar el estado 'success'
      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: 'Mail enviado!',
          text: 'Gracias por contactarte, te responderemos a la brevedad.',
          icon: 'success',
          timer: 3000,
          position: 'top-center',
          showConfirmButton: false,
        });
        formRef.current.reset();
      } else {
        // Manejar errores devueltos por Web3Forms
        console.error('Error de Web3Forms:', data.message);
        Swal.fire({
          title: 'Error',
          text: data.message || 'Hubo un error al enviar el mail, por favor intenta nuevamente.',
          icon: 'error',
        });
      }
    } catch (error) {
      // Manejar errores generales de la red
      console.error('Error de conexión:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error de conexión, por favor intenta nuevamente.',
        icon: 'error',
      });
    } finally {
      setEnviando(false);
    }
  };

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
          ref={formRef}
          onSubmit={onSubmit}
          className="space-y-8"
          noValidate
        >
          {/* Campo Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre
            </label>
            <input
              name="nombre"
              type="text"
              id="nombre"
              className="block p-3 w-full text-sm text-black font-semibold bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 placeholder:font-normal"
              placeholder="Nombre completo"
              required
            />
          </div>
          {/* Campo Email */}
          <div>
            <label
              htmlFor="email"
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
          {/* Campo Asunto */}
          <div>
            <label
              htmlFor="subject"
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
          {/* Campo Mensaje */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
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
              disabled={enviando}
              className="py-3 px-20 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:opacity-50"
            >
              {enviando ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
