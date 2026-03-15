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
                    p Finalmente, se profundiza en la identificación de necesidades empresariales como punto de partida para la formulación del proyecto. Este análisis permite reconocer problemáticas tales como:



    .row
      .col-12
        .p-5
          .row.align-items-center.bg-3
            .col-lg-4.d-lg-block.d-none
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/4.png',  style='width: 396px').m-auto
    
            .col-lg-8.p-2
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

    .row.justify-content-center.mt-4
      .col-10
        .titulo-sexto.bg-12.mb-3.mt-4
          h5 Figura 1.
          span Estructura de un proyecto
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema1/12.svg',
            alt='La imagen representa una diana con flechas de distintos colores apuntando al centro, que ilustra la convergencia de los elementos fundamentales que definen un proyecto: el resultado único como objetivo final, el análisis riguroso como base de la viabilidad, la viabilidad y pertinencia como justificación organizacional, el carácter temporal como condición de duración limitada y el contexto organizacional como entorno en el que opera la iniciativa. La figura destaca que todos estos atributos deben apuntar de manera simultánea y articulada hacia el logro del objetivo propuesto.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema1/13.svg',
            alt='La imagen representa una diana con flechas de distintos colores apuntando al centro, que ilustra la convergencia de los elementos fundamentales que definen un proyecto: el resultado único como objetivo final, el análisis riguroso como base de la viabilidad, la viabilidad y pertinencia como justificación organizacional, el carácter temporal como condición de duración limitada y el contexto organizacional como entorno en el que opera la iniciativa. La figura destaca que todos estos atributos deben apuntar de manera simultánea y articulada hacia el logro del objetivo propuesto.'
          )
      
        p.mt-4 Entre las principales características de un proyecto se encuentran su temporalidad, su delimitación en alcance, la existencia de objetivos claramente definidos, la asignación de recursos limitados y la necesidad de planificación estructurada. Además, todo proyecto implica un nivel de incertidumbre asociado a variables del entorno, del mercado y de la disponibilidad de recursos, lo cual exige la aplicación de metodologías técnicas para su estructuración.
      
        .row.justify-content-center.mt-4
          .bloque-texto-c.bg-01.p-4
            i.fas.fa-quote-left.mb-2
            h4.mb-2 Estas características exigen la aplicación de metodologías técnicas para la estructuración del proyecto. En este sentido, la preparación y evaluación del proyecto permiten analizar de manera sistemática su factibilidad técnica, financiera y económica antes de su ejecución 
            .row.align-items-center.justify-content-between
              .col-auto
                span - Sapág Chain y Sapág Chain, 2014
              .col-auto
                i.fas.fa-quote-right

    p.mt-4 Además de sus características, los proyectos pueden clasificarse según diversos criterios que permiten identificar su naturaleza, alcance y propósito. A continuación, se presentan los principales tipos:

    .row.justify-content-center
      .col-lg-auto
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-02")
          .tarjeta.clr--pink02.p-4(titulo="Según su finalidad ")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Hace referencia al propósito que persigue el proyecto. Pueden ser sociales, cuando buscan atender necesidades de una comunidad; productivos, cuando se orientan a la generación de bienes o servicios; o de inversión, cuando su objetivo principal es obtener rentabilidad económica.                     
                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/14.png', alt='', class="w-100 h-100 object-fit-cover")
          .tarjeta.clr--pink02.p-4(titulo="Según su sector económico")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Corresponde al ámbito en el que se desarrolla la actividad del proyecto. Se clasifican en industriales, cuando involucran procesos de manufactura o transformación; comerciales, cuando se centran en la compra y venta de bienes; o de servicios, cuando su propósito es ofrecer una prestación intangible al mercado.
                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/15.png', alt='', class="w-100 h-100 object-fit-cover")
          .tarjeta.clr--pink02.p-4(titulo="Según su alcance geográfico")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Define el territorio en el que tendrá impacto el proyecto. Puede ser local, cuando su influencia se limita a una zona específica; regional, cuando abarca varios municipios o departamentos; o nacional, cuando su cobertura se extiende a todo el país.
                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/16.png', alt='', class="w-100 h-100 object-fit-cover")
          .tarjeta.clr--pink02.p-4(titulo="Según su naturaleza estratégica ")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Indica el tipo de transformación que busca generar el proyecto dentro de la organización: expansión, para aumentar la capacidad operativa; modernización, para actualizar procesos o tecnología; sustitución, para reemplazar activos o métodos obsoletos; e innovación, para incorporar nuevas soluciones que mejoren la competitividad.
                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/17.png', alt='', class="w-100 h-100 object-fit-cover")

    p.mt-4 En coherencia con el desarrollo conceptual previo, se presentan las #[b tipologías de los proyectos] como un criterio de clasificación que amplía la comprensión de su naturaleza y propósito. En el campo de las finanzas y la administración, esta organización facilita el análisis técnico y estratégico durante el proceso de formulación y evaluación.

    .row.bg-5
      .col-12
        .p-5
          .row.align-items-center.p-5
            .tarjeta.bg-base3.p-4
              PasosB.color-acento-contenido
                //-Primer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/18.png', alt='')
                    
                  .col-md-6
                    h4 Tipología según finalidad
                    p Se refiere a la clasificación de los proyectos de acuerdo con el propósito que persiguen. En este sentido, pueden identificarse proyectos productivos, sociales, de inversión o de investigación, según la intención central que orienta su desarrollo. Esta tipología permite reconocer si la iniciativa busca generar bienes o servicios, atender necesidades colectivas, obtener rentabilidad económica o producir conocimiento para la toma de decisiones. Por lo tanto, contribuye a precisar el enfoque del proyecto desde su concepción.
                //-Segundo Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/19.png', alt='')
                    
                  .col-md-6
                    h4 Tipología según sector económico
                    p Corresponde a la clasificación que se realiza según el sector en el cual se desarrolla la actividad. De esta manera, los proyectos pueden ubicarse en el sector industrial, comercial, de servicios o agropecuario, dependiendo de la naturaleza de las operaciones que involucran. Esta distinción facilita contextualizar la iniciativa dentro de la dinámica económica correspondiente y orientar los estudios técnicos y financieros requeridos.
              
                //-Tercer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/20.png', alt='')
                    
                  .col-md-6
                    h4 Tipología según alcance geográfico
                    p Hace referencia al área de influencia en la que se proyecta el impacto de la intervención. En consecuencia, los proyectos pueden clasificarse como locales, regionales, nacionales o internacionales, según la cobertura territorial prevista. Esta categoría permite dimensionar la magnitud de la propuesta, estimar los recursos necesarios y proyectar el impacto esperado en términos organizacionales y financieros.
              
              
                //-Cuarto Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/21.png', alt='')
                    
                  .col-md-6
                    h4 Tipología según objetivo estratégico
                    p Se relaciona con el tipo de transformación que la iniciativa genera dentro de la organización. Así, los proyectos pueden orientarse a la expansión, modernización, sustitución o innovación, de acuerdo con el impacto estratégico que buscan alcanzar. Esta clasificación resulta clave, ya que garantiza la alineación del proyecto con la planeación institucional y fortalece la toma de decisiones en el ámbito administrativo y financiero.
 

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/22.svg', style='width: 100px').m-auto
      
      .col
        p De esta manera, las tipologías analizadas se articulan con las características propias del proyecto, tales como su temporalidad, alcance definido, utilización de recursos limitados y orientación hacia resultados específicos. Mientras las características permiten reconocer su estructura y naturaleza, las tipologías facilitan comprender su propósito, contexto y proyección estratégica dentro de la organización. En el campo de las finanzas y la administración, esta integración conceptual fortalece la formulación técnica, el análisis de viabilidad y la alineación con la planeación institucional, asegurando que cada iniciativa responda de manera coherente a las necesidades y objetivos establecidos.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2. Ciclo de vida del proyecto y partes interesadas

    .row.bg-6
      .col-12
        .p-5
          .row.align-items-center.p-5
            p.mt-4 El ciclo de vida del proyecto representa la secuencia estructurada de fases que atraviesa una iniciativa desde su concepción hasta su cierre. Generalmente comprende etapas como identificación, formulación, evaluación, ejecución, seguimiento y cierre, aunque su denominación puede variar según la metodología adoptada. 

            .row.align-items-center.justify-content-center
              .col-lg-12
                .row.justify-content-center.mt-4
                  .col-lg-12(data-aos="fade-down")
                    .row.d-flex.align-items-center(data-aos="fade-right")
                      .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                        figure.m-0.p-0.w-100.h-100.d-flex
                          img(src='@/assets/curso/tema1/23.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                      .col-lg
                        .row.align-items-start.mt-4
                          .col-lg-2.mb-lg-0.mb-4
                            figure(data-aos="fade-down")
                              img(src='@/assets/curso/tema1/24.svg', style='width: 100px').m-auto
                          
                          .col
                            p Cada fase cumple una función específica dentro del proceso global y permite organizar las actividades de manera lógica y progresiva. Comprender el ciclo de vida facilita la planificación adecuada de recursos, la definición de entregables y el establecimiento de mecanismos de control que garanticen el cumplimiento de los objetivos propuestos.

                          p.mt-4 Durante la fase de identificación y formulación se definen las necesidades que justifican el proyecto, se establecen los objetivos y se estructuran los estudios preliminares. Posteriormente, en la etapa de evaluación, se analiza su viabilidad técnica, financiera, económica y social. La fase de ejecución implica la puesta en marcha del plan definido, mientras que el seguimiento y control permiten monitorear el avance frente a cronogramas, presupuestos y metas establecidas. Finalmente, el cierre del proyecto consolida los resultados alcanzados y permite evaluar el cumplimiento de los objetivos iniciales, generando aprendizajes organizacionales para futuras iniciativas.

    .row.justify-content-center
      .col-10
        .row.justify-content-center
          .col-lg-11
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p De manera paralela al ciclo de vida, es fundamental identificar y gestionar las partes interesadas o grupos de interés, entendidas como los individuos, grupos u organizaciones que pueden influir en el proyecto o verse afectados por sus resultados.

            p.mt-4 Estas pueden incluir directivos, inversionistas, empleados, clientes, proveedores, entidades reguladoras y la comunidad. La correcta identificación, análisis de expectativas y gestión de la participación de las partes interesadas contribuye significativamente a reducir riesgos, fortalecer la aceptación del proyecto y asegurar su sostenibilidad en el tiempo.

            .row.justify-content-center.mt-4
              .row.align-items-center.justify-content-center
                .col-lg-12
                  .row.justify-content-center.mt-4
                    .col-lg-12(data-aos="fade-down")
                      .row.d-flex.align-items-center.bg-13(data-aos="fade-right")
                        .col-lg-2.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                          figure.m-0.p-0.w-100.h-100.d-flex
                            img(src='@/assets/curso/tema1/25.svg', alt='', class="", style="width: 110px; margin-left:-13px")
                        .col-lg.p-1
                          p La siguiente figura ilustra el proceso escalonado que debe seguirse para gestionar adecuadamente las partes interesadas, desde su identificación inicial hasta el aseguramiento de la sostenibilidad del proyecto en el tiempo.

            .row.justify-content-center.mt-4
              .titulo-sexto.bg-12.mb-3.mt-4
                h5 Figura 2.
                span Sostenibilidad del proyecto
              figure
                img.d-none.d-md-block.m-auto(
                  src='@/assets/curso/tema1/26.svg',
                  alt='La imagen representa una escalera ascendente de seis peldaños que ilustra el proceso progresivo para gestionar las partes interesadas en un proyecto. El recorrido inicia con la identificación de las partes interesadas, continúa con el análisis de sus expectativas y la gestión de su participación, avanza hacia la reducción de riesgos y el fortalecimiento de la aceptación, y culmina con el aseguramiento de la sostenibilidad del proyecto. La figura destaca que cada etapa constituye una condición necesaria para avanzar a la siguiente y garantizar el éxito de la iniciativa a largo plazo.'
                )
                img.d-block.d-md-none.m-auto(
                  src='@/assets/curso/tema1/27.svg',
                  alt='La imagen representa una escalera ascendente de seis peldaños que ilustra el proceso progresivo para gestionar las partes interesadas en un proyecto. El recorrido inicia con la identificación de las partes interesadas, continúa con el análisis de sus expectativas y la gestión de su participación, avanza hacia la reducción de riesgos y el fortalecimiento de la aceptación, y culmina con el aseguramiento de la sostenibilidad del proyecto. La figura destaca que cada etapa constituye una condición necesaria para avanzar a la siguiente y garantizar el éxito de la iniciativa a largo plazo.'
                )

    p.mt-4 Una vez identificadas las partes interesadas y comprendida la relevancia de su gestión para la sostenibilidad del proyecto, corresponde analizar las etapas que estructuran su desarrollo. El ciclo de vida del proyecto organiza una secuencia lógica y articulada que orienta la ejecución desde la identificación de la necesidad hasta el cierre formal de la iniciativa. Esta secuencia permite planificar, estructurar, evaluar y controlar cada fase con criterios técnicos claramente definidos, asegurando coherencia entre los objetivos, los recursos y los resultados esperados. En este contexto, las etapas que conforman el ciclo de vida del proyecto son las siguientes:

    SlyderA.p-4.bg-4.bg-r8(tipo="b").mt-4
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h4.text-white Identificación
          p.text-white Es la fase inicial del proyecto, en la que se reconoce la necesidad, problema u oportunidad que justifica su formulación. En esta etapa se define la idea inicial y se elabora su justificación preliminar, estableciendo el punto de partida para las fases siguientes.
          
        .col-lg-6.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema1/28.png', style='width: 572px')
    
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h4.text-white Formulación
          p.text-white Corresponde a la etapa en la que se estructuran los estudios necesarios para diseñar el proyecto: estudio de mercado, estudio técnico, estudio organizacional y estudio financiero. Es aquí donde se construye el documento base que sustenta técnicamente la iniciativa.

        .col-lg-6.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema1/29.png', style='width: 572px')
    
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h4.text-white Evaluación
          p.text-white En esta fase se analiza la viabilidad del proyecto desde diferentes perspectivas: financiera, económica, social y ambiental. Para ello se aplican indicadores como el Valor Presente Neto (VPN), la Tasa Interna de Retorno (TIR) y el Periodo de Recuperación de la Inversión (PRI), entre otros.
          
        .col-lg-6.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema1/30.png', style='width: 572px')

      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h4.text-white Ejecución
          p.text-white Es la fase en la que se implementa el proyecto según el plan establecido. En esta etapa se hace uso de los recursos asignados, se desarrollan las actividades programadas y se realiza el seguimiento al cronograma definido.

        .col-lg-6.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema1/31.png', style='width: 572px')
            
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h4.text-white Seguimiento y control
          p.text-white.mb-0 Es la fase en la que se monitorea el avance del proyecto frente a las metas establecidas. El seguimiento se realiza sobre cuatro dimensiones fundamentales: presupuesto, tiempo, alcance y calidad. Esta etapa permite identificar desviaciones oportunamente y aplicar los ajustes correctivos necesarios para garantizar el cumplimiento de los objetivos.

        .col-lg-6.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema1/32.png', style='width: 572px')
            
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h4.text-white Cierre
          p.text-white Corresponde a la etapa en la que se finaliza formalmente el proyecto. En esta fase se realiza la evaluación de resultados, se entregan los productos o servicios generados, se elabora el informe final y se documentan las lecciones aprendidas.

        .col-lg-6.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema1/33.png', style='width: 572px')

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3. Identificación de necesidades empresariales

    .row.align-items-center.bg-14
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/34.png', alt='', style="width: 420px; margin-left:-13px")
      .col-lg-8.bg-r8.p-2
    
        figure
          img(src="@/assets/curso/tema1/35.svg", alt="", style="width: 80px")
    
        p.mt-3 La identificación de necesidades empresariales constituye el punto de partida para la formulación de un proyecto pertinente y viable. Toda iniciativa debe surgir de una situación real que evidencie una brecha entre el estado actual de la organización y el estado deseado. Estas necesidades pueden manifestarse como problemas operativos, baja rentabilidad, pérdida de participación en el mercado, ineficiencias en los procesos productivos o ausencia de innovación. Reconocer de manera objetiva estas situaciones permite justificar técnicamente la formulación del proyecto y orientar sus objetivos hacia la generación de valor.

    .row.justify-content-center.mt-4
      .col-lg-10
        p.mt-4 Para desarrollar un diagnóstico organizacional sólido, es necesario examinar de manera estructurada los factores internos y externos que inciden en la organización. Este análisis permite comprender la situación actual y establecer una base técnica para la formulación del proyecto. En este contexto, se presentan los siguientes elementos del diagnóstico:
        .row.justify-content-center
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg-11.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/36.svg', alt='').img100.m-auto
              h4.text-center Análisis del entorno interno
              p.text-center.mb-0 Examina los recursos, capacidades y estructura organizacional, así como los indicadores financieros y el desempeño operativo. Permite identificar fortalezas y aspectos por mejorar que inciden en la viabilidad del proyecto.
                    
            .tarjeta.bg-11.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/37.svg', alt='').img100.m-auto
              h4.text-center Análisis del entorno externo
              p.text-center.mb-0 Analiza variables económicas, tecnológicas, legales y competitivas que pueden afectar a la organización. Facilita el reconocimiento de oportunidades y amenazas derivadas del contexto en el que se desarrolla la iniciativa.

            .tarjeta.bg-11.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/38.svg', alt='').img100.m-auto
              h4.text-center Herramientas para el diagnóstico
              p.text-center.mb-0 Integra instrumentos como el análisis DOFA, el análisis de brechas y la revisión de indicadores estratégicos. Estas herramientas permiten organizar la información y estructurar un diagnóstico coherente y fundamentado.

            .tarjeta.bg-11.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/39.svg', alt='').img100.m-auto
              h4.text-center Fundamentación para la toma de decisiones
              p.text-center.mb-0 Consolida los resultados del diagnóstico y orienta decisiones estratégicas. Asegura que la formulación del proyecto responda a necesidades reales y se articule con los objetivos institucionales.

    p.mt-4 Una correcta identificación de las necesidades empresariales permite definir con claridad el problema central que el proyecto pretende resolver, establecer objetivos coherentes y delimitar su alcance. Cuando esta etapa se desarrolla con rigor metodológico, se reduce el riesgo de formular proyectos basados en percepciones subjetivas o en decisiones intuitivas. En consecuencia, el proyecto se alinea con la estrategia organizacional, responde a condiciones reales del entorno y aumenta sus probabilidades de viabilidad técnica y financiera.
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-11.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/40.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Con el propósito de organizar de manera estructurada los elementos que intervienen en la identificación de necesidades empresariales, se presenta a continuación una tabla que sintetiza los componentes fundamentales del análisis. Esta estructura permite visualizar la relación entre el problema identificado, sus causas, el impacto organizacional y la necesidad que debe atenderse para cerrar la brecha detectada.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 1.
          span Identificación de necesidades empresariales

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FE93C4")
              tr
                th(style="width: 200px;") Elemento
                th Descripción
                th Ejemplo Aplicado
            tbody
              tr(style="background-color: #F6F6F6")
                th Problema identificado
                td Situación que refleja una brecha entre el estado actual y el estado deseado de la empresa.
                td Disminución de ventas en el último año.
              tr
                th Causa principal
                td Factores internos o externos que originan el problema.
                td Falta de estrategia digital y baja diferenciación del producto.
              tr(style="background-color: #F6F6F6")
                th Impacto organizacional
                td Consecuencias que genera el problema en términos financieros, operativos o estratégicos.
                td Reducción de utilidades y pérdida de participación de mercado.
              tr
                th Necesidad empresarial
                td Requerimiento que debe atenderse para cerrar la brecha identificada.
                td Implementar un proyecto de modernización comercial y marketing digital.

        

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
