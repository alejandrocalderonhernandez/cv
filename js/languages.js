export class spanish {
    static profile = {
        rol: {
            id: 'profile-role',
            value: '(Desarrollador Java - Angular)'
        },
        tittle: {
            id: 'profile-tittle',
            value: 'Perfil profesional'
        },
        content: {
            id: 'profile-content',
            value: 'Implementar soluciones a problemas triviales o complejos mediante el uso de las tecnologías de información implementando algoritmos de calidad, patrones de diseño, principios SOLID, uso de librerías y frameworks así como el testeo de las mismas para garantizar su correcto funcionamiento.'
        }  
    }

    static experience = {
        id:'work-experience',
        value: 'Experiencia laboral'
    }

    static languaje = {
        id:'language',
        value: 'Selecciona un lenguaje',
        contact: {
            id: 'contact-tittle',
            value:'Contacto'
        },
        country: {
            id: 'country',
            value:'México, CDMX'
        }
    }

    static schlolarship = {
        tittle: {
            id: 'scholarship-tittle',
            value: 'Escolaridad'
        },
        licence: {
            id: 'professional-licene',
            value: 'Cédula: '
        },
        schoolInfoId: 'scholarship-content',
        schoolInfo: [
            {
                name: 'Instituto Nacional de Mexico',
                tittle: 'Ingenieria en Tecnológias de la Información',
                date: '2013 - 2017'

            },
            {
                name: 'Consultora TecGurus',
                tittle: 'Diplomado java experto',
                date: '2018 - 2019'

            }
        ]
    }

    static hobbies = {
        guitar: {
            id: 'guitar',
            value: 'Tocar guitarra'
        },
        gym: {
            id: 'gym',
            value: 'Gym'
        },
        code: {
            id: 'code',
            value: 'Programar'
        }
    }

    static aboutMe = {
        tittle: {
            id: 'about-me-tittle',
            value: 'Acerca de mí'
        },
        content: {
            id: 'about-me-content',
            value: 'Me llamo Alejandro soy desarrollador de aplicaciones web y apasionado por las nuevas tecnologías. Mi experiencia como desarrollador es principalmente con lenguajes compilados en la JVM principalmente Java 7, 8 y 11 y otros lenguajes como Kotlin y Scala del lado del Backend y Typescript y Angular 2+ del lado del frontend, tengo experiencia en bases de datos SQL y noSQL y en cloud computing con AWS todo lo anterior lo he trabajado bajo metodologías ágiles y cultura devops, mi interes es laborar en una empresa que me brinde la posibilidad de crecer profesionalmente. Te invito a revisar algunos proyectos que tengo en mi github el cual podras encontrar en la seccion de contacto.'
        }
    }

    static work = {
        tittle: {
            id: 'tittle-work',
            value: 'Expericencia laboral'
        },
        timelineId: 'timeline',
        timeline: [
            {
                tittle:'Instituto Tecnológico de Tlanepantla',
                date: '05/2017-12/2017',
                description:'Aquí hice mis residencias profesionales, mis actividades consistían en sacar información de una base de datos implementada en ORACLE 12G para generar reportes y dar datos concretos a la administración de la escuela, La competencia más importante que desarrolle aquí fue el entendimiento de teoría de conjuntos aplicada a bases de datos relaciones.'
            },   
            {
                tittle:'Oeste SA de CV',
                date: '12/2017-12/2018',
                description:'Aquí obtuve mi primer empleo como desarrollador JR estuve asignado a 3 clientes diferentes, Mi primer proyecto fue implementación de un sistema BPM usando JAVA 7, SPRING BOOT, SPRING DATA JDBC como tecnologías principales este desarrollo fue para la empresa Naturgy Al finalizar este proyecto fui asignado para dar continuidad al desarrollo un sistema de gestión empresarial para una micro empresa llamada IBH Las tecnologías principales que maneje aquí fueron: JAVA 8, SPRING BOOT, SPRING DATA JPA, SPRING SECURITY, JASPER REPORTS, APACHE POI, POSTGRESQL, ABGULAR 2 Y TYPESCIPT, por ultimo participe en un proyecto para la secretaría de turismo que consistía en extraer datos de la web  (WEBSCRAPING) para su posteriror analizis. Las tecnologías usadas aquí fueron JAVA 7 SPRING BOOT, SPRING DATA MONGO,SELENIUM, MONGO DB. Durante mi estancia aquí aprendí que es la arquitectura REST, Como funciona una aplicación MVC, Que es un ORM y sus ventajas sonre JDBC, Como aplicar las estructuras de java api collections de manera eficiente, que es IoC e inyección de dependencias y el lenguaje Typescript junto con Angular.'
            }, 
            {
                tittle:'Equifax',
                date: '12/2018-01/2021',
                description: 'Durante mi estancia aquí me encontré desarrollando en diversas tecnologías: Refactorización de código y dependencias siguiendo los estándares de OWASP y atendiendo vulnerabilidades de un escaner de codigo FORTIFY y SONARCUBE. Implementación de procesos batch utilizando: JAVA 8, JDBC, JPA, SPRING BOOT, APACHE SPARK, SPRING AOP, AWS(S3, EMR, SQS) SPOCK, GROOVY. Creacion y mantenimiento a microservicios usando: JAVA 8, SPRING BOOT, SPRING CLOUD, SPRING JPA, SPRING OAUTH SECURITY, SPRING TEST, JUNIT, MOCKITO, LOMBOK, AWS, POSTGRESQL, DYNAMODB. Creación de pantallas  del lado del front con . ANGULAR 7, SASS, HTML5, JWT, CHARTJS, JASMIN .Migración de consultas ORACLE  a POSTGRESQL para los sistemas implementados con JDBC. Todo lo anterior utilizando la metodología SCRUM, Integración continua con JENKINS y Testeo continuó. Como skills adquiridos aquí principalmente fue el conocimiento de un panorama general de todo el ciclo de desarrollo del software al realizar tareas end to end tuve la oportunidad de entender como es toda la integración entre diferentes sistemas, como ayuda DEVOPS a la calidad y mejora en tiempos de implementación, también a conocer que es la arquitectura de microservicios y su ventaja sobre aplicaciones monolíticas.'
            }, 
            {
                tittle:'Citibanamex',
                date: '01/2021-07/2021',
                description:'Desarrollo y mantenimiento de microservicios usando java 8 y spring cloud. Ayuda a desarrollo de pantallas desarrolladas en Angular. Mantenimiento a sistema middleware(monolítico) usando java 8 y spring boot.'
            }, 
            {
                tittle:'Rappi',
                date: '01/2021-07/2022',
                description:'¿Alguna ves has usado la app de Rappi? Bien durante mi estadía aquí estuve trabajando en la vertical de restaurantes de la app de usuario (toda la parte que tiene que ver con tiendas, pedidos y productos)100% enfocado en backend utilizando java y kotlin, desarrollando, manteniendo y monitoreando microservivios principalmente spring webflux. Importante mencionar La implementación de spring webflux con kotlin es particularmente especial ya que con java utilizamos project reactor y con cotlin se utliza una tecnolgía propia de Kotlin llamda coroutines similar a threads pero con mas eficientes, de todos los microservicios un 80% fueron desarrollados con kotlin y el otro 20% con java, las tecnologías a destacar son POSTGRESQL, REDIS, KAFKA, DOCKER, JENKINS, SONARCUBE, DOCUMENTDB, J2DBC SIGNALFX SPRING WEBFLUX un poco de GO entre otras, también me gustaría mencionar la implementación de patrones de microservicios como circuit breaker, saga, CQRS, etc... tambiém entre mis actividades estaba dar soporte, revisar pull request y proponer mejoras a la implementación. También es importante mencionar que era un equipo de trabajo mulicultural.'
            }, 
            {
                tittle: 'Despegar.com',
                date: '07/2022-actual',
                description: 'Desarrollo de sistema  middleware para mappeeo Objetos de negocio de todos los proveedores, servicios internos y externos ,se recolectaba información mediante restful (Mejora propuesta message brokers para servicios internos) para dicho mappeeo, tencnologias Java 11 y Spring 5 el reto en este trabajo no fueron las tecnologias si no la lógica de negocio ya que entre terminología, impuestos de cada país, el mundial Qatar, divisas de países, convenios con hoteles, vuelos, tours, agencias de viajes y parques de entretenimiento la logica un tanto complicada. Cada desarrollo se hacía con altos estándares de código aplicando clean code, principios SOLID y patrones de diseño con sus respectivos unit test'
            },
            {
                tittle:'Proyecto personal',
                date: 'Tiempo libre',
                description:'Parte de mi tiempo libre me he encontrado desarrollando junto a un par de colegas un sistema de gestión logística se transporte, el sistema tiene una arquitectura 100% de microservicios y etsa implementada bajo el ecosistema de SPRING CLOUD, en la parte del frontend esta impementanda con ANGULAR 9 y como infrestrctura se planea una arquitectura cloud native en AWS, Las actividades mas importantes que he tenido han sido: Diseño de la base de datos relacional. Propuesta de diseño arquitectura de microservios. Implementación de Autentificación OAUTH2. Propuesta de diseño de pantallas  en angular. Implementación de prueba de APACHE KAFKA.'
            }, 
        ]
    }
    
}


export class english {
    static profile = {
        rol: {
            id: 'profile-role',
            value: '(Developer Java - Angular)'
        },
        tittle: {
            id: 'profile-tittle',
            value: 'Professional profile'
        },
        content: {
            id: 'profile-content',
            value: 'Implement solutions to trivial or complex problems through the use of information technologies through the use of quality algorithms, design patterns, SOLID principles, use of libraries and frameworks as well as testing them to guarantee their correct operation.'
        }
    }

    static experience = {
        id:'work-experience',
        value: 'Work experience'
    }

    static languaje = {
        id:'language',
        value: 'Select a language',
        contact: {
            id: 'contact-tittle',
            value:'Contact'
        },
        country: {
            id: 'country',
            value:'Mexico, Mexico city'
        }
    }

    static schlolarship = {
        tittle: {
            id: 'scholarship-tittle',
            value: 'Scholarship'
        },
        licence: {
            id: 'professional-licene',
            value: 'Professional license: '
        },
        schoolInfoId: 'scholarship-content',
        schoolInfo: [
            {
                name: 'Instituto Nacional de Mexico',
                tittle: 'Information Technology Engineering',
                date: '2013 - 2017'

            },
           {
                name: 'Consultancy TecGurus',
                tittle: 'Diplomat java expert',
                date: '2018 - 2019'

            }
        ]
    }

    static hobbies = {
        guitar: {
            id: 'guitar',
            value: 'Play guitar'
        },
        gym: {
            id: 'gym',
            value: 'Gym'
        },
        code: {
            id: 'code',
            value: 'Program'
        }
    }

    static aboutMe = {
        tittle: {
            id: 'about-me-tittle',
            value: 'About me'
        },
        content: {
            id: 'about-me-content',
            value: 'My name is Alejandro, I am a web application developer and passionate about new technologies. My experience as a developer is mainly with languages compiled in the JVM mainly Java 7, 8 and 11 and other languages such as Kotlin and Scala on the Backend side and Typescript and Angular 2+ on the frontend side, I have experience in SQL and noSQL databases and in cloud computing with AWS I have worked all of the above under agile methodologies and devops culture, my interest is to work in a company that gives me the opportunity to grow professionally. I invite you to review some projects that I have on my github which you can find in the contact section.'
        }
    }

    static work = {
        tittle: {
            id: 'tittle-work',
            value: 'Expericencia laboral'
        },
        timelineId: 'timeline',
        timeline: [
            {
                tittle:'Instituto Tecnológico de Tlanepantla',
                date: '05/2017-12/2017',
                description:'Here I did my professional residencies, my activities consisted of obtaining information from a database implemented in ORACLE 12G to generate reports and give concrete data to the school administration, The most important competence that I developed here was the understanding of applied set theory to relationship databases.'
            },   
            {
                tittle:'Oeste SA de CV',
                date: '12/2017-12/2018',
                description:'Here I got my first job as a JR developer I was assigned to 3 different clients, My first project was implementation of a BPM system using JAVA 7, SPRING BOOT, SPRING DATA JDBC as main technologies this development was for the Naturgy company At the end of this project I was assigned to give continuity to the development of a business management system for a micro company called IBH The main technologies that I handled here were: JAVA 8, SPRING BOOT, SPRING DATA JPA, SPRING SECURITY, JASPER REPORTS, APACHE POI, POSTGRESQL, ABGULAR 2 AND TYPESCIPT, Finally, I participated in a project for the tourism secretariat that consisted of extracting data from the web (WEBSCRAPING) for its subsequent analysis. The technologies used here were JAVA 7 SPRING BOOT, SPRING DATA MONGO, SELENIUM, MONGO DB. During my stay here I learned what the REST architecture is, How an MVC application works, What is an ORM and its advantages with JDBC, How to apply the structures of java api collections efficiently, what is Ioc and inyection of dependencies and the Typescript language along with Angular.'
            }, 
            {
                tittle:'Equifax',
                date: '12/2018-01/2021',
                description:'During my stay here I found myself developing in various technologies: Code refactoring and dependencies following OWASP standards and addressing vulnerabilities of a FORTIFY and SONARCUBE code scanner. Implementation of batch processes using: JAVA 8, JDBC, JPA, SPRING BOOT, APACHE SPARK, SPRING AOP, AWS (S3, EMR, SQS) SPOCK, GROOVY. Creation and maintenance of microservices using: JAVA 8, SPRING BOOT, SPRING CLOUD, SPRING JPA, SPRING OAUTH SECURITY, SPRING TEST, JUNIT, MOCKITO, LOMBOK, AWS, POSTGRESQL, DYNAMODB. Front side screen creation with. ANGULAR 7, SASS, HTML5, JWT, CHARTJS, JASMIN. Migration of ORACLE queries to POSTGRESQL for systems implemented with JDBC. All of the above using the SCRUM methodology, Continuous integration with JENKINS and Testing continued. As skills acquired here, it was mainly the knowledge of an overview of the entire software development cycle when performing end-to-end tasks, I had the opportunity to understand how all the integration between different systems is, how DEVOPS helps quality and improvement in times implementation, also to know what is the microservices architecture and its advantage over monolithic applications.'
            }, 
            {
                tittle:'Citibanamex',
                date: '01/2021-07/2021',
                description:'Development and maintenance of microservices using java 8 and spring cloud. Help with the development of screens developed in Angular. Maintenance to middleware system (monolithic) using java 8 and spring boot.'
            }, 
            {
                tittle:'Rappi',
                date: '06/2021-current',
                description:'Well, during my stay here I was working on the restaurant vertical of the user app (all the part that has to do with stores, orders and products) 100% focused on backend using java and kotlin, developing, maintaining and monitoring microservices mainly spring webflux. Important to mention The implementation of spring webflux with kotlin is particularly special since with java we use project reactor and with cotlin we use a proprietary Kotlin technology called coroutines similar to threads but with more efficiency, 80% of all microservices were developed with kotlin and the other 20% with java, the technologies to highlight are POSTGRESQL, REDIS, KAFKA, DOCKER, JENKINS, SONARCUBE, DOCUMENTDB, J2DBC SIGNALFX SPRING WEBFLUX a bit of GO among others, I would also like to mention the implementation of microservice patterns such as circuit breaker, saga, CQRS, etc... also among my activities was giving support, reviewing pull request and proposing improvements to the implementation. It is also important to mention that it was a multicultural work team.'
            },
            {
                tittle: 'Despegar.com',
                date: '07/2022-actual',
                description:'Development of a middleware system for mapping business objects from all providers, internal and external services, information was collected through restful (Proposed improvement message brokers for internal services) for said mapping, Java 11 and Spring 5 technologies, the challenge in this work were not the technologies if not the business logic since between terminology, taxes of each country, the Qatar world cup, country currencies, agreements with hotels, flights, tours, travel agencies and entertainment parks the logic is somewhat complicated. Each development was done with high code standards applying clean code, SOLID principles and design patterns with their respective unit tests.'
            },
            {
                tittle:'Personal project',
                date: 'Free time',
                description:'Part of my free time I have found myself developing together with a couple of colleagues a transport logistics management system, the system has a 100% microservices architecture and it is implemented under the SPRING CLOUD ecosystem, in the frontend part it is implemented with ANGULAR 9 and as an infrastructure a cloud native architecture is planned in AWS, The most important activities I have had have been: Design of the relational database. Micro-services architecture design proposal. OAUTH2 Authentication Implementation. Angular screen design proposal. APACHE KAFKA test implementation.'
            }
        ]
    }
}