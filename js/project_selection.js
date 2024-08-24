
const projects = [
    {
        id: 1,
        nombre: "Sistema de Gestión de Tareas",
        descripcion: "Desarrollo de una aplicación web para la gestión de tareas personales y grupales.",
        objetivo: "Facilitar la organización de tareas y actividades diarias.",
        estado: "Propuesta",
        duracion: "8 semanas",
        integrantes: "4",
        tecnologias: "Backend, Frontend, UI/UX",
        TipoAplicacion: "Web",
        sector: "Productividad"
    },
    {
        id: 2,
        nombre: "Plataforma de E-Learning",
        descripcion: "Creación de una plataforma educativa para la administración de cursos y recursos de aprendizaje.",
        objetivo: "Promover el aprendizaje en línea.",
        estado: "Propuesta",
        duracion: "10 semanas",
        integrantes: "5",
        tecnologias: "Backend, Frontend, Base de Datos",
        tipo: "Web",
        sector: "Educación"
    },
    {
        id: 3,
        nombre: "Aplicación de Recordatorio de Medicamentos",
        descripcion: "Desarrollo de una app móvil que notifica al usuario sobre sus horarios de medicación.",
       objetivo: "Mejorar la adherencia al tratamiento médico.",
        estado: "Propuesta",
        duracion: "6 semanas",
        integrantes: "3",
        tecnologias: "Desarrollo Móvil, UX",
        tipo: "Móvil",
        sector: "Salud"
    },
    {
        id: 4,
        nombre: "Sistema de Reservas para Restaurantes",
        descripcion: "Aplicación para la gestión de reservas de mesas en restaurantes.",
        objetivo: "Optimizar la gestión de reservas y ocupación.",
        estado: "Propuesta",
        duracion: "8 semanas",
        integrantes: "4",
        tecnologias: "Backend, Frontend, Base de Datos",
        tipo: "Web",
        sector: "Servicios"
    },
    {
        id: 5,
        nombre: "Base de Datos de Árboles Urbanos",
        descripcion: "Implementación de una base de datos georeferenciada para el seguimiento de árboles en áreas urbanas.",
        objetivo: "Facilitar la gestión y monitoreo de árboles urbanos.",
        estado: "Propuesta",
        duracion: "8 semanas",
        integrantes: "4",
        tecnologias: "Backend, GIS, Frontend",
        tipo: "Web",
        sector: "Medio Ambiente"
    },
    {
        id: 6,
        nombre: "Sistema de Gestión de Inventarios",
        descripcion: "Desarrollo de un sistema para la gestión y control de inventarios en pequeñas empresas.",
        objetivo: "Mejorar la precisión en el manejo de inventarios.",
        estado: "Propuesta",
        duracion: "9 semanas",
        integrantes: "4",
        tecnologias: "Backend, Base de Datos, Frontend",
        tipo: "Web",
        sector: "Comercio"
    },
    {
        id: 7,
        nombre: "Aplicación de Seguimiento de Hábitos",
        descripcion: "Creación de una app para el seguimiento y mejora de hábitos personales.",
        objetivo: "Fomentar el desarrollo de hábitos saludables.",
        estado: "Propuesta",
        duracion: "7 semanas",
        integrantes: "3",
        tecnologias: "Desarrollo Móvil, UI/UX",
        tipo: "Móvil",
        sector: "Salud"
    },
    {
        id: 8,
        nombre: "Sistema de Registro de Mascotas Perdidas",
        descripcion: "Plataforma para el registro y localización de mascotas perdidas con georeferenciación.",
        objetivo: "Facilitar la recuperación de mascotas perdidas.",
        estado: "Propuesta",
        duracion: "8 semanas",
        integrantes: "4",
        tecnologias: "Backend, Frontend, GIS",
        tipo: "Web",
        sector: "Comunidad"
    },
    {
        id: 9,
        nombre: "Base de Datos de Profesionales",
        descripcion: "Sistema para la gestión de un directorio de profesionales por especialidad.",
        objetivo: "Facilitar la búsqueda y contratación de profesionales especializados.",
        estado: "Propuesta",
        duracion: "10 semanas",
        integrantes: "5",
        tecnologias: "Backend, Frontend, Base de Datos",
        tipo: "Web",
        sector: "Recursos Humanos"
    }, 
    {
        id: 10,
        nombre: "Plataforma de Encuestas y Análisis de Datos",
    descripcion: "Creación de una herramienta para la generación y análisis de encuestas.",
        objetivo: "Facilitar la recolección y análisis de datos para investigaciones.",
        estado: "Propuesta",
        duracion: "8 semanas",
        integrantes: "4",
        tecnologias: "Backend, Frontend, Data Science",
        tipo: "Web",
        sector: "Investigación"
    },
    {
        id: 20,
        nombre: "Base de Datos de Obras Artísticas",
        tipo: "Web",
        sector: "Cultura",
        descripcion: "Desarrollo de un sistema para catalogar y gestionar obras de arte en galerías o museos.",
        objetivo: "Facilitar la gestión y promoción de colecciones artísticas.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: "Backend, Frontend, Base de Datos"
    },
    {
        id: 21,
        nombre: "Sistema de Reservas de Canchas Deportivas",
        tipo: "Web/Móvil",
        sector: "Deportes",
        descripcion: "Creación de una plataforma para la reserva de canchas y espacios deportivos.",
        objetivo: "Mejorar la accesibilidad y organización en instalaciones deportivas.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: "Backend, Frontend, Desarrollo Móvil"
    },
    {
        id: 22,
        nombre: "Aplicación de Control de Salud Personal",
        tipo: "Móvil",
        sector: "Salud",
        descripcion: "Desarrollo de una app para el seguimiento de indicadores de salud como peso, presión arterial, etc.",
        objetivo: "Promover el autocuidado y monitoreo de la salud.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: "Desarrollo Móvil, UX"
    },
    {
        id: 23,
        nombre: "Sistema de Gestión de Almacenes",
        tipo: "Web",
        sector: "Logística",
        descripcion: "Creación de un sistema para el control de inventarios y stock en almacenes.",
        objetivo: "Optimizar la gestión logística en empresas.",
        estado: "Propuesta",
        duracion: "10 semanas",
        dificultad: 5,
        tecnologias: "Backend, Frontend, Base de Datos"
    },
    {
        id: 24,
        nombre: "Aplicación de Compras en Línea",
        tipo: "Web/Móvil",
        sector: "Comercio",
        descripcion: "Implementación de una plataforma para el comercio electrónico de productos y servicios.",
        objetivo: "Facilitar el comercio y ventas en línea.",
        estado: "Propuesta",
        duracion: "10 semanas",
        dificultad: 5,
        tecnologias: "Backend, Frontend, Desarrollo Móvil"
    },
    {
        id: 25,
        nombre: "Sistema de Gestión de Bibliotecas",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Desarrollo de un sistema para la gestión de préstamos y catalogación de libros en bibliotecas.",
        objetivo: "Mejorar la organización y accesibilidad en bibliotecas.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: "Backend, Frontend, Base de Datos"
    },
    {
        id: 26,
        nombre: "Plataforma de Gestión de Cursos Online",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Creación de una plataforma para la administración y gestión de cursos en línea.",
        objetivo: "Fomentar la educación a distancia y el aprendizaje continuo.",
        estado: "Propuesta",
        duracion: "10 semanas",
        dificultad: 5,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 27,
        nombre: "Aplicación de Guía Turística Interactiva",
        tipo: "Móvil",
        sector: "Turismo",
        descripcion: "Desarrollo de una app que brinde información y recomendaciones turísticas, con geolocalización.",
        objetivo: "Mejorar la experiencia turística a través de la tecnología.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 28,
        nombre: "Sistema de Gestión de Inventario de Libros",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Implementación de un sistema para el control de inventarios de libros en una institución educativa.",
        objetivo: "Mejorar la organización y acceso a materiales educativos.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 29,
        nombre: "Plataforma de Intercambio de Libros Usados",
        tipo: "Web",
        sector: "Comunidad",
        descripcion: "Creación de una plataforma que permita a los usuarios intercambiar libros usados.",
        objetivo: "Fomentar la reutilización de recursos educativos.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 30,
        nombre: "Sistema de Registro de Visitas a Museos",
        tipo: "Web",
        sector: "Cultura",
        descripcion: "Desarrollo de una plataforma para el registro y análisis de visitantes a museos.",
        objetivo: "Mejorar la gestión y promoción de actividades culturales.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: "Backend, Frontend, Base de Datos"
    },
    {
        id: 31,
        nombre: "Aplicación de Gestión de Horarios de Clases",
        tipo: "Web/Móvil",
        sector: "Educación",
        descripcion: "Implementación de una app para la gestión y consulta de horarios de clases en instituciones educativas.",
        objetivo: "Optimizar la organización académica.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 32,
        nombre: "Plataforma de Subastas en Línea",
        tipo: "Web",
        sector: "Comercio",
        descripcion: "Creación de un sistema para la realización de subastas en línea de productos variados.",
        objetivo: "Facilitar el comercio a través de subastas en línea.",
        estado: "Propuesta",
        duracion: "10 semanas",
        dificultad: 5,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 33,
        nombre: "Sistema de Control de Asistencia",
        tipo: "Web/Móvil",
        sector: "Administración",
        descripcion: "Desarrollo de una plataforma para el control y gestión de asistencia de empleados en una empresa.",
        objetivo: "Mejorar la gestión de recursos humanos.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Desarrollo Móvil"]
    },
    {
        id: 34,
        nombre: "Aplicación de Gestión de Entrenamientos Deportivos",
        tipo: "Móvil",
        sector: "Deportes",
        descripcion: "Implementación de una app que permita a los usuarios gestionar sus rutinas de entrenamiento.",
        objetivo: "Fomentar el ejercicio y bienestar físico.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 35,
        nombre: "Sistema de Gestión de Pedidos para Delivery",
        tipo: "Web/Móvil",
        sector: "Servicios",
        descripcion: "Creación de una plataforma para la gestión de pedidos y entregas a domicilio.",
        objetivo: "Mejorar la eficiencia en servicios de delivery.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Desarrollo Móvil"]
    },
    {
        id: 36,
        nombre: "Plataforma de Gestión de Proyectos Colaborativos",
        tipo: "Web",
        sector: "Administración",
        descripcion: "Desarrollo de un sistema para la gestión de proyectos colaborativos entre equipos multidisciplinarios.",
        objetivo: "Facilitar el trabajo en equipo y la organización de proyectos.",
        estado: "Propuesta",
        duracion: "10 semanas",
        dificultad: 5,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 37,
        nombre: "Aplicación de Control de Gastos en Grupo",
        tipo: "Móvil",
        sector: "Finanzas",
        descripcion: "Implementación de una app que permita gestionar gastos compartidos entre grupos.",
        objetivo: "Facilitar la administración de finanzas compartidas.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 38,
        nombre: "Sistema de Gestión de Eventos Deportivos",
        tipo: "Web",
        sector: "Deportes",
        descripcion: "Desarrollo de una plataforma para la organización y gestión de eventos deportivos.",
        objetivo: "Mejorar la planificación y seguimiento de competencias deportivas.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 39,
        nombre: "Aplicación de Gestión de Rutinas de Estudio",
        tipo: "Móvil",
        sector: "Educación",
        descripcion: "Creación de una app para el seguimiento y organización de rutinas de estudio.",
        objetivo: "Fomentar el hábito de estudio y la organización académica.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 40,
        nombre: "Plataforma de Gestión de Reciclaje",
        tipo: "Web",
        sector: "Medio Ambiente",
        descripcion: "Implementación de un sistema para la gestión y seguimiento de programas de reciclaje en comunidades.",
        objetivo: "Fomentar la sostenibilidad y cuidado del medio ambiente.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 41,
        nombre: "Sistema de Registro de Actividades Académicas",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Desarrollo de una plataforma para el registro y seguimiento de actividades académicas en instituciones educativas.",
        objetivo: "Mejorar la organización y planificación académica.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 42,
        nombre: "Aplicación de Gestión de Tareas del Hogar",
        tipo: "Móvil",
        sector: "Hogar",
        descripcion: "Creación de una app para la asignación y seguimiento de tareas del hogar entre los miembros de la familia.",
        objetivo: "Mejorar la organización y cooperación en el hogar.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 43,
        nombre: "Sistema de Gestión de Actividades Deportivas",
        tipo: "Web",
        sector: "Deportes",
        descripcion: "Implementación de una plataforma para la organización y gestión de actividades y eventos deportivos.",
        objetivo: "Fomentar la participación y organización de eventos deportivos.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 44,
        nombre: "Aplicación de Gestión de Viajes",
        tipo: "Móvil",
        sector: "Turismo",
        descripcion: "Desarrollo de una app que permita organizar y planificar viajes, incluyendo reservas y actividades.",
        objetivo: "Facilitar la planificación y seguimiento de viajes personales o grupales.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 45,
        nombre: "Plataforma de Crowdfunding",
        tipo: "Web",
        sector: "Finanzas",
        descripcion: "Creación de un sistema para la recaudación de fondos a través de campañas de crowdfunding.",
        objetivo: "Facilitar la financiación de proyectos y causas sociales.",
        estado: "Propuesta",
        duracion: "10 semanas",
        dificultad: 5,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 46,
        nombre: "Sistema de Gestión de Servicios de Limpieza",
        tipo: "Web",
        sector: "Servicios",
        descripcion: "Desarrollo de una plataforma para la contratación y gestión de servicios de limpieza en hogares y oficinas.",
        objetivo: "Mejorar la organización y contratación de servicios de limpieza.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 47,
        nombre: "Aplicación de Control de Asignaciones Escolares",
        tipo: "Móvil",
        sector: "Educación",
        descripcion: "Implementación de una app que permita a los estudiantes llevar un control de sus tareas y asignaciones.",
        objetivo: "Facilitar la organización y seguimiento de tareas académicas.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 48,
        nombre: "Plataforma de Gestión de Programas de Voluntariado",
        tipo: "Web",
        sector: "Comunidad",
        descripcion: "Creación de un sistema para la organización y seguimiento de programas de voluntariado en ONG's.",
        objetivo: "Facilitar la gestión y participación en programas de voluntariado.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 49,
        nombre: "Sistema de Gestión de Espacios Culturales",
        tipo: "Web",
        sector: "Cultura",
        descripcion: "Desarrollo de una plataforma para la administración y gestión de espacios culturales y artísticos.",
        objetivo: "Mejorar la organización y promoción de actividades culturales.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 50,
        nombre: "Aplicación de Seguimiento de Metas Personales",
        tipo: "Móvil",
        sector: "Productividad",
        descripcion: "Implementación de una app que permita a los usuarios definir y hacer seguimiento de sus metas personales.",
        objetivo: "Fomentar el desarrollo personal y la productividad.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 51,
        nombre: "Plataforma de Gestión de Inventarios",
        tipo: "Web",
        sector: "Logística",
        descripcion: "Desarrollo de un sistema para la gestión y control de inventarios en pequeñas y medianas empresas.",
        objetivo: "Mejorar la eficiencia en la administración de inventarios.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 52,
        nombre: "Aplicación de Control de Hábitos",
        tipo: "Móvil",
        sector: "Salud",
        descripcion: "Creación de una app para el seguimiento y gestión de hábitos saludables.",
        objetivo: "Fomentar hábitos de vida saludable.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 53,
        nombre: "Sistema de Gestión de Consultas Médicas",
        tipo: "Web/Móvil",
        sector: "Salud",
        descripcion: "Implementación de una plataforma para la gestión de citas y consultas médicas en clínicas.",
        objetivo: "Facilitar la organización y seguimiento de consultas médicas.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 54,
        nombre: "Plataforma de Gestión de Bibliotecas",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Desarrollo de un sistema para la administración y gestión de bibliotecas escolares y universitarias.",
        objetivo: "Mejorar la organización y acceso a recursos bibliográficos.",
        estado: "Propuesta",
        duracion: "9 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 55,
        nombre: "Aplicación de Control de Calidad de Productos",
        tipo: "Web",
        sector: "Manufactura",
        descripcion: "Creación de un sistema para el seguimiento y gestión de la calidad en la producción de bienes.",
        objetivo: "Asegurar la calidad de productos en línea con estándares establecidos.",
        estado: "Propuesta",
        duracion: "10 semanas",
        dificultad: 5,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 56,
        nombre: "Sistema de Gestión de Transporte Público",
        tipo: "Web/Móvil",
        sector: "Transporte",
        descripcion: "Implementación de una plataforma para la administración y seguimiento de rutas y horarios de transporte público.",
        objetivo: "Mejorar la eficiencia y accesibilidad del transporte público.",
        estado: "Propuesta",
        duracion: "9 semanas",
        dificultad: 5,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 57,
        nombre: "Plataforma de Gestión de Reservas de Eventos",
        tipo: "Web",
        sector: "Entretenimiento",
        descripcion: "Desarrollo de un sistema para la gestión de reservas y venta de entradas para eventos.",
        objetivo: "Facilitar la organización y promoción de eventos.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 58,
        nombre: "Aplicación de Gestión de Colecciones Personales",
        tipo: "Móvil",
        sector: "Hobby",
        descripcion: "Creación de una app que permita a los usuarios gestionar y catalogar sus colecciones personales (libros, discos, etc.).",
        objetivo: "Mejorar la organización y preservación de colecciones personales.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 59,
        nombre: "Sistema de Gestión de Contratos",
        tipo: "Web",
        sector: "Legal",
        descripcion: "Implementación de una plataforma para la creación, administración y seguimiento de contratos legales.",
        objetivo: "Facilitar la gestión de contratos en empresas y firmas legales.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 60,
        nombre: "Plataforma de Aprendizaje Colaborativo",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Desarrollo de un sistema para la creación y gestión de grupos de estudio y aprendizaje colaborativo.",
        objetivo: "Fomentar el aprendizaje colaborativo entre estudiantes.",
        estado: "Propuesta",
        duracion: "9 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 61,
        nombre: "Aplicación de Gestión de Proyectos Personales",
        tipo: "Móvil",
        sector: "Productividad",
        descripcion: "Creación de una app que permita a los usuarios planificar y gestionar sus proyectos personales.",
        objetivo: "Mejorar la organización y seguimiento de proyectos personales.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 62,
        nombre: "Sistema de Gestión de Programas de Becas",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Implementación de una plataforma para la gestión y asignación de becas académicas.",
        objetivo: "Facilitar la organización y seguimiento de programas de becas.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 63,
        nombre: "Plataforma de Gestión de Eventos de Networking",
        tipo: "Web",
        sector: "Negocios",
        descripcion: "Desarrollo de un sistema para la organización y gestión de eventos de networking empresarial.",
        objetivo: "Fomentar la creación de redes de contactos profesionales.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 64,
        nombre: "Aplicación de Seguimiento de Lectura",
        tipo: "Móvil",
        sector: "Educación",
        descripcion: "Creación de una app que permita a los usuarios llevar un registro y seguimiento de sus lecturas.",
        objetivo: "Fomentar el hábito de lectura y la organización académica.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 65,
        nombre: "Sistema de Gestión de Reservas de Espacios Deportivos",
        tipo: "Web/Móvil",
        sector: "Deportes",
        descripcion: "Implementación de una plataforma para la reserva y gestión de espacios deportivos.",
        objetivo: "Facilitar la organización y uso de instalaciones deportivas.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 66,
        nombre: "Plataforma de Gestión de Inscripciones en Talleres",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Desarrollo de un sistema para la gestión de inscripciones y seguimiento de talleres educativos y culturales.",
        objetivo: "Facilitar la organización y acceso a talleres y cursos.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 67,
        nombre: "Aplicación de Gestión de Relaciones Comerciales",
        tipo: "Móvil",
        sector: "Negocios",
        descripcion: "Creación de una app para la gestión y seguimiento de relaciones comerciales y contactos de negocios.",
        objetivo: "Mejorar la organización y seguimiento de contactos profesionales.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 68,
        nombre: "Sistema de Gestión de Espacios de Coworking",
        tipo: "Web",
        sector: "Negocios",
        descripcion: "Implementación de una plataforma para la reserva y gestión de espacios de coworking.",
        objetivo: "Facilitar la organización y uso de espacios compartidos de trabajo.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 69,
        nombre: "Plataforma de Gestión de Actividades de Voluntariado",
        tipo: "Web",
        sector: "Comunidad",
        descripcion: "Desarrollo de un sistema para la organización y seguimiento de actividades de voluntariado.",
        objetivo: "Fomentar la participación y organización de programas de voluntariado.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 70,
        nombre: "Aplicación de Gestión de Viajes de Negocios",
        tipo: "Móvil",
        sector: "Negocios",
        descripcion: "Creación de una app que permita a los usuarios planificar y gestionar viajes de negocios, incluyendo reuniones y reservas.",
        objetivo: "Facilitar la organización y seguimiento de viajes empresariales.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 71,
        nombre: "Sistema de Gestión de Donaciones",
        tipo: "Web",
        sector: "Comunidad",
        descripcion: "Implementación de una plataforma para la gestión y seguimiento de donaciones a causas benéficas.",
        objetivo: "Facilitar la recaudación y distribución de fondos para causas sociales.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 72,
        nombre: "Plataforma de Gestión de Almacenes",
        tipo: "Web",
        sector: "Logística",
        descripcion: "Desarrollo de un sistema para la administración y gestión de almacenes y bodegas en empresas.",
        objetivo: "Mejorar la eficiencia en la organización y gestión de inventarios.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 73,
        nombre: "Aplicación de Seguimiento de Metas de Fitness",
        tipo: "Móvil",
        sector: "Salud",
        descripcion: "Creación de una app que permita a los usuarios establecer y seguir sus metas de fitness y bienestar.",
        objetivo: "Fomentar la actividad física y el bienestar personal.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 74,
        nombre: "Sistema de Gestión de Reservas en Restaurantes",
        tipo: "Web/Móvil",
        sector: "Servicios",
        descripcion: "Implementación de una plataforma para la reserva y gestión de mesas en restaurantes.",
        objetivo: "Facilitar la organización y seguimiento de reservas en restaurantes.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Desarrollo Móvil"]
    },
    {
        id: 75,
        nombre: "Plataforma de Gestión de Entrenamientos en Línea",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Desarrollo de un sistema para la creación y gestión de cursos y entrenamientos en línea.",
        objetivo: "Facilitar el acceso a la formación continua y la educación a distancia.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 76,
        nombre: "Plataforma de Gestión de Encuestas y Satisfacción",
        tipo: "Web",
        sector: "Investigación",
        descripcion: "Desarrollo de un sistema para la creación, distribución y análisis de encuestas de satisfacción de clientes o empleados.",
        objetivo: "Mejorar la recolección y análisis de datos de encuestas.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "UX"]
    },
    {
        id: 77,
        nombre: "Aplicación de Gestión de Proyectos de Voluntariado",
        tipo: "Móvil",
        sector: "Comunidad",
        descripcion: "Creación de una app que permita organizar y gestionar proyectos de voluntariado, incluyendo la inscripción de voluntarios.",
        objetivo: "Fomentar la participación en actividades de voluntariado.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 78,
        nombre: "Sistema de Gestión de Servicios de Reparación",
        tipo: "Web",
        sector: "Servicios",
        descripcion: "Implementación de una plataforma para la gestión y seguimiento de órdenes de reparación de equipos o electrodomésticos.",
        objetivo: "Facilitar la organización y seguimiento de reparaciones.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 79,
        nombre: "Plataforma de Gestión de Alianzas Estratégicas",
        tipo: "Web",
        sector: "Negocios",
        descripcion: "Desarrollo de un sistema para la creación y gestión de alianzas estratégicas entre empresas.",
        objetivo: "Facilitar la colaboración y creación de nuevas oportunidades de negocio.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 80,
        nombre: "Aplicación de Seguimiento de Proyectos de Investigación",
        tipo: "Móvil",
        sector: "Educación",
        descripcion: "Creación de una app para la planificación y seguimiento de proyectos de investigación académica.",
        objetivo: "Mejorar la organización y seguimiento de investigaciones académicas.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 81,
        nombre: "Sistema de Gestión de Servicios de Cuidado Infantil",
        tipo: "Web",
        sector: "Servicios",
        descripcion: "Implementación de una plataforma para la administración de servicios de cuidado infantil, incluyendo reservas y seguimiento.",
        objetivo: "Facilitar la organización y seguimiento de servicios de cuidado infantil.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 82,
        nombre: "Plataforma de Gestión de Eventos Deportivos",
        tipo: "Web",
        sector: "Deportes",
        descripcion: "Desarrollo de un sistema para la gestión y organización de eventos deportivos, incluyendo inscripción de participantes y programación.",
        objetivo: "Facilitar la organización y gestión de eventos deportivos.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 83,
        nombre: "Aplicación de Gestión de Gastos Personales",
        tipo: "Móvil",
        sector: "Finanzas",
        descripcion: "Creación de una app que permita a los usuarios registrar y gestionar sus gastos personales de manera eficiente.",
        objetivo: "Mejorar la gestión financiera personal.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 84,
        nombre: "Sistema de Gestión de Espacios de Estacionamiento",
        tipo: "Web",
        sector: "Transporte",
        descripcion: "Implementación de una plataforma para la reserva y gestión de espacios de estacionamiento en áreas urbanas.",
        objetivo: "Facilitar la organización y uso eficiente de espacios de estacionamiento.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 85,
        nombre: "Plataforma de Gestión de Programas de Fidelización",
        tipo: "Web",
        sector: "Marketing",
        descripcion: "Desarrollo de un sistema para la creación y gestión de programas de fidelización de clientes.",
        objetivo: "Mejorar la retención y satisfacción de clientes.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 86,
        nombre: "Aplicación de Gestión de Menús para Restaurantes",
        tipo: "Móvil",
        sector: "Servicios",
        descripcion: "Creación de una app que permita a los restaurantes gestionar sus menús, incluyendo actualización de precios y disponibilidad.",
        objetivo: "Facilitar la gestión y actualización de menús en restaurantes.",
        estado: "Propuesta",
        duracion: "7 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 87,
        nombre: "Sistema de Gestión de Inventarios para Comercio Electrónico",
        tipo: "Web",
        sector: "Comercio",
        descripcion: "Implementación de una plataforma para la gestión de inventarios en tiendas de comercio electrónico.",
        objetivo: "Mejorar la organización y seguimiento de inventarios en e-commerce.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 88,
        nombre: "Plataforma de Gestión de Consultorías Empresariales",
        tipo: "Web",
        sector: "Negocios",
        descripcion: "Desarrollo de un sistema para la gestión y seguimiento de consultorías empresariales, incluyendo la asignación de consultores.",
        objetivo: "Facilitar la organización y gestión de servicios de consultoría.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 89,
        nombre: "Aplicación de Gestión de Tareas Colaborativas",
        tipo: "Móvil",
        sector: "Productividad",
        descripcion: "Creación de una app para la planificación y gestión de tareas en equipos de trabajo colaborativos.",
        objetivo: "Mejorar la organización y seguimiento de tareas en equipos.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 90,
        nombre: "Sistema de Gestión de Propiedades Inmobiliarias",
        tipo: "Web",
        sector: "Bienes Raíces",
        descripcion: "Implementación de una plataforma para la administración y gestión de propiedades inmobiliarias, incluyendo alquileres y ventas.",
        objetivo: "Facilitar la gestión y administración de propiedades inmobiliarias.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 91,
        nombre: "Plataforma de Gestión de Cursos en Línea",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Desarrollo de un sistema para la creación y gestión de cursos y talleres en línea.",
        objetivo: "Facilitar la organización y acceso a formación continua en línea.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 92,
        nombre: "Aplicación de Seguimiento de Actividades de Fitness",
        tipo: "Móvil",
        sector: "Salud",
        descripcion: "Creación de una app que permita a los usuarios planificar y seguir sus actividades de fitness y bienestar.",
        objetivo: "Fomentar la actividad física y el bienestar personal.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: ["Desarrollo Móvil", "UX"]
    },
    {
        id: 93,
        nombre: "Sistema de Gestión de Reclamos y Garantías",
        tipo: "Web",
        sector: "Servicios",
        descripcion: "Implementación de una plataforma para la gestión y seguimiento de reclamos y garantías de productos o servicios.",
        objetivo: "Facilitar la resolución de reclamos y el seguimiento de garantías.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Seguridad"]
    },
    {
        id: 94,
        nombre: "Plataforma de Gestión de Servicios de Consultoría en TI",
        tipo: "Web",
        sector: "Tecnología",
        descripcion: "Desarrollo de un sistema para la gestión y seguimiento de servicios de consultoría en tecnología de la información.",
        objetivo: "Facilitar la organización y seguimiento de proyectos de consultoría en TI.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: ["Backend", "Frontend", "Base de Datos"]
    },
    {
        id: 95,
        nombre: "Aplicación de Gestión de Rutinas de Estudio",
        tipo: "Móvil",
        sector: "Educación",
        descripcion: "Creación de una app que permita a los estudiantes planificar y seguir sus rutinas de estudio diarias o semanales.",
        objetivo: "Mejorar la organización y efectividad en el estudio académico.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: "Desarrollo Móvil, UX"
    },
    {
        id: 96,
        nombre: "Sistema de Gestión de Proyectos de Investigación y Desarrollo",
        tipo: "Web",
        sector: "Innovación",
        descripcion: "Implementación de una plataforma para la gestión y seguimiento de proyectos de investigación y desarrollo en empresas o instituciones.",
        objetivo: "Facilitar la organización y seguimiento de proyectos de I+D.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: "Backend, Frontend, Seguridad"
    },
    {
        id: 97,
        nombre: "Plataforma de Gestión de Reservas para Centros Deportivos",
        tipo: "Web",
        sector: "Deportes",
        descripcion: "Desarrollo de un sistema para la gestión y reserva de instalaciones deportivas en gimnasios o clubes.",
        objetivo: "Facilitar la organización y uso eficiente de instalaciones deportivas.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: "Backend, Frontend, Seguridad"
        },
    {
        id: 98,
        nombre: "Aplicación de Gestión de Compromisos Sociales",
        tipo: "Móvil",
        sector: "Productividad",
        descripcion: "Creación de una app para la planificación y seguimiento de compromisos sociales y eventos personales.",
        objetivo: "Mejorar la organización y seguimiento de actividades sociales.",
        estado: "Propuesta",
        duracion: "6 semanas",
        dificultad: 3,
        tecnologias: "Desarrollo Móvil, UX"
    },
    {
        id: 99,
        nombre: "Sistema de Gestión de Programas de Mentoría",
        tipo: "Web",
        sector: "Educación",
        descripcion: "Implementación de una plataforma para la creación y gestión de programas de mentoría académica o profesional.",
        objetivo: "Facilitar la organización y seguimiento de programas de mentoría.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: "Backend, Fronten, Seguridad"
    },
    {
        id: 100,
        nombre: "Plataforma de Gestión de Reservas en Centros Culturales",
        tipo: "Web",
        sector: "Cultura",
        descripcion: "Desarrollo de un sistema para la reserva y gestión de actividades en centros culturales o museos.",
        objetivo: "Facilitar la organización y acceso a eventos culturales.",
        estado: "Propuesta",
        duracion: "8 semanas",
        dificultad: 4,
        tecnologias: "Backend Frontend Base de Datos"
    }
];
let selectedProjects = [];
let selectedJustifications = {};
let currentProjectIndex = null;

const projectDetailsModal = document.getElementById('project-details-modal');
const justificationModal = document.getElementById('justification-modal');
const justificationText = document.getElementById('justification-text');
const submitJustificationButton = document.getElementById('submit-justification');
const selectProjectButton = document.getElementById('select-project');
const cancelDetailsButton = document.getElementById('cancel-details');
const cancelJustificationButton = document.getElementById('cancel-justification');
const maxProjects = 3; // Máximo de proyectos que se pueden seleccionar

// Función para generar las tarjetas de proyectos
function generateProjectCards() {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = ''; // Limpiar contenido previo

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'project-item');
        card.setAttribute('data-index', index);

        card.innerHTML = `
            <h3>${project.nombre}</h3>
            <p><strong>Tipo de App:</strong> ${project.tipo}</p>
            <p><strong>Área:</strong> ${project.sector}</p>
        `;

        card.addEventListener('click', () => {
            if (selectedProjects.length >= maxProjects && !selectedProjects.includes(index)) {
                alert('No puedes seleccionar más de 3 proyectos.');
                return;
            }

            document.getElementById('project-description').textContent = project.descripcion;
            document.getElementById('project-objectives').textContent = project.objetivo;
            document.getElementById('project-status').textContent = project.estado;
            document.getElementById('project-duration').textContent = project.duracion;
            document.getElementById('project-members').textContent = project.dificultad;
            document.getElementById('project-specialties').textContent = project.tecnologias;

            currentProjectIndex = index;
            projectDetailsModal.classList.remove('hidden');
        });

        cardsContainer.appendChild(card);
    });
}

// Función para actualizar la tabla con los proyectos seleccionados
function updateJustificationTable() {
    const tableBody = document.getElementById('tablaJustificacion');
    tableBody.innerHTML = ''; // Limpiar contenido previo

    selectedProjects.forEach((index) => {
        const project = projects[index];
        const justification = selectedJustifications[index] || '';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${project.nombre}</td>
            <td>${justification}</td>
            <td class="delete-column"><button class="delete-btn" data-index="${index}">X</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Añadir evento para eliminar proyectos de la tabla de justificación
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            selectedProjects = selectedProjects.filter(id => id !== index);
            delete selectedJustifications[index];

            // Restaurar el estilo de la tarjeta eliminada
            const projectCard = document.querySelector(`.project-item[data-index="${index}"]`);
            projectCard.classList.remove('selected');

            updateJustificationTable(); // Actualizar tabla después de eliminar
        });
    });
}

generateProjectCards();

// Evento para abrir el modal de justificación al seleccionar un proyecto
selectProjectButton.addEventListener('click', () => {
    if (selectedProjects.length >= maxProjects && !selectedProjects.includes(currentProjectIndex)) {
        alert('No puedes seleccionar más de 3 proyectos.');
        return;
    }

    if (currentProjectIndex !== null) {
        projectDetailsModal.classList.add('hidden'); // Ocultar modal de detalles
        justificationModal.classList.remove('hidden'); // Mostrar modal de justificación
    } else {
        alert('Selecciona un proyecto primero.');
    }
});

cancelDetailsButton.addEventListener('click', () => {
    projectDetailsModal.classList.add('hidden');
    currentProjectIndex = null; // Cancelar la selección
});

cancelJustificationButton.addEventListener('click', () => {
    justificationModal.classList.add('hidden');
    currentProjectIndex = null; // Cancelar la selección
});

submitJustificationButton.addEventListener('click', () => {
    const justification = justificationText.value.trim();
    if (justification) {
        if (!selectedProjects.includes(currentProjectIndex)) {
            if (selectedProjects.length >= maxProjects) {
                alert('No puedes seleccionar más de 3 proyectos.');
                return;
            }

            selectedProjects.push(currentProjectIndex);
        }

        selectedJustifications[currentProjectIndex] = justification;

        // Cambiar el color de la tarjeta seleccionada
        document.querySelector(`.project-item[data-index="${currentProjectIndex}"]`).classList.add('selected');

        justificationText.value = '';
        updateJustificationTable(); // Actualizar tabla de justificación
        justificationModal.classList.add('hidden');
    } else {
        alert('Por favor, proporciona una justificación.');
    }
});


