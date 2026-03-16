<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Estudio técnico y organizacional
    
    figure
      img(src='@/assets/curso/tema5/1.png', alt='', style="width: 1226px").m-auto
    
    p.mt-4 El estudio técnico tiene como finalidad determinar cómo se producirá el bien o se prestará el servicio propuesto en el proyecto. En esta etapa se define el tamaño óptimo del proyecto, la tecnología a utilizar, los procesos productivos y la localización más adecuada para su funcionamiento. Asimismo, se establecen los requerimientos de maquinaria, equipos, infraestructura y recursos humanos necesarios para operar de manera eficiente. Un estudio técnico bien estructurado garantiza que el proyecto sea viable desde el punto de vista operativo y que los costos estimados correspondan a condiciones reales.

    .row.bg-6
      .col-12
        .p-5
          .row.align-items-center.p-5
            .row.align-items-center.justify-content-center
              .col-lg-10
                .row.justify-content-center
                  .col-lg-12(data-aos="fade-down")
                    .row.d-flex.align-items-center(data-aos="fade-right")
                                                          
                      .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                        figure.m-0.p-0.w-100.h-100.d-flex
                          img(src='@/assets/curso/tema5/2.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                    
                      .col-lg
                        .row.align-items-start.mt-4
                          .col
                            p Por su parte, el estudio organizacional se centra en la estructura administrativa y legal que respaldará el desarrollo del proyecto. En este componente se define el tipo de sociedad o figura jurídica más conveniente, la estructura organizacional, los cargos y funciones del personal, así como las responsabilidades de cada área. 
                            p Además, se consideran los aspectos normativos y regulatorios que deben cumplirse para su correcto funcionamiento. Una organización claramente definida facilita la distribución de responsabilidades, fortalece la gestión interna y contribuye a la sostenibilidad del proyecto.
                            
                            .row.justify-content-center      
                              .cajon.color4.p-4
                                p La integración del estudio técnico y organizacional garantiza que el proyecto no solo sea comercialmente atractivo, sino también viable en su ejecución. Además, asegura la coherencia entre los recursos disponibles, los procesos definidos y la estructura organizacional. De esta manera, se fortalece su sostenibilidad operativa y financiera.

                      p.mt-4 Mientras el componente técnico responde a la pregunta de #[b cómo producir], el componente organizacional responde #[b a quién] y bajo #[b qué estructura] lo hará. Ambos elementos son fundamentales para calcular con precisión las inversiones necesarias, los costos operativos y los recursos humanos requeridos, sirviendo de base para el posterior análisis financiero del proyecto.
 
    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1. Tamaño, localización e ingeniería del proyecto

    p.mt-4 El tamaño del proyecto se refiere a la capacidad de producción o prestación de servicios que tendrá la iniciativa en un periodo determinado. Esta decisión está directamente relacionada con la demanda estimada, la disponibilidad de recursos y la capacidad financiera de la organización. Definir el tamaño adecuado evita tanto la subutilización de la capacidad instalada como la sobreinversión en infraestructura innecesaria. Por ello, el análisis del tamaño debe basarse en proyecciones realistas de ventas y en la evaluación de la capacidad operativa del proyecto.

    .bloque-texto-g.bloque-texto-g--inverso.bg-11.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La localización del proyecto consiste en seleccionar el lugar más conveniente para su funcionamiento, considerando factores como cercanía al mercado objetivo, disponibilidad de materias primas, costos de transporte, infraestructura, acceso a servicios públicos y normatividad vigente. Una ubicación estratégica puede generar ventajas competitivas significativas al reducir costos logísticos, facilitar el acceso a clientes y mejorar la eficiencia operativa. Por el contrario, una mala decisión de localización puede incrementar gastos y afectar la rentabilidad del proyecto.

    p.mt-4 Dentro del estudio técnico, la ingeniería del proyecto permite precisar cómo se desarrollará el proceso productivo y qué recursos serán necesarios para garantizar estándares de calidad. A continuación, se presentan sus principales componentes:
        
    .row.justify-content-center 
      .col-lg-6.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema5/4.png', alt='', style="width: 100%").m-auto
      .col-lg-6
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Proceso productivo")
            .col-md-12.mb-4.mb-md-0
              p Define las actividades y etapas necesarias para transformar insumos en bienes o servicios.
    
          .row(numero="2" titulo="Tecnología requerida")
            .col-md-12.mb-4.mb-md-0
              p Establece los sistemas, equipos y herramientas necesarios para operar con eficiencia y calidad.
    
          .row(numero="3" titulo="Distribución en planta")
            .col-md-12.mb-4.mb-md-0
              p Organiza físicamente los espacios de trabajo para optimizar tiempos, movimientos y recursos.
    
          .row(numero="4" titulo="Recursos técnicos")
            .col-md-12.mb-4.mb-md-0
              p Determina las especificaciones técnicas y capacidades necesarias para cumplir con los estándares definidos.

    p.mt-4 La adecuada articulación de estos elementos garantiza que el proyecto sea técnicamente viable y coherente con las condiciones del mercado y los recursos disponibles.
    
    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 7.
          span Impacto del tamaño, localización e ingeniería en el proyecto

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FE93C4")
              tr
                th(style="width: 150px;") Elemento
                th ¿Qué define?
                th Impacto en la inversión inicial
                th Impacto en los costos operativos
                th Ejemplo aplicado
            tbody
              tr(style="background-color: #F6F6F6")
                th Tamaño del proyecto
                td Capacidad de producción o prestación de servicios.
                td Determina volumen de maquinaria, infraestructura y capital de trabajo.
                td Influye en economías de escala y nivel de utilización de recursos.
                td Producción de 1.000 unidades mensuales vs. 3.000 unidades.
              tr
                th Localización
                td Lugar donde operará el proyecto.
                td Puede requerir inversión en adecuaciones, transporte o infraestructura adicional.
                td Afecta costos de transporte, arriendo, servicios públicos y acceso a proveedores.
                td Ubicar la empresa en zona industrial vs. zona comercial.
              tr(style="background-color: #F6F6F6")
                th Ingeniería del proyecto
                td Diseño técnico del proceso productivo y tecnología utilizada.
                td Define inversión en equipos, tecnología y herramientas.
                td Incide en eficiencia, calidad y costos de mantenimiento.
                td Implementar proceso manual vs. automatizado.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2. Proceso productivo y distribución en planta
    
    p.mt-4 El proceso productivo describe el conjunto de actividades necesarias para transformar insumos en bienes o servicios que serán ofrecidos al mercado. En esta etapa se definen las fases de producción, los recursos utilizados en cada una, los tiempos estimados y los controles de calidad requeridos. Dependiendo de la naturaleza del proyecto, el proceso puede ser continuo, por lotes o bajo pedido, y su diseño debe responder a criterios de eficiencia, calidad y optimización de costos. Una definición clara del proceso productivo permite garantizar que la operación sea organizada y que el resultado final cumpla con las expectativas del cliente.

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Con el fin de comprender de manera estructurada cómo se organiza el proceso productivo, se presenta a continuación su ciclo operativo. Esta representación permite visualizar las etapas desde la definición de fases y asignación de recursos hasta la optimización y el cumplimiento de las expectativas del cliente.
        .titulo-sexto.bg-12.mb-3.mt-4
          h5 Figura 5.
          span Ciclo del proceso productivo
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema5/5.png',
            alt='Figura 4. Ciclo del proceso productivo. Esquema que muestra las etapas del proceso productivo organizadas de forma cíclica, desde la entrada de insumos hasta la obtención del producto final y su control de calidad.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema5/6.png',
            alt='Figura 4. Ciclo del proceso productivo. Esquema que muestra las etapas del proceso productivo organizadas de forma cíclica, desde la entrada de insumos hasta la obtención del producto final y su control de calidad.'
          )

    p.mt-4 Por su parte, la distribución en planta hace referencia a la organización física de los espacios, equipos y áreas de trabajo dentro de la infraestructura del proyecto. Una adecuada distribución permite mejorar el flujo de materiales, reducir tiempos muertos, evitar desplazamientos innecesarios y aumentar la productividad. Existen diferentes tipos de distribución, como la distribución por procesos, por producto o por posición fija, y su elección depende del tipo de actividad que desarrolle la empresa. La correcta planificación del espacio físico contribuye a mejorar la eficiencia operativa y a reducir costos.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La integración entre proceso productivo y distribución en planta impacta directamente la capacidad operativa y la competitividad del proyecto. Cuando el proceso está bien definido y la planta está organizada estratégicamente, se minimizan desperdicios, se optimizan recursos y se mejora la calidad del producto o servicio. En consecuencia, este análisis no solo fortalece el estudio técnico, sino que también influye en la estimación de inversiones, costos de operación y proyecciones financieras del proyecto.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3. Estructura organizacional y legal del proyecto

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p La estructura organizacional del proyecto define la forma en que se distribuyen las responsabilidades, funciones y niveles de autoridad dentro de la iniciativa. En esta etapa se establecen los cargos necesarios, las relaciones jerárquicas y los procesos de coordinación entre las diferentes áreas. Una estructura clara permite evitar duplicidad de funciones, mejorar la comunicación interna y facilitar la toma de decisiones. Además, contribuye a que cada miembro del equipo comprenda su rol dentro del proyecto y actúe de manera alineada con los objetivos estratégicos.

                .cajon.color4.p-4
                  p Desde el punto de vista legal, el proyecto debe definir la figura jurídica bajo la cual operará, teniendo en cuenta el tipo de sociedad, el régimen tributario, los requisitos de registro y la normatividad aplicable. Esta decisión garantiza el cumplimiento legal y brinda seguridad en su funcionamiento.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/8.svg', alt='', class="w-100 h-100 object-fit-cover")

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/9.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    .row.justify-content-center.mt-4
                      .col-lg-12(data-aos="fade-down")
                        .row.d-flex.align-items-center.bg-13(data-aos="fade-right")
                          .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                            figure.m-0.p-0.w-100.h-100.d-flex
                              img(src='@/assets/curso/tema5/10.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-13px")
                          .col-lg
                            p La elección adecuada de la forma legal influye en responsabilidades fiscales, obligaciones laborales, acceso a financiación y nivel de riesgo asumido por los socios o inversionistas. Asimismo, deben considerarse regulaciones sectoriales, permisos, licencias y requisitos de seguridad y salud en el trabajo que garanticen el cumplimiento normativo.
                p.mt-3 La correcta integración de la estructura organizacional y legal fortalece la sostenibilidad del proyecto en el tiempo. Mientras la estructura organizacional define quién ejecuta y administra, el componente legal establece el marco normativo dentro del cual se desarrollan las actividades. Ambos elementos son fundamentales para calcular costos administrativos, definir obligaciones financieras y garantizar que el proyecto opere con estabilidad, transparencia y respaldo jurídico.

    p.mt-4 Con el fin de facilitar la comprensión de las alternativas jurídicas disponibles para la constitución de un proyecto empresarial, se presenta a continuación una tabla comparativa. En ella se describen los principales tipos de sociedad en Colombia, sus características, ventajas y desventajas, lo cual permite analizar cuál figura se ajusta mejor a las necesidades, responsabilidades y proyección del proyecto.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 8.
          span Tipos de sociedad en Colombia: características, ventajas y desventajas

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FE93C4")
              tr
                th(style="width: 150px;") Tipo de Sociedad
                th Características principales
                th Ventajas
                th Desventajas
            tbody
              tr(style="background-color: #F6F6F6")
                th Persona natural (Comerciante)
                td No existe separación jurídica entre persona y empresa
                td Fácil constitución, menores trámites
                td Responsabilidad ilimitada frente a deudas
              tr
                th Sociedad por Acciones Simplificada (S.A.S.)
                td Sociedad flexible, puede constituirse con un solo socio
                td Responsabilidad limitada al capital aportado, trámites sencillos, alta flexibilidad
                td Requiere cumplimiento formal contable y tributario
              tr(style="background-color: #F6F6F6")
                th Sociedad Limitada (Ltda.)
                td Conformada por mínimo 2 y máximo 25 socios
                td Responsabilidad limitada al aporte, mayor formalidad
                td Menor flexibilidad en transferencia de cuotas
              tr
                th Sociedad Anónima (S.A.)
                td Capital dividido en acciones, requiere mínimo 5 accionistas
                td Adecuada para grandes proyectos e inversionistas
                td Mayor regulación y requisitos legales



</template>

<script>
export default {
  name: 'Tema3',
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
