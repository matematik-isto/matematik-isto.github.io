# Portafolio Profesional — Científico de Datos

## Objetivo
Construir una página web de portafolio profesional moderna y minimalista, de una sola página, con tonos grises/blancos y verde como acento. Contenido de ejemplo (placeholder) que el usuario podrá editar fácilmente.

## Dirección visual
- **Estilo:** minimalista, generoso en espacio en blanco, tipografía limpia, líneas sutiles.
- **Paleta:**
  - Fondo: blanco / grises muy claros.
  - Texto: grises oscuros casi negros.
  - Acento: **verde** para botones, destacados, métricas, hover states y elementos interactivos.
- Tipografía: cargar Roboto de Google Fonts vía `<link>` en `src/routes/__root.tsx` (Roboto para cuerpo y títulos, con pesos 400/500/700).
- Animación sutil con `tw-animate-css` ya presente: fade-in/slide-up al hacer scroll, transiciones suaves en tarjetas y botones.
- Sin custom colors hardcoded en componentes: se definen tokens semánticos en `src/styles.css` (incluyendo un `--accent` verde redefinido o un nuevo `--accent-2` verde) y se usan las clases `bg-accent`, `text-accent`, etc.

## Estructura (una sola página con scroll suave + navbar anclado)

### 1. Navbar fijo
- Enlaces de navegación a la izquierda: Inicio · Proyectos · Habilidades · Contacto. Nombre/marca debajo de los enlaces (también a la izquierda).
- Fondo translúcido con blur al hacer scroll.
- Logo/iniciales en verde.

### 2. Encabezado / Hero
- Nombre grande (placeholder: "Ramón Correa" o "Tu Nombre").
- Rol: "Científico de Datos".
- Biografía corta (2–3 líneas, placeholder).
- Botones: "Ver proyectos" (verde) y "Contacto" (borde).
- Tal vez un avatar o monograma.

### 3. Proyectos
- 3 tarjetas interactivas en grid responsivo.
- Cada tarjeta:
  - Título y descripción breve.
  - Métrica principal destacada (p. ej. "Precisión: 94%", "ROI: +32%").
  - Etiquetas de tecnologías: Python, SQL, Power BI.
  - Botones: "GitHub" (icono) y "Ver demo" (verde).
  - Efecto hover: elevación, borde verde, transición.

### 4. Habilidades por categoría
- 3 categorías (según selección del usuario):
  - Lenguajes: Python, SQL, R
  - Machine Learning: Scikit-learn, Pandas, NumPy, TensorFlow
  - Visualización: Power BI, Tableau, Matplotlib
- Presentación: tarjetas por categoría con barras de progreso o chips, estilizadas en gris con acento verde.

### 5. Contacto
- Formulario (nombre, email, mensaje) con validación básica y estado de éxito (sin backend real; mensaje de confirmación simulado).
- Enlaces a LinkedIn y GitHub (iconos) en verde.
- Pie de página minimalista.

## Implementación técnica
- **Stack:** TanStack Start + React 19 + Tailwind v4 (ya configurado).
- **Archivos:**
  - `src/routes/index.tsx`: reemplazar placeholder con la página completa (componentes por sección dentro del mismo archivo o separados en `src/components/portfolio/`).
  - `src/routes/__root.tsx`: añadir `<link>` de Google Fonts en `head()` y ajustar title/description/og.
  - `src/styles.css`: definir tokens de color verde de acento y cualquier utilidad custom.
- **Datos de ejemplo:** extraer el contenido de proyectos y habilidades a un archivo `src/lib/portfolio-data.ts` para facilitar su edición futura.
- **Componentes de UI (shadcn ya disponibles vía components.json):** usar `Button`, `Card`, `Input`, `Textarea`, `Badge`/chips según convenga.
- **SEO/head:** `index.tsx` con `head()` propio (título, descripción, og:title, og:description, twitter:card). Sin og:image al no haber una absoluta.
- **Accesibilidad:** HTML semántico (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`), alt text, contraste AA.

## Verificación
- Build/typecheck pasa (lo ejecuta el harness automáticamente).
- Revisar la vista previa: navbar, hero, tarjetas con hover, form de contacto, responsive en desktop y móvil.

## Notas
- No se conecta backend: el formulario simula envío en el cliente.
- Todo el texto es placeholder para que el usuario lo reemplace.
