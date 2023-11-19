<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Intervenciones de gestión del riesgo

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las intervenciones de inspección, vigilancia y control sanitario, con enfoque en riesgos, permite construir los perfiles acordes con la criticidad de los indicadores evaluados, de esta manera se prioriza las visitas de evaluación, ayudando en el seguimiento y control sanitario de los diferentes establecimientos objeto de la evaluación. La protección de la salud individual y colectiva es responsabilidad del Estado, quien debe actuar en la reducción de los riesgos, perjuicios e impactos de tipo negativo generados por el uso y/o consumo de diversos bienes y servicios que pueden afectar la salud humana. 
      
    p.mb-4(data-aos="fade-down") Para tener control del riesgo sobre la salud de las personas tanto individual como colectiva, se deben realizar actividades de verificación, asesoría y acompañamiento para el cumplimiento de las normas y requisitos establecidos: condiciones de infraestructura, suministro de agua y saneamiento básico, acciones de control de calidad, diversos procesos y procedimientos orientados a las variables que pueden afectar el estado de salud.

    .mb-5.cajon.color-primario-c.p-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12.col-md-9.col-lg-7
          p Es por esta razón, que las acciones de Inspección, Vigilancia y Control (IVC) de tipo sanitario, están orientadas a reducir o minimizar los riesgos, daños e impactos negativos en la salud de las personas. Acorde con la clasificación de riesgo expuesta por el Instituto Nacional de Vigilancia de Medicamentos y Alimentos –INVIMA-.
          p.mb-0 De acuerdo con la Guía Modelo de Inspección, Vigilancia y Control basado en Riesgos - IVC SOA Versión 1.0 - septiembre 2014, se pueden presentar algunas fallas potenciales, entre las que se describen las siguientes: 
        .col-10.col-md-3.col-lg-3
          img(src='@/assets/curso/temas/tema1/tema1-2.png', alt='')

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/t1-ico1.png', alt='')
        h4.text-center Severidad
        p Es la magnitud del efecto de un modo de falla en la persona (pacientes o usuarios) del bien o servicio. Puede clasificarse en: 
        ul.lista-ul.ms-3
          li.mb-0
            span ● 1 Baja.
          li.mb-0
            span ● 3 Media.
          li.mb-0
            span ● 5 Alta.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/t1-ico2.png', alt='')
        h4.text-center Probabilidad de ocurrencia
        p Es la estimación (proporción de veces) posible de que una falla ocurra, bajo las mismas condiciones. Se clasifica:
        ul.lista-ul.ms-3
          li.mb-0
            span ● Improbable (0 %-5 %).
          li.mb-0
            span ● Remota (6 %-10 %).
          li.mb-0
            span ● Ocasional (11 %-50 %).
          li.mb-0
            span ● Probable (51 %-60 %).
          li.mb-0
            span ● Frecuente (61 %-100 %).
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/t1-ico3.png', alt='')
        h4.text-center Probabilidad de afectación
        p Corresponde a la estimación de la posibilidad de que el paciente o usuario se vea afectado por un posible modo de falla. Se clasifica en:
        ul.lista-ul.ms-3
          li.mb-0
            span ● Remota.
          li.mb-0
            span ● Baja.
          li.mb-0
            span ● Moderada.
          li.mb-0
            span ● Alta.
          li.mb-0
            span ● Muy alta.
         
    .mb-5.cajon.color-primario-c.p-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-10.col-md-3.col-lg-3
          img(src='@/assets/curso/temas/tema1/tema1-3.png', alt='')
        .col-12.col-md-9.col-lg-7
          p.mb-0 Acorde con los lineamientos dados por medio de la #[b Resolución 1229 de 2013], norma en la cual se basa la procura de una correcta gestión de los riesgos identificados y asociados con el uso y consumo de servicios o bienes en toda la cadena productiva, para salvaguardar y proteger la salud de la población. Además, busca hacer visible la necesidad del levantamiento de información en el marco de mapas sanitarios, los cuales son indispensables para fortalecer las capacidades requeridas a nivel nacional, desde la capacitación y entrenamiento al talento humano, la capacidad física, tecnológica y financiera, en el marco de la estructura de la organización, procesos y procedimientos. 

    p.mb-4(data-aos="fade-down") La gestión administrativa de las acciones de inspección, vigilancia y control están a cargo del Instituto Nacional de Vigilancia de Medicamentos y Alimentos –INVIMA-, este establecimiento de orden público, a nivel nacional anexo al Ministerio de Salud y Protección Social, es direccionado por éste en la regulación de las condiciones sanitarias y de control de calidad en pro de garantizar la debida salud pública de la población.  

    .cajon.color-secundario.p-4.mb-4(data-aos="fade-down-left")
      p.mb-0 En cuanto a la gestión que realiza el INVIMA, deben resaltarse los siguientes servicios o bienes que son objeto de vigilancia: 

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-2.mb-md-0(data-aos="fade-left")
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/inf-1a.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/inf-1b.svg', alt='')

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los cambios realizados en la operatividad de la inspección, vigilancia y control, basados en riesgos, se formalizaron a partir de la Resolución 1229 de 2013 y se dieron gracias al #[b Decreto 2078 de 2012], que permitió establecer la estructura del INVIMA, y ayudó a determinar las funciones de sus diversas dependencias.

    p.mb-4(data-aos="fade-down") Con el fin de garantizar las acciones operativas del INVIMA, las Entidades Territoriales de Salud -ETS-, de nivel departamental, distrital y municipal realizarán las actividades de inspección, vigilancia y control, acorde con las competencias y funciones reglamentadas en las normas: #[b Ley 09 de 1979, Ley 715 de 2001], y el #[b Decreto 780 de 2016]. 
    p.mb-5(data-aos="fade-down") Para una mayor claridad en la conceptualización, de los riesgos ambientales, del consumo y sanitarios según la salud pública, es necesario reconocer algunos significados, presentes en los documentos estatales creados en el orden de la identificación del riesgo, como se indica en el siguiente gráfico:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Identificación de conceptos en los riesgos ambientales</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='La figura 1, presenta ordenadamente los conceptos que están presentes cuando se lleva a cabo la identificación de riesgos ambientales, y los procedimientos que le regulan.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='La figura 1, presenta ordenadamente los conceptos que están presentes cuando se lleva a cabo la identificación de riesgos ambientales, y los procedimientos que le regulan.')

    p.mb-5(data-aos="fade-down") De igual manera, se deben tener en cuenta las abreviaturas de acuerdo a los conceptos que se van a revisar: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-lg-10.col-12
        img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-1.png' alt='MSPS')
        p.text-center Ministerio de Salud y Protección Social. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-2.png' alt='SSA')
        p.text-center Subdirección Ambiental. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-3.png' alt='ETS')
        p.text-center Entidad (s) Territorial (es) de Salud. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-4.png' alt='EC')
        p.text-center Educación y Comunicación para la Salud. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-5.png' alt='INVIMA')
        p.text-center Instituto Nacional de Vigilancia de Medicamentos y Alimentos. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-6.png' alt='IVC')
        p.text-center Inspección, Vigilancia y Control. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-7.png' alt='IVCS')
        p.text-center Inspección, Vigilancia y Control Sanitario. 

    .cajon.color-secundario.p-4.mb-5(data-aos="fade-down-left")
      p.mb-0 En el marco de revisar los objetivos de la inspección, vigilancia y control, se debe referenciar el artículo 5 de la Resolución 1229 de 2013, teniendo en cuenta los siguientes objetivos: 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Calidad de vida") 
            p Suscitar la calidad de vida de la población, incluyéndose en los procesos de autocuidado, acciones de prevención y control de riesgos para la salud que estén agrupados a los bienes y servicios de uso y consumo humano. 
          div(numero="2" titulo="Seguridad y calidad de los bienes") 
            p Procurar la mayor seguridad y calidad de los bienes y servicios que son de uso y consumo humano. 
          div(numero="3" titulo="Salubridad en los entornos ambientales") 
            p Asegurar el estado de salubridad en el marco de los entornos ambientales de las cadenas productivas de bienes y servicios que sean de uso y consumo humano. 
          div(numero="4" titulo="Gestión integral del riesgo") 
            p Incluir el enfoque de gestión integral del riesgo en todas las cadenas productivas que puedan influir negativamente en la salud de las personas y de la comunidad en general. 
          div(numero="5" titulo="Calidad de bienes y servicios") 
            p Dirigir todas aquellas acciones en pro del mejoramiento de la calidad de los bienes y servicios que sean de uso y consumo humano. 
          div(numero="6" titulo="Competitividad de bienes y servicios") 
            p Cooperar con todas las acciones de calidad que sean necesarias para la competitividad de bienes y servicios que sean de uso y consumo humano.

      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')

    p.mb-5(data-aos="fade-down") Ahora bien, para garantizar una correcta planificación de las actividades de inspección, vigilancia y control, se deben tener en cuenta los enfoques generados desde la base normativa, técnica y operativa, de la inspección, vigilancia y control, como se indica a continuación:

    TabsB.color-acento-botones.mb-5(data-aos="fade-down-left")
      .py-4.py-md-5(titulo="Enfoque de riesgo" :icono="require('@/assets/curso/temas/tema1/ico-1.svg')")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')
          .col-md-7
            h4 Enfoque de riesgo
            p Corresponde al análisis del riesgo de acuerdo con la evaluación, gestión y comunicación.
            p Mediante este enfoque, se pueden evaluar los riesgos sanitarios, tomando las medidas pertinentes de control y se entrega la información a los interesados para la toma de decisiones. 
            p En el enfoque de riesgo, se deben entregar todos los elementos necesarios (normas, planes y programas) para la gestión del conocimiento y del modelo operativo en función de las cadenas productivas. 
      .py-4.py-md-5(titulo="Enfoque de prevención" :icono="require('@/assets/curso/temas/tema1/ico-2.svg')")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')
          .col-md-7
            h4 Enfoque de prevención
            p Mediante este modelo se pueden formular métodos para la prevención de riesgos y aplicación de medidas necesarias que ayuden a reducir la aparición de riesgos sanitarios, asociados a la producción de bienes y servicios. 
            p Este enfoque, ofrece métodos de promoción en mejores prácticas y cultura sanitaria para la población en general e incluye acompañamiento para garantizar el control de bienes y servicios. 
      .py-4.py-md-5(titulo="Enfoque sistémico basado en procesos" :icono="require('@/assets/curso/temas/tema1/ico-3.svg')")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')
          .col-md-7
            h4 Enfoque sistémico basado en procesos
            p Corresponde a las actividades que se interrelacionan para generar valor y lograr transformar aquellos insumos en productos. Este enfoque se desarrolla teniendo en cuenta la intervención de los actores extra e intrasectoriales y de todos los niveles y modelos interoperativos. 
      .py-4.py-md-5(titulo="Enfoques operativos viables e interconectados" :icono="require('@/assets/curso/temas/tema1/ico-4.svg')")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')
          .col-md-7
            h4 Enfoques operativos viables e interconectados
            p Este enfoque, une varios modelos que permiten integrar los enfoques de tipo conceptual con los sistémicos que se basan en procesos. Se debe tener en cuenta la variedad, descentralización, autonomía de sus elementos con la unión de los procesos misionales que hacen parte de la Inspección, vigilancia y control sanitario, en cada una de las etapas de las cadenas productivas.
       
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        p En el modelo operativo de la salud ambiental, la planeación de las actividades está basada en el principio de previsión y su eje central consiste en desarrollar actividades con un enfoque de tipo preventivo. Si se prevé acertadamente, pueden generarse en torno a la reducción, eliminación o mitigación de todos aquellos riesgos que puedan generar daño en la salud y bienestar de la persona. Por lo general, las acciones de prevención están orientadas hacia actividades de promoción de la salud, perfeccionar prácticas e impulsar la cultura ciudadana. 
        p.mb-0 Complementando este modelo con enfoque preventivo, se dan cursos a las líneas operativas enfocadas en la promoción de la salud, la gestión integral del riesgo y la gestión en salud pública; las cuales corresponden con las líneas operativas del Plan Decenal de Salud Pública y en concordancia con la #[b Resolución 518 de 2015], creada, en torno a la gestión pública, con el fin de direccionar la ejecución, el seguimiento y la evaluación de todo el Plan de salud pública en el marco de las Intervenciones Colectivas (PIC). 
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='')     

    .cajon.color-secundario.p-4.mb-5(data-aos="fade-down-left")
      p.mb-0 Por medio del análisis de riesgo, las Entidades Territoriales y demás entidades a nivel nacional, podrán conocer de manera previa los principales riesgos de tipo sanitario, teniendo en cuenta los tres componentes, como se indica en la siguiente figura: 

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Principales riesgos de tipo sanitario</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-2a.svg', alt='La figura 2, muestra los principales riesgos de tipo sanitario, los cuales requieren medidas de control para la toma de decisiones.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-2b.svg', alt='La figura 2, muestra los principales riesgos de tipo sanitario, los cuales requieren medidas de control para la toma de decisiones.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')  
      .col-12.col-md-8.col-lg-8
        p Por medio del análisis del riesgo, se fortalecen los procesos estratégicos necesarios para realizar la inspección, vigilancia y control, el cual cuenta con un proceso misional central conformado por el aseguramiento sanitario de las cadenas productivas por medio de:
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | Promoción de las buenas prácticas. 
          li.mb-0
            span.icon ✔ 
            | Promover la conciencia ciudadana.
        p Para completar el ciclo, es importante abordar la fiscalización sanitaria basada en la inspección, vigilancia y control, los cuales impactan los factores de riesgo, como se explica en la siguiente figura:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Fiscalización sanitaria de acuerdo con el tipo de riesgo</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-3a.svg', alt='La figura 3, informa como los riesgos físicos, químicos y biológicos que se suceden en el campo de la salud ambiental, se afectan por el saneamiento básico, productos químicos, el aire y la zoonosis.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-3b.svg', alt='La figura 3, informa como los riesgos físicos, químicos y biológicos que se suceden en el campo de la salud ambiental, se afectan por el saneamiento básico, productos químicos, el aire y la zoonosis.')

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para una mayor comprensión del modelo operativo de la inspección, vigilancia y control sanitario para la salud ambiental, se presenta el esquema original el cual es tomado directamente del Ministerio de Salud y Protección Social: 

    .row.justify-content-center.mb-5
      .col-12.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-0
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Modelo operativo IVCS Salud Ambiental </i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-4a.svg', alt='La figura 4, muestra el modelo operativo de inspección vigilancia y control sanitario a nivel de la salud ambiental.')
          //- figcaption Nota: Ministerio de Salud y Protección Social. Modelo operativo de Inspección, vigilancia y Control sanitario para salud Ambiental. 2020.
      .col-12.d-block.d-md-none(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/modelo_operativo_ivcs.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Descargar]. Modelo operativo IVCS Salud Ambiental.

    .mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-10.col-md-3.col-lg-3
          img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='')
        .col-12.col-md-9.col-lg-7
          p Con el fin de reforzar los conceptos contenidos en la anterior figura, en el marco de los procesos de vigilancia y control, se pueden encontrar los elementos expuestos en el artículo 11 de la #[b Resolución 1229 de 2013], los cuales describen la implementación y la gestión. 
          p Los procesos misionales son procesos que se unen para darle sentido al enfoque preventivo por medio de dos grandes macro procesos, que están unidos entre sí, pero operan de manera separada y se les denomina: 
          ul.lista-ul.ms-3
            li.mb-0
              span ✔ 
              | Fiscalización sanitaria.
            li.mb-0
              span ✔ 
              | Aseguramiento sanitario de las cadenas productivas.  

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Ejemplo de cronograma de actividades (Diagrama de Gantt)] 
        .tabla-a.color-acento-contenido
          table(style="min-width:1024px")
            caption Nota: Ministerio de Salud y Protección Social. Resolución 1229 de 2013
            thead
              tr
            tbody
              tr.cabecera-a
                td.text-center(rowspan="3") 
                  p #[b Fiscalización Sanitaria]
                  p #[b Consiste en la evaluación del cumplimiento normativo para la identificación de factores de riesgo y posibles efectos de los procesos que impactan la salud de la población. Así mismo, permite realizar procesos de investigación y formulación de sanciones para aquellas personas que alteren o no cumplan con la norma sanitaria; adicional con la entrega de medidas correctivas y preventivas que se deben tener presentes en las cadenas de producción, actividades de almacenamiento, de distribución y consumo. Sus actividades están enfocadas en la inspección, vigilancia y control.]
                td.text-center #[b Componente de Inspección]
                td.text-start
                  p Es un subproceso por medio del cual se lleva a cabo la comprobación de todos los objetos que sean susceptibles de recibir la inspección vigilancia y control con el objetivo de definir que sus elementos cumplan con todos los criterios establecidos a nivel normativo. 
                  p Aborda la inspección en el lugar objeto de la evaluación, que puede incluir la toma de muestras u otro tipo de material con el cual se pueda comprobar las descripciones contenidas en el documento de normas y demás procedimientos que apliquen al objeto principal de la inspección, vigilancia y control. 
                  p El resultado de esta actividad puede ser:
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | La certificación o el concepto sanitario. 
                    li.mb-0
                      span.icon ✔ 
                      | Entrega de medidas de control para su respectiva aplicación. 
              tr
                td.text-center #[b Componente de Supervisión]
                td.text-start
                  p El componente dirigido a la inspección sanitaria es aquel que está enfocado en la acción de monitorear (observación vigilante) de todos los elementos sujetos de la Inspección, vigilancia y control. 
                  p El objetivo principal es que el objeto sujeto de vigilancia se mantenga inmerso dentro de los parámetros esperados. En la vigilancia se identifican los siguientes momentos: captura, análisis, interpretación y divulgación de la información de elementos claves considerados como puntos críticos que pueden mantener o alterar la inocuidad de las cadenas productivas de bienes y servicios. Las acciones básicas de la vigilancia son: 
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | Compendio, almacenamiento y tratamiento de datos por medio de muestreos protocolizados y estandarizados.  
                    li.mb-0
                      span.icon ✔ 
                      | Estudio, interpretación y entrega de información a quienes corresponda la toma de decisiones. 
                    li.mb-0
                      span.icon ✔ 
                      | Estructuración y entrega de recomendaciones sanitarias que deban ser adoptadas.
              tr.cabecera-a
                td.text-center #[b Componente de control sanitario]
                td.text-start
                  p El control sanitario se refiere a la aplicación de las medidas correctivas sobre aquellas condiciones irregulares detectadas en las actividades de inspección, vigilancia y control. 
                  p En el control se identifican los siguientes momentos:
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | Ordenar la ejecución de acciones de tipo cautelar o acciones correctivas que puedan subsanar las condiciones críticas de irregulares. 
                    li.mb-0
                      span.icon ✔ 
                      | Procurar la implementación de medidas sanitarias que sean necesarias con el fin de alcanzar el cumplimiento a tiempo. 
                    li.mb-0
                      span.icon ✔ 
                      | Seguimiento y evaluación del resultado de las medidas dadas y la posibilidad de nuevas medidas como el cierre de caso o sanciones. 
                    li.mb-0
                      span.icon ✔ 
                      | Generar las sanciones a aquellos que no cumplan con el ordenamiento jurídico, ya sea por acción u omisión logrando seguir el debido proceso. 
              tr
                td.text-center.cabecera-b(rowspan="2") 
                  p #[b Aseguramiento sanitario de las cadenas productivas]
                  p #[b Este macroproceso está orientado a las acciones de difusión, ejecución, implementación, desarrollo y mantenimiento de la seguridad sanitaria como un bien de tipo público, con responsabilidad compartida por todos los actores sociales involucrados en la vigilancia y control sanitario. De esta manera se logra impactar en las directrices de promoción y educación.]
                td.text-center
                  p #[b Componente de promoción de buenas prácticas]
                td.text-start
                  p #[b Este componente incluye las siguientes estrategias:]
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | Comprobación de los potenciales que sean sujetos de vigilancia. 
                    li.mb-0
                      span.icon ✔ 
                      | Relación sistemática voluntaria. 
                    li.mb-0
                      span.icon ✔ 
                      | Certificación de personas, establecimientos y procesos de tipo productivo de bienes y servicios.
                    li.mb-0
                      span.icon ✔ 
                      | La certificación y acreditación de las cadenas productivas. 
                    li.mb-0
                      span.icon ✔ 
                      | Progreso del modelo de incentivos sanitarios que recompensen las buenas prácticas y la búsqueda de la excelencia.
              tr.cabecera-a
                td.text-center #[b Componente de fomento de conciencia sanitaria y la autorregulación]
                td.text-start
                  p #[b Este componente se desarrolla por medio de:]
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | Poner en práctica las políticas de educación en salud que ayuden a obtener actitudes correctas y buenas prácticas tanto a nivel individual como colectivo y en todos los ámbitos de la vida diaria. 
                    li.mb-0
                      span.icon ✔ 
                      | Generación de acciones que promuevan la   contribución, fortalecimiento y apropiación de sentido de la corresponsabilidad respecto a la gestión de la seguridad sanitaria.

    p.mb-5(data-aos="fade-down") Todas estas actividades descritas, requieren soporte respecto a los responsables y actores que hacen parte de todo el proceso. Según el artículo 4 de la Resolución 1229 de 2013, las personas que estén sujetas a la inspección, vigilancia y control son aquellas de origen natural o jurídico, agrupaciones e instituciones que estén en la obligación a garantizar tanto la protección en salud pública como la seguridad sanitaria por medio de su actuar y acorde con su condición de: 

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-2.mb-md-0(data-aos="fade-left")
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/inf-2a.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/inf-2b.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-10.col-lg-5
        img(src='@/assets/curso/temas/tema1/tema1-15.png', alt='')
      .col-12.col-lg-7
        p Respecto a las autoridades sanitarias, se pueden describir que, son lugares de origen jurídico, de carácter público, que ponen en práctica funciones en torno a la rectoría, organización, evaluación, vigilancia y control de los sectores de tipo público y privado en salud; así como la puesta en marcha de las acciones en prevención, control y seguimiento, que den garantía de la protección en salud pública. Dentro de estas autoridades sanitarias se pueden enunciar las siguientes: 
        ul.lista-ul.ms-3
          li.mb-1
            span.icon ✔ 
            | Ministerio de Salud y Protección Social. 
          li.mb-1
            span.icon ✔ 
            | Unidad Administrativa Especial Fondo Nacional de Estupefacientes.
          li.mb-1
            span.icon ✔ 
            | Superintendencia Nacional de Salud. 
          li.mb-1
            span.icon ✔ 
            | Instituto Nacional de Vigilancia de Medicamentos y Alimentos - INVIMA. 
          li.mb-1
            span.icon ✔ 
            | Entidades Territoriales de Salud. 

    .cajon.color-secundario.p-4.mb-4(data-aos="fade-down-left")
      p.mb-0 Con el fin de implementar el modelo de inspección, vigilancia y control, y teniendo en cuenta el enfoque de riesgo y la promoción del aseguramiento en todas las fases de las cadenas productivas de los bienes de servicio de uso y de consumo humano; con el enfoque de salud ambiental, se cuenta con las acciones realizadas por parte de: 

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-16.svg', alt='')
          p Entidades Territoriales de Salud del orden departamental y distrital. 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-17.svg', alt='')
          p Entidades Territoriales de Salud del orden municipal (categoría especial 1, 2 y 3).
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-18.svg', alt='')
          p Unidades Técnicas Funcionales. 
    
    p.mb-5(data-aos="fade-down") Las funciones a tener por parte de las entidades territoriales de salud tanto de orden departamental como municipal, de acuerdo con lo dispuesto en el modelo operativo de inspección, vigilancia y control sanitario para la salud ambiental, para las unidades técnicas funcionales son las siguientes: 

    .BGIMG02.p-4.p-lg-5.mb-5(data-aos="zoom-in-down")
      SlyderE(indicadores="derecha")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Entidades Territoriales de Salud del orden departamental y distrital
            ul.lista-ul.ms-3
              li.mb-2
                span ● Realizar acciones en Inspección, Vigilancia y Control -IVC- en concordancia con Minsalud.
              li.mb-2
                span ● Organizar unidades técnicas funcionales y asignar profesionales expertos.
              li.mb-2
                span ● Aplicar el modelo de información de Minsalud para: recopilar, tratar, actualizar, verificar, organizar, disponer y administrar datos. 
              li.mb-2
                span ● Definir proceso de inscripción de establecimientos revisados.
              li.mb-2
                span ● Ayudar en el autoreconocimiento de quienes están bajo revisión. 
              li.mb-2
                span ● Realizar mapa de riesgos sanitarios de la zona de influencia, incluyendo a quienes están bajo IVC. Las entidades territoriales de salud acceden a esta información.   
              li.mb-2
                span ● Asistir técnicamente a los interesados sobre el modelo.
              li.mb-2
                span ● Apoyar a los municipios en la gestión del modelo. 
              li.mb-2
                span ● Soportar la operatividad del modelo en el laboratorio de salud pública. 
              li.mb-2
                span ● Asesorar en la entrega de información y educación sanitaria de los revisados.
              li.mb-2
                span ● Asegurar infraestructura y talento humano según el modelo, garantizado idoneidad de este. 
              li.mb-2
                span ● Gestionar interinstitucional e intersectorialmente la implementación de actividades en torno a la IVC.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Entidades Territoriales de Salud del orden municipal (categoría especial 1,2 y 3)
            ul.lista-ul.ms-3
              li.mb-2
                span ● Ejecutar la gestión del modelo de Inspección, Vigilancia y Control -IVC-.
              li.mb-2
                span ● Definir la conformación de unidades técnicas funcionales, y asignación de personal idóneo en el tema. 
              li.mb-2
                span ● Poner en marcha el modelo y realizar oportunamente los reportes a nivel departamental. 
              li.mb-2
                span ● Organizar el proceso de IVC sanitario en el marco de la salud ambiental. 
              li.mb-2
                span ● Ayudar a que la entidad territorial de salud realice la implementación de estrategias para la identificación y auto reconocimiento de quienes son objeto de revisión.
              li.mb-2
                span ● Ejecutar acciones en pro de la gestión interinstitucional e intersectorial para implementar y desarrollar actividades de IVC. 
              li.mb-2
                span ● Actualizar la totalidad de objetos vigilados, realizando las actividades de inspección, vigilancia y control. 
              li.mb-2
                span ● Garantizar la actualización del mapa de riesgos sanitarios más importantes del área de influencia, junto con los que son objeto de IVC priorizados a nivel nacional y departamental.   
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Unidades Técnicas Funcionales
            ul.lista-ul.ms-3
              li.mb-2
                span ● Asignar personal técnico idóneo y experimentado a la unidad funcional.
              li.mb-2
                span ● Organizar comunicación y coordinación interna con otras áreas. 
              li.mb-2
                span ● Ejecutar periódicamente análisis de condiciones sanitarias bajo IVC. 
              li.mb-2
                span ● Registrar eventos de riesgo poblacional y definir métodos de intervención sobre problemáticas sanitarias.
              li.mb-2
                span ● Organizar metodologías de promoción de la salud y prevención de la enfermedad para los intervenidos por IVC sanitario, mejorando el aseguramiento de las cadenas productivas. 
              li.mb-2
                span ● Consolidar información y disposición de acciones de IVC.
              li.mb-2
                span ● Promover buenas prácticas sanitarias.
              li.mb-2
                span ● Seguimiento de la implementación del modelo. 
              li.mb-2
                span ● Apoyar la estructuración del plan territorial de IVC sanitario, según sea el caso: diagnósticos sanitarios, mapas de riesgos y evidencias o resultados de la vigilancia. 
              li.mb-2
                span ● Gestionar actividades de coordinación intersectorial de salud pública y seguridad sanitaria: departamento, distrito, región, seccional o municipal. 
              li.mb-2
                span ● Seguimiento y monitoreo de solicitudes (usuarios, consumidores y organismos de control).
              li.mb-2
                span ● Crear medios de recepción, gestión de peticiones y promoción de soluciones.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-21.png', alt='')

    p.mb-5(data-aos="fade-down") En resumen, la ejecución del modelo de inspección, vigilancia y control, requiere de la acción e interacción entre los siguientes actores: 

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Resumen actores modelo de Inspección, Vigilancia y Control Sanitario- IVCS</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-5a.svg', alt='La figura 5, indica cuales son los actores presentes en el modelo de inspección, vigilancia y control sanitario, como son: la autoridad sanitaria, el proveedor o producto y el usuario o consumidor.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-5b.svg', alt='La figura 5, indica cuales son los actores presentes en el modelo de inspección, vigilancia y control sanitario, como son: la autoridad sanitaria, el proveedor o producto y el usuario o consumidor.')
          figcaption Nota:  Ministerio de Salud y Protección Social. Resolución 1229 de 2013

    p.mb-5(data-aos="fade-down") Para que exista claridad respecto a los que son objetos de inspección, vigilancia y control sanitaria en salud ambiental, se enuncian a continuación: 

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Objetos de IVCS en Salud Ambiental</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-6a.svg', alt='La figura 6, establece los objetivos del IVCS en salud ambiental en todas las actividades que enmarcan el contexto humano-social.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-6b.svg', alt='La figura 6, establece los objetivos del IVCS en salud ambiental en todas las actividades que enmarcan el contexto humano-social.')
          figcaption Nota:  Ministerio de Salud y Protección Social. Modelo operativo de Inspección, vigilancia y Control sanitario para salud Ambiental. (2020).

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los anteriores objetos de inspección, vigilancia, control sanitario y que tiene impacto en la salud ambiental, deben ser clasificados en alto o bajo riesgo, acorde con las tablas de referencia vistas con anterioridad. Sin embargo, es importante tener en cuenta que existen algunos criterios que generan un alto riesgo cumpliendo uno o más criterios de inclusión, los cuales son: 
    
    .row.justify-content-center.align-items-center.mb-5 
      .col-12.d-none.d-md-block(data-aos="fade-down")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/inf-3a.svg', alt='')
          .tarjeta.color-acento-contenido.p-3(x="10%" y="80%" numero="+")
            p Lugares donde se ejecuten procesos de producción que incluya la elaboración de bienes y servicios involucrando la transformación y preparación de materias primas donde se usen sustancias químicas. 
          .tarjeta.color-acento-contenido.p-3(x="26%" y="80%" numero="+")
            p Establecimientos que tengan un marco normativo sanitario de tipo específico, como pueden ser el depósito de medicamentos, de bebidas o de alimentos.
          .tarjeta.color-acento-contenido.p-3(x="42%" y="80%" numero="+")
            p Lugares donde haya gran afluencia de personal laboral fijo, flotante u hospedado en forma temporal o permanente distinta a las unidades habitacionales. 
          .tarjeta.color-acento-contenido.p-3(x="59%" y="80%" numero="+")
            p Establecimientos que ya estén clasificados como objeto de seguimiento de inspección, vigilancia y control sanitario por parte de las entidades de control. 
          .tarjeta.color-acento-contenido.p-3(x="75%" y="80%" numero="+")
            p Lugares en donde acorde con las actividades o acciones comerciales de bienes y servicios, reportan eventos de interés en salud pública.
          .tarjeta.color-acento-contenido.p-3(x="91.5%" y="80%" numero="+")
            p Establecimientos en donde la actividad económica de bienes y servicios, tenga una alta representación de factores de riesgo de tipo químico, físico y biológico acorde con la evaluación ejecutada por las entidades sanitarias de control en el marco de las actividades de IVC sanitaria.
      .col-12.d-block.d-md-none
        figure.mb-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema1/inf-3b.svg', alt='')

    p.mb-5(data-aos="fade-down") Previo al análisis de los aspectos relacionados con la inspección, vigilancia y control sanitario se debe revisar la información relacionada al procedimiento de los objetivos de IVC sanitario para hacer la inscripción. El proceso de inscripción es un trámite administrativo que deben realizar todos los que son objeto de inspección, vigilancia y control sanitario. El formulario puede ser diligenciado en medio físico o en línea y debe tener como mínimo las siguientes variables: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-10.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-23.png', alt='')
      .col-12.col-lg-3
        ul.lista-ul
          li.mb-1
            span.icon ✔ 
            | Tipo de establecimiento. 
          li.mb-1
            span.icon ✔ 
            | Actividad económica. 
          li.mb-1
            span.icon ✔ 
            | Razón social del establecimiento. 
          li.mb-1
            span.icon ✔ 
            | NIT - número de identificación tributaria. 
          li.mb-1
            span.icon ✔ 
            | Nombre comercial. 
          li.mb-1
            span.icon ✔ 
            | Departamento. 
          li.mb-1
            span.icon ✔ 
            | Municipio. 
          li.mb-1
            span.icon ✔ 
            | Zona, rural y urbana. 
          li.mb-1
            span.icon ✔ 
            | Barrio, comuna o vereda. 
          li.mb-1
            span.icon ✔ 
            | Dirección. 
      .col-12.col-lg-5
        ul.lista-ul
          li.mb-1
            span.icon ✔ 
            | Correo electrónico. 
          li.mb-1
            span.icon ✔ 
            | Teléfono del establecimiento. 
          li.mb-1
            span.icon ✔ 
            | Nombre del representante legal. 
          li.mb-1
            span.icon ✔ 
            | Documento de identidad del representante legal. 
          li.mb-1
            span.icon ✔ 
            | Dirección de notificación del representante legal. Se debe incluir el departamento y municipio de notificación del representante legal. 
          li.mb-1
            span.icon ✔ 
            | Código CIIU. Corresponde a la Clasificación Industrial Internacional Uniforme en donde se encuentran registradas todas las actividades económicas. Este código fue elaborado por la Organización de Naciones Unidas y la revisión 4 es una adaptación para Colombia hecha y revisada por el DANE. 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.cajon.color-acento-contenido-c.p-4
          .col-10.col-md-3.col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-24.png', alt='')
          .col-12.col-md-9.col-lg 
            p Le invitamos a consultar en el material complementario el correspondiente al #[b Código CIIU.]
            p.mb-0 Éste documento, amplia la información relacionada con la Clasificación Industrial Internacional Uniforme, que se encuentra alojado en la página web del #[b Departamento Administrativo Nacional de Estadística -DANE-.]

    p.mb-5(data-aos="fade-down") Para que exista mayor claridad respecto al tipo de formato que se utiliza en la inscripción, se puede consultar el documento de Inscripción objeto de IVC Sanitaria, el cual fue tomado como ejemplo de la secretaría de salud de Santander:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.cajon.color-acento-contenido-c.p-4
          .col-10.col-md-3.col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-24.png', alt='')
          .col-12.col-md-9.col-lg 
            p Le invitamos a consultar en el material complementario el correspondiente al documento elaborado por la #[b Secretaria de Salud de Santander. Formato de Inscripción objetos de Inspección, Vigilancia y Control Sanitario.]
            p El formulario de inscripción de lugares, establecimientos o productos objeto de inspección y vigilancia, regula en el territorio nacional, requiere los datos del representante legal, así como el tiempo para llevar a cabo el proceso de inspección.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-12.col-lg-10
        p Además del formato principal dispuesto para su consulta, se cuenta con otros tipos de formatos dirigidos a los establecimientos de la línea de alimentos incluidos los expendios de cárnicos de la línea de zoonosis. Estos formatos los deben diligenciar quienes realicen actividades de tipo gastronómico, de almacenamiento, entrega (distribución), comercialización y/o transporte de alimentos y bebidas para que luego sean debidamente ingresadas en el sistema por parte de la Entidad Territorial de Salud (ETS).
        p A continuación, se listan los objetos de inspección, vigilancia y control relacionados con este tipo de inscripción: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in-down")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-1.png' alt='')
        p Preparación y consumo de alimentos.  
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-2.png' alt='')
        p Expendio de alimentos. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-3.png' alt='')
        p Almacenamiento y expendio de carne y/o productos de tipo cárnicos comestibles. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-4.png' alt='')
        p Almacenamiento de alimentos. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-5.png' alt='')
        p Venta de bebidas alcohólicas. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-6.png' alt='')
        p Plazas de mercado o centrales de abasto. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-7.png' alt='')
        p Grandes superficies como supermercados, hipermercados y los denominados grandes almacenes. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-8.png' alt='')
        p Ventas de alimentos en la vía pública (los que se encuentren autorizados en el marco de la Resolución 604 de 1993).
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-9.png' alt='')
        p Comercializador ambulante y en expendio de leche cruda para el consumo humano directo. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/slider-10.png' alt='')
        p Vehículos de transporte de alimentos. 

    //- .row.align-items-center.mb-4(data-aos="fade-down-right")
    //-   .d-flex.titulo-h3
    //-     img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
    //-     h3.mb-0.ms-3 
    p.mb-3(data-aos="fade-down") Para este tipo de establecimientos están disponibles los siguientes tipos de formatos:

    p.mb-5(data-aos="fade-down") Formulario de inscripción sanitaria para vehículos transportadores de alimentos y bebidas. El cual fue tomado como ejemplo de la secretaría de Salud de Santander, grupo de gestión de salud ambiental:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.cajon.color-acento-contenido-c.p-4
          .col-10.col-md-3.col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-25.png', alt='')
          .col-12.col-md-9.col-lg 
            p Le invitamos a consultar en el material complementario el correspondiente al #[b Formulario de inscripción sanitaria para vehículos transportadores de carne y productos cárnicos comestibles.]
            p El formulario de inscripción para vehículos transportadores de carne y otros, es adaptable al usuario y funciona a nivel nacional.

    p.mb-5(data-aos="fade-down") Formulario de inscripción sanitaria para establecimientos de expendio y/o almacenamiento de carne y productos cárnicos comestibles. Consultar el anexo 3, el cual fue tomado como ejemplo de la alcaldía de Santiago de Cali:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.cajon.color-acento-contenido-c.p-4
          .col-10.col-md-3.col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-26.png', alt='')
          .col-12.col-md-9.col-lg 
            p Le invitamos a consultar en el material complementario el correspondiente al #[b Formulario de inscripción sanitaria para establecimientos de expendio y/o almacenamiento de carne y/o productos cárnicos comestibles.]
            p Este formulario de inscripción de productos objeto de inspección y vigilancia, regula en el territorio nacional.

    p.mb-5(data-aos="fade-down") Formulario de inscripción sanitaria para sujetos o establecimientos con actividades de almacenamiento, expendio, preparación y consumo de alimentos y bebidas. 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.cajon.color-acento-contenido-c.p-4
          .col-10.col-md-3.col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-27.png', alt='')
          .col-12.col-md-9.col-lg 
            p Le invitamos a consultar en el material complementario el correspondiente al #[b Formulario de inscripción sanitaria para sujetos o establecimientos con actividades de almacenamiento, expendio, preparación y consumo de alimentos y bebidas.]
            p Este formulario de inscripción de productos objeto de inspección y vigilancia, regula en el territorio nacional.

    p.mb-5(data-aos="fade-down") Para finalizar el tema de la inscripción, es importante tener en cuenta otros procedimientos alrededor de la misma: actualización o cancelación de la inscripción. Sus detalles se describen a continuación: 

    .tarjeta--container.row.mb-5(data-aos="zoom-out-down")
      .col-md.tarjeta.color-primario-c.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/t1-ico4.png', alt='')
        h4.text-center Actualización de la inscripción
        p Deberá realizarse cuando el objeto de inspección, vigilancia y control sanitario haya cambiado de actividad económica, dirección, razón social o representante legal. En todo caso, el encargado de realizar esta actualización debe ser el representante legal o el delegado. 
      .col-md.tarjeta.color-secundario-c.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/t1-ico5.png', alt='')
        h4.text-center Cancelación de la inscripción
        p Solo procede en caso que el objeto de inspección, vigilancia y control sanitario vaya a realizar el cierre definitivo. Esta cancelación debe hacerse por el representante legal o el delegado. 

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Inspección sanitaria

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La inspección sanitaria corresponde a uno de los subprocesos de la fiscalización sanitaria, la cual tiene cuatro pasos globales que corresponden con la preparación, la inspección in situ, la evaluación con emisión del concepto y la notificación y firma del acta, establecidos en el modelo operativo de Inspección, vigilancia y control sanitario para salud ambiental. Es importante revisar el tema paso a paso y en detalle para mayor claridad en relación a la inspección. Veamos:
        
    ol.lista-ol--cuadro.lista-ol--separador.mb-5(data-aos="fade-right")
      li 
        .lista-ol--cuadro__vineta
          span #[b a]
        | La preparación de la visita cuenta con 4 momentos desde el momento en que se define el motivo de visita y hasta el alistamiento del material y equipos. Todos estos pasos se describen a continuación: 
    
    TabsC.color-acento-botones.mb-5(data-aos="zoom-in-down")
      .py-3.py-md-4(titulo="Definición del Motivo de la Visita")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-29.png', alt='')
          .col-md-7
            //- h4 Definición del Motivo de la Visita
            ul.lista-ul.ms-3
              li
                span.icon ✔ 
                | Programación de tipo rutinaria o de oficio: basada en prioridades y situaciones de interés que provoquen un riesgo para la salud de las personas. 
              li
                span.icon ✔ 
                | Por solicitud oficial: generada por una entidad de índole oficial. 
              li
                span.icon ✔ 
                | Por solicitud del interesado: realizada por la persona propietaria, representante legal o persona delegada. 
              li
                span.icon ✔ 
                | Por peticiones, quejas y reclamos: se realiza como respuesta a una petición de la comunidad o persona mediante solicitud o denuncia. 
              li
                span.icon ✔ 
                | Por eventos de interés en salud pública: proviene de un evento de interés en salud pública. 
              li
                span.icon ✔ 
                | Por solicitud de práctica de pruebas o por procesos sancionatorios o de tipo administrativo: sirve para tomar pruebas como parte de un proceso sancionatorio. 
      .py-3.py-md-4(titulo="Selección de los Inspectores")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-30.png', alt='')
          .col-md-7
            //- h4 Selección de los Inspectores
            p En este paso el coordinador a cargo del modelo de IVC sanitaria debe realizar la asignación de las personas responsables de la visita. La o las personas a cargo deberán contar con las siguientes características acorde con el tipo de objeto de la IVC sanitaria: 
            ul.lista-ul.ms-3
              li
                span.icon ✔ 
                | Formación académica. 
              li
                span.icon ✔ 
                | La capacidad técnica. 
              li
                span.icon ✔ 
                | Las competencias, habilidades, aptitudes y experiencia. 
            p En este paso es importante tener en cuenta las características de los recursos técnicos de apoyo, el tipo de riesgo asociado al objeto de la IVC sanitaria; para poder asignar la cantidad de inspectores por cada visita que se programe. 
      .py-3.py-md-4(titulo="Revisión documentación y/o antecedentes (expediente sanitario)")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-31.png', alt='')
          .col-md-7
            //- h4 Revisión documentación y/o antecedentes (expediente sanitario)
            p Se debe realizar la revisión de los antecedentes o del expediente en caso que exista una información base. Esta información puede ser:
            ul.lista-ul.ms-3
              li
                span.icon ✔ 
                | La ubicación. 
              li
                span.icon ✔ 
                | El nombre del representante legal. 
              li
                span.icon ✔ 
                | El tipo de establecimiento y las actividades económicas relacionadas. 
              li
                span.icon ✔ 
                | Los diversos hallazgos u observaciones registradas en las actas previas. 
              li
                span.icon ✔ 
                | El concepto sanitario registrado en la última visita. 
              li
                span.icon ✔ 
                | Histórico de medidas sanitarias. 
              li
                span.icon ✔ 
                | Histórico de muestras tomadas. 
            p En este paso es indispensable tener en cuenta los elementos dispuestos en las normas sanitarias vigentes con sus respectivos documentos técnicos emitidos.  
      .py-3.py-md-4(titulo="Alistamiento del material y equipos")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-32.png', alt='')
          .col-md-7
            //- h4 Alistamiento del material y equipos
            p La persona asignada por el coordinador, realizará el alistamiento del material requerido. 
            ul.lista-ul.ms-3
              li
                span.icon ✔ 
                | El inspector se identifica mediante carnet y tiene lista la dotación especial. 
              li
                span.icon ✔ 
                | Reglamentos vigentes en físico o digital en caso de requerir su consulta. 
              li
                span.icon ✔ 
                | Elementos de protección personal acorde con el tipo de objeto de IVC sanitaria a visitar. 
              li
                span.icon ✔ 
                | Actas e instructivos a diligenciar teniendo en cuenta el objeto de IVC sanitaria.
              p #[em Nota: las actas se diligencian con lapicero no borrable. ]
              li
                span.icon ✔ 
                | Cuando el diligenciamiento del acta es en medio electrónico, se dispondrá de carga suficiente los equipos deben tener suficiente carga para toda la jornada de la jornada de trabajo. 
            p #[em Nota: las actas deben tener numeración consecutiva. La entidad territorial de salud implementa el procedimiento de consolidación y registro de actas. Incluyendo las actas anuladas, pérdidas o deterioradas, por ejemplo.]

    ol.lista-ol--cuadro.lista-ol--separador.mb-5(data-aos="fade-right")
      li 
        .lista-ol--cuadro__vineta
          span #[b b]
        | La inspección #[em in situ] cuenta con dos momentos claves que son el inicio de la inspección y el recorrido por las instalaciones:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-9.col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario-c" data-aos="fade-left")
          .row(titulo="Inicio de la inspección")
            .col-12.mb-4.mb-md-0
              p Al iniciar la inspección sanitaria, la información debe ser clara en relación a objetivos, acciones y procedimientos a realizar durante la visita. El inspector entregará folleto (organizado por la Entidad Territorial de Salud) o carta explicativa de visita.
              p En el inicio de la inspección, se delegará la persona a recibir la visita y estará todo el tiempo.  
              p La revisión de documentos actúa sobre:
              .p-4.tarjeta.color-white.mb-3
                ul.lista-ul.ms-3.mb-0
                  li
                    span ✔ 
                    | Documentos, protocolos, soportes y demás registros de interés para el cumplimiento de criterios higiénicos, sanitarios y ambientales. 
                  li
                    span ✔ 
                    | Examinar documentos establecidos según la normativa relacionada con el objeto IVC sanitario. 
                  li
                    span ✔ 
                    | Inspeccionar documentos necesarios según lo observado durante la inspección. 
                  li.mb-0
                    span ✔ 
                    | Reconocer registros de actividad del establecimiento objeto de visita. 
              p.mb-0 Para evitar contratiempos, o retrasos, todas las áreas involucradas deben estar preparadas y no presentar restricción que impida la evaluación de las condiciones sanitarias. 
          .row(titulo="Recorrido por las instalaciones")
            .col-12.mb-4.mb-md-0
              p Una vez revisado los documentos, se inicia recorrido por las instalaciones validando las condiciones higiénico sanitarias establecidas en la norma vigente. La observación, realizada de manera cualitativa y cuantitativa registra todas las condiciones verificadas y definidas en el acta de IVC sanitaria. 
              p Las actas utilizadas deben ser las estandarizadas a nivel nacional por Minsalud y deben quedar consignados los hallazgos, requerimientos y demás elementos de consideración por el inspector de visita.
              p Acorde con la priorización de áreas de mayor atención desde lo sanitario, se tiene en cuenta el siguiente orden: 
              .p-4.tarjeta.color-white.mb-3
                ul.lista-ul.ms-3.mb-0
                  li
                    span ✔ 
                    | Infraestructura, zonas administrativas, comunes y productivas. 
                  li
                    span ✔ 
                    | Área de almacenamiento de productos, sustancias y residuos de tipo químico. 
                  li
                    span ✔ 
                    | Tanques de almacenamiento el agua potable, sistema de entrega (suministro) e instalaciones. 
                  li
                    span ✔ 
                    | Revisión de unidades sanitarias. 
                  li.mb-0
                    span ✔ 
                    | Inspeccionar demás áreas y equipos de interés acorde con el objeto del IVC sanitario. 
      .col-10.col-md-3.col-lg-3
        img(src='@/assets/curso/temas/tema1/tema1-33.png', alt='') 

    .cajon.color-primario.p-4.px-lg-5.mb-5(data-aos="fade-down")
      p.mb-0 Con el fin de dar mayor facilidad a todas las acciones realizadas por el objeto de IVC sanitaria, la Entidad Territorial puede recomendar la implementación de un “Plan de saneamiento” el cual muestre de forma clara y organizada los procedimientos a realizar para el cumplimiento en la reducción de riesgos sanitarios.

    ol.lista-ol--cuadro.lista-ol--separador.mb-5(data-aos="fade-right")
      li 
        .lista-ol--cuadro__vineta
          span #[b c]
        | La evaluación con la emisión del concepto cuenta con unos criterios, los cuales deben ser consignados en el acta de inspección sanitaria. El profesional evaluador deberá informar al representante legal o su delegado el resultado y concepto final, en el siguiente gráfico se describe el proceso:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Criterios de evaluación</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-7a.svg', alt='La figura 7, describe los criterios de evaluación que deben tenerse en cuenta para que sean incluidos en el acta de inspección sanitaria.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-7b.svg', alt='La figura 7, describe los criterios de evaluación que deben tenerse en cuenta para que sean incluidos en el acta de inspección sanitaria.')
          figcaption Nota: Ministerio de Salud y Protección Social (2019).

    p.mb-5(data-aos="fade-down") El resultado de los criterios evaluados permite tener el porcentaje de cumplimiento y por ende la entrega del concepto sanitario, descrito en la siguiente tabla: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Características del concepto sanitario  ] 
        figure
          img(src='@/assets/curso/temas/tema1/tabla-2.svg', alt='La tabla 2, indica las características relacionados con el concepto sanitario, teniendo en cuenta que éste puede ser: favorable, favorable con requerimientos, o desfavorable.')
          figcaption Nota: Ministerio de Salud y Protección Social (2019)

    ol.lista-ol--cuadro.lista-ol--separador.mb-5(data-aos="fade-right")
      li 
        .lista-ol--cuadro__vineta
          span #[b d]
        | A la notificación y la firma del acta se deben tener en cuenta los siguientes pasos:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0
        PasosA.color-primario(tipo="n")
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Contenido del acta
              p Presentar el contenido del acta enunciando los hallazgos más relevantes. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-34.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-35.png', alt='')
            .col-md-6.text-start
              h4 Nivel de cumplimiento
              p Escribir el nivel de cumplimiento y el concepto sanitario del objeto de IVC sanitaria.
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Manifestación del responsable de visita
              p Permitir que la persona que atienda la visita o el representante legal, escriban sus observaciones en el área del acta destinada para tal fin. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-36.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-37.png', alt='')
            .col-md-6.text-start
              h4 Observaciones del inspector 
              p El inspector podrá reportar y consignar sus observaciones si lo considera necesario. 
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Firma del acta
              p Después de leer y aceptar el contenido del acta, se debe proceder a firmar por parte de él/los inspectores y por el representante legal o su delegado. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-38.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-39.png', alt='')
            .col-md-6.text-start
              h4 Entrega de copia del acta
              p Entregar copia del acta al representante legal o su delegado. El acta original queda en poder de el/los inspectores para el ingreso al sistema de base de datos de la Entidad Territorial de Salud, con ingreso al archivo y posteriormente en custodia. 
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Negativa de firma de acta
              p Si la (s) persona (s) que atienden la visita no firman el acta, el verificador de condiciones debe dejar constancia en presencia de un testigo o la policía. Si es posible debe dejar copia del acta. Así mismo, si el objeto de IVC sanitaria autoriza previamente la notificación vía electrónica, se puede enviar por este medio. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-40.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-41.png', alt='')
            .col-md-6.text-start
              h4 Notificación resultado de visita
              p Es necesario que se notifique el resultado de la visita, por tanto, se debe citar al representante legal o la persona delegada para que asista de manera presencial a la entidad territorial de salud o en la sede que esta asigne para que sea entregada de manera oficial el acta y por tanto el resultado de la misma. 
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Publicación ante desconocimiento de datos
              p Cuando se desconozca la información del destinatario, la citación se debe publicar en una plataforma electrónica o lugar visible de dominio público durante 5 días. Es necesario indicar la fecha de publicación y del retiro; cuando se finalice la publicación esta se dará por hecha y enterada las partes. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-42.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-43.png', alt='')
            .col-md-6.text-start
              h4 Expediente soporte de visita
              p Todas las situaciones que surtan dentro del proceso quedarán como soporte al expediente del objeto de IVC sanitaria. 

    .cajon.color-secundario.p-4.px-lg-5.mb-5(data-aos="fade-down")
      p.mb-0 Como complemento a la actividad de inspección, se debe conocer el sistema de muestreo, esta actividad puede ser requerida durante la visita de verificación de condiciones sanitarias. La toma de muestras de alimentos y bebidas puede ser realizada en cualquier momento bien sea durante la preparación, el almacenamiento, el transporte, la comercialización o la venta, su objetivo es evaluar el riesgo que puede presentar el alimento o la bebida en la salud pública del territorio de influencia del objeto de IVC sanitaria. La toma de muestra se hace con el fin de evaluar aspectos claves como el rotulado, las condiciones físico químicas y de tipo microbiológico. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.cajon.color-primario-c.p-4
          .col-10.col-md-3.col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-44.png', alt='')
          .col-12.col-md-9.col-lg 
            p.mb-0 Para realizar de manera correcta el muestreo, se debe contar con los elementos claves, a saber: documentación disponible, proceso de identificación de las muestras, contar con los reactivos y demás insumos adicionales que sean necesarios para realizar el muestreo. Esta toma de muestra sólo puede ser realizada por el inspector delegado para el proceso de inspección, vigilancia y control, quien deberá contar con la experiencia técnica al respecto. 

    p.mb-5(data-aos="fade-down") Toda muestra que sea tomada durante la visita de inspección, vigilancia y control debe contar con los siguientes elementos: 

    .BGIMG03.p-4.p-lg-5.mb-5(data-aos="zoom-in-down")
      .row.justify-content-center
        .col-12.col-lg-8.mb-4
          img(src='@/assets/curso/temas/tema1/tema1-45.png', alt='')
        .col-12.col-lg-5
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span #[b 1]
              | Sitio en donde se realiza la toma de muestra. 
            li 
              .lista-ol--cuadro__vineta
                span #[b 2]
              | Identificar el tipo de alimento.
            li 
              .lista-ol--cuadro__vineta
                span #[b 3]
              | Agregar el número de lote o fecha de elaboración/preparación del alimento.
            li 
              .lista-ol--cuadro__vineta
                span #[b 4]
              | Indicar la fecha de vencimiento del producto o la fecha de elaboración/ preparación del alimento. 
            li 
              .lista-ol--cuadro__vineta
                span #[b 5]
              | Agregar la persona responsable del muestreo. 
            li 
              .lista-ol--cuadro__vineta
                span #[b 6]
              | Indicar la persona responsable de la preparación o elaboración del alimento.
        .col-12.col-lg-5
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span #[b 7]
              | Diligenciar el día, hora y lugar de la toma de muestra. 
            li 
              .lista-ol--cuadro__vineta
                span #[b 8]
              | Agregar las condiciones de conservación tales como temperatura, humedad, almacenamiento y otras observaciones que orienten el posterior análisis de laboratorio.
            li 
              .lista-ol--cuadro__vineta
                span #[b 9]
              | Indicar el estado de la muestra (líquido, sólido, semisólido, viscoso). 
            li 
              .lista-ol--cuadro__vineta
                span #[b 10]
              | Registrar el número de unidades utilizadas para el muestreo.
            li 
              .lista-ol--cuadro__vineta
                span #[b 11]
              | Considerar otro tipo de elementos que sean necesarios, como la toma fotográfica en donde queden registradas las condiciones que se sea pertinente de reportar. 

    p.mb-4(data-aos="fade-down") Es necesario que el funcionario a cargo de la inspección y quien va a realizar la toma de la muestra organice el plan de muestreo, el cual debe contener los siguientes criterios: 

    .row.justify-content-center.mb-4
      .col-12.col-lg-12.mb-2.mb-md-0(data-aos="fade-left")
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/inf-4a.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/inf-4b.svg', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-secundario.p-4.px-lg-5
          p.mb-0 Para la toma de muestra se debe cumplir con unas etapas que son indispensables para que el procedimiento sea realizado con éxito. En el siguiente gráfico se describen estas:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Etapas de la toma de la muestra</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-8a.svg', alt='La figura 8, describe las cuatro etapas de la toma de la muestra.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-8b.svg', alt='La figura 8, describe las cuatro etapas de la toma de la muestra.')
          figcaption Nota. Ministerio de Salud y Protección Social. Manual de toma de muestras de alimentos y bebidas para entidades territoriales de salud, versión 1.0, 2015.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.cajon.color-acento-contenido-c.p-4
          .col-10.col-md-3.col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-46.png', alt='')
          .col-12.col-md-9.col-lg 
            p Los requerimientos establecidos por el INVIMA, para llevar a cabo la toma de muestras y que se encuentran indicados en el Manual de toma de muestras de alimentos y bebidas para entidades territoriales de salud. Versión 1.0, puede ser consultado en el material complementario, el cual podrá consultar bajo el nombre de #[b Requerimiento para la toma de muestras.]

    p.mb-4(data-aos="fade-down") Para que el procedimiento de la toma de la muestra se realice de manera exitosa, debe contarse con los implementos y equipos necesarios, los cuales se detallan a continuación:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-47.png', alt='')
      .col-12.col-md-8.col-lg-8
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Dotación de tipo básica") 
            p Este tipo de dotación está conformada por tapabocas, gorro, guantes desechables, botas de plástico (es opcional) y bata de color blanco o tonalidad clara. Todos estos elementos deben ser de tipo desechable y deben estar limpios. 
          div(numero="2" titulo="Envases usados para la recolección de las muestras") 
            p Estos envases están conformados por bolsa de plástico que sea desechable y tipo #[em Whirl-pak], frascos que sean de boca ancha, ya que se puede llegar a necesitar tiosulfito de sodio, para lo cual se debe garantizar una concentración de 100 mg por litro de muestra; adicional a la boca ancha estos frascos deben contar con tapas de rosca y el papel de aluminio o el de envolver grueso. En todo caso estos elementos deben ser de un primer uso y estériles. 
          div(numero="3" titulo="Implementos esterilizados para recolección de muestras") 
            p Los elementos a utilizar son: cucharas, cucharones, cuchillos, pinzas, espátulas, tijeras, hisopos, embudos y sondas. Estos elementos deben estar esterilizados y envueltos para recolección de muestras.
          div(numero="4" titulo="Equipos para recolección y transporte de muestras") 
            p Se utiliza la nevera isotérmica y las pilas de congelación. Estas deben estar en buen estado, bien lavadas y desinfectadas.
          div(numero="5" titulo="Dispositivos de registro de temperatura") 
            p Se debe de contar con termómetro digital, punzón con un rango de temperatura de - 25 ºC a 50 ºC, en intervalos de no menos de 2 ºC, termocupla y termómetro para productos congelados. Estos dispositivos deben estar limpios, desinfectados, en muy buen estado y con el mantenimiento de calibración al día. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        LineaTiempoD.color-acento-botones
          div(numero="6" titulo="Otros elementos de apoyo") 
            p Tener un marcador de tipo indeleble, rollo de cinta adhesiva, etiquetas, linterna, tabla para soporte de escritura, además lápiz, lapicero, sellos de identificación de muestras, adhesivos, actas de toma de muestras, formatos de aplicación nacional y papel carbón. 
            p Todos estos equipos deben ponerse en una nevera tipo portátil la cual debe estar limpia y desinfectada ya que por medio de esta se facilita el transporte y se evita la contaminación en el traslado de un lugar a otro. 
          div(numero="7" titulo="Agentes esterilizantes") 
            p Se debe contar con alcohol etílico (95 %) y mechero.
          div(numero="8" titulo="Refrigerantes") 
            p Hielo envasado o recipiente de plástico que pueda llenarse de agua y congelarse. 
          div(numero="9" titulo="Elementos para la toma de muestra de bebidas alcohólicas") 
            p Se debe tener presente los elementos como los recipientes con tapa, marcadores de tipo indeleble, los rótulos que sean autoadhesivos, el acta oficial para la toma de muestra, una bolsa estéril que tenga cierre hermético, la nevera isotérmica y las pilas refrigerantes o hielo seco.
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-48.png', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-secundario.p-4.px-lg-5
          p.mb-0 Para complementar la información relacionada con la toma de muestra, es importante conocer el método de recolección de muestras de alimentos y materias primas sólidas, líquidas, deshidratadas y congeladas; por ello, a continuación, se describe, este procedimiento y los cuidados que se debe tener al realizarlo:

    TabsC.color-acento-botones.mb-5(data-aos="zoom-in-down")
      .py-3.py-md-4(titulo="Recolección de muestras de alimentos sólidos")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-49.png', alt='')
          .col-md-7
            //- h4 Recolección de muestras de alimentos sólidos
            p Se debe cortar o separar las porciones de los alimentos con cuchillo debidamente esterilizado u otro implemento, si es el caso. Recoger con método aséptico como mínimo 200 g de muestra con un instrumento esterilizado y se debe transferir a una bolsa de plástico o un frasco de vidrio de boca ancha estéril.  Se deben tomar diferentes muestras de arriba, al centro y de otros lugares según se considere pertinente. Para finalizar, se debe refrigerar, congelar o mantener a temperatura ambiente según sea el caso. Todo lo anterior sin tocar la boca del frasco o la bolsa. 
      .py-3.py-md-4(titulo="Recolección de Alimento líquidos o bebidas")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-50.png', alt='')
          .col-md-7
            //- h4 Recolección de Alimento líquidos o bebidas
            p Revolver o agitar. Para tomar la muestra se puede hacer con las siguientes opciones:
            ul.lista-ul.ms-3
              li
                span.icon ✔ 
                | Transferir con un instrumento esterilizado un mínimo de 200 ml en un envase esterilizado, proceder a refrigerar o mantener a temperatura ambiente la muestra según sea el caso. Todo lo anterior sin tocar la boca del frasco o bolsa. 
              li
                span.icon ✔ 
                | Colocar un tubo largo y esterilizado en el líquido y cubrir la abertura superior con el dedo o con la palma. Se debe transferir este líquido a un jarro o una bolsa esterilizada.  Se debe refrigerar o mantener a temperatura ambiente según sea el caso. Lo anterior, se debe hacer sin tocar la boca del frasco o bolsa.
      .py-3.py-md-4(titulo="Recolección de Alimento congelado")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-51.png', alt='')
          .col-md-7
            //- h4 Recolección de Alimento congelado
            p Se debe enviar o llevar pequeños volúmenes congelados al laboratorio, sin realizar descongelación y sin abrir. Además, es preciso mantener congelado y si es el caso se debe usar hielo seco.
      .py-3.py-md-4(titulo="Recolección de Alimento deshidratado")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-29.png', alt='')
          .col-md-7
            //- h4 Recolección de Alimento deshidratado
            p Introducir una sonda esterilizada desde la zona superior de un lado del envase diagonalmente por todo el centro hasta la zona inferior del lado opuesto. Se debe sostener la parte superior y realizar la transferencia al envase esterilizado y repetir la misma secuencia del lado opuesto hasta recolectar un mínimo de 200 g. Como método alternativo se puede recoger el material utilizando una cuchara, espátula, baja lengua o un implemento uno que sea similar, siempre esterilizado. Además, transferir el material a un envase estéril.
      .py-3.py-md-4(titulo="Recolección de Alimento elaborado o preparado - Menú (Desayuno, almuerzo, cena o refrigerio)")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-53.png', alt='')
          .col-md-7
            //- h4 Recolección de Alimento elaborado o preparado - Menú (Desayuno, almuerzo, cena o refrigerio)
            p Se debe tomar una muestra representativa (una unidad) que haga parte del menú, en el cual se debe incluir alimento de tipo líquido o bebidas, así mismo, se debe tomar muestra de los productos sólidos producidos o elaborados por separado en cantidad mínima de 200 g; así como identificar de manera clara cada muestra que se tome, así como la temperatura a la cual se está tomando. 

    p.mb-4(data-aos="fade-down") Para transportar la muestra es necesario que se cuenten con unos elementos claves que corresponden con: 

    .row.mb-5(data-aos="zoom-in-down")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-54.png' alt='')
          .tarjeta.color-primario
            .p-4
              p Temperatura de refrigeración para los productos que deban contar con cadena de frío. Esta temperatura oscila entre el 0 y los 4° Centígrados. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-55.png' alt='')
          .tarjeta.color-primario
            .p-4
              p Las muestras de alimentos deben entregarse al laboratorio el mismo día que se haya realizado la toma, en el menor tiempo posible (menos de 24 horas).
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-56.png' alt='')
          .tarjeta.color-primario
            .p-4
              p Los alimentos que son perecederos y refrigerados deben estar en recipientes adecuados de manera que puedan mantener su temperatura hasta la llegada al laboratorio. La conservación se puede realizar en una nevera de tipo isotérmica que tenga paquetes congelados (pilas) o hielo seco si es el caso. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.align-items-center.cajon.color-acento-contenido-c.p-4
          .col-10.col-md-3.col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-46.png', alt='')
          .col-12.col-md-9.col-lg 
            p Le invitamos a consultar en el material complementario el correspondiente al #[b Acta de toma de muestras], que es un instrumento que permite consignar de manera detallada los hallazgos de visita de inspección, vigilancia y control sanitario, que contiene los elementos generales y requeridos para realizar el procedimiento.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Vigilancia sanitaria

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-57.png', alt='')
      .col-12.col-md-8.col-lg-8
        p Consiste en la toma, análisis e interpretación de la información para la definir y recomendar las medidas sanitarias y de seguridad. La acción de vigilancia sanitaria favorece la planeación de acciones en torno a la vigilancia sanitaria, acorde con los análisis en torno a la priorización de los riesgos identificados en el territorio. Por medio de las acciones de vigilancia se puede llegar a realizar un buen análisis de la información y así mismo realizar seguimientos a las alertas y respuestas frente a los riesgos asociados con los que son objeto de IVC sanitaria. 
        p Las acciones en vigilancia sanitaria tienen dos momentos que son:
        ul.lista-ul.ms-3
          li
            span.icon ✔ 
            | #[b Pre - mercado:] se basa en el cumplimiento de los requisitos preestablecidos y las buenas prácticas. 
          li
            span.icon ✔ 
            | #[b Post - mercado:] se basa en los reportes de aquellos efectos y daños que sean asociados al consumo. 
    
    .cajon.color-secundario.p-4.px-lg-5.mb-5(data-aos="fade-down")
      p.mb-0 Por medio de la vigilancia sanitaria se puede realizar el monitoreo-observación constante de los objetos de inspección, vigilancia y control sanitario con el fin de que el objeto vigilado permanezca dentro de los parámetros que son esperados y que se convierta en un riesgo sanitario. Hay que tener presente las siguientes actividades: 

    .BGIMG03.p-4.p-lg-5.mb-5(data-aos="zoom-in-down")
      .row.justify-content-center
        .col-12.col-lg-6.mb-3.mb-lg-0
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span #[b 1]
              | Recolectar, guardar y procesar datos producto del resultado de la inspección como base para la toma de, acopio y procesamiento de datos y resultados de Inspección y control sanitario, que sirve para las decisiones de gestión integral de riesgo en la salud pública. 
            li 
              .lista-ol--cuadro__vineta
                span #[b 2]
              | Socialización de normatividad nacional y de entes superiores. 
            li 
              .lista-ol--cuadro__vineta
                span #[b 3]
              | Planeación de visitas. 
            li 
              .lista-ol--cuadro__vineta
                span #[b 4]
              | Tomas de muestras para análisis físicos- químicos- microbiológicos.
            li 
              .lista-ol--cuadro__vineta
                span #[b 5]
              | Elaboración y diligenciamiento de formatos y procesos que permitan el análisis, trazabilidad y seguimiento de los riesgos sanitarios relacionados con los objetos de IVC.
        .col-12.col-lg-4
          img(src='@/assets/curso/temas/tema1/tema1-58.png', alt='')

    p.mb-4(data-aos="fade-down") Hay que tener presente que en el marco de la vigilancia sanitaria enfocada en alimentos y bebidas se puede tener en cuenta los siguientes aspectos: 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0
        PasosA.color-primario(tipo="n")
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Monitoreo de muestras
              p Este monitoreo de muestras se realiza con base en los análisis efectuados y el arrojo de datos no aceptables en el marco de la inocuidad. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-59.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-60.png', alt='')
            .col-md-6.text-start
              h4 Recopilación, almacenamiento y procesamiento de datos
              p Esta recopilación, almacenamiento y procesamiento de los datos y resultados de inspección y control sanitario de alimentos, es un elemento indispensable en las decisiones de gestión de riesgo.
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Estandarizar y protocolizar de planes de muestra
              p Teniendo en cuenta el riesgo del alimento, el histórico de cumplimiento del producto, la relación con brotes de ETA (Enfermedades Transmitidas por Alimentos), la repetición de rechazos por presencia de patógenos y contaminantes químicos o de adulterantes.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-61.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-62.png', alt='')
            .col-md-6.text-start
              h4 Recomendaciones
              p Diseñar y entregar la respectiva recomendación de medidas de tipo sanitario y de seguridad para que sean aprobadas acorde con los resultados de la inspección.
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Alertas de respuesta
              p Correspondiente al estudio de la información que tiene relación con las alertas y respuestas ante diversos eventos o riesgos que sean relacionados o asociados a la inocuidad de los alimentos y bebidas.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-63.png', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-secundario.p-4.px-lg-5
          p.mb-0 Es importante tener en cuenta que, para realizar la inspección y la vigilancia sanitaria, se debe tener claridad de los formatos establecidos. A continuación, se listan los documentos que se deben tener en cuenta: 

    .row.align-items-center.mb-5(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.ms-3 Formato denominado acta general de IVC: dentro del acta general se deben tener en cuenta los siguientes elementos: 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-10.col-lg-4.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/tema1/tema1-64.png', alt='')
      .col-12.col-lg-8
        ul.lista-ul.ms-3
          li
            span ✔ La identificación del establecimiento. 
          li
            span ✔ El concepto sanitario recibido en la última visita sanitaria. 
          li
            span ✔ El motivo de la presente visita. 
          li
            span ✔ Los criterios a evaluar. 
          li
            span ✔ La revisión documental. 
          li
            span ✔ La información específica. 
          li
            span ✔ Las condiciones locativas, de tipo sanitario y de seguridad: se incluyen las condiciones de saneamiento que corresponde con abastecimiento de agua, manejo y disposición de vertimientos, manejo de residuos sólidos y el control integrado de plagas. 
          li
            span ✔ Prevención de emergencias, desastres en el marco de la gestión del riesgo.
          li
            span ✔ Cumplimiento de condiciones sanitarias en porcentaje (%). 
          li
            span ✔ Relación de muestras tomadas en el establecimiento en caso que se haya realizado.
          li
            span ✔ Solicitudes o requerimientos sanitarios. 
          li
            span ✔ Observaciones de la autoridad sanitaria y del objeto de la IVC sanitaria. 
          li
            span ✔ Comunicación del tipo de medida sanitaria de seguridad/preventiva. 
          li
            span ✔ Información respecto a la toma de muestras. 
          li
            span ✔ Plazo para el cumplimiento de exigencias. 
          li
            span ✔ Notificación del acta. 

    p.mb-5(data-aos="fade-down") Le invitamos a consultar en el material complementario el correspondiente a los #[b Formatos de uso en inspección, vigilancia y control sanitario:]

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.col-lg-10
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/doc3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Formato acta general inspección sanitaria
                  p Para ampliar la información se invita a leer el documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://historico.santander.gov.co/intra/index.php/antico/viewdownload/530-formatos/10073-acta-general-de-inspeccion-vigilancia-y-control-sanitario" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.col-lg-10
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-26.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Formato de acta Ley 1335 de 2009
                  p Para ampliar la información se invita a leer el documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://historico.santander.gov.co/intra/index.php/antico/viewdownload/530-formatos/10061-acta-de-inspeccion-y-vigilancia-sanitaria-ley-1335-de-2009" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.col-lg-10
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-27.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Formato acta de aplicación de medida
                  p Para ampliar la información se invita a leer el documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.invima.gov.co/documents/20143/1402493/13.+Acta+de+Aplicaci%C3%B3n+de+Medida+Sanitaria+de+Seguridad-ETS.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-secundario.p-4.px-lg-5
          p.mb-0 Usted puede acceder a manera de ejemplo, a estos formatos regulados por la Secretaria de Salud de Santander.

    p.mb-5(data-aos="fade-down") Es importante tener presente que existen otras actas dispuestas para la inspección, vigilancia y control acorde con el tipo de objeto de IVC sanitaria en el campo de salud ambiental. A continuación, se relacionan los objetos de IVC sanitaria ambiental con el tipo de actas a tener en cuenta y la normatividad que apoya dicho documento:  

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Actas de acuerdo con los objetos de IVC sanitaria ambiental] 
        .tabla-a.color-acento-contenido
          table(style="min-width:1024px")
            caption Nota: Ministerio de Salud y Protección Social. Modelo operativo de Inspección, vigilancia y Control sanitario para salud Ambiental (2020)
            thead
              tr
                th(style="width:35%") Objeto de Inspección, Vigilancia y Control Sanitario
                th Acta que se debe aplicar y normatividad que aplica
            tbody
              tr.cabecera-a
                td.text-start(rowspan="2") #[b Situaciones de emergencia. ]
                td.text-start Lista de chequeo para el alojamiento / Ley 9 de 1979. 
              tr
                td.text-start Formato de seguimiento a los albergues / Ley 9 de 1979.
              tr.cabecera-a
                td.text-start(rowspan="4") #[b Servicios sociales como hogares de paso, centros día centros vida, hogares geriátricos y hogares comunitarios. ]
                td.text-start Acta de hogares de paso pacientes con cáncer / Ley 9 de 1979 y Resolución 1440 de 2013.  
              tr
                td.text-start Actas centros día y centros vida / Ley 9 de 1979, Resolución 024 de 2017 y Resolución 055 de 2018. 
              tr.cabecera-a.text-start 
                td.text-start Acta de hogares geriátricos y de larga estancia / Ley 9 de 1979, Resolución 14861 de 1985. 
              tr
                td.text-start Acta de hogares comunitarios / Ley 9 de 1979, Resolución 14861 de 1985.
              tr.cabecera-a
                td.text-start(rowspan="3") #[b Comerciales, centros de prostíbulo y otros afines. ]
                td.text-start Acta de prostíbulos y similares / Ley 9 de 1979, Resolución 14861 de 1985 y Decreto 780 de 2016. 
              tr
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009. 
              tr.cabecera-a
                td.text-start Acta generadores de residuos generados en la atención en salud y otras actividades / Decreto 351 de 2014, Decreto 780 de 2016 y Resolución 1164 de 2002. 
              tr
                td.cabecera-b.text-start(rowspan="3") #[b Terminales portuarios, tráfico nacional y los puntos de entrada. ]
                td.text-start Acta de terminales portuarios y puntos de entrada / Decreto 1601 de 1984, Reglamento sanitario internacional - RSI - 2005. 
              tr.cabecera-a
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr
                td.text-start Acta generadores de residuos generados en la atención en salud en caso que el terminal o punto de entrada cuente con atención medica / Decreto 351 de 2014, Decreto 780 de 2016 y Resolución 1164 de 2002.
              tr.cabecera-a
                td.text-start(rowspan="4") #[b Hospitalarios y similares. ]
                td.text-start Acta para establecimientos hospitalarios y similares con internación y/o consulta externa / Ley 9 de 1979, Resolución 4445 de 1996 y Decreto 780 de 2016. 
              tr
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr.cabecera-a.text-start 
                td.text-start Acta generadores de residuos generados en la atención en salud y otras actividades / Decreto 351 de 2014, Decreto 780 de 2016 y Resolución 1164 de 2002.
              tr
                td.text-start Acta de generadores de residuos generados en la atención en salud por profesionales independientes / Circular 000047 de 2006 y Resolución 1164 de 2002.
              tr.cabecera-a
                td.text-start(rowspan="3") #[b Área comercial como estética ornamental. ]
                td.text-start Acta de estética ornamental: peluquerías, barberías, salas de belleza y escuelas de formación / Resolución 2117 de 2010, Resolución 2827 de 2006. 
              tr
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr.cabecera-a
                td.text-start Acta generadores de residuos generados en la atención en salud y otras actividades / Decreto 351 de 2014, Decreto 780 de 2016 y Resolución 1164 de 2002.
              tr
                td.cabecera-b.text-start(rowspan="3") #[b Área comercial como establecimientos veterinarios. ]
                td.text-start Acta de establecimientos veterinarios / Ley 9 de 1979, Resolución 14861 de 1985, Ley 576 de 2000, Decreto 780 de 2016.
              tr.cabecera-a
                td.text-start Acta generadores de residuos generados en la atención en salud y otras actividades: consultorios, clínicas, laboratorios, droguerías y peluquerías veterinarias, centros de zoonosis y zoológicos y tiendas de mascotas / Decreto 351 de 2014, Decreto 780 de 2016 y Resolución 1164 de 2002.
              tr
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr.cabecera-a
                td.text-start(rowspan="3") #[b Área comercial como cementerios. ]
                td.text-start Acta de cementerios / Ley 9 de 1979 y Resolución 5194 de 2010. 
              tr
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr.cabecera-a
                td.text-start Acta generadores de residuos generados en la atención en salud y otras actividades / Decreto 351 de 2014, Decreto 780 de 2016 y Resolución 1164 de 2002.
              tr
                td.cabecera-b.text-start(rowspan="2") #[b Establecimientos industriales, comerciales y de servicios donde se usan y almacenan sustancias y productos químicos. ]
                td.text-start Acta de establecimientos comerciales, industriales y de servicios donde se usan y almacenan sustancias y productos químicos / Ley 09 de 1979, Ley 55 de 1993, Resolución 14861 de 1985 y CONPES 3868 de 2016.  
              tr.cabecera-a
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr
                td.cabecera-b.text-start(rowspan="2") #[b Área industrial como fabricación de colchones. ]
                td.text-start Acta fábrica de colchones y acta para la comercialización de colchones / Resolución 1842 de 2009. 
              tr.cabecera-a
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr
                td.cabecera-b.text-start(rowspan="2") #[b Lugares de diversión pública. ]
                td.text-start Acta general / Ley 9 de 1979 y Resolución 14861 de 1985.
              tr.cabecera-a
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr
                td.cabecera-b.text-start(rowspan="2") #[b Lugares de espectáculo público. ]
                td.text-start Acta general / Ley 9 de 1979 y Resolución 14861 de 1985.
              tr.cabecera-a
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr
                td.cabecera-b.text-start(rowspan="3") #[b Centros carcelarios. ]
                td.text-start Acta de establecimientos carcelarios / Ley 9 de 1979 y Resolución 14861 de 1985. 
              tr.cabecera-a
                td.text-start Acta generadores de residuos generados en la atención en salud y otras actividades si cuenta con servicio médico / Decreto 351 de 2014, Decreto 780 de 2016 y Resolución 1164 de 2002.
              tr
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr.cabecera-a
                td.text-start(rowspan="2") #[b Centros cuartelaríos. ]
                td.text-start Acta de batallones / Ley 9 de 1979 y Resolución 14861 de 1985.
              tr
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr.cabecera-a
                td.text-start(rowspan="3") #[b Centros educativos. ]
                td.text-start Acta de establecimientos educativos y acta establecimientos educativos sin laboratorio / Ley 9 de 1979 y Resolución 14861 de 1985.
              tr
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr.cabecera-a
                td.text-start Acta generadores de residuos generados en la atención en salud y otras actividades si cuenta con servicio de salud, anfiteatro o clínica veterinaria para actividades de docencia / Decreto 351 de 2014, Decreto 780 de 2016 y Resolución 1164 de 2002.
              tr
                td.cabecera-b.text-start(rowspan="2") #[b Vivienda transitoria. ]
                td.text-start Acta de vivienda transitoria / Ley 9 de 1979 y Resolución 14861 de 1985. 
              tr.cabecera-a
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.
              tr
                td.cabecera-b.text-start(rowspan="2") #[b Vivienda permanente. ]
                td.text-start Acta general IVC / Ley 9 de 1979 y Resolución 14861 de 1985.
              tr.cabecera-a
                td.text-start Acta de vigilancia sanitaria / Ley 1335 de 2009.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Control sanitario

    .mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-10.col-md-4.col-lg-4
          img(src='@/assets/curso/temas/tema1/tema1-65.png', alt='')
        .col-12.col-md-8.col-lg-8
          p El control sanitario corresponde con aquel subproceso relacionado con la toma de acciones y correctivos en torno a los resultados obtenidos en la inspección y vigilancia sanitaria. Mediante el control sanitario se debe garantizar la adopción de medidas sanitarias, el cumplimiento de estas medidas, así como la evaluación ante los correctivos implementados.  
          p.mb-0 Las medidas sanitarias se consideran acciones de tipo correctivas que se realizan con el fin de prevenir daños a la Salud Pública. Acorde con los conceptos relacionados en la #[b Ley novena del año 1979], específicamente en el artículo 576, se pueden considerar las siguientes medidas sanitarias: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Congelamiento") 
            p Consiste en sacar del comercio de manera temporal y hasta por 60 días un producto, que pueda representar un factor de riesgo epidemiológico para la salud de la población. En el procedimiento se deben realizar acciones sobre las existencias, utilizando bandas, sellos u otro tipo de elementos de seguridad según aplique. El producto debe tener análisis que evalúe su ajuste a las normas sanitarias. Acorde con el resultado se procede a decomisar o entregar nuevamente a los interesados. 
          div(numero="2" titulo="Desnaturalización (destrucción)") 
            p Se realiza la destrucción de un producto mediante la utilización de medios físicos, químicos o biológicos, los cuales producen un cambio a nivel de la forma y también de las propiedades del producto. 
          div(numero="3" titulo="Decomiso") 
            p Radica en tomar un producto, cuando no se cumplan con las exigencias sanitarias y represente un riesgo de tipo epidemiológico para la población. 
          div(numero="4" titulo="Suspensión parcial") 
            p Se trata de dar la orden de suspender las actividades o servicios de manera temporal cuando se presente una violación a las normas sanitarias establecidas. La suspensión parcial afecta un proceso o zona específica y no a todo el establecimiento. 
          div(numero="5" titulo="Suspensión total") 
            p Se centra en dar la orden de suspender las actividades o servicios de manera permanente cuando se presente una violación a las normas sanitarias establecidas. La suspensión total afecta a todo el establecimiento. 
          div(numero="6" titulo="Clausura temporal parcial") 
            p Se describe como la acción de prohibir la actividad durante un tiempo determinado como método de prevención o acciones de control epidemiológico en el caso que la estructura física altere las tareas que se ejecutan, causando de esta manera, un problema sanitario. Este tipo de clausura se realiza sobre parte del establecimiento. 
          div(numero="7" titulo="Clausura temporal total") 
            p Se basa en la acción de prohibir la actividad durante un tiempo determinado como método de prevención o acciones de control epidemiológico en el caso que la estructura física altere las tareas que se ejecutan, causando de esta manera, un problema sanitario. Este tipo de clausura se realiza sobre la totalidad del establecimiento.
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-66.png', alt='')

    p.mb-5(data-aos="fade-down") Los formatos relacionados en esta acción de control sanitario son los siguientes: 

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.col-lg-10
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/doc3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Formato de acta de destrucción
                  p Para ampliar la información se invita a leer el documento de la Secretaria de Salud de Santander.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://historico.santander.gov.co/intra/index.php/antico/viewdownload/530-formatos/10073-acta-general-de-inspeccion-vigilancia-y-control-sanitario" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.col-lg-10
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-26.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Formato de acta de congelamiento 
                  p Para ampliar la información se invita a leer el documento de la Alcaldía Municipal de Ibagué.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.ibague.gov.co/portal/admin/archivos/publicaciones/2019/28287-DOC-20191106160224.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.col-lg-10
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-27.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Formato acta de levantamiento de medida
                  p Para ampliar la información se invita a leer el documento de la Secretaria de Salud de Santander.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://historico.santander.gov.co/intra/index.php/antico/viewdownload/527-formatos/6428-acta-de-levantamiento-de-medida-sanitaria-de-seguridad-a-equipos-biomedicos" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code

    p.mb-3(data-aos="fade-down") También se deben tener en cuenta los Formatos para sellamiento, clausurado, clausura temporal, congelamiento, de acta de desnaturalización y suspensión de trabajos. 
    p.mb-5(data-aos="fade-down") Por otro lado, existen las medidas sancionatorias las cuales se presenta ante un hecho grave y por resolución motivada, en donde exista una clara violación a los lineamientos del código sanitario nacional. Las medidas sancionatorias son las siguientes: 

    .BGIMG01.p-4.p-lg-5.mb-5(data-aos="zoom-in-down")
      SlyderB(:datos="datosSlyder")

    p.mb-5(data-aos="fade-down") Para finalizar respecto a la temática de este primer tema, es importante tener en cuenta las medidas sanitarias de tipo preventivas o de seguridad, las cuales consisten en: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/t-ico1.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Realizar aislamiento o internación de personas con el fin de prevenir la transmisión de enfermedades. Esta acción deberá contar con constancia médica expedida por la autoridad sanitaria y puede extenderse por el tiempo necesario con el fin de que se desaparezca la presencia de peligro de contagio.   
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/t-ico2.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Toma y puesta en observación de animales que se consideren sospechosos de portar de enfermedades de tipo transmisibles.
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/t-ico3.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Realizar procesos de vacunación de personas y animales. 
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/t-ico4.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Ejecutar el control de insectos u otra fauna que se considere nociva o transmisora de enfermedades que representen un riesgo para la salud pública. 
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/t-ico5.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Suspender los trabajos o servicios cuando estos puedan generar un peligro sanitario para la población. 
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/t-ico6.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Realizar decomiso o pone en custodia aquellos objetos que se consideren como riesgo sanitario para la población.
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/t-ico7.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Realizar acciones para desocupar o desalojar de sitios como establecimientos o viviendas cuando la vida de las personas se encuentre en amenaza. 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'La amonestación',
        texto:
          'Es un llamado de atención que se realiza de manera escrita a quien haya incurrido en una violación al código sanitario, teniendo en cuenta que esta violación no genera un peligro para la salud y la vida de la población. Si la falla persiste, se debe proceder a realizar una sanción mayor. Es importante que este tipo de sanción describa el plazo dado para que se cumpla con las acciones erradas. ',
        imagen: require('@/assets/curso/temas/tema1/tema1-67.png'),
      },
      {
        titulo: 'Multas',
        texto:
          'Sanción de tipo pecuniario, a una persona natural o jurídica por violación de los lineamientos sanitarios, bien sea por ejecución de la actividad u la omisión de una conducta.  Las multas pueden darse de forma sucesiva, asciende hasta los 10.000 SMMLV. Se paga ante la entidad que la impuso, en los 5 días hábiles siguientes. El no pago, genera proceso hará cobro jurídico coactivo.',
        imagen: require('@/assets/curso/temas/tema1/tema1-68.png'),
      },
      {
        titulo: 'Decomiso',
        texto:
          'Es la incautación de manera definitiva cuando no se cumplen con los lineamientos sanitarios lo cual genera un riesgo para la salud individual y colectiva.  Este decomiso se realiza por medio de resolución motivada, expedida por las autoridades sanitarias (en la jurisdicción que corresponda) a cargo, con el respectivo funcionario que haya sido asignado. Este funcionario deberá realizar el acta. Se debe entregar copia a la persona a cargo de lo decomisado.',
        imagen: require('@/assets/curso/temas/tema1/tema1-69.png'),
      },
      {
        titulo:
          'Suspensión de permiso sanitario de funcionamiento de establecimientos o servicios',
        texto:
          'Es la privación de manera temporal del permiso de funcionamiento por haber realizado conductas en contraposición a lo establecido en las normas que regulan el sector sanitario. Acorde con la gravedad de la falta, se puede realizar la suspensión hasta por un (1) año. Solo podrá desaparecer la suspensión cuando se hayan subsanado los motivos la originaron. Durante este tiempo de suspensión, los establecimientos o servicios no pueden desarrollar ninguna actividad.',
        imagen: require('@/assets/curso/temas/tema1/tema1-70.png'),
      },
      {
        titulo:
          'Cierre temporal o definitivo de establecimientos, edificaciones o servicios',
        texto:
          'Consiste en hacer un alto de tareas que se desarrollan ante la existencia de sucesos o conductas contrarias a los lineamientos sanitarios. Se realiza por medio de resolución motivada de la autoridad sanitaria competente y puede realizarse en torno a todo el establecimiento, edificación o servicio o sólo para un proceso o una parte que se ejecute en él. La autoridad sanitaria a cargo de la diligencia, procede mediante el uso de sellos, bandas u otros elementos aprobados y adecuados.',
        imagen: require('@/assets/curso/temas/tema1/tema1-71.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
