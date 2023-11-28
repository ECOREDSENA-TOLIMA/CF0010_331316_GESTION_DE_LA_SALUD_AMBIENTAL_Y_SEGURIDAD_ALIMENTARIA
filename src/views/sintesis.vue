<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 La comprensión de los riesgos ambientales desde el orden de la salud pública, que afecta los bienes de consumo y sanitarios que están presentes en los territorios, no es tarea fácil, principalmente porque el desarrollo de la vida misma ha complejizado el grado de riesgo ante el cual nos encontramos expuestos de manera permanente. Sin embargo, la normatividad y los diferentes entes de control y sanitarios que se tienen a disponibilidad para la regulación de este fenómeno son importantes y puede ser aún más eficaz en la medida en que todos asumamos el compromiso y la responsabilidad que tenemos para consigo mismos, para la familia y para sociedad, en pro de tener un ambiente sano para todos. Es así, como el siguiente gráfico orienta sobre los conceptos revisados en el desarrollo de este tema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
