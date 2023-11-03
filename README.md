## Características Técnicas

- ⚡️ Next.js 13
- ⚛️ React 18
- 💨 Tailwind CSS 3
- 💎 TypeScript

### 1. Instala las dependencias

Es recomendable usar **npm** para una correcta instalación de las dependencias.

```bash
npm install
```

### 2. Variables de Entorno

Crear un archivo .env en la raíz del proyecto que tenga los siguientes valores.

```bash
MONGODB_URL = ""
NODE_ENV= "development"
SECRET_COOKIE_PASSWORD = "KTE2iWWSeoAA.PWEL4TyQ1rVcXiOZgPyiSsI1HuwcdCK"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### 3. Ejecuta la aplicación

Puedes iniciar el servidor en modo producción usando este comando:

```bash
npm run build

npm run start
```

o en modo desarrollo

```bash
npm run dev

```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

### 4. Convención para los mensajes de commit

Este proyecto utiliza [convencional commits](https://www.conventionalcommits.org/en/v1.0.0/), es obligatorio utilizarlo para hacer commits. Para ello se debe hacer uso de la siguiente estructura:

```bash
[FEATURE] feature description
[FIX] fix description
[ADD] add description

```

### 5. Arquitectura de carpetas

```bash
├── public               # Activos estáticos
│   ├── favicon          # Iconos y favicon
│   ├── fonts            # Fuentes tipográficas
│   └── images           # Imágenes y gráficos
├── src                  # Código fuente
│   ├── clientServices   # Servicios relacionados con el cliente
│   ├── components       # Componentes React reutilizables
│   ├── constant         # Constantes globales
│   ├── context          # Contextos de React
│   ├── hooks            # Hooks personalizados de React
│   │   ├── dashboard    # Hooks para el dashboard
│   │   └── ...          # Otros hooks
│   ├── interface        # Tipos y interfaces
│   ├── lib              # Funciones y librerías auxiliares
│   ├── middlewares      # Middlewares para Next.js y otras utilidades
│   ├── models           # Modelos de datos
│   ├── pages            # Páginas y rutas de Next.js
│   │   └── api          # Rutas de la API
    │   ├── carpetas     # Rutas de paginas
│   ├── services         # Servicios para lógica de negocio
│   ├── styles           # Archivos de estilos CSS/SCSS
│   └── utils            # Utilidades y funciones auxiliares

```