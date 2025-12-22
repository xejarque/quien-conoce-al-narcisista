import { Question } from '../types';

export const questions: Question[] = [
  // 1-50: Fase de Idealización y Love Bombing (Escenarios Reales)
  {
    id: '1',
    text: 'Llevas solo dos semanas saliendo con alguien y ya te dice que eres "el amor de su vida", que nunca había conectado así con nadie y te propone vivir juntos pronto. ¿Qué indica esta conducta?',
    options: [
      'Romance intenso a primera vista',
      'Love bombing para crear dependencia rápida',
      'Persona muy intensa y apasionada',
      'Quiere ir demasiado deprisa'
    ],
    correctAnswer: 1,
    difficulty: 1,
    explanation: 'El "Love Bombing" o bombardeo de amor busca anular tus defensas lógicas mediante una intensidad abrumadora al principio. No es amor real, es una táctica para engancharte antes de mostrar su verdadera cara.'
  },
  {
    id: '2',
    text: 'Tu nueva pareja te envía mensajes constantemente, te llama a todas horas y quiere saber dónde estás y con quién en todo momento, diciendo que es porque "se preocupa por ti". ¿Cómo interpretas esto?',
    options: [
      'Atención y cuidado constantes',
      'Miedo a perderme porque me quiere',
      'Control e aislamiento disfrazados de preocupación',
      'Normal al inicio de una relación'
    ],
    correctAnswer: 2,
    difficulty: 1,
    explanation: 'El control excesivo disfrazado de "preocupación" o "amor" es una bandera roja (Red Flag). Busca monitorear tus movimientos y reducir tu independencia poco a poco.'
  },
  {
    id: '3',
    text: 'En una discusión, tu pareja niega haber dicho algo que tú recuerdas claramente que dijo, y te acusa de estar "loca" o de "inventarte cosas". ¿Qué está ocurriendo?',
    options: [
      'Puede ser mala memoria',
      'Gaslighting: duda de tu percepción y cordura',
      'Malentendido sin importancia',
      'Estrés que le hace olvidar'
    ],
    correctAnswer: 1,
    difficulty: 2,
    explanation: 'El Gaslighting es una forma de abuso psicológico donde el agresor niega la realidad para confundir a la víctima, haciendo que esta deje de confiar en su propio juicio e intuición.'
  },
  {
    id: '4',
    text: 'Tu pareja te compara constantemente con su ex, diciendo que ella sí "lo entendía" o que "estaba más en forma", haciéndote sentir insegura. ¿Cuál es el objetivo de esto?',
    options: [
      'Motivarme a ser mejor persona',
      'Triangulación para provocar celos e inseguridad',
      'Honestidad sobre sus gustos',
      'Aún extraña a su ex'
    ],
    correctAnswer: 1,
    difficulty: 2,
    explanation: 'La triangulación consiste en introducir a una tercera persona (real o imaginaria) en la dinámica para provocar celos, bajar tu autoestima y hacerte sentir que debes esforzarte más para "ganarte" su amor.'
  },
  {
    id: '5',
    text: 'Después de una etapa maravillosa, de repente tu pareja se vuelve fría, distante y critica todo lo que haces sin motivo aparente. ¿En qué fase del ciclo estás?',
    options: [
      'Hice algo mal y está dolido',
      'Mala racha laboral',
      'Devaluación: retirar afecto para someterte',
      'La pasión baja con el tiempo'
    ],
    correctAnswer: 2,
    difficulty: 2,
    explanation: 'Tras el Love Bombing (Idealización), el narcisista pasa a la Devaluación. Empieza a criticarte y retirarte el afecto para que te desesperes intentando volver a la etapa dorada del principio.'
  },
  {
    id: '6',
    text: 'Has decidido dejar la relación y cortar el contacto. De repente, él/ella reaparece con regalos, promesas de cambio y recordando los "buenos momentos". ¿Qué es esto?',
    options: [
      'Se dio cuenta y cambió de verdad',
      'Hoovering: succionarte de vuelta a la relación',
      'El destino nos quiere juntos',
      'Me echa de menos de forma genuina'
    ],
    correctAnswer: 1,
    difficulty: 2,
    explanation: 'El Hoovering es un intento desesperado del narcisista por recuperar su "suministro" (tú) cuando siente que pierde el control. Las promesas son vacías y el abuso volverá (y empeorará) si regresas.'
  },
  {
    id: '7',
    text: 'Tu pareja suele hacer "bromas" hirientes sobre tu aspecto o inteligencia en público, pero si te ofendes te dice: "Ay, qué sensible eres, no aguantas nada". ¿Qué mecanismo es este?',
    options: [
      'Humor negro sin maldad',
      'A veces soy muy sensible',
      'Invalidación emocional con agresión pasiva',
      'Quiere hacerme más fuerte'
    ],
    correctAnswer: 2,
    difficulty: 3,
    explanation: 'El narcisista usa el sarcasmo y las "bromas" para humillarte públicamente. Si reaccionas, te invalida acusándote de ser "demasiado sensible", transfiriéndote la culpa de su agresión.'
  },
  {
    id: '8',
    text: 'Le cuentas a tu pareja un problema importante que te preocupa, y él/ella termina hablando de cómo eso le afecta a él/ella o cambia de tema a sus propios problemas. ¿Qué demuestra esto?',
    options: [
      'Empatizar contando su experiencia',
      'Falta de empatía y egocentrismo',
      'Distraerme para que no me preocupe',
      'Tiene problemas más graves'
    ],
    correctAnswer: 1,
    difficulty: 3,
    explanation: 'La falta de empatía es un rasgo central. No pueden conectar genuinamente con tus sentimientos; solo les importa cómo las situaciones les afectan a ellos o cómo pueden redirigir la atención hacia sí mismos.'
  },
  {
    id: '9',
    text: 'Tu pareja te castiga dejándote de hablar durante días (Tratamiento de Silencio) porque no hiciste exactamente lo que quería. ¿Qué busca con esto?',
    options: [
      'Necesita espacio para calmarse',
      'Forma de procesar emociones',
      'Provocar ansiedad y culpa para que ceda',
      'Mejor que gritar y discutir'
    ],
    correctAnswer: 2,
    difficulty: 3,
    explanation: 'El Tratamiento de Silencio es una forma de manipulación y castigo. Busca provocar angustia en la víctima para que esta, desesperada por recuperar la conexión, asuma la culpa y se someta.'
  },
  {
    id: '10',
    text: 'Cuando intentas poner un límite o decir "no" a algo que no quieres hacer, tu pareja reacciona con una ira desproporcionada o se hace la víctima. ¿Qué significa?',
    options: [
      'No sé explicarme bien',
      'No respetan límites; lo viven como ataque',
      'Le hice mucho daño al negarme',
      'Es pasional'
    ],
    correctAnswer: 1,
    difficulty: 3,
    explanation: 'Para un narcisista, un límite es un insulto a su autoridad y control. Reaccionarán con furia o victimismo para obligarte a retirar el límite y volver a tener acceso total a ti.'
  },
  {
    id: '11',
    text: 'Notas que desde que estás con esta persona, has dejado de ver a tus amigos y familia porque a él/ella "no le caen bien" o se enfada cuando quedas con ellos. ¿Qué está pasando?',
    options: [
      'Mi entorno era tóxico y me abrió los ojos',
      'Es normal centrarse en la pareja',
      'Aislamiento para que dependas sólo de él/ella',
      'Casualidad de horarios'
    ],
    correctAnswer: 2,
    difficulty: 4,
    explanation: 'El aislamiento es clave para el control. Si no tienes a nadie que te dé una perspectiva externa o apoyo, es mucho más difícil darte cuenta del abuso y salir de la relación.'
  },
  {
    id: '12',
    text: 'Tu pareja siempre es el héroe o la víctima en todas sus historias pasadas. Sus ex parejas están "locas" o fueron "malvadas". ¿Qué te sugiere esto?',
    options: [
      'Mala suerte en el amor',
      'Persona muy resiliente',
      'Bandera roja: no asumir responsabilidad',
      'Seguro que es verdad'
    ],
    correctAnswer: 2,
    difficulty: 4,
    explanation: 'Los narcisistas nunca asumen la culpa. Reescriben la historia para ser siempre los buenos o las víctimas. Si todas sus ex parejas están "locas", es muy probable que él/ella fuera el problema.'
  },
  {
    id: '13',
    text: 'Sientes que tienes que "caminar sobre cáscaras de huevo" en casa para evitar que tu pareja explote o se moleste. ¿Cómo se llama este estado?',
    options: [
      'Respeto y consideración',
      'Hipervigilancia por miedo a su reacción',
      'Adaptación a la convivencia',
      'Paz doméstica'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'La hipervigilancia es un síntoma de trauma. Vives en tensión permanente intentando predecir y gestionar el estado de ánimo del abusador para evitar conflictos, anulando tus propias necesidades.'
  },
  {
    id: '14',
    text: 'Tu pareja te promete que "mañana cambiará", que "iremos a terapia" o que "todo será diferente", pero sus acciones nunca coinciden con sus palabras (Future Faking). ¿Por qué lo hace?',
    options: [
      'Buenas intenciones pero olvida',
      'Ganar tiempo con falsas esperanzas',
      'Quiere cambiar realmente',
      'Optimismo'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'El Future Faking consiste en prometer un futuro maravilloso que nunca llegará. Es el "zanahoria" que ponen delante de ti para que sigas tirando del carro de la relación, soportando el abuso presente.'
  },
  {
    id: '15',
    text: 'En una reunión social, tu pareja es encantadora, carismática y amable con todos, pero en cuanto subís al coche o llegáis a casa, su cara cambia y se vuelve fría o agresiva. ¿Qué es esto?',
    options: [
      'Está cansado de socializar',
      'Tiene doble personalidad',
      'Máscara pública vs. realidad privada',
      'Tiene mucha confianza conmigo'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Los narcisistas cuidan obsesivamente su imagen pública. Pueden ser "luz de la calle" y "oscuridad de la casa". Esto confunde a la víctima y hace que nadie más crea lo que sucede en privado.'
  },
  {
    id: '16',
    text: 'Te descubres pidiendo perdón por cosas que no has hecho o por reaccionar a sus provocaciones, sintiéndote culpable. ¿Qué ha logrado el narcisista?',
    options: [
      'Aprender humildad',
      'Invertir la culpa: él víctima, tú verdugo',
      'Mejor comunicación',
      'Yo soy así de bueno/a'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Mediante la manipulación, el narcisista logra que te sientas culpable de sus abusos o de tus reacciones defensivas. Terminas consolando al agresor.'
  },
  {
    id: '17',
    text: 'Tu pareja utiliza tus inseguridades o secretos que le contaste en confianza para herirte durante las discusiones. ¿Qué demuestra esto?',
    options: [
      'Buena memoria',
      'La confianza se rompió',
      'Usar tu información como arma',
      'Ayudarme a superar miedos'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'Un narcisista recopila información sobre tus debilidades durante la fase de idealización no para conocerte, sino para tener munición y usarla contra ti en la fase de devaluación.'
  },
  {
    id: '18',
    text: 'Sientes que te has perdido a ti mismo/a, que ya no sabes qué te gusta, qué opinas o quién eres desde que estás con esta persona. ¿Qué ha ocurrido?',
    options: [
      'He madurado y cambiado',
      'Erosión de identidad por control',
      'Sacrificio normal del amor',
      'Mimetizarme con mi pareja'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'El abuso narcisista erosiona tu identidad. Dejas de ser tú para convertirte en un objeto que satisface las necesidades del narcisista, perdiendo tus hobbies, opiniones y esencia.'
  },
  {
    id: '19',
    text: 'Tu pareja te acusa de ser infiel sin ninguna prueba, revisa tu móvil y te interroga constantemente. Curiosamente, él/ella es quien coquetea con otros. ¿Qué es?',
    options: [
      'Celos porque me quiere',
      'Proyección: acusarte de lo que hace',
      'Inseguridad normal',
      'Sexto sentido'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'La proyección es un mecanismo de defensa. El narcisista atribuye a otros sus propios defectos, pensamientos o acciones inaceptables. Si te acusa de infiel sin motivo, sospecha de él/ella.'
  },
  {
    id: '20',
    text: 'Cuando intentas hablar de cómo te sientes, te dice frases como: "Ya estás otra vez con tus dramas", "No es para tanto", "Te lo tomas todo a la tremenda". ¿Qué hace?',
    options: [
      'Me ayuda a relativizar',
      'Minimizar e invalidar sentimientos',
      'Tengo tendencia al drama',
      'Persona pragmática'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Minimizar tus sentimientos es una forma de decirte que tu realidad interna no importa. Busca que reprimas tus emociones y aceptes el trato inaceptable sin quejarte.'
  },
  {
    id: '21',
    text: 'Tu pareja "olvida" convenientemente tus cumpleaños, aniversarios o fechas importantes, o los arruina creando una pelea justo antes. ¿Por qué?',
    options: [
      'Despiste',
      'Mala suerte',
      'Sabotaje del foco en ti',
      'Estrés ese día'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Los narcisistas odian que otros sean el centro de atención. Arruinar tus días especiales es una forma de sabotaje para recuperar el protagonismo o castigarte por ser feliz sin ellos.'
  },
  {
    id: '22',
    text: 'Te dice que nadie más te querrá como él/ella, que estás "dañado/a" o que sin él/ella no eres nada. ¿Cuál es el mensaje oculto?',
    options: [
      'Amor eterno',
      'Tengo suerte de tenerle',
      'Indefensión aprendida para que no te vayas',
      'Crítica constructiva'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'Buscan destruir tu autoestima hasta tal punto que creas que no mereces nada mejor y que eres incapaz de sobrevivir sin ellos. Es una jaula psicológica.'
  },
  {
    id: '23',
    text: 'Notas que tu pareja cambia de personalidad según con quién esté: es intelectual con unos, fiestero con otros, víctima con otros. ¿Qué rasgo es?',
    options: [
      'Adaptable y social',
      'Múltiples intereses',
      'Yo falso camaleónico',
      'Bipolar'
    ],
    correctAnswer: 2,
    difficulty: 7,
    explanation: 'El narcisista carece de un núcleo de identidad sólido. Construye diferentes máscaras o personajes para manipular a diferentes personas y obtener "suministro" de cada una.'
  },
  {
    id: '24',
    text: 'Tras una ruptura, empieza a publicar fotos muy felices con una nueva pareja a los pocos días, haciendo todo lo que tú querías hacer. ¿Qué sientes?',
    options: [
      'Me alegro por él/ella',
      'Amor verdadero y rápido',
      'Puesta en escena para herirte',
      'Yo no era suficiente'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'El narcisista usa las redes sociales y a sus nuevas parejas como armas. Exhibe una felicidad falsa para provocarte dolor y hacerte creer que tú eras el problema. La nueva víctima sufrirá lo mismo pronto.'
  },
  {
    id: '25',
    text: 'Tu jefe se apropia de tus ideas, te humilla en las reuniones pero luego te invita a comer como si nada, y crea rivalidad entre compañeros. ¿Qué perfil tiene?',
    options: [
      'Líder exigente y justo',
      'Narcisista laboral',
      'Gestión moderna',
      'Un poco peculiar'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El narcisismo no solo se da en pareja. En el trabajo, buscan poder, se apropian de logros ajenos, no tienen empatía y usan el "divide y vencerás" para controlar al equipo.'
  },
  {
    id: '26',
    text: 'Un familiar siempre se hace la víctima, dice que "se sacrifica por todos" pero en realidad manipula con culpa y no respeta la privacidad. ¿Qué es?',
    options: [
      'Madre/padre abnegado',
      'Narcisista encubierto/vulnerable',
      'Necesita más cariño',
      'Persona muy sensible'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El narcisista encubierto usa la victimización y el "sacrificio" como herramienta de control. "Después de todo lo que he hecho por ti..." es su frase favorita para generar culpa y obligación.'
  },
  {
    id: '27',
    text: 'Cuando le confrontas con pruebas de sus mentiras, cambia de tema, saca trapos sucios tuyos del pasado o empieza a hablar sin sentido hasta marearte. ¿Técnica?',
    options: [
      'Se lía explicándose',
      'Ensalada de palabras para confundirte',
      'Recordar el pasado “con razón”',
      'Debate justo'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'La "Ensalada de Palabras" es un discurso circular, ilógico y confuso diseñado para agotarte mentalmente, frustrarte y hacer que desistas de buscar la verdad o una disculpa.'
  },
  {
    id: '28',
    text: 'Sientes una necesidad física y obsesiva de contactar con tu ex pareja abusiva, aunque sabes que te hace daño. Es como una droga. ¿Qué es?',
    options: [
      'Amor verdadero que no muere',
      'Masoquismo',
      'Vínculo de trauma por refuerzo intermitente',
      'Falta de voluntad'
    ],
    correctAnswer: 2,
    difficulty: 9,
    explanation: 'El cerebro reacciona al ciclo de abuso (dolor-alivio) igual que a una droga dura. No es amor, es una adicción química a los picos de dopamina y cortisol generados por el abusador.'
  },
  {
    id: '29',
    text: 'Decides aplicar el "Contacto Cero", pero amigos comunes te traen mensajes de él/ella o te dicen "pobrecito, está muy mal". ¿Qué son estos amigos?',
    options: [
      'Buenos mediadores',
      '“Monos voladores” emisarios del narcisista',
      'Gente neutral',
      'Amigos por la paz'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Los "Monos Voladores" son personas que el narcisista utiliza para espiarte, enviarte mensajes o presionarte para volver, a menudo bajo la apariencia de preocupación o amistad.'
  },
  {
    id: '30',
    text: 'Al principio de la relación, te contó historias terribles de su infancia para dar pena y que quisieras "salvarle" o cuidarle. ¿Qué buscaba?',
    options: [
      'Desahogo sincero',
      'Apelar a tu empatía para que bajes la guardia',
      'Intimidad real',
      'Que fueras su terapeuta'
    ],
    correctAnswer: 1,
    difficulty: 10,
    explanation: 'Los narcisistas explotan la empatía de sus víctimas presentándose como "niños heridos". Si sientes pena por él/ella, tolerarás abusos que no tolerarías en otra persona, pensando que "no es su culpa".'
  },
  {
    id: '31',
    text: 'Tu pareja te regala algo muy caro que no te gusta o no pediste, y luego te exige que lo uses y te echa en cara "todo lo que gasta en ti". ¿Qué es?',
    options: [
      'Generoso pero con mal gusto',
      'Control con regalos (love bombing material)',
      'Comprar mi obediencia',
      'Detalle bonito malentendido'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Los regalos no son desinteresados. Son "deudas" que crea para luego cobrarte en forma de obediencia o para reprocharte que eres una "desagradecida" si te quejas de su trato.'
  },
  {
    id: '32',
    text: 'Haces un gran logro en tu trabajo o estudios. Tu pareja dice "felicidades" secamente e inmediatamente cambia de tema o se pone enferma. ¿Por qué?',
    options: [
      'Mala suerte justo hoy',
      'Le da poca importancia',
      'Envidia patológica: tu éxito le opaca',
      'Estaba distraído'
    ],
    correctAnswer: 2,
    difficulty: 6,
    explanation: 'El narcisista ve el éxito ajeno como una amenaza a su propia superioridad. Intentará arruinar tu momento o ignorarlo para que no te sientas "demasiado importante".'
  },
  {
    id: '33',
    text: 'Te dice "nadie te va a aguantar con ese carácter", "estás loca", "necesitas ayuda psiquiátrica". Tú empiezas a creerlo. ¿Efecto?',
    options: [
      'Tengo carácter difícil',
      'Introyectar la voz del abusador',
      'Recomendación de salud',
      'Ayuda para mejorar'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'A fuerza de repetición, la víctima internaliza los insultos del abusador. Empiezas a atacarte a ti misma con sus mismas palabras, minando tu autoestima desde dentro.'
  },
  {
    id: '34',
    text: 'Cuando le pides que haga algo simple (sacar la basura, llegar puntual), dice que sí pero nunca lo hace, o lo hace mal a propósito. ¿Qué es?',
    options: [
      'Olvidadizo o torpe',
      'Resistencia pasivo-agresiva para controlar',
      'TDAH',
      'No me explico bien'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'La resistencia pasiva es una forma de agresión encubierta. Aceptan verbalmente para evitar el conflicto directo, pero boicotean la acción para demostrar que tú no mandas sobre ellos.'
  },
  {
    id: '35',
    text: 'Durante una discusión, te acorrala físicamente o te bloquea la salida "para que le escuches", aunque no te pegue. ¿Qué nivel de riesgo es?',
    options: [
      'Bajo: solo hablar',
      'Medio: algo intenso',
      'Alto: intimidación física',
      'Pasión desmedida'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Bloquear el paso, acorralar o romper objetos cerca de ti es violencia física e intimidación. Busca generar miedo físico para controlarte. Es una señal de peligro inminente.'
  },
  {
    id: '36',
    text: 'Tu pareja te dice cómo vestirte, qué comer o cómo peinarte, sutilmente al principio ("te queda mejor esto") y luego con críticas. ¿Objetivo?',
    options: [
      'Que esté guapa/o',
      'Buen sentido de la moda',
      'Anular tu identidad a su gusto',
      'Mejorar mi imagen'
    ],
    correctAnswer: 2,
    difficulty: 5,
    explanation: 'El narcisista te ve como un objeto o accesorio que debe reflejar bien sobre él/ella. No respeta tu autonomía ni tus gustos; quiere moldearte a su imagen y semejanza.'
  },
  {
    id: '37',
    text: 'Has dejado la relación y te sientes culpable por "abandonarle" cuando "te necesitaba". ¿Qué sentimiento es este?',
    options: [
      'Soy mala persona',
      'Falsa culpa por condicionamiento',
      'Responsabilidad afectiva',
      'Pena real'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El abusador te ha entrenado para que te sientas responsable de su bienestar emocional. Esa culpa no es tuya, es un botón que él/ella instaló para que no te fueras.'
  },
  {
    id: '38',
    text: 'Observas que tu pareja trata mal a los camareros, dependientes o personas de servicio, pero es encantador con gente de estatus. ¿Qué indica?',
    options: [
      'Exigente con el servicio',
      'Tiene clase',
      'Clasismo y falta de empatía real',
      'Mal día'
    ],
    correctAnswer: 2,
    difficulty: 4,
    explanation: 'La verdadera cara de una persona se ve en cómo trata a quienes no tienen poder sobre ella. El narcisista desprecia a quien considera "inferior" o que no le sirve.'
  },
  {
    id: '39',
    text: 'Te promete un viaje increíble si haces X cosa que él quiere. Haces X, y el viaje nunca ocurre o pone una excusa. ¿Cómo se llama?',
    options: [
      'Mala suerte',
      'Refuerzo intermitente y future faking',
      'Economía de fichas',
      'Cambio de planes'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Usa la promesa de una recompensa futura para manipular tu comportamiento presente. Una vez obtiene lo que quiere, la promesa se desvanece.'
  },
  {
    id: '40',
    text: 'Sientes que tienes que "adivinar" qué quiere o por qué está enfadado porque no te lo dice claramente, pero te castiga igual. ¿Qué provoca?',
    options: [
      'Telepatía',
      'Ansiedad por leer su mente',
      'Mejorar lo no verbal',
      'Esforzarme por entenderle'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Esperan que seas una extensión de su mente y anticipes sus deseos. Si no lo haces, te castigan. Esto te mantiene en un estado de alerta y sumisión constante.'
  },
  {
    id: '41',
    text: 'Tu pareja te dice: "Si me dejas, me mato" o "Me moriré sin ti". ¿Qué tipo de manipulación es?',
    options: [
      'Amor desesperado',
      'Chantaje emocional extremo',
      'Depresión grave',
      'Romanticismo trágico'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'La amenaza de suicidio es la carta final de control. Es un acto de violencia psicológica para obligarte a quedarte contra tu voluntad usando el terror a ser culpable de su muerte.'
  },
  {
    id: '42',
    text: 'Después de una discusión horrible, tenéis sexo increíble y muy intenso. Sientes que todo está arreglado. ¿Qué ha pasado?',
    options: [
      'Sexo de reconciliación',
      'Refuerzo bioquímico del vínculo de trauma',
      'Nos hemos perdonado',
      'Pasión'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El sexo tras el abuso libera oxitocina y dopamina que alivian el dolor emocional previo, reforzando la adicción a la relación. No soluciona el problema, solo anestesia la herida temporalmente.'
  },
  {
    id: '43',
    text: 'Tu pareja te hace sentir que eres tú quien tiene problemas mentales, quien es celosa, loca o insegura, cuando antes de la relación eras estable. ¿Conclusión?',
    options: [
      'La relación sacó lo peor',
      'Yo soy el problema',
      'Proyección: te contagia su caos',
      'Necesito medicación'
    ],
    correctAnswer: 2,
    difficulty: 8,
    explanation: 'Si entraste sana en la relación y ahora te sientes "loca", es probable que sea el resultado del Gaslighting y el abuso sistemático, no un trastorno tuyo.'
  },
  {
    id: '44',
    text: 'Siempre que intentas hablar de la relación, la conversación termina siendo sobre lo "ingrata" que eres y todo lo que él/ella hace por ti. ¿Resultado?',
    options: [
      'Soy egoísta',
      'Desvío para no asumir responsabilidad',
      'Hace mucho por mí',
      'Comunicación efectiva'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Nunca podrás resolver un conflicto con un narcisista porque nunca admitirán ser parte del problema. Siempre girarán la tortilla para que tú acabes pidiendo perdón.'
  },
  {
    id: '45',
    text: 'Te dice "Yo soy así, tómalo o déjalo" cuando le pides respeto básico. ¿Qué significa?',
    options: [
      'Persona auténtica',
      'Negativa a cambiar o considerar tus necesidades',
      'Honestidad',
      'Mucha personalidad'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Es una declaración de intenciones: no piensa cambiar ni adaptarse. Te está diciendo que el precio de estar con él/ella es aceptar el maltrato.'
  },
  {
    id: '46',
    text: 'Sientes alivio cuando tu pareja se va de viaje o sale de casa. ¿Qué te dice tu cuerpo?',
    options: [
      'Me gusta la soledad',
      'La relación es fuente de estrés',
      'Le echaré de menos luego',
      'Soy independiente'
    ],
    correctAnswer: 1,
    difficulty: 3,
    explanation: 'Tu cuerpo es sabio. Si sientes paz cuando tu pareja no está, es una señal inequívoca de que su presencia es una amenaza o una carga para tu sistema nervioso.'
  },
  {
    id: '47',
    text: 'Tu pareja te compara con su madre/padre, diciendo que deberías ser más como ella/él, o compite con ella/él por tu atención. ¿Dinámica?',
    options: [
      'Mamitis',
      'Triangulación familiar edípica',
      'Que me lleve bien con su familia',
      'Es familiar'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Los narcisistas suelen tener relaciones enfermizas con sus progenitores. Usan esas figuras para hacerte sentir insuficiente o para establecer estándares inalcanzables.'
  },
  {
    id: '48',
    text: 'Descubres que tiene perfiles en apps de citas "solo para hacer amigos" o "por aburrimiento". ¿Realidad?',
    options: [
      'Muy sociable',
      'Búsqueda de suministro y validación',
      'Curiosidad',
      'No significa nada'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'El narcisista necesita atención constante (suministro) como un coche necesita gasolina. Las apps de citas son una fuente fácil de validación, independientemente de si tienen pareja.'
  },
  {
    id: '49',
    text: 'Cuando enfermas, se enfada contigo, te ignora o dice que "siempre te pasa algo" en lugar de cuidarte. ¿Por qué?',
    options: [
      'Asco a los virus',
      'Falta de empatía y molestia',
      'Quiere que me recupere rápido',
      'Hipocondría'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Tu enfermedad es un inconveniente para el narcisista porque: 1) No puedes darle servicio/atención. 2) Requiere que tú seas el centro de atención, lo cual detestan.'
  },
  {
    id: '50',
    text: 'Al principio te decía que eras "demasiado buena para él/ella", ahora te dice que "tienes suerte de que él/ella te aguante". ¿Proceso?',
    options: [
      'Cambió de opinión',
      'Devaluación para destruir tu autoestima',
      'Es una broma',
      'Realismo'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Primero te suben a un pedestal (para engancharte) y luego te tiran de él (para controlarte). Si crees que no vales nada, no te irás.'
  },
  // 51-100: Tácticas Avanzadas y Dinámicas Familiares/Sociales
  {
    id: '51',
    text: 'Tu pareja te critica por algo que ella misma hace constantemente. Si se lo señalas, se indigna y dice que "no es lo mismo". ¿Qué es?',
    options: [
      'Doble moral y falta de autocrítica',
      'Hipocresía adaptativa',
      'Es que sus motivos son diferentes',
      'Es un malentendido'
    ],
    correctAnswer: 0,
    difficulty: 6,
    explanation: 'Los narcisistas se sienten por encima de las reglas. Lo que para ellos es aceptable, para ti es un motivo de castigo. No hay coherencia, solo conveniencia.'
  },
  {
    id: '52',
    text: 'En una cena familiar, tu madre/padre cuenta una historia humillante sobre ti de cuando eras pequeño para hacer reír a todos. Si te molestas, dice que "no tienes sentido del humor". ¿Dinámica?',
    options: [
      'Familia muy divertida',
      'Humillación pública para suministro',
      'Amor de madre/padre',
      'Soy muy susceptible'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'En familias narcisistas, los hijos son extensiones del padre. Su dolor o vergüenza es secundario al deseo del padre de ser el centro de atención o quedar como "el gracioso".'
  },
  {
    id: '53',
    text: 'Has cortado con tu pareja. Al día siguiente, descubres que ha llamado a tus padres y mejores amigos llorando, diciendo que está "preocupado/a por tu salud mental". ¿Qué hace?',
    options: [
      'Se preocupa de verdad por mí',
      'Difamación preventiva (smear)',
      'Busca consuelo en mi entorno',
      'Es un acto de bondad'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'La campaña de difamación busca destruir tu credibilidad antes de que puedas contar tu versión. Se presenta como la víctima preocupada para que nadie te crea si hablas del abuso.'
  },
  {
    id: '54',
    text: 'Tu pareja controla cada euro que gastas, te pide los tickets del súper y te critica si compras algo para ti, aunque él/ella gaste mucho. ¿Qué es?',
    options: [
      'Es una persona muy ahorradora',
      'Abuso financiero por control económico',
      'Quiere que tengamos un futuro mejor',
      'Es buena administración'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'El dinero es poder. Al controlar tus finanzas, limita tu libertad y capacidad de movimiento, haciéndote sentir que no puedes sobrevivir sin su "gestión".'
  },
  {
    id: '55',
    text: 'Te dice que eres "demasiado inteligente para tu propio bien" o que "tus estudios no sirven para nada en la vida real". ¿Por qué?',
    options: [
      'Es una opinión sincera',
      'Devaluación de capacidades para que no seas independiente',
      'Quiere que sea más práctico/a',
      'Es un cumplido disfrazado'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'El narcisista necesita ser el más listo de la relación. Cualquier logro intelectual o académico tuyo es visto como una amenaza que debe ser minimizada.'
  },
  {
    id: '56',
    text: 'Notas que tu pareja coquetea con el camarero/a delante de ti, y si dices algo, te acusa de ser "celosa e insegura". ¿Táctica?',
    options: [
      'Solo es amable',
      'Triangulación activa para bajarte la autoestima y mantenerte en vilo',
      'Es su forma de ser',
      'Es verdad, soy muy celosa'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Provocar celos deliberadamente es una forma de control. Disfruta viendo cómo sufres por su atención, lo cual valida su poder sobre tus emociones.'
  },
  {
    id: '57',
    text: 'Tu pareja te interrumpe constantemente cuando hablas, termina tus frases o habla por ti en las reuniones. ¿Qué indica?',
    options: [
      'Me conoce tan bien que sabe lo que voy a decir',
      'Invisibilización y falta de respeto a tu autonomía',
      'Es muy impaciente',
      'Quiere ayudarme a explicarme'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Al no dejarte hablar, te está comunicando que tu voz y tus pensamientos no tienen valor por sí mismos, solo lo que él/ella decide proyectar sobre ti.'
  },
  {
    id: '58',
    text: 'Sientes que tienes que "pagar" cada momento de felicidad o favor que te hace con una gratitud eterna o aguantando un mal trato posterior. ¿Cómo se llama?',
    options: [
      'Reciprocidad',
      'Deuda emocional perpetua',
      'Gratitud',
      'Intercambio justo'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Para un narcisista, nada es gratis. Cada "gesto amable" es una inversión que usará más tarde para manipularte o para recordarte lo "bueno" que es comparado contigo.'
  },
  {
    id: '59',
    text: 'Tu pareja se obsesiona con su cuerpo, el gimnasio y su ropa, y te exige que tú también seas "perfecta" físicamente. ¿Perfil?',
    options: [
      'Narcisista Somático',
      'Persona muy deportista',
      'Narcisista Cerebral',
      'Modelo'
    ],
    correctAnswer: 0,
    difficulty: 8,
    explanation: 'El narcisista somático basa su superioridad en su apariencia física y capacidad de seducción. Te ve como un accesorio que debe estar a la altura de su "perfección".'
  },
  {
    id: '60',
    text: 'Tu pareja desprecia a los que no tienen su nivel de estudios o cultura, considerándolos "borregos" o "inferiores". ¿Perfil?',
    options: [
      'Narcisista Cerebral',
      'Persona muy culta',
      'Narcisista Somático',
      'Intelectual'
    ],
    correctAnswer: 0,
    difficulty: 8,
    explanation: 'El narcisista cerebral usa su intelecto, conocimientos o estatus académico para sentirse superior y humillar a los demás, incluyendo a su pareja si no le "sigue el ritmo".'
  },
  {
    id: '61',
    text: 'Te das cuenta de que tu pareja te ha estado mintiendo sobre cosas pequeñas e innecesarias. Cuando le pillas, miente sobre la mentira. ¿Por qué?',
    options: [
      'Tiene mala memoria',
      'Mentira patológica para controlar la narrativa',
      'No quiere herirme',
      'Son mentiras piadosas'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Mienten porque pueden y porque les da una sensación de poder tener un mundo secreto al que tú no accedes. La verdad no es un valor para ellos, solo la utilidad de la historia.'
  },
  {
    id: '62',
    text: 'Tu pareja utiliza el sexo como premio cuando te portas "bien" y te lo niega sistemáticamente como castigo cuando hay conflicto. ¿Qué es?',
    options: [
      'Es normal que no tenga ganas si estamos mal',
      'Uso del sexo como herramienta de control y manipulación',
      'Falta de deseo sexual',
      'Respeto a sus tiempos'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Convertir la intimidad en una moneda de cambio es una forma de deshumanizar la relación y someter tus necesidades biológicas y afectivas a su voluntad.'
  },
  {
    id: '63',
    text: 'En una discusión, empieza a imitar tu tono de voz de forma burlona o a hacer ruidos mientras hablas. ¿Qué busca?',
    options: [
      'Hacer la situación más amena',
      'Humillar e invalidar para desestabilizarte',
      'Es un comportamiento infantil sin malicia',
      'Quiere que deje de gritar'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Es una táctica de provocación (Baiting). Al humillarte de forma tan burda, busca que explotes de ira para luego decir: "¿Ves cómo te pones? Estás loca/o".'
  },
  {
    id: '64',
    text: 'Sientes que tu pareja es como un niño/a pequeño/a atrapado en el cuerpo de un adulto. ¿Qué concepto psicológico lo explica?',
    options: [
      'Síndrome de Peter Pan',
      'Desarrollo emocional detenido por trauma o exceso de mimo',
      'Inmadurez pasajera',
      'Espíritu joven'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'El narcisista no desarrolló una empatía madura ni la capacidad de gestionar la frustración. Emocionalmente, siguen siendo infantes que necesitan atención total y constante.'
  },
  {
    id: '65',
    text: 'Tu pareja te dice que "somos un equipo contra el mundo" y que "nadie nos entiende como nosotros". ¿Peligro?',
    options: [
      'Es una unión muy fuerte',
      'Mentalidad de "nosotros contra ellos" para aislarte',
      'Es romanticismo puro',
      'Lealtad extrema'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Esta retórica busca que veas a tus amigos y familia como enemigos o extraños, reforzando tu dependencia emocional y tu aislamiento social.'
  },
  {
    id: '66',
    text: 'Un "amigo" siempre te cuenta las cosas malas que otros dicen de ti, supuestamente para "protegerte", pero te deja sintiéndote fatal. ¿Qué es?',
    options: [
      'Un amigo fiel',
      'Mono volador/instigador que crea inseguridad y dependencia',
      'Alguien muy honesto',
      'Un buen confidente'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Esta persona actúa como emisario del caos. Su objetivo real no es informarte, sino minar tu confianza en los demás para que te recluyas en el círculo del narcisista.'
  },
  {
    id: '67',
    text: 'Tu pareja se atribuye el mérito de tus buenas ideas o de las cosas que salen bien en casa, pero te culpa de todo lo que sale mal. ¿Mecanismo?',
    options: [
      'Es un poco egocéntrico',
      'Externalización de la culpa y apropiación del éxito (Egoísmo defensivo)',
      'Es que yo no sé gestionar las crisis',
      'Es un líder natural'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'El narcisista no puede tolerar el fracaso (daña su falsa imagen), así que lo proyecta en ti. Tampoco soporta que tú brilles por ti misma, así que se adueña de tus logros.'
  },
  {
    id: '68',
    text: 'Has empezado a dudar de tus propios recuerdos, de si viste aquello o si oíste lo otro. Tienes "niebla mental". ¿Causa probable?',
    options: [
      'Estrés laboral',
      'Efecto prolongado del Gaslighting y el estrés postraumático',
      'Falta de vitaminas',
      'Estoy envejeciendo'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'La niebla mental es la respuesta del cerebro a la disonancia cognitiva y al abuso constante. Es un mecanismo de defensa ante una realidad que es demasiado dolorosa o confusa para procesar.'
  },
  {
    id: '69',
    text: 'En la familia, hay un hermano que nunca hace nada mal a ojos de los padres y otro que siempre es el culpable de todo. ¿Roles?',
    options: [
      'Hijo Dorado y Chivo Expiatorio',
      'Hijo bueno e hijo rebelde',
      'Hijo mayor e hijo menor',
      'Cuestión de afinidad'
    ],
    correctAnswer: 0,
    difficulty: 8,
    explanation: 'En el sistema narcisista, los roles se asignan para dividir y controlar. El Hijo Dorado debe ser perfecto; el Chivo Expiatorio carga con todas las frustraciones y fallos del sistema.'
  },
  {
    id: '70',
    text: 'Tu pareja dice que es "muy espiritual", "ve energías" o es "muy religioso/a", pero usa eso para juzgarte y decirte que estás "vibrando bajo" o "en pecado". ¿Qué es?',
    options: [
      'Una persona muy mística',
      'Narcisismo espiritual para abusar',
      'Alguien que quiere salvar mi alma',
      'Un guía espiritual'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es una de las formas más peligrosas de narcisismo, ya que el abusador se ampara en una autoridad "divina" o "cósmica" para invalidar y controlar a la víctima.'
  },
  {
    id: '71',
    text: 'Tu pareja te despierta en mitad de la noche para discutir o te impide dormir "hasta que se arreglen las cosas" (que nunca se arreglan). ¿Táctica?',
    options: [
      'Es muy apasionado/a con la comunicación',
      'Privación del sueño: una táctica de tortura psicológica para debilitar tu voluntad',
      'Insomnio compartido',
      'Quiere solucionar los problemas rápido'
    ],
    correctAnswer: 1,
    difficulty: 10,
    explanation: 'La privación de sueño te impide pensar con claridad, te vuelve más dócil y destruye tu salud física y mental. Es una forma de maltrato grave y deliberada.'
  },
  {
    id: '72',
    text: 'Sientes que el narcisista "te lee la mente" porque sabe exactamente qué decir para herirte o para que vuelvas. ¿Por qué?',
    options: [
      'Porque tenemos una conexión especial',
      'Empatía cognitiva: usa su capacidad de entender tus emociones para manipularlas, no para sentirlas',
      'Porque es muy inteligente',
      'Es telepatía'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'El narcisista observa tus reacciones obsesivamente para aprender tus "botones". Sabe cómo te sientes, pero no le importa; usa ese conocimiento como un manual de instrucciones para controlarte.'
  },
  {
    id: '73',
    text: 'Te dice: "Siento que te hayas sentido mal por lo que dije". ¿Es una disculpa real?',
    options: [
      'Sí, me ha pedido perdón',
      'No-disculpa: culpa tu reacción, no su acción',
      'Es una disculpa a medias',
      'Es muy educado/a'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Una disculpa real asume la responsabilidad ("Siento haber dicho eso"). La falsa disculpa te culpa a ti por ser "demasiado sensible" o por "interpretar mal".'
  },
  {
    id: '74',
    text: 'Cuando por fin logras dejar la relación, te das cuenta de que no tienes hobbies, ni amigos, ni dinero ahorrado. ¿Cómo se llama este estado?',
    options: [
      'Empezar de cero',
      'Tierra quemada (sabotaje de tus recursos)',
      'Mala suerte post-ruptura',
      'Libertad absoluta'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Es una estrategia deliberada de sabotaje. Cuantos menos recursos (emocionales, sociales o económicos) tengas, más difícil te será sobrevivir fuera de su control.'
  },
  {
    id: '75',
    text: 'Tu pareja te graba durante las discusiones o saca fotos de cuando estás llorando para "enseñárselas a otros" y demostrar que estás loca/o. ¿Qué es?',
    options: [
      'Recopilación de pruebas',
      'Provocar y crear pruebas falsas',
      'Un diario visual',
      'Es para que yo vea cómo me pongo'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Suelen provocarte hasta que estallas (Ira Reactiva) y graban solo tu reacción para usarla como "prueba" de tu inestabilidad ante familiares, amigos o jueces.'
  },
  {
    id: '76',
    text: '¿Cuál es la única forma real de ganar el "juego" contra un narcisista?',
    options: [
      'Vengarte y que sufra lo mismo',
      'No jugar: aplicar Contacto Cero y recuperar tu vida',
      'Hacerle ver la verdad para que cambie',
      'Ganar todas las discusiones'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'No puedes ganar una discusión ni obtener justicia de alguien que no tiene conciencia ni empatía. La victoria es salir del sistema de abuso y volverte indiferente a su existencia.'
  },
  {
    id: '77',
    text: 'Notas que tu pareja se "aburre" cuando las cosas van bien y hay paz, y busca cualquier excusa para crear un drama. ¿Por qué?',
    options: [
      'Necesita emoción en su vida',
      'Adicción al caos y necesidad de reafirmar su control mediante el conflicto',
      'Es una persona muy activa',
      'No soporta la monotonía'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'La paz les resulta amenazante porque no hay "suministro" (atención intensa). El conflicto les hace sentirse poderosos y vivos, a costa de tu salud mental.'
  },
  {
    id: '78',
    text: 'Te dice que sus padres eran "perfectos" y su infancia "maravillosa", pero no tiene ninguna relación real con ellos o es de total sumisión. ¿Qué oculta?',
    options: [
      'Mucho respeto familiar',
      'Negación de traumas y falta de identidad propia',
      'Una familia muy unida',
      'Es muy reservado/a'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'La idealización extrema de la infancia suele ser una máscara para ocultar heridas profundas que no pueden procesar. No hay una visión realista, solo una fachada de perfección.'
  },
  {
    id: '79',
    text: 'Tras dejar la relación, sientes que nadie te va a creer porque él/ella es "muy buena persona" de cara al exterior. ¿Cómo se siente la víctima?',
    options: [
      'Loca e incomprendida',
      'Invisibilizada por la "Máscara de Bondad" del abusador',
      'Exagerada',
      'Agradecida por lo bueno'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Es el aislamiento final: el abusador ha construido una imagen tan perfecta que la víctima se siente atrapada en una realidad que nadie más ve. Esto se llama "abuso invisible".'
  },
  {
    id: '80',
    text: '¿Qué es la "Piedra Gris" (Grey Rocking)?',
    options: [
      'Ser duro como una piedra ante los insultos',
      'Actuar de forma aburrida y neutral para que el narcisista pierda interés en ti',
      'Tirarle piedras a su tejado',
      'Quedarse paralizado de miedo'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Es una técnica de supervivencia cuando no puedes aplicar el contacto cero. Te vuelves tan poco interesante (como una piedra gris) que el narcisista busca suministro en otra parte.'
  },
  {
    id: '81',
    text: 'Tu pareja te dice que "te ha hecho un favor" al estar contigo. ¿Qué busca minar?',
    options: [
      'Mi orgullo',
      'Tu valor propio y sentido de merecimiento',
      'Mi independencia',
      'Mi gratitud'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Es una táctica para que sientas que le debes algo por el simple hecho de existir a su lado. Busca que te sientas inferior y afortunada/o de recibir sus migajas de atención.'
  },
  {
    id: '82',
    text: 'Notas que el narcisista trata de "comprar" a tus hijos con regalos caros o permisividad excesiva para ponerlos en tu contra. ¿Táctica?',
    options: [
      'Es un padre/madre muy generoso',
      'Triangulación con los hijos y alienación parental',
      'Quiere recuperar el tiempo perdido',
      'Es su forma de pedir perdón'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Usa a los hijos como armas para castigarte. No le importa el bienestar de los niños, solo ganar la batalla de lealtades y dejarte como "el malo" o "la estricta".'
  },
  {
    id: '83',
    text: 'Te dice que eres "demasiado emocional" o "poco racional" para invalidar tus quejas legítimas sobre su comportamiento. ¿Qué hace?',
    options: [
      'Me ayuda a ser más lógico/a',
      'Sexismo o prejuicio usado como herramienta de Gaslighting',
      'Tiene razón, soy muy sensible',
      'Es un consejo constructivo'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Etiquetar tus emociones como "irracionales" es una forma de silenciarte. Si tus sentimientos son "fallos de fábrica", él/ella no tiene por qué escucharlos ni cambiar.'
  },
  {
    id: '84',
    text: '¿Por qué un narcisista nunca te dará un cierre (closure) real tras la ruptura?',
    options: [
      'Porque no sabe cómo hacerlo',
      'Porque dejar la puerta abierta le permite volver a por suministro en el futuro',
      'Porque está muy dolido/a',
      'Porque no quiere hacerme más daño'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El cierre implica responsabilidad y empatía, algo que no tienen. Prefieren dejarte confundida/o y esperando, manteniendo un hilo invisible de control sobre ti.'
  },
  {
    id: '85',
    text: 'Sientes que tu felicidad "le molesta" y que solo está contento/a cuando tú estás triste, enferma o derrotada. ¿Es real?',
    options: [
      'No, es mi imaginación',
      'Suministro negativo: tu dolor le da poder',
      'Es que es una persona muy empática con el dolor',
      'Solo quiere cuidarme cuando estoy mal'
    ],
    correctAnswer: 1,
    difficulty: 10,
    explanation: 'Ver que tiene el poder de arruinar tu día o tu salud le confirma su importancia. Tu debilidad es su fuerza; tu tristeza es el alimento de su ego.'
  },
  {
    id: '86',
    text: 'Tu pareja te dice que "todos tus amigos son unos hipócritas" y que "solo él/ella te dice la verdad". ¿Qué busca?',
    options: [
      'Sinceridad radical',
      'Romper vínculos de confianza externos',
      'Protección ante malas influencias',
      'Ayudarme a elegir mejor mis amistades'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Al sembrar la duda sobre los demás, te empuja a confiar ciegamente en él/ella. Es el primer paso para un aislamiento total y una manipulación sin filtros.'
  },
  {
    id: '87',
    text: 'Notas que el narcisista copia tus gestos, tus gustos musicales e incluso tu forma de hablar al principio de la relación. ¿Cómo se llama?',
    options: [
      'Almas gemelas',
      'Mirroring (Efecto Espejo): técnica de seducción para que creas que es tu pareja ideal',
      'Mimetismo romántico',
      'Admiración profunda'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'No es que seáis iguales, es que está reflejando tu propia personalidad para que te enamores de ti misma/o proyectada en él/ella. Es una identidad robada temporalmente.'
  },
  {
    id: '88',
    text: 'Tras una pelea, te dice: "Si tanto te molesto, ¿por qué no me dejas?". ¿Qué busca?',
    options: [
      'Darme libertad',
      'Que le ruegues que se quede y le valides su importancia (Descarte Inverso)',
      'Es una pregunta lógica',
      'Quiere terminar la relación'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Es un reto manipulador. Sabe que estás enganchada/o y busca que seas tú quien luche por la relación, dándole a él/ella todo el poder y la posición de "deseado/a".'
  },
  {
    id: '89',
    text: '¿Qué ocurre si intentas aplicar la técnica de la Piedra Gris con un narcisista muy agresivo?',
    options: [
      'Que se calmará inmediatamente',
      'Puede aumentar su agresividad para intentar forzar una reacción emocional en ti',
      'Que se irá para siempre',
      'Que se volverá más cariñoso'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'La Piedra Gris puede ser peligrosa si el abusador es violento. Al no recibir su "dosis" de drama, puede escalar el abuso para recuperarla. Úsala con precaución y plan de seguridad.'
  },
  {
    id: '90',
    text: 'Tu pareja te dice que "eres demasiado perfecta/o" y que "le das miedo". ¿Qué está haciendo?',
    options: [
      'Un cumplido extraño',
      'Future faking e idealización extrema',
      'Admiración sincera',
      'Inseguridad real'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Te pone en un pedestal tan alto que la caída será más dolorosa. Es una forma de atraparte en una imagen de ti misma que querrás mantener a toda costa, incluso aguantando abusos.'
  },
  {
    id: '91',
    text: 'Notas que el narcisista nunca te pregunta "¿Cómo estás?" o "¿Cómo te ha ido el día?" de forma genuina. ¿Por qué?',
    options: [
      'Es muy despistado/a',
      'Tu mundo interno no le interesa, solo lo que puedes hacer por él/ella',
      'Porque ya lo sabe todo de mí',
      'Es poco hablador/a'
    ],
    correctAnswer: 1,
    difficulty: 4,
    explanation: 'Para un narcisista, las otras personas son "objetos" con funciones, no seres con sentimientos. No preguntan porque realmente no les importa la respuesta.'
  },
  {
    id: '92',
    text: '¿Qué es el "Hoovering de Cumpleaños"?',
    options: [
      'Un regalo sorpresa',
      'Contactar contigo en tu cumpleaños tras meses de silencio para reengancharte',
      'Limpiar la casa el día de tu cumple',
      'Una fiesta sorpresa'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Aprovechan fechas vulnerables para "aparecer" con un mensaje inocente. Buscan ver si todavía tienen acceso a ti y si pueden romper tu contacto cero.'
  },
  {
    id: '93',
    text: 'Te dice que "él/ella es la única persona que te dice las cosas claras por tu bien". ¿Qué es?',
    options: [
      'Sinceridad brutal necesaria',
      'Sincericidio para devaluación y control',
      'Amor exigente',
      'Crítica constructiva'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Disfraza sus insultos y ataques de "honestidad". Es una forma de destruirte por dentro mientras finge que te está ayudando a "mejorar".'
  },
  {
    id: '94',
    text: '¿Por qué los narcisistas suelen volver con sus ex parejas años después?',
    options: [
      'Porque el amor nunca muere',
      'Porque son fuentes de suministro conocidas que ya saben cómo manipular',
      'Porque han cambiado y quieren redimirse',
      'Por nostalgia'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Para ellos, las personas son como libros en una estantería. Si no tienen nada nuevo que leer, vuelven a los antiguos porque saben exactamente qué botones pulsar.'
  },
  {
    id: '95',
    text: '¿Qué es el "Vínculo de Trauma" (Trauma Bond)?',
    options: [
      'Una amistad forjada en la adversidad',
      'Una adicción emocional al abusador creada por el refuerzo intermitente',
      'Un trauma compartido con la pareja',
      'Amor incondicional'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es lo que te mantiene unida/o a alguien que te hace daño. La alternancia de dolor y migajas de amor crea una dependencia química similar a la de la heroína.'
  },
  {
    id: '96',
    text: 'Tu pareja te dice que "te inventas las cosas" incluso cuando tienes capturas de pantalla o pruebas. ¿Nivel de Gaslighting?',
    options: [
      'Leve malentendido',
      'Gaslighting extremo: negar evidencia física',
      'Mala memoria visual',
      'Confusión de archivos'
    ],
    correctAnswer: 1,
    difficulty: 10,
    explanation: 'Es la forma más agresiva de Gaslighting. No importa la verdad ni las pruebas; lo único que importa es que tú aceptes SU versión de la realidad.'
  },
  {
    id: '97',
    text: '¿Qué siente un narcisista cuando ve que su víctima por fin es feliz y ha sanado sin él/ella?',
    options: [
      'Alegría y paz',
      'Rabia narcisista y deseo de sabotear esa felicidad para recuperar el control',
      'Indiferencia',
      'Arrepentimiento'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Tu felicidad es un insulto para ellos. Significa que no eran tan necesarios como creían y que han perdido su poder. Intentarán aparecer para "arruinarte" el momento.'
  },
  {
    id: '98',
    text: '¿Cuál es el primer paso para salir de una relación narcisista?',
    options: [
      'Convencerle de que vaya a terapia',
      'Informarse y romper la disonancia cognitiva (aceptar que es un abusador)',
      'Esperar a que él/ella te deje',
      'Pedirle perdón por última vez'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'No puedes salir de una trampa que no ves. Entender las tácticas y aceptar que la persona que "amabas" no existe es el paso más duro pero necesario para la libertad.'
  },
  {
    id: '99',
    text: 'Tu pareja te dice que "nadie te entenderá como él/ella" porque "tienes un pasado muy oscuro". ¿Qué hace?',
    options: [
      'Me acepta como soy',
      'Usar tu pasado para aislarte y monopolizar tu apoyo',
      'Es muy comprensivo/a',
      'Me ayuda a sanar'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Usa tu historia personal como una cadena. Te hace creer que eres "defectuosa/o" y que tienes suerte de tenerle, impidiendo que busques relaciones sanas.'
  },
  {
    id: '100',
    text: '¿Qué es el "Descarte" narcisista?',
    options: [
      'Tirar la basura',
      'Abandono repentino y cruel de la víctima cuando ya no es útil o ha sido "vaciada"',
      'Un juego de cartas',
      'Irse de vacaciones solo'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Es el final del ciclo. Una vez que te han devaluado y ya no les das el suministro que quieren, te desechan sin ninguna empatía, a menudo por una nueva víctima ya preparada.'
  },
  // 101-150: Recuperación, Límites y Casos Específicos
  {
    id: '101',
    text: '¿Cuál es el objetivo principal del "Contacto Cero"?',
    options: [
      'Que el narcisista se dé cuenta de lo que ha perdido y vuelva',
      'Desintoxicarte emocionalmente y romper el vínculo de trauma',
      'Hacerle daño ignorándole',
      'Demostrar que eres más fuerte'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'El contacto cero no es para manipular al otro, sino para protegerte a ti. Es el espacio necesario para que tu sistema nervioso se calme y puedas empezar a ver la realidad sin la niebla mental del abuso.'
  },
  {
    id: '102',
    text: 'Tu ex pareja narcisista te envía un mensaje: "He soñado contigo, espero que estés bien". ¿Qué deberías hacer si aplicas Contacto Cero?',
    options: [
      'Responder educadamente que estoy bien',
      'Bloquear y no responder (ignorar el cebo)',
      'Preguntarle qué ha soñado por curiosidad',
      'Decirle que no me escriba más'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Cualquier respuesta, incluso una negativa, le da el suministro que busca: saber que todavía tiene impacto en ti. El silencio absoluto es tu única defensa real.'
  },
  {
    id: '103',
    text: 'Sientes una culpa inmensa por haber reaccionado con gritos o insultos tras meses de provocaciones. ¿Cómo se llama esto?',
    options: [
      'Abuso mutuo',
      'Ira Reactiva: una reacción normal a un entorno anormal de abuso',
      'Que me he vuelto como él/ella',
      'Falta de control emocional'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'El abusador te empuja al límite hasta que estallas, y luego usa esa explosión para decir que TÚ eres el abusador. No es abuso mutuo, es una defensa desesperada de tu sistema ante el maltrato constante.'
  },
  {
    id: '104',
    text: 'Tu nueva cita te cuenta en la primera cena que "todas sus ex eran unas locas que le engañaron". ¿Qué señal es esta?',
    options: [
      'Honestidad y vulnerabilidad',
      'Red Flag (Bandera Roja): incapacidad de autocrítica y posible proyección',
      'Mala suerte crónica',
      'Sinceridad radical'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Si alguien no asume ninguna responsabilidad en sus fracasos pasados y demoniza a todas sus ex parejas, es casi seguro que el problema era él. Tú serás la siguiente "loca" en su lista.'
  },
  {
    id: '105',
    text: '¿Qué es el "Gaslighting por Omisión"?',
    options: [
      'No decir nada durante días',
      'Ocultar información clave deliberadamente',
      'Olvidar cosas sin querer',
      'No hablar de los problemas'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'No solo mienten diciendo cosas falsas, también mienten ocultando la verdad. Esto te deja en una posición de vulnerabilidad donde no puedes confiar en tu propia toma de decisiones.'
  },
  {
    id: '106',
    text: 'Tu pareja te dice que "te ha ayudado a ser quien eres" y que "sin él/ella estarías perdida". ¿Qué busca?',
    options: [
      'Reconocimiento a su apoyo',
      'Apropiarse de tu crecimiento y generar dependencia',
      'Motivarme para seguir adelante',
      'Un cumplido'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Busca que sientas que tus éxitos no son tuyos, sino una concesión de su parte. Es una forma de mantenerte pequeña/o y agradecida/o por su supuesta "guía".'
  },
  {
    id: '107',
    text: '¿Cómo reacciona un narcisista cuando intentas establecer un límite sano (ej: "no quiero que me hables así")?',
    options: [
      'Pidiendo perdón y cambiando',
      'Escalando el conflicto, burlándose o haciéndose la víctima',
      'Ignorando el comentario',
      'Aceptando el límite con madurez'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Los límites son vistos como un desafío a su control. Reaccionarán con rabia ("¿quién te crees que eres?") o victimismo ("me tratas como a un monstruo") para que retires el límite.'
  },
  {
    id: '108',
    text: 'Sientes que tienes que "pedir permiso" para cosas básicas como comprarte ropa, ir al médico o ver a un amigo. ¿Qué ha pasado?',
    options: [
      'Somos una pareja muy compenetrada',
      'Infantilización: el narcisista te ha quitado tu autonomía de adulto',
      'Es por respeto mutuo',
      'Es que soy muy indecisa'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Mediante la crítica y el control constante, te ha hecho creer que no eres capaz de tomar decisiones por ti misma/o, obligándote a consultar todo para evitar su enfado.'
  },
  {
    id: '109',
    text: 'Tu pareja se queja de que "nunca le das suficiente amor" o que "siempre estás cansada", ignorando que trabajas y cuidas la casa. ¿Qué es?',
    options: [
      'Necesidad de más cariño',
      'Suministro insaciable: nada de lo que hagas será nunca suficiente para su ego',
      'Falta de tiempo de calidad',
      'Deseo de conexión'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El narcisista es un pozo sin fondo. No importa cuánto te sacrifiques, siempre te pedirá más y te culpará por sus sentimientos de vacío interno.'
  },
  {
    id: '110',
    text: '¿Qué es el "Amor Condicional" en una familia narcisista?',
    options: [
      'Amor que se da solo si el hijo cumple las expectativas del padre',
      'Amor con normas básicas de convivencia',
      'Amor que dura poco tiempo',
      'Amor que se demuestra con regalos'
    ],
    correctAnswer: 0,
    difficulty: 7,
    explanation: 'No te quieren por quien eres, sino por lo que haces por ellos o cómo les haces quedar ante los demás. Si fallas o muestras tu propia personalidad, el "amor" se retira.'
  },
  {
    id: '111',
    text: 'Has notado que tu pareja es "amable" con otras personas delante de ti solo para que tú te sientas mal por no ser tan "buena" como ellos. ¿Técnica?',
    options: [
      'Me enseña con el ejemplo',
      'Triangulación de bondad para devaluarte',
      'Es que los demás son mejores',
      'Es muy sociable'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Usa a terceros para enviarte el mensaje de que eres insuficiente. "Mira qué maja es Fulanita, no como tú que siempre estás de mal humor".'
  },
  {
    id: '112',
    text: 'Tu pareja te dice que "nadie más aguantaría tus problemas de ansiedad", cuando es él/ella quien te los provoca. ¿Qué es?',
    options: [
      'Apoyo incondicional',
      'Crear el problema y vender la solución (gaslighting)',
      'Es verdad, soy una carga',
      'Es muy paciente'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Te rompe los nervios y luego se presenta como la única persona dispuesta a estar con alguien "tan roto". Es una forma de encadenarte a tu verdugo.'
  },
  {
    id: '113',
    text: '¿Qué es el "Vampirismo Emocional"?',
    options: [
      'Una película de miedo',
      'Drenar la energía de los demás para alimentar el propio ego',
      'Estar muy cansado después de socializar',
      'Tener mucha empatía'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Los narcisistas se alimentan de tus emociones (ya sean de alegría o de dolor). Te dejan exhausta/o mientras ellos parecen recargarse con el drama o tu atención.'
  },
  {
    id: '114',
    text: 'Notas que tu pareja se burla de tus sueños y proyectos, llamándolos "fantasías" o "pérdida de tiempo". ¿Por qué?',
    options: [
      'Quiere que sea realista',
      'Miedo a que tu éxito te dé la independencia necesaria para dejarle',
      'No tiene fe en mis capacidades',
      'Es por mi bien económico'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Tu crecimiento es su amenaza. Si logras tus sueños, tendrás más autoestima y recursos, y serás más difícil de manipular y controlar.'
  },
  {
    id: '115',
    text: 'Tu pareja te ha convencido de que dejes tu trabajo para "cuidar de la familia", pero ahora te humilla porque "no aportas dinero". ¿Trampa?',
    options: [
      'Mala suerte financiera',
      'Creación de dependencia económica para el control total',
      'Es que las cosas han cambiado',
      'Falta de comunicación'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Te empuja a una situación de vulnerabilidad y luego usa esa misma vulnerabilidad para atacarte y recordarte tu posición de inferioridad.'
  },
  {
    id: '116',
    text: '¿Cómo se siente la "Disonancia Cognitiva" en una relación de abuso?',
    options: [
      'Confusión entre el "Dr. Jekyll" del principio y el "Mr. Hyde" de ahora',
      'Saber que te miente pero querer creerle igual',
      'Tener dos pensamientos contradictorios a la vez sobre la misma persona',
      'Todas las anteriores'
    ],
    correctAnswer: 3,
    difficulty: 10,
    explanation: 'Es el estado mental más doloroso: amar a la máscara mientras sufres al abusador. Tu cerebro intenta reconciliar ambas versiones para no volverse loco, lo que te mantiene atrapada/o.'
  },
  {
    id: '117',
    text: 'Tu pareja te acusa de "hacerle sentir mal" cada vez que intentas hablar de algo que él/ella ha hecho mal. ¿Qué hace?',
    options: [
      'Es muy sensible al dolor ajeno',
      'DARVO: inversión de roles',
      'Tengo que ser más suave hablando',
      'Es que le duele fallarme'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Es la técnica DARVO: Deny (Negar), Attack (Atacar), and Reverse Victim and Offender (Invertir Víctima y Agresor). Acabas tú consolándole a él por haberle pillado en una falta.'
  },
  {
    id: '118',
    text: '¿Qué es el "Hoovering Maligno"?',
    options: [
      'Aspirar la casa con mala cara',
      'Reaparecer solo para comprobar que todavía puede hacerte daño y luego volverte a dejar',
      'Insultarte por redes sociales',
      'No devolverte tus cosas'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'A veces no vuelven para recuperarte, sino para ver si todavía pueden destruirte. Si respondes y ven que todavía te importa, se van satisfechos habiendo reabierto tu herida.'
  },
  {
    id: '119',
    text: 'Tu pareja te dice que "eres la única persona que le entiende", aislándote de los demás. ¿Qué sentimiento busca generar?',
    options: [
      'Orgullo y exclusividad',
      'Responsabilidad mesiánica (sentir que eres su salvadora)',
      'Amor profundo',
      'Compasión'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Al hacerte sentir "especial" por ser la única que le entiende, te carga con la responsabilidad de su salud mental, haciendo que sea casi imposible dejarle sin sentir que le "abandonas".'
  },
  {
    id: '120',
    text: '¿Por qué un narcisista suele arruinar las vacaciones o los viajes?',
    options: [
      'Porque el estrés del viaje le afecta mucho',
      'Porque no puede controlar el entorno y necesita reafirmar su poder mediante el caos',
      'Porque no le gusta viajar',
      'Por mala suerte'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'En vacaciones el foco está en el placer y la relajación mutua. El narcisista necesita ser el centro de atención; si no lo es por algo bueno, lo será por crear un drama inolvidable.'
  },
  {
    id: '121',
    text: 'Notas que tu pareja trata de "imitar" tus virtudes delante de otros para llevarse el mérito de tu personalidad. ¿Qué es?',
    options: [
      'Admiración profunda',
      'Robo de identidad emocional (mirroring invertido)',
      'Que nos parecemos mucho',
      'Aprendizaje social'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Te "vacía" de tus rasgos positivos para ponérselos él/ella como una máscara ante los demás, mientras a ti te deja solo con las inseguridades que te ha implantado.'
  },
  {
    id: '122',
    text: '¿Qué es el "Aislamiento Geográfico"?',
    options: [
      'Vivir en una isla',
      'Convencerte de mudarte lejos de tu familia y amigos para que dependas solo de él/ella',
      'No tener coche',
      'Vivir en el campo'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Es una táctica física de control. Sin tu red de apoyo cerca, el abuso puede escalar sin que nadie lo vea y sin que tú tengas un lugar fácil a donde huir.'
  },
  {
    id: '123',
    text: 'Tu pareja te dice que "nadie te creerá" si cuentas lo que pasa en casa porque "todos le adoran". ¿Qué busca?',
    options: [
      'Advertirme de la realidad',
      'Generar indefensión y miedo al juicio social',
      'Protección de su imagen',
      'Es verdad, nadie me cree'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Usa su máscara pública como un escudo contra la verdad. Busca que te sientas sola y loca, para que ni siquiera intentes pedir ayuda.'
  },
  {
    id: '124',
    text: '¿Qué es el "Refuerzo Intermitente"?',
    options: [
      'Ir al gimnasio de vez en cuando',
      'Alternar momentos de amor extremo con momentos de abuso sin patrón lógico',
      'Dar premios solo en Navidad',
      'Castigar poco'
    ],
    correctAnswer: 1,
    difficulty: 10,
    explanation: 'Es la técnica de adicción más potente. Como no sabes cuándo vendrá el "premio" (el amor), te quedas esperando y aguantando el abuso, igual que un ludópata ante una máquina tragaperras.'
  },
  {
    id: '125',
    text: 'Sientes que tienes que "justificar" el mal comportamiento de tu pareja ante tus amigos. ¿Qué indica?',
    options: [
      'Que soy muy leal',
      'Que estás en la fase de negación de la disonancia cognitiva',
      'Que mis amigos son muy criticones',
      'Que él/ella tiene motivos para ser así'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Si tienes que explicar constantemente por qué "en el fondo es bueno", es que estás intentando convencerte a ti misma/o de algo que tus ojos ya ven que no es cierto.'
  },
  {
    id: '126',
    text: 'Tu pareja te dice que "eres la persona más difícil que ha conocido". ¿Objetivo?',
    options: [
      'Sinceridad sobre nuestra relación',
      'Proyectar su propia toxicidad en ti para que tú seas "el problema"',
      'Hacerme reflexionar sobre mi carácter',
      'Un reto amoroso'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Es una forma de Gaslighting. Él/ella crea el conflicto, pero te dice que el conflicto existe porque tú eres "difícil", quitándose toda responsabilidad.'
  },
  {
    id: '127',
    text: '¿Qué es el "Cierre por Indiferencia"?',
    options: [
      'No despedirse',
      'Aceptar que nunca entenderás al narcisista y dejar de buscar respuestas',
      'Odiarle mucho',
      'Bloquearle en todas partes'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'El verdadero cierre no viene de una conversación con el abusador (que solo mentirá), sino de tu propia decisión de que ya no te importa lo que piense, haga o diga.'
  },
  {
    id: '128',
    text: 'Notas que tu pareja trata de "competir" contigo incluso en cosas absurdas (quién está más cansado, quién ha sufrido más). ¿Por qué?',
    options: [
      'Es muy competitivo/a por naturaleza',
      'Necesidad de ser siempre la "víctima mayor" o el "héroe mayor"',
      'Es falta de sueño',
      'Quiere superarse'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'No soportan que tus sentimientos o necesidades eclipsen los suyos. Si tú estás mal, ellos deben estar peor para recuperar el foco de atención y los cuidados.'
  },
  {
    id: '129',
    text: '¿Por qué el narcisista te llama "egoísta" cuando por fin empiezas a cuidar de ti misma/o?',
    options: [
      'Porque realmente lo soy ahora',
      'Porque ya no eres útil para sus intereses y estás poniendo límites',
      'Porque se siente abandonado/a',
      'Porque quiere que compartamos más'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'En el diccionario narcisista, "egoísta" significa "alguien que no hace lo que yo quiero". Tu autocuidado es una amenaza directa a su suministro de control.'
  },
  {
    id: '130',
    text: '¿Qué es el "Mono Volador Benévolo"?',
    options: [
      'Un mono que ayuda',
      'Instigador “benévolo” que te empuja a perdonar',
      'Un psicólogo',
      'Un amigo neutral'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Son personas que, a veces sin mala intención, invalidan tu dolor y te presionan para que vuelvas al ciclo de abuso, convirtiéndose en cómplices del narcisista.'
  },
  {
    id: '131',
    text: 'Tu pareja te dice que "eres igual que tu madre/padre" (a quien tú detestas o temes). ¿Qué busca?',
    options: [
      'Ayudarme a ver mis sombras',
      'Herirte en lo más profundo comparándote con tu mayor trauma',
      'Es una observación genética',
      'Sinceridad brutal'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es un ataque quirúrgico. Usa tus heridas de la infancia para desestabilizarte y hacerte sentir que estás "condenada/o" a ser como lo que más odias.'
  },
  {
    id: '132',
    text: '¿Cómo afecta el abuso narcisista a la memoria a corto plazo?',
    options: [
      'No afecta',
      'La deteriora debido al cortisol alto y al estrés crónico del Gaslighting',
      'La mejora para recordar los insultos',
      'Solo afecta si hay golpes'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Vivir en un estado de alerta constante daña el hipocampo. Por eso muchas víctimas sienten que "están perdiendo la cabeza" o que no pueden concentrarse en nada.'
  },
  {
    id: '133',
    text: '¿Qué es la "Falsa Vulnerabilidad"?',
    options: [
      'Llorar de verdad',
      'Fingir debilidad o contar traumas para atrapar tu empatía y que no te vayas',
      'Ser muy tímido',
      'Tener miedo'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Es el cebo del "pobre de mí". Lloran lágrimas de cocodrilo para que sientas pena y olvides el abuso que acaban de cometer. Es pura manipulación teatral.'
  },
  {
    id: '134',
    text: 'Tu pareja te dice que "tienes mucha suerte de que te haya elegido a ti". ¿Qué mensaje envía?',
    options: [
      'Que soy especial para él/ella',
      'Que él/ella es superior y tú eres un subordinado afortunado',
      'Es un cumplido romántico',
      'Gratitud'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Establece una jerarquía de poder. Él/ella es el premio y tú eres el afortunado que debe esforzarse cada día por mantener su favor.'
  },
  {
    id: '135',
    text: '¿Por qué el narcisista odia que tengas éxito en tus hobbies?',
    options: [
      'Porque ocupan tiempo que deberías dedicarle a él/ella',
      'Porque te dan una identidad y satisfacción fuera de su control',
      'Porque le dan envidia tus talentos',
      'Todas las anteriores'
    ],
    correctAnswer: 3,
    difficulty: 8,
    explanation: 'Cualquier fuente de alegría o validación que no venga de él/ella es una competencia que debe ser eliminada o saboteada.'
  },
  {
    id: '136',
    text: '¿Qué es el "Tratamiento de Silencio Preventivo"?',
    options: [
      'No hablar antes de desayunar',
      'Dejar de hablarte antes de que tú puedas quejarte de algo, para que tengas miedo de hacerlo',
      'Meditación en pareja',
      'Paz y tranquilidad'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es una forma de "entrenamiento". Te castiga con el silencio ante la mínima señal de que vas a poner un límite, para que aprendas a callarte y obedecer.'
  },
  {
    id: '137',
    text: '¿Qué sientes cuando aplicas la técnica de "Piedra Gris" correctamente?',
    options: [
      'Mucho poder y control',
      'Paz, pero también aburrimiento y una sensación de ser un robot',
      'Felicidad extrema',
      'Miedo'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'No es una técnica para ser feliz, sino para sobrevivir. Te protege de los ataques, pero requiere anular tu propia expresividad, por lo que solo debe ser temporal.'
  },
  {
    id: '138',
    text: '¿Cómo reacciona un narcisista ante una enfermedad grave de su pareja?',
    options: [
      'Cuidándola con devoción',
      'Victimizarse, ignorar o abandonar',
      'Buscando los mejores médicos',
      'Llorando mucho'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Una enfermedad grave te quita la capacidad de darle suministro y requiere que él/ella te cuide. Al no obtener beneficio, muchos narcisistas descartan a su pareja en este momento.'
  },
  {
    id: '139',
    text: 'Tu pareja te dice que "nadie te va a decir las verdades como él/ella". ¿Qué es esto?',
    options: [
      'Sinceridad radical necesaria',
      'Ataques disfrazados de honestidad',
      'Amor exigente',
      'Crítica constructiva'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Usa la palabra "verdad" para validar sus insultos. Busca que creas que su visión negativa de ti es la única real y que los demás te mienten por educación.'
  },
  {
    id: '140',
    text: '¿Qué es la "Triangulación con la Nueva Víctima"?',
    options: [
      'Presentarte a su nueva pareja',
      'Hacerte saber lo feliz que es con la nueva persona para que sientas que el problema eras tú',
      'Tener una relación de tres',
      'Compararte con su ex'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Es el golpe final tras el descarte. Exhibe a la nueva persona como "la definitiva" para destruirte por dentro y hacerte creer que él/ella sí puede ser feliz con alguien que no seas tú.'
  },
  {
    id: '141',
    text: '¿Qué es el "Hoovering Silencioso"?',
    options: [
      'No hablar',
      'Mirar tus historias de redes sociales, pasar por tu casa o dar "likes" sin hablarte',
      'Limpiar en silencio',
      'Estar en la misma habitación sin hablar'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Es una forma de decir "estoy aquí, todavía te vigilo". Busca generarte ansiedad y que seas tú quien rompa el silencio por la presión de su presencia invisible.'
  },
  {
    id: '142',
    text: 'Sientes que tienes que "salvar" al narcisista de su propia oscuridad. ¿Qué rol estás adoptando?',
    options: [
      'Héroe/Heroína de cuento',
      'Codependiente en el rol de salvador (Triángulo de Karpman)',
      'Pareja ideal',
      'Buen samaritano'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El narcisista explota este deseo de ayudar. Mientras tú intentas "arreglarle", él/ella tiene vía libre para seguir abusando de ti, porque siempre tienes una excusa para su comportamiento.'
  },
  {
    id: '143',
    text: '¿Por qué el narcisista te odia más cuanto más le ayudas?',
    options: [
      'Porque es un malagradecido',
      'Porque tu ayuda le recuerda que es inferior o que necesita a alguien, dañando su ego',
      'Porque no quiere que le ayuden',
      'Porque la ayuda es mala'
    ],
    correctAnswer: 1,
    difficulty: 10,
    explanation: 'Tu bondad y competencia son un espejo de su propia incapacidad. Al ayudarle, le demuestras que tú eres "más" que él/ella en ese aspecto, y eso provoca su rabia.'
  },
  {
    id: '144',
    text: '¿Qué es la "Identidad Prestada"?',
    options: [
      'Tener un DNI falso',
      'Cuando la víctima empieza a adoptar los gustos y opiniones del narcisista para evitar conflictos',
      'Parecerse a un actor',
      'No tener personalidad'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Es una táctica de supervivencia. Anulas quién eres y te conviertes en un espejo de lo que él/ella quiere, esperando que así te deje de atacar (cosa que nunca sucede).'
  },
  {
    id: '145',
    text: 'Tu pareja te dice que "exageras" cuando le pides que no te insulte. ¿Qué hace?',
    options: [
      'Me ayuda a ser más fuerte',
      'Minimización e invalidación (Gaslighting básico)',
      'Tiene razón, me lo tomo muy a pecho',
      'Es su forma de hablar'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Al decir que exageras, convierte SU agresión en un problema de TU reacción. Deja de ser un insulto para pasar a ser "tu hipersensibilidad".'
  },
  {
    id: '146',
    text: '¿Qué es el "Descarte de Amistad"?',
    options: [
      'Perder un amigo',
      'Cuando un amigo narcisista te deja de hablar porque ya no eres "popular" o útil para él',
      'Tener pocos amigos',
      'Pelearse con alguien'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Los amigos narcisistas te usan como trofeo o como fuente de favores. En cuanto dejas de brillar o de servirles, desaparecen sin dar explicaciones por una "mejor opción".'
  },
  {
    id: '147',
    text: '¿Por qué el narcisista siempre tiene que tener la última palabra en una discusión?',
    options: [
      'Porque tiene mejores argumentos',
      'Porque para su ego, terminar la conversación significa que ha "ganado" y tiene el control',
      'Porque es muy hablador/a',
      'Por cortesía'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'No buscan la verdad ni la solución, solo la victoria. La última palabra es el sello final de su dominio sobre la situación y sobre ti.'
  },
  {
    id: '148',
    text: '¿Qué es el "Amor Bombing" de disculpa?',
    options: [
      'Regalar flores tras una pelea',
      'Una explosión de afecto y promesas tras un abuso grave para que no te vayas',
      'Pedir perdón de rodillas',
      'Un acto de arrepentimiento real'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Es la fase de "luna de miel" del ciclo de abuso. No es amor, es una maniobra de rescate para que olvides lo que pasó y vuelvas a bajar la guardia.'
  },
  {
    id: '149',
    text: 'Tu pareja te dice que "él/ella es el único que te soporta". ¿Qué busca crear?',
    options: [
      'Gratitud eterna',
      'Indefensión aprendida y aislamiento',
      'Amor profundo',
      'Sentido del humor'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Busca que creas que eres una persona defectuosa y que fuera de la relación solo hay soledad y rechazo. Es la mentira que te mantiene en la jaula.'
  },
  {
    id: '150',
    text: '¿Cuál es la señal más clara de que estás sanando del abuso narcisista?',
    options: [
      'Que ya no le odias, sino que te da lástima o indiferencia',
      'Que has conseguido que te pida perdón',
      'Que sabes todo sobre el narcisismo',
      'Que has encontrado una nueva pareja rápido'
    ],
    correctAnswer: 0,
    difficulty: 9,
    explanation: 'La indiferencia es la meta final. Cuando sus acciones ya no te provocan una reacción emocional intensa, has recuperado tu poder y tu libertad mental.'
  },
  // 151-200: Casos Específicos, Salud Mental y Recuperación Avanzada
  {
    id: '151',
    text: 'Tu pareja te promete que irá a terapia de pareja, pero allí manipula al terapeuta para que crea que tú eres el problema. ¿Qué ha pasado?',
    options: [
      'El terapeuta es malo',
      'Triangulación terapéutica: usa al profesional para validarse y atacarte más fuerte',
      'Es que yo tengo la culpa',
      'Es un proceso normal'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es muy común. Los narcisistas son encantadores y manipulan a los terapeutas no especializados para convertirlos en aliados contra la víctima.'
  },
  {
    id: '152',
    text: 'Sientes que tu cuerpo reacciona con ansiedad o dolor de estómago cada vez que recibes un mensaje suyo, incluso si el texto es "neutro". ¿Qué es?',
    options: [
      'Indigestión',
      'Memoria somática del trauma: tu cuerpo recuerda el peligro antes que tu mente',
      'Es emoción por verle',
      'Casualidad'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El cuerpo lleva la cuenta. Tu sistema nervioso ha asociado a esa persona con amenaza y dolor, activando la respuesta de lucha/huida automáticamente.'
  },
  {
    id: '153',
    text: '¿Por qué el narcisista te acusa de "vivir en el pasado" cuando sacas a relucir un abuso no resuelto?',
    options: [
      'Porque hay que mirar al futuro',
      'Para evadir responsabilidad y silenciarte (Gaslighting temporal)',
      'Porque tiene mala memoria',
      'Para ayudarte a avanzar'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Quieren borrar sus crímenes sin pagar la condena. Si te hacen sentir culpable por "recordar", evitan tener que pedir perdón o cambiar.'
  },
  {
    id: '154',
    text: 'Tu pareja te dice que "todos sus ex estaban locos/as". ¿Qué probabilidad hay de que sea verdad?',
    options: [
      'Alta, atrae a gente loca',
      'Nula. Es una proyección y una campaña de difamación para ocultar que él/ella era el abusador',
      'Media, hay mucha gente mal',
      'Es mala suerte'
    ],
    correctAnswer: 1,
    difficulty: 5,
    explanation: 'Es el marcador más claro de un narcisista. Si todos los demás son el problema, el único denominador común es él/ella.'
  },
  {
    id: '155',
    text: '¿Qué es el "Narcisismo Comunal"?',
    options: [
      'Vivir en comuna',
      'Suministro narcisista: generoso en público, cruel en privado',
      'Compartir cosas',
      'Ser muy sociable'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Son los "santos" de cara a la galería. Hacen caridad para recibir aplausos, no por bondad. En casa, suelen ser tiranos que exigen adoración.'
  },
  {
    id: '156',
    text: 'Te sientes incapaz de tomar decisiones sencillas (qué comer, qué ropa ponerte) sin consultarle o pensar en qué diría él/ella. ¿Consecuencia?',
    options: [
      'Dependencia emocional extrema y anulación del yo',
      'Es que valoro mucho su opinión',
      'Indecisión crónica',
      'Respeto a la pareja'
    ],
    correctAnswer: 0,
    difficulty: 8,
    explanation: 'Han criticado tanto tus elecciones pasadas que has dejado de confiar en tu criterio. Tu "brújula interna" ha sido sustituida por su aprobación.'
  },
  {
    id: '157',
    text: '¿Qué es el "Síndrome de la Víctima Narcisista" (o Síndrome de Abuso Narcisista)?',
    options: [
      'Inventarse que eres víctima',
      'Un conjunto de síntomas (ansiedad, TEPT, baja autoestima, duda) resultantes del abuso psicológico sistemático',
      'Querer llamar la atención',
      'Ser muy débil'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'No es que seas débil, es que has sido sometido/a a una guerra psicológica invisible que deja secuelas reales en tu cerebro y sistema nervioso.'
  },
  {
    id: '158',
    text: 'Tu pareja te ignora cuando estás enfermo/a o necesitas ayuda, pero exige atención total si le duele una uña. ¿Qué falta aquí?',
    options: [
      'Medicinas',
      'Reciprocidad y empatía afectiva',
      'Tiempo libre',
      'Paciencia'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'La relación con un narcisista es unidireccional. Tú eres el cuidador, él/ella es el rey/reina. Tus necesidades son una molestia para su agenda.'
  },
  {
    id: '159',
    text: '¿Qué pasa si le das una "segunda oportunidad" a un narcisista sin que haya hecho terapia real y profunda?',
    options: [
      'Que todo irá bien',
      'Que el ciclo de abuso se repetirá, pero más rápido y con más intensidad',
      'Que cambiará por amor',
      'Que será diferente esta vez'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'No aprenden de sus errores, aprenden a manipularte mejor. Si vuelves, le confirmas que su abuso no tiene consecuencias reales, y perderán aún más el respeto por ti.'
  },
  {
    id: '160',
    text: '¿Qué es la "Triangulación con Dios" o espiritual?',
    options: [
      'Rezar juntos',
      'Usar la religión o la espiritualidad para justificar el abuso ("Dios quiere que te sometas", "Es tu karma")',
      'Ir a misa',
      'Ser muy creyente'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es una forma muy dañina de manipulación. Usan dogmas o creencias para que sientas que defenderte es un pecado o una falta espiritual.'
  },
  {
    id: '161',
    text: 'Tu pareja te dice "nadie te va a querer con esos problemas mentales" cuando tú lloras por su maltrato. ¿Táctica?',
    options: [
      'Diagnóstico médico',
      'Estigmatización y amenaza de abandono para generar terror',
      'Consejo de amigo',
      'Verdad dolorosa'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Te rompen las piernas y luego se burlan de que no puedes caminar. Provocan tu inestabilidad y luego la usan para invalidarte y aislarte.'
  },
  {
    id: '162',
    text: '¿Por qué el narcisista te hace esperar siempre (llegando tarde, tardando en contestar)?',
    options: [
      'Es muy ocupado',
      'Juego de poder: tu tiempo vale menos que el suyo y él/ella controla el ritmo',
      'Es despistado',
      'Mala gestión del tiempo'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Hacerte esperar es una forma de dominación sutil. Te mantiene en "pausa", pendiente de él/ella, reafirmando que él/ella es quien tiene el control de la interacción.'
  },
  {
    id: '163',
    text: '¿Qué es el "Love Bombing" corporativo o laboral?',
    options: [
      'Regalos de empresa',
      'Promesas de ascensos rápidos, halagos excesivos al entrar ("eres el mejor fichaje") para luego explotarte sin piedad',
      'Buen ambiente laboral',
      'Pagar bien'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Te seducen con un futuro brillante para que aceptes condiciones abusivas, horas extra no pagadas y responsabilidades que no te tocan.'
  },
  {
    id: '164',
    text: 'Sientes vergüenza de contarle a tus amigos lo que pasa en tu relación porque sabes que volverás con él/ella. ¿Qué indica?',
    options: [
      'Que soy reservado/a',
      'El aislamiento autoimpuesto por la disonancia cognitiva y el ciclo de abuso',
      'Que mis amigos son cotillas',
      'Que es una relación privada'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Te aíslas para evitar el juicio de los demás y la vergüenza de tu propia incoherencia (saber que está mal pero no poder dejarlo). El narcisista gana.'
  },
  {
    id: '165',
    text: '¿Qué es la "Ley del Hielo" (Silent Treatment) prolongada?',
    options: [
      'Tener frío',
      'Violencia psicológica: ignorar la existencia del otro para anularlo como persona',
      'Estar callado',
      'Jugar al silencio'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'No es "necesitar espacio". Es castigar tu existencia. Te vuelves invisible para la persona que amas, lo que provoca un dolor cerebral similar al dolor físico.'
  },
  {
    id: '166',
    text: 'Tu pareja te acusa de ser "egoísta" cada vez que haces algo por ti mismo/a (ir al gimnasio, ver a un amigo). ¿Por qué?',
    options: [
      'Porque le abandono',
      'Porque cualquier energía que no gastes en él/ella es "energía robada" según su visión',
      'Porque soy egoísta',
      'Porque me quiere en casa'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El narcisista cree tener derecho exclusivo sobre tu tiempo y energía. Tu autocuidado es visto como una traición a tu deber de servirle.'
  },
  {
    id: '167',
    text: '¿Qué es el "Reflejo Negativo"?',
    options: [
      'Verse mal en el espejo',
      'El narcisista proyecta en ti todas sus cualidades negativas y te convence de que son tuyas',
      'Tener mala suerte',
      'Ser pesimista'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Acabas cargando con SU "basura" psicológica. Tú te sientes el monstruo, el egoísta, el infiel, mientras él/ella se queda limpio de culpa.'
  },
  {
    id: '168',
    text: '¿Por qué te sientes "aburrido/a" con personas sanas y estables después de una relación narcisista?',
    options: [
      'Porque son aburridas de verdad',
      'Porque tu cerebro está adicto a la adrenalina y el drama (adicción al caos)',
      'Porque no hay química',
      'Porque me gusta el riesgo'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'La paz te parece "aburrimiento" porque tu sistema nervioso está desregulado. Necesitas tiempo para "desintoxicarte" y aprender a valorar la calma como amor, no como falta de interés.'
  },
  {
    id: '169',
    text: 'Tu pareja te dice "después de todo lo que he hecho por ti..." para que no le dejes. ¿Qué es?',
    options: [
      'Amor incondicional',
      'Manipulación por deuda y culpa',
      'Recordatorio amable',
      'Verdad'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Convierte la relación en una transacción. Los "favores" que hizo no eran regalos, eran préstamos con intereses impagables de lealtad eterna.'
  },
  {
    id: '170',
    text: '¿Qué es la "Falsa Vulnerabilidad"?',
    options: [
      'Ser débil de mentira',
      'Fingir tristeza o problemas para manipularte y que bajes tus defensas o le perdones',
      'Llorar de verdad',
      'Ser muy sensible'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Saben que la vulnerabilidad activa tu instinto de protección. Llorarán sin lágrimas o se inventarán traumas si ven que estás a punto de irte.'
  },
  {
    id: '171',
    text: '¿Qué es el "Suministro Secundario"?',
    options: [
      'Tener un amante',
      'Otras fuentes de atención (amantes, hijos, trabajo, fans) que mantienen su ego cuando tú fallas',
      'Comer de más',
      'Tener un hobby'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Nunca ponen todos los huevos en la misma cesta. Siempre tienen un "plan B" o una red de admiradores para no quedarse nunca sin su "combustible".'
  },
  {
    id: '172',
    text: 'Sientes que tienes que grabar las conversaciones para demostrarte a ti mismo/a que no estás loco/a. ¿Qué indica?',
    options: [
      'Que soy paranoico/a',
      'Que el Gaslighting es tan severo que desconfías de tu propia memoria y cordura',
      'Que quiero ser espía',
      'Que tengo mala memoria'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es una medida de supervivencia extrema. Cuando tu realidad es negada sistemáticamente, necesitas pruebas externas para anclarte a la verdad.'
  },
  {
    id: '173',
    text: 'Tu pareja te dice que "tienes suerte de que no te pegue" o rompe cosas cerca de ti. ¿Qué es?',
    options: [
      'Control de la ira',
      'Violencia física intimidatoria y amenaza velada',
      'Es muy pasional',
      'Se le resbalan las cosas'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'La violencia contra objetos es violencia contra ti. Es una demostración de fuerza: "mira lo que puedo hacer, la próxima podrías ser tú".'
  },
  {
    id: '174',
    text: '¿Qué es la "Triangulación Perversa"?',
    options: [
      'Un triángulo amoroso',
      'Aliarse con tus propios hijos o familiares en tu contra para dejarte solo/a y sin apoyo',
      'Geometría difícil',
      'Hacer tríos'
    ],
    correctAnswer: 1,
    difficulty: 10,
    explanation: 'Es devastador. Convierte tu refugio (familia/hijos) en territorio enemigo. Busca aislarte totalmente dentro de tu propio hogar.'
  },
  {
    id: '175',
    text: '¿Por qué el narcisista te acusa de ser "tú el narcisista" cuando empiezas a poner límites?',
    options: [
      'Porque tiene razón',
      'Proyección DARVO (Deny, Attack, Reverse Victim and Offender)',
      'Porque he aprendido de él',
      'Porque somos iguales'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Al poner límites, le quitas el control. Su reacción es acusarte de ser "egoísta" o "abusador" para que te sientas culpable y retires el límite.'
  },
  {
    id: '176',
    text: '¿Qué es el "Aspiradora" (Hoovering) navideño?',
    options: [
      'Limpiar en Navidad',
      'Aprovechar la nostalgia de las fiestas para contactarte y arruinar tu progreso',
      'Regalar una aspiradora',
      'Cenar juntos'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Saben que en Navidad estás más vulnerable y sentimental. Un simple "Feliz Navidad" es un anzuelo para ver si picas y vuelves a abrir la puerta.'
  },
  {
    id: '177',
    text: '¿Qué es la "Indiferencia Benigna"?',
    options: [
      'No saludar',
      'El estado de recuperación donde el narcisista ya no te genera ni odio ni amor, solo indiferencia',
      'Ser maleducado',
      'Ignorar a la gente'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Es la meta. El odio sigue siendo un vínculo. La indiferencia es la verdadera libertad: él/ella ya no tiene ningún peso emocional en tu vida.'
  },
  {
    id: '178',
    text: 'Tu pareja te dice que "eres frígida/o" o te compara sexualmente con otros para presionarte. ¿Qué es?',
    options: [
      'Coerción sexual y abuso emocional',
      'Quiere mejorar nuestra vida sexual',
      'Es sincero',
      'Tiene necesidades'
    ],
    correctAnswer: 0,
    difficulty: 9,
    explanation: 'Usar la culpa, la comparación o el insulto para obtener sexo es abuso sexual. Tu cuerpo y tu deseo no deben ser moneda de cambio ni campo de batalla.'
  },
  {
    id: '179',
    text: '¿Qué es el "Síndrome del Impostor" en la víctima?',
    options: [
      'Creer que eres un espía',
      'Sentir que engañas a los demás cuando te dicen que eres buena persona, porque el narcisista te ha convencido de que eres "mala"',
      'No saber trabajar',
      'Mentir sobre tu nombre'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'El narcisista ha reescrito tu autoimagen. Te ves a través de sus ojos distorsionados, sintiéndote un fraude aunque seas una persona maravillosa.'
  },
  {
    id: '180',
    text: '¿Qué es la "Validación Externa" para una víctima en recuperación?',
    options: [
      'Likes en Instagram',
      'Aprender a validarse a sí misma sin necesitar la aprobación del narcisista ni de nadie más',
      'Que te digan guapa',
      'Ganar premios'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'La recuperación pasa por reconstruir tu propio criterio. Que tú sepas que eres valiosa/o es suficiente, sin depender de que otro te lo confirme.'
  },
  {
    id: '181',
    text: '¿Por qué no sirve de nada "desenmascarar" al narcisista públicamente?',
    options: [
      'Porque nadie te creerá',
      'Porque se alimentan del conflicto y se harán las víctimas perfectas, dejándote a ti como el/la "loco/a"',
      'Porque es ilegal',
      'Porque no importa'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Juegan en su terreno. Son expertos manipuladores de la imagen pública. Tu mejor venganza es ser feliz lejos de ellos, no ganarles una batalla pública.'
  },
  {
    id: '182',
    text: '¿Qué es el "Contacto Cero Mental"?',
    options: [
      'No pensar',
      'Dejar de rumiar, espiar redes y hablar de él/ella',
      'Meditar',
      'Borrar su número'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Bloquearle en el móvil es el primer paso. Sacarle de tu cabeza es el verdadero trabajo. Mientras siga ocupando tus pensamientos, sigue teniendo poder.'
  },
  {
    id: '183',
    text: '¿Qué es la "Resonancia Límbica"?',
    options: [
      'Un tipo de música',
      'Sintonía emocional profunda (ellos la fingen sin empatía real)',
      'Tener buen oído',
      'Vibrar alto'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Por eso la conexión se sentía tan "mágica" al principio pero tan vacía después. Era un espejo, no una resonancia de alma a alma.'
  },
  {
    id: '184',
    text: '¿Qué es el "Descarte Diferido"?',
    options: [
      'Tirar la basura tarde',
      'Cuando el narcisista no te deja, pero hace tu vida miserable para que tú le dejes a él/ella y así poder hacerse la víctima',
      'Dejarlo para mañana',
      'Una ruptura lenta'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Es cobardía y estrategia. Si tú le dejas, él/ella puede decirle al mundo: "Mira cómo me abandonó después de todo lo que la amé".'
  },
  {
    id: '185',
    text: '¿Qué es la "Amnesia Perversa"?',
    options: [
      'Olvidar las llaves',
      'Fingir no recordar abusos o promesas',
      'Alzheimer',
      'Tener mala memoria'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'No es olvido, es negación estratégica. Si no lo "recuerda", no tiene que responsabilizarse de ello.'
  },
  {
    id: '186',
    text: '¿Por qué sientes que "te has vuelto loca/o" discutiendo con él/ella?',
    options: [
      'Porque grito mucho',
      'Porque usan argumentos circulares, negación y proyección hasta que tu cerebro colapsa por agotamiento',
      'Porque no tengo razón',
      'Porque soy irracional'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'No buscan resolver el conflicto, buscan ganarlo agotándote. Te llevan al límite para que explotes y luego acusarte de tu reacción.'
  },
  {
    id: '187',
    text: '¿Qué es el "Narcisismo Maligno"?',
    options: [
      'Un cáncer',
      'Una mezcla de narcisismo, psicopatía, sadismo y paranoia. Disfrutan causando dolor',
      'Ser muy malo',
      'Tener mal carácter'
    ],
    correctAnswer: 1,
    difficulty: 10,
    explanation: 'Es el perfil más peligroso. No solo carecen de empatía, sino que obtienen placer activo del sufrimiento ajeno. Huye sin mirar atrás.'
  },
  {
    id: '188',
    text: '¿Qué es la "Cosificación"?',
    options: [
      'Coser ropa',
      'Tratar a las personas como objetos útiles o desechables, sin tener en cuenta sus sentimientos',
      'Comprar cosas',
      'Ser materialista'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Para ellos eres una tostadora. Mientras funciones (des suministro), te cuidan. Si te rompes o quieres derechos, te tiran.'
  },
  {
    id: '189',
    text: '¿Qué es el "Refuerzo Intermitente"?',
    options: [
      'Dar premios a veces',
      'La técnica de manipulación más potente: dar "migajas" de amor de forma impredecible para mantener la adicción',
      'Hacer obras',
      'Ser inconstante'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es lo que usan en las máquinas tragaperras. Como no sabes cuándo vendrá el premio (el momento dulce), te quedas enganchada/o tirando de la palanca eternamente.'
  },
  {
    id: '190',
    text: '¿Qué es la "Herida de Abandono" en la víctima?',
    options: [
      'Un corte en la piel',
      'El trauma infantil que el narcisista detecta y explota para crear dependencia ("Yo nunca te dejaré")',
      'Miedo a estar solo',
      'Ser huérfano'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Los narcisistas son depredadores emocionales. Huelen tus miedos y se presentan como la "cura" perfecta, para luego usar ese miedo contra ti.'
  },
  {
    id: '191',
    text: '¿Qué es el "Self-Gaslighting"?',
    options: [
      'Mentirse a uno mismo',
      'Cuando la víctima empieza a dudar de su propia realidad y a justificar al abusador sin que él esté presente',
      'Tener poca luz',
      'Ser humilde'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es el triunfo final del abusador. Ya no necesita estar ahí para manipularte; ha instalado su software en tu mente y tú haces el trabajo sucio por él.'
  },
  {
    id: '192',
    text: '¿Qué es la "Triangulación Inversa"?',
    options: [
      'Geometría avanzada',
      'Hacerte sentir que TÚ eres la loca celosa comparada con sus amigas "normales" y "relajadas"',
      'Tener tres novios',
      'Ser poliamoroso'
    ],
    correctAnswer: 1,
    difficulty: 7,
    explanation: 'Busca invalidar tu intuición. Sus "amigas" probablemente no saben nada, pero él las usa como estándar para hacerte sentir inadecuada.'
  },
  {
    id: '193',
    text: '¿Qué es el "Bombardeo de Amor" (Love Bombing) post-ruptura?',
    options: [
      'Regalar flores',
      'Intentar reconquistarte con una intensidad desmedida justo cuando empiezas a alejarte',
      'Pedir perdón',
      'Ser romántico'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Es pánico a perder el control, no amor. En cuanto vuelvas a estar segura bajo su dominio, el "amor" desaparecerá y volverá el desprecio.'
  },
  {
    id: '194',
    text: '¿Qué es la "Empatía Cognitiva"?',
    options: [
      'Ser listo',
      'Saber intelectualmente qué siente el otro para poder manipularlo, pero sin sentirlo emocionalmente',
      'Leer la mente',
      'Ser psicólogo'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es su herramienta principal. Saben qué decir para que te sientas comprendida/o, pero es solo un guion aprendido, no una conexión real.'
  },
  {
    id: '195',
    text: '¿Qué es el "Vampirismo Energético"?',
    options: [
      'Beber sangre',
      'Absorber la vitalidad de la víctima mediante el drama, la exigencia constante y el caos',
      'Tener sueño',
      'Ser aburrido'
    ],
    correctAnswer: 1,
    difficulty: 6,
    explanation: 'Salen de las interacciones recargados y felices, mientras tú te quedas agotada, confundida y vacía. Se han "alimentado" de tu reacción.'
  },
  {
    id: '196',
    text: '¿Qué es la "Disociación" durante el abuso?',
    options: [
      'Separarse',
      'Desconectar de la realidad o del cuerpo para no sentir el dolor del momento (estar en "piloto automático")',
      'Divorciarse',
      'Dormirse'
    ],
    correctAnswer: 1,
    difficulty: 9,
    explanation: 'Es un mecanismo de defensa del cerebro ante un trauma insoportable. Te "vas" mentalmente porque estar "aquí" duele demasiado.'
  },
  {
    id: '197',
    text: '¿Qué es la "Inversión de la Realidad"?',
    options: [
      'Verlo todo al revés',
      'Acusar a la víctima de hacer lo que el abusador hace (ej. "Tú me controlas" cuando él es el controlador)',
      'Ser zurdo',
      'Tener dislexia'
    ],
    correctAnswer: 1,
    difficulty: 8,
    explanation: 'Crea un mundo espejo donde arriba es abajo. Te pasas la vida defendiéndote de acusaciones falsas en lugar de señalar sus abusos reales.'
  },
  {
    id: '198',
    text: '¿Qué es el "Ciclo de Abuso Narcisista"?',
    options: [
      'Idealización -> Devaluación -> Descarte -> Hoovering',
      'Conocerse -> Enamorarse -> Casarse',
      'Pelear -> Arreglarse',
      'Ser amigos -> Ser novios'
    ],
    correctAnswer: 0,
    difficulty: 10,
    explanation: 'Es un patrón predecible y repetitivo. Entender que es un ciclo (y no incidentes aislados) es clave para poder romperlo y salir.'
  },
  {
    id: '199',
    text: '¿Qué es la "Libertad Post-Narcisista"?',
    options: [
      'Estar soltero',
      'Recuperar tu identidad, tu paz, tu criterio y tu alegría de vivir, sabiendo que sobreviviste y eres más fuerte',
      'Salir de fiesta',
      'Vivir solo'
    ],
    correctAnswer: 1,
    difficulty: 10,
    explanation: 'Es el renacimiento. Eres tú, pero versión 2.0: más sabia, con límites de acero y una capacidad de amarte a ti misma que nadie podrá romper jamás.'
  },
  {
    id: '200',
    text: 'Has llegado al final. ¿Cuál es la lección más importante?',
    options: [
      'Que el amor duele',
      'Que el amor NO duele. El amor es paz, respeto y seguridad. Si duele, no es amor, es abuso',
      'Que hay que aguantar',
      'Que todos son iguales'
    ],
    correctAnswer: 1,
    difficulty: 1,
    explanation: 'Grábatelo a fuego. El amor real no te destruye, te construye. Te mereces un amor que se sienta como un hogar, no como un campo de batalla.'
  },
];
