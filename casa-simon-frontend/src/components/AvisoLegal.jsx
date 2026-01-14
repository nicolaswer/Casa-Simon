import React from 'react';

export default function AvisoLegal() {
    // Estilos para reutilizar y mantener consistencia
    const sectionTitle = "text-xl md:text-2xl font-bold text-yellow-400 mb-4 mt-8";
    const paragraph = "text-gray-400 text-sm md:text-base leading-relaxed mb-4";
    const listStyle = "list-disc pl-5 text-gray-400 space-y-2 mb-4";

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Título Principal */}
                <h1 className="text-3xl md:text-4xl font-bold mb-2 border-b border-yellow-500 pb-4">
                    Aviso Legal
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Última actualización: {new Date().getFullYear()}
                </p>

                <div className="bg-gray-900 p-6 md:p-10 rounded-xl shadow-lg border border-gray-800">
                    
                    {/* 1. DATOS IDENTIFICATIVOS */}
                    <h2 className={sectionTitle}>1. Datos Identificativos</h2>
                    <p className={paragraph}>
                        En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), a continuación se reflejan los siguientes datos:
                    </p>
                    <ul className={listStyle}>
                        <li>
                            <strong className="text-white">Titular del sitio web:</strong> [NOMBRE DE LA EMPRESA O AUTÓNOMO] (en adelante, "Casa Simón")
                        </li>
                        <li>
                            <strong className="text-white">NIF/CIF:</strong> [PONER AQUÍ EL DNI O CIF]
                        </li>
                        <li>
                            <strong className="text-white">Domicilio:</strong> [DIRECCIÓN COMPLETA DEL LOCAL PRINCIPAL, ELCHE]
                        </li>
                        <li>
                            <strong className="text-white">Correo electrónico de contacto:</strong> info@casasimon.com
                        </li>
                        <li>
                            <strong className="text-white">Teléfono:</strong> +34 671 40 15 36
                        </li>
                        {/* Si es empresa (S.L.), pon los datos del registro mercantil aquí abajo. Si eres autónomo, borra esta línea */}
                        <li>
                            <strong className="text-white">Datos Registrales:</strong> Inscrita en el Registro Mercantil de Alicante, Tomo [X], Folio [X], Sección [X], Hoja [X].
                        </li>
                    </ul>

                    {/* 2. USUARIOS */}
                    <h2 className={sectionTitle}>2. Usuarios</h2>
                    <p className={paragraph}>
                        El acceso y/o uso de este portal de <strong>Casa Simón</strong> atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
                    </p>

                    {/* 3. USO DEL PORTAL */}
                    <h2 className={sectionTitle}>3. Uso del Portal</h2>
                    <p className={paragraph}>
                        La página web proporciona el acceso a multitud de informaciones, servicios, cartas, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Casa Simón o a sus licenciantes a los que el USUARIO pueda tener acceso.
                    </p>
                    <p className={paragraph}>
                        El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para solicitar ciertos servicios o contenidos. El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios (como por ejemplo servicios de reservas o consultas) que Casa Simón ofrece a través de su portal.
                    </p>

                    {/* 4. PROPIEDAD INTELECTUAL E INDUSTRIAL */}
                    <h2 className={sectionTitle}>4. Propiedad Intelectual e Industrial</h2>
                    <p className={paragraph}>
                        Casa Simón por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes de platos, logotipos, combinaciones de colores, estructura y diseño, tipografías, etc.).
                    </p>
                    <p className={paragraph}>
                        Todos los derechos reservados. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Casa Simón.
                    </p>

                    {/* 5. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD */}
                    <h2 className={sectionTitle}>5. Exclusión de Garantías y Responsabilidad</h2>
                    <p className={paragraph}>
                        Casa Simón no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos (precios antiguos o menús no actualizados), falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                    </p>

                    {/* 6. MODIFICACIONES */}
                    <h2 className={sectionTitle}>6. Modificaciones</h2>
                    <p className={paragraph}>
                        Casa Simón se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                    </p>

                    {/* 7. ENLACES */}
                    <h2 className={sectionTitle}>7. Enlaces</h2>
                    <p className={paragraph}>
                        En el caso de que en la web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet (como Google Maps o Redes Sociales), Casa Simón no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Casa Simón asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                    </p>

                    {/* 8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN */}
                    <h2 className={sectionTitle}>8. Legislación Aplicable y Jurisdicción</h2>
                    <p className={paragraph}>
                        La relación entre Casa Simón y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Elche (Alicante).
                    </p>

                </div>
            </div>
        </div>
    );
}