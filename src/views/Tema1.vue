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
              img(src='@/assets/componentes/ej-05.svg', alt='')
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
              img(src='@/assets/componentes/ej-05.svg', alt='')
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
              img(src='@/assets/componentes/ej-05.svg', alt='')
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






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
