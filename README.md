# 🚌 Andina Bus - Backend SmartCode

Plataforma integral de gestión para cooperativas de transporte que permite reservas online de viajes, gestión de flotas, operaciones en tiempo real, procesamiento de pagos, generación de boletos con códigos QR y ventas presenciales en terminales. Sistema escalable basado en arquitectura de microservicios con Spring Boot.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo ._

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
- Java Development Kit (JDK) 21 
  Descargar desde: https://www.oracle.com/java/technologies/downloads/

- Maven 3.8.1 o superior
  Descargar desde: https://maven.apache.org/download.cgi

- Git 2.30 o superior
  Descargar desde: https://git-scm.com/

- MySQL 8.0+ o PostgreSQL 14+ (para base de datos)
  MySQL: https://www.mysql.com/downloads/
  PostgreSQL: https://www.postgresql.org/download/

- Postman (opcional, para probar endpoints)
  Descargar desde: https://www.postman.com/
```

Verifica la instalación ejecutando:

```bash
java -version
mvn -version
git --version
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

**Paso 1: Clonar el repositorio**

_Clona el proyecto desde GitHub a tu máquina local_

```bash
git clone https://github.com/AlexiP18/backend-andinobus.git
cd backend-andinobus
```

**Paso 2: Crear la base de datos**

_Crea la base de datos y el usuario de acceso_

```bash
mysql -u root -p
CREATE DATABASE andino_bus;
CREATE USER 'andino_user'@'localhost' IDENTIFIED BY 'Andino@2024';
GRANT ALL PRIVILEGES ON andino_bus.* TO 'andino_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

**Paso 3: Configurar variables de ambiente**

_Crea el archivo de configuración local_

```bash
cp src/main/resources/application.properties.example src/main/resources/application.properties
```

Edita `src/main/resources/application.properties`:

```properties
# Puerto de la aplicación
server.port=8080
server.servlet.context-path=/

# Configuración de base de datos
spring.datasource.url=jdbc:mysql://localhost:3306/andino_bus
spring.datasource.username=andino_user
spring.datasource.password=Andino@2024
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect

# JWT Configuration
app.jwt.secret=tu-clave-secreta-muy-segura-aqui-minimo-32-caracteres
app.jwt.expiration=86400000

# CORS Configuration
app.cors.allowed-origins=http://localhost:3000,http://localhost:3001

# Logging
logging.level.root=INFO
logging.level.com.andinobus=DEBUG
```

**Paso 4: Descargar dependencias y compilar**

_Descarga todas las dependencias del proyecto y compila el código_

```bash
mvn clean install
```

**Paso 5: Ejecutar la aplicación**

_Inicia el servidor Spring Boot en tu máquina local_

```bash
mvn spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=dev"
```

O desde tu IDE (IntelliJ IDEA, Eclipse, VSCode):
- Click derecho en `BackendSmartcodeApplication.java`
- Selecciona "Run" o "Run As > Java Application

📚 **Documentacion del proyecto:**

Este backend cuenta con documentación generada automáticamente mediante diferentes herramientas para facilitar la comprensión y mantenimiento del sistema.

📄 JavaDocs

Documentación generada a partir del código fuente: clases, métodos y estructuras del sistema.
🔗 Acceder: https://github.com/elvis0007/documentacion_/tree/main/Javadoc

📘 Doxygen

Orientada a la arquitectura del sistema, diagramas, relaciones entre módulos y análisis interno.
🔗 Acceder: https://github.com/elvis0007/documentacion_/tree/main/Doxygen

🔥 Swagger / OpenAPI

Documentación navegable de los endpoints REST con la posibilidad de probar peticiones.
📌 Nota: Swagger normalmente se visualiza desde el backend en ejecución.
Si está publicado externamente:
🔗 Acceder: https://github.com/elvis0007/documentacion_/tree/main/Swageer

**Docker:**

```bash
# Compilar imagen Docker
docker build -t andinobus-backend:1.0.0 .

# Ejecutar contenedor
docker run -p 8080:8080 \
  -e SPRING_PROFILES_ACTIVE=prod \
  -e DB_URL=jdbc:mysql://mysql:3306/andino_bus \
  -e DB_USER=andino_user \
  -e DB_PASSWORD=password123 \
  andinobus-backend:1.0.0

# Con docker-compose
docker-compose -f docker-compose.prod.yml up -d
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Spring Boot 3.x](https://spring.io/projects/spring-boot) - Framework web principal
* [Spring Data JPA](https://spring.io/projects/spring-data-jpa) - Acceso a datos y ORM
* [Spring Security](https://spring.io/projects/spring-security) - Autenticación y autorización
* [Maven](https://maven.apache.org/) - Gestor de dependencias
* [MySQL](https://www.mysql.com/) - Base de datos relacional
* [JWT](https://jwt.io/) - Autenticación basada en tokens
* [Hibernate](https://hibernate.org/) - ORM (Object-Relational Mapping)
* [Lombok](https://projectlombok.org/) - Reducción de boilerplate
* [Google Zxing](https://github.com/zxing/zxing) - Generación de códigos QR
* [Jackson](https://github.com/FasterXML/jackson) - Serialización JSON
* [SLF4J](https://www.slf4j.org/) - Logging
* [JUnit 5](https://junit.org/junit5/) - Framework de testing



## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Elvis Flores** - *Trabajo Inicial* - [AlexiP18](https://github.com/AlexiP18)
* **Alexis Poaquiza** - *Documentación JavaDocs* - [apoaquiza](https://github.com/apoaquiza)
* **Melanie Silva** - *Testing y QA* - [Katty-dev](https://github.com/katty-dev/katty-dev)
* **Jeferson Poaquiza** - *Documentación Técnica* - [jpoaquiza](https://github.com/jpoaquiza)
* **Alex Ponluisa** - *DevOps y Deployment* - [XLexus](https://github.com/xLexus)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/AlexiP18/backend-andinobus/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

```
MIT License

Copyright (c) 2024 Andino Bus


⌨️ con ❤️ por [Andina Bus Team](https://github.com/AlexiP18) 😊
