import axios from "axios"
import formatDistance from 'date-fns/formatDistance'

export const fetchUser = async (setUser) =>{
    let response = await axios.get("https://random-data-api.com/api/users/random_user")
    let getAvatar = await axios.get("https://randomuser.me/api/?results=25")
    let newAvatar = getAvatar.data.results[0].picture.large
    let newUser = response.data
    let getImage = await axios.get("https://random-data-api.com/api/lorem_flickr/random_lorem_flickr")
    let newImage = getImage.data.image
    console.log(newUser)
    setUser({
        avatar: newAvatar,
        image: newImage,
        name: `${newUser.first_name} ${newUser.last_name}`,
        job: newUser.employment.title,
        stats: [{label: "followers" , value: "500"}]
    })
}

export const fetchUsers = async (setUsers) =>{
    let response = await axios.get("https://randomuser.me/api/?results=25")
    let newUsers = await response.data.results
    // let getImage = await axios.get("https://random-data-api.com/api/lorem_flickr/random_lorem_flickr")
    // let newImage = getImage.data.image
    // console.log(newUsers)
    setUsers(newUsers)
}

export const relativeTime = (time) => {
    let result = formatDistance(
        new Date(time),
        new Date(),
        { addSuffix: true }
      )
      return result
}

export const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Augue lacus viverra vitae congue eu consequat ac felis donec. Amet tellus cras adipiscing enim. Dui accumsan sit amet nulla facilisi morbi tempus. Venenatis cras sed felis eget."

export const fetchComments = async (setComments) =>{
    let response = await axios.get("https://randomuser.me/api/?results=25")
    let newUser = await response.data.results
    // let getImage = await axios.get("https://random-data-api.com/api/lorem_flickr/random_lorem_flickr")
    // let newImage = getImage.data.image
    // console.log(newUser)
    setComments(newUser)
}

export const newsData = {
    "status": "success",
    "totalResults": 9429,
    "results": [
        {
            "title": "29-year-old arrested after hit-and-run crash Tuesday morning in Victorville",
            "link": "https://www.vvng.com/29-year-old-arrested-after-hit-and-run-crash-tuesday-morning-in-victorville/",
            "keywords": [
                "All News",
                "Featured",
                "Victorville News",
                "Crash",
                "crime",
                "safety",
                "victorville"
            ],
            "creator": [
                "Victor Valley News Group"
            ],
            "video_url": null,
            "description": "VICTORVILLE, Calif. (VVNG.com) — A previously convicted felon is back in jail after crashing into a semi and running from the scene of the accident Tuesday morning in Victorville. It happened at about 9:06 am, on July 19, 2022, at the intersection of Topaz Avenue and Eucalyptus Street, in front of Sunset Ridge Park. Sheriff’s […] The post 29-year-old arrested after hit-and-run crash Tuesday morning in Victorville appeared first on VVNG.com - Victor Valley News Group.",
            "content": null,
            "pubDate": "2022-07-20 05:36:21",
            "image_url": null,
            "source_id": "vvng",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "Ferrari threatened to leave Formula 1 by building their own Ferrari 637 IndyCar",
            "link": "https://thesportsrush.com/f1-news-ferrari-threatened-to-leave-formula-one-by-building-their-own-ferrari-637-indycar/",
            "keywords": [
                "F1",
                "ferrari",
                "IndyCar"
            ],
            "creator": [
                "Janmeyjay Shukla"
            ],
            "video_url": null,
            "description": "Ferrari threatened to leave Formula 1 as the FIA ordered teams to build V8 engines over traditional V12 engines from the 1989 season. Ferrari is the most prestigious and successful team in Formula One history. They have 243 wins in this motorsports and are the most well-known team out there. The team had championship-winning drivers… The post Ferrari threatened to leave Formula 1 by building their own Ferrari 637 IndyCar appeared first on The SportsRush.",
            "content": "Ferrari threatened to leave Formula 1 as the FIA ordered teams to build V8 engines over traditional V12 engines from the 1989 season. Ferrari is the most prestigious and successful team in Formula One history. They have 243 wins in this motorsports and are the most well-known team out there. The team had championship-winning drivers Michael Schumacher and Kimi Raikkonen in their seats. However, if not for the decision by the FIA, these drivers might have never won the World Championships with the Prancing Horse. The Scuderia actually planned to leave the Formula One business to concentrate on Indy500. They also built their own IndyCar called Ferrari 637 ready for the 1986 IndyCar season. Enzo Ferrari’s fight against the FIA’s 1989 V8 engine regulations The FIA changed the regulations from the 1989 F1 season. They announced that team must change their turbo engine to a V8 naturally aspirated 3.5-liter engine. This particular decision did not sit well with Enzo Ferrari. He loved the V12 engine and wanted teams to continue with the same. However, the FIA was pretty adamant about their decision. Therefore, Enzo ordered his Italian factory team to build a car for the CART PPG Indy Car World Series. Signor Ferrari also released a statement. He stated: “The news concerning the possibility of Ferrari abandoning Formula 1 to race in the United States has a basis in fact. For some time at the prancing horse, there have been studying a program of participation at Indianapolis and in the CART championship.” Ferrari 637. Stillborn Indycar from 1986 pic.twitter.com/gZM8ax0M14 — Marino (@MPB_5) November 13, 2017 Also Read: Michael Schumacher fondly remembers the Iceman for two iconic moments What happened to the Ferrari 637? This was a direct threat to the FIA. The Italian giants partnered with tire manufacturer Goodyear and Truesports CART team in order to build their own IndyCar machine. With the help of three times champions Bobby Rahal and test driver Michele Alboreto, the team successfully built the Ferrari 637. The team scared the lawmakers as the 637 car was up and running. Looking at how serious Ferrari was and a big loss it would eventually turn out to be, the FIA bowed to Enzo’s request. The car never raced and it was handed over to Alfa Romeo for their IndyCar pursuit. Moreover, the car sits in their Maranello museum as one of the what if? Also Read: F1 fans go gaga over Ferrari star asking for an autograph from Michael Schumacher The post Ferrari threatened to leave Formula 1 by building their own Ferrari 637 IndyCar appeared first on The SportsRush.",
            "pubDate": "2022-07-20 05:30:38",
            "image_url": null,
            "source_id": "thesportsrush",
            "country": [
                "united states of america",
                "united kingdom",
                "india",
                "australia"
            ],
            "category": [
                "sports"
            ],
            "language": "english"
        },
        {
            "title": "Financial Superintendence of Colombia Presents Project to Regulate Crypto Service Providers",
            "link": "https://news.bitcoin.com/financial-superintendence-of-colombia-presents-project-to-regulate-crypto-service-providers/",
            "keywords": [
                "News",
                "banks",
                "colombia",
                "fatf",
                "financial superintendence",
                "proposal",
                "Regulation",
                "Travel Rule",
                "VASPs"
            ],
            "creator": [
                "Sergio Goschenko"
            ],
            "video_url": null,
            "description": "The Financial Superintendence of Colombia presented a project that seeks to bring clarity to how links between banks and virtual asset service providers (VASPs) will be handled in the future. The document defines certain key concepts and determines a set of prerequisites that banks need to verify before accepting virtual asset service providers as customers. […]",
            "content": "The Financial Superintendence of Colombia presented a project that seeks to bring clarity to how links between banks and virtual asset service providers (VASPs) will be handled in the future. The document defines certain key concepts and determines a set of prerequisites that banks need to verify before accepting virtual asset service providers as customers.\r Virtual Asset Service Providers to Be Regulated in Colombia\r Regulation is becoming a key goal for countries in Latam, where cryptocurrency adoption is growing at significant rates. Now, the Financial Superintendence of Colombia has presented a document that seeks to establish norms regarding the requirements cryptocurrency exchanges and custody providers must meet to be serviced as customers by banks. The project defines key concepts such as virtual asset service providers (VASPs), and virtual assets in the scope of the regulation.\r In the same way, it establishes that virtual asset service providers will have to be connected to the UIAF, the financial intelligence office of Colombia, and have a plan of action to deal with money laundering and terrorism financing attempts that might potentially be made using their platform.\r The project also makes an indirect reference to compliance with the travel rule promoted by the Financial Action Task Force (FATF). It states banks must verify these VASPs have:\r \r The technological and operational capacity to monitor transactions with virtual assets, as well as to obtain, preserve and transmit the information of the originator and the beneficiary of each transaction.\r \r \r More Requirements\r The proposal establishes that the VASPs will have to be able to present clear information to their customers about the services they offer and the risks associated with these services, the costs associated with these services, and the virtual assets present on their platforms.\r VASPs will also have a plan to deal with operational and cybersecurity-related risks to handle possible hacks or platform problems that might affect how their services are delivered to their customers. Also, banks will have the obligation to separate their responsibilities from those of VASPs, telling customers that only they and these platforms are responsible for VASP-related problems.\r The proposal also establishes restrictions regarding investments. It states:\r \r The supervised entities authorized to capture resources through deposit products or funds must ensure that the operations of deposit and withdrawal of resources in financial products of deposit or funds in the name of a VASP are carried out only through non-face-to-face channels.\r \r The proposal is still in the discussion stages, and the Financial Superintendence will receive suggestions about it until August 12.\r What do you think about the VASP regulation proposal in Colombia? Tell us in the comments section below. \r",
            "pubDate": "2022-07-20 05:30:01",
            "image_url": null,
            "source_id": "bitcoin",
            "country": [
                "united states of america",
                "united kingdom",
                "india",
                "australia",
                "singapore",
                "saudi arabia",
                "canada"
            ],
            "category": [
                "business"
            ],
            "language": "english"
        },
        {
            "title": "“Jayson Tatum can’t say that to Andrew Wiggins though!”: Fans react as Celtics’ star trash-talks an 8-year old and his brother",
            "link": "https://thesportsrush.com/nba-news-jayson-tatum-cant-say-that-to-andrew-wiggins-though-fans-react-as-celtics-star-trash-talks-an-8-year-old-and-his-brother/",
            "keywords": [
                "Basketball",
                "boston celtics",
                "Jayson Tatum",
                "NBA"
            ],
            "creator": [
                "Raahib Singh"
            ],
            "video_url": null,
            "description": "Jayson Tatum faces critique yet again as he trash talks an eight-year-old and his elder brother sitting courtside Being a star in the NBA is like being a celebrity. One gains a lot of love and affection from the fans, but at the same time, there are always haters and naysayers too. Jayson Tatum has… The post “Jayson Tatum can’t say that to Andrew Wiggins though!”: Fans react as Celtics’ star trash-talks an 8-year old and his brother appeared first on The SportsRush.",
            "content": "Jayson Tatum faces critique yet again as he trash talks an eight-year-old and his elder brother sitting courtside Being a star in the NBA is like being a celebrity. One gains a lot of love and affection from the fans, but at the same time, there are always haters and naysayers too. Jayson Tatum has been learning about dealing with the naysayers as of late. Ever since his first year, Tatum has been mighty impressive and shows signs of becoming an NBA great. As expected, there was a lot of love coming his way. The city of Boston was riding behind the 24-year-old. However, things went sideways in the NBA Finals. Jayson Tatum couldn’t match the level of play being displayed by Stephen Curry and the Warriors. He had a sub-par performance all through the Finals, which has led to a lot of scrutiny and critique coming his way. Also Read: “Jayson Tatum facing Warriors is the same sh*t I did in 2007”: LeBron James gets critical of Celtics star and likens his Finals performances to his Spurs battle Recently, a clip surfaced where Tatum was seen trash-talking a kid and his brother. Fans react to Jayson Tatum trash-talking a kid As of late, there have been a lot of instances of fans saying stuff to players and getting away with it. The rules put in place by the NBA protect the fans from any sort of retaliation, and the fans abuse the same. However, when the players aren’t on the court as players, they can do as they please. This is exactly what Jayson Tatum did. Jayson Tatum to 8 year old: “How old are you? When i was 8 i would bust your a**. You and your brother” pic.twitter.com/R71MbtUXhE — CrossedSports (@crossedsportsig) July 19, 2022 Fans across social media did not particularly like how Tatum spoke to the kid. They sure made it heard. Instagram wasn’t any less ruthless. One person commented, “wouldnt say that to wiggins” whereas someone else wrote, “Why he ain’t cook the Warriors tho ” Also Read: “LeBron James wants to be everybody’s big brother!”: Skip Bayless criticizes the Lakers stars’ defense of Celtic Jayson Tatum’s NBA Finals performance I’m sure the kid must have provoked Tatum, but still, being the adult and the celebrity in the situation, he should have either not responded or should have had a more dignified reply. The post “Jayson Tatum can’t say that to Andrew Wiggins though!”: Fans react as Celtics’ star trash-talks an 8-year old and his brother appeared first on The SportsRush.",
            "pubDate": "2022-07-20 05:25:30",
            "image_url": null,
            "source_id": "thesportsrush",
            "country": [
                "united states of america",
                "united kingdom",
                "india",
                "australia"
            ],
            "category": [
                "sports"
            ],
            "language": "english"
        },
        {
            "title": "NJOC unveils a new method for sharing ideas, insights and concerns with senior leadership",
            "link": "https://www.news-medical.net/news/20220720/NJOC-unveils-a-new-method-for-sharing-ideas-insights-and-concerns-with-senior-leadership.aspx",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "The U.S. Navy's first management advisory group -; known as Naval Junior Officer Counsel (NJOC) -; recently unveiled a new method for sharing ideas, insights and concerns with senior leadership.",
            "content": null,
            "pubDate": "2022-07-20 05:23:38",
            "image_url": null,
            "source_id": "news-medical",
            "country": [
                "united states of america",
                "united kingdom",
                "india",
                "australia",
                "singapore",
                "canada"
            ],
            "category": [
                "health"
            ],
            "language": "english"
        },
        {
            "title": "Real Oviedo, el club español que busca reforzarse con futbolistas mexicanos",
            "link": "https://www.infobae.com/america/deportes/2022/07/20/real-oviedo-el-club-espanol-que-busca-reforzarse-con-futbolistas-mexicanos/",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "Con la llegada de Grupo Pachuca como inversionista, el equipo de la Segunda División de España quiere ser la vitrina para las joyas aztecas que buscan el sueño europeo",
            "content": "(Foto: Twitter/RealOviedo)Con la llegada de Grupo Pachuca como nuevo inversionista del Real Oviedo, de la Segunda División de España, el club europeo busca que sus plazas de extranjero sean ocupadas por futbolistas mexicanos.Así lo indicó este martes Martín Peláez, presidente del equipo, quien entrevista con ESPN Digital que los jugadores aztecas son “prioridad”. Prueba de ello fue el arribo del joven lateral de los Tuzos de Pachuca, Alonso Aceves, quien a pesar de su corta experiencia en la Liga MX fue transferido para la siguiente temporada al equipo ibérico.“Es el primer refuerzo del Oviedo con calidad y formado en los Tuzos”Peláez mencionó que la llegada de Aceves es un aliciente para los juveniles formados en las fuerzas básicas balompié mexicano, los cuales pueden ser enviados a la categoría de plata de España, la cual es un trampolín para LaLiga.(Foto: Twitetr/omarpdiaz)“Para las fuerzas básicas se manda el mensaje que cualquier chavo que esté listo puede irse y se decidió darle una de las dos plazas a Alonso. Teníamos necesidad de un lateral izquierdo y no lo pensamos dos veces”“A pesar de que Alonso tiene pocos partidos en Primera División, pues se lo ha ganado. El torneo pasado fue impresionante su nivel y los chavos están listos para la experiencia porque tienen talento, calidad y ganas”, agregó Martín Peláez.El defensa mexicano de 21 años fue titular el torneo pasado, bajo el mando de Guillermo Almada, y ayudó a que el equipo del estado de Hidalgo llegara a la final en el Clausura 2022, misma que perdió contra el Atlas de Guadalajara.Incluso, Aceves estuvo considerado en los procesos de selecciones mexicanas menores.Marcelo Flores lleva dos goles en el Revelations Cup 2021 (Foto: Twitter/ @Xavi_Sol)Además del defensa, Oviedo busca hacerse de los servicios de otra joya mexicana y del Arsenal FC de Inglaterra: Marcelo Flores, quien fue convocado recientemente por Gerardo Martino en los recientes encuentros de la Selección Mexicana en Estados Unidos.De acuerdo con medios españoles, ya existe un acuerdo entre el Gunner y el conjunto ibérico, por lo que se hará oficial en las próximas horas.Trascendió que el mediocampista de 18 años llegará como préstamo sin opción a compra, en una transacción que puede servirle a ambas partes, ya que Real Oviedo busca el ascenso a LaLiga y Flores desea más minutos de cara al Mundial de Qatar 2022.Cabe mencionar que ‘Chelo’ todavía no debuta en 1ra División de Inglaterra, por lo que jugar en España le sumaría experiencia.(Foto: Twitter/RealOviedo)Grupo Pachuca estará ligado a cuatro equipos de futbol en tres diferentes países. En México están con Pachuca y León; en Chile con el Everton de Viña del Mar y ahora llegaron a España con el Real Oviedo.En la temporada 2021/2022, la más reciente adquisición del grupo encabezado por la familia Martínez, terminó en la séptima posición de la Segunda División de España, a solo un escalón de los lugares que dan acceso a los playoffs de ascenso al máximo circuito.Real Oviedo no participa en la Primera División desde la temporada 2000/2001, misma en la que perdió la categoría. Posteriormente cayó hasta la Tercera División, pero desde la 2015/2016 se mantiene en la Segunda División con aspiraciones a regresar a la otrora liga de las estrellasSEGUIR LEYENDO:",
            "pubDate": "2022-07-20 05:19:03",
            "image_url": null,
            "source_id": "infobae",
            "country": [
                "united states of america",
                "mexico",
                "argentina",
                "colombia"
            ],
            "category": [
                "top"
            ],
            "language": "spanish"
        },
        {
            "title": "Manfred rechaza que salario de Ligas Menores sea bajo",
            "link": "https://www.infobae.com/america/agencias/2022/07/20/manfred-rechaza-que-salario-de-ligas-menores-sea-bajo/",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": null,
            "content": "LOS ÁNGELES (AP) — El comisionado de las Grandes Ligas, Rob Manfred, defendió el trato que le ha dado el deporte a los peloteros de Ligas Menores, lo que suscito críticas inmediatas en su contra de grupos defensores de los derechos de los jugadores.“Rechazo la premisa de la cuestión de que los jugadores de Ligas Menores no reciben un salario suficiente para vivir”, dijo Manfred a la Asociación de Escritores de Béisbol de Estados Unidos antes del Juego de Estrellas del martes.“Creo que hemos logrado avances reales en los últimos años en cuanto a los ingresos de los jugadores de Ligas Menores, incluso dejando de lado los bonos por firmar que algunos han recibido. Se les provee dónde vivir, que obviamente es otra forma de compensación”.MLB incrementó el salario mínimo en el 2021: aumentó el salario de la Clase A de 290 a 500 dólares por semana; en la Doble A de 350 a 500 y en la Triple A de 502 a 700 para la temporada de aproximadamente cinco meses. Los jugadores sólo reciben su paga durante la campaña.Los jugadores amateur que residen en Estados Unidos y Canadá escogidos en el Draft amateur esta semana recibirán un bono dependiendo de su selección, que los equipos usan como referencia y va de los 8,8 millones para la primera selección a un poco menos de 150.000 dólares para las últimas selecciones de la décima y última ronda.La MLB dice que gasta 450 millones de dólares cada año en bonos por firmar en jugadores de primer año.En noviembre pasado, la MLB anunció que todos los equipos tendrían la obligación de proveer una vivienda amueblada, con una cama individual por jugador y no más de dos peloteros por habitación. Los equipos pagan los servicios de la vivienda.“La mayoría de los peloteros de Ligas Menores tienen un segundo empleo debido a que sus salarios anuales son insuficientes para llegar a final del año”, dijo en un comunicado Harry Marino, director ejecutivo de Defensores de Peloteros de Ligas Menores, en respuesta a Manfred. “Decir que el pago a ligasmenoristas es aceptable es insensible y falso”.Según documentos de la demanda presentada el viernes ante una corte federal, la MLB acordó pagar 185 millones de dólares para resolver una demanda con peloteros de Ligas Menores. La MLB aceptó en el acuerdo anular toda prohibición a que los equipos paguen salarios a los jugadores de Ligas Menores fuera de la temporada.De acuerdo con un estimado inicial, alrededor de 23.000 jugadores podrían repartirse el dinero: en promedio 5.000 y 5.500 dólares. Los abogados de los jugadores recibirán 55,5 millones de dólares.Líderes de la Comisión Judicial del Senado pidieron a Manfred que explique el próximo martes las consecuencias que tendría un posible proyecto de ley que eliminaría la exención antimonopolios del deporte en la relación del béisbol con los jugadores de Ligas Menores.Mientras que los jugadores con contratos de Grandes Ligas están sindicalizados, no sucede lo mismo con los peloteros con contratos de Ligas Menores. La Asociación de Jugadores del Béisbol de las Grandes Ligas aportó en noviembre pasado 50.000 dólares a Defensores de Peloteros de Ligas Menores, según un documento federal.",
            "pubDate": "2022-07-20 05:17:36",
            "image_url": null,
            "source_id": "infobae",
            "country": [
                "united states of america",
                "mexico",
                "argentina",
                "colombia"
            ],
            "category": [
                "top"
            ],
            "language": "spanish"
        },
        {
            "title": "Partido de La U será bancada de gobierno",
            "link": "https://www.infobae.com/america/colombia/2022/07/20/partido-de-la-u-sera-bancada-de-gobierno/",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "En horas de la noche, la presidenta de la colectividad se reunió con los congresistas entrantes y salientes, allí se definió que apoyarán desde el congreso las propuestas que el gobierno decida tramitar",
            "content": "Dilian Francisca Toro acordó con la bancada del partido que dirige apoyar las propuestas del gobierno de Gustavo Petro. FOTO: Cortesía, Partido de La U.Luego de una reunión que tuvo la presidenta del Partido de La U, Dilian Francisca Toro, con el presidente electo, Gustavo Petro y más tarde con la bancada de la colectividad que lidera, se emitió el mensaje de que están a favor de ser parte del gran acuerdo nacional, enfatizando a su vez que, desde su bancada en el congreso, serán partido de gobierno.Desde su cuenta de Twitter, la exgobernadora del Valle del Cauca, ya había señalado que luego de su reunión con el mandatario electo, encontró puntos de acuerdo para “alcanzar un gran Acuerdo Nacional por los olvidados nos debe unir como país”.El anuncio se entrega a un día de que el nuevo Legislativo se posesione en pleno. En medio del encuentro que tuvo con su bancada, la líder del Partido de la U expresó: “Luego de reunirme con el nuevo presidente de los colombianos y de dialogar sobre diferentes aspectos, especialmente los sociales y económicos y de hallar puntos de encuentro entre nuestras banderas, quiero proponerles hacer parte de la Coalición de Gobierno, tengo confianza en que unidos podremos aportar a la construcción de un mejor país”.Según indicó, la colectividad ha entrado desde hace varios años atrás en un proceso de cambio para llegar a ser un partido de centro, en el que consideran de manera importante la escucha activa de las necesidades de los colombianos.A línea de estas palabras, agregó que para su bancada es urgente apostarle a los proyectos direccionados a disminuir la pobreza y la desigualdad; fortalecer la seguridad alimentaria de los colombianos y contribuir a la implementación de los acuerdos de paz.En el anuncio también le envió un mensaje a los colombianos que se encuentran en la periferia, a quienes habitan en las regiones y, en general, a todos los que han sentido la ausencia de los gobiernos a lo largo de la historia.“De esta manera vamos sumando voluntades que permitan alcanzar las transformaciones que el país reclama. Desde el partido de la U, los olvidados son el centro de nuestras propuestas”, refirió la presidenta del partido.En este sentido, esa colectividad corresponde la voluntad política que ha sido demostrada desde el mandatario electo, Gustavo Petro, para consolidar una agenda común en favor de los habitantes de las regiones, entendiendo sus necesidades y gobernando para suplirlas.“Queremos mejorar las condiciones de vida de los independientes, de los pobres, de los millones de colombianos que construyen día a día el país real, por esta razón apoyaremos las propuestas que contribuyan a disminuir la pobreza, la inequidad y a impulsar la paz”, precisó Dilian Francisca Toro.La fuerza electoral del entrante mandatario se concentró en las bases sociales, de personas que piden un cambio social y económico estructural que se ejecute desde la política del gobierno central. Es por esta razón que el anuncio resulta determinante para que las propuestas que Petro decida tramitar ante el Congreso no terminen hundiéndose. Sino que al contar con el respaldo gobiernista de varios movimientos políticos y del Partido de La U, en este caso, puedan avanzar hasta ser aprobadas.Para los próximos cuatro años, el Partido de la U tiene un total de 27 congresistas, 10 senadores y 17 representantes a la Cámara. En vista de lo anunciado, ellos surtirían de un apoyo importante para apoyar las iniciativas del presidente electo.SEGUIR LEYENDO:CNE declaró la elección del Senado: conozca cómo quedó conformado para el 2022-2026Gustavo Petro afirmó que las reformas deben hacerse el primer año: conozca los proyectos que cuentan con apoyo en el Congreso de la República",
            "pubDate": "2022-07-20 05:17:24",
            "image_url": null,
            "source_id": "infobae",
            "country": [
                "united states of america",
                "mexico",
                "argentina",
                "colombia"
            ],
            "category": [
                "top"
            ],
            "language": "spanish"
        },
        {
            "title": "Daisuke Sumizawa estará en los octavos de final del torneo de Seremban",
            "link": "https://www.infobae.com/noticias/2022/07/20/daisuke-sumizawa-estara-en-los-octavos-de-final-del-torneo-de-seremban/",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "El jugador se impuso 6-3 y 6-3 ante su adversario",
            "content": "Daisuke Sumizawa, japonés cumplió los pronósticos al vencer por 6-3 y 6-3 a Dheeraj Kodancha Srinivasan, tenista indio en los dieciseisavos de final del torneo de Seremban. Tras este resultado, Sumizawa logra clasificarse para los octavos de final del torneo de Seremban.Kodancha Srinivasan consiguió quebrar el saque en una ocasión, mientras que el jugador japonés lo consiguió 4 veces.En los octavos de final, Sumizawa se medirá contra el jugador chino Jie Cui y cabeza de serie número 4.En el torneo de Seremban (ITF Malaysia F1) se enfrentan 54 jugadores. Asimismo, se lleva a cabo desde el 17 al 24 de julio sobre pista dura al aire libre.El tenis, un deporte muy querido por el públicoEl tenis es sin lugar a dudas un deporte clásico. Cada año, cuatro torneos (los denominados 'Grand Slams') reúnen toda la atención mundial: la temporada inicia con el Open de Australia, para seguir con la pista de arcilla de Roland Garros, luego viaja a Londres con la celebración de Wimbledon y finalmente concluye en Estados Unidos con el US Open.En el resto del año, los jugadores siguen jugando por todo el mundo completando temporadas en las distintas superficies: dura o pista rápida, arcilla o hierba.El tenis surgió en Europa a finales del siglo XVIII y desde 1926 es un deporte profesional, fecha en la que se produjo la creación del tour. Era especialmente popular entre las clases ricas de países angloparlantes, pero en la actualidad es un deporte global. Se divide en dos categorías: la competición masculina (ATP) y la femenina (WTA). ATPLa ATP (Association of Tennis Professionals) es la asociación de tenistas profesionales que reúne a jugadores de todo el mundo en la categoría masculina.El tour de la ATP celebra varios torneos a lo largo del año: ATP Masters 1000 (si un jugador gana el torneo, se llevará 1000 puntos para sumar al ranking ATP), ATP 500 y ATP 250. Por debajo de estos torneos, en un escalón inferior tendríamos el ATP Challenger Tour, donde luchan las futuras estrellas del tenis mundial. Además, también se encarga de los Grand Slam.La lucha por ser el mejor de la historia sigue activa en la categoría masculina. El español Rafael Nadal, el serbio Novak Djokovic y el suizo Roger Federer compiten por mejorar todos los récords y sumar el mayor número de Grand Slams. Los tres jugadores son frecuentemente denominados como 'Big Three' frente a las nuevas generaciones o 'Next Gen'.Estas posibles futuras estrellas del tenis han entrado pisando fuerte en el circuito del tenis mundial, como en el caso del griego Stefanos Tsitsipas, del italiano Matteo Berrettini, el alemán Alexander Zverev o los rusos Medvedev y Rublev.Novak Djokovic tiene actualmente el récord de semanas en el número 1 de los rankings ATP, seguido muy de cerca por Roger Federer, el legendario jugador estadounidense Pete Sampras, Iván Lendl y Jimmy Connors. WTALa WTA (Women's Tennis Association) se creó en el año 1973 por la famosa ex tenista Billie Jean King. La californiana ganó 39 títulos de Grand Slam durante su etapa en activo y es un icono para el mundo del tenis.En la actualidad, hay muchas tenistas de la categoría femenina que compiten por mantenerse en lo más alto de la élite del tenis mundial y superar a Stefanie Graff o Serena Williams. Jugadoras como la polaca Iga Świątek (campeona de Roland Garros en 2021), la griega Maria Sakkari o Paula Badosa (primera ganadora española de Indian Wells) luchan por mantenerse en el famoso top 10 del ranking WTA.En el año 2022, la tenista australiana Asleigh Barty anunció su retirada definitiva del mundo del tenis y dejó atrás una impresionante carrera con varios Grand Slam a sus espaldas. Ahora es el turno de las demás jugadores de tomar el testigo y convertirse en números 1. Seguir leyendo:Más noticiasFuente de Nota e imagen: Narrativa",
            "pubDate": "2022-07-20 05:16:34",
            "image_url": null,
            "source_id": "infobae",
            "country": [
                "united states of america",
                "mexico",
                "argentina",
                "colombia"
            ],
            "category": [
                "top"
            ],
            "language": "spanish"
        },
        {
            "title": "Plaschke: Baseball's legends come out to shine in glittering showcase at Dodger Stadium",
            "link": "https://www.latimes.com/sports/story/2022-07-19/clayton-kershaw-mlb-all-star-game-giancarlo-stanton",
            "keywords": null,
            "creator": [
                "Bill Plaschke"
            ],
            "video_url": null,
            "description": "At the first MLB All-Star Game to be played at Dodger Stadium in 42 years, baseball royalty displayed its talent and heart in a memorable Midsummer Classic.",
            "content": "At the first MLB All-Star Game to be played at Dodger Stadium in 42 years, baseball royalty displayed its talent and heart in a memorable Midsummer Classic.",
            "pubDate": "2022-07-20 05:16:01",
            "image_url": "https://ca-times.brightspotcdn.com/dims4/default/eb9aee0/2147483647/strip/true/crop/4800x2989+0+0/resize/1500x934!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6b%2Fd2%2F48dd4888460f89d742b34e5378b0%2F1160312-sp-mlb-all-star-game-015-lls.jpg",
            "source_id": "latimes",
            "country": [
                "united states of america"
            ],
            "category": [
                "sports"
            ],
            "language": "english"
        }
    ],
    "nextPage": 1
}