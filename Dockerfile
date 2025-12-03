FROM node:20-alpine

# Habilitar pnpm mediante corepack (incluido en Node 20)
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias
RUN pnpm install

# Copia el resto del código
COPY . .

# Expone el puerto por defecto de Vite
EXPOSE 5173

# CMD para desarrollo: Ejecuta el script 'dev' exponiendo el host
CMD ["pnpm", "run", "dev", "--host"]