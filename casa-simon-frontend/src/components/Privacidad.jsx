import React from 'react';

export default function Privacidad() {
    // Estilos reutilizables (mismos que en Aviso Legal)
    const sectionTitle = "text-xl md:text-2xl font-bold text-yellow-400 mb-4 mt-8";
    const subTitle = "text-lg font-semibold text-white mb-2 mt-4";
    const paragraph = "text-gray-400 text-sm md:text-base leading-relaxed mb-4";
    const listStyle = "list-disc pl-5 text-gray-400 space-y-2 mb-4 text-sm md:text-base";

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Título Principal */}
                <h1 className="text-3xl md:text-4xl font-bold mb-2 border-b border-yellow-500 pb-4">
                    Política de Privacidad
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Última actualización: {new Date().getFullYear()}
                </p>

                <div className="bg-gray-900 p-6 md:p-10 rounded-xl shadow-lg border border-gray-800">
                    
                    <p className={paragraph}>
                        En <strong>Casa Simón</strong> nos tomamos muy en serio la privacidad de tus datos. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información personal que nos proporcionas a través de nuestro sitio web y servicios.
                    </p>

                    {/* 1. RESPONSABLE */}
                    <h2 className={sectionTitle}>1. Responsable del Tratamiento</h2>
                    <p className={paragraph}>
                        ¿Quién es el responsable del tratamiento de tus datos?
                    </p>
                    <ul className={listStyle}>
                        <li><strong className="text-white">Identidad:</strong> [NOMBRE DE LA EMPRESA O AUTÓNOMO]</li>
                        <li><strong className="text-white">CIF/NIF:</strong> [TU CIF O DNI AQUÍ]</li>
                        <li><strong className="text-white">Dirección:</strong> [DIRECCIÓN COMPLETA DE UN LOCAL]</li>
                        <li><strong className="text-white">Email:</strong> nicolaswer11@gmail.com</li> {/* He puesto el del footer, cámbialo si tienes uno corporativo */}
                    </ul>

                    {/* 2. FINALIDAD */}
                    <h2 className={sectionTitle}>2. Finalidad del tratamiento</h2>
                    <p className={paragraph}>
                        ¿Para qué usamos tus datos personales? En Casa Simón tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:
                    </p>
                    <ul className={listStyle}>
                        <li><strong>Gestión de Reservas:</strong> Para tramitar tu solicitud de mesa en nuestros restaurantes.</li>
                        <li><strong>Pedidos Para Llevar:</strong> Para gestionar los encargos de comida y la recogida en el local seleccionado (Altabix o Congresos).</li>
                        <li><strong>Atención al Cliente:</strong> Para contestar a las dudas, consultas o sugerencias que nos envíes a través del correo electrónico o formularios de contacto.</li>
                        <li><strong>Mejora del servicio:</strong> Analizar la usabilidad de la web para mejorar la experiencia de usuario (cookies analíticas).</li>
                    </ul>
                    <p className="text-yellow-500 text-sm font-semibold mt-2">
                        * No se tomarán decisiones automatizadas ni perfiles comerciales con tus datos sin tu consentimiento explícito.
                    </p>

                    {/* 3. LEGITIMACIÓN */}
                    <h2 className={sectionTitle}>3. Legitimación</h2>
                    <p className={paragraph}>
                        La base legal para el tratamiento de tus datos es:
                    </p>
                    <ul className={listStyle}>
                        <li>
                            <strong>La ejecución de un contrato:</strong> Al realizar una reserva o un pedido de comida para llevar.
                        </li>
                        <li>
                            <strong>El consentimiento del usuario:</strong> Al escribirnos un email o aceptar las cookies, nos das permiso para tratar tus datos para esa finalidad concreta. Puedes retirar este consentimiento en cualquier momento.
                        </li>
                    </ul>

                    {/* 4. DESTINATARIOS */}
                    <h2 className={sectionTitle}>4. Destinatarios de los datos</h2>
                    <p className={paragraph}>
                        ¿A quién se comunicarán tus datos?
                    </p>
                    <p className={paragraph}>
                        Tus datos no se cederán a terceros salvo obligación legal (Hacienda, Jueces y Tribunales...) o a proveedores tecnológicos necesarios para el funcionamiento de la web (Hosting, plataforma de reservas, Google Analytics), los cuales cumplen con la normativa de protección de datos vigente.
                    </p>

                    {/* 5. DERECHOS */}
                    <h2 className={sectionTitle}>5. Tus Derechos</h2>
                    <p className={paragraph}>
                        Como usuario, tienes derecho a controlar tus datos. Puedes ejercer los siguientes derechos escribiéndonos al email de contacto:
                    </p>
                    <ul className={listStyle}>
                        <li><strong>Acceso:</strong> Saber qué datos tenemos sobre ti.</li>
                        <li><strong>Rectificación:</strong> Corregir datos erróneos (ej. si cambias de teléfono).</li>
                        <li><strong>Supresión (Derecho al olvido):</strong> Pedir que borremos tus datos cuando ya no sean necesarios.</li>
                        <li><strong>Oposición:</strong> Oponerte a que usemos tus datos para fines concretos.</li>
                        <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado.</li>
                    </ul>

                    {/* 6. SEGURIDAD */}
                    <h2 className={sectionTitle}>6. Seguridad de los datos</h2>
                    <p className={paragraph}>
                        Casa Simón ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología.
                    </p>

                    {/* 7. MENORES */}
                    <h2 className={sectionTitle}>7. Menores de edad</h2>
                    <p className={paragraph}>
                        Nuestra web no está dirigida a menores de 14 años. Si eres menor de esa edad, no debes facilitarnos tus datos personales sin el consentimiento de tus padres o tutores legales.
                    </p>

                </div>
            </div>
        </div>
    );
}