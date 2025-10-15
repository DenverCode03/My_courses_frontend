import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-screen">
      {/* Header */}
      <header className=" text-white py-6 shadow w-full">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl text-primary-500 font-bold">MyCourses</h1>
          <nav>
            <a href="#features" className="mx-3 hover:underline">
              Fonctionnalités
            </a>
            <a href="#about" className="mx-3 hover:underline">
              À propos
            </a>
            <a href="#contact" className="mx-3 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex py-10 justify-center bg-primary-100/20 items-center text-center px-16">
        <div className="w-2/3">
          <img className="w-full h-full" src="./public/images/hero.webp" alt="hero" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-600 pb-10">
            Bienvenuse sur <span className="text-primary-500">MyCourse</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Une plateforme collaborative pour enseignants et étudiants afin de partager, organiser et consulter des cours en toute simplicité.
          </p>
          <div>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition">
              Commencer
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white text-gray-600">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center md:text-4xl text-gray-800 mb-10">
            Fonctionnalités principales
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-100 p-6 rounded-lg shadow text-center">
              <span className="text-4xl mb-4 inline-block">📚</span>
              <h4 className="text-xl font-semibold mb-2">Partage de cours</h4>
              <p>
                Téléchargez et partagez vos supports de cours avec toute la communauté.
              </p>
            </div>
            <div className="bg-primary-100 p-6 rounded-lg shadow text-center">
              <span className="text-4xl mb-4 inline-block">🔍</span>
              <h4 className="text-xl font-semibold mb-2">Recherche facile</h4>
              <p>
                Trouvez rapidement les cours dont vous avez besoin grâce à une recherche avancée.
              </p>
            </div>
            <div className="bg-primary-100 p-6 rounded-lg shadow text-center">
              <span className="text-4xl mb-4 inline-block">🤝</span>
              <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
              <p>
                Interagissez, commentez et échangez avec les enseignants et étudiants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-primary-400 mb-4">À propos</h3>
          <p className="text-gray-700">
            MyCourses est une plateforme dédiée à la mise en relation des enseignants et des étudiants pour faciliter le partage et l'accès aux ressources pédagogiques. Notre mission est de rendre l'apprentissage plus accessible et collaboratif.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-400 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} MyCourses. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}