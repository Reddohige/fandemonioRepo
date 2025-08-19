````markdown
# SPA Podcast Project — Fan-Demonio & Hololive Italia

Una **single-page application** moderna sviluppata con **Vue 3** e **Nuxt 3**, con contenuti principalmente statici che rimandano a link esterni, e una sezione dinamica dedicata alla visualizzazione di card in uno slider che mostrano episodi del podcast **Fandemonio**, giocato tra fandom weeb e cultura VTuber.

---

## Riferimenti generali

- **Fandemonio** (“il podcast molto Weeb sui Fandom”) via Linktree, include collegamenti a Instagram, YouTube, Telegram, playlist Spotify/YouTube ecc. :contentReference[oaicite:0]{index=0}
- **Hololive Italia**, il fan club italiano di Hololive, presente su Instagram e X (Twitter) :contentReference[oaicite:1]{index=1}

---

## Caratteristiche principali

- **Pagina statica principale**  
  Alcuni componenti Vue che mostrano informazioni sulla pagina (es. titolo, descrizione) e link esterni tratti da Linktree, ad esempio i canali di Fandemonio e Hololive Italia.

- **Slider di card podcast**  
  Un carosello di card che rappresentano i vari episodi del podcast Fandemonio, con titolo, descrizione breve, data, durata e link a Spreaker o alle piattaforme di ascolto.

---

## Tecnologie utilizzate

- **Vue 3** — framework JavaScript moderno per UI reattive.
- **Nuxt 3** — per SSR/SSG e facile sviluppo di SPA.
- **Swiper** (o altra libreria di slider) — per lo slider delle card.
- **Fetch API / Axios** — per recuperare dati tramite Spreaker API (o embed manuale, se API non disponibile).

---

## Setup del progetto

### 1. Creare il progetto

```bash
npx nuxi init spa-podcast
cd spa-podcast
npm install
```
````

### 2. Installare le dipendenze necessarie

```bash
npm install swiper
# oppure, se preferisci:
npm install axios
```

### 3. Struttura consigliata

```
spa-podcast/
├── components/
│   ├── StaticLinks.vue        # componenti per link esterni (Fandemonio, Hololive Italia)
│   └── PodcastSlider.vue      # slider con card degli episodi
├── pages/
│   └── index.vue              # pagina principale
├── composables/
│   └── usePodcast.js          # fetch degli episodi
└── nuxt.config.ts             # configurazione Nuxt, includi Swiper, dirs, etc.
```

---

## API / Contenuti podcast

Se Spreaker offre un’**API pubblica** puoi fetchare in `usePodcast.js`, altrimenti usi un array mock con:

```js
export const episodes = [
  {
    id: "1",
    title: "Pazzi per le cavalle",
    date: "2025-07-09",
    duration: "47 min",
    url: "<link allo streaming>",
    description:
      "Perché siamo letteralmente impazziti per un franchise che parla di ragazze cavallo?", // da Apple Podcast :contentReference[oaicite:2]{index=2}
  },
  // altri episodi...
];
```

---

## Esempio di `PodcastSlider.vue`

```vue
<template>
  <swiper :slides-per-view="3">
    <swiper-slide v-for="ep in episodes" :key="ep.id">
      <div class="card">
        <h3>{{ ep.title }}</h3>
        <p>{{ ep.date }} • {{ ep.duration }}</p>
        <p>{{ ep.description }}</p>
        <a :href="ep.url" target="_blank">Ascolta ora</a>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { episodes } from "~/composables/usePodcast";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const episodesList = episodes;
</script>
```

---

## Struttura di `README.md` finale

Di seguito trovi una versione verifica e ben organizzata:

---

````markdown
# SPA Podcast Project — Fan-Demonio & Hololive Italia

**Una SPA Vue 3 con Nuxt 3**, composta da:

- Componenti statici con link verso Fandemonio e Hololive Italia (ospiti su Instagram, YouTube, X, Telegram, ecc.) :contentReference[oaicite:3]{index=3}
- Slider dinamico con card per ascoltare gli episodi del podcast Fandemonio tramite Spreaker (o embed), con titolo, data, durata e descrizione. Uno degli episodi recenti è “Pazzi per le cavalle” pubblicato il 9 luglio 2025 :contentReference[oaicite:4]{index=4}.

---

## Tecnologie

- **Vue 3**, **Nuxt 3**
- **Swiper** per lo slider
- **Axios / fetch** per dati podcast
- **Spreaker API** (se disponibile) o array mock

---

## Setup rapido

```bash
npx nuxi init spa-podcast
cd spa-podcast
npm install
npm install swiper
```
````

### File chiave

- `components/StaticLinks.vue` — rendi i link di Fandemonio e Hololive Italia
- `composables/usePodcast.js` — fetch o mock episodes
- `components/PodcastSlider.vue` — visualizza gli episodi
- `pages/index.vue` — pagina principale

---
