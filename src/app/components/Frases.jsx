import React from 'react'
import { useState, useEffect } from 'react'

export default function Frases() {
    const frases = [ 
    "La vida es lo que sucede mientras tú te estás ocupando de hacer otros planes.",
    "No puedes cambiar el pasado, pero puedes aprender de él.",
    "El éxito no es la clave de la felicidad, sino que la felicidad es la clave del éxito.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "No te rindas hasta que hayas logrado lo que quieres."
  ]

  const [frase, setFrase] = useState("");

  useEffect(() => {
    handleNuevaFrase();
  }, []);

  const handleNuevaFrase = () => {
    let candidata = frases[Math.floor(Math.random() * frases.length)];

    //mientras la candidata sea igual a la frase actual, generar una nueva frase
    while (candidata === frase) {
      candidata = frases[Math.floor(Math.random() * frases.length)];
    }
    setFrase(candidata);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-500 p-4 text-white">
        <h1 className='font-cookie text-8xl'>Frases Motivacionales</h1>

        <p className='p-4 font-barlow text-2xl'>{frase}</p>

        <button 
            className='p-4 rounded-xl bg-white text-orange-500 font-bold mt-4 hover:bg-orange-100 transition-colors font-barlow text-xl' 
            onClick={() => handleNuevaFrase()}
        > 
            Nueva Frase
        </button>
    </div>
  );
}
