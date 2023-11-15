# JavaScript-Total-Dia-6
En esta ocasión subo el ejercicio del día 6 del curso "JavaScript Total" que estoy tomando en Udemy. Esta primera vez solo satisfago los requisitos para la resolución del ejercicio, pienso retomarlo al terminar el curso para brindar una solución más estética y/o elaborada nun/✨

### Consigna
La idea es que tu página tome un array con 5 calificaciones (tu vas a pre-establecer esas calificaciones al crear el programa), y el sitio va a mostrar 4 botones que realicen las siguientes funcionalidades:

1. Mostrar una lista con una de las notas.
2. Calcular el promedio general del estudiante.
3. Obtener la calificación más alta de todo el conjunto.
4. Determinar si alguna de las calificaciones es un aplazo (que sería una calificación menor a 4).

La idea es aplicar un loop diferente para cada funcionalidad. De hecho te voy a dar una guía sobre como propongo que resuelvas cada uno de los puntos, pero tienes la libertad de aplicar el loop que quieras, ya que cada punto se puede resolver con cualquiera de los loops que hemos visto:

1. El primer botón llamará a una función para mostrar la lista de calificaciones utilizando las etiquetas ul y li (¿Recuerdas? UL es la lista de puntos, y LI es cada uno de esos puntos). Con el loop For Of puedes recorrer el array de calificaciones e ir escribiendo en pantalla cada una de ellas.
2. El segundo botón va a llamar a una función que calcule el promedio. Va a utilizar un loop For para recorrer el array e ir acumulando en una variable cada una de las calificaciones. Una vez finalizado el loop, dividimos este el valor de esa variable por 5, y así obtenemos el promedio.
3. El botón para obtener la nota más alta llamará a una función que contenga un loop While para recorrer el array. Vamos a utilizar una variable para ir almacenando la nota más alta hasta el momento, a la que vamos a inicializar en 0. Entonces en cada iteración preguntamos si la calificación del elemento actual es mayor al contenido de la variable. Si es así, asignamos ese elemento del array a la variable y así mantendremos siempre guardada la calificación más alta en la variable.
4. Y el último botón va a usar una función para verificar si existe algún aplazo, y para eso va a utilizar un loop Do While para recorrer el array, preguntando en cada iteración si la calificación es menor a 4. Si es así, guarda un registro de que existe un aplazo y corta el ciclo con un break, ya que no nos interesa seguir recorriéndolo.

### Pantallas de la web
Sin resultados
![notas01](https://github.com/Alejandro-Az/JavaScript-Total-Dia-6/assets/105530752/4aa45064-9b94-40d2-b926-0b32723e3b2a)

Con resultados
![notas02](https://github.com/Alejandro-Az/JavaScript-Total-Dia-6/assets/105530752/6321f0dd-4112-4dba-a4cb-a640db0253da)
