/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Backend AndinoBus - SmartCode", "index.html", [
    [ "🚌 Backend AndinoBus - Sistema de Gestión de Transporte", "index.html", "index" ],
    [ "API (borrador para Iteración 1)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html", [
      [ "Convenciones", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md52", null ],
      [ "Cooperativas", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md53", null ],
      [ "Buses", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md54", null ],
      [ "Frecuencias y Paradas", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md55", null ],
      [ "Búsqueda de rutas y disponibilidad (stub)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md56", null ],
      [ "Viajes (stub)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md57", null ],
      [ "Autenticación y usuarios (stub)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md58", null ],
      [ "Ventas y pagos (stubs)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md59", null ],
      [ "Móvil Personal de bus (stub)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md60", null ],
      [ "Configuración de app (stub)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md61", null ],
      [ "Errores", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md62", null ],
      [ "Planificaciones (CSV)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md63", null ],
      [ "Colección Postman", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md65", null ],
      [ "Integración con FrontEnd (FrontAndinaBus)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_p_i.html#autotoc_md67", null ]
    ] ],
    [ "Arquitectura y estructura del proyecto", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html", [
      [ "1. Estilo arquitectónico", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md69", null ],
      [ "2. Mapeo de paquetes", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md70", null ],
      [ "3. Convenciones", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md71", null ],
      [ "4. Seguridad (fase siguiente)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md72", null ],
      [ "5. Persistencia (sugerido)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md73", null ],
      [ "6. Módulos MVP Iteración 1 (back-end)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md74", null ],
      [ "7. Endpoint Sketch (Catálogos)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md75", null ],
      [ "8. Actividades de implementación (resumen)", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md76", null ],
      [ "9. Observabilidad y calidad", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md77", null ],
      [ "10. Cómo extender", "md__c_1_2septimo_2das_2codigo_2backend-andinobus_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md78", null ]
    ] ],
    [ "Clases", "annotated.html", [
      [ "Lista de clases", "annotated.html", "annotated_dup" ],
      [ "Índice de clases", "classes.html", null ],
      [ "Jerarquía de clases", "hierarchy.html", "hierarchy" ],
      [ "Miembros de clases", "functions.html", [
        [ "Todos", "functions.html", null ],
        [ "Funciones", "functions_func.html", null ]
      ] ]
    ] ],
    [ "Archivos", "files.html", [
      [ "Lista de archivos", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_app_user_8java_source.html",
"index.html#autotoc_md44"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';
var LISTOFALLMEMBERS = 'Lista de todos los miembros';