import React from 'react'

const Servicios = () => {
  return (
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
  )
}

export default Servicios
