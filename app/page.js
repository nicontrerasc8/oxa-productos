import Image from 'next/image';

export default function Home() {
  const productos = {
    cafe: {
      nombre: 'Café',
      opciones: [
        { tipo: 'Molido', peso: '250g', precio: 'S/. 18.00', imagen: '/images/g1.jpeg' },
        { tipo: 'En Grano', peso: '250g', precio: 'S/. 23.00', imagen: '/images/m1.jpeg' }
      ]
    },
    miel: {
      nombre: 'Miel',
      opciones: [
        { peso: '250g', precio: 'S/. 18.00', imagen: '/images/m2.jpeg' },
        { peso: '400g', precio: 'S/. 22.00', imagen: '/images/m3.jpeg' },
        { peso: '500g', precio: 'S/. 25.00', imagen: '/images/m4.jpeg' },
        { peso: '1kg', precio: 'S/. 46.00', imagen: '/images/m5.jpeg' }
      ]
    },
    mielSolida: {
      nombre: 'Miel Sólida',
      opciones: [
        { peso: '400g', precio: 'S/. 25.00', imagen: '/images/p1.jpeg' },
        { peso: '1kg', precio: 'S/. 48.00', imagen: '/images/g1.jpeg' }
      ]
    },
    polen: {
      nombre: 'Polen',
      opciones: [
        { peso: '120g', precio: 'S/. 19.00', imagen: '/images/m1.jpeg' }
      ]
    },
    propoleo: {
      nombre: 'Propóleo',
      opciones: [
        { peso: '30ml', precio: 'S/. 24.00', imagen: '/images/m2.jpeg' }
      ]
    }
  };

  const verdeSelvatico = '#2E7D32'; // Color verde selvático

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 py-12 lg:py-24">
            <h1 className="text-4xl font-extrabold" style={{ color: verdeSelvatico }}>
              Bienvenido a Goxa <br />
             
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Los mejores productos naturales seleccionados cuidadosamente para ti desde Oxapampa.
            </p>
            <div className="mt-8 flex space-x-4">
              <a
                href="#productos"
                className="px-8 py-3 rounded-lg"
                style={{ backgroundColor: verdeSelvatico, color: 'white', fontWeight: 'bold' }}
              >
                Ver productos
              </a>
              <a
                href="#contacto"
                className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-300 transition"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/hero-image.jpg"
              alt="Imagen de productos"
              width={600}
              height={400}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

     
      {/* Productos Destacados */}
      <section id="productos" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Productos Destacados</h2>

          {/* Café */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800">{productos.cafe.nombre}</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={productos.cafe.opciones[0].imagen}
                  alt={productos.cafe.nombre}
                  width={400}
                  height={300}
                  className="rounded-md"
                />
                <h4 className="mt-4 text-xl font-bold text-gray-800">{productos.cafe.nombre}</h4>
                <ul className="mt-2 text-gray-600">
                  {productos.cafe.opciones.map((opcion, index) => (
                    <li key={index} className="mt-2">
                      {opcion.tipo}: {opcion.peso} - <span className="font-semibold text-indigo-600">{opcion.precio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Miel */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800">{productos.miel.nombre}</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={productos.miel.opciones[0].imagen}
                  alt={productos.miel.nombre}
                  width={400}
                  height={300}
                  className="rounded-md"
                />
                <h4 className="mt-4 text-xl font-bold text-gray-800">{productos.miel.nombre}</h4>
                <ul className="mt-2 text-gray-600">
                  {productos.miel.opciones.map((opcion, index) => (
                    <li key={index} className="mt-2">
                      {opcion.peso} - <span className="font-semibold text-indigo-600">{opcion.precio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Miel Sólida */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800">{productos.mielSolida.nombre}</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={productos.mielSolida.opciones[0].imagen}
                  alt={productos.mielSolida.nombre}
                  width={400}
                  height={300}
                  className="rounded-md"
                />
                <h4 className="mt-4 text-xl font-bold text-gray-800">{productos.mielSolida.nombre}</h4>
                <ul className="mt-2 text-gray-600">
                  {productos.mielSolida.opciones.map((opcion, index) => (
                    <li key={index} className="mt-2">
                      {opcion.peso} - <span className="font-semibold text-indigo-600">{opcion.precio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Polen */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800">{productos.polen.nombre}</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={productos.polen.opciones[0].imagen}
                  alt={productos.polen.nombre}
                  width={400}
                  height={300}
                  className="rounded-md"
                />
                <h4 className="mt-4 text-xl font-bold text-gray-800">{productos.polen.nombre}</h4>
                <ul className="mt-2 text-gray-600">
                  {productos.polen.opciones.map((opcion, index) => (
                    <li key={index} className="mt-2">
                      {opcion.peso} - <span className="font-semibold text-indigo-600">{opcion.precio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Propóleo */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800">{productos.propoleo.nombre}</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={productos.propoleo.opciones[0].imagen}
                  alt={productos.propoleo.nombre}
                  width={400}
                  height={300}
                  className="rounded-md"
                />
                <h4 className="mt-4 text-xl font-bold text-gray-800">{productos.propoleo.nombre}</h4>
                <ul className="mt-2 text-gray-600">
                  {productos.propoleo.opciones.map((opcion, index) => (
                    <li key={index} className="mt-2">
                      {opcion.peso} - <span className="font-semibold text-indigo-600">{opcion.precio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold" style={{ color: verdeSelvatico }}>Contáctanos</h2>
          <div className="mt-8">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium" style={{ color: verdeSelvatico }}>Nombre</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" style={{ color: verdeSelvatico }}>Correo Electrónico</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium" style={{ color: verdeSelvatico }}>Mensaje</label>
                <textarea
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows={4}
                  placeholder="Escribe tu mensaje..."
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6"
                  style={{ backgroundColor: verdeSelvatico, color: 'white', fontWeight: 'bold' }}
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 Goxa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
