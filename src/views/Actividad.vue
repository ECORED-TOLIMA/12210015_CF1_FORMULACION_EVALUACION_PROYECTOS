<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario sobre formulación y estructuración del proyecto',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprobar el nivel de apropiación de los fundamentos conceptuales y metodológicos de la formulación y estructuración de proyectos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'Opción a)\tSe ejecuta de manera permanente.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tiene carácter temporal y resultado único.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No requiere planificación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No involucra recursos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La identificación de necesidades empresariales permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular la TIR.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Justificar técnicamente el proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar el flujo de caja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar el punto de equilibrio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'La fase del ciclo de vida donde se analizan indicadores como VPN y TIR es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'La investigación exploratoria se utiliza cuando:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El problema está completamente definido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se busca medir rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Existe poca claridad sobre la situación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se realiza el flujo de caja.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Una encuesta es una herramienta de:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recolección de información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ingeniería del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control presupuestal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'El análisis del entorno permite identificar:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilidades proyectadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Riesgos y oportunidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Punto de equilibrio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Flujo de caja.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'La población objetivo hace referencia a:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todos los habitantes del país.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los empleados de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los inversionistas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El segmento específico al que se dirige el proyecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'La prefactibilidad permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decidir preliminarmente si el proyecto continúa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Determinar la TIR definitiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar estados financieros históricos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar el proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'El análisis de demanda permite:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar costos fijos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proyectar ventas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular impuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer estructura legal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'El marketing mix está compuesto por:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio, utilidad, inversión y riesgo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producto, precio, promoción y plaza.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Costos, gastos, ingresos y flujo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Oferta, demanda, inflación y tasa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'El tamaño del proyecto está relacionado con:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad productiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Figura jurídica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tasa de descuento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rentabilidad financiera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'La ingeniería del proyecto define:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estrategias de promoción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proceso productivo y tecnología.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estructura de capital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nivel de endeudamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El capital de trabajo corresponde a:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activos fijos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los recursos para cubrir la operación inicial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilidades retenidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dividendos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'Los costos variables se caracterizan por:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permanecer constantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Variar según el nivel de producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No afectar el precio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser exclusivamente administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'El punto de equilibrio indica:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rentabilidad total.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel mínimo de ventas para no perder.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilidad máxima.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Valor presente neto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'El flujo de caja proyectado permite evaluar:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo utilidades contables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Liquidez del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Segmentación del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'Una S.A.S. se caracteriza por:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Responsabilidad ilimitada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Flexibilidad y responsabilidad limitada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ser exclusiva para multinacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requerir registro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'El análisis de oferta permite:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar competidores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Calcular depreciación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estimar punto de equilibrio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar capital de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'El cronograma del proyecto permite:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estimar utilidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar actividades en el tiempo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir precio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar estructura legal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'El estudio financiero integra información de:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo Mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mercado y técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mercado, técnico y organizacional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo contabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
