<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12
        p.mb-4 Bienvenidos a este componente formativo relacionado con los riesgos ambientales, del consumo y sanitarios según la salud pública, que corresponde con el control, las buenas prácticas y la intervención sanitaria, que están presentes en el ambiente y los riesgos que conlleva.
        p Por lo anterior, le invitamos a ver el siguiente video en donde encontrará de manera general información concerniente con el tema de riesgo ambiental tanto, a nivel sanitarios como de consumo:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="Riesgos ambientales, del consumo y sanitarios según la salud pública" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Riesgos ambientales, del consumo y sanitarios según la salud pública


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
