---
title: Vue.JS vs React
date: 2021-01-04T02:07:57.709Z
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

Hace algunos años decidí comenzar a modernizar la forma en la que había estado acostumbrado a construir aplicaciones, especialmente en la parte del frontend, me había quedado demasiado tiempo en mi zona de comfort con [Drupal](https://www.drupal.org/) que si bien sigue siendo una herramienta sumamente útil, al mismo tiempo escuchaba que aparecían más alternativas para crear interfaces y mucho del mercado tanto norteamericano como europeo en cambio se estaba yendo hacia las SPAs (Single Page Applications) y JAM Stack (Javascript APIs y Markup), así que comencé a ver qué es lo que estaba disponible.

Originalmente arranqué con AngularJS que luego pasó a ser simplemente [Angular 2](https://angular.io/) (al momento de escribir este artículo van por la versión 11), desarrollado y auspiciado por Google se trata de un framework para aplicaciones web que se aprende bastante fácil porque trabaja extendiendo el HTML que ya conocemos con directivas para simplificar el trabajo, uno de los grandes peros que muchos le encontraron fue que forzaba el uso de Typescript en lugar de Javascript y aunque esto en el fondo representa ventajas quitaba la opción de elegir, además que alteraba directamente el DOM (a partir de la versión 2 ya no es así) lo cual hacía que su rendimiento fuera lento.  El equipo de desarrollo de Angular llegó al punto de "aceptar su derrota" y decir que el equipo de [React](https://reactjs.org/) (la biblioteca hecha por Facebook) había sido mejor pensado.

Por esto (además de haber encontrado mil y un problemas de rendimiento al usar Angular en móviles cuando las aplicaciones comenzaban a crecer, decidí dar el brinco y aprender React. 

## React

React es una biblioteca de Javascript eficiente y flexible que está enfocada específicamente en construir interfaces de usuario, no es "opinionada" es decir, nos da la libertad de utilizar los componentes que nosotros querramos para el manejo de datos, estado, ruteo, etc.  Aunque a veces esa libertad también puede irse en nuestra contra si es que dedicamos mucho tiempo a escoger cual será el esquema a usar, al principio la lista de opciones es demasiado larga, pero con la experiencia eso va siendo más sencillo y llegas a tener tu lista de preferidos bastante bien definida.

Permite crear interfaces y experiencias complejas al crear piezas aisladas de código llamadas "componentes", una buena práctica recomendada es integrar esto con una herramienta como [Storybook](https://storybook.js.org/) y puedes ver cómo lucen y se comportan los componentes sin siquiera tener que conectarte con una fuente de datos, lo cual permite trabajar la lógica completamente aislada del estilo.

## VueJS



Diferencias



## Syntax

One of the biggest differences between Vue and React is the way the view layer is built.

By default, Vue uses HTML templates, but there’s an option to write in JSX.

In React, on the other hand, there’s solely JSX. Vue’s traditional separation of concerns into HTML, CSS, and JS makes it easier even for beginner frontend developers to learn how to create Web applications. HTML templates are also familiar to most Web designers, and thus improve collaboration between developers and designers.

React’s JavaScript Expressions (JSX) combine HTML and CSS together into JavaScript. This [XML-like syntax](https://vuejs.org/v2/guide/comparison.html#HTML-amp-CSS) lets developers build self-contained UI components with view-rendering instructions included. 

The way professionals see React and Vue might help others decide which of the two is more suited to their current expectations and capabilities.

What devs [love about Vue.js](https://2018.stateofjs.com/front-end-frameworks/vuejs/):

* Easy learning curve
* Elegant programming style and patterns
* Good documentation

What devs [love about React](https://2018.stateofjs.com/front-end-frameworks/react/):

* Elegant programming style and patterns
* Rich package ecosystem
* Widespread usage

After taking the top spot in the most-used web framework list in the [2020 Stack Overflow Survey,](https://insights.stackoverflow.com/survey/2020#most-popular-technologies) with 35.9% respondents choosing React, it continues to be the second most popular framework. 



## Vue.js

Being a progressive framework, Vue can be integrated into an existing project incrementally, per project requirements. For example, as a lightweight library to add some interactivity to a Web application.



## React.js

Since React was created for large-scale Web projects, choosing it for small and simple apps might be overkill. Although it requires a lot of boilerplate code just to set up a working project, React’s architecture ultimately pays off in the long run.

[JSX](https://reactjs.org/docs/introducing-jsx.html) leaves developers the full power of JavaScript at their disposal—flow controls and advanced IDE features such as autocompletion or listing are included in the component view templates.

## The Right Tool Depends on Your Needs

Vue.js and React are both great tools for building interactive user interfaces. To choose which one is better for your next project, you have to take a number of factors into account, including your specific use case, your business needs, environment, developer availability, budget, and the timeframe you’re working with.

Vue is [lightweight, easy to learn, and pleasant to write in](https://www.monterail.com/blog/why-we-use-vuejs). Because of its familiar templating syntax and use of components, integrating or migrating existing projects to Vue is faster and smoother. For that reason, Vue.js is great for startups but can be just as well used in large-scale applications.

Performance-wise, Vue.js is on a par with React. However, final results essentially depend on optimization efforts and application size. The documentation is excellent, explaining everything in minute detail.

Vue has official packages for state management, routing, or server-side rendering, which come with up-to-date support and ensure synchronization throughout your system. With Vue CLI 3 and Vue UI, setting up a project and preparing it for deployment is lightning fast. This, in turn, helps build MVPs in a quick and efficient manner.

React, on the other hand, is a veteran of the JS field. With corporate support, a large community, and an even bigger ecosystem, React is great for [building complex enterprise-grade applications.](https://www.monterail.com/blog/react-native-reactxp) Also, the job market is booming with experienced React developers, so you won’t find yourself in short supply of specialists. Because its maturity and community, reaching out for help and getting a prompt and detailed answer is more or less guaranteed. 



Oportunidades laborales