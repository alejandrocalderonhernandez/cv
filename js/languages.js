export class spanish {
    static profile = {
        rol: {
            id: 'profile-role',
            value: 'Java/Spring Backend developer (microservices)'
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
        },
        teach: {
            id: 'teach',
            value: 'Dar clases en Udemy y Youtube'
        }
    }

    static myCourses = {
        title: ''
    }

    static aboutMe = {
        tittle: {
            id: 'about-me-tittle',
            value: 'Acerca de mí'
        },
        content: {
            id: 'about-me-content',
            value: 'Me llamo Alejandro soy desarrollador de aplicaciones web y apasionado por las nuevas tecnologías. Te invito a revisar algunos proyectos que tengo en mi github el cual podras encontrar en la seccion de contacto.'
        },
        javaExperience: {
            titleId: 'java-experience',
            title: 'Mi experiencia con Java',
            contentId: 'java-content',
            content: ' A lo largo de mi carrera he trabajado con diferentes proyectos y tecnologías enfocadas a Java. Principalmente a aplicaciones web con Spring framework, también podría destacar el desarrollo de sistemas de web scrapping, generación de reportes con JasperReports y reportes en Excel con apache poi. Las versiones de Java con las que he trabajado son 7, 8, 11 y 17 siempre haciendo uso de buenas prácticas aplicando patrones de diseño y principios solid.'
        },
        springExperience: {
            titleId: 'spring-experience',
            title: 'Mi experiencia con Spring',
            contentId: 'spring-content',
            content: 'En la mayoría de mis proyectos he utilizado Spring en diferentes aplicaciones y diferentes  proyectos incluso con diferentes lenguajes como es Kotlin y Java, trabajé con spring context(sin autoconfiguracion) como con Spring Boot. He integrado diferente bases de datos relacionales, documentales y de cache con spring data, también he utilizado clientes http reactivos(web client) y no reactivos (rest template), he integrado con spring otras tecnologías como apache Kafka usando spring Kafka o spring cloud streams, por último he implementado spring security y creación de test unitarios con Junit, mockito y Spring Boot test.'
        },
        microservicesExperience: {
            titleId: 'microservices-experience',
            title: 'Mi experiencia con Microservicios',
            contentId: 'microservices-content',
            content: 'Mi experiencia en el desarrollo de microservicios va desdé la descomposición de un monolito, diseño, mantenimiento y monitoreo. Siempre modelado con DDD Las tecnologías y herramientas herramientas qué he utilizado son: Spring cloud config server, Spring cloud eureka server, Spring cloud registry server, Spring cloud gateway, Spring cloud circuit baker, Spring cloud openfeign, Spring cloud streams, Aws api gateway, Aws SQS, Aws lambdas, Zipkin, Prometheus, Apache Kafka, Axon , Docker, Algunos de los patrones que he usado son: CQRS, SAGA, Event sourcing, Circuit baker, API gateway, Externalized Configuration, Database per microservice,'
        },
        devopsExperience: {
            titleId: 'devops-experience',
            title: 'Mi experiencia con Devops y Cloud',
            contentId: 'devops-content',
            content: 'Quizás mi mayor experiencia en devops es con docker y git, en el área de orquestación de contenedores tengo ligera experiencia en kubernetes. Me ha tocado consumir y muy ocasionalmente crear pipelines principalmente en jenkins y GitHub actions En el apartado de cloud computing he trabajado con el sdk de AWS, S3, EC2 y RDS y también he trabajado con GCP principalmente con spanner db e identity platform.'
        },
        angularExperience: {
            titleId: 'angular-experience',
            title: 'Mi experiencia con Angular',
            contentId: 'angular-content',
            content: 'Durante un par de años estuve trabajando como full stack y trabajaba con la versión de angular 9 me tocó hacer varias cosas entre ellas la creación de servicios, componentes, módulos, rutas, plantillas html y guards.'
        },
        apisExperience: {
            titleId: 'api-experience',
            title: 'Mi experiencia en desarrollo y consumo de API\'\s',
            contentId: 'api-content',
            content: 'En la mayoría de mis trabajos he consumido y c reado api RESTful. Cuando me toca diseñar un api REST contemplo las buenas prácticas del modelo de madurez de Richardson. He manejado eventos con MSQ principalmente Kafka. También en mis primeros trabajos llegué a consumir algunas servicios SOAP'
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
                tittle: 'Despegar.com',
                date: '07/2022-01/2024',
                description: 'Desarrollo de sistema  middleware para mappeeo Objetos de negocio de todos los proveedores, servicios internos y externos ,se recolectaba información mediante restful (Mejora propuesta message brokers para servicios internos) para dicho mappeeo, tencnologias Java 11 y Spring 5 el reto en este trabajo no fueron las tecnologias si no la lógica de negocio ya que entre terminología, impuestos de cada país, el mundial Qatar, divisas de países, convenios con hoteles, vuelos, tours, agencias de viajes y parques de entretenimiento la logica un tanto complicada. Cada desarrollo se hacía con altos estándares de código aplicando clean code, principios SOLID y patrones de diseño con sus respectivos unit test'
            },
            {
                tittle:'Rappi',
                date: '01/2021-07/2022',
                description:'¿Alguna ves has usado la app de Rappi? Bien durante mi estadía aquí estuve trabajando en la vertical de restaurantes de la app de usuario (toda la parte que tiene que ver con tiendas, pedidos y productos)100% enfocado en backend utilizando java y kotlin, desarrollando, manteniendo y monitoreando microservivios principalmente spring webflux. Importante mencionar La implementación de spring webflux con kotlin es particularmente especial ya que con java utilizamos project reactor y con cotlin se utliza una tecnolgía propia de Kotlin llamda coroutines similar a threads pero con mas eficientes, de todos los microservicios un 80% fueron desarrollados con kotlin y el otro 20% con java, las tecnologías a destacar son POSTGRESQL, REDIS, KAFKA, DOCKER, JENKINS, SONARCUBE, DOCUMENTDB, J2DBC SIGNALFX SPRING WEBFLUX un poco de GO entre otras, también me gustaría mencionar la implementación de patrones de microservicios como circuit breaker, saga, CQRS, etc... tambiém entre mis actividades estaba dar soporte, revisar pull request y proponer mejoras a la implementación. También es importante mencionar que era un equipo de trabajo mulicultural.'
            }, 
            {
                tittle:'Equifax',
                date: '01/2019-01/2021',
                description: 'Durante mi estancia aquí me encontré desarrollando en diversas tecnologías: Refactorización de código y dependencias siguiendo los estándares de OWASP y atendiendo vulnerabilidades de un escaner de codigo FORTIFY y SONARCUBE. Implementación de procesos batch utilizando: JAVA 8, JDBC, JPA, SPRING BOOT, APACHE SPARK, SPRING AOP, AWS(S3, EMR, SQS) SPOCK, GROOVY. Creacion y mantenimiento a microservicios usando: JAVA 8, SPRING BOOT, SPRING CLOUD, SPRING JPA, SPRING OAUTH SECURITY, SPRING TEST, JUNIT, MOCKITO, LOMBOK, AWS, POSTGRESQL, DYNAMODB. Creación de pantallas  del lado del front con . ANGULAR 7, SASS, HTML5, JWT, CHARTJS, JASMIN .Migración de consultas ORACLE  a POSTGRESQL para los sistemas implementados con JDBC. Todo lo anterior utilizando la metodología SCRUM, Integración continua con JENKINS y Testeo continuó. Como skills adquiridos aquí principalmente fue el conocimiento de un panorama general de todo el ciclo de desarrollo del software al realizar tareas end to end tuve la oportunidad de entender como es toda la integración entre diferentes sistemas, como ayuda DEVOPS a la calidad y mejora en tiempos de implementación, también a conocer que es la arquitectura de microservicios y su ventaja sobre aplicaciones monolíticas.'
            }, 
            {
                tittle:'Oeste SA de CV',
                date: '12/2017-01/2019',
                description:'Aquí obtuve mi primer empleo como desarrollador JR estuve asignado a 3 clientes diferentes, Mi primer proyecto fue implementación de un sistema BPM usando JAVA 7, SPRING BOOT, SPRING DATA JDBC como tecnologías principales este desarrollo fue para la empresa Naturgy Al finalizar este proyecto fui asignado para dar continuidad al desarrollo un sistema de gestión empresarial para una micro empresa llamada IBH Las tecnologías principales que maneje aquí fueron: JAVA 8, SPRING BOOT, SPRING DATA JPA, SPRING SECURITY, JASPER REPORTS, APACHE POI, POSTGRESQL, ABGULAR 2 Y TYPESCIPT, por ultimo participe en un proyecto para la secretaría de turismo que consistía en extraer datos de la web  (WEBSCRAPING) para su posteriror analizis. Las tecnologías usadas aquí fueron JAVA 7 SPRING BOOT, SPRING DATA MONGO,SELENIUM, MONGO DB. Durante mi estancia aquí aprendí que es la arquitectura REST, Como funciona una aplicación MVC, Que es un ORM y sus ventajas sonre JDBC, Como aplicar las estructuras de java api collections de manera eficiente, que es IoC e inyección de dependencias y el lenguaje Typescript junto con Angular.'
            }, 
            {
                tittle:'Instituto Tecnológico de Tlanepantla',
                date: '05/2017-12/2017',
                description:'Aquí hice mis residencias profesionales, mis actividades consistían en sacar información de una base de datos implementada en ORACLE 12G para generar reportes y dar datos concretos a la administración de la escuela, La competencia más importante que desarrolle aquí fue el entendimiento de teoría de conjuntos aplicada a bases de datos relaciones.'
            },   
  
            {
                tittle:'Proyecto personal',
                date: 'Tiempo libre',
                description:'En mi tiempo libre imparto cursos de programación en Udemy y Youtube'
            }, 
        ]
    }
    
}


export class english {
    static profile = {
        rol: {
            id: 'profile-role',
            value: 'Java/Spring Backend developer (microservices)'
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
        },
        teach: {
            id: 'teach',
            value: 'Teach on Udemy and Youtube'
        }
    }

    static aboutMe = {
        tittle: {
            id: 'about-me-tittle',
            value: 'About me'
        },
        content: {
            id: 'about-me-content',
            value: 'My name is Alejandro, I am a web application developer and passionate about new technologies. I invite you to check out some projects I have on my github which you can find in the contact section.'
        },

        javaExperience: {
                titleId: 'java-experience',
                title: 'Java experience',
                contentId: 'java-content',
                content: 'Throughout my career I have worked with different projects and technologies focused on Java. Mainly web applications with Spring framework, I could also highlight the development of web scrapping systems, generation of reports with JasperReports and reports in Excel with apache poi. The Java versions I have worked with are 7, 8, 11 and 17 always using good practices by applying design patterns and solid principles.'
        },
        springExperience: {
            titleId: 'spring-experience',
            title: 'Spring experience',
            contentId: 'spring-content',
            content: 'In most of my projects I have used Spring in different applications and different projects, even with different languages ​​such as Kotlin and Java, I worked with spring context (without autoconfiguration) as with Spring Boot. I have integrated different relational, document and cache databases with spring data, I have also used reactive (web client) and non-reactive (rest template) http clients, I have integrated with spring other technologies such as Apache Kafka using spring Kafka or spring cloud streams Finally, I have implemented spring security and created unit tests with Junit, mockito and Spring Boot test.'
        },
        microservicesExperience: {
            titleId: 'microservices-experience',
            title: 'Microservices experience',
            contentId: 'microservices-content',
            content: 'My experience in developing microservices ranges from the decomposition of a monolith, design, maintenance and monitoring. Always modeled with DDD The technologies and tools I have used are: Spring cloud config server, Spring cloud eureka server, Spring cloud registry server, Spring cloud gateway, Spring cloud circuit baker, Spring cloud openfeign, Spring cloud streams, aws api gateway, Aws SQS, Aws lambdas, Zipkin, Prometheus, Apache Kafka, Axon, Docker, Some of the patterns I have used are: CQRS, SAGA, event sourcing, circuit baker, API gateway, Externalized Configuration, Database per microservice,'
        },
        devopsExperience: {
            titleId: 'devops-experience',
            title: 'Devops and Cloud experience',
            contentId: 'devops-content',
            content: 'Perhaps my greatest experience in devops is with docker and git, in the area of ​​container orchestration I have slight experience in kubernetes. I have had to consume and very occasionally create pipelines mainly in Jenkins and GitHub actions In the cloud computing section I have worked with the AWS SDK, S3, EC2 and RDS and I have also worked with GCP mainly with spanner db and identity platform.'
        },
        angularExperience: {
            titleId: 'angular-experience',
            title: 'Angular experience',
            contentId: 'angular-content',
            content: 'For a couple of years I was working as a full stack and working with the Angular 9 version I had to do several things including the creation of services, components, modules, routes, html templates and guards.'
        },
        apisExperience: {
            titleId: 'api-experience',
            title: 'API\'\s experience',
            contentId: 'api-content',
            content: 'In most of my jobs I have consumed and c created RESTful api. When I have to design a REST API I consider the good practices of the Richardson maturity model. I have handled events with MSQ mainly Kafka. Also in my first jobs I consumed some SOAP services'
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
                tittle: 'Despegar.com',
                date: '07/2022-01/2024',
                description:'Development of a middleware system for mapping business objects from all providers, internal and external services, information was collected through restful (Proposed improvement message brokers for internal services) for said mapping, Java 11 and Spring 5 technologies, the challenge in this work were not the technologies if not the business logic since between terminology, taxes of each country, the Qatar world cup, country currencies, agreements with hotels, flights, tours, travel agencies and entertainment parks the logic is somewhat complicated. Each development was done with high code standards applying clean code, SOLID principles and design patterns with their respective unit tests.'
            },
            {
                tittle:'Rappi',
                date: '01/2021-07/2022',
                description:'Well, during my stay here I was working on the restaurant vertical of the user app (all the part that has to do with stores, orders and products) 100% focused on backend using java and kotlin, developing, maintaining and monitoring microservices mainly spring webflux. Important to mention The implementation of spring webflux with kotlin is particularly special since with java we use project reactor and with cotlin we use a proprietary Kotlin technology called coroutines similar to threads but with more efficiency, 80% of all microservices were developed with kotlin and the other 20% with java, the technologies to highlight are POSTGRESQL, REDIS, KAFKA, DOCKER, JENKINS, SONARCUBE, DOCUMENTDB, J2DBC SIGNALFX SPRING WEBFLUX a bit of GO among others, I would also like to mention the implementation of microservice patterns such as circuit breaker, saga, CQRS, etc... also among my activities was giving support, reviewing pull request and proposing improvements to the implementation. It is also important to mention that it was a multicultural work team.'
            },
            {
                tittle:'Equifax',
                date: '01/2019-01/2021',
                description:'During my stay here I found myself developing in various technologies: Code refactoring and dependencies following OWASP standards and addressing vulnerabilities of a FORTIFY and SONARCUBE code scanner. Implementation of batch processes using: JAVA 8, JDBC, JPA, SPRING BOOT, APACHE SPARK, SPRING AOP, AWS (S3, EMR, SQS) SPOCK, GROOVY. Creation and maintenance of microservices using: JAVA 8, SPRING BOOT, SPRING CLOUD, SPRING JPA, SPRING OAUTH SECURITY, SPRING TEST, JUNIT, MOCKITO, LOMBOK, AWS, POSTGRESQL, DYNAMODB. Front side screen creation with. ANGULAR 7, SASS, HTML5, JWT, CHARTJS, JASMIN. Migration of ORACLE queries to POSTGRESQL for systems implemented with JDBC. All of the above using the SCRUM methodology, Continuous integration with JENKINS and Testing continued. As skills acquired here, it was mainly the knowledge of an overview of the entire software development cycle when performing end-to-end tasks, I had the opportunity to understand how all the integration between different systems is, how DEVOPS helps quality and improvement in times implementation, also to know what is the microservices architecture and its advantage over monolithic applications.'
            }, 
            {
                tittle:'Oeste SA de CV',
                date: '12/2017-01/2019',
                description:'Here I got my first job as a JR developer I was assigned to 3 different clients, My first project was implementation of a BPM system using JAVA 7, SPRING BOOT, SPRING DATA JDBC as main technologies this development was for the Naturgy company At the end of this project I was assigned to give continuity to the development of a business management system for a micro company called IBH The main technologies that I handled here were: JAVA 8, SPRING BOOT, SPRING DATA JPA, SPRING SECURITY, JASPER REPORTS, APACHE POI, POSTGRESQL, ABGULAR 2 AND TYPESCIPT, Finally, I participated in a project for the tourism secretariat that consisted of extracting data from the web (WEBSCRAPING) for its subsequent analysis. The technologies used here were JAVA 7 SPRING BOOT, SPRING DATA MONGO, SELENIUM, MONGO DB. During my stay here I learned what the REST architecture is, How an MVC application works, What is an ORM and its advantages with JDBC, How to apply the structures of java api collections efficiently, what is Ioc and inyection of dependencies and the Typescript language along with Angular.'
            }, 
            {
                tittle:'Instituto Tecnológico de Tlanepantla',
                date: '05/2017-12/2017',
                description:'Here I did my professional residencies, my activities consisted of obtaining information from a database implemented in ORACLE 12G to generate reports and give concrete data to the school administration, The most important competence that I developed here was the understanding of applied set theory to relationship databases.'
            }, 
            {
                tittle:'Personal project',
                date: 'Free time',
                description:'In my free time I teach programming courses on Udemy and Youtube.'
            }
        ]
    }
}