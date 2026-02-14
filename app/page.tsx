"use client";

import { motion } from "framer-motion";
import { 
  FaWhatsapp, FaTrophy, FaUserShield, FaFutbol, FaStar, 
  FaHeart, FaHandsHelping, FaUsers, FaMedal, FaClock,
  FaShieldAlt, FaBalanceScale, FaAward, FaChild,
  FaRegFutbol, FaRunning 
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen overflow-x-hidden text-gray-800">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-red-600/20 via-transparent to-black/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -z-10"></div>

      {/* Navbar Mejorada */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-xl text-white z-50 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full blur-md opacity-50"></div>
              <Image 
                src="/escudo.png"
                alt="Escudo Atletico Sucre"
                width={45}
                height={45}
                className="rounded-full shadow-lg relative z-10"
              />
            </div>
            <span className="font-black tracking-widest text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-white to-red-200">
              ATLETICO SUCRE
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-sm font-medium"
          >
            {[
              { href: "#filosofia", label: "Filosofia", icon: FaBalanceScale },
              { href: "#coach", label: "Coach", icon: FaUserShield },
              { href: "#familias", label: "Familias", icon: FaUsers },
              { href: "#contacto", label: "Contacto", icon: FaWhatsapp, isWhatsApp: true },
            ].map((item, index) => (
              <a
                key={index}
                href={item.isWhatsApp ? "https://wa.me/573218543957" : item.href}
                target={item.isWhatsApp ? "_blank" : undefined}
                rel={item.isWhatsApp ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 hover:text-red-400 transition-all duration-300"
              >
                <item.icon className={`text-sm ${item.isWhatsApp ? 'text-green-400 group-hover:text-green-300' : ''}`} />
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Sección Hero - ATLETICO SUCRE (ya mejorada) */}
      <section className="relative mt-20 bg-gradient-to-br from-red-700 via-red-800 to-black text-white px-6 md:px-10 py-16 md:py-24 rounded-b-[80px] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,215,0,0.15),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(255,255,255,0.1),_transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        
        {/* Patrón de fondo sutil */}
        <div className="absolute opacity-5 inset-0" style={{ 
          backgroundImage: "radial-gradient(circle at 10px 10px, white 2px, transparent 2px)", 
          backgroundSize: "30px 30px" 
        }}></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black tracking-[-0.02em] bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white drop-shadow-2xl"
              >
                ATLETICO
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-black tracking-[-0.02em] text-white drop-shadow-2xl"
              >
                SUCRE
              </motion.h1>
            </div>

            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <FaFutbol className="text-yellow-400 text-2xl animate-pulse" />
              <p className="text-xl md:text-2xl font-light tracking-wide text-white/90">
                Embajadores del Sur
              </p>
              <FaStar className="text-yellow-400 text-2xl animate-spin-slow" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 group"
            >
              <div className="flex items-center gap-6">
                <div className="text-5xl font-black text-yellow-400 group-hover:scale-110 transition-transform">15+</div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <span className="text-lg font-semibold block">Más de 15 años</span>
                  <span className="text-sm opacity-80">formando campeones</span>
                </div>
              </div>
              
              <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
                ></motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a 
                href="https://wa.me/573218543957" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                <FaWhatsapp className="text-green-700 text-lg" />
                Contáctanos
              </a>
              <a 
                href="#filosofia"
                className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/50 transform hover:-translate-y-1"
              >
                Conoce más
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/10 rounded-full blur-2xl"></div>
            
            <Image
              src="/escudo.png"
              alt="Escudo Atletico Sucre"
              width={380}
              height={380}
              className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:scale-110 transition duration-700 relative z-10 animate-float"
              style={{ animation: "float 6s ease-in-out infinite" }}
              priority
            />
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>

      {/* Formación Integral - Mejorada */}
      <section className="px-4 md:px-8 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200 hover:shadow-red-200 transition-all duration-500 relative overflow-hidden group">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-red-600/5 to-black/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-lg">
                  <FaRegFutbol className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Formación Integral
                </h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Procesos de entrenamiento para niñas y niños desde los 4 hasta los 16 años.
                Disciplina, valores y desarrollo deportivo con metodología profesional.
                Formamos técnica, táctica, mentalidad y carácter.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: FaChild, label: "Desde 4 años" },
                  { icon: FaFutbol, label: "Técnica" },
                  { icon: FaRunning, label: "Táctica" },
                  { icon: FaMedal, label: "Mentalidad" },
                ].map((item, index) => (
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

      {/* Filosofía - Mejorada */}
      <section id="filosofia" className="px-4 md:px-8 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-lg">
                  <FaBalanceScale className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Filosofía Atletico Sucre
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                No solo formamos futbolistas, formamos personas íntegras.
                Nuestra identidad se basa en la unión, el respeto, la disciplina y la excelencia.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: FaHeart, title: "Juego limpio", desc: "Respeto total", color: "red" },
                  { icon: FaUsers, title: "Somos un equipo", desc: "Unidos siempre", color: "blue" },
                  { icon: FaAward, title: "Entrega total", desc: "Dar el máximo", color: "yellow" },
                  { icon: FaClock, title: "Proceso", desc: "Sobre resultado", color: "green" },
                  { icon: FaStar, title: "Mérito", desc: "Con disciplina", color: "purple" },
                  { icon: FaShieldAlt, title: "Respeto", desc: "Base fundamental", color: "indigo" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className={`p-3 bg-${item.color}-100 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`text-${item.color}-600 text-2xl`} />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Nuestro Club - Mejorado */}
      <section className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Nuestro Club
          </h2>
          
          <Swiper spaceBetween={30} slidesPerView={1.2} loop={true} className="px-4">
            <SwiperSlide>
              <div className="h-80 bg-gradient-to-br from-black to-gray-800 rounded-3xl shadow-2xl overflow-hidden relative group cursor-pointer">
                <Image src="/familia_sucre1.jpeg" alt="Familia Atletico Sucre" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-white text-2xl font-bold">Familia Atletico</span>
                  <p className="text-white/70 text-sm mt-2">Unidos somos más fuertes</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-80 bg-gradient-to-br from-red-600 to-black rounded-3xl shadow-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  <FaTrophy className="text-yellow-400 text-5xl mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-2xl font-bold">Equipo Campeón</span>
                  <p className="text-white/70 mt-2">Múltiples títulos locales y regionales</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-80 bg-gradient-to-br from-gray-800 to-red-700 rounded-3xl shadow-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  <FaRunning className="text-yellow-400 text-5xl mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-2xl font-bold">Entrenamiento</span>
                  <p className="text-white/70 mt-2">Metodología profesional</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </section>

      {/* Somos Competitivos - Mejorado */}
      <section className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-red-700 via-red-800 to-black text-white rounded-3xl p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,215,0,0.1),_transparent_70%)]"></div>
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-yellow-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
            
            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 bg-yellow-400/20 rounded-2xl backdrop-blur-sm">
                <FaTrophy className="text-5xl text-yellow-400" />
              </div>
              <div>
                <h2 className="font-black text-3xl mb-4">Somos Competitivos</h2>
                <p className="text-xl opacity-90 mb-6">Participamos en torneos locales y regionales. La mayoría de veces campeones</p>
                <div className="flex gap-4">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Coach de Rendimiento - Mejorado */}
      <section id="coach" className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-black via-gray-900 to-red-800 text-white rounded-3xl p-10 shadow-2xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(59,130,246,0.1),_transparent_70%)]"></div>
            
            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 bg-blue-400/20 rounded-2xl backdrop-blur-sm">
                <FaUserShield className="text-5xl text-blue-400" />
              </div>
              <div>
                <h2 className="font-black text-3xl mb-4">Coach de Rendimiento</h2>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  El Coach de Rendimiento debe ser ejemplo de liderazgo, disciplina y ética. 
                  Diseña entrenamientos estructurados, prioriza la salud física y emocional del deportista 
                  y fortalece el sentido de pertenencia.
                </p>
                <div className="bg-gradient-to-r from-yellow-400/20 to-transparent p-4 rounded-xl border-l-4 border-yellow-400">
                  <p className="font-bold text-yellow-400 text-xl">
                    IMPORTA MÁS EL CÓMO SE GANA QUE EL RESULTADO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Deberes de las Familias - Mejorado */}
      <section id="familias" className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-lg">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Deberes de las Familias
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: FaClock, text: "Cumplir horarios", color: "blue" },
                  { icon: FaUserShield, text: "No intervenir tácticamente", color: "purple" },
                  { icon: FaHeart, text: "Conducta ejemplar", color: "red" },
                  { icon: FaHandsHelping, text: "Compromisos administrativos", color: "green" },
                  { icon: FaStar, text: "Fomentar valores", color: "yellow" },
                  { icon: FaShieldAlt, text: "Informar condiciones médicas", color: "indigo" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-red-500 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-${item.color}-100 rounded-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className={`text-${item.color}-600 text-xl`} />
                      </div>
                      <span className="font-medium text-gray-700">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer Mejorado */}
      <footer id="contacto" className="bg-gradient-to-br from-black via-gray-900 to-red-900 text-white text-center py-16 mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05),_transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-32 h-32 mx-auto mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-xl opacity-50"></div>
            <Image 
              src="/escudo.png" 
              alt="Escudo" 
              width={120} 
              height={120} 
              className="relative z-10 drop-shadow-2xl animate-float"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-200"
          >
            Club Atlético Sucre
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl mb-6 text-white/80"
          >
            "Formando campeones dentro y fuera de la cancha"
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center gap-6 mb-8"
          >
            {[
              { icon: FaWhatsapp, href: "https://wa.me/573218543957", color: "green" },
              { icon: FaTrophy, href: "#", color: "yellow" },
              { icon: FaUsers, href: "#familias", color: "blue" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`p-3 bg-${item.color}-500/20 rounded-xl hover:bg-${item.color}-500/30 transition-all duration-300 hover:scale-110`}
              >
                <item.icon className={`text-${item.color}-400 text-2xl`} />
              </a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/60 border-t border-white/10 pt-8"
          >
            <div>© 2025 Club Atlético Sucre</div>
            <div>Ipiales - Nariño</div>
            <div>Todos los derechos reservados</div>
          </motion.div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <motion.a
        href="https://wa.me/573218543957"
        className="fixed bottom-6 right-6 bg-gradient-to-br from-green-400 to-green-600 p-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white text-2xl hover:scale-110 transition-all duration-300 z-50"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp />
      </motion.a>
    </main>
  );
}