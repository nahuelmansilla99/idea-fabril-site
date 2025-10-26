import { useState } from 'react';
import Marquee from "react-fast-marquee";
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
import NuestrosDatos from './components/NuestrosDatosContacto/NuestrosDatos';
import Servicios from './components/Servicios/Servicios';
import Productos from './components/Productos/Productos';
import Porfolio from './components/Porfolio/Porfolio';

function App() {

  const logosClientes = [
    { src: edea, alt: 'Empresa Distribuidora de Energía Atlántica' },
    { src: edelap, alt: 'Empresa Distribuidora La Plata S.A' },
    { src: edemsa, alt: 'Empresa Distribuidora de Electricidad de Mendoza S.A.' },
    { src: eden, alt: 'Empresa Distribuidora de Energía Norte S.A.' },
    { src: edenor, alt: 'Empresa Distribuidora y Comercializadora Norte S.A.' },
    { src: edersa, alt: 'Empresa de Energía de Río Negro S.A.' },
    { src: edes, alt: 'Empresa Distribuidora de Energía Sur S.A.' },
    { src: edesur, alt: 'Empresa Distribuidora de Energía Sur S.A.' },
    { src: epe, alt: 'Empresa Provincial de Energía de Santa Fe S.A.' },
    { src: laCooperativa, alt: 'La Cooperativa Empresa Eléctrica de Godoy Cruz.' },
    { src: refsa, alt: 'Recursos y Energía Formosa S.A.' },
  ];

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
        <Servicios />
        {/* <section id="servicios" className="mb-12">
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
        </section> */}

        
        {/* PRODUCTS */}
        <Productos />
        {/* <section id="productos" className="mb-12">
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
        </section> */}

        
        {/* PORTFOLIO / CASES */}
        <Porfolio />

        {/* <section id="portfolio" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Algunos de nuestros productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">

              <div className="h-40  mb-3 flex items-center justify-center">
                <img src={imagenMarco} alt="Marco y tapa para medidores monofásicos, trifásicos y fusibles NH" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-semibold">Marco y tapa para medidores monofásicos, trifásicos y fusibles NH</h4>
              <p className="text-sm text-gray-600">Disponibles en versiones ciegas o con sistema de reseteo, cuentan con modos de anclaje mediante tornillos metálicos y un sistema de apertura con tornillos perno excéntrico, garantizando seguridad, funcionalidad y facilidad de instalación.</p>
            </div>
            <div className="p-4 border rounded-lg">

              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={imagenBornes} alt="Tapa de bornes universal troquelable" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-semibold">Tapa de bornes universal troquelable</h4>
              <p className="text-sm text-gray-600">Este diseño innovador permite que la tapa se adapte a una gran variedad de medidores monofásicos y trifásicos, ofreciendo versatilidad, facilidad de instalación y protección confiable de las conexiones eléctricas.</p>
            </div>
            <div className="p-4 border rounded-lg">

              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={imagenJabalina} alt="Tapa de inspección jabalina" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-semibold">Tapa de inspección jabalina</h4>
              <p className="text-sm text-gray-600">Fabricada en polímero resistente a la intemperie, esta tapa permite una apertura sencilla y ofrece visualización completa de las conexiones, combinando seguridad, durabilidad y facilidad de uso.</p>
            </div>
            <div className="p-4 border rounded-lg">

              <div className="h-40 mb-3 flex items-center justify-center">
                <img src={imagenPipetas} alt="Pipetas de conexión para acometidas" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-semibold">Pipetas de conexión para acometidas de 2’’, 1½’’ y 1¼’’</h4>
              <p className="text-sm text-gray-600">Su diseño en dos mitades permite la instalación sin necesidad de desconectar los cables de entrada y salida, ofreciendo rapidez, seguridad y confiabilidad en cada conexión.</p>
            </div>
          </div>
        </section> */}

        
        {/* TESTIMONIALS */}
        <section id="testimonios" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Clientes que confían</h2>

          <Marquee
            gradient={true}   // sin fade en los bordes
            gradientWidth={50}
            speed={50}         // px/seg
            pauseOnHover       // pausa con hover
          >
            {logosClientes.map((logo, i) => (
              <div key={i} style={{ marginRight: 48, display: "flex", alignItems: "center" }} className='max-w-sm rounded-lg flex flex-col'>
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  style={{
                    height: "100px",     // 🔸 ajustá este valor
                    width: "auto",
                    objectFit: "contain",
                  }} 
                  loading="lazy" 
                />
                <span className="ml-2 text-xs text-gray-700">{logo.alt}</span>
              </div>
            ))}
          </Marquee>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div> */}
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
        <ContactForm  />
        <NuestrosDatos />

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
