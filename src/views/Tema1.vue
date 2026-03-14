<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentación del proyecto

    figure
      img(src='@/assets/curso/tema1/1.png', alt='', style="width: 1226px").m-auto

    p.mt-4 La fundamentación del proyecto constituye la base conceptual y metodológica sobre la cual se estructura cualquier iniciativa de inversión o intervención organizacional. En esta sección se desarrollan los elementos esenciales que permiten comprender qué es un proyecto, cuáles son sus características distintivas y cómo se clasifica según su naturaleza, alcance y propósito. Asimismo, se analizan los principios que diferencian un proyecto de las actividades operativas recurrentes, resaltando su carácter temporal, su orientación a resultados específicos y su contribución al cumplimiento de objetivos estratégicos.

    .bloque-texto-g.bloque-texto-g--inverso.bg-11.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De igual manera, se aborda el #[b ciclo de vida del proyecto] como un proceso estructurado que comprende fases claramente definidas, desde la identificación y formulación hasta la ejecución, seguimiento y cierre. En este contexto, se estudian las partes interesadas o grupos de interés, entendidas como aquellos actores internos y externos que influyen o se ven impactados por el proyecto. La comprensión de sus expectativas, niveles de influencia y grado de participación resulta fundamental para garantizar la viabilidad, aceptación y sostenibilidad de la iniciativa.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-01(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/3.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al recurso audiovisual.



    .row
      .col-12
        .p-5
          .row.align-items-center.bg-12
            .col-lg-4.d-lg-block.d-none
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/4.png',  style='width: 396px').m-auto
    
            .col-lg-8
              SlyderF(columnas="col-lg-6 col-xl-4")
                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/5.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Brechas en los procesos productivos.
                       
                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/6.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Oportunidades de mejora en la gestión organizacional.
    
                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/7.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Limitaciones en la oferta de bienes o servicios.
    
                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/8.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Cambios en el entorno competitivo o normativo.
    
                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/9.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Requerimientos estratégicos en la organización.
    
    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-10
        .row.justify-content-center
          .col-lg-10
            .row.align-items-center
              .col-lg-12
                .cajon.color3.p-4
                  p La correcta caracterización de estas necesidades facilita la definición de objetivos claros, el establecimiento del alcance y la alineación del proyecto con la estrategia organizacional, asegurando que la propuesta responda a condiciones reales del entorno y aporte valor tangible a la empresa o institución.
    

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1. Concepto, características y tipología de proyectos

    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/10.png', alt='', style="width: 380px").m-auto
      .col-lg-8
        p(data-aos="fade-up") Un proyecto puede definirse como un conjunto de actividades interrelacionadas, planificadas y coordinadas que se ejecutan durante un periodo determinado con el propósito de alcanzar un objetivo específico mediante la utilización eficiente de recursos humanos, técnicos y financieros. A diferencia de las operaciones permanentes de una organización, el proyecto tiene un carácter temporal y está orientado a la generación de un resultado único, ya sea un bien, un servicio o una mejora en un proceso. Esta condición implica que su formulación debe sustentarse en un análisis riguroso que justifique su viabilidad y pertinencia dentro del contexto organizacional.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/11.svg', style='width: 80px').m-auto
          
          .col
            p La siguiente figura ilustra los elementos estructurales que definen un proyecto, permitiendo visualizar de manera integrada su resultado esperado, el análisis requerido para su viabilidad y las condiciones organizacionales en las que se desarrolla.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
