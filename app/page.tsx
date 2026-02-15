"use client";

import { motion } from "framer-motion";
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
  FaShoePrints,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
  FaSchool
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
                src="/escudo1.jpeg"
                alt="Escudo Atletico Sucre"
                width={45}
                height={45}
                className="rounded-full shadow-lg relative z-10 object-contain bg-transparent"
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
              { href: "#costos", label: "Costos", icon: FaMoneyBillWave },
              { href: "#uniformes", label: "Uniformes", icon: FaTshirt },
              { href: "#horarios", label: "Horarios", icon: FaClock },
              { href: "#lugares", label: "Lugares", icon: FaMapMarkerAlt },
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

      {/* Sección Hero - ATLETICO SUCRE CON VIDEO */}
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

            {/* VIDEO en lugar del escudo */}
            <div className="relative w-[300px] h-[380px] overflow-hidden rounded-2xl shadow-2xl border-4 border-white/30 bg-black">
              <video
                src="/video_presentacion.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                playsInline
              />
            </div>
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

      {/* Formación Integral */}
      <section className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200 hover:shadow-red-200 transition-all duration-500 relative overflow-hidden group">
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

      {/* Filosofía */}
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

      {/* SECCIÓN: Costos */}
      <section id="costos" className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg">
                  <FaMoneyBillWave className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                  Costos y Pagos
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <FaCreditCard className="text-green-600 text-3xl" />
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Pago único</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Inscripción</h3>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-5xl font-black text-green-600">$20.000</span>
                      <span className="text-gray-500 mb-1">COP</span>
                    </div>
                    <p className="text-gray-600">Pago único al momento de matricularse</p>
                    <div className="mt-6 h-1 w-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-500 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <FaClock className="text-blue-600 text-3xl" />
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Mensual</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Mensualidad</h3>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-5xl font-black text-blue-600">$65.000</span>
                      <span className="text-gray-500 mb-1">COP</span>
                    </div>
                    <p className="text-gray-600 font-medium">Se cancela los primeros días del mes</p>
                    <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-700">⚠️ Importante: Mantener al día para continuar entrenando</p>
                    </div>
                    <div className="mt-6 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                <p className="text-gray-600 text-center">
                  💳 <span className="font-semibold">Formas de pago:</span> Efectivo o Nequi
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN: Uniformes */}
      <section id="uniformes" className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-lg">
                  <FaTshirt className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Uniformes
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-10 text-center max-w-2xl mx-auto">
                Uniformes oficiales del Club Atlético Sucre. Calidad profesional para nuestros deportistas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Uniforme Principal */}
                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-64 bg-gradient-to-br from-red-600 to-red-800 rounded-xl mb-4 overflow-hidden">
                      <Image 
                        src="/uniforme_principal.jpeg" 
                        alt="Uniforme Principal" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Uniforme Principal</h3>
                    <p className="text-gray-600 text-sm">Camiseta blanca - Pantaloneta blanca</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-red-600 font-bold">$50.000</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Completo</span>
                    </div>
                  </div>
                </motion.div>

                {/* Uniforme Alternativo */}
                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-64 bg-gradient-to-br from-gray-700 to-black rounded-xl mb-4 overflow-hidden">
                      <Image 
                        src="/uniforme_alternativo.jpeg" 
                        alt="Uniforme Alternativo" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Uniforme Alternativo</h3>
                    <p className="text-gray-600 text-sm">Camiseta roja - Pantaloneta roja</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-red-600 font-bold">$50.000</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Completo</span>
                    </div>
                  </div>
                </motion.div>

                {/* Uniforme Entrenamiento */}
                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-64 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl mb-4 overflow-hidden">
                      <Image 
                        src="/uniforme_3.jpeg" 
                        alt="Uniforme Entrenamiento" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Entrenamiento</h3>
                    <p className="text-gray-600 text-sm">Camiseta Azul-Pantaloneta Azul</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-red-600 font-bold">$50.000</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Completo</span>
                    </div>
                  </div>
                </motion.div>

                {/* Arquero */}
                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-64 bg-gradient-to-br from-green-600 to-green-800 rounded-xl mb-4 overflow-hidden">
                      <Image 
                        src="/arqueros.jpeg" 
                        alt="Uniforme Arquero" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Uniforme Arquero</h3>
                    <p className="text-gray-600 text-sm">Uniforme destinado para arqueros</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-red-600 font-bold">$50.000</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Completo</span>
                    </div>
                  </div>
                </motion.div>

                {/* Mochila */}
                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-64 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl mb-4 overflow-hidden">
                      <Image 
                        src="/mochila.jpg" 
                        alt="Mochila" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Mochila</h3>
                    <p className="text-gray-600 text-sm">Rojo y negro</p>
                    <div className="mt-3">
                    <span className="text-red-600 font-bold">$?</span>
                    </div>
                  </div>
                </motion.div>

                {/* Uniforme Alternativo 2 */}
                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-64 bg-gradient-to-br from-red-700 to-red-900 rounded-xl mb-4 overflow-hidden">
                      <Image 
                        src="/uniforme4.jpeg" 
                        alt="Uniforme Alternativo 2" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Uniforme Alternativo 2</h3>
                    <p className="text-gray-600 text-sm">Uniforme completo</p>
                    <div className="mt-3">
                      <span className="text-red-600 font-bold">$50.000</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Nota sobre uniformes */}
              <div className="mt-10 bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-xl border border-red-200">
                <p className="text-gray-700 text-center">
                  ⚽ <span className="font-semibold">Nota:</span> Los uniformes se adquieren en Liga Mundial, Direccion: Calle 24 # 6-91, Ipiales; Nariño
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* NUEVA SECCIÓN: Horarios de Entrenamiento */}
      <section id="horarios" className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-yellow-500/5 to-red-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg">
                  <FaClock className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Horarios de Entrenamiento
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-10 text-center max-w-3xl mx-auto">
                Entrenamos toda la semana con horarios flexibles para que puedas compaginar el fútbol con tus estudios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Horarios Mañana */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-xl border-l-4 border-amber-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-amber-500 rounded-lg">
                      <FaSun className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-700">Horario Mañana</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { day: "Martes", time: "8:00 AM - 10:00 AM" },
                      { day: "Jueves", time: "8:00 AM - 10:00 AM" },
                      { day: "Viernes", time: "8:00 AM - 10:00 AM" },
                      { day: "Sábado", time: "9:00 AM - 11:00 AM" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/80 p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="font-semibold text-gray-800">{item.day}</span>
                        </div>
                        <span className="text-amber-600 font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-500 italic">Ideal para quienes estudian en la tarde</p>
                </motion.div>

                {/* Horarios Tarde */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-xl border-l-4 border-indigo-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                      <FaMoon className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-700">Horario Tarde</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { day: "Martes", time: "3:00 PM - 5:30 PM" },
                      { day: "Jueves", time: "3:00 PM - 5:30 PM" },
                      { day: "Viernes", time: "3:00 PM - 5:30 PM" },
                      { day: "Sábado", time: "11:00 AM - 1:00 PM" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/80 p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                          <span className="font-semibold text-gray-800">{item.day}</span>
                        </div>
                        <span className="text-indigo-600 font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-500 italic">Perfecto para quienes estudian en la mañana</p>
                </motion.div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                <p className="text-gray-700 text-center flex items-center justify-center gap-2">
                  <FaClock className="text-blue-500" />
                  <span className="font-semibold">¡Elige el horario que mejor se adapte a ti!</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* NUEVA SECCIÓN: Lugares de Entrenamiento */}
      <section id="lugares" className="px-4 md:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-red-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-lg">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                  Lugares de Entrenamiento
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-10 text-center max-w-3xl mx-auto">
                Contamos con dos sedes perfectamente equipadas para que nuestros deportistas entrenen en las mejores condiciones.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Grupo Cabal */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full">
                    <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl mb-4 overflow-hidden">
                      {/* Imagen de Grupo Cabal - puedes reemplazar con imagen real */}
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-600">
                        <div className="text-center text-white">
                          <FaFutbol className="text-6xl mx-auto mb-2 opacity-50" />
                          <p className="text-white/70 text-sm">Cancha Grupo Cabal</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-bold text-2xl mb-2 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-600" />
                      Grupo Cabal
                    </h3>
                    <p className="text-gray-600 mb-3">Cancha en Gramado Natural</p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-500 text-sm" />
                        <span>Disponible en todos los horarios</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500 text-sm" />
                        <span>Excelente para entrenamientos</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Sede Principal</span>
                    </div>
                  </div>
                </motion.div>

                {/* Colegio Seminario */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full">
                    <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl mb-4 overflow-hidden">
                      {/* Imagen de Colegio Seminario - puedes reemplazar con imagen real */}
                      <div className="absolute inset-0 flex items-center justify-center bg-purple-600">
                        <div className="text-center text-white">
                          <FaSchool className="text-6xl mx-auto mb-2 opacity-50" />
                          <p className="text-white/70 text-sm">Colegio Seminario</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-bold text-2xl mb-2 flex items-center gap-2">
                      <FaSchool className="text-purple-600" />
                      Colegio Seminario
                    </h3>
                    <p className="text-gray-600 mb-3">Cancha en gramado natural</p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-purple-500 text-sm" />
                        <span>Disponible en todos los horarios</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500 text-sm" />
                        <span>Espacio amplio y zonas verdes</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Sede Alterna</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mapa o información adicional */}
              <div className="mt-10 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                <p className="text-gray-700 text-center flex items-center justify-center gap-2">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span className="font-semibold">Ubicaciones:</span> Grupo Cabal (Parque Santander) - Colegio Seminario (Tras del Restaurante la Merced)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Coach de Rendimiento */}
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
                  Además de ser formadores en Nuestro Club Atletico Sucre, los profesores se convierten
                  en verdaderos coach de entrenamiento.
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

      {/* Deberes de las Familias */}
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

      {/* Nuestro Club - Carrusel */}
      <section className="px-4 md:px-8 mt-16 mb-16">
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
            {/* Slide 1 - Familia Atletico */}
            <SwiperSlide>
              <div className="h-80 bg-gradient-to-br from-black to-gray-800 rounded-3xl shadow-2xl overflow-hidden relative group cursor-pointer">
                <Image src="/familia_sucre1.jpeg" alt="Familia Atletico Sucre" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-white text-2xl font-bold">Familia Atletico Sucre</span>
                  <p className="text-white/70 text-sm mt-2">Más que jugadores somos una familia, más que un equipo somos caballeros en la victoria y en la derrota </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 - Equipo Campeón */}
            <SwiperSlide>
              <div className="h-80 rounded-3xl shadow-2xl overflow-hidden relative group cursor-pointer">
                <Image 
                  src="/equipo.jpeg" 
                  alt="Equipo Campeón" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-white text-2xl font-bold">Equipo Sub 7</span>
                  <p className="text-white/70 text-sm mt-2">Jugamos con el corazón, entrenamos con disciplina y vivimos con respeto</p>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Categoria 2018
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 - Entrenamiento */}
            <SwiperSlide>
              <div className="h-80 rounded-3xl shadow-2xl overflow-hidden relative group">
                <video 
                  src="/entrenamiento.mp4" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-white text-2xl font-bold">Entrenamiento</span>
                  <p className="text-white/70 text-sm mt-2">Metodología profesional</p>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <span>▶</span> ENTRENAMIENTO
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
              src="/escudo1.jpeg"
              alt="Escudo"
              width={120}
              height={120}
              className="relative z-10 drop-shadow-2xl animate-float object-contain bg-transparent"
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
            <div>© 2026 Club Atlético Sucre</div>
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