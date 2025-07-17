# Checklist PokeCalc Monorepo

## Tecnologías
- [x] Next.js + TypeScript
- [x] Turborepo
- [ ] TailwindCSS

## Funcionalidades
- [x] Búsqueda de Pokémon por nombre con autocompletado y sugerencias en tiempo real
- [ ] Visualización de estadísticas completas de cada Pokémon seleccionado y rediseño de la interfaz para mostrar ambos Pokémon y sus datos de forma clara y atractiva
- [x] Selección de Pokémon para usuario y rival con tipos automáticos desde PokéAPI
- [x] Visualización de imagen y tipos en la lista de sugerencias
- [x] Selector de tipo propio
- [x] Selector de tipo rival
- [x] Botón para calcular efectividad
- [x] Visualización del resultado (texto y color)
- [x] Código modular y preparado para ampliaciones

## Estructura de archivos
- [x] src/components/PokemonSearch.tsx (búsqueda y selección de Pokémon)
- [x] src/utils/pokeApi.ts (integración con PokéAPI)
- [x] src/index.css (diseño moderno y responsivo)
- [x] apps/web/app/page.tsx
- [x] apps/web/app/TypeSelector.tsx
- [x] apps/web/app/effectiveness.ts
- [x] apps/web/app/globals.css (con Tailwind)
- [x] packages/ui (componentes compartidos, pendiente migración)
- [x] Configuración de Turborepo (turbo.json)

## Configuración
- [ ] Monorepo creado con Turborepo
- [ ] Configuración de Next.js en apps/web y apps/docs
- [ ] El script "dev" de la app web está configurado para usar Webpack (`next dev --port 3000`) por problemas de compatibilidad de Turbopack en Windows y monorepos. Si ves errores de rutas o endpoints, asegúrate de no usar Turbopack.

## Despliegue
- [ ] Proyecto listo para Vercel o Netlify

## Integración TailwindCSS
- [ ] Instalar TailwindCSS, PostCSS y Autoprefixer en apps/web
- [ ] Configurar tailwind.config.js y postcss.config.js
- [ ] Modificar globals.css para incluir directivas Tailwind
- [ ] Refactorizar componentes para usar utilidades Tailwind
- [ ] Eliminar reglas CSS innecesarias
- [ ] Probar visualmente la app y ajustar estilos
- [ ] Limpiar archivos CSS no usados
- [ ] Actualizar documentación en README.md y CHECKLIST.md

## Migración multiplataforma

- [ ] Crear monorepo con Turborepo
- [ ] Añadir apps web (Next.js) y docs (Next.js)
- [ ] Añadir app móvil (Expo/React Native)
- [ ] Instalar TailwindCSS en web y NativeWind en móvil
- [ ] Configurar estilos en ambas plataformas
- [ ] Mover lógica compartida a packages/ui
- [ ] Refactorizar componentes para reutilización multiplataforma
- [ ] Probar y desplegar en Vercel/Netlify y App Store/Google Play
- [x] Mantener documentación y checklist actualizado

## Próximos pasos
- [ ] Permitir subir una captura de pantalla o foto
- [ ] Usar IA para identificar los Pokémon en la imagen
- [ ] Insertar automáticamente los tipos detectados en los selectores correspondientes

---

## Plan Detallado de Siguientes Pasos

### Visualización de estadísticas y rediseño de interfaz

1. **Diseño de la interfaz**
   - Definir un layout que permita mostrar ambos Pokémon seleccionados lado a lado o en tarjetas separadas.
   - Incluir espacio para imagen, nombre, tipos y estadísticas (HP, Ataque, Defensa, etc.).
   - Usar estilos modernos y responsivos (preferentemente con TailwindCSS).

2. **Obtención de estadísticas**
   - Modificar la lógica de selección en `PokemonSearch.tsx` para obtener las estadísticas completas desde PokéAPI al seleccionar un Pokémon.
   - Actualizar `pokeApi.ts` para incluir una función que recupere stats relevantes (hp, attack, defense, special-attack, special-defense, speed).

3. **Visualización de datos**
   - Crear o modificar componentes para mostrar las estadísticas de cada Pokémon seleccionado.
   - Añadir visualizaciones claras (barras, números, iconos) para cada estadística.

4. **Integración y pruebas**
   - Integrar el nuevo diseño y lógica en `App.tsx` y los componentes relacionados.
   - Probar la visualización en diferentes dispositivos y navegadores.
   - Ajustar estilos y corregir posibles bugs.

5. **Documentación**
   - Actualizar `CHECKLIST.md` y `README.md` con la nueva funcionalidad y capturas de pantalla.
   - Documentar el flujo de obtención y visualización de estadísticas.

---

1. **Pruebas visuales y ajustes de estilos en la app web**
   - Revisar la interfaz en diferentes dispositivos y navegadores.
   - Eliminar reglas CSS innecesarias y limpiar archivos.
   - Documentar cambios en README.md y CHECKLIST.md.

2. **Planificar e iniciar integración de IA**
   - Definir el flujo de subida de imágenes/capturas.
   - Investigar APIs o modelos para reconocimiento de Pokémon.
   - Diseñar la interfaz para subir imágenes y mostrar resultados.
   - Documentar el plan de integración y dependencias necesarias.

3. **Mantener documentación y checklist**
   - Actualizar CHECKLIST.md tras cada avance.
   - Añadir ejemplos y capturas en README.md.
   - Registrar problemas encontrados y soluciones aplicadas.
