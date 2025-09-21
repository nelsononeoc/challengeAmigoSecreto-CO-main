# 🎉 Culminación Etapa 1 - Iniciativa Oracle ONE

Este repositorio marca la **culminación de la primera etapa** de la iniciativa **Oracle Next Education (ONE)**, donde se aplican conocimientos fundamentales en **HTML**, **CSS** y **JavaScript** para construir una aplicación web funcional.

## 🧩 Proyecto Desarrollado: Amigo Secreto

Se desarrolló una aplicación interactiva titulada **"Amigo Secreto"**, la cual permite realizar sorteos aleatorios entre un grupo de amigos. El diseño es intuitivo y se enfoca en brindar una experiencia simple, pero sólida, para este clásico juego social.

![Vista previa](./assets/readme/preview.png)

## 📌 Descripción General

La página muestra una interfaz amigable donde los usuarios pueden:

- ✍️ **Ingresar nombres** de amigos en un campo de texto.
- ➕ Hacer clic en **"Añadir"** para agregarlos a una lista.
- 🎲 Usar el botón **"Sortear amigo"** para obtener aleatoriamente un nombre de los ya ingresados.
- 🔄 Reiniciar el sorteo con el botón **"Nuevo Sorteo"** para comenzar de nuevo.

La lista de nombres ingresados se muestra en tiempo real debajo del campo de entrada, permitiendo al usuario ver quién está disponible para ser sorteado.

## ⚙️ Funcionalidades Implementadas

- ✅ **Prevención de nombres duplicados:** El sistema verifica que el nombre no haya sido ingresado previamente antes de agregarlo.<img width="1917" height="992" alt="image" src="https://github.com/user-attachments/assets/10fc3616-ba97-4d2b-877c-f5ecd1abf7fa" />

- 🚫 **Validación de entrada:** Si se intenta agregar un nombre vacío o repetido, se muestra un mensaje de alerta.<img width="1915" height="994" alt="image" src="https://github.com/user-attachments/assets/be0920f0-6f99-4751-aa07-27f0ebcee5ed" />

- 📜 **Lista dinámica de participantes:** Los nombres válidos se agregan a una lista visual en pantalla.<img width="625" height="366" alt="image" src="https://github.com/user-attachments/assets/0beef98d-2060-44dc-8e1a-1c64c08b699d" />

- 🎯 **Sorteo único por nombre:** Cada nombre solo puede ser sorteado una vez. Una vez sorteado, se elimina de la lista de disponibles.<img width="640" height="440" alt="image" src="https://github.com/user-attachments/assets/bc5f3245-c08f-4464-9973-161ed748bc90" />

- 🧍‍♂️ **Ingreso adicional durante el juego:** Mientras el sorteo está activo, se pueden seguir agregando nombres por si alguien fue olvidado inicialmente.<img width="672" height="483" alt="image" src="https://github.com/user-attachments/assets/489087ba-1e7d-476c-a988-a5cf5c296adb" />

- ⏸️ **Pausa automática al finalizar:** Cuando todos los nombres han sido sorteados, el sistema se detiene automáticamente y evita nuevos sorteos.<img width="1201" height="832" alt="image" src="https://github.com/user-attachments/assets/392c35a1-5ac7-42e4-8745-6d74838db21d" />

- 🔁 **Reinicio del juego:** El botón "Nuevo Sorteo" limpia los datos anteriores y permite comenzar desde cero.<img width="646" height="434" alt="image" src="https://github.com/user-attachments/assets/79fab0b5-1de7-4b8e-99ca-649b639a885f" />


## 🚀 Tecnologías Utilizadas

- [HTML] Para la estructura y diseño de la página.
- [CSS]. Para los estilos visuales.
- [JavaScript]. Para la lógica de la aplicación (agregar nombres, realizar el sorteo, etc.).

## 🛠️ ¿Cómo probar la aplicación?

Puedes acceder a la aplicación directamente a través de GitHub Pages:

🔗 [https://nelsononeoc.github.io/challengeAmigoSecreto-CO-main/](https://nelsononeoc.github.io/challengeAmigoSecreto-CO-main/)

O seguir los siguientes pasos para ejecutarla localmente:

### 📥 Clonar el proyecto

```bash
git clone https://github.com/nelsononeoc/challengeAmigoSecreto-CO-main.git
cd challengeAmigoSecreto-CO-main
