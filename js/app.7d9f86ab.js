(function(e){function a(a){for(var r,i,s=a[0],c=a[1],l=a[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(a);while(u.length)u.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],r=!0,i=1;i<t.length;i++){var s=t[i];0!==n[s]&&(r=!1)}r&&(o.splice(a--,1),e=c(c.s=t[0]))}return e}var r={},i={app:0},n={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0206bfa0":"d023db9b","chunk-027270b8":"aabb4570","chunk-04b93936":"325749f3","chunk-0cc9fca2":"9c313e5d","chunk-13a6037e":"19e12573","chunk-2c06842c":"01cd81fc","chunk-2d208d90":"0c5c8838","chunk-2d21d0e2":"cfba1612","chunk-2d22c123":"4bf9df0f","chunk-2e80bb9a":"2f7e547d","chunk-43bc8300":"bfde9199","chunk-4cdd78c0":"7f4745a7","chunk-4ebcb52d":"f21c0efa","chunk-515a8379":"a7f307f4","chunk-53ccb27e":"9e9eee68","chunk-5855c82e":"4215111c","chunk-7781d802":"b8d29164","chunk-7c83fc0b":"54e60458","chunk-839300a6":"29204053","chunk-b6ac33c0":"9ee68808","chunk-c796899c":"db524358","chunk-d9f92dce":"e6c0f8fc"}[e]+".js"}function c(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var a=[],t={"chunk-027270b8":1,"chunk-04b93936":1,"chunk-0cc9fca2":1,"chunk-43bc8300":1,"chunk-4ebcb52d":1,"chunk-515a8379":1,"chunk-5855c82e":1,"chunk-7781d802":1,"chunk-7c83fc0b":1,"chunk-839300a6":1,"chunk-b6ac33c0":1,"chunk-d9f92dce":1};i[e]?a.push(i[e]):0!==i[e]&&t[e]&&a.push(i[e]=new Promise((function(a,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-027270b8":"92cde18b","chunk-04b93936":"2cd5135e","chunk-0cc9fca2":"d035a47c","chunk-13a6037e":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-43bc8300":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4ebcb52d":"1dbe8d4a","chunk-515a8379":"28e4c977","chunk-53ccb27e":"31d6cfe0","chunk-5855c82e":"d035a47c","chunk-7781d802":"bdae3807","chunk-7c83fc0b":"d035a47c","chunk-839300a6":"b67dc245","chunk-b6ac33c0":"d035a47c","chunk-c796899c":"31d6cfe0","chunk-d9f92dce":"d035a47c"}[e]+".css",n=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===n))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===r||d===n)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var r=a&&a.target&&a.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[e],p.parentNode.removeChild(p),t(o)},p.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[e]=0})));var r=n[e];if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(a,t){r=n[e]=[a,t]}));a.push(r[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(p);var t=n[e];if(0!==t){if(t){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,t[1](u)}n[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},c.m=e,c.c=r,c.d=function(e,a,t){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)c.d(t,r,function(a){return e[a]}.bind(null,r));return t},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var p=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"22da":function(e,a,t){e.exports=t.p+"img/fondo-banner-principal.9fe9102a.svg"},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("68f3"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app",attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"contenedor-principal"},[t("section",{staticClass:"seccion-principal"},[t("Inicio")],1)])])},n=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("header",{staticClass:"header"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center justify-content-between"},[r("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-star"},[r("img",{staticClass:"header__logo me-sm-5",attrs:{src:t("9eb5")}})])])])])}],o=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("section",[r("div",{staticClass:"banner-principal mb-5"},[r("div",{staticClass:"container tarjeta p-4 p-sm-5",style:{"background-image":"url("+t("22da")+")"}},[e._m(0)])]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),r("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[e._m(6),r("div",{staticClass:"creditos"},e._l(Object.keys(e.creditosData),(function(a,t){return r("div",{class:t!=Object.keys(e.creditosData).length-1?"mb-4":""},[r("div",{staticClass:"creditos__titulo"},[e._v(e._s(e.configTitulos[a]))]),r("table",[r("tbody",e._l(e.creditosData[a],(function(t,i){return r("tr",{key:a+i},[r("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:e._s(e.renderText(t.nombre))}}),r("td",{attrs:{colspan:"2"},domProps:{innerHTML:e._s(e.renderText(t.cargo))}}),r("td",{attrs:{colspan:"3"},domProps:{innerHTML:e._s(e.renderText(t.centro))}})])})),0)])])})),0)]),r("Footer")],1)},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row justify-content-around align-items-center"},[t("div",{staticClass:"col-lg-7 col-xxl-6 banner-principal__info"},[t("div",{staticClass:"banner-principal__programa"},[t("div",{staticClass:"h1 mb-0"},[e._v("Aplicación de herramientas para la gestión del riesgo agroclimático ")])]),t("div",{staticClass:"h2"},[e._v("Información del programa")]),t("div",{staticClass:"banner-principal__datos"},[t("ul",[t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h5 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Nombre del programa: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("Aplicación de herramientas para la gestión del riesgo agroclimático ")])]),t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h5 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Código: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("72312149 versión 1")])]),t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h5 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Total: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("48 Horas")])]),t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h5 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Duración: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("4 Semanas")])]),t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h5 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Modalidad: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("virtual")])]),t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"}),t("div",{staticClass:"banner-principal__datos__item__texto"})])])])]),t("div",{staticClass:"d-none d-lg-block col-lg-5"},[t("div",{staticClass:"video"},[t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/9ooh4RS20bA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("1. Presentación")])]),t("p",{staticClass:"mb-3"},[e._v("¿Ha escuchado hablar de los riesgos agroclimáticos? ")]),t("p",{staticClass:"mb-3"},[e._v("Aquí se informará qué son, cómo se pueden evitar y algunas de las acciones a implementar frente a las probabilidades de ocurrencia, para ello el Servicio Nacional de Aprendizaje – SENA presenta el curso Apropiación de herramientas de gestión del riesgo agroclimático, cuyo objetivo es establecer técnicas de reducción de riesgos y adaptación al cambio climático.")]),t("p",{staticClass:"mb-3"},[e._v("Conozca un poco de este…")]),t("p",{staticClass:"mb-3"},[e._v("En este curso se busca alcanzar la competencia Diagnosticar el riesgo de desastres de acuerdo con metodologías y normatividad, la cual presenta dos resultados de aprendizaje, el resultado de aprendizaje RA 1. Caracterizar riesgos agroclimáticos, según área de estudio y normativa a través del cual se consolidan los contenidos referidos a la gestión del riesgo, marco normativo, variables climáticas, y el resultado de aprendizaje RA 2. Proponer medidas de reducción de riesgo y adaptación al cambio climático, según caracterización, el cual evidencia los contenidos de planificación de la producción agropecuaria, reducción del riesgo y adaptación al cambio climático, y planificación en la gestión del riesgo agroclimático.")]),t("p",{staticClass:"mb-3"},[e._v("De esta manera, se evidencian aprendizajes que pueden ser aplicados a las realidades de los diferentes contextos para la adecuada planificación frente a la gestión del riesgo agroclimático.")]),t("p",{staticClass:"mb-3"},[e._v("Es importante tener claridad frente algunos de los conceptos que serán abordados en las temáticas del curso, estos son:")]),t("p",{staticClass:"mb-3"},[t("b",[e._v("Amenaza:")]),e._v(" es la probabilidad de ocurrencia de un suceso potencialmente desastroso durante un período de tiempo en un sitio dado. ")]),t("p",{staticClass:"mb-3"},[t("b",[e._v("Vulnerabilidad:")]),e._v(" es el grado de pérdida de un elemento o grupo de elementos, resultado de la probable ocurrencia de un suceso desastroso.")]),t("p",{staticClass:"mb-3"},[t("b",[e._v("Riesgo:")]),e._v(" es el grado de pérdidas esperadas que generan pérdidas humanas o daños a propiedades y efectos sobre la actividad económica, debido a la ocurrencia de un desastre.")]),t("p",{staticClass:"mb-3"},[e._v("El aprendiz de este curso estará en la capacidad de fortalecer habilidades para:")]),t("p",{staticClass:"mb-3"},[t("b",[e._v(" Prevención:")])]),t("p",[e._v("- Crear conciencia sobre la GRD.")]),t("p",[e._v("- Establecer sistemas de alerta temprana.")]),t("p",[e._v("- Desarrollar tecnologías de reducción del riesgo.")]),t("p",{staticClass:"mb-3"},[t("b",[e._v("Mitigación:")])]),t("p",[e._v("- Asegurar calidad en los proyectos agrícolas.")]),t("p",[e._v("- Promover enfoques multisectoriales.")]),t("p",{staticClass:"mb-3"},[e._v("- Promover tecnologías de reducción del riesgo y sistemas de pronóstico climático.")]),t("p",{staticClass:"mb-3"},[t("b",[e._v("Recuperación después del desastre:")])]),t("p",[e._v("- Promover procesos de recuperación específicos en el sector.")]),t("p",[e._v("- Movilizar ayuda financiera como garantías y créditos a largo plazo.")]),t("p",{staticClass:"mb-3"},[e._v("- Promover tecnologías mejoradas.")]),t("p",{staticClass:"mb-3"},[e._v("Al finalizar el recorrido por los contenidos y actividades se han desarrollado competencias desde la implementación de diferentes acciones participativas que integran la prevención, mitigación, respuesta y recuperación después del desastre natural, fortaleciendo sus medios de vida. De esta manera, al reconocer un riesgo se identifican las acciones que son llevadas a cabo de manera efectiva a partir de la experiencia, donde se logre detectar las amenazas y el reconocimiento de zonas seguras e identificar la adaptación al cambio climático, prácticas que podrían ser implementadas en el corto y mediano plazo.")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("2. Justificación"),t("br"),e._v("del programa")])]),t("p",{staticClass:"mb-3"},[e._v("La agricultura en Colombia es uno de los pilares económicos más importantes, ya que mueve la economía del país y aporta a la canasta familiar de toda la población y aún más, promueve la importación, ya que el producto colombiano es de un sabor único y de excelente calidad, es muy apetecido en otros países como lo ha sido el café y el cacao que se comercializa por su excelente sabor.")]),t("p",{staticClass:"mb-3"},[e._v("La agricultura aporta al desarrollo del país, ayuda a la población rural a minimizar la pobreza, brinda oportunidades de mejora a la población del campo, así mismo, ayuda al desarrollo sostenible y a la seguridad alimentaria; sin embargo, no todo es bueno en este campo, ya que se han venido presentando inconvenientes con ciertas restricciones en el mercado y el atraso en tecnología, sumado a esto el cambio climático que se viene generando en el mundo. Esto ha limitado algunos avances en los procesos, ha disminuido la producción, ya que el área agropecuaria depende de estas condiciones en todas las etapas vegetativas para obtener una cosecha productiva. ")]),t("p",{staticClass:"mb-3"},[e._v("Teniendo en cuenta lo anterior es importante conocer la historia y trayectoria de los terrenos y de los procesos que se han tenido con ellos. Pero, aún más importante tener los conocimientos claros actualizados bajo la normatividad y los protocolos que se van presentando frente a las necesidades del contexto. ")]),t("p",{staticClass:"mb-3"},[e._v("El Ministerio de Agricultura y Desarrollo Rural con el apoyo de la FAO, de los productores agropecuarios, extensionistas, funcionarios gubernamentales y miembros de organizaciones de la sociedad civil, entre otros, han creado una plataforma llamada Agrokit, la cual ayudará a todo agricultor, entidad pública o privada a acceder a la información de la gestión del riesgo agroclimático, mediante la biblioteca virtual. ")]),t("p",{staticClass:"mb-3"},[e._v("De esta manera el programa de gestión del riesgo agroclimático que ofrece el SENA busca formar en competencias para afrontar el riesgo, su reducción y el manejo de desastres; todo esto encaminado a orientar e identificar dichos escenarios del riesgo agroclimático, así se podrá hacer análisis, evaluación y seguimiento, reduciendo que los productores se expongan a pérdidas o emergencias. ")]),t("p",{staticClass:"mb-3"},[e._v("Este curso se realiza para poder ayudar al campesino a minimizar los impactos en el campo, porque el campo se proyecta con el clima, para que así se puedan implementar acciones que vinculen la participación desde la prevención, la mitigación y la recuperación frente a los desastres naturales y el impacto que genera para la población y sus cultivos. ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("3. Competencias a"),t("br"),e._v(" desarrollar")])]),t("p",[e._v("260402010 - Diagnosticar riesgo de desastres de acuerdo con metodologías.")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("4. Perfil de "),t("br"),e._v(" ingreso")])]),t("p",{staticClass:"mb-3"},[e._v("Modalidad virtual. ")]),t("p",{staticClass:"mb-3"},[e._v("Se requiere que el aprendiz tenga dominio de elementos básicos en el manejo de herramientas informáticas y de comunicación como correo electrónico, chat, procesadores de texto, software para presentaciones, navegadores de Internet y, otros sistemas y herramientas tecnológicas necesarias para la formación en ambientes virtuales.")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("5. Estrategia metodológica")])]),t("p",{staticClass:"mb-3"},[e._v("La estrategia de este curso se enfoca en adquirir los conocimientos y habilidades de manera práctica que se articulen a las necesidades del aprendiz y su contexto, centrándose en el estudio autónomo, pero con la ayuda del instructor quien dará todas las pautas e información para irlo guiando durante el proceso y la duración de este escenario formativo. De esta manera se garantizará el aprendizaje por competencias, integrando los ambientes virtuales de aprendizaje como mediadores en este proceso. ")]),t("p",{staticClass:"mb-3"},[e._v("Igualmente, se estimula en el aprendiz de manera permanente el querer saber más sobre los resultados de aprendizaje, sobre cómo mejorar los conocimientos y cómo evidenciarlos a partir de su propia realidad. Se busca que todo esto lo logre a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:")]),t("p",{staticClass:"p1"},[e._v("- El instructor - tutor")]),t("p",{staticClass:"p1"},[e._v("- El entorno")]),t("p",{staticClass:"p1"},[e._v("- Las TIC")]),t("p",{staticClass:"p1"},[e._v("- El trabajo colaborativo")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("6. Creditos")])])}],c=(t("159b"),{name:"Inicio",data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(e){var a="";return Array.isArray(e)?e.forEach((function(e,t){a+=(t?"<br/>":"")+e})):a+=e,a}}}),l=c,d=(t("6e1b"),t("2877")),u=Object(d["a"])(l,o,s,!1,null,null,null),p=u.exports,m={name:"App",components:{Inicio:p},mounted:function(){this.$aos.init()}},b=m,_=(t("cf25"),Object(d["a"])(b,i,n,!1,null,null,null)),v=_.exports,f=t("1c2c"),g=(t("a3a0"),{creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Lizeth Daniela Reinoso",cargo:"Experto temático",centro:"Centro Agropecuario La Granja Espinal - Regional Tolima"},{nombre:"Leydy Jhuliana Jaramillo Mejía",cargo:"Diseñadora instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Oscar Absalón Guevara",cargo:"Evaluador instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital "},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:["Jesús Antonio Vecino Valero"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Villamizar Lizcano",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo Lopez ",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Andres Mauricio Santaella Ochoa",cargo:"Soporte  front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gustavo Adolfo Marún Suárez",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Emilsen Alfonso Bautista",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Alvaro Andres Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});r["a"].prototype.$config=g;var h=t("9224");r["a"].prototype.$package=h,new r["a"]({store:f["a"],render:function(e){return e(v)}}).$mount("#app")},"6e1b":function(e,a,t){"use strict";t("703c")},"703c":function(e,a,t){},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-info-2021","version":"1.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,t){e.exports=t.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,t){},cf25:function(e,a,t){"use strict";t("fea6")},fea6:function(e,a,t){}});
//# sourceMappingURL=app.7d9f86ab.js.map