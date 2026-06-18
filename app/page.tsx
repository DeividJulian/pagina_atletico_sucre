"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaTrophy,
  FaUserShield,
  FaFutbol,
  FaStar,
  FaHeart,
  FaHandsHelping,
  FaUsers,
  FaMedal,
  FaClock,
  FaShieldAlt,
  FaBalanceScale,
  FaAward,
  FaChild,
  FaRegFutbol,
  FaRunning,
  FaMoneyBillWave,
  FaCreditCard,
  FaTshirt,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
  FaSchool,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaChevronDown,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Home() {
  const [openCoach, setOpenCoach] = useState<number | null>(null);

  const coaches = [
    {
      name: "Juliana Estefania Pastas",
      role: "Entrenadora",
      img: "/juliana_pastas.jpeg",
      imgPos: "center 20%",
      content: (
        <ul className="text-left space-y-2 text-gray-300 text-xs">
          <li className="border-b border-white/10 pb-2">
            🎓 <span className="text-white font-semibold">Título:</span> Tecnóloga en Entrenamiento Deportivo
          </li>
          <li className="border-b border-white/10 pb-2">
            📚 <span className="text-white font-semibold">Estudios realizados:</span>
            <ul className="mt-1 space-y-1 pl-2">
              <li>• Bases del Entrenamiento Deportivo</li>
              <li>• Cualidades Físicas en el Entrenamiento Deportivo</li>
              <li>• Estructuración de Planes de Entrenamiento Deportivo</li>
              <li>• Licencia C — Federación Colombiana de Fútbol</li>
            </ul>
          </li>
          <li>
            🪪 Tarjeta de Entrenador Deportivo — <span className="text-white font-semibold">COCED</span>
            <p className="text-gray-400 text-xs mt-0.5">Colegio Colombiano de Entrenamiento Deportivo</p>
          </li>
        </ul>
      ),
    },
    {
      name: "Luis Carlos Benavides",
      role: "Entrenador",
      img: "/luis_benavides.jpeg",
      imgPos: "top",
      content: (
        <ul className="text-left space-y-2 text-gray-300 text-xs">
          <li className="border-b border-white/10 pb-2">🎓 Tecnólogo en Entrenamiento Deportivo — SENA (2014)</li>
          <li className="border-b border-white/10 pb-2">🪪 Tarjeta de Entrenador Deportivo COCED 2026</li>
          <li>📚 Historiador — Universidad de Caldas (2024)</li>
        </ul>
      ),
    },
    {
      name: "Estefania",
      role: "Entrenadora",
      img: "/profe estefania.jpeg",
      imgPos: "top",
      content: (
        <ul className="text-left space-y-2 text-gray-300 text-xs">
          <li className="border-b border-white/10 pb-2">
            🎓 <span className="text-white font-semibold">Título:</span> Tecnóloga en Entrenamiento Deportivo — SENA
          </li>
          <li className="border-b border-white/10 pb-2">
            📚 <span className="text-white font-semibold">Estudios destacados:</span>
            <ul className="mt-1 space-y-1 pl-2">
              <li>• Informática y desarrollo empresarial</li>
              <li>• Formación en atención de eventos deportivos</li>
              <li>• Liderazgo en la actividad deportiva</li>
              <li>• Bases del entrenamiento deportivo</li>
              <li>• Legislación deportiva</li>
              <li>• Preparación física y entrenamiento deportivo</li>
              <li>• Seminario fútbol de salón y arbitraje</li>
              <li>• Fundamentos en administración deportiva</li>
              <li>• Emprendimiento deportivo</li>
              <li>• Cualidades físicas en el entrenamiento</li>
              <li>• Psicología Deportiva</li>
            </ul>
          </li>
          <li>
            🪪 Tarjeta de Entrenador Deportivo — <span className="text-white font-semibold">COCED</span>
            <p className="text-gray-400 text-xs mt-0.5">Colegio Colombiano de Entrenamiento Deportivo</p>
          </li>
        </ul>
      ),
    },
    {
      name: "Juan Pablo Jiménez",
      role: "Preparador de Porteros",
      img: "/juan_pablo_jimenez.jpeg",
      imgPos: "center",
      content: (
        <ul className="text-left space-y-2 text-gray-300 text-xs">
          <li className="border-b border-white/10 pb-2">🏫 Estudiante — Dirección Técnica, Instituto Superior de Fútbol de Quito</li>
          <li className="border-b border-white/10 pb-2">🧤 Amplia experiencia en preparación de porteros</li>
          <li className="border-b border-white/10 pb-2">🏆 Diplomado en Seminario de Alto Liderazgo</li>
          <li>⚽ Diplomado en Preparación Técnica, Táctica y Física</li>
        </ul>
      ),
    },
    {
      name: "Cristhian David Villarreal Payán",
      role: "Entrenador",
      img: "/cristian.jpeg",
      imgPos: "top",
      content: (
        <ul className="text-left space-y-2 text-gray-300 text-xs">
          <li className="border-b border-white/10 pb-2">
            🎓 <span className="text-white font-semibold">Título:</span> Licenciado en Educación Física y Deportes
          </li>
          <li className="border-b border-white/10 pb-2">
            📚 <span className="text-white font-semibold">Estudios realizados:</span>
            <ul className="mt-1 space-y-1 pl-2">
              <li>• Tecnólogo en Entrenamiento Deportivo</li>
              <li>• Diplomado en Preparación Física</li>
              <li>• Seminario en Periodización Táctica</li>
              <li>• Seminario en Revolución Táctica</li>
              <li>• Seminario taller en Espacios Reducidos</li>
              <li>• Seminario en Psicología Deportiva</li>
              <li>• Seminario para Entrenadores Fútbol Base</li>
              <li>• Manejo de Lesiones y Recuperación Física</li>
              <li>• Licencia C — Federación Colombiana de Fútbol</li>
            </ul>
          </li>
          <li>
            🪪 Tarjeta de Entrenador Deportivo — <span className="text-white font-semibold">COCED</span>
            <p className="text-gray-400 text-xs mt-0.5">Colegio Colombiano de Entrenamiento Deportivo</p>
          </li>
        </ul>
      ),
    },
    {
      name: "Jerson Javier Díaz Castro",
      role: "Entrenador",
      img: "/profe-jerson.jpeg",
      imgPos: "top",
      content: (
        <ul className="text-left space-y-2 text-gray-300 text-xs">
          <li className="border-b border-white/10 pb-2">
            🎓 <span className="text-white font-semibold">Título:</span> Tecnólogo en Entrenamiento Deportivo
          </li>
          <li className="border-b border-white/10 pb-2">
            📚 <span className="text-white font-semibold">Estudios realizados:</span>
            <ul className="mt-1 space-y-1 pl-2">
              <li>• Estructuración de Planes de Entrenamiento Deportivo</li>
              <li>• Diplomado de Juego de Posición, Organización y Entrenamiento</li>
              <li>• Diplomado en Espacios Reducidos aplicados al Fútbol Base</li>
              <li>• Seminario en Psicología Deportiva</li>
              <li>• Diplomado del Método Táctico Cognitivo en el Fútbol</li>
              <li>• Diplomado en la Táctica y Técnica del Fútbol Formativo</li>
              <li>• Seminario en Prevención de Lesiones y Recuperación Física</li>
              <li>• Seminario en Nutrición Deportiva</li>
              <li>• Seminario en Periodización Táctica</li>
              <li>• Curso Internacional de Fútbol Estratégico</li>
              <li>• Licencia C — Federación Colombiana de Fútbol</li>
            </ul>
          </li>
          <li>
            🪪 Tarjeta de Entrenador Deportivo — <span className="text-white font-semibold">COCED 2025</span>
            <p className="text-gray-400 text-xs mt-0.5">Colegio Colombiano de Entrenamiento Deportivo</p>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen overflow-x-hidden text-gray-800">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-red-600/20 via-transparent to-black/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -z-10"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-xl text-white z-50 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full blur-md opacity-50"></div>
              <Image src="/escudo1.jpeg" alt="Escudo Atletico Sucre" width={38} height={38} className="rounded-full shadow-lg relative z-10 object-contain bg-transparent" />
            </div>
            <span className="font-black tracking-wider text-sm bg-clip-text text-transparent bg-gradient-to-r from-white to-red-200">ATLETICO SUCRE</span>
          </motion.div>
          {/* Links desktop */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden md:flex gap-6 text-sm font-medium">
            {[
              { href: "#filosofia", label: "Filosofía", icon: FaBalanceScale },
              { href: "#costos", label: "Costos", icon: FaMoneyBillWave },
              { href: "#uniformes", label: "Uniformes", icon: FaTshirt },
              { href: "#horarios", label: "Horarios", icon: FaClock },
              { href: "#lugares", label: "Lugares", icon: FaMapMarkerAlt },
              { href: "#coach", label: "Coach", icon: FaUserShield },
              { href: "#familias", label: "Familias", icon: FaUsers },
              { href: "https://wa.me/573218543957", label: "Contacto", icon: FaWhatsapp, isWhatsApp: true },
            ].map((item, index) => (
              <a key={index} href={item.href} target={item.isWhatsApp ? "_blank" : undefined} rel={item.isWhatsApp ? "noopener noreferrer" : undefined} className="group flex items-center gap-1.5 hover:text-red-400 transition-all duration-300">
                <item.icon className={`text-xs ${item.isWhatsApp ? 'text-green-400' : ''}`} />
                <span className="relative">{item.label}<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span></span>
              </a>
            ))}
          </motion.div>
          {/* Links mobile — solo iconos de acceso rápido */}
          <div className="flex md:hidden items-center gap-3">
            <a href="https://wa.me/573218543957" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500/20 rounded-xl">
              <FaWhatsapp className="text-green-400 text-lg" />
            </a>
            <a href="#coach" className="p-2 bg-white/10 rounded-xl">
              <FaUserShield className="text-white text-lg" />
            </a>
            <a href="#horarios" className="p-2 bg-white/10 rounded-xl">
              <FaClock className="text-white text-lg" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mt-20 bg-gradient-to-br from-red-700 via-red-800 to-black text-white px-6 md:px-10 py-16 md:py-24 rounded-b-[80px] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,215,0,0.15),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(255,255,255,0.1),_transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute opacity-5 inset-0" style={{ backgroundImage: "radial-gradient(circle at 10px 10px, white 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6">
            <div className="inline-block">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-7xl font-black tracking-[-0.02em] bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white drop-shadow-2xl">ATLETICO</motion.h1>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-4xl md:text-7xl font-black tracking-[-0.02em] text-white drop-shadow-2xl">SUCRE</motion.h1>
            </div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="flex items-center gap-3">
              <FaFutbol className="text-yellow-400 text-2xl animate-pulse" />
              <p className="text-xl md:text-2xl font-light tracking-wide text-white/90">Embajadores del Sur</p>
              <FaStar className="text-yellow-400 text-2xl animate-spin-slow" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-8 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center gap-6">
                <div className="text-5xl font-black text-yellow-400 group-hover:scale-110 transition-transform">15+</div>
                <div className="h-12 w-px bg-white/30"></div>
                <div><span className="text-lg font-semibold block">Más de 15 años</span><span className="text-sm opacity-80">formando campeones</span></div>
              </div>
              <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 1 }} className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></motion.div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex gap-4 pt-4">
              <a href="https://wa.me/573218543957" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                <FaWhatsapp className="text-green-700 text-lg" />Contáctanos
              </a>
              <a href="#filosofia" className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/50 transform hover:-translate-y-1">Conoce más</a>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.3, type: "spring" }} className="flex justify-center md:justify-end relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/10 rounded-full blur-2xl"></div>
            <div className="relative w-[300px] h-[380px] overflow-hidden rounded-2xl shadow-2xl border-4 border-white/30 bg-black">
              <video src="/video_presentacion.mp4" className="w-full h-full object-cover" controls autoPlay loop playsInline />
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>

      {/* Formación Integral */}
      <section className="px-4 md:px-8 mt-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200 hover:shadow-red-200 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-red-600/5 to-black/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-lg"><FaRegFutbol className="text-white text-2xl" /></div>
                <h2 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Formación Integral</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">Procesos de entrenamiento para niñas y niños desde los 4 hasta los 16 años. Disciplina, valores y desarrollo deportivo con metodología profesional. Formamos técnica, táctica, mentalidad y carácter.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[{ icon: FaChild, label: "Desde 4 años" }, { icon: FaFutbol, label: "Técnica" }, { icon: FaRunning, label: "Táctica" }, { icon: FaMedal, label: "Mentalidad" }].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl text-center group/item hover:bg-red-50 transition-colors duration-300">
                    <item.icon className="mx-auto text-2xl text-red-600 mb-2 group-hover/item:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filosofía */}
      <section id="filosofia" className="px-4 md:px-8 mt-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-lg"><FaBalanceScale className="text-white text-2xl" /></div>
                <h2 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Filosofía Atletico Sucre</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">No solo formamos futbolistas, formamos personas íntegras. Nuestra identidad se basa en la unión, el respeto, la disciplina y la excelencia.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: FaHeart, title: "Juego limpio", desc: "Respeto total", bg: "bg-red-100", color: "text-red-600" },
                  { icon: FaUsers, title: "Somos un equipo", desc: "Unidos siempre", bg: "bg-blue-100", color: "text-blue-600" },
                  { icon: FaAward, title: "Entrega total", desc: "Dar el máximo", bg: "bg-yellow-100", color: "text-yellow-600" },
                  { icon: FaClock, title: "Proceso", desc: "Sobre resultado", bg: "bg-green-100", color: "text-green-600" },
                  { icon: FaStar, title: "Mérito", desc: "Con disciplina", bg: "bg-purple-100", color: "text-purple-600" },
                  { icon: FaShieldAlt, title: "Respeto", desc: "Base fundamental", bg: "bg-indigo-100", color: "text-indigo-600" },
                ].map((item, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                    <div className={`p-3 ${item.bg} rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}><item.icon className={`${item.color} text-2xl`} /></div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Costos */}
      <section id="costos" className="px-4 md:px-8 mt-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg"><FaMoneyBillWave className="text-white text-2xl" /></div>
                <h2 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">Costos y Pagos</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div whileHover={{ scale: 1.03, y: -5 }} className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6"><FaCreditCard className="text-green-600 text-3xl" /><span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Pago único</span></div>
                    <h3 className="text-2xl font-bold mb-2">Inscripción</h3>
                    <div className="flex items-end gap-2 mb-4"><span className="text-5xl font-black text-green-600">$20.000</span><span className="text-gray-500 mb-1">COP</span></div>
                    <p className="text-gray-600">Pago único al momento de matricularse</p>
                    <div className="mt-6 h-1 w-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03, y: -5 }} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6"><FaClock className="text-blue-600 text-3xl" /><span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Mensual</span></div>
                    <h3 className="text-2xl font-bold mb-2">Mensualidad</h3>
                    <div className="flex items-end gap-2 mb-4"><span className="text-5xl font-black text-blue-600">$65.000</span><span className="text-gray-500 mb-1">COP</span></div>
                    <p className="text-gray-600 font-medium">Se cancela los primeros días del mes</p>
                    <div className="mt-4 bg-blue-50 p-3 rounded-lg"><p className="text-sm text-blue-700">⚠️ Importante: Mantener al día para continuar entrenando</p></div>
                    <div className="mt-6 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                  </div>
                </motion.div>
              </div>
              <div className="mt-8 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                <p className="text-gray-600 text-center">💳 <span className="font-semibold">Formas de pago:</span> Efectivo o Nequi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Uniformes */}
      <section id="uniformes" className="px-4 md:px-8 mt-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-lg"><FaTshirt className="text-white text-2xl" /></div>
                <h2 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Uniformes</h2>
              </div>
              <p className="text-gray-700 text-lg mb-10 text-center max-w-2xl mx-auto">Uniformes oficiales del Club Atlético Sucre. Calidad profesional para nuestros deportistas.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { src: "/uniforme_principal.jpeg", alt: "Uniforme Principal", title: "Uniforme Principal", desc: "Camiseta blanca - Pantaloneta blanca", price: "$50.000", badge: "Completo", bg: "from-red-600 to-red-800" },
                  { src: "/uniforme_alternativo.jpeg", alt: "Uniforme Alternativo", title: "Uniforme Alternativo", desc: "Camiseta roja - Pantaloneta roja", price: "$50.000", badge: "Completo", bg: "from-gray-700 to-black" },
                  { src: "/uniforme_3.jpeg", alt: "Uniforme Entrenamiento", title: "Entrenamiento", desc: "Camiseta Azul-Pantaloneta Azul", price: "$50.000", badge: "Completo", bg: "from-yellow-500 to-yellow-700" },
                  { src: "/arqueros.jpeg", alt: "Uniforme Arquero", title: "Uniforme De Portero", desc: "Uniforme destinado para Porteros", price: "$50.000", badge: "Completo", bg: "from-green-600 to-green-800" },
                  { src: "/mochila.jpeg", alt: "Mochila", title: "Mochila", desc: "Rojo y negro", price: "$40.000", badge: null, bg: "from-gray-600 to-gray-800" },
                  { src: "/uniforme4.jpeg", alt: "Uniforme Alternativo 2", title: "Uniforme Alternativo 2", desc: "Uniforme completo", price: "$50.000", badge: null, bg: "from-red-700 to-red-900" },
                ].map((item, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                      <div className={`relative h-64 bg-gradient-to-br ${item.bg} rounded-xl mb-4 overflow-hidden`}>
                        <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-red-600 font-bold">{item.price}</span>
                        {item.badge && <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">{item.badge}</span>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-xl border border-red-200">
                <p className="text-gray-700 text-center">⚽ <span className="font-semibold">Nota:</span> Los uniformes se adquieren en Liga Mundial, Direccion: Calle 24 # 6-91, Ipiales; Nariño</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Horarios */}
      <section id="horarios" className="px-4 md:px-8 mt-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-yellow-500/5 to-red-500/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg"><FaClock className="text-white text-2xl" /></div>
                <h2 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Horarios de Entrenamiento</h2>
              </div>
              <p className="text-gray-700 text-lg mb-10 text-center max-w-3xl mx-auto">Entrenamos toda la semana con horarios flexibles para que puedas compaginar el fútbol con tus estudios.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-xl border-l-4 border-amber-500">
                  <div className="flex items-center gap-3 mb-6"><div className="p-2 bg-amber-500 rounded-lg"><FaSun className="text-white text-xl" /></div><h3 className="text-2xl font-bold text-amber-700">Horario Mañana</h3></div>
                  <div className="space-y-4">
                    {[{ day: "Martes", time: "8:00 AM - 10:00 AM" }, { day: "Jueves", time: "8:00 AM - 10:00 AM" }, { day: "Sábado", time: "8:30 AM - 12:30 PM" }].map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/80 p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3"><div className="w-2 h-2 bg-amber-500 rounded-full"></div><span className="font-semibold text-gray-800">{item.day}</span></div>
                        <span className="text-amber-600 font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-500 italic">Ideal para quienes estudian en la tarde</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-xl border-l-4 border-indigo-500">
                  <div className="flex items-center gap-3 mb-6"><div className="p-2 bg-indigo-500 rounded-lg"><FaMoon className="text-white text-xl" /></div><h3 className="text-2xl font-bold text-indigo-700">Horario Tarde</h3></div>
                  <div className="space-y-4">
                    {[{ day: "Martes", time: "2:30 PM - 5:30 PM" }, { day: "Jueves", time: "2:30 PM - 5:30 PM" }, { day: "Sábado", time: "8:30 AM - 12:30 PM" }].map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/80 p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div><span className="font-semibold text-gray-800">{item.day}</span></div>
                        <span className="text-indigo-600 font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-500 italic">Perfecto para quienes estudian en la mañana</p>
                </motion.div>
              </div>
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                <p className="text-gray-700 text-center flex items-center justify-center gap-2"><FaClock className="text-blue-500" /><span className="font-semibold">¡Elige el horario que mejor se adapte a ti!</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Lugares */}
      <section id="lugares" className="px-4 md:px-8 mt-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-red-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-lg"><FaMapMarkerAlt className="text-white text-2xl" /></div>
                <h2 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Lugares de Entrenamiento</h2>
              </div>
              <p className="text-gray-700 text-lg mb-10 text-center max-w-3xl mx-auto">Contamos con dos sedes perfectamente equipadas para que nuestros deportistas entrenen en las mejores condiciones.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div whileHover={{ scale: 1.03, y: -5 }} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full">
                    <div className="relative h-48 rounded-xl mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-600">
                        <div className="text-center text-white"><FaFutbol className="text-6xl mx-auto mb-2 opacity-50" /><p className="text-white/70 text-sm">Cancha Grupo Cabal</p></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2"><FaMapMarkerAlt className="text-blue-600" />Grupo Cabal</h3>
                    <p className="text-gray-600 mb-3">Cancha en Gramado Natural</p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2"><FaClock className="text-blue-500 text-sm" /><span className="text-sm">Disponible en todos los horarios</span></div>
                      <div className="flex items-center gap-2"><FaStar className="text-yellow-500 text-sm" /><span className="text-sm">Excelente para entrenamientos</span></div>
                    </div>
                    <div className="mt-4"><span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Sede Principal</span></div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03, y: -5 }} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full">
                    <div className="relative h-48 rounded-xl mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-purple-600">
                        <div className="text-center text-white"><FaSchool className="text-6xl mx-auto mb-2 opacity-50" /><p className="text-white/70 text-sm">Colegio Champagnat</p></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2"><FaSchool className="text-purple-600" />Colegio Champagnat</h3>
                    <p className="text-gray-600 mb-3">Cancha en gramado natural</p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2"><FaClock className="text-purple-500 text-sm" /><span className="text-sm">Disponible en todos los horarios</span></div>
                      <div className="flex items-center gap-2"><FaStar className="text-yellow-500 text-sm" /><span className="text-sm">Espacio amplio y zonas verdes</span></div>
                    </div>
                    <div className="mt-4"><span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Sede Alterna</span></div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03, y: -5 }} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full">
                    <div className="relative h-48 rounded-xl mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-green-700">
                        <div className="text-center text-white"><FaSchool className="text-6xl mx-auto mb-2 opacity-50" /><p className="text-white/70 text-sm">Colegio Seminario</p></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2"><FaSchool className="text-green-700" />Colegio Seminario</h3>
                    <p className="text-gray-600 mb-3">Cancha para entrenamiento</p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2"><FaClock className="text-green-600 text-sm" /><span className="text-sm">Disponible en todos los horarios</span></div>
                      <div className="flex items-center gap-2"><FaStar className="text-yellow-500 text-sm" /><span className="text-sm">Excelente infraestructura deportiva</span></div>
                    </div>
                    <div className="mt-4"><span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">Sede Alterna</span></div>
                  </div>
                </motion.div>
              </div>
              <div className="mt-10 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                <p className="text-gray-700 text-center flex items-center justify-center gap-2 text-sm"><FaMapMarkerAlt className="text-green-500" /><span className="font-semibold">Ubicaciones:</span> Grupo Cabal · Colegio Champagnat · Colegio Seminario</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Coach de Rendimiento */}
      <section id="coach" className="px-4 md:px-8 mt-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">

          {/* Encabezado */}
          <div className="bg-gradient-to-br from-black via-gray-900 to-red-800 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(59,130,246,0.1),_transparent_70%)]"></div>
            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 bg-blue-400/20 rounded-2xl backdrop-blur-sm"><FaUserShield className="text-5xl text-blue-400" /></div>
              <div>
                <h2 className="font-black text-3xl mb-4">Coach de Rendimiento</h2>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  Además de ser formadores en Nuestro Club Atletico Sucre, los profesores se convierten en verdaderos coach de entrenamiento. El Coach de Rendimiento debe ser ejemplo de liderazgo, disciplina y ética. Diseña entrenamientos estructurados, prioriza la salud física y emocional del deportista y fortalece el sentido de pertenencia.
                </p>
                <div className="bg-gradient-to-r from-yellow-400/20 to-transparent p-4 rounded-xl border-l-4 border-yellow-400">
                  <p className="font-bold text-yellow-400 text-xl">IMPORTA MÁS EL CÓMO SE GANA QUE EL RESULTADO.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Acordeón de entrenadores — grilla compacta, toca para expandir */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
            {coaches.map((coach, index) => (
              <button
                key={index}
                onClick={() => setOpenCoach(openCoach === index ? null : index)}
                className={`flex flex-col items-center p-3 rounded-2xl border transition-all duration-300 ${
                  openCoach === index
                    ? "bg-gradient-to-br from-red-700 to-red-900 border-yellow-400/60 shadow-lg scale-105"
                    : "bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-white/30"
                }`}
              >
                <div className={`w-16 h-16 rounded-full overflow-hidden border-2 shadow-md ${openCoach === index ? "border-yellow-400" : "border-red-500"}`}>
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    style={coach.imgPos !== "top" && coach.imgPos !== "center" ? { objectPosition: coach.imgPos } : undefined}
                  />
                </div>
                <span className="text-white text-xs font-bold mt-2 text-center leading-tight">{coach.name.split(" ").slice(0, 2).join(" ")}</span>
                <span className="text-red-400 text-[10px] font-medium">{coach.role}</span>
                <FaChevronDown className={`text-white/40 text-xs mt-1.5 transition-transform duration-300 ${openCoach === index ? "rotate-180 text-yellow-400" : ""}`} />
              </button>
            ))}
          </div>

          {/* Panel expandido con la info completa del profesor seleccionado */}
          <AnimatePresence>
            {openCoach !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-yellow-400/30 shadow-xl">
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md flex-shrink-0">
                      <Image
                        src={coaches[openCoach].img}
                        alt={coaches[openCoach].name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                        style={coaches[openCoach].imgPos !== "top" && coaches[openCoach].imgPos !== "center" ? { objectPosition: coaches[openCoach].imgPos } : undefined}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">{coaches[openCoach].name}</h3>
                      <span className="text-red-400 text-sm font-semibold">{coaches[openCoach].role}</span>
                    </div>
                  </div>
                  {coaches[openCoach].content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-center text-gray-400 text-xs mt-4 flex items-center justify-center gap-1.5">
            <FaChevronDown className="text-xs" /> Toca a un entrenador para ver su perfil completo
          </p>

          {/* Presidente del Club — Norvey Alvarado */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 bg-gradient-to-br from-yellow-900/60 via-gray-900 to-black text-white rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl relative"
          >
            {/* Franja superior con badge */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-transparent px-6 py-4 border-b border-yellow-500/20 flex items-center justify-center gap-2">
              <FaTrophy className="text-yellow-400 text-base" />
              <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">Presidente del Club Atlético Sucre</span>
              <FaTrophy className="text-yellow-400 text-base" />
            </div>

            {/* Foto centrada + nombre */}
            <div className="flex flex-col items-center pt-8 pb-4 px-6">
              <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-md opacity-70"></div>
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                  <Image
                    src="/norvey_alvarado.jpeg"
                    alt="Norvey Alvarado Morales"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    style={{ objectPosition: "center 10%" }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-black text-white text-center">Norvey Alvarado Morales</h3>
              <p className="text-yellow-300 font-semibold text-xs text-center mt-1 max-w-xs">
                Lic. en Educación Física · Especialista en Pedagogía y Docencia Universitaria
              </p>
            </div>

            {/* Bloques de info apilados — perfectos en mobile */}
            <div className="px-4 pb-6 space-y-3">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <FaGraduationCap className="text-yellow-400 text-base" />
                  <span className="text-yellow-400 font-bold text-sm">Perfil Académico</span>
                </div>
                <ul className="text-gray-300 text-xs space-y-2">
                  <li className="border-b border-white/10 pb-2">🏅 <span className="text-white font-semibold">Licencias A y C</span> — Federación Colombiana de Fútbol</li>
                  <li className="border-b border-white/10 pb-2">🏅 <span className="text-white font-semibold">Licencia B</span> — Escuela Nacional del Deporte De Cali Valle</li>
                  <li>📋 Docente nombrado en propiedad por el <span className="text-white font-semibold">Magisterio de Nariño</span></li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <FaFutbol className="text-red-400 text-base" />
                  <span className="text-red-400 font-bold text-sm">Trayectoria Competitiva</span>
                </div>
                <ul className="text-gray-300 text-xs space-y-2">
                  <li className="border-b border-white/10 pb-2">🏟️ Dirección técnica en el <span className="text-white font-semibold">Torneo Nacional Interclubes de Difútbol</span> por más de 6 años</li>
                  <li className="border-b border-white/10 pb-2">⚽ Coordinador Deportivo — <span className="text-white font-semibold">Club Atlético Sucre Nariño</span></li>
                  <li>👦 Especialista en <span className="text-white font-semibold">categorías juveniles</span> y desarrollo integral del deportista</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <FaChalkboardTeacher className="text-blue-400 text-base" />
                  <span className="text-blue-400 font-bold text-sm">Visión Estratégica</span>
                </div>
                <ul className="text-gray-300 text-xs space-y-2">
                  <li className="border-b border-white/10 pb-2">🎯 Capacidad probada para organizar clubes <span className="text-white font-semibold">desde sus bases</span> hasta el nivel de competencia nacional</li>
                  <li>🔥 Pasión por la <span className="text-white font-semibold">formación integral</span> del futbolista, fusionando pedagogía y deporte</li>
                </ul>
                <div className="mt-3 bg-gradient-to-r from-yellow-400/20 to-transparent p-3 rounded-xl border-l-2 border-yellow-400">
                  <p className="text-yellow-300 font-bold text-xs">PASIÓN POR LA FORMACIÓN INTEGRAL</p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Entrenadora del Mes — Profe Estefania */}
      <section className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-red-900 via-gray-900 to-black text-white rounded-3xl overflow-hidden shadow-2xl border border-red-500/30">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(239,68,68,0.15),_transparent_60%)]"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>

            {/* Encabezado */}
            <div className="relative z-10 text-center pt-10 pb-6 px-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <FaTrophy className="text-yellow-400 text-3xl animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                  ¡DT DEL MES!
                </h2>
                <FaTrophy className="text-yellow-400 text-3xl animate-pulse" />
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mx-auto mt-2"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 px-8 pb-10">

              {/* Foto Estefania grande */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative w-44 h-44">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full blur-lg opacity-70"></div>
                  <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                    <Image
                      src="/profe-estefania-entrenadora.jpeg"
                      alt="Profe Estefania"
                      width={176}
                      height={176}
                      className="object-cover w-full h-full"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                  {/* Badge estrella */}
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <FaStar className="text-xs" /> DESTACADA
                  </div>
                </div>
                <p className="mt-5 text-center font-black text-lg text-white">Profe Estefania</p>
                <p className="text-red-400 text-sm font-semibold">Entrenadora</p>
              </div>

              {/* Texto del reconocimiento */}
              <div className="flex-1 space-y-5">
                <p className="text-gray-200 leading-relaxed text-base">
                  ¡Muchas felicidades, Profe! Es un verdadero honor para toda la familia del{" "}
                  <span className="text-white font-bold">Club Atlético Sucre</span> celebrar este reconocimiento como el{" "}
                  <span className="text-yellow-400 font-bold">DT del mes</span>. 👏🌟
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xl mt-0.5">❤️</span>
                    <div>
                      <p className="text-gray-300 text-xs">Queremos agradecerte profundamente por ponerle el corazón a cada entrenamiento, por tu guía constante y por la pasión inagotable que transmites en cada una de tus funciones.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xl mt-0.5">🌟</span>
                    <div>
                      <p className="text-gray-300 text-xs">Eres una pieza fundamental en nuestro crecimiento y un ejemplo de entrega para todos.</p>
                    </div>
                  </div>
                </div>

                {/* Mensaje final */}
                <div className="bg-gradient-to-r from-yellow-400/20 to-transparent p-4 rounded-2xl border-l-4 border-yellow-400 mt-4">
                  <p className="text-yellow-200 font-semibold text-sm leading-relaxed">
                    Gracias por elevar nuestro nivel y acompañarnos en este camino con tanta dedicación. 🧭📈⚽
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Deberes de las Familias */}
      <section id="familias" className="px-4 md:px-8 mt-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-lg"><FaUsers className="text-white text-2xl" /></div>
                <h2 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Deberes de las Familias</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { icon: FaClock, text: "Cumplir horarios", bg: "bg-blue-100", color: "text-blue-600" },
                  { icon: FaUserShield, text: "No intervenir tácticamente", bg: "bg-purple-100", color: "text-purple-600" },
                  { icon: FaHeart, text: "Conducta ejemplar", bg: "bg-red-100", color: "text-red-600" },
                  { icon: FaHandsHelping, text: "Compromisos administrativos", bg: "bg-green-100", color: "text-green-600" },
                  { icon: FaStar, text: "Fomentar valores", bg: "bg-yellow-100", color: "text-yellow-600" },
                  { icon: FaShieldAlt, text: "Informar condiciones médicas", bg: "bg-indigo-100", color: "text-indigo-600" },
                ].map((item, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05, x: 5 }} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-red-500 group">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 ${item.bg} rounded-lg group-hover:scale-110 transition-transform`}><item.icon className={`${item.color} text-xl`} /></div>
                      <span className="font-medium text-gray-700">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Nuestro Club */}
      <section className="px-4 md:px-8 mt-16 mb-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Nuestro Club</h2>
          <Swiper spaceBetween={16} slidesPerView={1.15} loop={true} className="px-2">
            <SwiperSlide>
              <div className="h-72 bg-gradient-to-br from-black to-gray-800 rounded-2xl shadow-2xl overflow-hidden relative">
                <Image src="/familia_sucre1.jpeg" alt="Familia Atletico Sucre" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-white text-lg font-bold block">Familia Atlético Sucre</span>
                  <p className="text-white/70 text-xs mt-1">Más que jugadores somos una familia</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-72 rounded-2xl shadow-2xl overflow-hidden relative">
                <Image src="/equipo.jpeg" alt="Equipo" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-white text-lg font-bold block">Equipo Sub 7</span>
                  <p className="text-white/70 text-xs mt-1">Categoría 2018</p>
                </div>
                <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-0.5 rounded-full text-xs font-bold">2018</div>
              </div>
            </SwiperSlide>
            {[
              { src: "/categoria2009-10.jpeg", label: "Categoría 2009-10", badge: "2009-10" },
              { src: "/categoria2011.jpeg", label: "Categoría 2011", badge: "2011" },
              { src: "/categoria2012-13jpeg.jpeg", label: "Categoría 2012-13", badge: "2012-13" },
              { src: "/categoria2014.jpeg", label: "Categoría 2014", badge: "2014" },
              { src: "/categoria2014-15.jpeg", label: "Categoría 2014-15", badge: "2014-15" },
              { src: "/categoria2015-16.jpeg", label: "Categoría 2015-16", badge: "2015-16" },
              { src: "/categoria2017.jpeg", label: "Categoría 2017", badge: "2017" },
              { src: "/categoria2018.jpeg", label: "Categoría 2018", badge: "2018" },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-72 rounded-2xl shadow-2xl overflow-hidden relative">
                  <Image src={item.src} alt={item.label} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-bold block">{item.label}</span>
                    <p className="text-white/70 text-xs mt-1">Club Atlético Sucre</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">{item.badge}</div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div className="h-72 rounded-2xl shadow-2xl overflow-hidden relative">
                <Image src="/equipo-niñas.jpeg" alt="Equipo Femenino Atlético Sucre" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-white text-lg font-bold block">Equipo Femenino</span>
                  <p className="text-white/70 text-xs mt-1">Talento y pasión sin límites</p>
                </div>
                <div className="absolute top-3 right-3 bg-pink-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">Femenino</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-72 rounded-2xl shadow-2xl overflow-hidden relative">
                <video src="/entrenamiento.mp4" className="w-full h-full object-cover" autoPlay muted loop playsInline />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-white text-lg font-bold block">Entrenamiento</span>
                  <p className="text-white/70 text-xs mt-1">Metodología profesional</p>
                </div>
                <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1"><span>▶</span> LIVE</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gradient-to-br from-black via-gray-900 to-red-900 text-white text-center py-16 mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05),_transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, type: "spring" }} className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-xl opacity-50"></div>
            <Image src="/escudo1.jpeg" alt="Escudo" width={120} height={120} className="relative z-10 drop-shadow-2xl object-contain bg-transparent" style={{ animation: "float 6s ease-in-out infinite" }} />
          </motion.div>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-200">Club Atlético Sucre</motion.h3>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xl mb-6 text-white/80">"Formando campeones dentro y fuera de la cancha"</motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex justify-center gap-6 mb-8">
            {[
              { icon: FaWhatsapp, href: "https://wa.me/573218543957", bg: "bg-green-500/20 hover:bg-green-500/30", color: "text-green-400" },
              { icon: FaTrophy, href: "#", bg: "bg-yellow-500/20 hover:bg-yellow-500/30", color: "text-yellow-400" },
              { icon: FaUsers, href: "#familias", bg: "bg-blue-500/20 hover:bg-blue-500/30", color: "text-blue-400" },
            ].map((item, index) => (
              <a key={index} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className={`p-3 ${item.bg} rounded-xl transition-all duration-300 hover:scale-110`}>
                <item.icon className={`${item.color} text-2xl`} />
              </a>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/60 border-t border-white/10 pt-8">
            <div>© 2026 Club Atlético Sucre</div>
            <div>Ipiales - Nariño</div>
            <div>Todos los derechos reservados</div>
          </motion.div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <motion.a href="https://wa.me/573218543957" className="fixed bottom-6 right-6 bg-gradient-to-br from-green-400 to-green-600 p-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white text-2xl hover:scale-110 transition-all duration-300 z-50" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <FaWhatsapp />
      </motion.a>
    </main>
  );
}