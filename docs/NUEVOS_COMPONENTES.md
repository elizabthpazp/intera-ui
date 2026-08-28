# InteraUI — Guía de Nuevos Componentes Interactivos

> Esta guía es para **integrar los 10 componentes nuevos** de la librería. Los componentes clásicos (`ButtonCard`, `CardProfile`, `Activities`, `CatLoader`, `GiftBox`, `TextMasking`, `Tree`, `TreeTriangle`) mantienen su API. Todos los componentes ahora son **100% customizables** (`className` + `style` + `cn()` merge) y **no invaden estilos** del host.

**Ubicación librería:** `src/components/interactive/*` y `src/components/animations/border-image.jsx`  
**Entry point:** `src/components/index.js:11`

---

## 1. Instalación y Setup

```bash
npm install @elizabthpazp/intera-ui
# o
bun add @elizabthpazp/intera-ui
# peerDeps requeridas: react>=18, react-dom>=18, framer-motion>=6, lucide-react>=0.300
```

**Tailwind (obligatorio):** la librería usa Tailwind. Si tu proyecto ya usa Tailwind no hagas nada. Añade el `content` para que no haga purge:

```js
// tailwind.config.js
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@elizabthpazp/intera-ui/dist/**/*.{js,ts,jsx,tsx}"
]
```

**Estilos:**
```jsx
// App.jsx / layout.jsx
import "@elizabthpazp/intera-ui/dist/globals.css"; // con preflight (para Next.js)
// Si tu proyecto NO quiere el reset global html/body, usa:
// import "@elizabthpazp/intera-ui/dist/globals.isolated.css";
```

**Utilidad `cn` (para overrides):**
```js
import { cn } from "@elizabthpazp/intera-ui";
// cn("px-4 bg-black", className) -> tu className gana gracias a tailwind-merge
```

Todos los componentes exponen `className`, `style`, `darkMode`. Los clásicos además exponen `cardClassName`, `triggerClassName`, etc. Ver `src/lib/utils.js:1`.

---

## 2. MagneticDock

Dock estilo macOS con magnificación.

**Import:** `import { MagneticDock } from "@elizabthpazp/intera-ui"` — `src/components/interactive/MagneticDock.jsx:14`

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `items` | `Array<{icon, label, onClick}>` | `[]` | Iconos (usa `lucide-react`) |
| `distance` | `number` | `150` | Distancia de magnificación |
| `magnification` | `number` | `80` | Tamaño máximo |
| `baseSize` | `number` | `40` | Tamaño base |
| `darkMode` | `boolean` | `false` | Tema oscuro |
| `className` | `string` | `""` | Override con `cn` |
| `style` | `CSSProperties` | `-` | Estilos inline |

**Uso:**
```jsx
import { MagneticDock } from "@elizabthpazp/intera-ui";
import { Home, Search, User, Settings } from "lucide-react";

const items = [
  { icon: <Home size={20}/>, label: "Home", onClick: () => router.push("/") },
  { icon: <Search size={20}/>, label: "Buscar", onClick: () => {} },
];

<MagneticDock items={items} darkMode baseSize={44} magnification={72} className="my-4" />
```

---

## 3. MagneticButton

Botón que sigue al cursor con física elástica.

**Import:** `src/components/interactive/MagneticButton.jsx:13`

| Prop | Default | Nota |
|------|---------|------|
| `children` | — | Texto |
| `onClick` | `()=>{}` | |
| `strength` | `0.5` | 0 a 1, fuerza magnética |
| `darkMode` | `false` | |
| `className`/`style` | `""` | |

```jsx
import { MagneticButton } from "@elizabthpazp/intera-ui";

<MagneticButton strength={0.6} darkMode onClick={handleAction} className="bg-[#ff4149] hover:bg-[#ff6b6b]">
  EXPLORAR AHORA
</MagneticButton>
```

---

## 4. GlassStack

Stack 3D de cards con efecto glassmorphism, click para rotar.

**Import:** `src/components/interactive/GlassStack.jsx:11`

| Prop | Default |
|------|---------|
| `items` | `[]` `{title, content}` |
| `darkMode` | `false` |
| `className`/`style` | `""` |

```jsx
import { GlassStack } from "@elizabthpazp/intera-ui";

const items = [
  { title: "Interacción Dinámica", content: "Física fluida..." },
  { title: "Estética Moderna", content: "Glassmorphism..." },
  { title: "Customizable", content: "Control total..." },
];

<GlassStack items={items} darkMode className="h-[500px]" />
```

---

## 5. ElasticSlider

Slider numérico con thumb elástico.

**Import:** `src/components/interactive/ElasticSlider.jsx:14`

| Prop | Default |
|------|---------|
| `min` | `0` |
| `max` | `100` |
| `defaultValue` | `50` |
| `onChange` | `(v)=>{}` |
| `darkMode` | `false` |
| `className`/`style` | |

```jsx
import { ElasticSlider } from "@elizabthpazp/intera-ui";

<ElasticSlider min={0} max={200} defaultValue={80} onChange={(v)=> setPrice(v)} darkMode />
```

---

## 6. FluidTabs

Tabs con indicador morphing (layoutId).

**Import:** `src/components/interactive/FluidTabs.jsx:13`

| Prop | Default |
|------|---------|
| `tabs` | `[]` `{id, label}` |
| `activeTab` | `tabs[0].id` |
| `onChange` | `(id)=>{}` |
| `darkMode` | `false` |

```jsx
import { FluidTabs } from "@elizabthpazp/intera-ui";

const tabs = [{id:"design", label:"Design"}, {id:"code", label:"Code"}];
<FluidTabs tabs={tabs} activeTab="design" onChange={setTab} darkMode />

// Controlado: maneja tu propio activeTab desde el padre
```

---

## 7. PerspectiveCard

Card 3D que tiltea con el mouse (preserve-3d).

**Import:** `src/components/interactive/PerspectiveCard.jsx:11`

| Prop | Default |
|------|---------|
| `children` | — |
| `darkMode` | `false` |
| `className`/`style` | |

```jsx
import { PerspectiveCard } from "@elizabthpazp/intera-ui";
import { Rocket } from "lucide-react";

<PerspectiveCard darkMode className="w-80 h-[420px]">
  <Rocket size={48}/>
  <h3 className="font-black">3D PERSPECTIVE</h3>
  <p className="text-xs opacity-50">Hover para profundidad</p>
</PerspectiveCard>
```

---

## 8. SwipeToConfirm

Slider para acciones críticas (pago, borrar). **La librería NO hace `alert` por defecto.**

**Import:** `src/components/interactive/SwipeToConfirm.jsx:16`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | `string` | `"Slide to confirm"` | Texto fondo |
| `successLabel` | `string` | `"Confirmed"` | Texto éxito |
| `onConfirm` | `() => void` | `()=>{}` | Tu lógica (API, navigate) |
| `onReset` | `() => void` | `()=>{}` | Al resetear |
| `resetDelay` | `number\|null` | `null` | Auto-reset tras X ms |
| `allowReset` | `boolean` | `true` | Muestra botón ↻ |
| `disabled` | `boolean` | `false` | |
| `darkMode` | `boolean` | `false` | |
| `className`/`style` | | | |

```jsx
import { SwipeToConfirm } from "@elizabthpazp/intera-ui";

// Demo playground usa console.log, no alert:
<SwipeToConfirm 
  darkMode 
  label="Desliza para pagar"
  successLabel="Pagado"
  onConfirm={() => mutatePayment()}
  onReset={() => console.log("reset")}
  resetDelay={3000} // se resetea solo a los 3s
  allowReset
/>

// Sin auto-reset: se queda en "Confirmed" hasta que el usuario pulse ↻
```

---

## 9. MorphingSearch

Icono que se expande a input con spring.

**Import:** `src/components/interactive/MorphingSearch.jsx:13`

| Prop | Default |
|------|---------|
| `placeholder` | `"Search anything..."` |
| `onSearch` | `(value)=>{}` |
| `darkMode` | `false` |
| `className`/`style` | |

```jsx
import { MorphingSearch } from "@elizabthpazp/intera-ui";

<MorphingSearch placeholder="Buscar..." onSearch={(v)=> filter(v)} darkMode className="mx-auto" />
```

---

## 10. InteractiveLens

Lente que revela capa nítida sobre fondo gris.

**Import:** `src/components/interactive/InteractiveLens.jsx:13`

| Prop | Default |
|------|---------|
| `children` | — | Contenido nítido |
| `background` | `children` | Fondo borroso |
| `size` | `200` | Diámetro lente |
| `darkMode` | `false` | |
| `className`/`style` | | |

```jsx
import { InteractiveLens } from "@elizabthpazp/intera-ui";

<InteractiveLens 
  size={240}
  darkMode
  background={<div className="bg-zinc-900 text-zinc-800 text-6xl font-black">DARK</div>}
>
  <div className="bg-white text-black text-6xl font-black">LIGHT</div>
</InteractiveLens>
```

---

## 11. InteractiveAccordion

Acordeón con spring y `ChevronDown`.

**Import:** `src/components/interactive/InteractiveAccordion.jsx:12`

| Prop | Default |
|------|---------|
| `items` | `[]` `{id, title, content}` |
| `darkMode` | `false` |
| `className`/`style` | |

```jsx
import { InteractiveAccordion } from "@elizabthpazp/intera-ui";

const items = [
  { id:"1", title:"Arquitectura", content:"React 19 + Framer Motion" },
  { id:"2", title:"Diseño", content:"Minimalista..." },
];

<InteractiveAccordion items={items} darkMode />
```

---

## 12. BorderImage (actualizado)

Ahora sin `next/image`, funciona en **Vite/CRA/Next**. Antes usaba `next/image` y rompía fuera de Next.

**Import:** `src/components/animations/border-image.jsx:16`

| Prop | Tipo | Default |
|------|------|---------|
| `image` | `string\|null` | `null` -> `/img/image.jpg` con fallback CDN `placehold.co` + data URI |
| `darkMode` | `boolean` | `false` |
| `size` | `number` | `112` |
| `alt` | `string` | `"Animated Image"` |
| `className`/`style` | | |

```jsx
import { BorderImage } from "@elizabthpazp/intera-ui";

<BorderImage image="/img/cat.png" size={140} darkMode alt="Avatar" className="mx-auto" />
// Sin image: muestra placeholder local con fallback CDN automático
<BorderImage darkMode />
```

Usado internamente por `CardProfile` (`src/components/cards/card-profile.jsx:44`).

---

## 13. Patrón de Customización (todos los componentes)

Todos soportan override sin `!important`:

```jsx
// 1. className mergea con tailwind-merge: tu clase gana
<CardProfile className="p-0 max-w-none" cardClassName="rounded-none bg-red-500" />

// 2. style inline
<MagneticButton style={{ margin: 20 }} className="shadow-none" />

// 3. darkMode booleano + cn() interno en src/lib/utils.js:1
```

**Migración desde los clásicos:**
```diff
- import { CardProfile } from "@elizabthpazp/intera-ui"
- <CardProfile darkMode />
+ import { CardProfile } from "@elizabthpazp/intera-ui"
+ <CardProfile darkMode className="my-8" style={{maxWidth: 400}} />
```

---

## 14. Testing local sin publicar

Ya que `npm publish` está bloqueado, ver `docs` en README o:

```powershell
npm run build; npm pack
npm install C:\Eli\projects\intera-ui\elizabthpazp-intera-ui-*.tgz
# o
npm install file:../intera-ui
```

Ver `package.json:18` y `src/lib/utils.js:1`.

---

## 15. Estructura de archivos nuevos

```
src/components/interactive/
  MagneticDock.jsx
  MagneticButton.jsx
  GlassStack.jsx
  ElasticSlider.jsx
  FluidTabs.jsx
  PerspectiveCard.jsx
  SwipeToConfirm.jsx  # actualizado con resetDelay/allowReset
  MorphingSearch.jsx
  InteractiveLens.jsx
  InteractiveAccordion.jsx
src/components/animations/border-image.jsx # refactorizado sin next/image
src/lib/utils.js # cn()
src/globals.isolated.css # versión sin preflight invasivo
```
