---
title: Vue.JS vs React
date: 2021-01-04T02:07:57.709Z
featuredImage: vue-vs-react.jpg
description: Comparación entre dos de las tecnologías más utilizadas para
  frontend en los últimos años
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