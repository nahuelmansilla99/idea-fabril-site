import React, { useState } from 'react';

const ContactForm = () => {


    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      mensaje: '',
      empresa: '',
      archivo: null
    });
  
    const enviarFormulario = (e) => {
      e.preventDefault();
      console.log("formulario enviado", formData);
    };
  
    const handleInputNombreChange = (e) => {
      setFormData({...formData, nombre: e.target.value})
    };
  
    const handleInputEmailChange = (e) => {
      setFormData({...formData, email: e.target.value})
    };
  
    const handleInputMensajeChange = (e) => {
      setFormData({...formData, mensaje: e.target.value})
    };
  
    const handleInputEmpresaChange = (e) => {
      setFormData({...formData, empresa: e.target.value})
    };

  return (
    <div>
        <section className="bg-white ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contacto</h2>
              <form action="#" className="space-y-8">
                  <div>
                      <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-black font-semibold bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 placeholder:font-normal" placeholder="Nombre completo" required/>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                      <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-black font-semibold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-gray-500 placeholder:font-normal" placeholder="email@gmail.com" required/>
                  </div>
                  <div>
                      <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Empresa / Proyecto</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-black font-semibold bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 placeholder:font-normal" placeholder="Nombre de la empresa o proyecto" required/>
                  </div>
                  <div className="sm:col-span-2">
                      <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Tu mensaje</label>
                      <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-black font-semibold bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 placeholder:font-normal" placeholder="Deja un comentario..."></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Enviar</button>
              </form>
          </div>
        </section>
    </div>
  )
}

export default ContactForm
