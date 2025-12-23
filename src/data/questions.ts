import { Question } from '../types';

export const questions: Question[] = [
  // 1-50: Primeras señales y dinámicas iniciales
  {
    id: '1',
    text: 'Llevas dos semanas saliendo con alguien y ya te dice que eres "el amor de su vida", que nunca había conectado así, y te propone iros a vivir juntos. Tú sientes...',
    options: [
      'Qué suerte, por fin alguien que sabe lo que quiere',
      'Es intenso pero supongo que así es el amor de verdad',
      'Me halaga, aunque algo en mí se siente un poco abrumada',
      'Deberíamos esperar, pero quizá estoy siendo demasiado fría'
    ],
    correctAnswer: 2,
    difficulty: 3,
    explanation: 'Cuando algo te abruma en vez de hacerte sentir en paz, tu cuerpo ya te está avisando. No necesitas saber cómo se llama para notar que no te sienta del todo bien.'
  },
  {
    id: '2',
    text: 'Tu nueva pareja te escribe constantemente, quiere saber dónde estás y con quién, y dice que es porque "se preocupa mucho por ti". ¿Cómo te hace sentir esto?',
    options: [
      'Cuidada y querida, es bonito que piense tanto en mí',
      'Un poco agobiada, pero es normal al principio',
      'Incómoda, como si tuviera que dar explicaciones de todo',
      'Es que tiene miedo de perderme, pobrecito'
    ],
    correctAnswer: 2,
    difficulty: 3,
    explanation: 'La preocupación genuina no te hace sentir vigilada. Si sientes que tienes que justificarte constantemente, algo no está funcionando como debería.'
  },
  {
    id: '3',
    text: 'En una discusión, tu pareja niega haber dicho algo que tú recuerdas perfectamente. Te mira como si estuvieras inventando cosas. Tú acabas pensando...',
    options: [
      'A lo mejor lo recuerdo mal, tampoco es para tanto',
      'Quizá lo dijo sin querer y ya no se acuerda',
      'Me siento confundida, pero confío en lo que escuché',
      'Seguro que tiene razón, últimamente estoy muy dispersa'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Si después de hablar con alguien acabas dudando de tu propia memoria cuando antes estabas segura, algo raro está pasando. Confía en tu percepción.'
  },
  {
    id: '4',
    text: 'Tu pareja menciona a menudo a su ex: "ella sí me entendía", "estaba más en forma que tú". ¿Cómo te sientes cuando lo hace?',
    options: [
      'Me motiva a mejorar para que esté más contento conmigo',
      'Incómoda y como si nunca fuera suficiente',
      'Es honesto, al menos sé lo que le gusta',
      'Creo que aún la quiere y eso me preocupa'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Si las comparaciones te dejan sintiéndote "menos que", no te están ayudando a mejorar. Te están haciendo sentir insegura, y eso no es casualidad.'
  },
  {
    id: '5',
    text: 'Después de unas semanas maravillosas, tu pareja se vuelve fría y crítica sin motivo aparente. ¿Qué piensas?',
    options: [
      'Algo habré hecho mal sin darme cuenta',
      'Estará pasando una mala racha en el trabajo',
      'Me desconcierta, no entiendo qué ha cambiado',
      'Es normal, la pasión inicial siempre baja'
    ],
    correctAnswer: 2,
    difficulty: 4,
    explanation: 'El desconcierto es una señal válida. No tienes por qué encontrar explicaciones a un cambio que no tiene sentido. Escucha tu confusión.'
  },
  {
    id: '6',
    text: 'Has decidido terminar la relación. De repente, aparece con flores, promesas de cambio y recordando "lo bonito que teníamos". ¿Qué sientes?',
    options: [
      'Quizá me precipité, parece que de verdad quiere cambiar',
      'Es muy romántico, igual le doy otra oportunidad',
      'Desconfianza, porque esto ya lo he visto antes',
      'Le echo de menos, a lo mejor es cosa del destino'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Si ya has visto este patrón antes, tu desconfianza está bien fundamentada. Los cambios reales se ven con el tiempo, no con gestos puntuales.'
  },
  {
    id: '7',
    text: 'Tu pareja hace "bromas" sobre tu aspecto o inteligencia delante de otros. Si te quejas, dice que no aguantas nada. Tú piensas...',
    options: [
      'Tiene razón, me lo tomo todo muy a pecho',
      'Es su forma de mostrar cariño, aunque me duele',
      'No me gusta cómo me siento después de esas bromas',
      'Debería aprender a reírme de mí misma'
    ],
    correctAnswer: 2,
    difficulty: 4,
    explanation: 'Si una broma te deja peor de lo que estabas, no es una broma. No hace falta analizarlo más: simplemente no quieres más de eso.'
  },
  {
    id: '8',
    text: 'Le cuentas algo que te preocupa y, de alguna manera, la conversación acaba siendo sobre sus problemas. ¿Cómo te sientes?',
    options: [
      'Es su forma de conectar, compartiendo experiencias',
      'Como si mis cosas no importaran tanto',
      'Supongo que sus problemas son más graves',
      'Intenta distraerme para que no me preocupe'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Si habitualmente acabas escuchando en vez de siendo escuchada cuando necesitas apoyo, la balanza está desequilibrada. Mereces atención cuando la pides.'
  },
  {
    id: '9',
    text: 'Cuando no haces lo que tu pareja quiere, deja de hablarte durante días. ¿Cómo interpretas su silencio?',
    options: [
      'Necesita tiempo para calmarse y está bien',
      'Es su forma de procesar las cosas',
      'Me genera ansiedad, como si fuera un castigo',
      'Es mejor que gritarnos'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Si su silencio te genera ansiedad y sensación de castigo, probablemente funcione exactamente así. El espacio sano no se siente como amenaza.'
  },
  {
    id: '10',
    text: 'Dices que no a algo y tu pareja explota o empieza a hacerse la víctima. ¿Qué piensas después?',
    options: [
      'Debí explicarme mejor para que no reaccionara así',
      'Quizá fui demasiado brusca al decir que no',
      'No es normal que un "no" genere esta reacción',
      'Es que es muy pasional y sensible'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Decir "no" es un derecho básico. Si cada vez que lo ejerces hay consecuencias emocionales desproporcionadas, el problema no está en cómo lo dices.'
  },
  {
    id: '11',
    text: 'Desde que estás con tu pareja, ves menos a tus amigos y familia. Él/ella dice que "no le caen bien" o se enfada cuando quedas con ellos.',
    options: [
      'Tiene razón, mi entorno no era tan bueno',
      'Es normal centrarse en la pareja al principio',
      'Echo de menos a mi gente y eso me preocupa',
      'Es casualidad, simplemente no hay tiempo'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'Echar de menos a tu gente es una señal importante. Las relaciones sanas amplían tu mundo, no lo reducen.'
  },
  {
    id: '12',
    text: 'Tu pareja siempre es el héroe o la víctima en sus historias. Todas sus ex "estaban locas". ¿Qué piensas?',
    options: [
      'Ha tenido muy mala suerte en el amor',
      'Es una persona muy fuerte que ha superado mucho',
      'Me pregunto qué pasó realmente en esas relaciones',
      'Seguro que dice la verdad, no tiene por qué mentir'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Cuando alguien nunca tiene parte de responsabilidad en sus conflictos pasados, es razonable preguntarse si la historia completa es diferente.'
  },
  {
    id: '13',
    text: 'Sientes que tienes que medir cada palabra y gesto en casa para no provocar una mala reacción. ¿Cómo describirías este estado?',
    options: [
      'Es respeto y consideración normal',
      'Estoy tensa, como esperando que explote algo',
      'Es parte de adaptarse a la convivencia',
      'Así mantengo la paz en casa'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si vives en tensión permanente intentando evitar conflictos, tu cuerpo está en modo alerta. Eso no es paz, es supervivencia.'
  },
  {
    id: '14',
    text: 'Tu pareja promete constantemente que "las cosas van a cambiar", pero nunca pasa. ¿Qué piensas?',
    options: [
      'Tiene buenas intenciones, solo le cuesta cumplir',
      'Me mantengo esperando algo que no llega',
      'Quiere cambiar de verdad, hay que darle tiempo',
      'Es optimista por naturaleza'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Si llevas tiempo esperando cambios que no llegan, quizá las promesas funcionan más para mantenerte ahí que para cambiar algo realmente.'
  },
  {
    id: '15',
    text: 'En público tu pareja es encantadora, pero en casa cambia completamente y se vuelve fría o agresiva. ¿Cómo lo vives?',
    options: [
      'Le agota socializar y por eso está más irritable',
      'Tiene dos caras muy diferentes',
      'Conmigo se relaja y muestra su verdadero yo',
      'Es que me tiene mucha confianza'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si la versión que el mundo ve es muy diferente a la que tú conoces en privado, es normal que te sientas confundida y sola con esa realidad.'
  },
  {
    id: '16',
    text: 'Te descubres pidiendo perdón por cosas que no has hecho, o por tu forma de reaccionar cuando te provocan. ¿Cómo te sientes?',
    options: [
      'Estoy aprendiendo a ser más humilde',
      'Confundida, como si siempre fuera yo la culpable',
      'Es lo mejor para que no haya más conflicto',
      'Soy así de buena persona'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si habitualmente acabas disculpándote sin saber muy bien por qué, algo se ha desequilibrado. Merece la pena preguntarse cómo llegaste ahí.'
  },
  {
    id: '17',
    text: 'Tu pareja usa cosas íntimas que le contaste en confianza para atacarte durante las discusiones. ¿Qué piensas?',
    options: [
      'Tiene muy buena memoria para todo',
      'La confianza se rompió y eso me duele',
      'Me siento traicionada, usó mis vulnerabilidades contra mí',
      'Intenta ayudarme a superar mis miedos'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'Lo que compartiste en intimidad no debería convertirse en munición. Sentirse traicionada en esos momentos es completamente válido.'
  },
  {
    id: '18',
    text: 'Ya no sabes qué te gusta, qué opinas o quién eres. Sientes que te has perdido desde que estás con esta persona.',
    options: [
      'He madurado y cambiado, es normal',
      'Me he adaptado demasiado y ya no me reconozco',
      'Es el sacrificio natural del amor',
      'Me he fusionado con mi pareja, es romántico'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Perderte a ti misma no es madurar ni amar. Si ya no te reconoces, es una señal de que algo importante se ha perdido en el camino.'
  },
  {
    id: '19',
    text: 'Tu pareja te acusa de coquetear o ser infiel sin pruebas, pero tú notas que es quien más coquetea con otros. ¿Qué piensas?',
    options: [
      'Me quiere tanto que le dan celos',
      'Es curioso que me acuse de lo que hace',
      'Tendrá sus razones para desconfiar',
      'Tiene un sexto sentido para estas cosas'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Cuando alguien te acusa constantemente de algo que en realidad hace, no es casualidad. Presta atención a ese patrón.'
  },
  {
    id: '20',
    text: 'Cuando intentas expresar cómo te sientes, te dice "no es para tanto" o "siempre estás con dramas". ¿Cómo reaccionas?',
    options: [
      'Intento relativizar más, tendrá razón',
      'Empiezo a dudar si mis sentimientos son válidos',
      'Me callo para no crear más problemas',
      'Es una persona muy práctica'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Si después de hablar de tus sentimientos dudas de si tenías derecho a sentirlos, algo no va bien. Tus emociones son válidas.'
  },
  {
    id: '21',
    text: 'Tu pareja olvida tus días especiales o crea peleas justo antes de ellos. ¿Qué piensas?',
    options: [
      'Es muy despistado/a, no lo hace a propósito',
      'Qué mala suerte, siempre pasa algo',
      'Es raro que siempre coincida con mis momentos importantes',
      'El estrés le afecta más esos días'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Cuando los "olvidos" o conflictos coinciden sistemáticamente con tus momentos, merece la pena preguntarse si es realmente casualidad.'
  },
  {
    id: '22',
    text: 'Te dice que nadie más te va a querer como él/ella, que estás "dañada" o que sin él/ella no eres nada. ¿Cómo te hace sentir?',
    options: [
      'Agradecida de tener a alguien que me aguanta',
      'Tengo suerte de que me quiera a pesar de mis defectos',
      'Atrapada, como si no tuviera más opciones',
      'Es su forma extraña de decirme que me quiere'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'El amor no te hace sentir atrapada ni defectuosa. Si te sientes así, no es amor lo que te están dando.'
  },
  {
    id: '23',
    text: 'Tu pareja parece una persona diferente según con quién esté: intelectual con unos, fiestero con otros, víctima con otros. ¿Qué opinas?',
    options: [
      'Es muy adaptable y social',
      'Tiene muchos intereses variados',
      'No sé cuál es su verdadera personalidad',
      'Es versátil, eso es bueno'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'No saber quién es realmente tu pareja después de tiempo juntos es confuso. Esa incertidumbre sobre su identidad es significativa.'
  },
  {
    id: '24',
    text: 'Tras la ruptura, ves que publica fotos muy feliz con alguien nuevo haciendo todo lo que tú querías hacer. ¿Qué sientes?',
    options: [
      'Me alegro de que sea feliz',
      'Tan rápido, debe ser amor verdadero',
      'Me duele, pero sé que es una fachada',
      'Yo no era suficiente para hacerle feliz'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'Sentir dolor es normal, pero intuir que hay algo forzado en esa felicidad instantánea también es válido. Confía en lo que sabes.'
  },
  {
    id: '25',
    text: 'Tu jefe se lleva el mérito de tus ideas, te critica en público pero luego te invita a comer como si nada. ¿Cómo lo vives?',
    options: [
      'Es un líder exigente pero justo',
      'Confundida, no sé si le caigo bien o mal',
      'Es gestión moderna, hay que adaptarse',
      'Es un poco raro pero no es mala persona'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'La confusión entre humillación y afabilidad no es normal en un entorno sano. Esa mezcla te mantiene en desequilibrio.'
  },
  {
    id: '26',
    text: 'Un familiar siempre habla de cuánto "se sacrifica por todos", pero usa la culpa para conseguir lo que quiere. ¿Qué opinas?',
    options: [
      'Es una madre/padre entregado que merece reconocimiento',
      'Siento culpa constantemente a su alrededor',
      'Necesita más cariño y atención',
      'Es una persona muy sensible'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si estar cerca de alguien te hace sentir culpable constantemente, presta atención. El sacrificio genuino no viene con factura emocional.'
  },
  {
    id: '27',
    text: 'Cuando le presentas pruebas de algo que hizo mal, cambia de tema, te ataca con cosas del pasado o habla sin sentido hasta confundirte.',
    options: [
      'Se lía al explicarse, es normal',
      'Acabo agotada y sin resolver nada',
      'Tiene razón en recordar el pasado',
      'Es su forma de debatir'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Si las conversaciones te dejan agotada y más confundida que al principio, sin ninguna resolución, algo está fallando en esa dinámica.'
  },
  {
    id: '28',
    text: 'Aunque sabes que esa persona te hace daño, sientes una necesidad casi física de contactarla. Es como una adicción.',
    options: [
      'Es amor verdadero que no muere',
      'Quizá soy masoquista',
      'Mi cuerpo reacciona aunque mi mente sepa que no me conviene',
      'Me falta fuerza de voluntad'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Esa necesidad compulsiva no es amor, es tu sistema nervioso enganchado a un patrón. Reconocerlo es el primer paso para salir.'
  },
  {
    id: '29',
    text: 'Has cortado el contacto con tu ex, pero amigos comunes te traen mensajes suyos o te dicen "pobrecito, lo está pasando mal".',
    options: [
      'Son buenos amigos intentando mediar',
      'Me presionan para que vuelva y me incomoda',
      'Son neutrales, solo transmiten información',
      'Quieren que hagamos las paces'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si esos mensajes te presionan para volver a algo que decidiste dejar, no son neutrales. Tu decisión merece ser respetada.'
  },
  {
    id: '30',
    text: 'Al principio te contó historias muy duras de su infancia. Sentiste que querías cuidarle y protegerle.',
    options: [
      'Fue un momento de intimidad sincera',
      'Quizá usó mi empatía para que bajara la guardia',
      'Conectamos a un nivel muy profundo',
      'Necesitaba un terapeuta más que una pareja'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'La empatía es bella, pero también puede ser usada. Si esas historias te hicieron tolerar cosas que no deberías, merece la pena reflexionar.'
  },
  {
    id: '31',
    text: 'Te regala cosas caras que no pediste y luego te las echa en cara si no haces lo que quiere. ¿Cómo te sientes?',
    options: [
      'Es generoso aunque tenga mal gusto',
      'Como si los regalos fueran deudas que debo pagar',
      'Debería ser más agradecida',
      'Es un detalle bonito mal entendido'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Los regalos que se convierten en deudas emocionales no son regalos. Si sientes que debes algo a cambio, la generosidad no era genuina.'
  },
  {
    id: '32',
    text: 'Consigues un logro importante y tu pareja apenas reacciona, o justo ese día se pone enferma o crea un problema.',
    options: [
      'Qué mala suerte que coincidiera',
      'No le da importancia a estas cosas',
      'Es raro que mis buenos momentos siempre se estropeen',
      'Estaba distraído/a con otras cosas'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'Cuando tus éxitos sistemáticamente coinciden con problemas o indiferencia, empieza a parecer menos casualidad y más patrón.'
  },
  {
    id: '33',
    text: 'Te repite que "nadie te va a aguantar", que "estás loca" o que "necesitas ayuda". Has empezado a creerlo.',
    options: [
      'Quizá tengo un carácter difícil',
      'Sus palabras se han metido en mi cabeza',
      'Es una recomendación de salud',
      'Quiere ayudarme a mejorar'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Cuando empiezas a repetirte las críticas de alguien como si fueran tuyas, es momento de preguntarte de dónde vienen realmente esos pensamientos.'
  },
  {
    id: '34',
    text: 'Le pides algo simple y dice que sí, pero nunca lo hace, o lo hace mal a propósito. Siempre hay excusas.',
    options: [
      'Es olvidadizo, no lo hace adrede',
      'Me frustra, siento que mis peticiones no importan',
      'Quizá tiene TDAH',
      'No me explico bien'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si repetidamente sientes que tus necesidades no son importantes, el problema no es tu forma de pedirlas.'
  },
  {
    id: '35',
    text: 'Durante una discusión, te bloquea la salida o te acorrala físicamente "para que le escuches".',
    options: [
      'Solo quiere hablar, no es grave',
      'Es algo intenso pero comprensible',
      'Me da miedo, aunque no me haya pegado',
      'Es muy apasionado/a'
    ],
    correctAnswer: 2,
    difficulty: 3,
    explanation: 'El miedo físico es una señal de alarma seria. No hace falta que haya golpes para que haya intimidación. Tu instinto tiene razón.'
  },
  {
    id: '36',
    text: 'Tu pareja opina sobre tu ropa, tu pelo, lo que comes. Al principio eran "sugerencias", ahora son críticas constantes.',
    options: [
      'Quiere que esté más guapa/o',
      'Tiene buen gusto y quiere compartirlo',
      'Ya no me siento libre de elegir por mí misma',
      'Me ayuda a mejorar mi imagen'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Si has dejado de sentirte libre para tomar decisiones sobre tu propio cuerpo y apariencia, algo importante se ha perdido.'
  },
  {
    id: '37',
    text: 'Has dejado la relación pero te sientes culpable por "abandonarle" cuando "te necesitaba".',
    options: [
      'Soy mala persona por irme',
      'Esta culpa no es mía, me la implantaron',
      'Tengo responsabilidad afectiva',
      'Le debo más de lo que le di'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'La culpa por protegerte a ti misma es una señal de que alguien te entrenó para sentirte responsable de su bienestar. No lo eres.'
  },
  {
    id: '38',
    text: 'Tu pareja trata mal a camareros o dependientes, pero es encantadora con gente importante. ¿Qué piensas?',
    options: [
      'Es exigente con el servicio, es normal',
      'Tiene clase y sabe comportarse',
      'Me incomoda ver cómo trata a quien no puede defenderse',
      'Habrá tenido un mal día'
    ],
    correctAnswer: 2,
    difficulty: 4,
    explanation: 'Cómo alguien trata a quienes no pueden devolverle nada dice mucho. Tu incomodidad ante eso es una brújula válida.'
  },
  {
    id: '39',
    text: 'Te promete algo maravilloso si haces lo que quiere. Lo haces, pero la promesa nunca se cumple.',
    options: [
      'Surgió algo y no pudo ser',
      'Me siento usada, fue solo una zanahoria',
      'Es mala suerte, la próxima vez será',
      'Los planes cambian, es normal'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Si repetidamente haces tu parte y la recompensa nunca llega, es razonable sentirse usada. No es mala suerte, es un patrón.'
  },
  {
    id: '40',
    text: 'Sientes que tienes que adivinar qué quiere o por qué está enfadado porque nunca te lo dice claramente, pero te castiga igual.',
    options: [
      'Debería desarrollar mi telepatía',
      'Vivo en ansiedad intentando leerle la mente',
      'Tengo que mejorar mi comunicación no verbal',
      'Me esfuerzo mucho por entenderle'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'No es tu trabajo adivinar lo que no te dicen. Vivir intentando descifrar a alguien que no comunica es agotador e injusto para ti.'
  },
  {
    id: '41',
    text: 'Tu pareja amenaza con hacerse daño si le dejas. ¿Qué sientes?',
    options: [
      'Es un amor desesperado, me necesita',
      'Me siento atrapada por miedo a lo que pueda pasar',
      'Quizá está muy deprimido y necesita ayuda',
      'Es muy romántico a su manera'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Sentirse atrapada por amenazas no es amor, es coacción. La responsabilidad de su vida no es tuya, aunque te hagan sentir que sí.'
  },
  {
    id: '42',
    text: 'Después de una pelea terrible, tenéis sexo intenso y sientes que todo se ha arreglado. ¿Es así?',
    options: [
      'Sí, es sexo de reconciliación',
      'Me siento mejor pero nada se ha hablado realmente',
      'Nos hemos perdonado de esta manera',
      'La pasión sigue viva'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Si después de la intensidad física el problema original sigue ahí sin resolver, la reconciliación es una ilusión. El alivio temporal no es solución.'
  },
  {
    id: '43',
    text: 'Antes de esta relación te sentías estable. Ahora te sientes loca, celosa e insegura. ¿Qué ha pasado?',
    options: [
      'La relación sacó mi peor versión',
      'Yo soy el problema aquí',
      'Algo en esta relación me ha desestabilizado',
      'Necesito medicación'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Si entraste estable y ahora te sientes inestable, el contexto importa. No asumas que el problema eres tú sin mirar qué ha cambiado.'
  },
  {
    id: '44',
    text: 'Cada vez que quieres hablar de la relación, acabas disculpándote por ser "ingrata" con todo lo que hace por ti.',
    options: [
      'Es verdad, soy muy egoísta',
      'La conversación siempre se desvía y acabo yo pidiendo perdón',
      'Hace mucho por mí y debería reconocerlo más',
      'Tenemos una comunicación muy efectiva'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si nunca puedes hablar de lo que te preocupa sin acabar disculpándote, la comunicación no está funcionando a tu favor.'
  },
  {
    id: '45',
    text: 'Le pides respeto básico y te dice "yo soy así, tómalo o déjalo". ¿Qué interpretas?',
    options: [
      'Es una persona auténtica que sabe quién es',
      'No va a cambiar y tendré que decidir si puedo con eso',
      'Es muy honesto/a',
      'Tiene mucha personalidad'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Cuando alguien te dice claramente que no va a cambiar, créele. La decisión de si puedes vivir con eso es tuya.'
  },
  {
    id: '46',
    text: 'Sientes alivio cuando tu pareja no está en casa. ¿Qué te dice eso?',
    options: [
      'Me gusta la soledad, es normal',
      'Mi cuerpo se relaja cuando no está, eso significa algo',
      'Luego le echaré de menos',
      'Soy muy independiente'
    ],
    correctAnswer: 1,
    difficulty: 3,
    explanation: 'Si tu cuerpo se relaja cuando esa persona no está, tu sistema nervioso te está dando información importante. Escúchalo.'
  },
  {
    id: '47',
    text: 'Tu pareja te compara constantemente con su madre/padre, diciendo que deberías ser más como ella/él.',
    options: [
      'Quiere mucho a su familia, es normal',
      'Me hace sentir que nunca estaré a la altura',
      'Quiere que me lleve bien con ellos',
      'Es muy familiar'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Las comparaciones constantes con figuras que nunca podrás igualar te mantienen sintiéndote insuficiente. Eso no es casualidad.'
  },
  {
    id: '48',
    text: 'Descubres que tu pareja tiene perfiles en apps de citas. Dice que es "solo para hacer amigos" o "por aburrimiento".',
    options: [
      'Es muy sociable y extrovertido/a',
      'No me lo creo, pero quiero creerle',
      'Es simple curiosidad',
      'No significa nada'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Cuando la explicación no te convence pero quieres creerla, esa disonancia es información. Confía en lo que tu intuición percibe.'
  },
  {
    id: '49',
    text: 'Cuando te pones enferma, tu pareja se enfada, te ignora o dice que "siempre te pasa algo". ¿Cómo te sientes?',
    options: [
      'Le dan asco los virus, es comprensible',
      'Sola y culpable por necesitar cuidados',
      'Quiere que me recupere rápido',
      'Quizá exagero mis malestares'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Sentirse culpable por enfermar no es normal. Merecemos cuidado cuando lo necesitamos, no reproches.'
  },
  {
    id: '50',
    text: 'Al principio te decía que eras "demasiado buena para él/ella". Ahora te dice que "tienes suerte de que te aguante".',
    options: [
      'Simplemente cambió de opinión sobre mí',
      'Me subió muy arriba para luego dejarme caer',
      'Es una broma recurrente',
      'Ahora es más realista'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Pasar de ser idealizada a ser menospreciada no es evolución natural. Ese contraste tan marcado tiene un efecto muy específico en tu autoestima.'
  },
  // 51-100: Dinámicas más sutiles y contextos variados
  {
    id: '51',
    text: 'Tu pareja te critica por algo que ella misma hace constantemente. Si se lo señalas, se enfada y dice que "no es lo mismo". ¿Cómo te sientes?',
    options: [
      'Confundida por la incoherencia',
      'Quizá tiene razón, sus motivos son diferentes',
      'Es un simple malentendido',
      'No me había dado cuenta de que lo hacía'
    ],
    correctAnswer: 0,
    difficulty: 5,
    explanation: 'Cuando las reglas solo aplican para ti pero no para la otra persona, la confusión es la respuesta lógica. Esa incoherencia no es casualidad.'
  },
  {
    id: '52',
    text: 'En una cena familiar, tu madre/padre cuenta una historia humillante de tu infancia para hacer reír a todos. Si te molestas, dice que "no tienes humor".',
    options: [
      'Es una familia muy divertida y cercana',
      'Me siento expuesta y nadie respeta mi incomodidad',
      'Es amor de madre/padre, aunque a veces duela',
      'Quizá soy demasiado susceptible'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Sentirse expuesta y que tu incomodidad sea ignorada no es señal de que seas "demasiado sensible". Tu malestar es válido.'
  },
  {
    id: '53',
    text: 'Has cortado con tu pareja. Al día siguiente, descubres que ha llamado a tus padres y amigos diciendo que "está preocupado/a por tu salud mental".',
    options: [
      'Se preocupa de verdad por mí',
      'Intenta controlar la narrativa antes de que yo hable',
      'Busca consuelo en mi entorno',
      'Es un gesto de bondad mal entendido'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Si alguien te quería bien, no llamaría a tu entorno cuestionando tu estabilidad justo cuando decides irte. Eso es otra cosa.'
  },
  {
    id: '54',
    text: 'Tu pareja controla cada euro que gastas, te pide tickets y te critica si compras algo para ti, aunque gaste mucho en sí misma.',
    options: [
      'Es muy ahorrador/a, está pensando en nuestro futuro',
      'Siento que no tengo libertad con mi propio dinero',
      'Es buena administración de la casa',
      'Simplemente tiene otra forma de ver las finanzas'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si tu dinero está vigilado pero el suyo no, el tema no es el ahorro. Es quién tiene libertad y quién no.'
  },
  {
    id: '55',
    text: 'Te dice que eres "demasiado inteligente para tu propio bien" o que "tus estudios no sirven para nada". ¿Cómo te hace sentir?',
    options: [
      'Es una opinión sincera que debo considerar',
      'Como si mi formación fuera un defecto, no un logro',
      'Quiere que sea más práctica',
      'Es un cumplido extraño'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Cuando tus logros se presentan como problemas, no te están ayudando a mejorar. Te están haciendo sentir que brillar es un error.'
  },
  {
    id: '56',
    text: 'Tu pareja coquetea abiertamente con otras personas delante de ti. Si dices algo, te acusa de ser "celosa e insegura".',
    options: [
      'Solo es amable, no significa nada',
      'Me siento mal y encima me hacen sentir que el problema soy yo',
      'Es su forma de ser, muy sociable',
      'Quizá sí soy demasiado celosa'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Sentir malestar y que además te culpen por sentirlo es una doble trampa. El problema no es tu percepción.'
  },
  {
    id: '57',
    text: 'Tu pareja te interrumpe constantemente cuando hablas, termina tus frases o habla por ti en reuniones.',
    options: [
      'Me conoce tan bien que sabe lo que voy a decir',
      'Siento que mi voz no tiene espacio',
      'Es muy impaciente, pero no lo hace con mala intención',
      'Intenta ayudarme a explicarme mejor'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Si habitualmente no puedes terminar tus propias frases, tu voz está siendo silenciada. No importa la intención, importa el efecto.'
  },
  {
    id: '58',
    text: 'Sientes que cada favor que te hace o momento bonito hay que "pagarlo" con gratitud eterna o aguantando mal trato después.',
    options: [
      'Es reciprocidad normal en una pareja',
      'Como si nada fuera gratis y siempre debiera algo',
      'Es gratitud, algo positivo',
      'Es un intercambio justo'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'El amor no se cobra. Si sientes que cada gesto positivo viene con factura emocional, la generosidad no era genuina.'
  },
  {
    id: '59',
    text: 'Tu pareja está obsesionada con su físico y te presiona constantemente para que tú también estés "perfecta".',
    options: [
      'Es muy deportista y quiere compartirlo conmigo',
      'Me siento juzgada si no cumplo sus estándares físicos',
      'Quiere que estemos sanos juntos',
      'Le gusta cuidarse y eso es admirable'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'La diferencia entre motivar y presionar está en cómo te sientes. Si te sientes juzgada, no es apoyo, es exigencia.'
  },
  {
    id: '60',
    text: 'Tu pareja menosprecia a quienes no tienen su nivel de estudios, llamándolos "simples" o "borregos".',
    options: [
      'Es una persona muy culta con altos estándares',
      'Me incomoda cómo habla de los demás',
      'Valora la inteligencia, no es para tanto',
      'Es un intelectual, así son'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Cuando alguien necesita menospreciar a otros para sentirse superior, esa superioridad no es real. Tu incomodidad tiene sentido.'
  },
  {
    id: '61',
    text: 'Tu pareja miente sobre cosas pequeñas sin necesidad. Cuando la pillas, miente sobre la mentira.',
    options: [
      'Tiene mala memoria, no es grave',
      'No entiendo por qué miente en cosas que no importan',
      'No quiere herirme con la verdad',
      'Son mentiritas sin importancia'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Cuando alguien miente sin motivo aparente, el tema no es la mentira específica. Es que la verdad no tiene valor para esa persona.'
  },
  {
    id: '62',
    text: 'Tu pareja usa el sexo como premio cuando "te portas bien" y lo niega como castigo cuando hay conflicto.',
    options: [
      'Es normal no tener ganas cuando estamos mal',
      'La intimidad se ha convertido en moneda de cambio',
      'Tiene bajo deseo sexual',
      'Respeto sus tiempos'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'La intimidad no debería ser un sistema de recompensa y castigo. Si lo es, la relación se ha convertido en una transacción.'
  },
  {
    id: '63',
    text: 'En una discusión, empieza a imitar tu voz de forma burlona o hace ruidos mientras hablas.',
    options: [
      'Intenta quitarle hierro a la situación',
      'Me siento humillada y ganas de explotar',
      'Es un comportamiento infantil, no lo hace adrede',
      'Quiere que deje de gritar'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Sentirse humillada no es ser "demasiado sensible". Es la respuesta natural cuando alguien te ridiculiza activamente.'
  },
  {
    id: '64',
    text: 'Tu pareja parece un niño pequeño en un cuerpo de adulto: berrinches, necesidad de atención constante, cero tolerancia a la frustración.',
    options: [
      'Tiene espíritu joven',
      'Me agota tener que ser siempre yo la adulta de la relación',
      'Es una fase de inmadurez pasajera',
      'Es espontáneo y eso me gusta'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Estar siempre en el rol de cuidadora de un adulto es agotador. No es tu trabajo criar a tu pareja.'
  },
  {
    id: '65',
    text: 'Tu pareja te dice que "somos un equipo contra el mundo" y que "nadie nos entiende como nosotros".',
    options: [
      'Es una unión muy fuerte y especial',
      'Siento que me aleja de todo lo demás',
      'Es muy romántico',
      'Es lealtad extrema'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'El romance que te aísla de tu mundo no es protección, es limitación. Las relaciones sanas no necesitan enemigos externos.'
  },
  {
    id: '66',
    text: 'Un "amigo" siempre te cuenta lo malo que otros dicen de ti "para protegerte", pero te deja sintiéndote fatal.',
    options: [
      'Es un amigo fiel que me cuida',
      'Después de hablar con él/ella me siento peor, no mejor',
      'Es muy honesto, eso es bueno',
      'Es un buen confidente'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'La información que te deja peor no es protección. Si después de sus "avisos" te sientes más insegura, el efecto no es accidental.'
  },
  {
    id: '67',
    text: 'Tu pareja se lleva el mérito cuando las cosas salen bien, pero te culpa cuando salen mal.',
    options: [
      'Es un poco egocéntrico pero no malo',
      'Siento que cargo con lo malo y no me reconocen lo bueno',
      'Es que yo no sé gestionar las crisis',
      'Es un líder natural'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Si solo te toca cargar con los fracasos, la distribución no es justa. Tu percepción de injusticia es acertada.'
  },
  {
    id: '68',
    text: 'Has empezado a dudar de tus propios recuerdos. Tienes "niebla mental" y te cuesta concentrarte.',
    options: [
      'Es el estrés del trabajo',
      'Desde que estoy con esta persona, mi mente no funciona igual',
      'Me faltan vitaminas',
      'Es la edad'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Si tu claridad mental ha cambiado desde que estás con alguien, esa correlación merece atención. El contexto importa.'
  },
  {
    id: '69',
    text: 'En tu familia hay un hermano que nunca hace nada mal y otro que siempre es el culpable de todo.',
    options: [
      'Es cuestión de personalidades diferentes',
      'Los roles están repartidos de forma muy injusta',
      'El mayor siempre tiene más responsabilidad',
      'Es afinidad natural'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Cuando los roles son tan rígidos independientemente de lo que cada uno haga, hay algo estructural que no funciona.'
  },
  {
    id: '70',
    text: 'Tu pareja se presenta como "muy espiritual" o "muy religiosa", pero usa eso para juzgarte: "vibras bajo", "estás en pecado".',
    options: [
      'Es una persona muy conectada con lo espiritual',
      'Su espiritualidad se usa para hacerme sentir inferior',
      'Quiere guiarme en mi camino',
      'Me ayuda a crecer espiritualmente'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'La espiritualidad que te hace sentir inferior no es guía, es control. Una fe sana no se usa como arma.'
  },
  {
    id: '71',
    text: 'Tu pareja te despierta en mitad de la noche para discutir o no te deja dormir "hasta que se arreglen las cosas".',
    options: [
      'Es muy apasionado/a y quiere resolverlo todo',
      'Estoy agotada y no puedo pensar con claridad',
      'Prefiere hablarlo ahora que dejarlo para mañana',
      'Quiere solucionar los problemas rápido'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'No poder dormir hasta que aceptes lo que quiere no es comunicación. Es agotamiento estratégico.'
  },
  {
    id: '72',
    text: 'Tu pareja parece saber exactamente qué decir para herirte o para que vuelvas. Es como si "leyera tu mente".',
    options: [
      'Tenemos una conexión muy especial',
      'Conoce mis puntos débiles y los usa',
      'Es muy inteligente emocionalmente',
      'Tenemos telepatía'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Conocer tus puntos débiles para protegerte es amor. Conocerlos para usarlos es otra cosa muy diferente.'
  },
  {
    id: '73',
    text: 'Te dice: "Siento que te hayas sentido mal por lo que dije". ¿Cómo te suena esa disculpa?',
    options: [
      'Me ha pedido perdón, está bien',
      'No se disculpa por lo que hizo, sino por cómo reaccioné yo',
      'Es una disculpa a medias, pero es algo',
      'Es muy educado/a'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Una disculpa real asume responsabilidad por la acción, no por tu reacción. La diferencia es sutil pero importante.'
  },
  {
    id: '74',
    text: 'Tras dejar la relación, te das cuenta de que no tienes hobbies, ni amigos cercanos, ni ahorros propios.',
    options: [
      'Es empezar de cero, pasa a veces',
      'Todo lo que era mío se fue perdiendo sin darme cuenta',
      'Mala suerte post-ruptura',
      'Ahora tengo libertad total'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Si al salir descubres que no te queda nada propio, esa pérdida no fue accidental. Alguien se beneficiaba de tu aislamiento.'
  },
  {
    id: '75',
    text: 'Tu pareja te graba cuando estás llorando o alterada, diciendo que es "para que veas cómo te pones".',
    options: [
      'Quiere que sea consciente de mis reacciones',
      'Me provoca y luego graba solo mi reacción',
      'Es un diario de nuestra relación',
      'Quiere tener pruebas por si acaso'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Grabar solo tu reacción sin el contexto que la provocó no es documentación honesta. Es fabricación de evidencia.'
  },
  {
    id: '76',
    text: 'Llevas meses intentando "ganar" discusiones o hacer que tu pareja entienda. ¿Qué has conseguido?',
    options: [
      'Algunos avances pequeños',
      'Agotamiento sin ningún cambio real',
      'Estoy aprendiendo a comunicarme mejor',
      'Poco a poco vamos mejorando'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Si después de mucho esfuerzo solo tienes agotamiento, quizá el juego no se puede ganar. A veces la victoria es dejar de jugar.'
  },
  {
    id: '77',
    text: 'Cuando las cosas van bien y hay paz, tu pareja parece aburrirse y encuentra cualquier excusa para crear un conflicto.',
    options: [
      'Necesita emoción en su vida',
      'La paz le incomoda y el conflicto le activa',
      'Es muy activo/a mentalmente',
      'No soporta la monotonía'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si la paz se siente como amenaza para alguien, esa persona necesita el caos. No es tu trabajo proporcionárselo.'
  },
  {
    id: '78',
    text: 'Tu pareja idealiza su infancia diciendo que fue "perfecta", pero no tiene relación real con su familia o es de sumisión total.',
    options: [
      'Respeta mucho a sus padres',
      'La historia que cuenta no cuadra con lo que veo',
      'Tiene una familia muy unida',
      'Es reservado/a con su pasado'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Cuando las palabras y los hechos no coinciden, confía en lo que ves, no en lo que te cuentan.'
  },
  {
    id: '79',
    text: 'Tras dejar la relación, sientes que nadie te va a creer porque tu ex es "encantador/a" con todo el mundo.',
    options: [
      'Quizá exagero lo que pasó',
      'Viví algo real aunque nadie más lo viera',
      'Seguramente él/ella tiene razón',
      'Debería estar agradecida por lo bueno'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Que otros no vean lo que tú viviste no significa que no ocurrió. Tu experiencia es válida aunque sea invisible para los demás.'
  },
  {
    id: '80',
    text: 'No puedes cortar el contacto totalmente, así que decides ser aburrida, neutral, sin dar información ni emociones. ¿Qué efecto tiene?',
    options: [
      'Me siento fuerte y protegida',
      'Es agotador, pero me da algo de paz',
      'Me siento como un robot',
      'Funciona a veces, otras no'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Esa estrategia de supervivencia no es cómoda, pero a veces es necesaria. Lo importante es que te da algo de espacio.'
  },
  {
    id: '81',
    text: 'Tu pareja te dice que "te ha hecho un favor al estar contigo". ¿Cómo te hace sentir eso?',
    options: [
      'Agradecida de que me elija',
      'Como si tuviera que devolverle algo por existir',
      'Es su forma rara de decir que me quiere',
      'Tengo suerte de tenerle'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Sentir que debes algo por ser elegida no es amor. El amor no genera deuda.'
  },
  {
    id: '82',
    text: 'Tu ex "compra" a tus hijos con regalos excesivos y permisividad, poniéndolos en tu contra.',
    options: [
      'Es muy generoso/a con los niños',
      'Siento que los usa para hacerme daño a mí',
      'Quiere compensar el tiempo perdido',
      'Es su forma de pedir perdón'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Cuando los hijos se usan como herramienta en un conflicto de adultos, el objetivo no es su bienestar.'
  },
  {
    id: '83',
    text: 'Te dice que eres "demasiado emocional" o "poco racional" para invalidar tus quejas.',
    options: [
      'Tiene razón, debería controlarme más',
      'Siento que cualquier cosa que diga será descartada',
      'Es una persona muy lógica',
      'Me ayuda a ver las cosas más fríamente'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Si tus emociones se usan para invalidar lo que dices, el problema no son tus emociones. Es que no quieren escucharte.'
  },
  {
    id: '84',
    text: 'Tras la ruptura, tu ex nunca te dio un cierre real. Sigues sin entender qué pasó.',
    options: [
      'No sabe cómo hacerlo',
      'Me dejó en suspenso a propósito',
      'Está muy dolido/a para hablar',
      'No quiere hacerme más daño'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'El cierre que nunca llega no es falta de habilidad. Es una puerta que se deja abierta intencionalmente.'
  },
  {
    id: '85',
    text: 'Sientes que tu felicidad le molesta a tu pareja. Solo parece contenta cuando tú estás mal.',
    options: [
      'Es mi imaginación',
      'Hay un patrón real: mi tristeza le activa, mi alegría le apaga',
      'Es muy empática con mi dolor',
      'Solo quiere cuidarme cuando estoy mal'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Si has notado ese patrón repetidamente, no es imaginación. Confía en lo que has observado.'
  },
  {
    id: '86',
    text: 'Tu pareja dice que "todos tus amigos son hipócritas" y que "solo él/ella te dice la verdad".',
    options: [
      'Es muy directo/a, eso es bueno',
      'Me está alejando de la gente que me quiere',
      'Quiere protegerme de malas influencias',
      'Me ayuda a elegir mejor mis amistades'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Cuando alguien te dice que solo puedes confiar en él/ella, no te está protegiendo. Te está aislando.'
  },
  {
    id: '87',
    text: 'Al principio, tu pareja parecía tu "alma gemela": compartía todos tus gustos, opiniones, hasta tu forma de hablar.',
    options: [
      'Encontré a mi persona perfecta',
      'Ahora me pregunto si esa persona era real o un reflejo mío',
      'Nos parecemos mucho naturalmente',
      'Me admira profundamente'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'La coincidencia perfecta al principio que luego desaparece merece preguntarse: ¿era real o era lo que yo quería ver?'
  },
  {
    id: '88',
    text: 'Tras una pelea, te dice: "Si tanto te molesto, ¿por qué no me dejas?". ¿Qué sientes?',
    options: [
      'Me está dando libertad para decidir',
      'Siento presión para demostrar que le quiero',
      'Es una pregunta lógica',
      'Quiere terminar la relación'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si esa pregunta te hace sentir que debes demostrar algo, no es una invitación sincera. Es un reto.'
  },
  {
    id: '89',
    text: 'Intentas no reaccionar emocionalmente con tu ex porque sabes que lo usa. ¿Qué pasa cuando lo haces?',
    options: [
      'Se calma y todo va mejor',
      'A veces se enfada más intentando provocarme',
      'Se aleja y me deja en paz',
      'Se vuelve más cariñoso'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Si tu calma provoca que intensifique los intentos de provocarte, estás confirmando lo que tu instinto ya sabía.'
  },
  {
    id: '90',
    text: 'Tu pareja te puso en un pedestal al principio: "eres perfecta", "me das miedo de lo increíble que eres".',
    options: [
      'Fue muy romántico y me encantó',
      'Ahora siento que cualquier fallo me hará caer de ese pedestal',
      'Me admira sinceramente',
      'Es muy inseguro/a y yo le doy seguridad'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Los pedestales son incómodos porque desde ahí solo puedes caer. La presión de mantenerse "perfecta" es agotadora.'
  },
  {
    id: '91',
    text: 'Tu pareja nunca te pregunta cómo estás o cómo te fue el día. Parece no interesarle tu mundo interno.',
    options: [
      'Es despistado/a, no es mala persona',
      'Siento que no le importo más allá de lo que hago por él/ella',
      'Ya lo sabe todo de mí, no hace falta',
      'Es poco hablador/a'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Sentir que solo importas por lo que haces, no por quién eres, no es despiste. Es falta de interés real.'
  },
  {
    id: '92',
    text: 'Tu ex te escribe en tu cumpleaños después de meses de silencio con un mensaje "inocente".',
    options: [
      'Qué detalle, se acordó de mí',
      'No es casualidad, quiere ver si aún tiene acceso',
      'Es un gesto de buena voluntad',
      'Le echo de menos, quizá debería contestar'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Los mensajes en fechas vulnerables rara vez son inocentes. Buscan ver si la puerta sigue abierta.'
  },
  {
    id: '93',
    text: 'Te dice que "solo él/ella te dice las cosas claras por tu bien, los demás te mienten".',
    options: [
      'Es brutalmente honesto/a, eso es valioso',
      'Sus "verdades" siempre me dejan sintiéndome peor',
      'Me quiere tanto que no me endulza las cosas',
      'Es crítica constructiva'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'La honestidad que siempre te deja peor no es cuidado. Es ataque disfrazado de franqueza.'
  },
  {
    id: '94',
    text: 'Tu ex ha vuelto a escribirte años después, como si nada hubiera pasado. ¿Por qué crees que lo hace?',
    options: [
      'El amor nunca muere, me sigue queriendo',
      'Sabe exactamente cómo funcionan mis botones',
      'Ha cambiado y quiere redimirse',
      'Es nostalgia'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Volver años después sabiendo cómo engancharte no es amor renacido. Es conocimiento aplicado.'
  },
  {
    id: '95',
    text: 'Sabes que esa persona te hace daño, pero sientes una necesidad casi física de estar con ella. ¿Cómo lo explicas?',
    options: [
      'Es amor verdadero, muy intenso',
      'Mi cuerpo está enganchado a algo que mi mente rechaza',
      'Compartimos traumas que nos unen',
      'Es amor incondicional'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Cuando tu cuerpo y tu mente dicen cosas distintas, hay algo más que amor. Reconocerlo es el primer paso.'
  },
  {
    id: '96',
    text: 'Tu pareja niega cosas que tienes grabadas o por escrito. Dice que lo inventas aunque tengas pruebas.',
    options: [
      'Quizá malinterpreté las pruebas',
      'Niega la realidad aunque la tenga delante',
      'Tiene mala memoria',
      'Los archivos pueden confundirse'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Negar pruebas físicas no es mala memoria. Es insistir en que su versión vale más que la realidad.'
  },
  {
    id: '97',
    text: 'Llevas meses sanando y sintiéndote mejor. De repente, tu ex reaparece. ¿Coincidencia?',
    options: [
      'Se alegra de que esté bien',
      'Mi mejoría le molesta y viene a sabotearla',
      'No le importo, es casualidad',
      'Ha reflexionado y se arrepiente'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Tu felicidad sin él/ella puede sentirse como un insulto para quien necesitaba que le necesitaras. La reaparición rara vez es casualidad.'
  },
  {
    id: '98',
    text: 'Quieres salir de esta dinámica pero no sabes por dónde empezar. ¿Cuál sería el primer paso?',
    options: [
      'Convencerle de que vaya a terapia',
      'Aceptar que lo que vivo tiene nombre y no es normal',
      'Esperar a que él/ella me deje',
      'Intentarlo una vez más'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'No puedes salir de algo que no reconoces. Ver la situación con claridad es el primer paso, y el más difícil.'
  },
  {
    id: '99',
    text: 'Tu pareja te dice que "nadie te entenderá como él/ella" porque tienes "un pasado muy oscuro".',
    options: [
      'Me acepta como soy, con todo',
      'Usa mi pasado para hacerme sentir que no merezco más',
      'Es muy comprensivo/a',
      'Me ayuda a sanar mis heridas'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Tu historia no te hace menos merecedora de buen trato. Quien la usa para atarte no te está aceptando, te está atrapando.'
  },
  {
    id: '100',
    text: 'Tras meses de críticas y frialdad, tu pareja te abandona de repente, a menudo por alguien nuevo. ¿Cómo te sientes?',
    options: [
      'Aliviada, aunque también rota',
      'Desechada, como si ya no sirviera',
      'Confundida, no entiendo qué pasó',
      'Es lo mejor para ambos'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Sentirse desechada después de haber dado tanto no es debilidad. Es la respuesta natural a ser tratada como un objeto reemplazable.'
  },
  // 101-150: Recuperación, Límites y Casos Específicos
  {
    id: '101',
    text: 'Has decidido aplicar el "Contacto Cero". No le escribes, no le llamas. ¿Cuál es la señal de que está funcionando?',
    options: [
      'Él/ella se da cuenta de lo que perdió y vuelve pidiendo perdón',
      'Empiezas a tener menos ansiedad y la "niebla mental" se disipa poco a poco',
      'Le haces daño con tu silencio para que aprenda la lección',
      'Demuestras a todos que eres la persona fuerte de la relación'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'El contacto cero no es una estrategia de reconquista ni de venganza, es una medida de higiene mental. Si tu ansiedad baja, funciona, haga lo que haga la otra persona.'
  },
  {
    id: '102',
    text: 'Tu ex, con quien terminaste mal, te escribe de la nada: "He soñado contigo, espero que estés bien". ¿Qué haces?',
    options: [
      'Respondo educadamente con un "gracias, igualmente" para no ser rencorosa',
      'Le pregunto qué soñó, por simple curiosidad humana',
      'Borro el mensaje y no contesto. Cualquier respuesta reabre la puerta',
      'Le digo que me deje en paz de una vez por todas'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Responder, aunque sea para insultar o ser educada, le da lo que busca: saber que todavía tiene acceso a ti. El silencio es la única respuesta que protege tu paz.'
  },
  {
    id: '103',
    text: 'Después de horas de que te provoquen, te critiquen y te ignoren, estallas y gritas un insulto. Tu pareja dice sonriendo: "¿Ves? La violenta eres tú". ¿Qué sientes?',
    options: [
      'Tiene razón, he perdido los papeles y soy igual de tóxica',
      'Una culpa terrible y la sensación de que soy yo quien estropea todo',
      'Que me han empujado al límite a propósito para luego culparme de mi reacción',
      'Que necesito ir a terapia para controlar mi ira'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Se llama "Ira Reactiva". Te pinchan hasta que explotas para poder señalar tu reacción y ocultar su provocación previa. No eres el abusador por defenderte, eres humano.'
  },
  {
    id: '104',
    text: 'Estás cenando con alguien nuevo y te cuenta que sus tres últimas ex parejas estaban "totalmente locas" y le hicieron mucho daño. Tú piensas...',
    options: [
      'Pobre, qué mala suerte ha tenido en el amor',
      'Me gusta que sea tan sincero y vulnerable desde el principio',
      'Si todas estaban "locas", el único denominador común es él',
      'Yo le demostraré que no todas somos iguales'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Es una de las señales más claras. Alguien que no asume ninguna responsabilidad en sus rupturas y demoniza a todas sus ex parejas, probablemente hará lo mismo contigo.'
  },
  {
    id: '105',
    text: 'Descubres que te ocultó información importante sobre dinero o planes. Cuando le preguntas, dice: "No te mentí, simplemente no te lo dije".',
    options: [
      'Técnicamente es verdad, no mintió',
      'Ocultar información deliberadamente para manipular es mentir',
      'Quizá se le olvidó con el estrés',
      'Tengo que dejar de interrogarle tanto'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'La omisión es una mentira sofisticada. Te priva de la información necesaria para tomar decisiones libres sobre tu propia vida.'
  },
  {
    id: '106',
    text: 'Suele decirte frases como "te he ayudado a ser quien eres" o "sin mí seguirías perdida". Aunque suena a apoyo, te hace sentir...',
    options: [
      'Muy agradecida por tenerle en mi vida',
      'Pequeña, como si mis logros fueran prestados',
      'Segura, porque sé que me cubre las espaldas',
      'Motivada para seguir mejorando'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'El apoyo real empodera, no genera deuda. Si su "ayuda" te hace sentir que no vales nada por ti misma, no es ayuda, es creación de dependencia.'
  },
  {
    id: '107',
    text: 'Le dices: "Por favor, no me hables en ese tono, me duele". Su reacción inmediata es...',
    options: [
      'Pedir perdón y bajar el tono',
      'Explicar por qué estaba nervioso',
      'Enfadarse más: "Ahora resulta que no se te puede decir nada, qué piel más fina"',
      'Quedarse callado para reflexionar'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'Poner un límite sano a un narcisista se vive como un ataque. En lugar de respetar tu petición, te atacará por haberla hecho.'
  },
  {
    id: '108',
    text: 'Te das cuenta de que antes de comprarte algo bonito o quedar con un amigo, ensayas mentalmente cómo se lo vas a explicar a tu pareja para que no se enfade.',
    options: [
      'Es normal, quiero que esté tranquilo',
      'Soy muy considerada con sus sentimientos',
      'He perdido mi autonomía y vivo pidiendo permiso para ser yo',
      'Es para evitar malentendidos innecesarios'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Si tienes que gestionar su estado de ánimo antes de hacer cosas normales de adulto, no estás en una relación de iguales, estás bajo tutela emocional.'
  },
  {
    id: '109',
    text: 'Te esfuerzas al máximo en casa, en el trabajo y con la pareja, pero él/ella siempre tiene una queja: "nunca es suficiente", "siempre estás cansada".',
    options: [
      'Tengo que organizarme mejor',
      'Es verdad, últimamente no le dedico tiempo de calidad',
      'Es un pozo sin fondo: nada de lo que haga bastará para llenarle',
      'Tiene necesidades afectivas altas'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'No es que hagas poco, es que su necesidad de atención y servicio es insaciable. Te desgastarás intentando llenar un vaso que tiene un agujero en el fondo.'
  },
  {
    id: '110',
    text: 'En tu familia, sientes que tus padres solo te "ven" y te sonríen cuando sacas buenas notas o logras algo que pueden presumir ante los vecinos.',
    options: [
      'Quieren que tenga éxito en la vida',
      'Son padres exigentes pero me quieren',
      'Me siento un trofeo, no una persona: me quieren por lo que hago, no por lo que soy',
      'Es su forma de motivarme'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'El amor condicional no nutre, amaestra. Aprendes que para ser digno de amor tienes que "rendir" y cumplir expectativas ajenas.'
  },
  {
    id: '111',
    text: 'Delante de ti, es encantador con la camarera o con una amiga tuya, y luego te mira con desdén. Te dice: "¿Ves? Ella sí es simpática, no como tú".',
    options: [
      'Tiene razón, debería ser más amable',
      'Lo hace para hacerme sentir insegura y comparada',
      'Es una persona muy sociable con todo el mundo',
      'Quizá tengo un mal día'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Utiliza la amabilidad con terceros como un arma contra ti. No es que le caigan bien ellos, es que quiere que tú te sientas mal.'
  },
  {
    id: '112',
    text: 'Te provoca una crisis de ansiedad con sus gritos, y luego te abraza y te dice: "Tranquila, nadie más te aguantaría así de loca, solo yo".',
    options: [
      'Es mi salvador, menos mal que me quiere',
      'Crea la enfermedad y luego te vende la medicina envenenada',
      'Soy una carga para cualquiera',
      'Tiene mucha paciencia conmigo'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es el ciclo completo del abuso: te rompe para luego presentarse como el único capaz de arreglarte, asegurándose de que no te vayas.'
  },
  {
    id: '113',
    text: 'Cada vez que pasas tiempo con esa persona, vuelves a casa con dolor de cabeza, agotada y sintiéndote "vacía", aunque no hayáis discutido gravemente.',
    options: [
      'Soy yo, que me canso rápido de socializar',
      'Es una persona muy intensa',
      'Me está drenando la energía: es un vampiro emocional',
      'Quizá necesito vitaminas'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Tu cuerpo es el primero en notar el abuso. La interacción con un narcisista requiere tal nivel de alerta y gestión emocional que te deja exhausta físicamente.'
  },
  {
    id: '114',
    text: 'Le cuentas ilusionada un nuevo proyecto o sueño. Su respuesta es: "Sé realista, eso es muy difícil" o "Con lo inconstante que eres, lo dejarás en dos días".',
    options: [
      'Es la voz de la razón que necesito',
      'Quiere protegerme del fracaso',
      'No soporta que tenga ilusiones propias que no le incluyan',
      'Me conoce bien y sabe mis defectos'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Un compañero sano celebra tus alas. Un narcisista intenta cortarlas porque tu independencia y éxito son una amenaza para su control.'
  },
  {
    id: '115',
    text: 'Te convenció para que dejaras de trabajar porque "él se ocupaba de todo", pero ahora tienes que pedirle dinero para el café y te echa en cara cada gasto.',
    options: [
      'Es normal, la economía está mal',
      'Me siento como una niña pidiendo la paga',
      'Es una trampa: me ha quitado mi independencia financiera para controlarme',
      'Debería gastar menos para no molestarle'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'La dependencia económica es una de las cadenas más fuertes. Al principio parece cuidado ("descansa, yo proveo"), pero acaba siendo una jaula.'
  },
  {
    id: '116',
    text: 'Hay días que es la persona más maravillosa del mundo y días que es un monstruo cruel. Tu cerebro no para de intentar entender cuál es el "real".',
    options: [
      'Todos tenemos días malos',
      'El real es el bueno, el malo sale por estrés',
      'Esa confusión es la trampa: te quedas esperando al bueno mientras soportas al malo',
      'Tengo que tener más paciencia en sus días malos'
    ],
    correctAnswer: 2,
    difficulty: 10,
    explanation: 'Se llama Disonancia Cognitiva. Mantener dos imágenes opuestas de la misma persona te paraliza y te impide tomar la decisión de irte.'
  },
  {
    id: '117',
    text: 'Le pillas en una mentira clara. Cuando se lo dices, la conversación gira y acabas tú pidiendo perdón por "desconfiar" y "ser paranoica".',
    options: [
      'Soy muy insegura y eso daña la relación',
      'Es un genio del debate',
      'Ha invertido los papeles: de culpable a víctima en dos frases',
      'Debería confiar más si no tengo pruebas absolutas'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'Es una táctica clásica (DARVO). Niega la acusación, te ataca a ti, y se convierte en la víctima. El objetivo es que nunca más te atrevas a cuestionarle.'
  },
  {
    id: '118',
    text: 'Tu ex reaparece, te dice que ha cambiado, quedáis... y en la primera cita te hace un comentario cruel sobre tu peso o tu trabajo, y se va.',
    options: [
      'Sigue siendo sincero, aunque duela',
      'No he sabido aprovechar la segunda oportunidad',
      'Solo volvió para ver si aún podía hacerme daño y sentirse poderoso',
      'Es que no le gusto ya'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'A veces vuelven solo para "patear al perro". Necesitan confirmar que todavía tienen el poder de herirte. Una vez lo confirman, se van satisfechos.'
  },
  {
    id: '119',
    text: 'Te dice constantemente: "Nadie te entiende como yo", "Tu familia no nos quiere ver felices", "Tus amigos tienen envidia de nuestro amor".',
    options: [
      'Es verdad, tenemos una conexión única contra el mundo',
      'Me quiere proteger de gente tóxica',
      'Me está aislando para que él sea mi única referencia de realidad',
      'Mi entorno no entiende nuestra pasión'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'El aislamiento se disfraza de "amor especial". Si consigue que desconfíes de todos los demás, nadie podrá avisarte de que estás siendo abusada.'
  },
  {
    id: '120',
    text: 'Llega el viaje que tanto esperabas. Justo antes de salir o al llegar, él monta un drama enorme por una tontería y arruina los primeros días.',
    options: [
      'El estrés de viajar le sienta mal',
      'Siempre tengo mala suerte en vacaciones',
      'Boicotea los momentos felices para que la atención vuelva a él',
      'Debería haber organizado yo mejor el viaje'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Los narcisistas odian los días felices ajenos (cumpleaños, vacaciones). Si no son el centro de atención por algo bueno, crearán un caos para serlo por algo malo.'
  },
  {
    id: '121',
    text: 'Le escuchas hablar con otros y repite exactamente tus opiniones, tus gustos musicales o tus anécdotas como si fueran suyas.',
    options: [
      'Tenemos tanta conexión que pensamos igual',
      'Me admira tanto que me copia',
      'Se está apropiando de mi personalidad para parecer más interesante',
      'Es coincidencia'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Es un "robo de identidad". Carecen de un yo sólido, así que copian rasgos de sus víctimas para construir su máscara social.'
  },
  {
    id: '122',
    text: 'Te propone mudaros a una ciudad nueva o al campo, lejos de tu familia y amigos, para "empezar de cero" y tener "una vida más tranquila".',
    options: [
      'Qué romántico, una aventura los dos solos',
      'Es una oportunidad laboral',
      'Si me aleja de mi red de apoyo, seré mucho más fácil de controlar',
      'Necesitamos desconectar del mundo'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'El aislamiento geográfico es una alerta roja. Sin amigos o familia cerca que vean lo que pasa, el abuso puede escalar sin testigos ni freno.'
  },
  {
    id: '123',
    text: 'Amenaza veladamente: "Si cuentas lo que ha pasado, nadie te creerá. Todo el mundo piensa que eres la inestable y yo el santo".',
    options: [
      'Es verdad, tiene mejor imagen que yo',
      'Me da miedo porque sé que sabe manipular a la gente',
      'Usa su buena imagen pública como escudo para abusar en privado',
      'Es un consejo para que no haga el ridículo'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Saben perfectamente que tienen "dos caras". Usan el miedo al descrédito social para silenciarte y mantenerte sufriendo en secreto.'
  },
  {
    id: '124',
    text: 'La relación es una montaña rusa. Te trata mal (bajón), y justo cuando estás a punto de irte, te trata como una reina (subidón). Y vuelta a empezar.',
    options: [
      'El amor es así, hay que luchar por los buenos momentos',
      'Es muy pasional e inestable',
      'Es un ciclo adictivo de refuerzo intermitente, igual que una tragaperras',
      'Cuando estamos bien, estamos muy bien'
    ],
    correctAnswer: 2,
    difficulty: 10,
    explanation: 'Nuestro cerebro se engancha químicamente a la incertidumbre de "¿me querrá hoy?". Las "migajas" de amor saben a gloria cuando estás hambrienta por el maltrato.'
  },
  {
    id: '125',
    text: 'Tus amigos te dicen "no nos gusta cómo te trata", y tú te descubres defendiéndole: "Es que ha tenido un mal día", "En el fondo es bueno".',
    options: [
      'Ellos no le conocen como yo',
      'Soy leal a mi pareja',
      'Estoy justificando lo injustificable para no aceptar la dolorosa realidad',
      'La gente juzga muy rápido'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'Si tienes que actuar como el abogado defensor de tu pareja ante la gente que te quiere, es porque en el fondo sabes que el "fiscal" tiene razón.'
  },
  {
    id: '126',
    text: 'Te dice a menudo: "Eres una persona muy difícil", "Nadie más tendría la paciencia que tengo yo contigo".',
    options: [
      'Tengo suerte de que me quiera así',
      'Es verdad, tengo un carácter complicado',
      'Me está convenciendo de que soy defectuosa para que no crea que merezco algo mejor',
      'Es sincero y me ayuda a mejorar'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Si te convence de que tú eres el problema y él el santo que te soporta, te quedarás agradecida recibiendo migajas en lugar de pedir respeto.'
  },
  {
    id: '127',
    text: 'La relación terminó, pero sigues obsesionada analizando por qué hizo lo que hizo. Buscas un cierre, una explicación lógica que nunca llega.',
    options: [
      'Necesito que nos sentemos a hablar para cerrar capítulo',
      'Si entiendo el porqué, dejará de doler',
      'La única explicación es que no le importaba mi dolor. Aceptar eso es el cierre',
      'Seguro que él también está sufriendo'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'No busques lógica humana donde no hay empatía. El cierre no te lo da él (que te mentiría), te lo das tú aceptando la cruda realidad.'
  },
  {
    id: '128',
    text: 'Llegas a casa enferma con 39 de fiebre. Él te dice: "Pues yo tengo un dolor de espalda horrible, siempre tienes que ser el centro de atención".',
    options: [
      'Pobre, a él también le duele',
      'Qué mala suerte que estemos los dos mal',
      'Compite conmigo a ver quién es más víctima, incluso cuando estoy enferma',
      'Debería no quejarme tanto'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Es la incapacidad de ceder el foco. Si tú estás mal, él tiene que estar "más" mal para recuperar su rol de protagonista y no tener que cuidarte.'
  },
  {
    id: '129',
    text: 'Decides apuntarte a un curso de pintura o salir a correr sola. Él te dice: "Qué egoísta eres, prefieres eso a estar con tu familia".',
    options: [
      'Tiene razón, debería dedicarles más tiempo',
      'Me siento culpable por querer tiempo para mí',
      'Manipula con la culpa para que no tenga vida propia fuera de su control',
      'Intentaré hacerlo cuando él no esté'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Tener una identidad propia (hobbies, espacio) es sano. Que te llamen "egoísta" por cuidarte es una señal de que quieren poseerte, no quererte.'
  },
  {
    id: '130',
    text: 'Una amiga común te dice: "Le he visto muy triste, dice que te echa de menos. Deberías llamarle, pobre".',
    options: [
      'Quizá he sido muy dura',
      'Si está triste es que le importo',
      'Está usando a mi amiga como mensajera (Mono Volador) para manipularme',
      'Le llamaré solo para ver cómo está'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Los "Monos Voladores" son personas manipuladas por el narcisista para llegar a ti cuando tú has cerrado la puerta. No te fíes del mensaje, viene de la fuente tóxica.'
  },
  {
    id: '131',
    text: 'Sabes que tienes una relación difícil con tu madre. En una pelea, él te dice: "Eres idéntica a tu madre, vas a acabar sola como ella".',
    options: [
      'Es mi mayor miedo, ¿y si tiene razón?',
      'Solo lo dice porque está enfadado',
      'Usa mis traumas más profundos como arma para hacerme daño donde más duele',
      'Tengo que esforzarme para no ser así'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Alguien que te quiere te ayuda a sanar tus heridas, no mete el dedo en ellas durante una discusión para ganar ventaja.'
  },
  {
    id: '132',
    text: 'Últimamente se te olvidan las llaves, no te concentras en el trabajo y te sientes "tonta". Antes eras una persona muy ágil mentalmente.',
    options: [
      'Será la edad o el cansancio',
      'Estoy perdiendo facultades',
      'Es el efecto del estrés crónico y el abuso emocional en mi cerebro',
      'Necesito dormir más'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Vivir en alerta permanente (caminando sobre cáscaras de huevo) inunda tu cerebro de cortisol, lo que afecta a la memoria y la concentración. No eres tonta, estás traumatizada.'
  },
  {
    id: '133',
    text: 'Le dices que te vas a ir. De repente llora, se tira al suelo, dice que está deprimido o habla de traumas infantiles que nunca mencionó.',
    options: [
      'Me necesita, no puedo dejarle así',
      'Por fin se abre emocionalmente',
      'Es una actuación de "falsa vulnerabilidad" para dar pena y retenerme',
      'Pobre, ha sufrido mucho'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Si la vulnerabilidad solo aparece cuando tú pones un límite o te vas, es manipulación. Apelan a tu empatía para desarmarte.'
  },
  {
    id: '134',
    text: 'Te dice a menudo: "Podría estar con cualquiera, pero te elegí a ti. Tienes suerte".',
    options: [
      'Me siento halagada y especial',
      'Es verdad, es muy atractivo/a',
      'Me hace sentir que le debo algo por estar conmigo',
      'Es una forma extraña de decir te quiero'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'No es un cumplido, es una demostración de estatus. "Yo soy el premio, tú la afortunada ganadora". Busca que te sientas inferior y agradecida.'
  },
  {
    id: '135',
    text: 'Cada vez que te pones a tocar la guitarra o escribir (tu pasión), él enciende la tele a todo volumen, te interrumpe o se burla.',
    options: [
      'No se da cuenta de que me molesta',
      'Es que toco mal todavía',
      'Sabotea activamente lo que me hace feliz porque no tiene que ver con él',
      'Debería buscarme un sitio fuera para practicar'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Tus pasiones son su competencia. Si algo te llena y te da autoestima ajena a la relación, intentará destruirlo o ridiculizarlo.'
  },
  {
    id: '136',
    text: 'Notas que te deja de hablar (ley del hielo) justo antes de fechas importantes o cuando intuyes que vas a pedirle algo.',
    options: [
      'Siempre nos peleamos en malas fechas',
      'Necesita mucho espacio',
      'Es un "silencio preventivo" para que esté tan asustada que no me atreva a pedir nada',
      'Es casualidad'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Te "domestica" con silencios. Aprendes a no molestar, a no pedir y a no quejarte para evitar el castigo de su indiferencia.'
  },
  {
    id: '137',
    text: 'Has aprendido a no reaccionar a sus provocaciones. Le respondes con monosílabos, sin emoción (Piedra Gris). Te sientes...',
    options: [
      'Aburrida y apagada, como si yo no fuera yo',
      'Poderosa y en control',
      'Triste por no poder comunicarme',
      'Tranquila pero muerta por dentro'
    ],
    correctAnswer: 0,
    difficulty: 7,
    explanation: 'La técnica de la Piedra Gris funciona para sobrevivir, pero tiene un coste: apagar tu vitalidad. Es un escudo temporal, no una forma de vida a largo plazo.'
  },
  {
    id: '138',
    text: 'Te diagnostican una enfermedad que requiere reposo. Su reacción es enfadarse, desaparecer o decirte: "Vaya momento eliges para ponerte mala".',
    options: [
      'Está asustado por mi salud y reacciona mal',
      'Tiene mucho estrés y esto le desborda',
      'Mi enfermedad le molesta porque dejo de serle útil y requiero cuidados',
      'Es un hipocondríaco'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Es uno de los momentos más dolorosos de revelación. Cuando dejas de ser un proveedor de servicios/atención y pasas a necesitarlos, para ellos te conviertes en un estorbo.'
  },
  {
    id: '139',
    text: 'Te dice cosas hirientes como "estás gorda", "esa ropa es ridícula" o "hablas tonterías", y añade: "Soy el único que te dice la verdad porque te quiero".',
    options: [
      'Agradezco su sinceridad aunque duela',
      'Prefiero una verdad dolorosa a una mentira',
      'Disfraza la crueldad de honestidad para minar mi autoestima',
      'Quiere que mejore mi imagen'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'La honestidad sin empatía es crueldad. No te dice "la verdad", te dice su opinión destructiva para sentirse superior y bajarte los humos.'
  },
  {
    id: '140',
    text: 'Te dejó por otra persona. A los pocos días sube fotos con ella haciendo todo lo que tú soñabas hacer, con frases de "amor verdadero".',
    options: [
      'Nunca me quiso a mí, ella es la definitiva',
      'Han conectado muy rápido',
      'Es un montaje para hacerme daño a mí y enganchar a la nueva (triangulación)',
      'Me alegro por ellos aunque duela'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'No es amor real, es teatro. Utiliza a la nueva víctima como un objeto para herirte a ti. La nueva persona está siendo bombardeada de amor (love bombing) y pronto sufrirá lo mismo.'
  },
  {
    id: '141',
    text: 'No te habla, pero mira todas tus historias de Instagram al minuto de subirlas, o da "me gusta" a cosas antiguas. No escribe, solo "está".',
    options: [
      'Me echa de menos en silencio',
      'Es tímido para hablarme',
      'Quiere recordarme que sigue vigilando sin comprometerse a nada (Hoovering silencioso)',
      'Se le va el dedo'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Es como un fantasma digital. Busca ocupar espacio en tu mente, generarte dudas ("¿le escribo yo?") y mantenerte enganchada sin hacer ningún esfuerzo real.'
  },
  {
    id: '142',
    text: 'Piensas: "En el fondo es un niño herido, si le doy suficiente amor y comprensión, sanará y todo irá bien".',
    options: [
      'El amor todo lo cura',
      'Tengo síndrome de salvadora y estoy justificando el abuso',
      'Es mi misión ayudarle',
      'Nadie le ha querido bien hasta ahora'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'No eres su terapeuta ni su madre, eres su pareja. Querer "salvar" a alguien que te hace daño es una trampa del ego que te mantiene atada al sufrimiento.'
  },
  {
    id: '143',
    text: 'Le ayudas a conseguir un trabajo, le prestas dinero o le resuelves un problema grave. En lugar de gracias, te trata peor que nunca.',
    options: [
      'Es muy orgulloso y le cuesta agradecer',
      'Está estresado por el cambio',
      'Mi ayuda le hace sentir inferior (herida narcisista) y me castiga por ello',
      'No valora nada'
    ],
    correctAnswer: 2,
    difficulty: 10,
    explanation: 'Es contraintuitivo: tu generosidad le ofende. Al ayudarle, demuestras que tú tienes recursos que él no, y eso activa su envidia y rabia.'
  },
  {
    id: '144',
    text: 'Te das cuenta de que has cambiado tu forma de vestir, tus opiniones políticas y hasta tu risa para que a él le gusten o no se enfade.',
    options: [
      'He madurado gracias a él',
      'Nos hemos mimetizado como pareja',
      'He borrado mi identidad para sobrevivir a sus críticas',
      'Son cambios naturales'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Te has convertido en un camaleón para evitar conflictos. Has sacrificado tu "yo" para que quepa su "ego". Eso no es amor, es colonización.'
  },
  {
    id: '145',
    text: 'Le dices: "Me dolió que me llamaras estúpida". Él responde riendo: "Ay, qué exagerada eres, era una broma, cómo te gusta el drama".',
    options: [
      'Quizá sí soy demasiado sensible',
      'Debería tener más sentido del humor',
      'Está invalidando mis sentimientos para no asumir su agresión',
      'Es que tenemos humores distintos'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'La frase "eres una exagerada" es el mantra del maltratador psicológico. Si te duele, te duele. Negar tu dolor es una segunda agresión.'
  },
  {
    id: '146',
    text: 'Tenías una amiga íntima que era el centro de tu vida. De repente, encuentra un grupo "más guay" y deja de hablarte de un día para otro sin explicación.',
    options: [
      'He hecho algo mal y no sé qué es',
      'La gente cambia de intereses',
      'Me ha descartado porque ya no le sirvo de accesorio/público',
      'Seguro que está muy ocupada'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'El narcisismo no es solo romántico. Las amigas narcisistas te usan mientras les aportas estatus o atención. Cuando ya no eres útil, te tiran como un pañuelo.'
  },
  {
    id: '147',
    text: 'Las discusiones nunca terminan hasta que tú cedes, lloras o le das la razón. Él/ella puede seguir horas o días argumentando sin cansarse.',
    options: [
      'Es muy tenaz y tiene principios fuertes',
      'Quiere que nos entendamos de verdad',
      'No busca una solución, busca la sumisión. Ganar es someterte',
      'Yo me rindo muy fácil'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Para ellos, una discusión es una batalla de dominación. No pararán hasta verte derrotada, porque su objetivo no es el acuerdo, es la victoria.'
  },
  {
    id: '148',
    text: 'Después de una pelea horrible donde te insultó, aparece con un regalo caro, te invita a cenar y es la persona más dulce del mundo. No pide perdón, solo es "dulce".',
    options: [
      'Quiere arreglarlo con hechos, no palabras',
      'Es su forma de pedir perdón',
      'Es un soborno emocional para que olvide el abuso sin que él asuma culpa',
      'Me quedo con lo bueno'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'El "borrón y cuenta nueva" sin hablar del problema es una trampa. Compran tu silencio con gestos grandilocuentes para que el ciclo de abuso continúe.'
  },
  {
    id: '149',
    text: 'Te dice: "Con ese carácter que tienes, suerte tienes de que yo te aguante. Cualquier otro ya te habría dejado".',
    options: [
      'Tengo que mejorar mi carácter',
      'Es verdad, soy difícil de llevar',
      'Me quiere hacer creer que soy inquerible para que no me vaya',
      'Es una crítica constructiva dura'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Busca destruir tu autoestima de mercado. Si crees que "nadie más te querrá", aguantarás cualquier trato por miedo a quedarte sola.'
  },
  {
    id: '150',
    text: 'Después de mucho tiempo y trabajo personal, te cruzas con él/ella o ves una foto suya. Ya no sientes odio, ni miedo, ni amor. Solo... nada.',
    options: [
      'Me he vuelto una persona fría',
      'Estoy reprimiendo mis emociones',
      'He sanado. La indiferencia es el verdadero final del abuso',
      'Quizá debería saludarle'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'La indiferencia es la victoria. Significa que ha dejado de ser el protagonista de tu película (para bien o para mal) y se ha convertido en un extra irrelevante.'
  },
  // 151-200: Casos Específicos, Salud Mental y Recuperación Avanzada
  {
    id: '151',
    text: 'Le pides ir a terapia de pareja. Él acepta, pero durante las sesiones es encantador y consigue que el terapeuta crea que tú eres la histérica y él el santo.',
    options: [
      'El terapeuta tiene razón, soy yo el problema',
      'Ha conseguido manipular al terapeuta para tener un aliado más contra mí',
      'Quizá no me explico bien en consulta',
      'Es que él tiene mucho carisma'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es muy común. Los narcisistas son expertos en dar buena impresión. Si el terapeuta no es experto en abuso, acabará siendo triangulado y usado contra ti.'
  },
  {
    id: '152',
    text: 'Ves su nombre en el móvil o escuchas que alguien abre la puerta de casa, y tu cuerpo reacciona con taquicardia y dolor de estómago.',
    options: [
      'Es emoción por verle',
      'Tengo problemas digestivos',
      'Mi cuerpo recuerda que esa persona es peligro y se pone en alerta',
      'Estoy nerviosa por el trabajo'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'El cuerpo no miente. Si reaccionas como si vieras a un león, es porque tu sistema nervioso ha detectado a un depredador, aunque tu mente lo niegue.'
  },
  {
    id: '153',
    text: 'Intentas hablar de algo doloroso que te hizo hace meses. Él te corta: "Otra vez con el pasado. No sabes perdonar, eres rencorosa".',
    options: [
      'Tiene razón, hay que mirar hacia delante',
      'Soy una persona muy negativa',
      'Me está silenciando para no asumir responsabilidad por heridas que nunca sanó',
      'El pasado pasado está'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'No es rencor, es memoria. Si la herida sigue abierta es porque nunca hubo reparación ni arrepentimiento real, solo ganas de que te calles.'
  },
  {
    id: '154',
    text: 'Te dice: "Mi ex estaba obsesionada conmigo, me acosaba". Tiempo después descubres que era él quien no la dejaba en paz.',
    options: [
      'Es que hay dos versiones de cada historia',
      'Se confundió al contarlo',
      'Estaba proyectando su propia conducta en ella para hacerse la víctima',
      'Seguro que los dos tenían culpa'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'La proyección es su mecanismo favorito. Acusan a los demás exactamente de lo que ellos hacen, para confundirte y limpiar su imagen.'
  },
  {
    id: '155',
    text: 'Es voluntario en ONGs, ayuda a los vecinos y todo el mundo dice "qué suerte tienes". En casa, te trata con desprecio y frialdad.',
    options: [
      'Está cansado de ayudar a tanta gente',
      'Nadie me creerá si cuento cómo es en realidad',
      'Usa la caridad como fachada para alimentar su ego (Narcisismo Comunal)',
      'Yo debería ser más agradecida'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Son los "ángeles de la calle y demonios de la casa". Buscan el aplauso público, no la bondad real. Tu sufrimiento en privado no les da "likes", así que no les importa.'
  },
  {
    id: '156',
    text: 'Estás en el súper eligiendo yogures y te paralizas. No sabes cuál coger porque temes que, elijas el que elijas, él te criticará.',
    options: [
      'Soy una persona muy indecisa',
      'Quiero acertar para que le guste',
      'El abuso ha anulado mi capacidad de tomar hasta las decisiones más pequeñas',
      'Mejor le llamo y le pregunto'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Cuando vives bajo una crítica constante, tu cerebro aprende que "decidir es peligroso". Te paralizas para evitar el castigo.'
  },
  {
    id: '157',
    text: 'Tienes ansiedad, insomnio, dudas de tu cordura y sientes que no vales nada. Antes de esta relación eras alegre y segura.',
    options: [
      'La edad me ha cambiado',
      'He tenido mala suerte en la vida',
      'Tengo síntomas de estrés postraumático por abuso psicológico',
      'Estoy deprimida sin razón'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'No has "cambiado", te han desgastado. Esos síntomas son las heridas de guerra de una batalla invisible que libras a diario en tu propia casa.'
  },
  {
    id: '158',
    text: 'Te has roto una pierna. Él te ayuda los dos primeros días (y se lo cuenta a todo el mundo), pero al tercero se enfada porque "le das mucho trabajo".',
    options: [
      'Es normal, está cansado',
      'Al menos me ayudó al principio',
      'Mi dolor le molesta porque le quita libertad. Su empatía tiene fecha de caducidad muy corta',
      'Soy una carga'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Pueden fingir cuidados un rato para quedar bien, pero no soportan la carga real de cuidar a otro porque no obtienen beneficio inmediato.'
  },
  {
    id: '159',
    text: 'Vuelves con él porque prometió cambiar. A la semana, te hace lo mismo de siempre, pero con una sonrisa cínica, sabiendo que le has perdonado.',
    options: [
      'Le cuesta cambiar, hay que darle tiempo',
      'Ha recaído sin querer',
      'Sabe que mi perdón es un cheque en blanco y me ha perdido el respeto',
      'Es culpa mía por volver'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Volver sin cambios reales solo le enseña una cosa: que puede abusar de ti y tú seguirás ahí. El respeto se pierde y el abuso escala.'
  },
  {
    id: '160',
    text: 'Usa la religión o la "espiritualidad" para decirte que debes perdonar, aguantar y someterte porque "es tu karma" o "Dios lo quiere así".',
    options: [
      'Es una persona muy devota',
      'Tiene razón, el odio es malo',
      'Está usando creencias sagradas para manipularme y que acepte el maltrato',
      'Es mi lección de vida'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'El abuso espiritual es devastador. Te hace creer que defenderte es un pecado o un fallo espiritual, dejándote indefensa ante el ataque.'
  },
  {
    id: '161',
    text: 'Estás llorando desesperada. Él te mira con cara de asco y dice: "Mírate, estás loca, das pena. Nadie te va a querer así".',
    options: [
      'Es verdad, estoy hecha un desastre',
      'Quiere ayudarme a que me calme',
      'Disfruta viéndome rota y usa mi dolor para humillarme más',
      'Se asusta al verme llorar'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'La falta de empatía es total. En lugar de consuelo, recibes desprecio. Tu dolor no le conmueve, le reafirma en su superioridad ("yo estoy bien, ella está loca").'
  },
  {
    id: '162',
    text: 'Siempre llega tarde, te hace esperar horas para responder, o cambia planes en el último minuto sin disculparse.',
    options: [
      'Es muy despistado y bohemio',
      'Tiene una agenda muy complicada',
      'Mi tiempo no vale nada para él. Hacerme esperar es una forma de demostrar poder',
      'Debería ser más flexible'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'El mensaje es: "Yo soy importante, tú eres un accesorio que espera en la estantería hasta que yo decida usarte".'
  },
  {
    id: '163',
    text: 'En el trabajo, tu jefe te alaba en público ("eres mi estrella"), pero luego te carga de trabajo imposible y te amenaza sutilmente si te quejas.',
    options: [
      'Es exigente porque confía en mí',
      'Quiere que crezca profesionalmente',
      'Me está explotando usando la adulación como cebo',
      'Es el precio del éxito'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'El ciclo idealización-devaluación también ocurre en el trabajo. Te suben al cielo para que trabajes el triple, y te amenazan con el infierno si pides derechos.'
  },
  {
    id: '164',
    text: 'Mientes a tus amigos diciendo que "todo va bien" porque te da vergüenza admitir que has vuelto con él por quinta vez.',
    options: [
      'Es mi vida privada',
      'No quiero que le juzguen mal',
      'El aislamiento es total: ya no puedo ser sincera ni con mi gente',
      'Ellos no lo entenderían'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'La vergüenza es el aliado del abusador. Al ocultar la realidad, te quedas sola con el problema, que es justo lo que él quiere.'
  },
  {
    id: '165',
    text: 'Le preguntas algo simple y él finge que no te oye. Le insistes y sigue mirando el móvil como si fueras invisible. Llevas así tres días.',
    options: [
      'Estará muy concentrado',
      'He hecho algo que le molestó',
      'Me está castigando negándome la existencia (Tratamiento de Silencio)',
      'Es mejor no molestarle'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Ser ignorado duele en la misma zona del cerebro que un golpe físico. Es una forma cruel de decirte: "No existes para mí hasta que yo lo diga".'
  },
  {
    id: '166',
    text: 'Te vas un fin de semana con amigas. Él te bombardea a mensajes, se "pone enfermo" o te acusa de abandonarle para que no disfrutes.',
    options: [
      'Me echa mucho de menos',
      'Tiene mala suerte con la salud',
      'No soporta que yo sea feliz lejos de su control. Es un boicot',
      'Debería haberme quedado'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Tu felicidad autónoma es una ofensa. Si te lo pasas bien sin él, significa que no le necesitas, y eso le aterra y enfurece.'
  },
  {
    id: '167',
    text: 'Te acusa constantemente de ser infiel, de mentir o de ser egoísta. Tú sabes que eres fiel, honesta y generosa.',
    options: [
      'Quizá doy motivos sin querer',
      'Es muy celoso porque me quiere',
      'Se está describiendo a sí mismo y proyectándolo en mí',
      'Tengo que demostrarle más mi amor'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'La confesión de un narcisista es su acusación. Si te acusa de algo loco sin pruebas, investiga, porque probablemente es lo que él está haciendo.'
  },
  {
    id: '168',
    text: 'Sales con un chico majo, tranquilo y respetuoso... y te aburres. Sientes que "falta chispa" y echas de menos la intensidad de tu ex tóxico.',
    options: [
      'No es el hombre de mi vida',
      'Me gustan los malotes',
      'Soy adicta al cortisol y la adrenalina. La paz me parece aburrida, pero es lo que necesito',
      'El amor tiene que doler un poco'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Tu cerebro está descalibrado. Has confundido ansiedad con mariposas. Sanar implica aprender a disfrutar de la calma sin sentir que "falta algo".'
  },
  {
    id: '169',
    text: 'Te dice: "Yo te pagué la carrera", "Yo te saqué de tu casa". Usa favores del pasado para exigirte obediencia en el presente.',
    options: [
      'Es verdad, le debo mucho',
      'Tengo que ser agradecida',
      'La ayuda no era un regalo, era una compra. Me está cobrando el alquiler de mi vida',
      'Es justo que me lo recuerde'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'El amor no lleva contabilidad. Si te echan en cara lo que hicieron por ti para que te calles, no fue amor, fue una inversión para comprarte.'
  },
  {
    id: '170',
    text: 'Nunca llora ni se emociona, pero el día que le dices "me voy", se le llenan los ojos de lágrimas y te cuenta un trauma terrible.',
    options: [
      'Por fin ha roto su coraza',
      'Me da pena dejarle ahora',
      'Sabe qué botón apretar para activarme la pena y que me quede',
      'Necesita mi ayuda'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Es manipulación táctica. Si su dolor solo aparece cuando va a perderte, no es dolor, es estrategia de retención.'
  },
  {
    id: '171',
    text: 'Cuando tú no puedes inflarle el ego (estás enferma, ocupada o triste), busca inmediatamente atención en otra persona (madre, amiga, ex).',
    options: [
      'Es muy sociable',
      'Busca apoyo en otros',
      'Necesita suministro constante. Si una fuente se seca, va a la siguiente sin miramientos',
      'Hace bien en no depender solo de mí'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Para el narcisista, las personas son intercambiables. Solo le importa quién le da su dosis de admiración en ese momento.'
  },
  {
    id: '172',
    text: 'Has empezado a grabar las discusiones con el móvil a escondidas porque luego él niega haberte insultado y tú ya no te fías de tu memoria.',
    options: [
      'Me estoy volviendo una espía paranoica',
      'Es para mejorar mi comunicación',
      'Es la única forma de validar mi realidad ante tanto Gaslighting',
      'Estoy traicionando su confianza'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Cuando llegas al punto de necesitar pruebas forenses para saber si estás loca o no, la relación ya te ha roto. Es un síntoma de defensa extrema.'
  },
  {
    id: '173',
    text: 'En una discusión, le pega un puñetazo a la pared, a dos centímetros de tu cara. Luego dice: "Menos mal que me controlo, porque me pones..."',
    options: [
      'Tiene mucho temperamento',
      'Se ha desahogado con la pared',
      'Es violencia física. Me está enseñando lo que podría hacerme a mí para que tenga miedo',
      'Es mi culpa por provocarle'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Golpear objetos cerca de ti es violencia. Es una amenaza directa: "Soy peligroso y la próxima vez no fallaré". Huye.'
  },
  {
    id: '174',
    text: 'Consigue que tus propios padres o hijos se pongan de su lado, diciéndoles mentiras sobre ti. Te sientes sola en tu propia familia.',
    options: [
      'Soy la oveja negra',
      'Quizá ellos ven algo que yo no veo',
      'Me ha triangulado con mi red de apoyo para dejarme indefensa',
      'Tengo que esforzarme para que me quieran'
    ],
    correctAnswer: 2,
    difficulty: 10,
    explanation: 'Es una de las maniobras más crueles. Robarte tu refugio y poner a tu gente en tu contra te deja sin suelo bajo los pies.'
  },
  {
    id: '175',
    text: 'Le dices: "Deja de gritarme". Él responde: "¡Eres una controladora! ¡Siempre me dices qué hacer! ¡La narcisista eres tú!"',
    options: [
      'Quizá soy muy mandona',
      'Igual sí soy narcisista',
      'Me ataca por poner un límite y me acusa de lo que él es para confundirme',
      'Debería pedirlo por favor'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Poner límites no es controlar, es protegerse. Pero el narcisista te venderá tu autoprotección como una agresión hacia él.'
  },
  {
    id: '176',
    text: 'Te manda un mensaje en Navidad: "Te echo de menos, estos días son duros sin ti". Llevaba 6 meses ignorándote.',
    options: [
      'El espíritu navideño le ha ablandado',
      'Todavía me quiere',
      'Sabe que estoy sensible por las fechas y aprovecha para tantear si sigo disponible',
      'Debería felicitarle yo también'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'Es "Hoovering de calendario". Usan fechas emocionales para colarse de nuevo en tu vida con el mínimo esfuerzo.'
  },
  {
    id: '177',
    text: 'Ya no le odias. Cuando te acuerdas de él, sientes una mezcla de pena lejana y pereza. Ya no te duele el estómago.',
    options: [
      'He perdido la capacidad de amar',
      'Estoy en negación',
      'Es la indiferencia benigna. Por fin soy libre',
      'Debería sentir algo más fuerte'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Felicidades. Has cruzado el desierto. Cuando alguien te es indiferente, ha perdido todo su poder sobre ti.'
  },
  {
    id: '178',
    text: 'No quieres tener sexo hoy. Él se enfada, te deja de hablar o te dice: "Pues buscaré fuera lo que no me das en casa". Cedes por miedo.',
    options: [
      'Es mi deber de pareja',
      'Los hombres tienen necesidades',
      'Es coacción sexual. Tener sexo para evitar un castigo no es consentimiento, es sometimiento',
      'Mejor hacerlo rápido y ya está'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'El sexo bajo amenaza (de abandono, de enfado, de cuernos) es una forma de violencia. Tu cuerpo es tuyo, no un servicio que debes prestar para que no se enfade.'
  },
  {
    id: '179',
    text: 'La gente te dice que eres inteligente y valiosa, pero tú sientes que eres un fraude y que si te conocieran de verdad verían lo "mala" que eres.',
    options: [
      'Tengo baja autoestima de siempre',
      'Soy muy humilde',
      'He interiorizado la voz crítica de mi maltratador. Me veo como él me veía',
      'Es verdad, engaño a todos'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Has tragado su veneno. Su opinión sobre ti ha suplantado a la tuya propia. Recuperarte es volver a verte con tus propios ojos.'
  },
  {
    id: '180',
    text: 'Te compras un vestido y te ves guapa. Inmediatamente piensas: "¿Qué pensará él?". No sabes si te gusta hasta que imaginas su reacción.',
    options: [
      'Estoy muy enamorada',
      'Valoro su gusto estético',
      'Sigo buscando su validación externa porque no sé validarme a mí misma',
      'Es para estar guapa para él'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Romper el espejo del narcisista cuesta. Aprender a decir "me gusto yo" sin necesitar su "like" mental es un paso gigante.'
  },
  {
    id: '181',
    text: 'Quieres gritarle al mundo quién es él realmente, publicar las pruebas, desenmascararle en Facebook.',
    options: [
      'Es justicia, debo hacerlo',
      'Así avisaré a otras víctimas',
      'Es una trampa. Se hará la víctima y yo pareceré la loca obsesionada. Mejor me centro en mi paz',
      'Se lo merece'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'La venganza te mantiene atada a él. Además, ellos juegan sucio mejor que tú. La mejor venganza es que te vea feliz y que a ti te de igual.'
  },
  {
    id: '182',
    text: 'Le has bloqueado en WhatsApp, pero entras 20 veces al día a ver si ha cambiado la foto o si está en línea desde otro perfil.',
    options: [
      'Es curiosidad inofensiva',
      'Necesito saber que está bien',
      'Estoy rompiendo el Contacto Cero mental. Sigo enganchada a su vida en lugar de vivir la mía',
      'Es para estar prevenida'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'El contacto cero no es solo físico, es mental. Espiarle es hacerte daño a ti misma con un cuchillo digital. Suelta el cuchillo.'
  },
  {
    id: '183',
    text: 'Al principio sentías que le conocías de toda la vida, que erais almas gemelas. Ahora te das cuenta de que no sabes quién es en realidad.',
    options: [
      'La gente cambia',
      'Nos hemos distanciado',
      'Me enamoré de un espejo. Reflejaba lo que yo quería ver, pero detrás no había nadie',
      'El amor se acaba'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Es duro aceptarlo: te enamoraste de una ilusión a medida. La persona que creías amar era un personaje interpretado para conquistarte.'
  },
  {
    id: '184',
    text: 'No te deja, pero te hace la vida imposible. Te trata con indiferencia y asco hasta que tú, desesperada, rompes con él.',
    options: [
      'Fui yo quien tomó la decisión',
      'Ya no nos entendíamos',
      'Me empujó a dejarle para no ser "el malo" que abandona. Es un descarte encubierto',
      'Es lo mejor para los dos'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Es cobardía pura. Te torturan hasta que te vas, para luego poder decir a todos: "Ella me dejó, pobre de mí".'
  },
  {
    id: '185',
    text: 'Le recuerdas algo cruel que te dijo ayer. Te mira a los ojos y dice muy serio: "Yo nunca dije eso, te lo estás inventando".',
    options: [
      'Quizá lo soñé',
      'Tengo muy mala memoria',
      'Me está haciendo Luz de Gas (Gaslighting) descaradamente para que dude de mi realidad',
      'Fue un malentendido'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Negar la realidad evidente es una forma de volverte loca. Si no confías en tu percepción, dependes totalmente de la suya.'
  },
  {
    id: '186',
    text: 'Discutes con él y acabas gritando, llorando y diciendo cosas que no sientes. Te sientes irreconocible, tú no eres así.',
    options: [
      'He sacado mi verdadero yo malvado',
      'Soy una histérica',
      'Me ha llevado a un nivel de estrés tan alto que mi cerebro ha colapsado. Es supervivencia, no maldad',
      'Necesito medicación'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Te han arrastrado al barro y ahora te culpan por estar manchada. Esa "locura" temporal es tu psique intentando defenderse de un ataque constante.'
  },
  {
    id: '187',
    text: 'Hay veces que le ves sonreír sutilmente cuando estás llorando o pasándolo mal. Una microexpresión de placer.',
    options: [
      'Son imaginaciones mías',
      'Es una sonrisa nerviosa',
      'Disfruta de mi dolor (sadismo narcisista). Se siente poderoso al ver cuánto me afecta',
      'Intenta animarme'
    ],
    correctAnswer: 2,
    difficulty: 10,
    explanation: 'Es el rasgo más oscuro. Tu sufrimiento es su combustible. Ver que tiene el poder de destruirte le hace sentirse un dios.'
  },
  {
    id: '188',
    text: 'Sientes que para él eres como una tostadora: útil mientras funcionas. Si te estropeas (enfermas, te quejas), te quiere tirar a la basura.',
    options: [
      'Es muy pragmático',
      'No le gustan los problemas',
      'Me ha cosificado. No soy una persona para él, soy un objeto con una función',
      'Tengo que ser más útil'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'La deshumanización es clave. No se puede amar a una tostadora, solo se la usa. Y cuando no tuesta, se cambia por otra nueva.'
  },
  {
    id: '189',
    text: 'Sabes que te hace daño, pero no puedes dejarle. Es como si fueras adicta a él, necesitas su aprobación como si fuera droga.',
    options: [
      'Es amor verdadero, del que duele',
      'Soy masoquista',
      'Es una adicción bioquímica provocada por el refuerzo intermitente. Mi cerebro está enganchado',
      'No tengo fuerza de voluntad'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'No es amor, es química. El ciclo de estrés-alivio genera un vínculo traumático (Trauma Bond) más difícil de romper que la heroína.'
  },
  {
    id: '190',
    text: 'Al principio te dijo: "Yo nunca te abandonaré como hizo tu padre". Ahora amenaza con irse cada vez que discutís.',
    options: [
      'Se le escapa por enfado',
      'Ya no me quiere igual',
      'Usó mi trauma de abandono para engancharme y ahora lo usa para torturarme',
      'Tengo que portarme bien para que no se vaya'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Recopilan información sobre tus miedos no para cuidarte, sino para tener munición. Saben exactamente dónde disparar para matarte de miedo.'
  },
  {
    id: '191',
    text: 'Él no está en casa, pero se te cae un vaso y te rompes a llorar pensando en lo torpe que eres y la bronca que te mereces.',
    options: [
      'Soy muy torpe de verdad',
      'Echo de menos su disciplina',
      'Me hago Gaslighting a mí misma. Su voz crítica ya vive en mi cabeza sin que él esté',
      'Tengo que tener más cuidado'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'El abuso ha sido internalizado. Te has convertido en tu propio carcelero. El primer paso para sanar es echar a ese crítico interno.'
  },
  {
    id: '192',
    text: 'Te dice: "Mi amiga Marta nunca se pone celosa por estas cosas, es súper relajada". Te sientes una loca controladora.',
    options: [
      'Debería ser más como Marta',
      'Tengo que trabajar mis celos',
      'Me está comparando (Triangulación) para que me sienta insegura y compita por su aprobación',
      'Marta es mejor que yo'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Marta es un fantasma. La usa como estándar inalcanzable para que sientas que nunca eres suficiente y te esfuerces más.'
  },
  {
    id: '193',
    text: 'Le dejaste. Aparece en tu puerta con mariachis, llorando, prometiendo boda e hijos. Todo lo que siempre quisiste, de golpe.',
    options: [
      'Se ha dado cuenta de que soy la mujer de su vida',
      'El amor ha triunfado',
      'Es Love Bombing desesperado para recuperarte. Si vuelves, el abuso volverá peor en dos semanas',
      'Me lo merezco'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Cuando pierden el control, tiran la casa por la ventana. No es amor, es pánico a perder su propiedad. Es un espejismo temporal.'
  },
  {
    id: '194',
    text: 'Sabe exactamente qué decir para hacerte sentir especial, y exactamente qué decir para destruirte. Tiene un radar para tus emociones.',
    options: [
      'Es muy empático',
      'Me conoce mejor que nadie',
      'Tiene empatía cognitiva (fría): te lee para manipularte, no para conectar contigo',
      'Es mi alma gemela'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Es como un hacker que conoce tus contraseñas. Usa esa información para robarte, no para protegerte.'
  },
  {
    id: '195',
    text: 'Después de estar con él, sientes que te han "chupado el alma". Él, en cambio, se va silbando y lleno de energía.',
    options: [
      'Yo soy aburrida y él vital',
      'Me canso fácil',
      'Me ha vampirizado. Se ha alimentado de mi reacción emocional y me ha dejado seca',
      'Es que tiene mucha personalidad'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'Es una transferencia de energía. Él te provoca, tú explotas (le das energía), y él se siente poderoso mientras tú te quedas vacía.'
  },
  {
    id: '196',
    text: 'Cuando te grita, a veces sientes que "flotas" fuera de tu cuerpo o que lo ves todo como una película, sin sentir nada.',
    options: [
      'Me estoy volviendo loca',
      'Tengo superpoderes',
      'Me estoy disociando. Mi cerebro desconecta para no sentir un dolor insoportable',
      'Me da igual lo que diga'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'Es la señal de alarma definitiva. Tu mente huye porque la realidad es demasiado agresiva para soportarla. Necesitas salir de ahí ya.'
  },
  {
    id: '197',
    text: 'Él te controla el móvil, pero te acusa a ti de controladora si le preguntas dónde estaba.',
    options: [
      'Tengo que respetar su privacidad',
      'Es que yo soy muy pesada',
      'Me acusa de lo que él hace (Inversión) para que yo esté a la defensiva y no mire lo suyo',
      'Los dos somos celosos'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Acusa al espejo de tener manchas. Mientras tú te defiendes de ser "controladora", él sigue controlándote sin que te fijes.'
  },
  {
    id: '198',
    text: 'La relación siempre sigue el mismo orden: Luna de miel -> Tensión -> Explosión/Abuso -> Luna de miel... Y cada vez va más rápido.',
    options: [
      'Es nuestra rutina pasional',
      'Todas las parejas discuten',
      'Es el Ciclo del Abuso. Nunca cambiará, solo se hará más corto y violento',
      'Mejorará con el tiempo'
    ],
    correctAnswer: 2,
    difficulty: 10,
    explanation: 'No es una mala racha, es un círculo vicioso. La "luna de miel" no es el estado real de la relación, es solo el cebo para que no escapes.'
  },
  {
    id: '199',
    text: 'Un día te das cuenta de que no le necesitas. Que estás mejor sola que mal acompañada. Que eres capaz de ser feliz sin él.',
    options: [
      'Soy una egoísta',
      'Le he olvidado muy rápido',
      'He recuperado mi poder. Soy libre',
      'Me engaño a mí misma'
    ],
    correctAnswer: 2,
    difficulty: 10,
    explanation: 'Ese momento de lucidez vale oro. Agárrate a él. Tu vida te estaba esperando al otro lado del miedo.'
  },
  {
    id: '200',
    text: 'Has terminado este test. Si muchas respuestas te han dolido o te han hecho llorar, ¿qué significa?',
    options: [
      'Que soy muy sensible',
      'Que tengo mala suerte',
      'Que mi cuerpo y mi alma reconocen la verdad que mi mente negaba. Merezco amor real, no esto',
      'Que el test es muy duro'
    ],
    correctAnswer: 2,
    difficulty: 1,
    explanation: 'Tu dolor es la prueba. No estás loca, estás herida. Y las heridas, con tiempo, distancia y amor propio, se curan. Empieza hoy.'
  },
];
