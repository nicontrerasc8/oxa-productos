import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 py-12 lg:py-24">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Encuentra lo que necesitas <br />
              <span className="text-indigo-600">aquí</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              La mejor calidad en productos seleccionados cuidadosamente para ti.
            </p>
            <div className="mt-8 flex space-x-4">
              <a
                href="#productos"
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition"
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
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ejemplo de un producto */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/product1.jpg"
                alt="Producto 1"
                width={400}
                height={300}
                className="rounded-md"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">Producto 1</h3>
              <p className="mt-2 text-gray-600">Descripción corta del producto 1.</p>
              <div className="mt-4">
                <span className="text-lg font-semibold text-indigo-600">S/. 99.00</span>
              </div>
            </div>
            {/* Agrega más productos aquí */}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Contáctanos</h2>
          <div className="mt-8">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows={4}
                  placeholder="Escribe tu mensaje..."
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition"
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
          <p className="text-sm text-gray-400">&copy; 2024 Tu Tienda. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
