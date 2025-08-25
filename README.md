# Holoitalia / Fandemonio Web App

Sito web interattivo basato su **Nuxt 3**, con background animato, pagine dedicate a Holoitalia e Fandemonio, link social e integrazione podcast. Il progetto utilizza **Vue 3**, **Tailwind CSS** e **lucide-vue-next** per le icone.

---

## Caratteristiche principali

- Background dinamico con **animazione wipe fluida** tra le pagine.
- Home page con collegamenti a social, linktree e icone coerenti.
- Sezione Fandemonio con **carosello podcast** e link ai servizi principali.
- Design ispirato alla **cultura anime/otaku**, minimale ma accattivante.
- Compatibile **SSR / Nuxt3**, con fallback sicuro lato server.
- Transizioni CSS fluide senza scatti bianchi.

---

## Tecnologie utilizzate

- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-vue-next](https://lucide.dev/) per le icone
- Preload immagini e animazioni fluide lato client

---

## Setup

Installa le dipendenze:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

---

## Avvio del server di sviluppo

Avvia il server di sviluppo locale su `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

---

## Build per produzione

Compila l’applicazione per produzione:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Anteprima locale della build di produzione:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

---

## Deployment

Consulta la documentazione ufficiale Nuxt per il deployment:
[https://nuxt.com/docs/getting-started/deployment](https://nuxt.com/docs/getting-started/deployment)

---

## Struttura del progetto

```
/layouts
  default.vue          # Layout principale con background animato
/pages
  index.vue            # Home page Holoitalia
  fandemonio.vue       # Pagina Fandemonio con podcast
/components
  HomeButton.vue       # Bottone home riutilizzabile con icona
  PodcastCard.vue      # Card podcast con animazione hover
/assets
  images/              # Immagini e sfondi
```

---

## Aggiungere nuovi contenuti

### 1. Nuovi link social o Linktree

I link social sono definiti nei componenti della home o in un file dedicato come `links.js`.
Ogni link è un oggetto con:

```js
{
  title: 'Nome link',
  url: 'https://link.com',
  icon: NomeIcona // importata da lucide-vue-next
}
```

- Importa l’icona dal pacchetto `lucide-vue-next`:

```js
import { Instagram, Twitter, Youtube } from 'lucide-vue-next'
```

- Aggiungi il nuovo oggetto nell’array dei link.

---

### 2. Aggiungere un nuovo podcast

1. Crea una card nel componente `PodcastCard.vue` o aggiungi un oggetto in un array `podcasts.js`:

```js
{
  title: 'Nome Episodio',
  description: 'Descrizione breve',
  url: 'https://link.episodio',
  cover: '/images/cover.png' // percorso immagine
}
```

2. Puoi integrare un **carosello** per scorrere gli episodi.
3. La card supporterà hover animation e scale tramite Tailwind.

---

### 3. Aggiungere nuovi sfondi

1. Copia l’immagine in `/assets/images/`.
2. Aggiorna la mappa `bgMap` in `layouts/default.vue`:

```js
const bgMap = {
  '/': '/images/index.webp',
  '/fandemonio': '/images/fandemonio.webp',
  '/holoitalia': '/images/holoitalia.webp',
  '/nuova-pagina': '/images/nuova.webp',
}
```

- L’animazione wipe sarà applicata automaticamente alla nuova route.

---

## Guida rapida per collaboratori

### Creare una nuova pagina

1. Crea il file `.vue` in `/pages/`, ad esempio `nuova-pagina.vue`.
2. Imposta il **layout default**:

```vue
<template>
  <div class="relative flex h-screen items-center justify-center">
    <HomeButton />
    <h1 class="text-4xl font-bold text-white drop-shadow-lg">Nuova Pagina</h1>
  </div>
</template>

<script setup>
import HomeButton from '~/components/HomeButton.vue'
</script>
```

3. Aggiungi la route alla mappa dei background in `default.vue` per avere il wipe animato:

```js
'/nuova-pagina': '/images/nuova.webp',
```

---

### Aggiungere nuovi link o icone

- Importa l’icona da `lucide-vue-next` e aggiungi un oggetto nel componente dei link.
- Mantieni lo stile coerente con hover, scale e colori.

---

### Aggiungere nuovi podcast

- Crea un oggetto podcast con `title`, `description`, `url` e `cover`.
- Aggiungilo all’array nel componente Fandemonio o nel file `podcasts.js`.
- L’animazione hover e il carosello saranno automatici se usi `PodcastCard.vue`.

---

### Suggerimenti di stile

- Mantieni il **tema anime/otaku** con colori vivaci e ombre leggere.
- Usa Tailwind per hover, scale e transizioni fluide.
- Ottimizza sempre le immagini `.webp` per performance e caricamento veloce.
