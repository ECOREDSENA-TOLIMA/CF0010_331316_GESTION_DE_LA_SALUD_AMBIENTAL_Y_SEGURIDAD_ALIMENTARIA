<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso y procedimiento de aseguramiento sanitario de las cadenas productivas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg
        p Para abordar el tema de proceso y procedimiento para el aseguramiento de las cadenas productivas, es importante citar nuevamente la Resolución 1229 de 2013. Según los lineamientos de la presente norma, el denominado aseguramiento sanitario de las cadenas productivas se considera como el macro proceso misional el cual cuenta con actividades de difundir, implementar, efectuar y mantenimiento de las acciones de seguridad sanitaria como un bien considerado público, el cual debe tener una corresponsabilidad de parte de todos los actores sociales que sean considerados como sujetos de vigilancia y control sanitario. 
        .cajon.color-secundario.p-4
          p.mb-0 El enfoque de las cadenas productivas se basa en atender las directrices de promoción y educación en salud que sean definidos por el ente mayor; es decir, por el Ministerio de Salud y Protección Social. El aseguramiento de las cadenas productivas está conformado por dos componentes estratégicos, los cuales ponen su foco en los proveedores/productores de bienes y servicios y en la sociedad en general como usuaria/consumidores de estas cadenas productivas. Para dar soporte a los componentes estratégicos se cuentan con las buenas prácticas, el reconocimiento de las mismas, así como la educación en salud sanitaria y educación en salud. 
      .col-10.col-md-3.col-lg-3
        img(src='@/assets/curso/temas/tema2/tema2-1.png', alt='')
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Buenas prácticas

    p.mb-4(data-aos="fade-down") Las buenas prácticas son un componente orientado a la promoción de las mismas, teniendo en cuenta elementos claves como lo son: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-4.col-lg-3
        img(src='@/assets/curso/temas/tema2/tema2-2.png', alt='')
      .col-12.col-md-8.col-lg-9
        TabsA.color-acento-botones.mb-5(data-aos="fade-down")
          .tarjeta.color-primario.p-4(titulo="Sujetos de vigilancia")
            h4 Sujetos de vigilancia 
            p Auto reconocer los posibles sujetos para vigilancia, registro de tipo voluntario y obtener la certificación de personas, establecimientos o procesos productivos de bienes y servicios. 
          .tarjeta.color-primario.p-4(titulo="Certificación y acreditación")
            h4 Certificación y acreditación 
            p Realizar la certificación y acreditación de las cadenas productivas. 
          .tarjeta.color-primario.p-4(titulo="Incentivos sanitarios")
            h4 Incentivos sanitarios 
            p Construir el modelo de incentivos sanitarios que premien la ejecución de buenas prácticas y se llegue a recompensar la búsqueda de la excelencia. 
          .tarjeta.color-primario.p-4(titulo="Conciencia y autorregulación sanitaria")
            h4 Conciencia y autorregulación sanitaria 
            p Fomentar la conciencia sanitaria y las acciones de autorregulación enfocada en los actores del sistema sanitario, por medio de la ejecución de políticas en el campo de educación en salud generando actitudes que sean correctas y de buenas prácticas a nivel individual y comunitario en todas las áreas de la vida cotidiana. 
          .tarjeta.color-primario.p-4(titulo="Mecanismos de participación")
            h4 Mecanismos de participación 
            p Promover los mecanismos dirigidos a la participación, el empoderamiento y la apropiación del sentido de corresponsabilidad en la gestión de la seguridad sanitaria.

    p.mb-4(data-aos="fade-down") Es de resaltar que los planes de incentivos tienen como objeto el otorgamiento de reconocimientos orientados al buen desempeño de los actores que hacen parte de la salud ambiental, lo cual ayuda a generar una cultura de seguridad sanitaria, con enfoque de calidad teniendo en cuenta un mayor compromiso con los lineamientos y directrices gubernamentales enfocadas en la seguridad sanitaria ambiental. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La educación en salud es necesaria, dado que para llevar una vida saludable y a su vez productiva, cada persona debe conocer las principales estrategias que ayuden a prevenir condiciones que provoquen estados de enfermedad o falta de bienestar. Por esta razón, la educación en salud, es considerada como un elemento catalizador que ayuda en el desarrollo y la ejecución de acciones sanitarias. #[b “La Declaración de Incheon de 2015 corrobora que la educación desarrolla las competencias, los valores y las actitudes para que los ciudadanos gocen de una vida saludable, tomen decisiones bien fundamentadas y afronten los problemas a escala local y mundial”]. 

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Concepto sanitario

    p.mb-5(data-aos="fade-down") El concepto sanitario es el resultado a la evaluación realizada por la autoridad sanitaria; este concepto es emitido ante el proceso de inspección, vigilancia y control, teniendo en cuenta los criterios parametrizados en las actas dispuestas normativamente, y de las cuales se arroja un resultado porcentual teniendo en cuenta el cumplimiento o no cumplimiento de los lineamientos sanitarios. Dicho concepto puede ser favorable, favorable con requerimientos o desfavorable, como se explica brevemente:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/inf-2a.svg', alt='')
      .tarjeta.color-acento-contenido.p-3(x="50%" y="32%" numero="+")
        h4 Favorable
        p Se da un concepto sanitario favorable cuando el establecimiento se alinea con la totalidad de los requisitos sanitarios legales. El porcentaje de cumplimiento se ubica entre el 95 - 100 %.
      .tarjeta.color-acento-contenido.p-3(x="27%" y="46%" numero="+")
        h4 Favorable con requerimientos
        p Se genera cuando se ha comprobado que el establecimiento no cumple con uno o varios de los criterios evaluados. Aplica en caso que el no cumplimiento, no afecte de manera directa la inocuidad del alimento o la bebida manipulada. Se debe consignar los hallazgos en el acta teniendo en cuenta el enfoque de riesgo que corresponda. El porcentaje de cumplimiento se ubica entre el 50 - 94 %.
      .tarjeta.color-acento-contenido.p-3(x="73%" y="46%" numero="+")
        h4 Desfavorable
        p Se genera cuando el establecimiento no cumple con los requisitos sanitarios legales. Debe aplicarse la medida sanitaria de seguridad necesaria, acorde con lo establecido en la Ley 09 de 1979, o aquella norma que la modifique, adicione o sustituya. Cuando se genere el concepto desfavorable para los expendios de bebidas alcohólicas, el concepto sanitario pendiente se da de acuerdo con el Decreto 1686 de 2012- Concepto sanitario pendiente (bebidas alcohólicas).
    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Certificación y acreditación

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b El Ministerio de Salud], por medio de la expedición del #[b Decreto 335 de 2022], organizó el procedimiento que deberán tener en cuenta quienes tengan como objetivo el obtener el certificado de buenas prácticas de elaboración, tanto para procesos de laboratorio como de manufactura ante el #[b INVIMA]. Esta certificación aplica para los siguientes actores:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema2/tema2-5.png' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Fabricantes o todos los que estén a cargo del proceso productivo de los medicamentos que cuenten con síntesis química, biológica, biotecnológica. 
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema2/tema2-6.png' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Laboratorios que realicen el respectivo control de calidad a los medicamentos. 
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema2/tema2-7.png' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Radiofarmacias que ejecuten actividades utilizando radiofármacos que necesiten la certificación en Buenas Prácticas de Elaboración de Radiofármacos- BPER.
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema2/tema2-8.png' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Servicios y establecimientos farmacéuticos que ejecuten actividades de adecuación y ajuste en la concentración de dosis, la elaboración de nutriciones parenterales, de preparaciones magistrales, re-empaque y re-envase de medicamentos, que necesiten la certificación en Buenas Prácticas de Elaboración - BPE.
      .col-lg-11.col-md-12.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema2/tema2-9.png' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 El INVIMA y las entidades territoriales de salud, acorde con las competencias que correspondan con su actividad laboral.

    p.mb-4(data-aos="fade-down") Los tipos de certificación a obtener mediante la implementación de buenas prácticas, pueden ser consultadas en la siguiente figura:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 9. </b> <i>Tipos de certificación en buenas prácticas</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-9a.svg', alt='La figura 9, establece los tres tipos de certificación en buenas prácticas.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-9b.svg', alt='La figura 9, establece los tres tipos de certificación en buenas prácticas.')
          figcaption Nota: Ministerio de Salud y Protección Social, Decreto 335 de 2022

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-4.col-lg-3
        img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')
      .col-12.col-md-8.col-lg-9 
        p Aquellos que se encuentren interesados en el certificado de buenas prácticas deben cumplir con los siguientes pasos: 
        ul.lista-ul--separador.ms-3
          li 
            i.fas.fa-angle-right
            | Presentar la solicitud en el formato definido por el INVIMA.
          li 
            i.fas.fa-angle-right
            | Estar inscritos en el Registro Único Empresarial y Social - RUES, o el documento que haga sus veces.  
          li 
            i.fas.fa-angle-right
            | Documento de la autoevaluación de la Guía de Inspección, el cual debe estar diligenciado de manera correcta, acorde con la categoría de certificación.
          li 
            i.fas.fa-angle-right
            | Expediente maestro de sitio (SMF, siglas en inglés) para las Buenas Prácticas de Manufactura de medicamentos de síntesis química, biológicos y gases medicinales.
          li 
            i.fas.fa-angle-right
            | Copia de la autorización vigente para el uso del material radiactivo la cual es expedida por el Ministerio de Minas y Energía o su delegado, para el trámite de Buenas Prácticas de Elaboración de Radiofármacos - BPER.
          li 
            i.fas.fa-angle-right
            | Dar constancia del pago de la tasa correspondiente al tipo de certificado solicitado.

    p.mb-5(data-aos="fade-down") El INVIMA revisa las solicitudes realizadas en un plazo de 15 días hábiles. Se pueden presentar dos escenarios:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6.col-lg-3
                figure
                  img(src='@/assets/curso/temas/tema2/ico-1.png', alt='')
            h2.text-center Cumplimiento de los requisitos establecidos
            p INVIMA incluye el establecimiento o la institución en el cronograma de visitas de Certificación de Buenas Prácticas. Puede ser renovado por un período igual al de su vigencia. Para solicitar renovación, radicar ante el INVIMA  5 días hábiles antes de la fecha de vencimiento.
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6.col-lg-3
                figure
                  img(src='@/assets/curso/temas/tema2/ico-2.png', alt='')
            h2.text-center No cumplimiento de los requisitos establecidos
            p INVIMA solicita al establecimiento que cumpla con la totalidad de los requisitos, dando un plazo de 20 días hábiles adicionales, contados a partir de la fecha de recepción de la comunicación emitida. Puede ser prorrogado por única vez con previa solicitud del interesado.






</template>

<script>
export default {
  name: 'Tema2',
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
