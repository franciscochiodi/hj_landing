import React from "react";

type Artist = {
  name: string;
  role: string;
  description: string;
};

const Artists = () => {
  const artists: Artist[] = [
    {
      name: "DJ Nombre",
      role: "DJ / Productor",
      description:
        "Especializado en ritmos electrónicos con influencias orgánicas y primitivas.",
    },
    {
      name: "Nombre Artístico",
      role: "Performance Visual",
      description:
        "Crea experiencias visuales inmersivas que conectan con las raíces de la humanidad.",
    },
    {
      name: "Otro Nombre",
      role: "Músico / Performer",
      description:
        "Fusiona instrumentos tradicionales con tecnología para crear paisajes sonoros únicos.",
    },
    {
      name: "Cuarto Artista",
      role: "Diseñador de Experiencias",
      description:
        "Transforma espacios en mundos sensoriales donde la naturaleza y tecnología convergen.",
    },
  ];

  return (
    <section id="artists" className="py-16 md:py-24 bg-gris-claro/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-azul-profundo">
          Nuestros Artistas
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-700">
          Talentos que comparten nuestra visión de fusionar lo primitivo y lo
          tecnológico
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-azul-grisaceo h-48 rounded-md mb-4 flex items-center justify-center">
                <span className="text-white">Foto de {artist.name}</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-azul-profundo">
                {artist.name}
              </h3>
              <p className="text-terracota font-medium mb-2">{artist.role}</p>
              <p className="text-gray-600">{artist.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-terracota hover:bg-terracota/80 text-white px-6 py-3 rounded font-medium transition-colors"
          >
            Contrata Nuestros Artistas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Artists;
