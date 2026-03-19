<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Metodologías de investigación aplicadas al proyecto
        
    figure
      img(src='@/assets/curso/tema2/1.svg', alt='', style="width: 1226px").m-auto

    p.mt-4 La formulación de un proyecto exige la aplicación de metodologías de investigación que permitan sustentar técnicamente las decisiones adoptadas durante su estructuración. En este contexto, la investigación no se limita a la recolección de datos, sino que constituye un proceso sistemático orientado a comprender la realidad organizacional, #[b analizar el entorno y fundamentar la viabilidad de la propuesta]. El uso adecuado de metodologías garantiza que el proyecto responda a necesidades reales y no a percepciones subjetivas, fortaleciendo así su coherencia y pertinencia.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/2.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                .row.align-items-center
                    .col-lg-12
                      .cajon.color4.p-4
                        p En primer lugar, se aborda el método científico como fundamento del proceso investigativo, junto con los diferentes tipos de investigación que pueden aplicarse en la formulación de proyectos, entre ellos la investigación exploratoria, descriptiva y explicativa. Estas modalidades permiten seleccionar el enfoque más pertinente de acuerdo con la naturaleza del problema identificado y con los objetivos que se pretenden alcanzar.
                    p.mt-4 A continuación, se presentan los pasos metodológicos que orientan la formulación del proyecto, organizados de manera secuencial y articulada. Cada etapa cumple una función específica dentro del proceso y contribuye a la estructuración técnica de la iniciativa. En este contexto, los siguientes ítems describen las acciones clave que deben desarrollarse:

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          PasosA.color-acento-contenido(tipo="l")
            .row
              .col-lg.text-start
                h3 Aplicar el método científico
                p En esta etapa se delimita el problema central y se formulan preguntas u objetivos de investigación. Asimismo, se define el enfoque metodológico que orientará la recolección y análisis de la información, garantizando rigor y coherencia en el proceso.
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/3.svg', alt='').img125

            .row
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/4.svg', alt='').img125
              .col-lg.text-start
                h3 Recolectar y analizar la información
                p Se emplean técnicas e instrumentos de investigación que permiten obtener datos confiables. Posteriormente, la información se organiza y analiza para sustentar el diagnóstico y fundamentar técnicamente la formulación del proyecto.

            .row
              .col-lg.text-start
                h3 Estructurar el marco lógico
                p En este paso se organiza de manera sistemática el problema, los objetivos, los resultados esperados y las actividades necesarias. El marco lógico asegura coherencia entre diagnóstico, planificación y evaluación.
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/5.svg', alt='').img125

            .row
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/6.svg', alt='').img125
              .col-lg.text-start
                h3 Integrar y sustentar la formulación
                p Finalmente, se articulan el método científico, las herramientas de investigación y el marco lógico como soporte técnico. Esta integración fortalece la estructuración del proyecto y respalda la toma de decisiones con criterios fundamentados.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Método científico y tipos de investigación

    .bloque-texto-g.bloque-texto-g--inverso.bg-11.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El método científico es un proceso ordenado que permite analizar una situación de manera lógica y estructurada para encontrar respuestas claras y fundamentadas. En la formulación de proyectos, este método ayuda a identificar un problema, recopilar información relevante, analizar datos y proponer soluciones basadas en evidencia. No se trata de suposiciones o ideas sin sustento, sino de seguir pasos organizados que permiten tomar decisiones más seguras y justificadas dentro de la empresa.

    p.mt-4 Existen diferentes tipos de investigación que pueden aplicarse según la necesidad del proyecto y el nivel de conocimiento que se tenga sobre el problema identificado. Cada modalidad cumple una función específica dentro del proceso investigativo:

    .row.justify-content-center.mt-4
      .col-lg-4.mb-4.mb-lg-0
        //-Tarjeta 1
        .tarjeta.clr-paleYellow.p-4.text-center.bg-03.h-100.tarjeta-hover
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure.icono-hover(data-aos="zoom-in")
                  img.icon-normal(src='@/assets/curso/tema2/8.svg', style='width: 80px')
                  img.icon-hover(src='@/assets/curso/tema2/9.svg', style='width: 80px')
          h4.text-center Investigación exploratoria
          p Se emplea cuando el problema no está claramente definido y se requiere obtener una aproximación inicial que permita comprender la situación y delimitar el objeto de estudio.

      .col-lg-4.mb-4.mb-lg-0
        //-Tarjeta 2
        .tarjeta.clr-paleYellow.p-4.text-center.bg-03.h-100.tarjeta-hover
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure.icono-hover(data-aos="zoom-in")
                  img.icon-normal(src='@/assets/curso/tema2/10.svg', style='width: 80px')
                  img.icon-hover(src='@/assets/curso/tema2/11.svg', style='width: 80px')
          h4.text-center Investigación descriptiva
          p Se emplea cuando se necesita detallar cómo es una situación o fenómeno. Permite describir características, comportamientos, tendencias o condiciones, sin explicar sus causas, por ejemplo, el perfil de los clientes o el nivel de ventas en un periodo determinado.

      .col-lg-4.mb-4.mb-lg-0
        //-Tarjeta 3
        .tarjeta.clr-paleYellow.p-4.text-center.bg-03.h-100.tarjeta-hover
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure.icono-hover(data-aos="zoom-in")
                  img.icon-normal(src='@/assets/curso/tema2/12.svg', style='width: 80px')
                  img.icon-hover(src='@/assets/curso/tema2/13.svg', style='width: 80px')
          h4.text-center Investigación explicativa
          p Se aplica cuando se busca entender por qué ocurre un fenómeno. Su propósito es identificar las causas y relaciones entre variables, como las razones que influyen en la disminución de ventas o en el aumento de costos.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-12
                  .cajon.color2.p-4
                    p Seleccionar el tipo de investigación adecuado contribuye a que el proyecto cuente con bases técnicas sólidas y responda de manera pertinente a las condiciones reales del entorno empresarial.

    .row.justify-content-center
      p.mt-4 Con el fin de comprender de manera comparativa las diferencias entre los tipos de investigación y su aplicación en la formulación de proyectos, se presenta la siguiente tabla. En ella se sintetiza cuándo se utiliza cada tipo, para qué sirve dentro del proyecto y un ejemplo práctico que facilita su comprensión:
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 2.
          span Tipos de investigación aplicados a la formulación de proyectos

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FE93C4")
              tr
                th(style="width: 250px;") Tipo de Investigación
                th ¿Cuándo se utiliza?
                th ¿Para qué sirve en el proyecto?
                th Ejemplo práctico
            tbody
              tr(style="background-color: #F6F6F6")
                th Exploratoria
                td Cuando el problema no está bien definido o se conoce poco sobre la situación.
                td Permite obtener una visión general del problema y generar ideas iniciales.
                td Analizar por qué están disminuyendo las ventas sin conocer aún la causa.
              tr
                th Descriptiva
                td Cuando se necesita caracterizar una situación específica.
                td Ayuda a conocer características del mercado, clientes o competencia.
                td Identificar el perfil actual de los clientes de la empresa.
              tr(style="background-color: #F6F6F6")
                th Explicativa
                td Cuando se busca entender causas y efectos.
                td Permite analizar por qué ocurre un problema y qué factores lo influyen.
                td Determinar si la disminución de ventas se debe a precios altos o a estrategias de publicidad inadecuadas.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Herramientas de recolección y análisis de información

    .row.align-items-center.justify-content-center.mb-2
      .col-lg-12
        .row.justify-content-center.mt-1.mb-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/14.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                .row.align-items-start
                  p La formulación de un proyecto requiere información confiable que permita sustentar técnicamente las decisiones que se toman durante su estructuración. Para ello, es necesario utilizar herramientas adecuadas de recolección de información que permitan conocer el entorno, el mercado, los recursos disponibles y las condiciones internas de la organización.
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema2/15.svg', style='width: 100px').m-auto
                  
                  .col
                    p  Para fortalecer el proceso de recolección de información, se presentan a continuación las herramientas más utilizadas en la formulación de proyectos. Cada una cumple una función específica dentro del diagnóstico y permite obtener datos confiables desde distintas fuentes. 

                  .row.justify-content-center
                    .col-lg-12
                      .cajon.color2.p-4
                        p El siguiente recurso presenta de manera secuencial las principales herramientas de recolección de información: encuesta, entrevista, observación directa y revisión documental. Esta organización visual facilita comprender cómo cada herramienta aporta datos específicos al diagnóstico y cómo, en conjunto, fortalecen la formulación del proyecto.

    //-tarjeta numerada
    .row.mt-4 
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center
            b Encuesta

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center
            b Entrevista

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center
            b Observación directa

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center
            b Revisión documental

    p.mt-4 Cada herramienta cumple una función específica dentro del proceso investigativo y debe seleccionarse de acuerdo con el tipo de investigación que se esté desarrollando y con los objetivos definidos en la formulación. De esta manera, se garantiza coherencia metodológica y pertinencia en la información recopilada.


    .row.bg-7.justify-content-center.py-4.px-0.px-md-5
      .col-lg-11.col-12
        .p-4.p-md-5
          .row.align-items-center.p
            .row.align-items-center.justify-content-center
              .col-lg-10
                .row.justify-content-center
                  .row.align-items-center.justify-content-center
                    .col-lg-12
                      .row.justify-content-center
                        .col-lg-12(data-aos="fade-down")
                          .row.d-flex.align-items-center(data-aos="fade-right")
                            .col-lg-5.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                              figure.m-0.p-0.w-100.h-100.d-flex
                                img(src='@/assets/curso/tema2/16.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                            .col-lg
                              p Una vez recolectada la información, es fundamental organizarla y analizarla de manera sistemática. El análisis puede realizarse mediante tabulación de datos, elaboración de tablas y gráficos, cálculo de promedios, identificación de tendencias o comparación de resultados. En proyectos empresariales, este proceso permite estimar la demanda, evaluar la competencia, proyectar ingresos y determinar costos. Como señalan Sapág Chain y Sapág Chain (2014), la calidad del estudio de mercado y del análisis de información es determinante para la correcta evaluación del proyecto, ya que de ello depende la confiabilidad de las proyecciones financieras y la toma de decisiones.
                      .row.justify-content-center
                        .cajon.color4.p-4
                          p El uso adecuado de herramientas de recolección y análisis de información contribuye a disminuir la incertidumbre en el proceso de formulación. Asimismo, fortalece la objetividad de las decisiones al fundamentarlas en datos verificables y técnicamente sustentados.

                      p.mt-4 Cuando la información es clara, organizada y bien interpretada, el formulador puede establecer conclusiones fundamentadas y justificar técnicamente la viabilidad de la propuesta. Por el contrario, decisiones basadas en datos incompletos o mal analizados pueden generar errores en la estimación de inversiones, ingresos o riesgos, afectando la sostenibilidad del proyecto en el tiempo.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3. Aplicación del marco lógico en la estructuración del proyecto

    figure
      img(src='@/assets/curso/tema2/17.png', alt='', style="width: 1226px").m-auto

    p.mt-4 El marco lógico es una herramienta metodológica que permite organizar de manera estructurada los elementos fundamentales de un proyecto, asegurando coherencia entre el problema identificado, los objetivos planteados y las actividades que se deben desarrollar. Su aplicación facilita que el proyecto tenga una lógica clara y verificable, evitando inconsistencias entre lo que se quiere lograr y las acciones propuestas. En la formulación de proyectos, el marco lógico se convierte en un instrumento clave para planificar de forma ordenada y fundamentada.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta herramienta se construye generalmente a partir del análisis del problema central, identificando sus causas y efectos, lo que permite transformarlo en un objetivo general y en objetivos específicos. Posteriormente, se establecen los resultados esperados y las actividades necesarias para alcanzarlos. Además, el marco lógico incluye indicadores que permiten medir el cumplimiento de los objetivos y supuestos que consideran factores externos que pueden afectar el desarrollo del proyecto. De esta manera, se integra la planeación con la evaluación desde el inicio del proceso.

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema2/19.png', style='width: 100px').m-auto
      .col
        p La aplicación del marco lógico fortalece la estructuración técnica del proyecto, ya que permite visualizar de forma integral la relación entre diagnóstico, planificación y resultados. Cuando se utiliza correctamente, facilita la toma de decisiones, mejora la comunicación del proyecto ante inversionistas o directivos y aumenta la probabilidad de éxito en su ejecución. En consecuencia, el marco lógico no solo es un instrumento de formulación, sino también una herramienta estratégica para garantizar coherencia y claridad en la propuesta de inversión.

    p.mt-4 Para facilitar la comprensión de cómo se organiza el marco lógico y qué función cumple cada uno de sus componentes, se presenta a continuación una tabla que resume los niveles de la matriz, la pregunta orientadora que responde cada nivel, su descripción y un ejemplo aplicado:

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 3.
          span Estructura de la matriz de marco lógico

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FE93C4")
              tr
                th(style="width: 150px;") Nivel
                th ¿Qué responde?
                th Descripción
                th Ejemplo práctico
            tbody
              tr(style="background-color: #F6F6F6")
                th Fin
                td ¿Para qué se hace el proyecto en el largo plazo?
                td Impacto general que el proyecto busca generar en la organización o en la sociedad
                td Mejorar la competitividad de la empresa en el mercado regional
              tr
                th Propósito
                td ¿Qué logrará el proyecto al finalizar?
                td Resultado principal que se espera alcanzar con la ejecución del proyecto
                td Incrementar las ventas en un 20% en un año
              tr(style="background-color: #F6F6F6")
                th Componentes (Resultados)
                td ¿Qué se debe hacer para lograr los resultados?
                td Productos o resultados concretos que permiten cumplir el propósito
                td Implementación de una estrategia digital y capacitación del equipo comercial
              tr
                th Actividades
                td ¿Qué se debe hacer para lograr los resultados?
                td Acciones específicas necesarias para producir los componentes
                td Diseñar campaña digital, contratar agencia, capacitar personal
              tr(style="background-color: #F6F6F6")
                th Indicadores
                td ¿Cómo se medirá el logro?
                td Variables cuantitativas o cualitativas que permiten verificar el cumplimiento de objetivos
                td Porcentaje de aumento en ventas, número de clientes nuevos
              tr
                th Supuestos
                td ¿Qué factores externos pueden afectar el proyecto?
                td Condiciones externas que influyen en el éxito del proyecto
                td Estabilidad económica y comportamiento del mercado

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Según la matriz de marco lógico analizada, es posible visualizar de manera estructurada la relación entre el fin, el propósito, los componentes, las actividades, los indicadores y los supuestos. Esta herramienta permite comprender cómo cada nivel responde a una pregunta orientadora y cómo se articulan los resultados con las acciones necesarias para alcanzarlos. De esta manera, se fortalece la coherencia interna de la propuesta y se facilita su seguimiento y evaluación.

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
