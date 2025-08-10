import React from 'react';

const posts = [
  {
    title: 'Cómo aprendí React desde cero',
    date: '2025-07-01',
    excerpt: 'Mi experiencia y recursos favoritos para dominar React y construir proyectos reales.',
    link: '#'
  },
  {
    title: 'Tips para destacar tu portafolio web',
    date: '2025-06-15',
    excerpt: 'Consejos prácticos de diseño, contenido y tecnología para que tu portafolio brille.',
    link: '#'
  }
];

const Blog = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-[#09090b]" id="blog">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Blog</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="bg-[#18181b] rounded-xl p-8 shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay={i*150}>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">{post.title}</h3>
            <div className="text-sm text-gray-400 mb-2">{post.date}</div>
            <p className="text-gray-200 mb-4">{post.excerpt}</p>
            <a href={post.link} className="text-purple-400 hover:underline">Leer más</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
