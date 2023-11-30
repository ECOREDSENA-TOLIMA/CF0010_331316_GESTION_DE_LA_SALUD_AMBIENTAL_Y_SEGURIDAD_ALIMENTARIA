export default {
  global: {
    componenteFormativo:
      'Riesgos ambientales, del consumo y sanitarios según la salud pública',
    descripcionCurso:
      'Este componente expone los principales instrumentos de control sanitario que influyen en la salud ambiental de las poblaciones. Se hace énfasis en los procesos de inspección, vigilancia y control sanitario a cargo de las entidades que regulan el sector, así como la responsabilidad ciudadana para ejercer esta vigilancia en salud pública desde las acciones de participación y empoderamiento. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Intervenciones de gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Inspección sanitaria',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Vigilancia sanitaria',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Control sanitario',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Proceso y procedimiento de aseguramiento sanitario de las cadenas productivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Buenas prácticas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Concepto sanitario',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Certificación y acreditación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mecanismos de participación y empoderamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Intervención en los riesgos sanitarios identificados',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Seguimiento de las intervenciones',
            hash: 't_3_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_10_331316.zip',
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
      tema: '1. Intervenciones de gestión del riesgo',
      referencia:
        'Departamento Administrativo Nacional de Estadística -DANE. (2022). Clasificación industrial internacional uniforme de todas las actividades económicas (CIIU).',
      tipo: 'Página web',
      link:
        'https://www.dane.gov.co/index.php/sistema-estadistico-nacional-sen/normas-y-estandares/nomenclaturas-y-clasificaciones/clasificaciones/clasificacion-industrial-internacional-uniforme-de-todas-las-actividades-economicas-ciiu',
    },
    {
      tema: '1. Intervenciones de gestión del riesgo',
      referencia:
        'Instituto Nacional de vigilancia de medicamentos y alimentos - INVIMA (s.f.). Formulario de inscripción sanitaria para vehículos transportadores de carne y productos cárnicos comestibles. Colombia.',
      tipo: 'Formato',
      link:
        'https://bogota.gov.co/servicios/guia-de-tramites-y-servicios/http-appb-saludcapital-gov-co-sivigiladc-vehiculostranspcarne-frmsubmenuvehiculos-aspxopcionneworigenloginidtipo258n1780607729',
    },
    {
      tema: '1. Intervenciones de gestión del riesgo',
      referencia:
        'Secretaria de Salud de Santander. (s.f). Formato de Inscripción objetos de Inspección, Vigilancia y Control Sanitario. Colombia.',
      tipo: 'Formato',
      link:
        'https://historico.santander.gov.co/intra/index.php/antico/viewdownload/530-formatos/12375-formato-de-inscripcion-objetos-de-inspecion-vigilancia-y-control-sanitario',
    },
    {
      tema: '1. Intervenciones de gestión del riesgo',
      referencia:
        'Alcaldía de Santiago de Cali. (s.f.). Formulario de inscripción sanitaria para establecimientos de expendio y/o almacenamiento de carne y/o productos cárnicos comestibles.',
      tipo: 'Formato',
      link:
        'https://www.cali.gov.co/salud/publicaciones/44317/i_formulario_de_inscripcin_sanitaria_para_establecimientos_de_expendio_yo_almacenamiento_de_carne_y_productos_crnicos_comestibles/',
    },
    {
      tema: '1.1 Inspección sanitaria',
      referencia:
        'Instituto Nacional de vigilancia de medicamentos y alimentos - INVIMA. (2015). Manual de inspección, vigilancia y control sanitario de alimentos y bebidas basado en riesgo para las entidades territoriales de salud versión 1.0.',
      tipo: 'Documento',
      link:
        'https://www.studocu.com/co/document/corporacion-universitaria-iberoamericana/biologia/25-manual-inspeccion-vigilancia-control-para-ets/16432853',
    },
    {
      tema: '1.1 Inspección sanitaria',
      referencia:
        'Instituto Nacional de vigilancia de medicamentos y alimentos - INVIMA. (s.f.). Acta de toma de muestras.',
      tipo: 'Formato',
      link:
        'https://www.dssa.gov.co/images/laboratorio_salud_publica/documentos/01_FO-M2-P5-102%20ACTA%20DE%20TOMA%20DE%20MUESTRAS%20ALIMENTOS.pdf',
    },
    {
      tema: '1.1 Inspección sanitaria',
      referencia:
        'Gobernación de Santander. Invima. (s.f.). Formulario de inscripción sanitaria para sujetos o establecimientos con actividades de almacenamiento, expendio, preparación y consumo de alimentos y bebidas. ',
      tipo: 'Formato',
      link:
        'https://historico.santander.gov.co/intra/index.php/sig/viewdownload/1432-grupo-de-gestion-de-salud-ambiental/12936-formulario-de-inscripcion-sanitaria-para-sujetos-o-establecimientos-con-actividades-de-almacenamiento-expendio-preparacion-y-consumo-de-alimentos-y-bebidas',
    },
    {
      tema: '1.1 Inspección sanitaria <br> 1.2 Vigilancia sanitaria',
      referencia: 'Congreso de Colombia. Ley 9 de enero 24 de 1979.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%200009%20DE%201979.pdf',
    },
    {
      tema: '1.1 Inspección sanitaria <br> 1.2 Vigilancia sanitaria',
      referencia:
        'Ministerio de Salud. Resolución 14861 de 04 de octubre de 1985.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%2014861%20de%201985.pdf',
    },
    {
      tema: '1.1 Inspección sanitaria <br> 1.2 Vigilancia sanitaria',
      referencia:
        'Ministerio de Salud y Protección Social. Decreto 780 de 06 de mayo de 2016.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      tema: '1.1 Inspección sanitaria <br> 1.2 Vigilancia sanitaria',
      referencia: 'Congreso de Colombia. Ley 1335 de 2009. ',
      tipo: 'Documento legal',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1335_2009.html',
    },
    {
      tema: '1.1 Inspección sanitaria <br> 1.2 Vigilancia sanitaria',
      referencia:
        'Ministerio del Medio Ambiente. Resolución 1164 de 06 de septiembre de 2002. ',
      tipo: 'Documento legal',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/gestion-de-recursos-fisicos/resoluciones/resolucion-1164-de-2002.aspx',
    },
    {
      tema: '2.3 Certificación y acreditación',
      referencia:
        'Ministerio de Salud y Protección Social. Decreto 335 de 08 de marzo de 2022. ',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20No.%20335%20de%202022.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acta de inspección sanitaria',
      significado:
        'Es el documento elaborado por la autoridad sanitaria competente, donde se enuncian los resultados observados durante la inspección realizada. Esta acta es suscrita por el funcionario que realiza la verificación de condiciones y por la persona que atiende la visita por parte del objeto del IVC sanitario. (Minsalud, 2001).',
    },
    {
      termino: 'Autoridad sanitaria',
      significado:
        'Son las entidades jurídicas de carácter público que tienen atribuciones para realizar funciones de rectoría, regulación, inspección, vigilancia y control tanto de los sectores públicos como privados en el ámbito de salud. (Decreto 3518 de 2003).',
    },
    {
      termino: 'Concepto sanitario',
      significado:
        'Es el resultado de la inspección, vigilancia y control realizada al establecimiento objeto de IVC sanitaria. Puede ser favorable, favorable con requerimientos o desfavorable. (Minsalud, 2001).',
    },
    {
      termino: 'Contaminado',
      significado:
        'Elemento que tuvo contacto con microorganismos capaces de producir enfermedad o infección. (OPS, s.f.).',
    },
    {
      termino: 'Contaminación ambiental',
      significado:
        'Cantidad de contaminantes físicos, químicos y biológicos presentes en el ambiente y que son capaces de generar efectos nocivos para la salud en la población. (PAHO, 2009).',
    },
    {
      termino: 'Controles de prácticas laborales',
      significado:
        'Son las prácticas que hacen parte de la rutina laboral cotidiana para minimizar la probabilidad de exposición ante acciones que generen riesgo para la salud. (OIT, 2001). ',
    },
    {
      termino: 'Eventos',
      significado:
        'Son todos aquellos sucesos o circunstancias que pueden cambiar o incidir en la situación de salud del individuo o la comunidad. (Decreto 3518 de 2006).',
    },
    {
      termino: 'Eventos de Interés en Salud Pública',
      significado:
        'Son los eventos considerados como importantes o trascendentales para la salud colectiva y que requieren ser enfrentados con medidas de salud pública. (Decreto 3518 de 2006).',
    },
    {
      termino: 'Expendio de alimentos',
      significado:
        'Es aquel establecimiento que realiza venta de alimentos para el consumo humano. (Resolución 2674 de 2013).',
    },
    {
      termino: 'Factor de riesgo',
      significado:
        'Es cualquier elemento, material o condición que se presente en los ambientes laborales de los establecimientos que ofertan servicios y bienes y que pueden generar alteraciones negativas en la salud de los trabajadores, usuarios y consumidores. (Minsalud, 2001).',
    },
    {
      termino: 'Medidas sanitarias',
      significado:
        'Conjunto de medidas de salud pública y de precauciones sanitarias que son aplicadas por la autoridad sanitaria con el fin de prevenir, reducir, controlar o eliminar la multiplicación de un evento que afecte la salud de la población. (Minsalud, 2001).',
    },
    {
      termino: 'Objetos de inspección, vigilancia y control',
      significado:
        'Son todos los bienes y servicios de uso y consumo humano que son originados por medio de cadenas productivas, las cuales pueden o no estar reguladas por estándares de calidad. (Resolución 1229 de 2013).',
    },
    {
      termino: 'Resolución motivada',
      significado:
        'Es un acto administrativo que ayuda a resolver y a finalizar por el medio administrativo y en el cual se explican todas las razones asociadas que dieron motivo a un acto. (U. Católica 2018). ',
    },
    {
      termino: 'Sujetos de inspección vigilancia y control sanitario',
      significado:
        'Son las personas naturales y jurídicas, organizaciones e instituciones que se encuentran obligadas a proteger la salud pública y garantizar la seguridad sanitaria por medio de su rol, ya sea como usuario/consumidor; proveedor/productor o autoridad sanitaria. (Minsalud, 2021).',
    },
    {
      termino: 'Unidad notificadora',
      significado:
        'Es la entidad pública que es responsable de realizar investigar, confirmar y configurar los eventos de interés en salud pública, teniendo en cuenta la información suministrada por las unidades primarias generadoras de datos y todo tipo información obtenida por medio de procedimientos epidemiológicos. (Decreto 3518 de 2006).',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. Ley 9 de 1979. <em>Por la cual se dictan Medidas Sanitarias.</em> 16 de julio de 1979. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%200009%20DE%201979.pdf',
    },
    {
      referencia:
        'Instituto Nacional de vigilancia de medicamentos y alimentos - INVIMA. (2014). <em>Guía Modelo de Inspección, Vigilancia y Control basado en Riesgos - IVC SOA. Versión 1.0.</em> ',
      link:
        'http://www.saludcapital.gov.co/CTDLab/Publicaciones/2020/Guia_IVC_basado_en_Riesgos.pdf',
    },
    {
      referencia:
        'Instituto Nacional de vigilancia de medicamentos y alimentos - INVIMA. (2015). <em>Manual de toma de muestras de alimentos y bebidas para entidades territoriales de salud. Versión 1.0.</em> ',
      link:
        'https://docplayer.es/181212373-Manual-de-toma-de-muestras-de-alimentos-y-bebidas-para-entidades-territoriales-de-salud-version-1-0.html',
    },
    {
      referencia:
        'Instituto Nacional de vigilancia de medicamentos y alimentos - INVIMA. (2015). <em>Manual de inspección, vigilancia y control sanitario de alimentos y bebidas basado en riesgo para las entidades territoriales de salud. Versión 1.0.</em> ',
      link:
        'https://www.studocu.com/co/document/corporacion-universitaria-iberoamericana/biologia/25-manual-inspeccion-vigilancia-control-para-ets/16432853',
    },
    {
      referencia:
        'Ministerio de Salud y protección Social 2003. Decreto 3518 de 2006. <em>Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones.</em> 09 de octubre de 2006. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. Resolución 1229 de 2013. <em>Por la cual se establece el modelo de inspección, vigilancia y control sanitario para los productos de uso y consumo humano.</em> 23 de abril de 2013. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1229-de-2013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y protección Social. (2013). Resolución 2674 de 2013. <em>Por la cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones.</em> 22 de julio de 2013. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%202674%20de%202013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. Resolución 518 de 24 de febrero de 2015. <em>Por la cual se dictan disposiciones en relación con la Gestión de la Salud Pública y se establecen directrices para la ejecución, seguimiento y evaluación del Plan de Salud Pública de Intervenciones Colectivas (PIC).</em> 24 de febrero 2015. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0518-de-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). <em>ABECÉ de inspección, vigilancia y control sanitario.</em> ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/abc-ivc.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, subdirección de Salud Ambiental. (2020). <em>Modelo operativo de inspección, vigilancia y control sanitario para salud ambiental. Versión 1.0.</em> ',
      link: 'https://www.minsalud.gov.co/RID/modelo-operativo-ivc-t.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. Decreto 335 de 08 de marzo de 2022. <em>Por el cual se establece el procedimiento para la obtención de los certificados de cumplimiento de las buenas prácticas de elaboración, laboratorio y manufactura ante el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA).</em> 08 de marzo de 2022. ',
      link:
        'https://www.asocapitales.co/nueva/2022/03/11/decreto-335-del-8-de-marzo-de-2022/#:~:text=Por%20el%20cual%20se%20establece,de%20Medicamentos%20y%20Alimentos%20%2DINVIMA',
    },
    {
      referencia:
        'Organización Internacional del Trabajo OIT. (2001). <em>¿Cómo gestionar la seguridad y salud en el trabajo?</em> ',
      link:
        'https://www.ilo.org/global/topics/labour-administration-inspection/resources-library/publications/guide-for-labour-inspectors/how-can-osh-be-managed/lang--es/index.htm',
    },
    {
      referencia:
        'Organización Panamericana de la Salud OPS. (s.f.). <em>Peligros biológicos. Inocuidad de Alimentos - Control Sanitario - HACCP.</em> ',
      link:
        'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=10838:2015-peligros-biologicos&Itemid=41432&lang=es#gsc.tab=0',
    },
    {
      referencia:
        'Ortega Ruiz, L. G. (2018). <em>El acto administrativo en los procesos y procedimientos.</em> Universidad Católica de Colombia. ',
      link:
        'https://publicaciones.ucatolica.edu.co/pdf/el-acto-administrativo-en-los-procesos-y-procedimiento.pdf',
    },
    {
      referencia:
        'Presidencia de la República, Ministerio de Hacienda y Crédito Público, Ministerio de Salud y Protección Social. Decreto 2078 de 2012. <em>Por el cual se establece la estructura del Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA), y se determinan las funciones de sus dependencias.</em> 08 de octubre de 2012. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=66709',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Adriana Cárdenas González',
          cargo: 'Experta Temático',
          centro: 'Regional Antioquia - Centro de Servicios de salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisor de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'María Inés Machado',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Produccióon Audiovisual',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon Audiovisual',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
