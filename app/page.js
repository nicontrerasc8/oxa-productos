import Image from 'next/image';

export default function Home() {
  const productos = {
    cafe: {
      nombre: 'Café',
      descripcion: 'Disfruta de nuestro café fresco de Oxapampa, disponible en dos presentaciones: molido y en grano. Rico en antioxidantes y con un sabor inigualable.',
      opciones: [
        { tipo: 'Molido', peso: '250g', precio: 'S/. 18.00', imagen: '/images/c.jpeg' },
        { tipo: 'En Grano', peso: '250g', precio: 'S/. 23.00', imagen: '/images/c.jpeg' }
      ]
    },
    miel: {
      nombre: 'Miel',
      descripcion: 'Nuestra miel pura y natural es cosechada en los bosques de Oxapampa. Rica en nutrientes, ideal para endulzar naturalmente tus días.',
      opciones: [
        { peso: '250g', precio: 'S/. 18.00', imagen: '/images/m2.jpeg' },
        { peso: '400g', precio: 'S/. 22.00', imagen: '/images/m3.jpeg' },
        { peso: '500g', precio: 'S/. 25.00', imagen: '/images/m4.jpeg' },
        { peso: '1kg', precio: 'S/. 46.00', imagen: '/images/m5.jpeg' }
      ]
    },
    mielSolida: {
      nombre: 'Miel Sólida',
      descripcion: 'Miel sólida cosechada naturalmente y de manera artesanal. Perfecta para consumir como un snack saludable o acompañar tus postres favoritos.',
      opciones: [
        { peso: '400g', precio: 'S/. 25.00', imagen: '/images/m5.jpeg' },
        { peso: '1kg', precio: 'S/. 48.00', imagen: '/images/m5.jpeg' }
      ]
    },
    polen: {
      nombre: 'Polen',
      descripcion: 'Polen fresco y natural, una excelente fuente de proteínas, vitaminas y minerales. Ideal para complementar tu desayuno.',
      opciones: [
        { peso: '120g', precio: 'S/. 19.00', imagen: '/images/p1.jpeg' }
      ]
    },
  };

  const verdeSelvatico = '#2E7D32'; // Color verde selvático

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-white shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 py-12 lg:py-24 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500 animate-pulse">
              Bienvenido a Goxa
            </h1>
            <p className="mt-6 text-xl text-gray-700 font-light">
              Los mejores productos naturales seleccionados cuidadosamente para ti desde Oxapampa.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start space-x-6">
              <a
                href="#productos"
                className="px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 ease-in-out bg-green-700 text-white hover:bg-green-800 hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Ver productos
              </a>
              <a
                href="https://wa.me/998855069" target="_blank"
                className="px-10 py-4 text-lg font-semibold rounded-lg bg-white text-green-700 border-2 border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/j.jpg"
              alt="Imagen de productos"
              width={600}
              height={400}
              className="rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-500 ease-in-out hover:rotate-3"
            />
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section id="productos" className="py-20 bg-green-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-16 animate-fadeInDown">
            Productos Destacados
          </h2>

          {/* Renderizado de Productos */}
          {Object.values(productos).map((producto) => (
            <div key={producto.nombre} className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-green-700 mb-4 animate-bounceIn">{producto.nombre}</h3>
              <p className="text-gray-700 mb-10 text-lg font-light">{producto.descripcion}</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                {producto.opciones.map((opcion, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-105">
                    <Image
                      src={opcion.imagen}
                      alt={`${producto.nombre} - ${opcion.peso}`}
                      width={400}
                      height={300}
                      className="rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <h4 className="mt-6 text-2xl font-bold text-green-800">{producto.nombre}</h4>
                    <ul className="mt-4 text-gray-700 text-lg">
                      <li className="mt-2">
                        {opcion.tipo ? `${opcion.tipo}: ` : ''}{opcion.peso} - <span className="font-semibold text-green-600">{opcion.precio}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-green-200 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12 animate-fadeInDown">Contáctanos</h2>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/51998855069" target="_blank"
              className="inline-block px-12 py-5 rounded-full text-lg font-semibold bg-green-700 text-white shadow-lg hover:bg-green-800 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              Enviar mensaje por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 Goxa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}