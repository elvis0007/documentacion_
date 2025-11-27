# Tutorial Markdown
## Doxygen
Este tutorial explica paso a paso cómo instalar, configurar y generar documentación con Doxygen para un proyecto Java específicamente para el Backend AndinoBus - SmartCode.
Incluye instalación, configuración del archivo Doxyfile, documentación dentro del código y ejecución del script automatizado.

## Desarrollo
Este tutorial explica paso a paso cómo instalar, configurar y generar documentación con Doxygen para un proyecto Java basado en Spring Boot.

### Pre-requisitos
Para este proyecto necesitamos los siguientes pre-requisitos para Doxigen
1. Descargar Doxigen
```
https://www.doxygen.nl/download.html
```

### Instalación 

La imagen muestra la ventana del instalador de Doxygen 1.15.0 en la etapa “Ready to Install”, indicando que está listo para comenzar la instalación completa.

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366563/image-preview)

2. Instalación de Graphviz

Graphviz permite generar diagramas UML dentro de la documentación (clases, dependencias, etc.).

Para instalarlo fácilmente en Windows usamos Chocolatey desde PowerShell:

```
choco install graphviz

```


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366564/image-preview)

### Proyecto
3. Ingresar al Proyecto Java

Para esta práctica documentaremos:
```
Backend AndinoBus – Proyecto en Spring Boot
```

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366565/image-preview)

4.  Creación del archivo Doxygen en la raíz del proyecto
![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366566/image-preview)

4. Configuración del archivo Doxygen 

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366567/image-preview)

```
# Configuración de Doxygen para Backend AndinoBus
# Generado para documentar API Spring Boot

#---------------------------------------------------------------------------
# Configuración del proyecto
#---------------------------------------------------------------------------
DOXYFILE_ENCODING      = UTF-8
PROJECT_NAME           = "Backend AndinoBus - SmartCode"
PROJECT_NUMBER         = "1.0.0"
PROJECT_BRIEF          = "Sistema de gestión de transporte interprovincial"
PROJECT_LOGO           = 

#---------------------------------------------------------------------------
# Configuración de construcción
#---------------------------------------------------------------------------
OUTPUT_DIRECTORY       = docs
CREATE_SUBDIRS         = NO
ALLOW_UNICODE_NAMES    = NO
OUTPUT_LANGUAGE        = Spanish
BRIEF_MEMBER_DESC      = YES
REPEAT_BRIEF           = YES
ABBREVIATE_BRIEF       = "The $name class" \
                         "The $name widget" \
                         "The $name file" \
                         "is" \
                         "provides" \
                         "specifies" \
                         "contains" \
                         "represents" \
                         "a" \
                         "an" \
                         "the"

ALWAYS_DETAILED_SEC    = NO
INLINE_INHERITED_MEMB  = NO
FULL_PATH_NAMES        = YES
STRIP_FROM_PATH        = src/main/java/
STRIP_FROM_INC_PATH    = 
SHORT_NAMES            = NO
JAVADOC_AUTOBRIEF      = YES
QT_AUTOBRIEF           = NO
MULTILINE_CPP_IS_BRIEF = NO
PYTHON_DOCSTRING       = YES
INHERIT_DOCS           = YES
SEPARATE_MEMBER_PAGES  = NO
TAB_SIZE               = 4
ALIASES                = 
TCL_SUBST              = 
OPTIMIZE_OUTPUT_FOR_C  = NO
OPTIMIZE_OUTPUT_JAVA   = YES
OPTIMIZE_FOR_FORTRAN   = NO
OPTIMIZE_OUTPUT_VHDL   = NO
OPTIMIZE_OUTPUT_SLICE  = NO
EXTENSION_MAPPING      = java=Java
MARKDOWN_SUPPORT       = YES
TOC_INCLUDE_HEADINGS   = 5
AUTOLINK_SUPPORT       = YES
BUILTIN_STL_SUPPORT    = NO
CPP_CLI_SUPPORT        = NO
SIP_SUPPORT            = NO
IDL_PROPERTY_SUPPORT   = YES
DISTRIBUTE_GROUP_DOC   = NO
GROUP_NESTED_COMPOUNDS = NO
SUBGROUPING            = YES
INLINE_GROUPED_CLASSES = NO
INLINE_SIMPLE_STRUCTS  = NO
TYPEDEF_HIDES_STRUCT   = NO
LOOKUP_CACHE_SIZE      = 0

#---------------------------------------------------------------------------
# Configuración de mensajes de construcción
#---------------------------------------------------------------------------
QUIET                  = NO
WARNINGS               = YES
WARN_IF_UNDOCUMENTED   = YES
WARN_IF_DOC_ERROR      = YES
WARN_NO_PARAMDOC       = NO
WARN_AS_ERROR          = NO
WARN_FORMAT            = "$file:$line: $text"
WARN_LOGFILE           = warnings.log

#---------------------------------------------------------------------------
# Configuración de archivos de entrada
#---------------------------------------------------------------------------
INPUT                  = src/main/java \
                         README.md \
                         API.md \
                         ARCHITECTURE.md \
                         MAPA_ENTIDADES_API.txt

INPUT_ENCODING         = UTF-8
FILE_PATTERNS          = *.java \
                         *.md \
                         *.txt \
                         *.properties

RECURSIVE              = YES
EXCLUDE                = src/main/java/com/andinobus/backendsmartcode/BackendSmartcodeApplicationTests.java
EXCLUDE_SYMLINKS       = NO
EXCLUDE_PATTERNS       = */test/* \
                         */target/*
EXCLUDE_SYMBOLS        = 
EXAMPLE_PATH           = postman/
EXAMPLE_PATTERNS       = *.json
EXAMPLE_RECURSIVE      = NO
IMAGE_PATH             = 
INPUT_FILTER           = 
FILTER_PATTERNS        = 
FILTER_SOURCE_FILES    = NO
FILTER_SOURCE_PATTERNS = 
USE_MDFILE_AS_MAINPAGE = README.md

#---------------------------------------------------------------------------
# Configuración de índice de código fuente
#---------------------------------------------------------------------------
SOURCE_BROWSER         = YES
INLINE_SOURCES         = NO
STRIP_CODE_COMMENTS    = YES
REFERENCED_BY_RELATION = NO
REFERENCES_RELATION    = NO
REFERENCES_LINK_SOURCE = YES
SOURCE_TOOLTIPS        = YES
USE_HTAGS              = NO
VERBATIM_HEADERS       = YES
CLANG_ASSISTED_PARSING = NO
CLANG_OPTIONS          = 
CLANG_DATABASE_PATH    = 

#---------------------------------------------------------------------------
# Configuración de índices alfabéticos
#---------------------------------------------------------------------------
ALPHABETICAL_INDEX     = YES
COLS_IN_ALPHA_INDEX    = 5
IGNORE_PREFIX          = 

#---------------------------------------------------------------------------
# Configuración de salida HTML
#---------------------------------------------------------------------------
GENERATE_HTML          = YES
HTML_OUTPUT            = html
HTML_FILE_EXTENSION    = .html
HTML_HEADER            = 
HTML_FOOTER            = 
HTML_STYLESHEET        = 
HTML_EXTRA_STYLESHEET  = 
HTML_EXTRA_FILES       = 
HTML_COLORSTYLE_HUE    = 220
HTML_COLORSTYLE_SAT    = 100
HTML_COLORSTYLE_GAMMA  = 80
HTML_TIMESTAMP         = NO
HTML_DYNAMIC_MENUS     = YES
HTML_DYNAMIC_SECTIONS  = NO
HTML_INDEX_NUM_ENTRIES = 100
GENERATE_DOCSET        = NO
DOCSET_FEEDNAME        = "Doxygen generated docs"
DOCSET_BUNDLE_ID       = org.doxygen.Project
DOCSET_PUBLISHER_ID    = org.doxygen.Publisher
DOCSET_PUBLISHER_NAME  = Publisher
GENERATE_HTMLHELP      = NO
CHM_FILE               = 
HHC_LOCATION           = 
GENERATE_CHI           = NO
CHM_INDEX_ENCODING     = 
BINARY_TOC             = NO
TOC_EXPAND             = NO
GENERATE_QHP           = NO
QCH_FILE               = 
QHP_NAMESPACE          = org.doxygen.Project
QHP_VIRTUAL_FOLDER     = doc
QHP_CUST_FILTER_NAME   = 
QHP_CUST_FILTER_ATTRS  = 
QHP_SECT_FILTER_ATTRS  = 
QHG_LOCATION           = 
GENERATE_ECLIPSEHELP   = NO
ECLIPSE_DOC_ID         = org.doxygen.Project
DISABLE_INDEX          = NO
GENERATE_TREEVIEW      = YES
ENUM_VALUES_PER_LINE   = 4
TREEVIEW_WIDTH         = 250
EXT_LINKS_IN_WINDOW    = NO
FORMULA_FONTSIZE       = 10
FORMULA_TRANSPARENT    = YES
FORMULA_MACROFILE      = 
USE_MATHJAX            = NO
MATHJAX_FORMAT         = HTML-CSS
MATHJAX_RELPATH        = https://cdn.mathjax.org/mathjax/latest
MATHJAX_EXTENSIONS     = 
MATHJAX_CODEFILE       = 
SEARCHENGINE           = YES
SERVER_BASED_SEARCH    = NO
EXTERNAL_SEARCH        = NO
SEARCHENGINE_URL       = 
SEARCHDATA_FILE        = searchdata.xml
EXTERNAL_SEARCH_ID     = 
EXTRA_SEARCH_MAPPINGS  = 

#---------------------------------------------------------------------------
# Configuración de salida LaTeX
#---------------------------------------------------------------------------
GENERATE_LATEX         = NO
LATEX_OUTPUT           = latex
LATEX_CMD_NAME         = latex
MAKEINDEX_CMD_NAME     = makeindex
LATEX_MAKEINDEX_CMD    = makeindex
COMPACT_LATEX          = NO
PAPER_TYPE             = a4
EXTRA_PACKAGES         = 
LATEX_HEADER           = 
LATEX_FOOTER           = 
LATEX_EXTRA_STYLESHEET = 
LATEX_EXTRA_FILES      = 
PDF_HYPERLINKS         = YES
USE_PDFLATEX           = YES
LATEX_BATCHMODE        = NO
LATEX_HIDE_INDICES     = NO
LATEX_SOURCE_CODE      = NO
LATEX_BIB_STYLE        = plain
LATEX_TIMESTAMP        = NO
LATEX_EMOJI_DIRECTORY  = 

#---------------------------------------------------------------------------
# Configuración de salida RTF
#---------------------------------------------------------------------------
GENERATE_RTF           = NO
RTF_OUTPUT             = rtf
COMPACT_RTF            = NO
RTF_HYPERLINKS         = NO
RTF_STYLESHEET_FILE    = 
RTF_EXTENSIONS_FILE    = 
RTF_SOURCE_CODE        = NO

#---------------------------------------------------------------------------
# Configuración de salida Man page
#---------------------------------------------------------------------------
GENERATE_MAN           = NO
MAN_OUTPUT             = man
MAN_EXTENSION          = .3
MAN_SUBDIR             = 
MAN_LINKS              = NO

#---------------------------------------------------------------------------
# Configuración de salida XML
#---------------------------------------------------------------------------
GENERATE_XML           = NO
XML_OUTPUT             = xml
XML_PROGRAMLISTING     = YES
XML_NS_MEMB_FILE_SCOPE = NO

#---------------------------------------------------------------------------
# Configuración de salida DOCBOOK
#---------------------------------------------------------------------------
GENERATE_DOCBOOK       = NO
DOCBOOK_OUTPUT         = docbook
DOCBOOK_PROGRAMLISTING = NO

#---------------------------------------------------------------------------
# Configuración de autogeneración
#---------------------------------------------------------------------------
ENABLE_PREPROCESSING   = YES
MACRO_EXPANSION        = NO
EXPAND_ONLY_PREDEF     = NO
SEARCH_INCLUDES        = YES
INCLUDE_PATH           = 
INCLUDE_FILE_PATTERNS  = 
PREDEFINED             = 
EXPAND_AS_DEFINED      = 
SKIP_FUNCTION_MACROS   = YES

#---------------------------------------------------------------------------
# Configuración de referencias externas
#---------------------------------------------------------------------------
TAGFILES               = 
GENERATE_TAGFILE       = 
ALLEXTERNALS           = NO
EXTERNAL_GROUPS        = YES
EXTERNAL_PAGES         = YES

#---------------------------------------------------------------------------
# Configuración de diagramas de clase
#---------------------------------------------------------------------------
CLASS_DIAGRAMS         = YES
DIA_PATH               = 
HIDE_UNDOC_RELATIONS   = YES
HAVE_DOT               = YES
DOT_NUM_THREADS        = 0
DOT_FONTNAME           = Helvetica
DOT_FONTSIZE           = 10
DOT_FONTPATH           = 
CLASS_GRAPH            = YES
COLLABORATION_GRAPH    = YES
GROUP_GRAPHS           = YES
UML_LOOK               = YES
UML_LIMIT_NUM_FIELDS   = 10
TEMPLATE_RELATIONS     = NO
INCLUDE_GRAPH          = YES
INCLUDED_BY_GRAPH      = YES
CALL_GRAPH             = NO
CALLER_GRAPH           = NO
GRAPHICAL_HIERARCHY    = YES
DIRECTORY_GRAPH        = YES
DOT_IMAGE_FORMAT       = png
INTERACTIVE_SVG        = NO
DOT_PATH               = 
DOTFILE_DIRS           = 
MSCFILE_DIRS           = 
DIAFILE_DIRS           = 
PLANTUML_JAR_PATH      = 
PLANTUML_CFG_FILE      = 
PLANTUML_INCLUDE_PATH  = 
DOT_GRAPH_MAX_NODES    = 50
MAX_DOT_GRAPH_DEPTH    = 0
DOT_TRANSPARENT        = NO
DOT_MULTI_TARGETS      = NO
GENERATE_LEGEND        = YES
DOT_CLEANUP            = YES
```

5. Documentamos el código del proyecto para generar la documentación con Doxygen.


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366568/image-preview)


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366569/image-preview)




```

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

/**
 * @brief Entidad que representa un vehículo de transporte
 * @details Almacena información detallada de los buses que operan en el sistema,
 * incluyendo datos técnicos, identificación y asociación con cooperativas.
 *
 * @details Relaciones:
 * - ManyToOne con Cooperativa: Un bus pertenece a una cooperativa
 * - OneToMany con Viaje: Un bus puede realizar múltiples viajes
 *
 * @details Identificación:
 * - placa: Identificador único legal del vehículo
 * - numeroInterno: Código interno de la cooperativa
 *
 * @author Equipo de Desarrollo AndinoBus
 * @date 2025-11-25
 * @version 1.0.0
 *
 * @see Cooperativa
 * @see com.andinobus.backendsmartcode.catalogos.api.controllers.BusController
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

```



```

import com.andinobus.backendsmartcode.catalogos.application.services.CooperativaService;
import jakarta.validation.Valid;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @brief Controlador REST para gestión CRUD de cooperativas de transporte
 * @details Proporciona endpoints completos para administrar cooperativas:
 * Crear, Listar, consultar, actualizar y eliminar. Incluye funciones
 * de búsqueda y paginación para manejo eficiente de grandes volúmenes.
 *
 * @details Operaciones CRUD disponibles:
 * - POST /api/cooperativas - Crear nueva cooperativa
 * - GET /api/cooperativas - Listar cooperativas con búsqueda y paginación
 * - GET /api/cooperativas/{id} - Obtener cooperativa específica
 * - PUT /api/cooperativas/{id} - Actualizar cooperativa
 * - DELETE /api/cooperativas/{id} - Eliminación lógica de cooperativa
 *
 * @details Casos de uso principales:
 * - Administradores registran nuevas cooperativas
 * - Personal consulta información de cooperativas activas
 * - Búsqueda por nombre para asignación de rutas
 * - Gestión de datos de contacto y documentos
 * - Desactivación de cooperativas inactivas
 *
 * @author Equipo de Desarrollo AndinoBus
 * @date 2025-11-25
 * @version 1.0.0
 */

```


6. Generamos la documentación desde terminal.
Para generar la documentación creamos un archivo “generar-docs.bat” con la configuración necesaria y lo ejecutamos con el comando “.\generar_docs.bat”. Esto generara la documentación automáticamente. 


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366570/image-preview)


```
@echo off
REM Script para generar documentación con Doxygen
REM Backend AndinoBus - SmartCode

echo ================================================================================
echo                    GENERADOR DE DOCUMENTACION DOXYGEN
echo                     Backend AndinoBus - SmartCode v1.0
echo ================================================================================
echo.

echo [1/4] Verificando que Doxygen este instalado...
doxygen --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Doxygen no esta instalado o no esta en el PATH
    echo.
    echo Instala Doxygen desde: https://www.doxygen.nl/download.html
    echo O con Chocolatey: choco install doxygen.portable
    echo.
    pause
    exit /b 1
)
echo ✓ Doxygen encontrado

echo.
echo [2/4] Limpiando documentacion anterior...
if exist "docs" (
    rmdir /s /q "docs"
    echo ✓ Carpeta docs anterior eliminada
) else (
    echo ✓ No hay documentacion anterior
)

echo.
echo [3/4] Generando documentacion...
doxygen Doxyfile
if errorlevel 1 (
    echo ERROR: Fallo en la generacion de documentacion
    echo Revisa el archivo warnings.log para mas detalles
    pause
    exit /b 1
)

echo ✓ Documentacion generada exitosamente

echo.
echo [4/4] Verificando archivos generados...
if exist "docs\html\index.html" (
    echo ✓ Archivo principal encontrado: docs\html\index.html
) else (
    echo ERROR: No se encontro el archivo index.html
    pause
    exit /b 1
)

echo.
echo ================================================================================
echo                             DOCUMENTACION LISTA
echo ================================================================================
echo.
echo  Ubicacion: %CD%\docs\html\
echo  Archivo principal: index.html
echo  Estadisticas:

if exist "docs\html" (
    for /f %%i in ('dir /s /b "docs\html\*.html" ^| find /c ".html"') do echo    - Paginas HTML generadas: %%i
)

if exist "warnings.log" (
    for /f %%i in ('find /c "" warnings.log') do echo    - Advertencias: %%i
    echo    - Log de advertencias: warnings.log
)

echo.
echo ¿Deseas abrir la documentacion en el navegador? (s/n)
set /p respuesta="Respuesta: "

if /i "%respuesta%"=="s" (
    echo.
    echo Abriendo documentacion en el navegador...
    start "" "docs\html\index.html"
    echo ✓ Documentacion abierta
) else (
    echo.
    echo Para ver la documentacion manualmente:
    echo start docs\html\index.html
)

echo.
echo ================================================================================
echo                              PROCESO COMPLETO
echo ================================================================================
echo.
pause

```

## Ejecución

La imagen muestra la ejecución de un script generar_docs.bat en Visual Studio Code para generar documentación con Doxygen en el proyecto Backend AndinoBus - SmartCode v1.0, verificando instalación, limpiando documentación previa y creando nuevos archivos.

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366571/image-preview)

La imagen muestra la finalización del proceso de generación de documentación con Doxygen en Visual Studio Code, indicando que se creó el archivo principal index.html en la carpeta docs/html, con 211 páginas generadas y la apertura automática en el navegador.

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366572/image-preview)

7. Documentación generada.

La imagen muestra la documentación generada con Doxygen para el proyecto Backend AndinoBus - SmartCode 1.0.0, incluyendo una guía de inicio rápido con requisitos (Java 17+, PostgreSQL, Maven) e instrucciones de instalación y configuración en formato HTML.

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366573/image-preview)


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366574/image-preview)



![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366575/image-preview)


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366576/image-preview)

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366577/image-preview)




## Construido con

- Doxigen
- Graphviz

## JAVADOCS

Este tutorial explica paso a paso cómo configurar, instalar y generar documentación JavaDocs dentro de un proyecto Java/Maven, incluyendo configuración del pom.xml, instalación de JDK 21, creación de variables de entorno y generación automática de documentación HTML.

## Desarrollo
Este tutorial explica paso a paso cómo instalar, configurar y generar JavaDocs para un proyecto Java con Maven.
## Pre-requisitos
Para utilizar JavaDocs correctamente necesitamos:

1. Configurar el plugin de JavaDoc en Maven
Dentro del archivo pom.xml, en la sección:
```
<build>
    <plugins>
    
```
Debemos agregar el plugin de JavaDoc correspondiente a nuestra versión de Java.

Este plugin permite que Maven genere documentación a partir de los comentarios JavaDoc del proyecto.


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366613/image-preview)

2. Instalación de JDK 21 (Java 21)

Para que JavaDocs funcione correctamente es necesario instalar JDK 21.

Luego, debemos agregar la ruta del JDK a las variables de entorno del sistema.

Abrir variables de entorno

Presionamos:
```
WIN + R
```
Escribimos:
```
sysdm.cpl

```

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366614/image-preview)

Esto abrirá la ventana de Propiedades del Sistema.


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366615/image-preview)


Ir a:
```
1. Opciones avanzadas
2. Variables de entorno
```

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366616/image-preview)

#### Crear variable JAVA_HOME
En la sección Variables del sistema hacemos clic en Nueva y agregamos:
```
Nombre: JAVA_HOME
```
```
Valor: ruta del JDK 21
(ejemplo)
C:\Program Files\Java\jdk-21
```

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366618/image-preview)

#### Agregar JDK al PATH
En Variables del sistema, buscamos:
```
Path

```
Clic en Editar → Nuevo:

```
%JAVA_HOME%\bin
```
Con esto nuestro equipo ya reconoce Java 21 para poder generar JavaDocs.

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366620/image-preview)

## Proyecto

Para que JavaDocs pueda generar documentación, debemos agregar comentarios sobre cada clase o método que queramos documentar.

Ejemplo:

```
/**
 * Clase que gestiona los usuarios del sistema.
 * @author Equipo
 * @version 1.0
 * @since 2024
 */

```
Estos comentarios permitirán que Maven genere la documentación automáticamente.

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366621/image-preview)

```

import ...

/**
 * Controlador REST para la gestión de rutas de transporte.
 *
 * Proporciona endpoints CRUD completos para administrar las rutas
 * de transporte de las cooperativas, incluyendo filtrado por estado.
 *
 * Perfil activo: dev
 * Base URL: /api/admin/rutas
 *
 * @author Alex
 * @version 1.0
 * @since 2025-11-01
 */
@Slf4j
@Profile("dev")
@RestController
@RequestMapping(value = "/api/admin/rutas")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RutaController {

    /**
     * Servicio de lógica de negocio para rutas.
     */
    private final RutaService rutaService;

    /**
     * Obtiene todas las rutas con filtrado opcional.
     *
     * Soporta los siguientes filtros:
     * - activas: Rutas actualmente en operación
     * - aprobadas: Rutas que han sido aprobadas por el administrador
     * - sin filtro: Todas las rutas del sistema
     */
}

```


```

/**
 * <li>Requiere reserva previa</li>
 * <li>Pago se realiza directamente en efectivo o POS</li>
 * <li>Boleto se imprime y entrega inmediatamente</li>
 * <li>Basado en frecuencias programadas, no en viajes específicos</li>
 *
 * El cliente selecciona la frecuencia (horario), fecha de viaje,
 * asientos disponibles y procesa el pago en el acto. El sistema
 * genera el boleto inmediatamente tras confirmar el pago.
 *
 * <b>Perfil activo:</b> dev
 * <b>Base URL:</b> /api/ventas-presenciales
 *
 * @author Alex
 * @version 1.0
 * @since 2025-11-01
 */
@RestController
@RequestMapping(value = "/api/ventas-presenciales")
@Profile("dev")
@RequiredArgsConstructor
public class VentaPresencialController {

    private final VentaPresencialService ventaPresencialService;

    /**
     * Servicio de lógica de negocio para ventas presenciales.
     */
    private final VentaPresencialService ventaPresencialService;

    /**
     * Crea una venta presencial directa basada en frecuencia.
     *
     * Flujo completo de venta presencial:
     * - El cliente selecciona frecuencia (horario) y fecha
     */
}

```
## Ejecucion
### Verificar configuración desde la terminal

Abrimos la terminal del IDE (IntelliJ IDEA) y ejecutamos:
```
.\mvnw.cmd -v

```
Si todo está configurado correctamente, mostrará:

- Versión del JDK (21)

- Versión de Maven

- Datos del proyecto

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366623/image-preview)

### Generar documentación JavaDocs

Para generar la documentación ejecutamos:

```
.\mvnw.cmd javadoc:javadoc

```
Esto creará la documentación dentro de la carpeta:
```
target/site/apidocs/

```

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366625/image-preview)

### Visualizar la documentación

Nos dirigimos a:

```
target/site/apidocs/

```
Dentro abrimos:

```
index.html

```

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366629/image-preview)

Esto nos mostrará la documentación Java generada, incluyendo:

Comentarios de clases

- Métodos

- Atributos

- Paquetes del proyecto


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366630/image-preview)


### Actualizar documentación después de cambios

Si se modifica o agrega nueva documentación en el proyecto, debemos ejecutar:

```
.\mvnw.cmd clean install

```
Esto reconstruirá el proyecto y actualizará los HTML generados.

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366631/image-preview)


![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366632/image-preview)

### Generar documentación como archivo .jar

También podemos generar la documentación en un paquete .jar:

```
.\mvnw.cmd javadoc:javadoc
```
Además de los archivos HTML, aparecerá un .jar en:
```
target/

```

![image.png](https://api.apidog.com/api/v1/projects/1137772/resources/366633/image-preview)
### Construido con

- JavaDocs

- Maven

- JDK 21

# Swagger/OpenAPI en Backend AndinoBus

##  Tabla de Contenidos
1. [Introducción](#introducción)
2. [Configuración Inicial](#configuración-inicial)
3. [Archivos Modificados](#archivos-modificados)
4. [Aplicación de la Configuración](#aplicación-de-la-configuración)
5. [Ejecución del Proyecto](#ejecución-del-proyecto)
6. [Pruebas Realizadas](#pruebas-realizadas)
7. [Solución de Problemas](#solución-de-problemas)
8. [Conclusiones](#conclusiones)

---

## Introducción

Este documento detalla el proceso completo de implementación de **Swagger/OpenAPI 3.0** en el proyecto Backend AndinoBus, utilizando la librería **springdoc-openapi** para Spring Boot 3.5.7.

### Objetivos
- Documentar automáticamente todos los endpoints de la API REST
- Proporcionar una interfaz interactiva para probar los endpoints
- Generar especificación OpenAPI en formato JSON/YAML
- Facilitar el desarrollo y testing del frontend

### Tecnologías Utilizadas
- **Spring Boot:** 3.5.7
- **springdoc-openapi:** 2.7.0
- **Java:** 21
- **Maven:** Gestión de dependencias

---

## Configuración Inicial

### 1. Dependencia Maven

Se agregó la dependencia de springdoc-openapi en el archivo `pom.xml`:

```xml
<!-- OpenAPI/Swagger Documentation -->
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.7.0</version>
</dependency>
```

**Nota Importante:** Se utilizó la versión **2.7.0** por compatibilidad con Spring Boot 3.5.x. La versión anterior (2.6.0) causaba un error `NoSuchMethodError` relacionado con `ControllerAdviceBean`.

### 2. Configuración de Propiedades

Se agregaron las siguientes propiedades en `application.properties`:

```properties
# ===================================================================
# OpenAPI / Swagger Configuration
# ===================================================================
# URL donde se expone la documentación OpenAPI en formato JSON/YAML
springdoc.api-docs.path=/v3/api-docs

# URL donde se accede a Swagger UI
springdoc.swagger-ui.path=/swagger-ui.html

# Habilitar Swagger UI
springdoc.swagger-ui.enabled=true

# Intentar obtener esquemas en modo lazy
springdoc.swagger-ui.lazy-load=true

# Ordenar endpoints alfabéticamente
springdoc.swagger-ui.operationsSorter=alpha
springdoc.swagger-ui.tagsSorter=alpha

# Mostrar información de vendor extensions
springdoc.show-actuator=false

# Paquetes a escanear para documentación
springdoc.packages-to-scan=com.andinobus.backendsmartcode

# Server URL personalizado (puede configurarse por ambiente)
springdoc.api-docs.server.url=http://localhost
```

### 3. Clase de Configuración OpenAPI

Se creó la clase `OpenApiConfig.java` en el paquete `config`:

**Ubicación:** `src/main/java/com/andinobus/backendsmartcode/config/OpenApiConfig.java`

```java
package com.andinobus.backendsmartcode.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    @Value("${server.port:8081}")
    private String serverPort;

    @Value("${springdoc.api-docs.server.url:http://localhost}")
    private String serverUrl;

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("AndinoBus - Sistema de Reservas y Gestión")
                        .version("1.0.0")
                        .description("""
                                API REST para el sistema de gestión de reservas de pasajes de bus.
                                
                                ## Módulos principales:
                                - **Autenticación**: Gestión de usuarios y roles
                                - **Catálogos**: Buses, rutas, frecuencias, asientos
                                - **Cooperativas**: Gestión de cooperativas y flotas
                                - **Ubicación**: Provincias, cantones, parroquias
                                - **Reservas**: Sistema de reservas y boletos
                                - **Ventas**: Gestión de ventas y pagos
                                - **Configuración**: Parámetros del sistema
                                
                                ## Autenticación
                                La mayoría de endpoints requieren autenticación. 
                                Incluir el header: `X-User-Id: {userId}` en las peticiones.
                                """)
                        .contact(new Contact()
                                .name("Equipo AndinoBus")
                                .email("soporte@andinobus.com")
                                .url("https://andinobus.com"))
                        .license(new License()
                                .name("Propietario")
                                .url("https://andinobus.com/license")))
                .servers(List.of(
                        new Server()
                                .url(serverUrl + ":" + serverPort)
                                .description("Servidor de Desarrollo"),
                        new Server()
                                .url("http://localhost:8081")
                                .description("Servidor Local"),
                        new Server()
                                .url("https://api.andinobus.com")
                                .description("Servidor de Producción")
                ));
    }
}
```

**Características de la configuración:**
- Información general de la API (título, versión, descripción)
- Datos de contacto del equipo
- Descripción de los módulos principales del sistema
- Múltiples servidores configurables (desarrollo, local, producción)
- Puerto configurable mediante properties (`8081` por defecto)

---

## Archivos Modificados

### Resumen de Cambios

| Archivo | Tipo de Cambio | Descripción |
|---------|----------------|-------------|
| `pom.xml` | Modificado | Agregada dependencia springdoc-openapi 2.7.0 |
| `application.properties` | Modificado | Agregadas configuraciones de Swagger/OpenAPI |
| `OpenApiConfig.java` | Creado | Clase de configuración personalizada de OpenAPI |
| `SWAGGER_DOCUMENTATION.md` | Creado | Guía de uso y documentación de Swagger |

### Detalles de Modificaciones

#### 1. pom.xml
```xml
<!-- ANTES: No existía -->

<!-- DESPUÉS: -->
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.7.0</version>
</dependency>
```

#### 2. application.properties
```properties
# ANTES: No existía configuración de Swagger

# DESPUÉS: 11 líneas de configuración agregadas
springdoc.api-docs.path=/v3/api-docs
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.enabled=true
# ... y más configuraciones
```

#### 3. OpenApiConfig.java
- **Archivo nuevo:** 80+ líneas
- **Paquete:** `com.andinobus.backendsmartcode.config`
- **Propósito:** Configurar metadatos de la API y servidores

---

## Aplicación de la Configuración

### Paso 1: Actualización de Dependencias

Después de modificar el `pom.xml`, se debe ejecutar:

```bash
mvn clean install -DskipTests
```

Este comando:
1. Limpia el directorio `target/`
2. Descarga la dependencia `springdoc-openapi-starter-webmvc-ui:2.7.0`
3. Compila el proyecto con las nuevas dependencias
4. Empaqueta el artefacto

### Paso 2: Verificación de Archivos

Estructura de archivos después de la implementación:

```
backend-smartcode/
├── pom.xml (modificado)
├── src/
│   └── main/
│       ├── java/
│       │   └── com/andinobus/backendsmartcode/
│       │       └── config/
│       │           ├── CorsConfig.java
│       │           ├── FileStorageConfig.java
│       │           ├── SecurityConfig.java
│       │           └── OpenApiConfig.java (nuevo)
│       └── resources/
│           └── application.properties (modificado)
└── SWAGGER_DOCUMENTATION.md (nuevo)
```

### Paso 3: Reinicio del Servidor

Para aplicar los cambios, se debe reiniciar el servidor Spring Boot:

```bash
# Opción 1: Con Maven
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# Opción 2: Con el script del proyecto
run-dev.bat 8081

# Opción 3: Desde el IDE (IntelliJ IDEA, Eclipse)
# Run → BackendSmartcodeApplication
```

---

## Ejecución del Proyecto

### Iniciar el Servidor

1. **Con perfil de desarrollo:**
```bash
cd backend-smartcode
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

2. **Verificar inicio correcto:**

Los logs deben mostrar:
```
Started BackendSmartcodeApplication in X.XXX seconds
Tomcat started on port(s): 8081 (http)
```

3. **Confirmar que Swagger está disponible:**

Buscar en los logs:
```
INFO ... : Started o.s.b.a.w.s.s.m.SwaggerWelcome : Swagger UI enabled
INFO ... : Started springdoc-openapi-webmvc-ui
```

### URLs Disponibles

Una vez iniciado el servidor en el puerto **8081**:

| Recurso | URL | Descripción |
|---------|-----|-------------|
|  **Swagger UI** | http://localhost:8081/swagger-ui.html | Interfaz gráfica interactiva |
|  **OpenAPI JSON** | http://localhost:8081/v3/api-docs | Especificación en formato JSON |
|  **OpenAPI YAML** | http://localhost:8081/v3/api-docs.yaml | Especificación en formato YAML |
|  **API Base** | http://localhost:8081/api | Endpoints de la aplicación |

---

##  Pruebas Realizadas

### 1. Verificación de Acceso a Swagger UI

**Prueba:** Acceder a la interfaz de Swagger UI

**Pasos:**
1. Iniciar el servidor en puerto 8081
2. Abrir navegador en: http://localhost:8081/swagger-ui.html
3. Verificar que la página cargue correctamente

**Resultado Esperado:**
-  Página de Swagger UI visible
-  Título: "AndinoBus - Sistema de Reservas y Gestión"
-  Versión: 1.0.0
-  Descripción de módulos visible

**Screenshot esperado:**
```
┌─────────────────────────────────────────────────────────┐
│ AndinoBus - Sistema de Reservas y Gestión        v1.0.0 │
│─────────────────────────────────────────────────────────│
│ API REST para el sistema de gestión de reservas...      │
│                                                           │
│ Módulos principales:                                      │
│ • Autenticación: Gestión de usuarios y roles            │
│ • Catálogos: Buses, rutas, frecuencias, asientos        │
│ • ...                                                     │
│                                                           │
│ [Servers: Servidor Local ▼]                             │
│                                                           │
│ ▼ admin-controller                                       │
│ ▼ auth-controller                                        │
│ ▼ catalogos-controller                                   │
│ ...                                                       │
└─────────────────────────────────────────────────────────┘
```

### 2. Verificación de Especificación OpenAPI

**Prueba:** Verificar que la especificación OpenAPI se genera correctamente

**Pasos:**
1. Acceder a: http://localhost:8081/v3/api-docs
2. Verificar formato JSON válido
3. Verificar estructura OpenAPI 3.0

**Resultado Esperado:**
```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "AndinoBus - Sistema de Reservas y Gestión",
    "description": "API REST para el sistema de gestión...",
    "contact": {
      "name": "Equipo AndinoBus",
      "url": "https://andinobus.com",
      "email": "soporte@andinobus.com"
    },
    "license": {
      "name": "Propietario",
      "url": "https://andinobus.com/license"
    },
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:8081",
      "description": "Servidor de Desarrollo"
    }
  ],
  "paths": {
    "/api/auth/login": { ... },
    "/api/ubicacion/provincias": { ... },
    ...
  }
}
```

### 3. Prueba de Endpoints en Swagger UI

**Prueba:** Ejecutar peticiones desde la interfaz de Swagger

#### Test 3.1: GET /api/ubicacion/provincias

**Pasos:**
1. En Swagger UI, expandir el controlador `ubicacion-controller`
2. Buscar el endpoint `GET /api/ubicacion/provincias`
3. Click en "Try it out"
4. Click en "Execute"

**Resultado Esperado:**
- **Status Code:** 200 OK
- **Response Body:**
```json
[
  {
    "id": 1,
    "codigo": "01",
    "nombre": "AZUAY"
  },
  {
    "id": 2,
    "codigo": "02",
    "nombre": "BOLIVAR"
  },
  ...
]
```

#### Test 3.2: GET /api/catalogos/buses

**Pasos:**
1. Expandir `catalogos-controller`
2. Buscar `GET /api/catalogos/buses`
3. Click en "Try it out"
4. Agregar header `X-User-Id: 1` (si es requerido)
5. Click en "Execute"

**Resultado Esperado:**
- **Status Code:** 200 OK
- **Response Body:** Lista de buses configurados

#### Test 3.3: POST /api/auth/login

**Pasos:**
1. Expandir `auth-controller`
2. Buscar `POST /api/auth/login`
3. Click en "Try it out"
4. Completar Request Body:
```json
{
  "usuario": "admin",
  "password": "password123"
}
```
5. Click en "Execute"

**Resultado Esperado:**
- **Status Code:** 200 OK o 401 Unauthorized (según credenciales)
- **Response Body:** Token o mensaje de error

### 4. Prueba de Modelos/Schemas

**Prueba:** Verificar que los DTOs se documentan correctamente

**Pasos:**
1. Scroll hasta el final de Swagger UI
2. Buscar la sección "Schemas" o "Models"
3. Verificar que aparecen los DTOs del proyecto

**Modelos Esperados:**
- `ProvinciaDTO`
- `CantonDTO`
- `BusDTO`
- `RutaDTO`
- `ReservaDTO`
- `UsuarioDTO`
- ... y más

**Verificación de un modelo:**
```json
ProvinciaDTO {
  id (integer, optional): ID de la provincia
  codigo (string): Código de la provincia
  nombre (string): Nombre de la provincia
  cantones (array[CantonDTO], optional): Lista de cantones
}
```

---

##  Conclusiones

### Logros Alcanzados

1.  **Swagger/OpenAPI completamente funcional** en Spring Boot 3.5.7
2.  **Interfaz interactiva** disponible en http://localhost:8081/swagger-ui.html
3.  **Especificación OpenAPI 3.0** generada automáticamente
4.  **Documentación de módulos** incluida en la configuración
5.  **Compatibilidad con CORS** mantenida
6.  **Múltiples servidores** configurados (dev, local, prod)
7.  **Mínimo impacto** en el rendimiento del servidor

### Beneficios para el Proyecto

| Beneficio | Descripción |
|-----------|-------------|
|  **Documentación Automática** | Los endpoints se documentan sin código adicional |
|  **Testing Simplificado** | Pruebas directas desde el navegador |
|  **Colaboración Frontend** | Especificación clara para el equipo de frontend |
|  **Sincronización** | Documentación siempre actualizada con el código |
|  **Desarrollo Ágil** | Menos tiempo configurando clientes HTTP |
|  **Estandarización** | Especificación OpenAPI reconocida mundialmente |


### Estado Final del Proyecto

| Componente | Estado | Notas |
|------------|--------|-------|
| Dependencia springdoc |  Instalado | Versión 2.7.0 |
| Configuración OpenAPI |  Completo | Metadatos y servidores configurados |
| Properties |  Configurado | Rutas y opciones establecidas |
| Swagger UI |  Funcional | Accesible en /swagger-ui.html |
| OpenAPI Spec |  Generado | JSON y YAML disponibles |
| Documentación |  Creado | Guías de uso incluidas |
| Pruebas |  Realizadas | Todos los endpoints visibles |

---

##  Referencias

- [Springdoc OpenAPI Documentation](https://springdoc.org/)
- [OpenAPI Specification 3.0](https://swagger.io/specification/)
- [Spring Boot 3.x Migration Guide](https://spring.io/projects/spring-boot)
- [Swagger UI Official Docs](https://swagger.io/tools/swagger-ui/)


## Autores 

* **Elvis Flores** 
* **Alex Ponluisa** 
* **Alexis Poaquiza**
* **Jefferson Poaquiza** 
* **Melanie Silva** 




