<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/1.png', alt='', style="width: 480px").m-auto
      .col-lg-7
        p(data-aos="fade-up") Este componente presenta los fundamentos conceptuales y metodológicos relacionados con la formulación y estructuración de proyectos, orientando el proceso desde la identificación de una necesidad hasta la organización técnica de una propuesta de inversión o de una iniciativa empresarial. En este sentido, se centra en el análisis del entorno, en la aplicación de metodologías de investigación y en la elaboración de los estudios de mercado, técnico y financiero, los cuales sustentan la viabilidad preliminar del proyecto.

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Su propósito consiste en fortalecer las competencias asociadas a la planificación y a la estructuración técnica de iniciativas coherentes con el contexto económico y productivo. Para ello, mediante el estudio conceptual, el análisis de lineamientos técnicos y la aplicación de herramientas de formulación, se promueve una comprensión integral del proceso, la cual sirve de base para la toma de decisiones fundamentadas.

    .row.justify-content-center.mt-4
      .col-lg-10
        p Asimismo, el desarrollo de los temas articula el diagnóstico, la planificación y la proyección financiera, estableciendo una secuencia lógica que permite organizar la información y sustentar el análisis de viabilidad. De esta manera, se favorece la formulación de propuestas viables, sostenibles y alineadas con las dinámicas del entorno productivo.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-01(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/intro/2.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al recurso audiovisual.

    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
