# Portal Rick & Morty - Proyecto Final React

Esta es una aplicación interactiva desarrollada en **React** y empaquetada con **Vite**, que consume la API oficial de **Rick y Morty**. La plataforma cuenta con un diseño web simple, limpio, moderno y completamente adaptable a dispositivos móviles (responsivo).

---

## 🚀 Características del Proyecto

La aplicación implementa todas las funcionalidades requeridas para el proyecto final y añade características adicionales de experiencia de usuario:

1. **Carga de Personajes**: Conexión asíncrona fluida con la API para listar todos los personajes.
2. **Visualización de Detalles**: Al hacer clic en cualquier personaje, se abre un modal interactivo con detalles ampliados (estado, especie, género, origen, ubicación actual y los primeros 5 episodios donde aparece).
3. **Paginación Dinámica**: Controles intuitivos para navegar página a página a través del catálogo completo.
4. **Filtrado Avanzado**: Buscador de texto predictivo por nombre de personaje combinable con filtros selectores de Estado (Vivo, Muerto, Desconocido) y Género (Masculino, Femenino, Sin género, Desconocido).
5. **Debouncing de Búsqueda**: Optimización de consultas de red retrasando la llamada a la API mientras el usuario escribe.
6. **Diseño Responsivo y Limpio**: Interfaz de usuario diseñada desde cero en CSS nativo (sin Tailwind u otros frameworks pesados) con una paleta de colores oscuro/slate profesional y detalles sutiles.
7. **Persistencia de Favoritos (Extra)**:
   - Posibilidad de marcar/desmarcar personajes favoritos mediante el icono de corazón en la tarjeta o dentro del modal.
   - Pestaña independiente para ver exclusivamente tus personajes favoritos guardados.
   - Almacenamiento en `localStorage` para que la lista persista tras recargar la página.
   - Buscador local en tiempo real dentro de la pestaña de favoritos.

---

## 📂 Estructura del Proyecto

El código está estructurado de forma modular y limpia, respetando las mejores prácticas de distribución de carpetas en React:

```text
src/
├── app/
│   ├── characters/
│   │   └── characters.jsx   # Entrada ligera de la ruta de personajes
│   └── favorites/
│       └── favorites.jsx    # Entrada ligera de la ruta de favoritos
├── assets/
│   # Logotipos, imágenes y recursos estáticos
├── common/
│   ├── components/
│   │   └── navbar/
│   │       ├── navbar.jsx   # Componente Navbar (CSS Modules)
│   │       └── navbar.module.css
│   ├── layouts/
│   │   └── shop-layout.jsx  # Layout global de la aplicación (Navbar + Outlet)
│   └── styles/
│       └── global.css       # Estilos globales y reset tipográfico
├── features/
│   ├── characters/
│   │   ├── components/
│   │   │   ├── character-card/
│   │   │   │   ├── character-card.jsx
│   │   │   │   └── character-card.module.css
│   │   │   ├── character-detail-modal/
│   │   │   │   ├── character-detail-modal.jsx
│   │   │   │   └── character-detail-modal.module.css
│   │   │   ├── filters/
│   │   │   │   ├── filters.jsx
│   │   │   │   └── filters.module.css
│   │   │   └── pagination/
│   │   │       ├── pagination.jsx
│   │   │       └── pagination.module.css
│   │   ├── hooks/
│   │   │   ├── use-characters.js # Manejador de estado y llamadas API
│   │   │   └── use-debounce.js   # Retardo de consultas de texto
│   │   ├── page/
│   │   │   ├── characters.jsx    # Componente de la página principal
│   │   │   └── characters.module.css
│   │   └── services/
│   │       └── get-characters.js # Servicio de API fetch
│   └── favorites/
│       ├── components/
│       │   └── favorites-provider.jsx # Proveedor del contexto de favoritos
│       ├── hooks/
│       │   └── use-favorites.js       # Hook compartido de favoritos (Context)
│       └── page/
│           ├── favorites.jsx          # Página de favoritos
│           └── favorites.module.css
├── router/
│   └── router.jsx           # Configuración de enrutamiento con react-router
├── App.jsx                  # Componente raíz inicializador de proveedores
└── main.jsx                 # Punto de entrada de la aplicación
```


---

## 🛠️ Instalación y Desarrollo Local

Sigue estos pasos para instalar y ejecutar el proyecto de forma local utilizando **Yarn**:

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd RickMorty
   ```

2. **Instalar dependencias**:
   ```bash
   yarn install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   yarn dev
   ```
   *Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.*

4. **Compilar para producción**:
   ```bash
   yarn build
   ```
   *Esto generará los archivos optimizados dentro de la carpeta `dist/`.*

5. **Ejecutar el linter para comprobar calidad**:
   ```bash
   yarn lint
   ```

---

## 🌐 Guía de Hosting / Despliegue

La aplicación es completamente estática y no utiliza routing dependiente del servidor, por lo que puede ser desplegada de forma gratuita en cualquier proveedor en segundos.

### Opción 1: Desplegar en Vercel (Recomendado)
1. Crea una cuenta gratuita en [Vercel](https://vercel.com).
2. Conecta tu cuenta de GitHub, GitLab o Bitbucket.
3. Importa este repositorio de Rick y Morty.
4. Vercel detectará automáticamente que es un proyecto de Vite/React. Deja los campos por defecto y haz clic en **Deploy**.
5. ¡Listo! Tu página estará hosteada en un subdominio `.vercel.app`.

### Opción 2: Desplegar en Netlify
1. Crea una cuenta en [Netlify](https://netlify.com).
2. Selecciona **Add new site** > **Import an existing project**.
3. Conecta tu repositorio de GitHub.
4. Configura los ajustes de build:
   - Build Command: `yarn build`
   - Publish directory: `dist`
5. Haz clic en **Deploy site** y tendrás tu url de producción.
