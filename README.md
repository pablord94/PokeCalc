## Stack tecnológico

- **Framework principal:** React (v19) con React DOM.
- **Lenguaje:** TypeScript.
- **Estilos:** TailwindCSS, PostCSS, Autoprefixer.
- **Testing:** Testing Library (React, DOM, Jest DOM, User Event), tipos para Jest.
- **Herramientas de desarrollo:** React Scripts para build/start/test/eject.
- **Calidad de código:** ESLint configurado para React y Jest.
- **Compatibilidad:** Browserslist para navegadores modernos.
- **Métricas:** Web Vitals.

## Funcionalidades

- Búsqueda de Pokémon por nombre con autocompletado y sugerencias en tiempo real.
- Selección de Pokémon para usuario y rival, con tipos rellenados automáticamente desde PokéAPI.
- Visualización de imagen y tipos en la lista de sugerencias.
- Cálculo de efectividad de tipos entre Pokémon seleccionados.
- Interfaz moderna con diseño actualizado y responsivo.
- (Opcional) Sistema de subida y reconocimiento de imágenes para detectar Pokémon en combate (puede activarse/desactivarse).

## Reconocimiento de Pokémon en imágenes

Opciones de IA para detectar Pokémon en capturas:
- **Roboflow Universe:** Modelo [Pokémon Detection](https://universe.roboflow.com/roboflow-jvuqo/pokemon-detection), API gratuita con límites, integración directa en React.
- **HuggingFace Spaces:** Modelos de visión general y posibilidad de entrenar uno específico para Pokémon.
- **Teachable Machine (Google):** Entrenamiento personalizado y exportación para frontend con TensorFlow.js.

Recomendación: Usar Roboflow Universe por facilidad y API directa.  
Pasos:
1. Registrarse y obtener API key gratuita.
2. Usar el endpoint REST para enviar imágenes y recibir los Pokémon detectados.
3. Integrar la llamada en el componente UploadImage.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
