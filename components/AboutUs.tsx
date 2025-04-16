import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Imagen o gráfico */}
          <div className="md:w-1/2">
            <div className="bg-gris-claro h-80 md:h-96 rounded-lg flex items-center justify-center">
              <span className="text-azul-profundo text-lg">
                Imagen de tu equipo o evento
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-azul-profundo">
              Sobre Nosotros
            </h2>
            <p className="text-lg mb-4 text-gray-700">
              Somos una empresa dedicada a crear experiencias únicas que
              fusionan lo primitivo y lo tecnológico. Desde 2015, producimos
              eventos que van más allá del entretenimiento, creando momentos que
              resuenan con la esencia humana.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Nuestra filosofía se basa en la conexión entre la cultura
              electrónica y nuestra humanidad esencial, combinando elementos
              naturales con lo más avanzado en tecnología audiovisual.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gris-claro p-4 rounded">
                <h3 className="font-bold text-azul-profundo mb-2">Misión</h3>
                <p>
                  Transformar momentos en memorias a través de experiencias
                  sensoriales completas.
                </p>
              </div>
              <div className="bg-gris-claro p-4 rounded">
                <h3 className="font-bold text-azul-profundo mb-2">Visión</h3>
                <p>
                  Redefinir la cultura del evento como un espacio de conexión
                  humana y evolución.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
