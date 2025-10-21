import { useState } from 'react';
import './App.css';
import imagenMarco from './image/marco-tapa-medidores.png';
import imagenBornes from './image/tapa-bornes-universal.jpeg';
import imagenJabalina from './image/tapa-inspeccion-jabalina.jpeg';
import imagenPipetas from './image/pipetas-coneccion-acometidad.png';
import miniLogo from './image/mini-logo.png';
import logo from './image/logo.png';

// Logos de clientes:
import edea from './image/logos/edea.png';
import edelap from './image/logos/edelap.png';
import edemsa from './image/logos/edemsa.png';
import eden from './image/logos/eden.png';
import edenor from './image/logos/edenor.png';
import edersa from './image/logos/edersa.png';
import edes from './image/logos/edes.png';
import edesur from './image/logos/edesur.png';
import epe from './image/logos/epe.png';
import laCooperativa from './image/logos/la-cooperativa.png';
import refsa from './image/logos/refsa.png';
import ContactForm from './components/ContactForm/ContactForm';

function App() {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    empresa: ''
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
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-black text-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-36 md:w-44 flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <img src={miniLogo} alt="IDEA FABRIL S.A." className="object-contain w-10" />
                <p>IDEA FABRIL</p>
              </a>
            </div>
            <div className="hidden md:block text-sm uppercase tracking-widest text-gray-300">
              • INYECCIÓN DE PLÁSTICO PARA LA INDUSTRIA ELÉCTRICA •
            </div>
          </div>
          <nav className="space-x-4 text-sm hidden md:block">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#servicios" className="hover:underline">Servicios</a>
            <a href="#productos" className="hover:underline">Productos</a>
            <a href="#misionvision" className="hover:underline">Misión</a>
            <a href="#calidad" className="hover:underline">Calidad</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
          <div className="md:hidden">
            {/* Mobile: simple anchor to contacto */}
            <a href="#contacto" className="px-3 py-1 bg-red-700 rounded text-white text-sm">Contacto</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section id="inicio" className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">IDEA FABRIL S.A.</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">Con más de 30 años de trayectoria, transformamos ideas en soluciones plásticas innovadoras. Nos especializamos en inyección de precisión, impresión 3D y producción a medida para industrias que buscan calidad, confianza y resultados duraderos.</p>
            <p className="mt-2 italic text-red-700 font-medium">Calidad industrial • Entregas confiables • Desarrollo a medida</p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <a href="#contacto" className="px-6 py-3 bg-red-700 text-white rounded-2xl uppercase text-sm font-medium">Solicitar cotización</a>
              <a href="#productos" className="px-6 py-3 border border-gray-300 rounded-2xl uppercase text-sm font-medium">Ver productos</a>
              <a href="#portfolio" className="px-6 py-3 border border-transparent rounded-2xl uppercase text-sm font-medium bg-gray-100">Ver casos</a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-64 md:h-56  rounded-lg flex items-center justify-center">
              <img src={logo} alt="Logo IDEA FABRIL" className="h-28 object-contain" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="servicios" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Fabricación de productos para la industria eléctrica</h3>
              <p className="text-sm text-gray-600">Contamos con amplia experiencia en la producción de repuestos para acometidas de baja tensión, tales como tapas de medidores eléctricos, pipetas, gabinetes, pilares y otros componentes plásticos.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Prototipado Rápido</h3>
              <p className="text-sm text-gray-600">Prototipos funcionales y modelos para validar forma, ensamblado y pruebas de usuario antes de producción masiva.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Control de calidad</h3>
              <p className="text-sm text-gray-600">Aseguramos la máxima calidad a nuestros clientes mediante inspecciones dimensionales, ensayos de materiales y trazabilidad completa de los lotes críticos, garantizando precisión y confiabilidad en cada producto.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Sostenibilidad</h3>
              <p className="text-sm text-gray-600">Implementamos programas de reciclado de materiales de descarte, promovemos el uso de insumos reciclados y optimizamos continuamente nuestros procesos productivos para minimizar el desperdicio, consolidándonos como una empresa comprometida con el medio ambiente y reconocida por su enfoque verde.</p>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="productos" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Productos</h2>
          <p className="text-gray-700 mb-4">Fabricamos una amplia variedad de piezas y componentes para la industria eléctrica, todos diseñados para garantizar durabilidad, seguridad y rendimiento en la vía pública.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Marco y tapa de medidores eléctricos</h4>
              <p className="text-sm text-gray-600">Diseñadas para proteger y garantizar el correcto funcionamiento de los medidores eléctricos dando seguridad en la vía pública, nuestras tapas se fabrican en plástico de alta resistencia, con precisión dimensional y acabado de calidad. Ofrecen durabilidad frente a condiciones ambientales adversas y están adaptadas a las necesidades específicas de cada cliente, asegurando un ajuste perfecto y seguridad en la instalación.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Tapa bornera</h4>
              <p className="text-sm text-gray-600">Fabricada en plástico de alta resistencia, la tapa bornera protege las conexiones eléctricas frente a polvo, humedad y condiciones ambientales adversas en la vía pública. Su diseño garantiza seguridad, durabilidad y facilidad de instalación, asegurando un resguardo confiable de las conexiones en todo momento.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Tornillos para tapa bornera</h4>
              <p className="text-sm text-gray-600">Fabricados en bronce o latón de alta resistencia, aseguran un cierre firme y confiable de las tapas borneras, garantizando durabilidad y seguridad en las conexiones.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Precintos y tapones precintos</h4>
              <p className="text-sm text-gray-600">Diseñados para proteger y sellar instalaciones eléctricas, brindan seguridad adicional y evitan manipulaciones no autorizadas.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Llave de apertura aislada</h4>
              <p className="text-sm text-gray-600">Herramienta segura para la apertura de precintos y tapas, fabricada con aislamiento que protege al usuario durante la manipulación.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Tapa T3</h4>
              <p className="text-sm text-gray-600">Fabricada en plástico de alta resistencia, la Tapa T3 combina diseño y funcionalidad para proteger medidores y conexiones eléctricas. Su construcción robusta garantiza larga vida útil y seguridad, mientras que su ajuste preciso facilita la instalación y el mantenimiento.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Pipetas de conexión para acometidas</h4>
              <p className="text-sm text-gray-600">Diseñadas para asegurar una conexión confiable en acometidas de baja tensión, nuestras pipetas de plástico de alta resistencia ofrecen durabilidad, precisión en el ajuste y seguridad en cada instalación. Su diseño permite la colocación sin necesidad de desconexión eléctrica, adaptándose a las necesidades específicas de cada cliente y soportando las condiciones de uso en la vía pública.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Gabinetes para alojamiento de medidores eléctricos y accesorios</h4>
              <p className="text-sm text-gray-600">Fabricados en plástico de alta resistencia, nuestros gabinetes están diseñados para proteger medidores eléctricos y sus accesorios frente a condiciones ambientales adversas y posibles impactos. Ofrecen durabilidad, seguridad y facilidad de instalación, garantizando un resguardo confiable en la vía pública.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Pilares eléctricos</h4>
              <p className="text-sm text-gray-600">Fabricados en hormigón premoldeado de alta resistencia, nuestros pilares están diseñados para alojar y proteger instalaciones eléctricas en la vía pública. Ofrecen durabilidad frente a condiciones ambientales adversas, resistencia a impactos y facilidad de instalación, garantizando seguridad y confiabilidad en cada punto de conexión.</p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO / CASES */}
        <section id="portfolio" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Algunos de nuestros productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              {/* Proyecto A */}
              <div className="h-40  mb-3 flex items-center justify-center">
                <img src={imagenMarco} alt="Marco y tapa para medidores monofásicos, trifásicos y fusibles NH" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-semibold">Marco y tapa para medidores monofásicos, trifásicos y fusibles NH</h4>
              <p className="text-sm text-gray-600">Disponibles en versiones ciegas o con sistema de reseteo, cuentan con modos de anclaje mediante tornillos metálicos y un sistema de apertura con tornillos perno excéntrico, garantizando seguridad, funcionalidad y facilidad de instalación.</p>
            </div>
            <div className="p-4 border rounded-lg">
              {/* Proyecto B */}
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={imagenBornes} alt="Tapa de bornes universal troquelable" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-semibold">Tapa de bornes universal troquelable</h4>
              <p className="text-sm text-gray-600">Este diseño innovador permite que la tapa se adapte a una gran variedad de medidores monofásicos y trifásicos, ofreciendo versatilidad, facilidad de instalación y protección confiable de las conexiones eléctricas.</p>
            </div>
            <div className="p-4 border rounded-lg">
              {/* Proyecto C */}
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={imagenJabalina} alt="Tapa de inspección jabalina" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-semibold">Tapa de inspección jabalina</h4>
              <p className="text-sm text-gray-600">Fabricada en polímero resistente a la intemperie, esta tapa permite una apertura sencilla y ofrece visualización completa de las conexiones, combinando seguridad, durabilidad y facilidad de uso.</p>
            </div>
            <div className="p-4 border rounded-lg">
              {/* Proyecto D */}
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={imagenPipetas} alt="Pipetas de conexión para acometidas" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-semibold">Pipetas de conexión para acometidas de 2’’, 1½’’ y 1¼’’</h4>
              <p className="text-sm text-gray-600">Su diseño en dos mitades permite la instalación sin necesidad de desconectar los cables de entrada y salida, ofreciendo rapidez, seguridad y confiabilidad en cada conexión.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonios" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Clientes que confían</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={edea} alt="Empresa Distribuidora de Energía Atlántica" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Empresa Distribuidora de Energía Atlántica</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={edelap} alt="Empresa Distribuidora La Plata S.A" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Empresa Distribuidora La Plata S.A.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={edemsa} alt="EDEMSA" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Empresa Distribuidora de Electricidad de Mendoza S.A.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={eden} alt="EDEN" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Empresa Distribuidora de Energía Norte S.A.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={edenor} alt="EDENOR" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Empresa Distribuidora y Comercializadora Norte S.A.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={edersa} alt="EDERSA" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Empresa de Energía de Río Negro S.A.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={edes} alt="EDES" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Empresa Distribuidora de Energía Sur S.A.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={edesur} alt="EDESUR" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Empresa Distribuidora de Energía Sur S.A.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={epe} alt="EPE" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Empresa Provincial de Energía de Santa Fe S.A.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={laCooperativa} alt="La Cooperativa" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">La Cooperativa Empresa Eléctrica de Godoy Cruz.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={refsa} alt="REFSA" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold">Recursos y Energía Formosa S.A.</p>
            </div>
          </div>
        </section>

        {/* MISION & VISION */}
        <section id="misionvision" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Misión y Visión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-red-700">Misión</h3>
              <p className="text-gray-700 leading-relaxed">Brindar soluciones industriales innovadoras en inyección de plástico que combinen calidad, eficiencia y precisión. Nuestro compromiso es acompañar a los clientes en cada etapa del proceso productivo, garantizando resultados confiables, sostenibles y adaptados a las exigencias del mercado.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-red-700">Visión</h3>
              <p className="text-gray-700 leading-relaxed">Ser reconocidos como líderes nacionales en la industria de la inyección plástica, destacándonos por la excelencia, la innovación tecnológica y el compromiso con el desarrollo sostenible. Aspiramos a consolidarnos como un referente regional que transforme ideas en soluciones productivas y de valor.</p>
            </div>
          </div>
        </section>

        {/* CALIDAD & TECNOLOGIA */}
        <section id="calidad" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Calidad y tecnología</h2>
          <p className="text-gray-700 mb-4">Contamos con estrictos procesos de control de calidad, instrumentación metrológica avanzada y capacidad para respaldar certificaciones según los requerimientos de la industria. Todos nuestros productos cumplen con las normas IRAM y HN-60-E-01. Utilizamos maquinaria moderna, control de temperatura y sistemas de secado y deshumidificación de materiales para garantizar consistencia y repetibilidad en cada producción.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h5 className="font-semibold mb-2">Maquinaria</h5>
              <p className="text-sm text-gray-600">Contamos con inyectoras de termoplásticos con control CNC, impresoras 3D de alta precisión y equipos de acabado y armado que garantizan un resultado óptimo en cada pieza.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h5 className="font-semibold mb-2">Metrología</h5>
              <p className="text-sm text-gray-600">Calibres, comparadores y posibilidad de CMM según requerimiento.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h5 className="font-semibold mb-2">Trazabilidad</h5>
              <p className="text-sm text-gray-600">Registro de lotes, materias primas y procesos para asegurar cumplimiento regulatorio.</p>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="mb-12 p-8 bg-red-700 text-white rounded-lg text-center">
          <h3 className="text-xl font-semibold">¿Listos para producir con calidad y a tiempo?</h3>
          <p className="mt-2">Enviá tu plano o consulta y te armamos una propuesta técnica y económica.</p>
          <div className="mt-4">
            <a href="#contacto" className="px-6 py-3 bg-black rounded-2xl inline-block">Solicitar cotización</a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contacto" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="p-6 border rounded-lg" 
              onSubmit={enviarFormulario} 
            >
              <label className="block text-sm font-medium">Nombre</label>
              <input 
                className="mt-2 w-full p-3 border rounded" 
                placeholder="Tu nombre" 
                type="text" 
                onChange={handleInputNombreChange}
              />

              <label className="block text-sm font-medium mt-4">Empresa / Proyecto</label>
              <input className="mt-2 w-full p-3 border rounded" placeholder="Empresa" type="text" onChange={handleInputEmpresaChange}/>

              <label className="block text-sm font-medium mt-4">Email</label>
              <input className="mt-2 w-full p-3 border rounded" placeholder="Email" type="email" onChange={handleInputEmailChange} />

              <label className="block text-sm font-medium mt-4">Mensaje</label>
              <textarea className="mt-2 w-full p-3 border rounded" rows={5} placeholder="Describir pedido / consulta" type="text" onChange={handleInputMensajeChange}></textarea>

              <label className="block text-sm font-medium mt-4">Adjuntar plano (opcional)</label>
              <input type="file" className="mt-2 w-full" />

              <button type="submit" className="mt-4 px-6 py-3 bg-black text-white rounded-2xl">Enviar</button>
            </form>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">Datos</h4>
              <p className="text-sm text-gray-600 mt-2">Email: info@ideafabril.net.ar</p>
              <p className="text-sm text-gray-600">Tel: 2216045782</p>

              <p className="text-sm text-gray-600">Dirección: calle 147 nro 154, La Plata, Argentina.</p>
              <a className="text-sm text-gray-600 hover:underline hover:text-blue-500" href='https://www.instagram.com/ideafabril_s.a/' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-lg font-bold" aria-hidden="true"></i> @ideafabril_s.a</a>

              <h5 className="font-semibold mt-6">¿Cómo solicitar tu presupuesto?</h5>
              <ol className="text-sm text-gray-600 ml-5 list-decimal">
                <li>Envía el plano o la referencia del producto.</li>
                <li>Indica el material deseado y la cantidad requerida.</li>
              </ol>
            </div>
          </div>
        </section>


        <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <ContactForm />

          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6"> 
            <h5 className="mb-3 text-base font-semibold text-black md:text-xl">
              Datos de contacto
            </h5>
            <p className="text-sm font-normal text-gray-500 ">Conéctate con nosotros.</p>
            <ul className="my-4 space-y-3">
              <li>
                <a href="https://www.instagram.com/ideafabril_s.a/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 text-base font-bold text-gray-900 border-gray-300 border rounded-lg bg-gray-200  group hover:border-gray-600 hover:shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-label="Instagram" className='w-5'>
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Instagram</span>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-300 rounded-sm ">Popular</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 text-base font-bold text-gray-900 border-gray-300 border rounded-lg bg-gray-200  group hover:border-gray-600 hover:shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-label="Correo electrónico" className='w-5'>
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4zm16 2.4-7.47 5.46a1 1 0 0 1-1.06 0L4 8.4V18h16z"/>
                  </svg>                
                  <span className="flex-1 ms-3 whitespace-nowrap">Correo electrónico</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 text-base font-bold text-gray-900 border-gray-300 border rounded-lg bg-gray-200  group hover:border-gray-600 hover:shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-label="Dirección o ubicación" className='w-5'>
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>       
                  <span className="flex-1 ms-3 whitespace-nowrap">Dirección</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 text-base font-bold text-gray-900 border-gray-300 border rounded-lg bg-gray-200  group hover:border-gray-600 hover:shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-label="Teléfono" className='w-5'>
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.05z"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Teléfono</span>
                </a>
              </li>

            </ul>
            <div>
              <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                
                Why do I need to connect with me?</a>
            </div>
          </div>

        </section>

      </main>

      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className='flex items-center'>
              <p>© {new Date().getFullYear()} IDEA FABRIL S.A. - Todos los derechos reservados -</p>
              <a className="text-white ml-1 hover:underline hover:text-blue-500" href='https://www.instagram.com/ideafabril_s.a/' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-lg" aria-hidden="true"></i></a>
            </div>
            <div className="mt-4 md:mt-0">Diseño simple • Contacto:  info@ideafabril.net.ar</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
