import React from 'react';

const testimonials = [
  {
    name: 'Ana Martínez',
    role: 'Desarrolladora Web',
    text: 'Trabajar con Jader fue una experiencia increíble. Su creatividad y profesionalismo llevaron nuestro proyecto al siguiente nivel.'
  },
  {
    name: 'Carlos Gómez',
    role: 'Líder de Proyecto',
    text: 'Siempre aporta ideas innovadoras y resuelve problemas con rapidez. ¡Altamente recomendado!'
  },
  {
    name: 'Laura Torres',
    role: 'Diseñadora UI/UX',
    text: 'Su atención al detalle y pasión por el desarrollo se reflejan en cada entrega.'
  }
];

const Testimonials = () => (
  <section className="py-20 px-4 bg-black/20" id="testimonials">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Testimonios</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#18181b] rounded-xl p-8 shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay={i*150}>
            <p className="text-lg text-gray-200 mb-4">"{t.text}"</p>
            <div className="font-bold text-blue-400">{t.name}</div>
            <div className="text-sm text-gray-400">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
