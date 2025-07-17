# Checklist PokeCalc Monorepo

## Tecnologías
- [x] Next.js + TypeScript
- [x] Turborepo
- [ ] TailwindCSS

## Funcionalidades
- [x] Selector de tipo propio
- [x] Selector de tipo rival
- [x] Botón para calcular efectividad
- [x] Visualización del resultado (texto y color)
- [x] Código modular y preparado para ampliaciones

## Estructura de archivos
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
