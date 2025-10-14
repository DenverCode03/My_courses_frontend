import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-screen">
      {/* Header */}
      <header className="bg-primary-500 text-white py-6 shadow w-full">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">MyCourses</h1>
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
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
          Partagez et accédez à vos cours facilement
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Une plateforme collaborative pour enseignants et étudiants afin de partager, organiser et consulter des cours en toute simplicité.
        </p>
        <div>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition">
            Commencer
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-primary mb-10">
            Fonctionnalités principales
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
              <span className="text-4xl mb-4 inline-block">📚</span>
              <h4 className="text-xl font-semibold mb-2">Partage de cours</h4>
              <p>
                Téléchargez et partagez vos supports de cours avec toute la communauté.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
              <span className="text-4xl mb-4 inline-block">🔍</span>
              <h4 className="text-xl font-semibold mb-2">Recherche facile</h4>
              <p>
                Trouvez rapidement les cours dont vous avez besoin grâce à une recherche avancée.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
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
          <h3 className="text-2xl font-bold text-primary mb-4">À propos</h3>
          <p className="text-gray-700">
            MyCourses est une plateforme dédiée à la mise en relation des enseignants et des étudiants pour faciliter le partage et l'accès aux ressources pédagogiques. Notre mission est de rendre l'apprentissage plus accessible et collaboratif.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} MyCourses. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}