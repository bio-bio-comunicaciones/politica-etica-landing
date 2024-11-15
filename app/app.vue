<!-- eslint-disable no-alert -->
<script lang="ts" setup>
interface NavItem {
	id: string
	text: string
	level: number
}

useSeoMeta({
	title: 'Politica ética BioBioChile',
	ogImage: 'https://www.biobiochile.cl/assets/escritorio/bbcl-2020/img/bbcl-social-2.jpg'
})

useHead({
	htmlAttrs: {
		class: 'scroll-smooth'
	}
})

const section = templateRef('section')
const nav = ref<Array<NavItem>>([])

onMounted(() => {
	const headings = section.value.querySelectorAll('h2, h3')
	let headingId = 1

	headings.forEach((heading) => {
		heading.id = `heading-${headingId++}`

		nav.value.push({
			id: heading.id,
			text: heading.textContent ?? '',
			level: +heading.tagName.replace(/\D/g, '')
		})
	})
})

function scrollTo(event: Event) {
	const target = event.target

	if (target instanceof HTMLSelectElement) {
		const element = document.getElementById(target.value)

		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}
}
</script>

<template>
	<div class="font-sans">
		<Header />
		<MobileNav class="md:hidden" />
		<main>
			<section class="border-b border-#CDD6E6 px-40px py-48px">
				<h1 class="mb-24px text-center text-9 text-#243C68 font-900 leading-10 font-serif md:(text-10)">
					Política ética de BioBioChile
				</h1>
			</section>
			<section class="sticky top-0 bg-white px-[15px] py-[16px] prose md:hidden">
				<select class="mt-[20px] h-[40px] max-w-full w-full truncate truncate border border-[#8899A680] rounded-lg bg-white px-[15px] md:hidden" @change="scrollTo">
					<option v-for="item of nav" :key="item.id" :value="item.id" class="w-full">
						{{ item.text }}
					</option>
				</select>
			</section>
			<section class="flex flex-wrap justify-center border-b border-#CDD6E6">
				<section ref="section" class="px-16px pb-96px pt-24px prose prose-blue md:(mr-81px pb-120px)">
					<p>BioBioChile es un medio de comunicación con un fuerte compromiso ético y de transparencia con su público.</p>
					<p>Tanto BioBioChile como Radio Bío Bío y todos los medios que integran el grupo Bío Bío Comunicaciones mantienen en alto los principios fundamentales de la verdad, la integridad, la libertad y la independencia. Principios que jamás se han transado, sin importar los gobiernos ni las presiones.</p>
					<p>BioBioChile se identifica como una voz independiente e imparcial que informa, analiza y comenta, sin responder a compromisos comerciales, religiosos, políticos o ideológicos con ningún grupo, por lo mismo no oculta información, ni se cierra a alguna perspectiva u opinión de los protagonistas.</p>
					<p>Además, como parte del servicio a nuestro público, defendemos la descentralización y el regionalismo como valores, tratando de atender todas las comunidades por igual, desde las más grandes hasta las más pequeñas.</p>
					<p>Esta indeclinable independencia y compromiso con su público, ha sido reconocida por el Instituto Reuters para el Periodismo y la Universidad de Oxford, quienes a través su Digital News Report, lo han destacado durante 8 años consecutivos como el medio de comunicación más creíble para los chilenos, desde que su medición incluyó a nuestro país en 2017.</p>
					<h2>1. Declaración de propiedad y financiamiento</h2>
					<p>BioBioChile es un medio de comunicación de carácter privado e independiente, fundado el 1 de agosto de 2009 en Concepción. Es propiedad de Bío Bío Comunicaciones S.A, que forma parte del holding Settempeda SpA que pertenece, en forma exclusiva, a miembros de la familia Mosciatti Olivieri.</p>
					<p>BioBioChile obtiene sus ingresos principalmente a través de anunciantes, que contratan publicidad o contenido patrocinado, debidamente identificado como tal para diferenciarlo del editorial y, de manera muy reducida, de arriendos de su infraestructura a terceros.</p>
					<p>Además, en menor medida, BioBioChile ha obtenido fondos concursables de iniciativas como Google News Initiative y Meta Journalism Project.</p>
					<p>Es importante destacar que los anunciantes o fuentes de financiamientos no ejercen ningún tipo de control sobre las decisiones editoriales de BioBioChile, es decir, no pueden influir o condicionar nuestra pauta, cobertura o enfoque noticioso.</p>
					<h2>2. Prioridades de cobertura</h2>
					<p>En BioBioChile, nos dedicamos a informar de manera imparcial, analizando y comentando los acontecimientos sin responder a influencias de ningún grupo. Nuestro enfoque se centra en brindar a la audiencia una visión completa y balanceada de los hechos, asegurando que todas las voces relevantes sean escuchadas.</p>
					<p>Además, cubrimos temas que afectan tanto a grandes comunidades como a pequeñas localidades, sin desatender el contexto regional. Reconocemos nuestra responsabilidad de representar la diversidad cultural, social y económica de Chile, y nos esforzamos por incluir una variedad de perspectivas en todas nuestras coberturas.</p>
					<p>Nuestras prioridades en la cobertura incluyen:</p>
					<ol>
						<li><strong>Imparcialidad y Transparencia:</strong> Informamos sin sesgos, asegurando que las noticias sean equilibradas y respeten los diferentes puntos de vista. Imparcialidad y Transparencia: Informamos sin sesgos, asegurando que las noticias sean equilibradas y respeten los diferentes puntos de vista.</li>
						<li><strong>Descentralización:</strong> Mantenemos un enfoque regional que da visibilidad tanto a las grandes ciudades como a las pequeñas comunidades.</li>
						<li><strong>Diversidad:</strong> Nos comprometemos a representar a todas las voces, sin importar el género, religión, etnia, orientación sexual, edad o condición socioeconómica.</li>
						<li><strong>Independencia Editorial:</strong> Garantizamos que ninguna fuente de financiamiento influya en nuestras decisiones editoriales, protegiendo siempre nuestra autonomía informativa.</li>
						<li><strong>Verificación Rigurosa:</strong> Nuestro equipo de periodistas asegura que cada publicación esté respaldada por hechos verificados, con un enfoque en la precisión y el contexto.</li>
					</ol>
					<p>Creemos que la confianza de nuestra audiencia es fundamental. Por ello, mantenemos altos estándares éticos y profesionales en cada una de nuestras coberturas, trabajando siempre para ofrecer un periodismo responsable y creíble.</p>
					<h2>3. Normas generales que rigen a nuestros periodistas.</h2>
					<ul>
						<li>El plagio está estrictamente prohibido en BioBioChile. Incluye la copia textual (apropiación del trabajo de otros), uso de redacción textual ajena (aún citando la fuente), traducción literal de artículos en otro idioma, y la superposición de palabras para camuflar el plagio. No obstante, creemos que sí es válido citar a otro medio como fuente, en la medida que se identifique explícitamente.</li>
						<li>
							Sólo se cubrirán suicidios cuando estos causen conmoción pública por A) connotación del fallecido; B) muerte en lugar público; o C) circunstancias que determinen su valor periodístico. El suicidio de una persona sin connotación y en
							lugar privado no se considera noticia., ya que consideramos que es parte de la intimidad de esa persona.
						</li>
						<li>BioBioChile es un medio que respeta los derechos de autor. Sólo se usarán imágenes o videos A) captados por nuestros periodistas; B) licenciados, autorizados o cedidos para su uso; C) de fuentes públicas o abiertas. En cualquier caso, la fuente o autores del contenido son identificados en la publicación.</li>
						<li>Velamos porque toda información publicada cuente con 3 requisitos mínimos:</li>
						<p>a) La versión de la contraparte, cuando exista conflicto entre partes.</p>
						<p>b) Que cada fuente esté debidamente identificada (excepciones en punto 6).</p>
						<p>c) Tenga el contexto necesario para ser comprendida.</p>
						<li>Cuando un hecho ocurra fuera de Chile, el titular de la noticia debe evitar confusiones, indicando el país o dando referencias del mismo.</li>
						<li>Transparentamos cuando una persona, institución o empresa requerida para un artículo declina participar o se niega a responder.</li>
						<li>BioBioChile no mostrará imágenes de muertes o de cadáveres, salvo A) cuando se trate de restos humanos con valor histórico y antropológico, como esqueletos o restos momificados; y B) cuando las imágenes revistan un valor periodístico en su contexto, previa autorización de un editor. Secuencias explícitas podrían ser difuminadas.</li>
						<li> BioBioChile no mostrará imágenes de desnudos o actividad sexual explícita, salvo que revista de un valor periodístico en su contexto, lo cual deberá ser visado por un editor.</li>
						<li>Aconsejamos a los miembros de BioBioChile ser prudentes en sus redes sociales y a evitar comentarios que pongan en tela de juicio su imparcialidad. Asimismo, se recomienda no hacer apologías a la violencia ni expresarse con insultos, evitar ataques personales y comentarios que puedan interpretarse como racistas, xenófobos, homófobos o violentos contra algún sector de la sociedad.</li>
						<li>Se debe evitar el uso de lugares comunes en titulares y redacción.</li>
						<li>Los titulares no recurrirán a la práctica del click-bait, entendida como A) defraudar a la audiencia con una premisa que no se cumple en el texto o lo hace de forma deficiente; o B) ocultar intencionalmente información importante para forzar la visita a un artículo.</li>
					</ul>
					<h2>4. Política de correcciones</h2>
					<p>En BioBioChile buscamos el más alto estándar periodístico, teniendo como norte entregar información veraz y debidamente verificada a nuestros lectores. No obstante, como en toda actividad, somos susceptibles de cometer errores.</p>
					<p>Cuando esto ocurra y se trate de un error sustancial, nos comprometemos a corregir lo más rápido posible e informar de manera clara y transparente de ello a nuestros lectores.</p>
					<p>Estas correcciones se pueden realizar a través de una <strong>actualización, aclaración, rectificación o incluso una declaración oficial del medio,</strong> según corresponda, publicándolo de manera explícita.</p>
					<p>Cuando un artículo reciba<strong>una actualización</strong>, se amplíe una información o en caso de errores menores, como gramaticales, de redacción, puntuación o tipeo no será necesario informar a los lectores. Esta puede realizarla el mismo periodista o un editor.</p>
					<p>En tanto, una <strong>aclaración</strong> se realizará con una nota al pie de la página y procede cuando hay inexactitudes en la información o datos que puedan llevar a una confusión o interpretación equivocada.</p>
					<p>Asimismo, se dará curso a una <strong>rectificación</strong> cuando hay información errónea en el artículo que debe corregirse. Esta se realizará al pie de la página, y en casos graves, con un cuadro al comienzo.</p>
					<p>Con respecto a la <strong>declaración oficial del medio</strong>, esta procede cuando hay un error de mayor magnitud y connotación pública.</p>
					<p>En el caso de las tres últimas instancias siempre tendrán curso tras la aprobación de un editor, subdirector o director del medio.</p>
					<p>Un error de gravedad puede ameritar la incorporación de una disculpa pública a los afectados, e incluso la publicación de una nueva nota o publicación en redes sociales detallando el incidente.</p>
					<p>Asimismo, si el error en los datos es originado en la versión errónea entregada por una fuente oficial (Carabineros, Bomberos, autoridades, etc), se estipulará en el texto con una respectiva aclaración. De ser necesario, se reemplazará la publicación en redes sociales por otra donde se identifique a la fuente que erró al entregar la información original.</p>
					<p>
						BioBioChile no accede a eliminar artículos publicados, salvo en casos muy justificados y extraordinariamente excepcionales, o cuando expresamente lo solicite un tercero que fue
						sujeto de una acusación y demuestre que se trata de un caso donde los tribunales judiciales lo declararon inocente, sin posteriores instancias de apelación.
					</p>
					<p>Por último, conforme a lo indicado en la Ley de Prensa (19.733), recibimos derechos a réplica, los que serán admitidos y procesados conforme a la ley.</p>
					<p class="font-italic">
						*Los usuarios pueden sugerir correcciones o advertir errores a través de un formulario dispuesto en un enlace que aparece en cada artículo.
					</p>
					<h2>5. Conflictos de interés</h2>
					<p>A fin de mantener nuestro compromiso ético, BioBioChile busca a toda costa evitar los conflictos de interés. Para ello fijamos algunas normas:</p>
					<p>Nuestros periodistas y colaboradores no pueden recibir dinero o trabajar para las fuentes que cubren, ni ejercer ninguna otra colaboración pagada que pueda ser interpretada como un conflicto de interés. Sí pueden dictar cátedras pagadas con fines educativos o colaborar con organizaciones ajenas a nuestra cobertura., previa autorización del medio</p>
					<p>Asimismo, nuestros periodistas y directivos deben evitar las militancias políticas o partidistas a fin de mantener nuestra independencia en la cobertura.</p>
					<p>Junto con ello, los periodistas -y todos miembros de la redacción- deben declarar sus posibles conflictos de interés frente a las temáticas que abordan e inhabilitarse en un determinado tema de cobertura, si fuese necesario.</p>
					<ul>
						<h3>5.1 Protocolo de regalos</h3>
						<p>Con el fin de evitar conflictos de interés, en que personas o grupos puedan intentar influir en nuestra pauta o cobertura editorial, Bío Bío Comunicaciones estableció un protocolo de entrega y recepción de regalos.</p>
						<p>Si bien BioBioChile no promueve la práctica de recibir regalos, reconoce que es una costumbre que personas relacionadas con el medio de alguna forma -como proveedores, agencias, lectores u otros- hagan ocasionalmente pequeños regalos y atenciones a los periodistas, por lo mismo, fijamos un monto máximo permitido.</p>
						<p>En su calidad de trabajadores del medio, los miembros de la redacción -incluyendo periodistas, editores, subdirectores, directores y otros- tienen prohibido solicitar o aceptar regalos, favores, agasajos o servicios de cualquier índole de fuentes, funcionarios públicos o empresas, cuyo monto supere 2 Unidades de Fomento (UF), equivalente en moneda nacional.</p>
						<p>De todos modos, estos regalos no pueden, en ningún caso, darse de manera habitual o reiterativa.</p>
						<p>Tampoco está permitido recibir regalos en dinero o beneficios equivalentes a dinero.</p>
						<p>Asimismo, el recibir pequeños regalos no puede dar pie a un trato preferente a quien lo entrega.</p>
						<h3>5.2 Protocolo de invitaciones</h3>
						<p>Bío Bío Comunicaciones no promueve la aceptación de invitaciones, no obstante, reconoce la existencia de estas con fines periodísticos legítimos, siempre y cuando no den paso a un conflicto de interés o pueda interpretarse como una conducta impropia.</p>
						<p>Las invitaciones recibidas se regirán por las siguientes pautas:</p>
						<ol>
							<li class="mb-0px">
								La invitación debe relacionarse con fines periodísticos legítimos o académicos.
							</li>
							<li class="mb-0px">
								Las invitaciones consistentes en entradas a eventos deportivos, musicales, culturales u otras de similar naturaleza, deberán ser sometidas a la aprobación del director del medio.
							</li>
							<li class="mb-0px">
								En el caso de los directores, la comunicación deberá ser con la gerencia, que aprobará o rechazará la invitación en revisión con el comité de ética.
							</li>
							<li class="mb-0px">
								En caso de que se trate de invitaciones a seminarios, cursos, conferencias y similares fuera del país y financiadas en parte o totalmente por terceros y sean consideradas como profesionalmente de interés para BioBioChile, deberán ser sometidas a la aprobación del Comité de Ética.
							</li>
							<li class="mb-0px">
								En el caso de los directores, la comunicación deberá ser con la gerencia, el que aprobara o rechazará la invitación en revisión con el comité de ética.
							</li>
						</ol>
					</ul>
					<h2>6. Uso de fuente no reveladas</h2>
					<ul>
						<h3>6.1 Fuentes reservadas</h3>
						<p>Como norma general, BioBioChile hará públicas sus fuentes para garantizar la veracidad y credibilidad de las informaciones, sin embargo, los periodistas tienen derecho a mantener en secreto la identidad de su fuente si esta le solicita confidencialidad. El secreto profesional está consagrado en el artículo 7 de la Ley de Prensa (19.733) en Chile. Esta práctica deberá reducirse a casos estrictamente necesarios y justificados.</p>
						<p>Quien redacte la información podrá solicitar a su editor que una fuente se mantenga en reserva, expresando argumentos válidos. Tanto los editores como la dirección podrán aprobar o denegar el uso de fuentes reservadas dentro de un artículo.</p>
						<h3>6.2 Identidades reservadas</h3>
						<p>En los artículos se podrá mantener en reserva la identidad de una o más personas si es que la justicia lo ordena o si la divulgación de dicha identidad pueda comprometer la seguridad de una fuente o víctima. Como norma general, no se divulgará la identidad de menores de edad a menos que sea explícita o implícitamente autorizado por sus padres y/o tutores legales</p>
					</ul>
					<h2>7. Compromiso de inclusión y diversidad</h2>
					<p>En BioBioChile.cl, nos comprometemos a fomentar un entorno inclusivo y diverso que refleje la riqueza cultural y social de nuestra audiencia. Reconocemos que la diversidad fortalece nuestro periodismo y enriquece nuestra capacidad para informar de manera precisa, objetiva y pluralista. Nuestro objetivo es representar una amplia gama de voces y perspectivas en nuestra cobertura y dentro de nuestro equipo.</p>
					<p>Principios de Diversidad:</p>
					<p><strong>Representación Inclusiva:</strong> Nos esforzamos por incluir diversas perspectivas en nuestras coberturas, reflejando las experiencias de personas de diferentes géneros, etnias, edades, orientaciones sexuales, capacidades y orígenes socioeconómicos. Esto nos permite capturar la realidad completa de los temas que abordamos.</p>
					<p><strong>Diversidad de Fuentes:</strong> Priorizamos la búsqueda de nuevas voces y fuentes que no hayan sido tradicionalmente incluidas en los medios de comunicación, dándole espacio a académicos, profesionales, líderes comunitarios y ciudadanos que representan a distintos grupos de la sociedad. Creemos que una variedad de opiniones enriquece nuestro contenido y lo hace más relevante para nuestra audiencia.</p>
					<p><strong>Cobertura Imparcial:</strong> Nuestra misión es informar de manera justa y objetiva, sin sesgos partidistas o prejuicios culturales. Todos nuestros periodistas están capacitados para abordar los temas con sensibilidad y con el debido respeto a las diferentes identidades y puntos de vista. Evitamos cualquier tipo de estereotipo o lenguaje discriminatorio en nuestras publicaciones.</p>
					<p><strong>Igualdad en el Lugar de Trabajo:</strong> En BioBioChile promovemos un entorno laboral inclusivo donde se valoran y respetan las diferencias individuales. Nuestro equipo está compuesto por personas de diversos orígenes y creencias, y garantizamos la igualdad de oportunidades en todos los aspectos de nuestra organización, desde la contratación hasta el desarrollo profesional.</p>
					<p><strong>Responsabilidad Social:</strong> Entendemos nuestra responsabilidad como medio de comunicación de influir en el debate público y promover la cohesión social. A través de una cobertura que refleja la realidad diversa de nuestro país, buscamos contribuir a una sociedad más inclusiva, justa y respetuosa.</p>
					<p>En BioBioChile.cl, la diversidad no es solo un valor fundamental, es una parte integral de nuestra misión como medio informativo. Creemos firmemente que un periodismo inclusivo fortalece la democracia y nos acerca a una sociedad más equitativa.</p>
					<h2>8. Verificación de Información y Datos</h2>
					<p>En BioBioChile, nuestro compromiso con la verdad y la precisión informativa es fundamental para mantener la confianza de nuestra audiencia. Por ello, implementamos un riguroso proceso de verificación de información y datos en todas nuestras investigaciones y publicaciones. Este proceso garantiza que nuestro periodismo esté respaldado por hechos verificados y fuentes confiables, manteniendo los más altos estándares éticos y profesionales.</p>
					<p>Metodología de Verificación para Investigaciones</p>
					<ol class="list-decimal">
						<li class="mb-0px">
							Recopilación de antecedentes y análisis de datos: Reunimos todos los documentos, material de archivo y antecedentes relevantes al caso que estamos investigando. Esto incluye fuentes documentales y testimoniales que nos ayuden a contextualizar los hechos.
						</li>
						<li class="mb-0px">
							Contrastación: Verificamos los hechos con las fuentes directamente involucradas, así como con expertos en la materia, para asegurar una comprensión completa y objetiva del tema.
						</li>
						<li class="mb-0px">
							Elaboración: Una vez recopilada y contrastada la información, nuestros periodistas elaboran la historia con un enfoque riguroso y ético, respetando los principios de imparcialidad y veracidad.
						</li>
						<li class="mb-0px">
							Revisión: Todos los artículos son sometidos a una revisión exhaustiva por parte del editor del área correspondiente, quien asegura la coherencia, precisión y adherencia a las pautas editoriales.
						</li>
						<li class="mb-0px">
							Publicación: Solo después de cumplir con todos los pasos anteriores, publicamos el contenido, asegurándonos de ofrecer a nuestra audiencia información verificada y confiable.
						</li>
					</ol>
					<p>Chequeo de Datos</p>
					<ol class="list-disc">
						<li class="mb-0px">
							Para verificación de información, utilizamos al menos tres fuentes válidas e independientes entre sí. Estas pueden ser documentales o personales.
						</li>
						<li class="mb-0px">
							Recurrimos a la revisión de información pública disponible mediante la ley de transparencia, ya sea activa (información publicada) o pasiva (información solicitada por el periodista).
						</li>
						<li class="mb-0px">
							Realizamos un cruce de datos provenientes de diversas fuentes para asegurar la consistencia y exactitud de la información.
						</li>
					</ol>
					<p>En BioBioChile, entendemos que la confianza de nuestra audiencia depende de nuestra capacidad para ofrecer noticias basadas en hechos comprobados y en un periodismo responsable.</p>
					<h2>9. Opinión</h2>
					<p>En BioBioChile, la sección de Opinión se rige por principios éticos que garantizan la transparencia, la pluralidad y el respeto en el ejercicio del derecho a la libre expresión. A continuación, se detallan los lineamientos que guían la publicación de columnas y artículos de opinión:</p>
					<p><strong>Separación clara entre opinión e información</strong></p>
					<p>Es fundamental que los lectores distingan claramente entre información noticiosa y columnas de opinión. Por ello, todas las publicaciones de la sección Opinión estarán explícitamente identificadas como opiniones, lo que significa que expresan la perspectiva personal de su autor y no representan la postura editorial del medio.</p>
					<p><strong>Responsabilidad</strong></p>
					<p>Aunque las columnas de opinión permiten la libre expresión de ideas, los autores tienen la responsabilidad de basarse en hechos verificables y de evitar la difusión de información falsa o engañosa.</p>
					<p><strong>Pluralismo y Respeto</strong></p>
					<p>BioBioChile promueve el pluralismo de ideas y perspectivas. Se fomentará la publicación de columnas que presenten una diversidad de opiniones sobre temas de interés público, siempre en un marco de respeto mutuo. No se tolerará el discurso de odio, la incitación a la violencia ni la discriminación de ningún tipo.</p>
					<p><strong>Identificación de los autores</strong></p>
					<p>Los autores serán identificados con sus cargos y/o asociaciones políticas u organizacionales para evidenciar su domicilio ideológico, alguna posible parcialidad del análisis o el origen de las propuestas presentadas.</p>
					<h2>10. Política del uso de Inteligencia Artificial (IA)</h2>
					<p>La política de uso de inteligencia artificial de BioBioChile está regida por lo siguiente:</p>
					<p><strong>- Responsabilidad en su uso:</strong> toda la información producida con Inteligencia Artificial generativa en Bío Bío Comunicaciones<strong> tendrá intervención de un profesional en el inicio y final del proceso de trabajo.</strong> Es imperativo que se verifique toda la información entregada por el sistema de IA, con el fin de preservar la veracidad en todo el contenido que se utilice para la producción de información.</p>
					<p><strong>- Alcance de su uso: </strong>Los profesionales de Bío Bío Comunicaciones podrán utilizar la Inteligencia Artificial para diversas tareas editoriales y creativas, como por ejemplo resumir contenidos, generar títulos y/o subtítulos, producir textos con diferentes tonos, según su necesidad, buscar ideas frescas, traducir contenidos o experimentar con esta, siempre con la responsabilidad que esto conlleva</p>
					<p>La IA también permite producir resúmenes de eventos históricos o compilar información de varios artículos sobre un mismo tema en un solo texto. Puede crear listas de hechos relevantes, lugares, o personajes, y realizar reseñas sobre estos.</p>
					<p>Asimismo, esta herramienta puede generar material como gráficos y animaciones, así como tablas de datos estadísticos, partiendo siempre de información previamente verificada.</p>
					<p><strong>-Limitaciones en el uso:</strong> Entendiendo la forma de funcionamiento de la Inteligencia Artificial Generativa, nunca la utilizaremos para procesar información sensible y/o confidencial que pongan en riesgo a nuestras fuentes informativas.</p>
					<p>Además, la IA no se empleará para crear contenidos completamente nuevos sin una base de reporteo periodístico que aborde temas de actualidad o contingencia, incluyendo política, temas policiales, sociales o cualquier otro ámbito relevante para Bio Bío Comunicaciones.</p>
					<p>La creación de reportajes y la recopilación de información directamente desde las fuentes seguirán siendo tareas exclusivas de nuestros periodistas, quienes mantendrán el contacto directo y la verificación con las fuentes informativas en relación con cada noticia.</p>
					<p><strong>-Transparencia:</strong> el uso de la Inteligencia Artificial Generativa, como la creación de contenido y/o imágenes, se transparentará siempre a nuestros usuarios, de este modo, si en una nota y/o imagen hubo uso de Inteligencia Artificial se indicará explícitamente. Sin embargo, cuando se trate de procesos de planificación o investigación que tengan un impacto mínimo en el contenido final, no será necesario revelar su uso.</p>
					<p>Sin embargo, en los casos donde la Inteligencia Artificial se utilice en etapas de planificación o investigación que no influyan directamente en el texto final o en el audio presentado a nuestras audiencias, o que su impacto en el contenido sea mínimo, no será necesario divulgar su uso.</p>
					<p><strong>-Adaptación de la tecnología:</strong> Entendemos que la Inteligencia Artificial está cambiando las formas de trabajo a diario, por lo que estaremos en constante investigación para adoptar las nuevas tecnologías, las que estarán en revisión a fin de mantener la ética y legalidad en su uso.</p>
					<h2>11. Equipo Editorial</h2>
					<p class="mb-0">
						Christian Leal - Director
					</p>
					<p class="mt-0">
						(cleal@biobiochile.cl)
					</p>
					<p class="mb-0">
						Leonardo Casas - Subdirector
					</p>
					<p class="mt-0">
						(lcasas@biobiochile.cl)
					</p>
					<p class="mb-0">
						Denisse Charpentier - Subdirectora
					</p>
					<p class="mt-0">
						(dcharpentier@biobiochile.cl)
					</p>
					<p class="mb-0">
						Gerson Guzmán - Jefe de Prensa
					</p>
					<p class="mt-0">
						(gguzman@biobiochile.cl)
					</p>
					<p class="mb-0">
						Gustavo Donat - Editor de Prensa
					</p>
					<p class="mt-0">
						(gdonat@biobiochile.cl)
					</p>
					<p class="mb-0">
						Felipe Delgado - Editor Región Metropolitana
					</p>
					<p class="mt-0">
						(fdelgado@biobiochile.cl)
					</p>
					<p class="mb-0">
						Manuel Cabrera - Editor Regiones
					</p>
					<p class="mt-0">
						(mcabrera@biobiochile.cl)
					</p>
					<p class="mb-0">
						Nicolás Parra - Editor de Investigación
					</p>
					<p class="mt-0">
						(nparra@biobiochile.cl)
					</p>
					<p class="mb-0">
						Manuel Stuardo - Editor de Magazine
					</p>
					<p class="mt-0">
						(mstuardo@biobiochile.cl)
					</p>
					<p class="mb-0">
						Ignacio Hermosilla - Editor SEO
					</p>
					<p class="mt-0">
						(ihermosilla@biobiochile.cl)
					</p>
					<p class="mb-0">
						Verónica Reyes - Editora de Economía
					</p>
					<p class="mt-0">
						(vreyes@biobiochile.cl)
					</p>
					<p class="mb-0">
						Camilo Suazo - Editor de Internacional
					</p>
					<p class="mt-0">
						(csuazo@biobiochile.cl)
					</p>
					<p class="mb-0">
						Francisco Solís - Editor de Deportes
					</p>
					<p class="mt-0">
						(fsolis@biobiochile.cl)
					</p>
					<p class="mb-0">
						Marco Sanhueza - Editor de Redes Sociales
					</p>
					<p class="mt-0">
						(msanhueza@biobiochile.cl)
					</p>
					<p class="mb-0">
						Megam Ossandón - Editora de Opinión
					</p>
					<p class="mt-0">
						(mossandon@biobiochile.cl)
					</p>
					<p class="font-black font-italic">
						*BioBioChile considera esta declaración como un documento vivo, en constante revisión, y modificación, de ser necesario, atendiendo las necesidades y sugerencias de nuestros lectores.
					</p>
				</section>
				<div class="hidden py-24px color-#243C68 md:block">
					<div class="sticky top-12">
						<p class="mb-33px border-b border-#CDD6E6 pb-12px">
							<strong>Índice</strong>
						</p>
						<ul>
							<li v-for="item of nav" :key="item.id" class="mb-16px" :style="{ 'margin-left': `${(item.level - 2) * 32}px` }">
								<a :href="`#${item.id}`">{{ item.text }}</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
		<Footer />
	</div>
</template>
