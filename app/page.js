"use client"
import Image from 'next/image';
import Link from 'next/link';


// Página Home modificada para mostrar las categorías
export default function Home() {
  const categorias = [
    {
      id: 'cafe',
      nombre: 'Café',
      descripcion: 'Descubre nuestro delicioso café de Oxapampa.',
      imagen: '/images/c.jpeg',
    },
    {
      id: 'miel',
      nombre: 'Miel',
      descripcion: 'Miel pura y natural cosechada artesanalmente.',
      imagen: '/images/m2.jpeg',
    },
    {
      id: 'miel-solida',
      nombre: 'Miel Sólida',
      descripcion: 'Miel sólida perfecta como snack saludable.',
      imagen: '/images/m5.jpeg',
    },
    {
      id: 'polen',
      nombre: 'Polen',
      descripcion: 'Polen fresco para complementar tu desayuno.',
      imagen: '/images/p1.jpeg',
    },
    {
      id: 'cafetera',
      nombre: 'Cafetera',
      descripcion: 'Cafetera moderna para café de calidad en casa.',
      imagen: '/images/cafetera.jpeg',
    },
  ];

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

      {/* Categorías */}
      <section id="categorias" className="py-20 bg-green-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-16 animate-fadeInDown">
            Nuestras Categorías
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center items-center">
            {categorias.map((categoria) => (
              <Link key={categoria.id} href={`/categoria/${categoria.id}`} passHref>
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-105 flex flex-col items-center cursor-pointer">
                  <Image
                    src={categoria.imagen}
                    alt={categoria.nombre}
                    width={400}
                    height={300}
                    className="rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <h4 className="mt-6 text-2xl font-bold text-green-800">{categoria.nombre}</h4>
                  <p className="mt-4 text-gray-700 text-lg text-center font-light">
                    {categoria.descripcion}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}