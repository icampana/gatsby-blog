---
title: Vue.JS vs React
date: 2022-01-23T07:01:10.093Z
featuredImage: vue-vs-react.jpg
description: Comparación entre dos de las tecnologías más utilizadas para
  frontend en los últimos años
tags:
  - Programación
  - Desarrollo
  - Tecnología
---
Si trabajas en desarrollo web es más que seguro que has escuchado acerca de React, VueJS y Angular, en este artículo daré algo de contexto y comparación entre las 2 opciones con las que he tenido que trabajar y cuales son las ventajas y desventajas.

## Antecedentes

Hace algunos años decidí comenzar a modernizar la forma en la que había estado acostumbrado a construir aplicaciones, especialmente en la parte del frontend, me había quedado demasiado tiempo en mi zona de comfort con [Drupal](https://www.drupal.org/) que si bien sigue siendo una herramienta sumamente útil, al mismo tiempo había proyectos en los que sólo la configuración inicial tomaba mucho más tiempo de lo que probablemente me tomaría crear una aplicación sencilla.

Escuchaba que aparecían más alternativas para crear interfaces y mucho del mercado estaban experimentando con las SPAs (Single Page Applications) y JAM Stack (Javascript APIs y Markup), así que comencé a ver qué es lo que estaba disponible.

Originalmente arranqué con AngularJS que luego pasó a ser simplemente [Angular 2](https://angular.io/) (al momento de escribir este artículo van por la versión 13 y la versión inicial ha sido descontinuada completamente), desarrollado y auspiciado por Google se trata de un framework para aplicaciones web que se aprende bastante fácil porque trabaja extendiendo el HTML que ya conocemos con directivas para simplificar el trabajo, uno de los grandes peros que muchos le encontraron fue que forzaba el uso de Typescript en lugar de Javascript y aunque esto en el fondo representa ventajas quitaba la opción de elegir, además que alteraba directamente el DOM (a partir de la versión 2 ya no es así) lo cual hacía que su rendimiento fuera lento.

El equipo de desarrollo de Angular llegó al punto de "aceptar su derrota" y decir que el equipo de [React](https://reactjs.org/) (la biblioteca hecha por Facebook) había sido mejor pensado.

Por esto (además de haber encontrado mil y un problemas de rendimiento al usar Angular en móviles cuando las aplicaciones comenzaban a crecer, decidí dar el salto y aprender React. 

## React

React es una biblioteca de Javascript sumamente flexible que está enfocada específicamente en construir interfaces de usuario, no es "opinionada" es decir, nos da la libertad de utilizar los componentes que nosotros querramos para el manejo de datos, estado, ruteo, etc.  Aunque a veces esa libertad también puede irse en nuestra contra si es que dedicamos mucho tiempo a escoger cual será el esquema a usar, al principio la lista de opciones es demasiado larga, pero con la experiencia eso va siendo más sencillo y llegas a tener tu lista de preferidos bastante bien definida.

Permite crear interfaces y experiencias complejas al crear piezas aisladas de código llamadas "componentes", una buena práctica recomendada es integrar esto con una herramienta como [Storybook](https://storybook.js.org/) y puedes ver cómo lucen y se comportan los componentes sin siquiera tener que conectarte con una fuente de datos, lo cual permite trabajar la lógica completamente aislada del estilo.

## VueJS

\----

## Diferencias entre VueJS y React

### Sintáxis

Una de las grandes diferencias entre Vue y React es la forma en que la capa de visualización se construye.  Por defecto, Vue utiliza plantillas HTML, pero también existe la opción de escribirlo en JSX.  Con React, por el otro lado sólo se puede utilizar JSX, lo cual hace que primero tengamos que acostumbrarnos a esa sintáxis.

Vue por su lado maneja una "separación de áreas"(separation of concerns) utilizando HTML, CSS y JS lo cual hace que inclusive un desarrollador frontend principiante pueda aprender a crear una aplicación Web con muy poco conocimiento, inclusive se puede crear una aplicación con Vue sin necesitar instalar ninguna herramienta, tan sólo incluyendo Vue desde una CDN.

Otra ventaja es que las plantillas HTML hacen que sea muy sencillo para los Diseñadores Web entender cómo está estructurada la aplicación y facilita la colaboración entre desarrolladores y diseñadores.

React con sus "JavaScript Expressions" (JSX) combina HTML y CSS dentro de JavaScript.  Lo cual muchas veces confunde a los neófitos de React, pues tiene apariencia de XML pero se traduce a objetos una vez que esto es transformado por el "motor" de React.  En el fondo esto es algo de lo más poderoso del framework, porque permite crear componentes de UI que están "auto contenidos" y se pueden compartir y reutilizar en diferentes aplicaciones.

La forma en la que los desarrolladores que trabajan con ambas herramientas puede ayudar a decidir cuál está más ajustada a sus expectativas y capacidades.

Qué es lo que le gusta a los desarrolladores que usan Vue.js:

* Curva de aprendizaje muy fácil
* Estilo de programación elegante que permite el uso de patrones.
* Buena Documentación

Los desarrolladores que usan React por su lado disfrutan:

* Un estilo de programación elegante y buenos patrones de diseño
* Un ecosistema de paquetes/componentes extenso
* Uso generalizado (más oportunidades laborales y de soporte)

Mientras en la encuesta de [2020 de Stack Overflow,](https://insights.stackoverflow.com/survey/2020#most-popular-technologies) sobre los frameworks más utilizados React estaba en 2do lugar con un 35.9% en 2021 pasó al primer lugar con un 40.14% (superando a jQuery que antes era el primero).

### Facilidad de Integración 

**Vue.js** se considera un framework progresivo, es decir se puede integrar de manera incremental en un proyecto ya existente sin necesidad de migrar toda la aplicación, un ejemplo sencillo sería crear un widget de interacción específico a una aplicación web que ya contara con código legado.  Se puede mantener la aplicación sin cambios y sólo agregar la nueva funcionalidad con VueJS.

**React.js** en cambio fue concebido originalmente para proyectos de gran escala, por lo cual si sólo quisiera agregar una pequena funcnnnsdf

Since React was created for large-scale Web projects, choosing it for small and simple apps might be overkill. Although it requires a lot of boilerplate code just to set up a working project, React’s architecture ultimately pays off in the long run.

[JSX](https://reactjs.org/docs/introducing-jsx.html) leaves developers the full power of JavaScript at their disposal—flow controls and advanced IDE features such as autocompletion or listing are included in the component view templates.

## La herramienta correcta dependerá de tus necesidades

Vue.js and React are both great tools for building interactive user interfaces. To choose which one is better for your next project, you have to take a number of factors into account, including your specific use case, your business needs, environment, developer availability, budget, and the timeframe you’re working with.

Vue is [lightweight, easy to learn, and pleasant to write in](https://www.monterail.com/blog/why-we-use-vuejs). Because of its familiar templating syntax and use of components, integrating or migrating existing projects to Vue is faster and smoother. For that reason, Vue.js is great for startups but can be just as well used in large-scale applications.

Performance-wise, Vue.js is on a par with React. However, final results essentially depend on optimization efforts and application size. The documentation is excellent, explaining everything in minute detail.

Vue has official packages for state management, routing, or server-side rendering, which come with up-to-date support and ensure synchronization throughout your system. With Vue CLI 3 and Vue UI, setting up a project and preparing it for deployment is lightning fast. This, in turn, helps build MVPs in a quick and efficient manner.

React, on the other hand, is a veteran of the JS field. With corporate support, a large community, and an even bigger ecosystem, React is great for [building complex enterprise-grade applications.](https://www.monterail.com/blog/react-native-reactxp) Also, the job market is booming with experienced React developers, so you won’t find yourself in short supply of specialists. Because its maturity and community, reaching out for help and getting a prompt and detailed answer is more or less guaranteed. 

Oportunidades laborales