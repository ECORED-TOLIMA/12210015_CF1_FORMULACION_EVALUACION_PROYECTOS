export default {
  global: {
    Name: 'Formulación y estructuración del proyecto',
    Description:
      'El componente formativo desarrolla los fundamentos conceptuales y técnicos para la formulación y estructuración de proyectos empresariales. A partir del análisis de necesidades, la aplicación de metodologías de investigación y la realización de estudios de mercado, técnicos y financieros, se orienta la transformación de una idea en una propuesta organizada, cuantificada y sustentada, que sirva como base para su evaluación y toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentación del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto, características y tipología de proyectos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ciclo de vida del proyecto y partes interesadas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Identificación de necesidades empresariales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodologías de investigación aplicadas al proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Método científico y tipos de investigación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas de recolección y análisis de información',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Aplicación del marco lógico en la estructuración del proyecto',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis del entorno y prefactibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Caracterización del entorno y localización del proyecto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Cobertura, población objetivo y área de influencia',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Cronograma y estado de prefactibilidad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estudio de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estructura económica del mercado y análisis de demanda',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estudio de oferta y proyección del mercado',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Plan de mercadeo y estrategias comerciales',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estudio técnico y organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tamaño, localización e ingeniería del proyecto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Proceso productivo y distribución en planta',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estructura organizacional y legal del proyecto',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estudio financiero del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Presupuesto de inversiones y fuentes de financiación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Presupuesto de ingresos, costos y gastos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Estados financieros proyectados y punto de equilibrio',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },

      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<strong>Proyecto</strong>',
      significado:
        'conjunto de actividades planificadas y coordinadas que se desarrollan durante un periodo determinado para alcanzar un objetivo específico mediante el uso eficiente de recursos.',
    },
    {
      termino: '<strong>Prefactibilidad</strong>',
      significado:
        'evaluación preliminar que permite determinar si un proyecto cuenta con condiciones básicas para continuar con estudios más detallados.',
    },
    {
      termino: '<strong>Factibilidad</strong>',
      significado:
        'análisis técnico, financiero y organizacional que determina si un proyecto puede ejecutarse con éxito bajo condiciones reales.',
    },
    {
      termino: '<strong>Viabilidad</strong>',
      significado:
        'condición que indica que un proyecto tiene alta probabilidad de ejecutarse y mantenerse en el tiempo con resultados favorables.',
    },
    {
      termino: '<strong>Estudio de mercado</strong>',
      significado:
        'análisis de la demanda, oferta, precios y comportamiento del consumidor para determinar la viabilidad comercial del proyecto.',
    },
    {
      termino: '<strong>Capital de trabajo</strong>',
      significado:
        'recursos financieros necesarios para cubrir los costos operativos iniciales del proyecto hasta que comience a generar ingresos.',
    },
    {
      termino: '<strong>Flujo de caja</strong>',
      significado:
        'registro de entradas y salidas de dinero en un periodo determinado, que permite evaluar la liquidez del proyecto.',
    },
    {
      termino: '<strong>Punto de equilibrio</strong>',
      significado:
        'nivel mínimo de ventas necesario para cubrir todos los costos y gastos sin generar pérdidas ni utilidades.',
    },
    {
      termino: '<strong>Marco lógico</strong>',
      significado:
        'herramienta metodológica que organiza de manera estructurada el problema, objetivos, actividades e indicadores de un proyecto.',
    },
    {
      termino: '<strong>Costo variable</strong>',
      significado:
        'costo que cambia en proporción directa al nivel de producción o prestación del servicio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baca, G. (2022). <em>Evaluación de proyectos</em> (9.ª ed.). McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Baca, G. (2007). <em>Ingeniería económica</em> (8.ª ed.). Fondo Educativo Panamericano.',
      link: '',
    },
    {
      referencia:
        'Canada, J., Sullivan, W., & White, J. (1997). <em>Análisis de inversión de capital para ingeniería y administración</em> (2.ª ed.). Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Dergamo, P., Sullivan, W., Bontadelli, J., & Wicks, E. (1997). <em>Ingeniería económica</em> (10.ª ed.). Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'García, J. (2008). <em>Matemáticas financieras</em> (5.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Londoño, C. A. (2004). <em>Fundamentos de ingeniería económica</em> (1.ª ed.). Universidad Católica Popular del Risaralda.',
      link: '',
    },
    {
      referencia:
        'Mesa, J. J. (2017). <em>Evaluación financiera de proyectos</em>. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Mokate, K. (2004). <em>Evaluación financiera de proyectos de inversión</em>. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Rosillo, J. (2009). <em>Matemáticas financieras para decisiones de inversión y financiación</em>. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Serrano, J. (2018). <em>Matemáticas financieras y evaluación de proyectos</em> (2.ª ed.). Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Sapág Chain, N., & Sapág Chain, R. (2014). <em>Preparación y evaluación de proyectos</em> (6.ª ed.). McGraw Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Miranda Miranda, J. J. (2016). <em>Gestión de proyectos: Identificación, formulación, evaluación y administración</em> (2.ª ed.). Ecoe Ediciones.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Dirección General  ',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
