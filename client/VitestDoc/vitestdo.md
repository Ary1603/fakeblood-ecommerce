# VITEST

Vitest es un framework de Unit Testing especialmente de front end

Se llama Vitest porque esta basado en un entorno de desarrollo Vite
es un plugin y tiene un buen de rendimiento.

Nos permite tener una UI (Interfaz de usuario)


Como instalarlo?
 - npm i vitest
    image.png

 - npm i jsdom
    image.png

Configuracion:
    <!-- Agregar -> /// <reference types="vitest"> --> Siempre y cuando estes trabajando con Typescript.
    Agregar -> test: {
    environment: 'jsdom'
  }

  image.png

    Configuracion en el package.json:
        En scripts agregar la siguiente linea -> "test": "vitest"


Comprabar que se puede ejecutar nuestro test runner.

1-. Se crea el archivo de prueba al mismo nivel del comoponente con la siguiente nomenclatura nombre_del_componente.test.jsx
2- Agregamos el siguiente codigo de prueba:
    import { describe, test, expect } from "vitest";

    // La funcion describe nos permite agrupar distintos test.
    // "test" son los test unitarios. Algo dento del componente.

    describe('PingsCards', () => {
        test('Should add two numbers', () => {
            expect(1 + 1).toBe(2); //Asercion querer comprobar una linea de codigo.
        });
    });

    image.png

3-. Corremos el siguiente comando en la terminal -> npm test
4-. Nuestro componente de prueba esta funcionando.

    image.png

    Comprobar que funciona pero ahora con un error en el test:

    image.png


Notas de comandos: 

image.png


# Vitest UI

Nos permite instalar un modulo mas es como tener un debugger de consola en el navegador.

Instalacion -> npm i -D @vitest/ui

image.png

Para ejecutarlo tenemos que ir al package.json y configurar el script de test:

    "test": "vitest --ui"

    image.png

    Consola:

        image.png

    Navegador: 

        image.png

* Manera mas sencilla para debbuggear el codigo:
    image.png

* Nos devuelve un reporte del error.
    image.png

* Definir globals para no importar a cada rato describe, test, expect:
    agregamos la sig linea en el vite config en test -> globals: true.
    image.png

# Testear componente de React

Requisitos: 
    Instlar la biblioteca React lib -> npm install --save-dev @testing-library/react
    image.png

# Ejemplo de testing en componente en React

Apartir del componente PingsCards.jsx se le pasa unos props en el cual esperemos que vaya la palabra 'Original Products' con el siguiente codigo lo comprobaremos.
    image.png

    Paso la prubea :

    image.png

    En el caso de que lo que esperambamos no este se veria de tal modo:

    image.png

    y el reporte nos diria lo siguiente:

    image.png

    Nos lanza el codigo del componente y nos muestra que el elemento a buscar no existe.

# Eventos en el componente    
image.png
# Documentacion
https://vitest.dev/guide/




