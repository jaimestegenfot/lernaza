import { Curso } from '../components/CardCurso';

export interface CursoDetallado extends Curso {
  precio: number;
  rating: number;
  totalEstudiantes: number;
  objetivos: string[];
  requisitos: string[];
  temario: { modulo: string; lecciones: string[] }[];
  certificado: boolean;
  fechaCreacion: string;
  ultimaActualizacion: string;
  videoIntro: string;
  recursos: string[];
}

export const cursos: CursoDetallado[] = [
  {
    id: 1,
    titulo: 'Introducción a la Programación',
    descripcion: 'Aprende los conceptos básicos de la programación con ejemplos prácticos y ejercicios interactivos.',
    instructor: 'María López',
    duracion: '8 semanas',
    categoria: 'Programación',
    nivel: 'Principiante',
    imagen: 'https://fundaciontelefonica.com.ec/wp-content/uploads/2023/01/02_Introduccio%CC%81n-a-la-programacion.jpg',
    precio: 79.99,
    rating: 4.7,
    totalEstudiantes: 1240,
    objetivos: [
      'Comprender los fundamentos de la programación',
      'Aprender sintaxis básica de JavaScript',
      'Resolver problemas usando algoritmos',
      'Crear aplicaciones web simples',
      'Desarrollar lógica de programación'
    ],
    requisitos: [
      'No se requiere experiencia previa',
      'Computadora con conexión a internet',
      'Navegador web actualizado',
      'Ganas de aprender'
    ],
    temario: [
      {
        modulo: 'Fundamentos de Programación',
        lecciones: ['Variables y tipos de datos', 'Operadores', 'Estructuras de control']
      },
      {
        modulo: 'JavaScript Básico',
        lecciones: ['Sintaxis básica', 'Funciones', 'Arrays y objetos']
      },
      {
        modulo: 'Desarrollo Web',
        lecciones: ['HTML básico', 'CSS introducción', 'DOM manipulation']
      }
    ],
    certificado: true,
    fechaCreacion: '2024-01-15',
    ultimaActualizacion: '2024-12-01',
    videoIntro: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
    recursos: ['Ejercicios prácticos', 'Código fuente', 'Documentación PDF', 'Comunidad Discord']
  },
  {
    id: 2,
    titulo: 'Diseño Web Moderno',
    descripcion: 'Descubre cómo crear sitios web atractivos y responsivos usando las últimas tecnologías.',
    instructor: 'Juan Pérez',
    duracion: '6 semanas',
    categoria: 'Diseño',
    nivel: 'Intermedio',
    imagen: 'https://media.istockphoto.com/id/1503858430/es/vector/concepto-de-desarrollo-de-software-de-sitios-web-sitio-de-dise%C3%B1o-web-y-aplicaci%C3%B3n-m%C3%B3vil-en.jpg?s=612x612&w=0&k=20&c=mZoL9erxzcblOQHoprcasZSo1hKHTQq1-lnu2n_9Pto=',
    precio: 99.99,
    rating: 4.9,
    totalEstudiantes: 890,
    objetivos: [
      'Dominar CSS Grid y Flexbox',
      'Crear diseños responsivos modernos',
      'Usar herramientas de diseño como Figma',
      'Implementar animaciones CSS',
      'Optimizar rendimiento web'
    ],
    requisitos: [
      'Conocimientos básicos de HTML y CSS',
      'Familiaridad con navegadores web',
      'Editor de código (VS Code recomendado)',
      'Cuenta en Figma (gratuita)'
    ],
    temario: [
      {
        modulo: 'Diseño Responsivo',
        lecciones: ['Mobile-first design', 'CSS Grid avanzado', 'Flexbox moderno']
      },
      {
        modulo: 'Herramientas de Diseño',
        lecciones: ['Figma fundamentals', 'Prototipado', 'Sistema de componentes']
      },
      {
        modulo: 'Optimización y Performance',
        lecciones: ['Core Web Vitals', 'Optimización de imágenes', 'CSS performance']
      }
    ],
    certificado: true,
    fechaCreacion: '2024-02-20',
    ultimaActualizacion: '2024-11-15',
    videoIntro: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
    recursos: ['Templates de diseño', 'Archivos Figma', 'Checklist de optimización', 'Galería de inspiración']
  },
  {
    id: 3,
    titulo: 'Análisis de Datos con Python',
    descripcion: 'Domina las herramientas esenciales para analizar y visualizar datos utilizando Python.',
    instructor: 'Ana Torres',
    duracion: '10 semanas',
    categoria: 'Datos',
    nivel: 'Avanzado',
    imagen: 'https://www.codigofuente.org/wp-content/uploads/2018/10/stat-670x400.jpg',
    precio: 149.99,
    rating: 4.8,
    totalEstudiantes: 650,
    objetivos: [
      'Manipular datos con Pandas',
      'Crear visualizaciones con Matplotlib y Seaborn',
      'Aplicar estadística descriptiva e inferencial',
      'Desarrollar modelos de machine learning básicos',
      'Presentar insights de forma efectiva'
    ],
    requisitos: [
      'Conocimientos básicos de Python',
      'Matemáticas nivel bachillerato',
      'Python 3.8+ instalado',
      'Jupyter Notebook o Google Colab'
    ],
    temario: [
      {
        modulo: 'Manipulación de Datos',
        lecciones: ['Pandas fundamentals', 'Limpieza de datos', 'Transformaciones']
      },
      {
        modulo: 'Visualización',
        lecciones: ['Matplotlib básico', 'Seaborn avanzado', 'Plotly interactivo']
      },
      {
        modulo: 'Machine Learning',
        lecciones: ['Scikit-learn intro', 'Regresión lineal', 'Clasificación básica']
      }
    ],
    certificado: true,
    fechaCreacion: '2024-03-10',
    ultimaActualizacion: '2024-12-05',
    videoIntro: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI',
    recursos: ['Datasets de práctica', 'Notebooks completos', 'Cheat sheets', 'Casos de estudio reales']
  },
  {
    id: 4,
    titulo: 'React y TypeScript Avanzado',
    descripcion: 'Construye aplicaciones web modernas y escalables con React y TypeScript.',
    instructor: 'Carlos Mendoza',
    duracion: '12 semanas',
    categoria: 'Programación',
    nivel: 'Avanzado',
    imagen: 'https://devsarticles.com/wp-content/uploads/2024/02/react-with-typescript.png',
    precio: 179.99,
    rating: 4.9,
    totalEstudiantes: 420,
    objetivos: [
      'Dominar TypeScript con React',
      'Implementar patrones de arquitectura avanzados',
      'Gestionar estado con Redux Toolkit',
      'Optimizar performance de aplicaciones',
      'Implementar testing comprehensivo'
    ],
    requisitos: [
      'Experiencia sólida con JavaScript',
      'Conocimientos básicos de React',
      'Familiaridad con Node.js y npm',
      'Editor con soporte TypeScript'
    ],
    temario: [
      {
        modulo: 'TypeScript Avanzado',
        lecciones: ['Tipos avanzados', 'Generics', 'Utility types']
      },
      {
        modulo: 'React Patterns',
        lecciones: ['Custom hooks', 'Compound components', 'Render props']
      },
      {
        modulo: 'Testing y Performance',
        lecciones: ['Jest y Testing Library', 'React.memo', 'Code splitting']
      }
    ],
    certificado: true,
    fechaCreacion: '2024-04-05',
    ultimaActualizacion: '2024-11-30',
    videoIntro: 'https://youtu.be/35k7Ag_TWng?si=uUJJtJbHdwlRulmS',
    recursos: ['Proyecto completo', 'Configuraciones ESLint', 'Performance tools', 'Testing templates']
  },
  {
    id: 5,
    titulo: 'UX/UI Design Fundamentals',
    descripcion: 'Aprende los principios fundamentales del diseño de experiencia e interfaz de usuario.',
    instructor: 'Sofia Ruiz',
    duracion: '7 semanas',
    categoria: 'Diseño',
    nivel: 'Principiante',
    imagen: 'https://media.geeksforgeeks.org/wp-content/uploads/20231006153825/Fundamentals-of-Solid-UIUX-Design-copy.webp',
    precio: 89.99,
    rating: 4.6,
    totalEstudiantes: 980,
    objetivos: [
      'Comprender principios de UX/UI',
      'Crear wireframes y prototipos',
      'Realizar research de usuarios',
      'Diseñar sistemas de componentes',
      'Conducir usability testing'
    ],
    requisitos: [
      'No se requiere experiencia previa',
      'Computadora con navegador web',
      'Cuenta gratuita en Figma',
      'Curiosidad por el diseño'
    ],
    temario: [
      {
        modulo: 'Fundamentos UX',
        lecciones: ['Design thinking', 'User research', 'Personas y journey maps']
      },
      {
        modulo: 'UI Design',
        lecciones: ['Principios de diseño', 'Tipografía', 'Color theory']
      },
      {
        modulo: 'Prototipado',
        lecciones: ['Wireframing', 'Figma avanzado', 'Usability testing']
      }
    ],
    certificado: true,
    fechaCreacion: '2024-05-12',
    ultimaActualizacion: '2024-11-20',
    videoIntro: 'https://example.com/video5',
    recursos: ['Templates Figma', 'Design systems', 'Research templates', 'Portfolio examples']
  },
  {
    id: 6,
    titulo: 'Machine Learning con TensorFlow',
    descripcion: 'Desarrolla modelos de inteligencia artificial usando TensorFlow y Python.',
    instructor: 'Roberto Silva',
    duracion: '14 semanas',
    categoria: 'Datos',
    nivel: 'Avanzado',
    imagen: 'https://i.ytimg.com/vi/MotG3XI2qSs/maxresdefault.jpg',
    precio: 199.99,
    rating: 4.7,
    totalEstudiantes: 340,
    objetivos: [
      'Construir redes neuronales con TensorFlow',
      'Implementar CNN para visión por computadora',
      'Desarrollar modelos NLP',
      'Optimizar y desplegar modelos',
      'Aplicar técnicas de transfer learning'
    ],
    requisitos: [
      'Python intermedio-avanzado',
      'Matemáticas: álgebra lineal y cálculo',
      'Conocimientos básicos de ML',
      'GPU recomendada (o Google Colab Pro)'
    ],
    temario: [
      {
        modulo: 'TensorFlow Fundamentals',
        lecciones: ['Tensors y operations', 'Keras API', 'Model building']
      },
      {
        modulo: 'Deep Learning',
        lecciones: ['Neural networks', 'CNNs', 'RNNs y LSTMs']
      },
      {
        modulo: 'Deployment',
        lecciones: ['TensorFlow Serving', 'Model optimization', 'Edge deployment']
      }
    ],
    certificado: true,
    fechaCreacion: '2024-06-08',
    ultimaActualizacion: '2024-12-03',
    videoIntro: 'https://example.com/video6',
    recursos: ['Datasets especializados', 'Modelos pre-entrenados', 'Deployment scripts', 'Research papers']
  },
  {
    id: 7,
    titulo: 'Node.js y Express Backend',
    descripcion: 'Crea APIs robustas y escalables con Node.js y Express framework.',
    instructor: 'Elena Morales',
    duracion: '9 semanas',
    categoria: 'Programación',
    nivel: 'Intermedio',
    imagen: 'https://miro.medium.com/v2/resize:fit:700/0*p_3w3gUfps6GX-QP.png',
    precio: 119.99,
    rating: 4.8,
    totalEstudiantes: 720,
    objetivos: [
      'Desarrollar APIs RESTful con Express',
      'Implementar autenticación JWT',
      'Trabajar con bases de datos MongoDB',
      'Aplicar mejores prácticas de seguridad',
      'Desplegar aplicaciones en producción'
    ],
    requisitos: [
      'JavaScript intermedio',
      'Conocimientos básicos de HTTP',
      'Node.js y npm instalados',
      'Familiaridad con línea de comandos'
    ],
    temario: [
      {
        modulo: 'Node.js Fundamentals',
        lecciones: ['Event loop', 'Modules system', 'File system']
      },
      {
        modulo: 'Express Framework',
        lecciones: ['Routing', 'Middleware', 'Error handling']
      },
      {
        modulo: 'Database y Security',
        lecciones: ['MongoDB con Mongoose', 'JWT authentication', 'Security best practices']
      }
    ],
    certificado: true,
    fechaCreacion: '2024-07-15',
    ultimaActualizacion: '2024-11-25',
    videoIntro: 'https://example.com/video7',
    recursos: ['API starter template', 'Postman collections', 'Deployment guides', 'Security checklists']
  },
  {
    id: 8,
    titulo: 'Diseño Gráfico Digital',
    descripcion: 'Domina las herramientas digitales para crear diseños impactantes y profesionales.',
    instructor: 'Miguel Vega',
    duracion: '5 semanas',
    categoria: 'Diseño',
    nivel: 'Principiante',
    imagen: 'https://www.microsystems-iquitos.com/images/modulos_small/000002.jpg',
    precio: 69.99,
    rating: 4.5,
    totalEstudiantes: 1150,
    objetivos: [
      'Manejar Adobe Creative Suite',
      'Crear identidades visuales completas',
      'Diseñar para medios digitales e impresos',
      'Aplicar teoría del color y tipografía',
      'Desarrollar portfolio profesional'
    ],
    requisitos: [
      'No se requiere experiencia previa',
      'Computadora con 8GB RAM mínimo',
      'Adobe Creative Cloud (trial disponible)',
      'Pasión por el diseño visual'
    ],
    temario: [
      {
        modulo: 'Fundamentos del Diseño',
        lecciones: ['Principios de composición', 'Teoría del color', 'Tipografía básica']
      },
      {
        modulo: 'Herramientas Adobe',
        lecciones: ['Photoshop essentials', 'Illustrator vectorial', 'InDesign layout']
      },
      {
        modulo: 'Proyectos Prácticos',
        lecciones: ['Logo design', 'Branding completo', 'Diseño editorial']
      }
    ],
    certificado: true,
    fechaCreacion: '2024-08-20',
    ultimaActualizacion: '2024-11-10',
    videoIntro: 'https://example.com/video8',
    recursos: ['Assets de diseño', 'Brushes y textures', 'Templates profesionales', 'Portfolio showcase']
  },
  {
    id: 9,
    titulo: 'Álgebra Básica',
    descripcion: 'Domina los fundamentos del álgebra: ecuaciones, polinomios y factorización.',
    instructor: 'Luis Gómez',
    duracion: '6 semanas',
    categoria: 'Matemáticas',
    nivel: 'Principiante',
    imagen: '/globe.svg',
    precio: 59.99,
    rating: 4.6,
    totalEstudiantes: 800,
    objetivos: [
      'Resolver ecuaciones lineales',
      'Entender polinomios y operaciones',
      'Aplicar factorización',
      'Resolver problemas de la vida real',
      'Preparar para álgebra intermedia'
    ],
    requisitos: ['Conocimientos básicos de aritmética'],
    temario: [
      { modulo: 'Ecuaciones', lecciones: ['Ecuaciones simples', 'Ecuaciones con paréntesis'] },
      { modulo: 'Polinomios', lecciones: ['Suma y resta', 'Multiplicación', 'División'] },
      { modulo: 'Factorización', lecciones: ['Factor común', 'Trinomios'] }
    ],
    certificado: true,
    fechaCreacion: '2024-09-01',
    ultimaActualizacion: '2024-12-10',
    videoIntro: 'https://www.youtube.com/watch?v=QYUb5F6pS1w',
    recursos: ['Ejercicios PDF', 'Videos extra', 'Foro de dudas']
  },
  {
    id: 10,
    titulo: 'Calculo Diferencial',
    descripcion: 'Aprende límites, derivadas y aplicaciones del cálculo diferencial.',
    instructor: 'Andrea Salas',
    duracion: '8 semanas',
    categoria: 'Matemáticas',
    nivel: 'Intermedio',
    imagen: '/window.svg',
    precio: 89.99,
    rating: 4.7,
    totalEstudiantes: 600,
    objetivos: [
      'Calcular límites y derivadas',
      'Aplicar reglas de derivación',
      'Resolver problemas de optimización',
      'Interpretar gráficas',
      'Preparar para cálculo integral'
    ],
    requisitos: ['Álgebra básica', 'Funciones elementales'],
    temario: [
      { modulo: 'Límites', lecciones: ['Definición', 'Propiedades', 'Indeterminaciones'] },
      { modulo: 'Derivadas', lecciones: ['Regla de la suma', 'Regla del producto', 'Regla de la cadena'] },
      { modulo: 'Aplicaciones', lecciones: ['Optimización', 'Tasa de cambio'] }
    ],
    certificado: true,
    fechaCreacion: '2024-09-10',
    ultimaActualizacion: '2024-12-10',
    videoIntro: 'https://www.youtube.com/watch?v=ANyVpMS3HLQ',
    recursos: ['Guía de ejercicios', 'Simulador de gráficas', 'Foro de preguntas']
  },
  {
    id: 11,
    titulo: 'Fisica Mecanica',
    descripcion: 'Estudia el movimiento, fuerzas y energía en la física clásica.',
    instructor: 'Carlos Ruiz',
    duracion: '7 semanas',
    categoria: 'Física',
    nivel: 'Intermedio',
    imagen: 'https://static8.depositphotos.com/1389325/1020/v/450/depositphotos_10204709-stock-illustration-physical-formulas-and-phenomenons-on.jpg',
    precio: 79.99,
    rating: 4.5,
    totalEstudiantes: 500,
    objetivos: [
      'Analizar el movimiento rectilíneo',
      'Aplicar leyes de Newton',
      'Resolver problemas de energía',
      'Entender colisiones',
      'Preparar para física avanzada'
    ],
    requisitos: ['Matemáticas básicas'],
    temario: [
      { modulo: 'Cinemática', lecciones: ['Velocidad', 'Aceleración', 'Gráficas'] },
      { modulo: 'Dinámica', lecciones: ['Fuerzas', 'Leyes de Newton'] },
      { modulo: 'Energía', lecciones: ['Trabajo', 'Energía cinética', 'Potencia'] }
    ],
    certificado: true,
    fechaCreacion: '2024-09-15',
    ultimaActualizacion: '2024-12-10',
    videoIntro: 'https://www.youtube.com/watch?v=ZihywtixUYo',
    recursos: ['Simulaciones', 'Ejercicios resueltos', 'Foro de física']
  },
  {
    id: 12,
    titulo: 'Historia Universal Moderna',
    descripcion: 'Explora los eventos clave desde el siglo XV hasta la actualidad.',
    instructor: 'Patricia León',
    duracion: '10 semanas',
    categoria: 'Historia',
    nivel: 'Intermedio',
    imagen: '/file.svg',
    precio: 69.99,
    rating: 4.4,
    totalEstudiantes: 400,
    objetivos: [
      'Comprender la Edad Moderna',
      'Analizar revoluciones históricas',
      'Relacionar eventos globales',
      'Desarrollar pensamiento crítico',
      'Preparar ensayos históricos'
    ],
    requisitos: ['Interés por la historia'],
    temario: [
      { modulo: 'Edad Moderna', lecciones: ['Renacimiento', 'Reforma', 'Descubrimientos'] },
      { modulo: 'Revoluciones', lecciones: ['Francesa', 'Industrial', 'Rusa'] },
      { modulo: 'Siglo XX', lecciones: ['Guerras mundiales', 'Guerra Fría', 'Globalización'] }
    ],
    certificado: true,
    fechaCreacion: '2024-09-20',
    ultimaActualizacion: '2024-12-10',
    videoIntro: 'https://www.youtube.com/watch?v=QYUb5F6pS1w',
    recursos: ['Línea de tiempo', 'Mapas históricos', 'Foro de debate']
  },
  {
    id: 13,
    titulo: 'Inglés para Principiantes',
    descripcion: 'Aprende inglés desde cero: vocabulario, gramática y conversación básica.',
    instructor: 'Emily Smith',
    duracion: '12 semanas',
    categoria: 'Idiomas',
    nivel: 'Principiante',
    imagen: '/globe.svg',
    precio: 99.99,
    rating: 4.8,
    totalEstudiantes: 1200,
    objetivos: [
      'Dominar vocabulario esencial',
      'Formar frases simples',
      'Entender gramática básica',
      'Practicar conversación',
      'Preparar para exámenes básicos'
    ],
    requisitos: ['Ninguno'],
    temario: [
      { modulo: 'Vocabulario', lecciones: ['Saludos', 'Números', 'Colores'] },
      { modulo: 'Gramática', lecciones: ['Verbo to be', 'Presente simple', 'Artículos'] },
      { modulo: 'Conversación', lecciones: ['Presentarse', 'Pedir direcciones', 'Hacer compras'] }
    ],
    certificado: true,
    fechaCreacion: '2024-09-25',
    ultimaActualizacion: '2024-12-10',
    videoIntro: 'https://www.youtube.com/watch?v=8jP6xpEZCw8',
    recursos: ['Audios', 'Ejercicios interactivos', 'Foro de idiomas']
  },
  {
    id: 14,
    titulo: 'Emprendimiento y Startups',
    descripcion: 'Aprende a crear y escalar tu propio negocio desde cero.',
    instructor: 'Javier Torres',
    duracion: '8 semanas',
    categoria: 'Negocios',
    nivel: 'Intermedio',
    imagen: '/window.svg',
    precio: 129.99,
    rating: 4.7,
    totalEstudiantes: 350,
    objetivos: [
      'Desarrollar ideas de negocio',
      'Validar modelos de negocio',
      'Crear un pitch efectivo',
      'Buscar inversión',
      'Escalar una startup'
    ],
    requisitos: ['Interés en negocios', 'Creatividad'],
    temario: [
      { modulo: 'Ideación', lecciones: ['Creatividad', 'Identificación de problemas'] },
      { modulo: 'Validación', lecciones: ['MVP', 'Lean Startup', 'Feedback'] },
      { modulo: 'Crecimiento', lecciones: ['Pitch', 'Inversión', 'Escalabilidad'] }
    ],
    certificado: true,
    fechaCreacion: '2024-09-28',
    ultimaActualizacion: '2024-12-10',
    videoIntro: 'https://www.youtube.com/watch?v=F6vQKrRjQcA',
    recursos: ['Plantillas de negocio', 'Ejemplos reales', 'Foro de emprendedores']
  },
  {
    id: 15,
    titulo: 'Algoritmos y Estructuras de Datos',
    descripcion: 'Aprende a resolver problemas complejos con algoritmos y estructuras de datos.',
    instructor: 'Marta Fernández',
    duracion: '10 semanas',
    categoria: 'Programación',
    nivel: 'Avanzado',
    imagen: '/vercel.svg',
    precio: 149.99,
    rating: 4.9,
    totalEstudiantes: 500,
    objetivos: [
      'Implementar estructuras de datos',
      'Analizar eficiencia algorítmica',
      'Resolver problemas de entrevistas',
      'Aplicar recursividad',
      'Preparar para competencias de programación'
    ],
    requisitos: ['Programación básica', 'Lógica matemática'],
    temario: [
      { modulo: 'Estructuras de Datos', lecciones: ['Listas', 'Pilas', 'Colas', 'Árboles'] },
      { modulo: 'Algoritmos', lecciones: ['Búsqueda', 'Ordenamiento', 'Recursividad'] },
      { modulo: 'Problemas Avanzados', lecciones: ['Backtracking', 'Grafos', 'DP'] }
    ],
    certificado: true,
    fechaCreacion: '2024-10-01',
    ultimaActualizacion: '2024-12-10',
    videoIntro: 'https://www.youtube.com/watch?v=8hly31xKli0',
    recursos: ['Problemas resueltos', 'Ejercicios extra', 'Foro de algoritmos']
  },
];

// Cursos recientes (últimos 6 cursos agregados)
export const cursosRecientes = cursos.slice(-6); 