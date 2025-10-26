import React, { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";

const NuestrosDatos = (open) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    initFlowbite();
  }, []);

  useEffect(() => {
    if (open && window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  }, [open]);

  const handleCopy = async () => {
    const text = "+54 221 6045782";
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const input = document.getElementById("num-telefono");
      if (input) {
        const prevDisabled = input.disabled;
        input.disabled = false;
        input.select();
        document.execCommand("copy");
        input.disabled = prevDisabled;
        input.blur();
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className=" p-4 bg-white sm:p-6">
      <h5 className="mb-3 text-base font-semibold text-black md:text-xl">
        Nuestros datos de contacto
      </h5>
      <p className="text-sm font-normal text-gray-500 ">
        Conéctate con nosotros.
      </p>
      <ul className="my-4 flex justify-center gap-4">
        <li className="w-full">
          <button
            data-modal-target="modal-ig"
            data-modal-toggle="modal-ig"
            type="button"
            className="flex items-center text-left p-3 text-base font-bold text-gray-900 border-gray-300 border rounded-lg bg-gray-200  group hover:border-gray-600 hover:shadow w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-label="Instagram"
              className="w-5"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Instagram</span>
          </button>
          {/* MARK: Modal Instagram */}
          <div
            id="modal-ig"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow-sm ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Instagram de Idea Fabril S.A.
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="modal-ig"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Cerrar modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5 space-y-4 flex justify-center items-center">
                  <div className="p-4">
                    <blockquote
                      className=" instagram-media justify-center items-center"
                      data-instgrm-permalink="https://www.instagram.com/p/DQCFZGvjfGN/"
                      data-instgrm-version="14"
                      style={{
                        background: "#000",
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                  <a
                    href="https://www.instagram.com/ideafabril_s.a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Abrir en Instagram
                  </a>
                  <button
                    data-modal-hide="modal-ig"
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="w-full">
          <a
            href="mailto:info@ideafabril.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 text-base font-bold text-gray-900 border-gray-300 border rounded-lg bg-gray-200  group hover:border-gray-600 hover:shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-label="Correo electrónico"
              className="w-5"
            >
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4zm16 2.4-7.47 5.46a1 1 0 0 1-1.06 0L4 8.4V18h16z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">
              Correo electrónico
            </span>
          </a>
        </li>
        <li className="w-full">
          <button
            data-modal-target="modal-direccion"
            data-modal-toggle="modal-direccion"
            type="button"
            className="flex items-center text-left p-3 text-base font-bold text-gray-900 border-gray-300 border rounded-lg bg-gray-200  group hover:border-gray-600 hover:shadow w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-label="Dirección o ubicación"
              className="w-5"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Dirección</span>
          </button>
          {/* MARK: Modal Dirección */}
          <div
            id="modal-direccion"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow-sm ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Dirección: Calle 147 N° 154
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="modal-direccion"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3270.7493762968106!2d-58.010797000000004!3d-34.93782199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDU2JzE2LjIiUyA1OMKwMDAnMzguOSJX!5e0!3m2!1ses!2sar!4v1761087919073!5m2!1ses!2sar"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Idea Fabril S.A."
                  />
                </div>

                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                  <a
                    href="https://maps.app.goo.gl/Ri7vwgoJatsfHgYu7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Abrir en Google Maps
                  </a>
                  <button
                    data-modal-hide="modal-direccion"
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="w-full">
          <button
            data-modal-target="modal-telefono"
            data-modal-toggle="modal-telefono"
            type="button"
            className="flex items-center text-left p-3 text-base font-bold text-gray-900 border-gray-300 border rounded-lg bg-gray-200  group hover:border-gray-600 hover:shadow w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-label="Teléfono"
              className="w-5"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.05z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Teléfono</span>
          </button>
          {/* MARK:Modal Teléfono */}
          <div
            id="modal-telefono"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Teléfono
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="modal-telefono"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5">
                  <form className="space-y-4 text-center" action="#">
                    <input
                      id="num-telefono"
                      type="text"
                      className=" text-center bg-gray-50 border border-gray-300 text-black text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      value="+54 221 6045782"
                      disabled
                      readOnly
                    />
                    <div className="flex justify-center items-center gap-2 mt-4">
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="flex-1 w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto py-2.5 text-center items-center inline-flex justify-center"
                      >
                        {copied ? (
                          <span className="inline-flex items-center">
                            <svg
                              className="w-3 h-3 text-white me-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 16 12"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5.917 5.724 10.5 15 1.5"
                              />
                            </svg>
                            Copiado!
                          </span>
                        ) : (
                          <span>Copiar número</span>
                        )}
                      </button>
                      <a
                        href="https://wa.me/542216045782"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 w-auto text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Enviar WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      {/* <button  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
      </button> */}
    </div>
  );
};

export default NuestrosDatos;
