<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/1.svg', style='width: 100px').m-auto
      
      .col
        p El componente formativo #[b Formulación y estructuración del proyecto] integra los elementos conceptuales y técnicos necesarios para construir, de manera organizada, una propuesta de inversión empresarial. En este sentido, aborda la fundamentación del proyecto, la aplicación de metodologías de investigación y la utilización del marco lógico, mediante las cuales se sustenta cada decisión en información confiable y en diagnósticos estructurados. Así mismo, desarrolla el estudio de mercado y el análisis del entorno, con el fin de identificar oportunidades, estimar la demanda y evaluar la competencia, garantizando que la iniciativa responda a necesidades reales y condiciones del contexto.
        
    p De igual manera, comprende el estudio técnico-organizacional, a través del cual se definen los procesos productivos, el tamaño del proyecto y la estructura administrativa y legal que soportará su funcionamiento; y, finalmente, incorpora el estudio financiero, mediante la proyección de inversiones, ingresos, costos y estados financieros, así como la determinación del punto de equilibrio. De esta forma, el componente orienta la transformación de una idea en una propuesta estructurada, cuantificada y fundamentada. A continuación, el mapa conceptual presenta, de manera visual, la organización del componente y la relación entre sus ejes temáticos.
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado “Formulación y estructuración del proyecto” organiza el tema central en cuatro ejes: fundamentación del proyecto, estudio de mercado, estudio técnico y estudio financiero. Cada eje desarrolla sus aspectos clave, desde la identificación de necesidades y el análisis del mercado, hasta la definición del proceso productivo y la proyección de inversiones y resultados financieros, con el fin de evaluar la viabilidad del proyecto.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
