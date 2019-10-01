---
author: ivan
comments: true
date: 2006-12-20 07:09:00+00:00
layout: post
path: /2006/12/sobreviviendo-un-sco-con-cobol-y
slug: sobreviviendo-un-sco-con-cobol-y
title: Sobreviviendo a un SCO con COBOL y pasando a Linux
wordpress_id: 917
categories:
  - Sin categoría
tags:
  - Linux
  - Locuras
  - Tecnología
---

Este post sí que es bien geek, acá el personaje que ven en la foto fue mi suplicio durante la última semana, me hizo sudar sangre, pero al final vencí al [monstruo](http://es.wikipedia.org/wiki/Monstruo)!!  
[![](http://ivan.campananaranjo.com/wp-content/uploads/2006/12/ServerIBM.jpg)](http://1.bp.blogspot.com/_T2UWuNJg3dQ/RYiihUOJDSI/AAAAAAAAAAM/PnFMIPtpoyc/s1600-h/ServerIBM.jpg)  
Para quienes no tengan idea, [COBOL](http://es.wikipedia.org/wiki/Cobol) es un lenguaje de programación más viejo que la sarna y que ha sobrevivido por el simple hecho de que era utilizado por grandes corporaciones, bancos y demás empresas desde los años 60.

Hace poco nos pusieron un reto fuerte en la empresa, migrar un servidor y un grupo de aplicaciones que estaban montadas sobre un servidor [SCO](http://es.wikipedia.org/wiki/SCO_Group) (el UNIX más feo y viejo que he visto) y corriendo en COBOL (vale la pena aclarar que nunca he programado en esa cosa). La idea principal era que siguieran funcionando, invirtiendo lo menos posible.

Ah, me olvidaba, aparte las terminales de acceso eran terminales seriales Wyse, o sea, nada de red, ni CPU, ni disco, naaaada, todo iba conectado a una tarjeta especial y de ahí directo al servidor. Era como tener una compu con un montón de puertos seriales conectados.

Después de mucho esfuerzo, dolores de cabeza y pelear con software que fue diseñado para funcionar en una arquitectura de hace 15 años :S salimos a flote, todo funciona y muchísimo más rápido de lo que funcionaba antes.

Por si a alguien le interesa, el servidor que utilizamos fue un [IBM x206M](http://www-03.ibm.com/servers/eserver/xseries/hardware/tower/x206m/), [Ubuntu Linux](http://www.ubuntu.com/) y el RMCOBOL de Liant. Vaya viajecito :S

Si alguien les dice que algo es imposible, simplemente respondan que no es cierto, toooodo es posible, con esfuerzo, muchas ganas y cruzando los dedos... ja ja ja ja.
