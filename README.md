# La Biblioteca — Portfolio Interactivo

Portfolio personal con concepto de biblioteca interactiva. Cada sección de tu perfil está representada como un libro en un estante: al hacer click en uno se abre con una animación de cambio de página y muestra el contenido interior.

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4**
- **Framer Motion** — animaciones del estante, hover de libros y page flip 3D
- **i18next / react-i18next** — soporte bilingüe ES / EN

## Libros del estante

| # | ID | Contenido |
|---|---|---|
| I | `about` | Prólogo — quién soy |
| II | `stack` | Stack & Herramientas |
| III | `experience` | Experiencia profesional |
| IV | `projects` | Proyectos destacados |
| V | `experimental` | Proyectos experimentales |
| VI | `education` | Formación académica |
| VII | `courses` | Certificaciones |
| VIII | `contact` | Epílogo — contacto |

## Estructura del proyecto

```
src/
  data/
    books.ts          # Datos de todos los libros (tipados)
  i18n/
    config.ts         # Configuración i18next
    en.ts             # Traducciones en inglés
    es.ts             # Traducciones en español
  components/
    layout/
      Background.tsx  # Fondo oscuro cálido con partículas
      Shelf.tsx        # Estante con tablones de madera
    book/
      BookSpine.tsx   # Lomo de cada libro (hover + stagger)
      BookOpen.tsx    # Modal del libro abierto
      PageFlip.tsx    # Animación de volteo de página
    sections/         # Contenido interior de cada libro
    ui/
      LanguageToggle.tsx
```

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Personalización

Todos los datos del portfolio están en `src/data/books.ts`. Edita ese archivo para reemplazar los placeholders con tu información real sin tocar ningún componente.

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
