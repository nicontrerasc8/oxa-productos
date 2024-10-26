"use client"
import { useRouter } from 'next/router'
 // Archivo que contiene los productos
import Image from 'next/image';
import { redirect, useParams } from 'next/navigation';

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
    cafetera: {
      nombre: 'Cafetera',
      descripcion: 'Cafetera moderna y elegante para disfrutar del mejor café en casa. Ideal para preparar café de calidad barista.',
      opciones: [
        { peso: '', precio: 'S/. 95.00', imagen: '/images/cafetera.jpeg' }
      ]
    },
  };

export default function Categoria() {
  const params = useParams();
  const { id } = params;
  let producto;

  switch (id) {
    case 'cafe':
      producto = productos.cafe;
      break;
    case 'miel':
      producto = productos.miel;
      break;
    case 'miel-solida':
      producto = productos.mielSolida;
      break;
    case 'polen':
      producto = productos.polen;
      break;
    case 'cafetera':
      producto = productos.cafetera;
      break;
    default:
      redirect('/'); // Redirige al usuario a la página principal si no se encuentra el producto
      return;
  }


  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
          {producto.nombre}
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 font-light">
          {producto.descripcion}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center items-center">
          {producto.opciones.map((opcion, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-105 flex flex-col items-center">
              <Image
                src={opcion.imagen}
                alt={`${producto.nombre} - ${opcion.peso}`}
                width={400}
                height={300}
                className="rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <h4 className="mt-6 text-2xl font-bold text-green-800">{producto.nombre}</h4>
              <ul className="mt-4 text-gray-700 text-lg text-center">
                <li className="mt-2">
                  {opcion.tipo ? `${opcion.tipo}: ` : ''}{opcion.peso} - <span className="font-semibold text-green-600">{opcion.precio}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}