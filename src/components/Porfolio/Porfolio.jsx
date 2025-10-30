import React from 'react';
import imagenMarco from '../../image/marco-tapa-medidores.png';
import imagenBornes from '../../image/tapa-bornes-universal.jpeg';
import imagenJabalina from '../../image/tapa-inspeccion-jabalina.jpeg';
import imagenPipetas from '../../image/pipetas-coneccion-acometidad.png';

const Porfolio = () => {
  return (
        <section id="portfolio" className="mb-12">
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
        </section>
  )
}

export default Porfolio
