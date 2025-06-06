import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import Header from '../components/Header';


const HomePage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Header />
      {/* Видео */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео фон.
      </video>

      {/* Затемнение + Контент */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 bg-black bg-opacity-20">
        <div className="text-center max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Cosmétiques purs pour une peau éclatante
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Découvrez notre sélection de soins naturels pour votre beauté au quotidien.
          </p>
          <Link
            to="/catalog"
            className="inline-block px-6 py-3 bg-pink-600 text-white text-lg rounded-full shadow hover:bg-pink-700 transition"
          >
            Voir le catalogue
          </Link>
        </div>
      </div>

      {/* Кнопки управления видео */}
<div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
  <div className="flex flex-col items-center gap-2">
    {isPlaying ? (
      <button
        onClick={handlePause}
        className="bg-white/80 text-pink-700 w-12 h-12 flex items-center justify-center rounded-lg shadow hover:bg-white text-2xl"
        title="Pause"
      >
        ⏸
      </button>
    ) : (
      <button
        onClick={handlePlay}
        className="bg-white/80 text-pink-700 w-12 h-12 flex items-center justify-center rounded-lg shadow hover:bg-white text-2xl"
        title="Play"
      >
        <span className="transform -rotate-180 inline-block">▶</span>
      </button>
    )}
  </div>
</div>

    </section>
  );
};

export default HomePage;

