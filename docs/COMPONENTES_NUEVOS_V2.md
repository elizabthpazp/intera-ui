# InteraUI — Componentes nuevos (Signature + Useful)

> Guía de los **13 componentes creados en esta tanda**: 7 visuales Signature y 6 utilitarios Useful.
> Todos son `"use client"`, 100% customizables (`className` + `style`, merge con `tailwind-merge`:
> tu `className` gana), responsive mobile/tablet/desktop y con `darkMode`.
> Entry point: `src/components/index.js`.

```bash
npm install @elizabthpazp/intera-ui
# peers: react>=18, react-dom>=18, framer-motion>=6, lucide-react>=0.300
```

```jsx
import "@elizabthpazp/intera-ui/dist/globals.css";
import { NebulaDrift, SmartTable } from "@elizabthpazp/intera-ui";
```

**Reglas globales de customización:**
- `className="rounded-none p-0"` sobreescribe radios/paddings internos (va al root).
- `style={{}}` para inline. `hint={null}` oculta los hints de demo.
- Ningún componente impone `max-width`/`margin` externo (el centrado lo hace el consumidor).
- Touch: funcionan con pointer/touch, no solo hover.

---

## SIGNATURE (visuales, implementación propia)

### 1. NebulaDrift — fondo aurora que sigue al cursor
`src/components/interactive/NebulaDrift.jsx`

```jsx
import { NebulaDrift } from "@elizabthpazp/intera-ui";

<NebulaDrift darkMode intensity={1.2} showGrid hint={null} minHeight={360}>
  <div className="py-20 px-8 text-center">
    <h3 className="text-4xl font-black tracking-tighter">Tu hero aquí</h3>
  </div>
</NebulaDrift>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `children` | `ReactNode` | — | Contenido encima de la aurora |
| `darkMode` | `boolean` | `false` | |
| `intensity` | `number` | `1` | `0.5` sutil / `1.6` intenso |
| `showGrid` | `boolean` | `true` | Rejilla con máscara radial |
| `hint` | `string\|null` | `"● live aurora…"` | `null` lo oculta |
| `minHeight` | `number` | `280` | Altura mínima |
| `className` / `style` | | `""` | |

### 2. StarfallField — lluvia de meteoros con burst al click
`src/components/interactive/StarfallField.jsx`

```jsx
import { StarfallField } from "@elizabthpazp/intera-ui";

<StarfallField darkMode density={16} speed={1.2} burstOnClick hint={null}>
  <div className="py-20 text-center">
    <h3 className="text-4xl font-black">Click = burst ✦</h3>
  </div>
</StarfallField>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `children` | `ReactNode` | — | |
| `darkMode` | `boolean` | `false` | En claro el fondo es `#eef0ff` (usa texto oscuro) |
| `density` | `number` | `14` | Más alto = más meteoros (`>18` duplica spawn) |
| `speed` | `number` | `1` | Multiplicador de velocidad |
| `burstOnClick` | `boolean` | `true` | Click crea 5 meteoros (ignora clicks en botones/links/inputs) |
| `hint` / `minHeight` | | `"click anywhere…" / 320` | |
| `className` / `style` | | | |

### 3. PulseGrid — rejilla reactiva + ripple
`src/components/interactive/PulseGrid.jsx`

```jsx
import { PulseGrid } from "@elizabthpazp/intera-ui";

<PulseGrid darkMode rows={8} cols={12} hint={null} minHeight={340}>
  <div className="py-16 text-center"><h3>Tu contenido (clicable)</h3></div>
</PulseGrid>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `darkMode` | `boolean` | `false` | |
| `rows` / `cols` | `number` | `8` / `12` | Total = rows×cols nodos (no abuses: 200+ pesa) |
| `children` | `ReactNode` | — | Recibe clicks (sin `pointer-events-none`) |
| `hint` / `minHeight` | | `"hover to light…" / 320` | |
| `className` / `style` | | | |

> Recalcula posiciones en `resize`. En touch usa el dedo como cursor.

### 4. FluxBorder — borde cónico animado
`src/components/interactive/FluxBorder.jsx`

```jsx
import { FluxBorder } from "@elizabthpazp/intera-ui";

<FluxBorder darkMode glow="violet" speed={4} radius="rounded-[2rem]">
  <div className="px-10 py-8 text-center">Tu card / botón grande</div>
</FluxBorder>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `children` | `ReactNode` | — | |
| `darkMode` | `boolean` | `false` | Fondo interno |
| `glow` | `"violet"\|"ember"\|"mint"\|"mono"` | `"violet"` | Paleta del anillo |
| `speed` | `number` | `4` | Segundos por vuelta (en hover acelera ×0.45) |
| `radius` | `string` | `"rounded-[2rem]"` | Radio externo e interno |
| `className` / `style` | | | |

### 5. LoopCards — cinta infinita con controles
`src/components/interactive/LoopCards.jsx`

```jsx
import { LoopCards } from "@elizabthpazp/intera-ui";

<LoopCards
  darkMode
  direction="right"
  speed={32}
  pauseOnHover
  items={[
    { id: "1", title: "Diseño vivo", content: "Micro-interacciones…" },
    { id: "2", title: "Motion real", content: "Springs…" },
  ]}
/>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `items` | `Array<{id, title, content}>` | 5 demo | Se duplican para el loop |
| `darkMode` | `boolean` | `false` | |
| `direction` | `"left"\|"right"` | `"right"` | Derecha = se mueve → (default izquierda→derecha) |
| `speed` | `number` | `32` | **Segundos por vuelta** (menor = más rápido). UI: 22=3x, 32=2x, 48=1x |
| `pauseOnHover` | `boolean` | `true` | + botón Play/Pause manual (funciona en touch) |
| `className` / `style` | | | |

> Cards `w-[min(280px,74vw)]`, controles con `flex-wrap`: apto 360px.

### 6. BloomText — texto que florece por palabras
`src/components/interactive/BloomText.jsx`

```jsx
import { BloomText } from "@elizabthpazp/intera-ui";

<BloomText
  darkMode
  text="Interfaces que respiran y enamoran."
  highlightWords={["respiran,"]}
  textClassName="text-3xl sm:text-5xl"
  showReplay
/>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `text` | `string` | demo | Se parte por espacios |
| `darkMode` | `boolean` | `false` | |
| `highlightWords` | `string[]` | `["respiran,", "enamoran"]` | Match exacto con la palabra |
| `highlightClass` | `string` | gradiente violeta→cyan | Clase de las destacadas |
| `textClassName` | `string` | `"text-3xl sm:text-4xl"` | **Tamaño del texto** (sobreescribe) |
| `showReplay` | `boolean` | `true` | Botón Replay + hint |
| `className` / `style` | | | |

> Cada palabra es clicable (pop) y hovereable. Click = `onClick` por palabra, funciona en touch.

### 7. TrailBeam — haz de scroll con orbe %
`src/components/interactive/TrailBeam.jsx`

```jsx
import { TrailBeam } from "@elizabthpazp/intera-ui";

// Modo steps (data):
<TrailBeam
  darkMode
  accent="from-violet-500 via-fuchsia-400 to-cyan-300"
  steps={[
    { title: "Descubre", content: "…" },
    { title: "Explora", content: "…" },
  ]}
/>

// Modo children (contenido libre):
<TrailBeam darkMode cardClassName="bg-transparent">
  <div>Tu bloque 1</div>
  <div>Tu bloque 2</div>
</TrailBeam>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `children` | `ReactNode` | — | Si hay, ignora `steps` |
| `steps` | `Array<{title, content}>` | 3 demo | |
| `darkMode` | `boolean` | `false` | |
| `accent` | `string` | gradiente violeta→cyan | Clases del beam |
| `cardClassName` | `string` | `""` | Extra para cada card |
| `className` / `style` | | | |

---

## USEFUL (resuelven problemas reales, cero hover decorativo)

### 8. SmartTable — tabla admin con todo
`src/components/interactive/SmartTable.jsx`

```jsx
import { SmartTable } from "@elizabthpazp/intera-ui";

<SmartTable
  darkMode
  pageSize={5}
  columns={[
    { key: "name", label: "Cliente", sortable: true },
    { key: "plan", label: "Plan", sortable: true },
    { key: "status", label: "Estado", sortable: true },
    { key: "mrr", label: "MRR", sortable: true },
  ]}
  data={[
    { id: "1", name: "Acme", plan: "Scale", status: "active", mrr: 490 },
  ]}
  onSelectionChange={(ids) => console.log(ids)}
/>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `columns` | `Array<{key, label, sortable?}>` | 4 demo | `key` debe existir en cada fila |
| `data` | `Array<{id, ...}>` | 8 filas demo | `id` único requerido |
| `darkMode` | `boolean` | `false` | |
| `pageSize` | `number` | `5` | Filas por página |
| `onSelectionChange` | `(ids: string[]) => void` | `()=>{}` | |
| `className` / `style` | | | |

> Incluye: buscador live, filtros por estado (auto), orden asc/desc, select múltiple,
> paginación con ventana deslizante, **export CSV real** y empty state con limpiar filtros.
> `status` renderiza pill (`active/trial/past_due/canceled`); `mrr` formatea `$`.
> Mobile: scroll-x con `min-w-[560px]`.

### 9. FlowWizard — onboarding/checkout por pasos
`src/components/interactive/FlowWizard.jsx`

```jsx
import { FlowWizard } from "@elizabthpazp/intera-ui";

<div className="max-w-xl mx-auto"> {/* el centrado lo pones tú */}
  <FlowWizard darkMode onComplete={(form) => api.signup(form)} />
</div>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `darkMode` | `boolean` | `false` | |
| `onComplete` | `(form) => void` | `()=>{}` | `form = {name, email, plan, card, agree}` |
| `className` / `style` | | | `w-full`, sin `max-width` impuesto |

> Pasos: Perfil (valida nombre + email) → Plan (Starter/Scale/Enterprise; Enterprise pide
> tarjeta) → Review + checkbox legal → success. No avanza con errores (marca `touched`).
> Stepper clicable hacia atrás. `grid-cols-1 sm:grid-cols-3` en planes.

### 10. DropVault — uploader drag & drop
`src/components/interactive/DropVault.jsx`

```jsx
import { DropVault } from "@elizabthpazp/intera-ui";

<DropVault darkMode maxMb={8} maxFiles={8} onFilesChange={(files) => upload(files)} />
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `darkMode` | `boolean` | `false` | |
| `maxMb` | `number` | `8` | Peso máximo por archivo |
| `maxFiles` | `number` | `8` | Tope de cola |
| `accept` | `string[]` (MIME) | PNG/JPG/WEBP/PDF | `[]` = aceptar todo |
| `onFilesChange` | `(files) => void` | `()=>{}` | Items `{id, file, name, size, progress, status}` |
| `className` / `style` | | | |

> Drag & drop + click, valida tipo/peso, progreso animado por archivo, preview de
> imágenes, contador listos/total. `status`: `uploading | done | error-type | error-size`.

### 11. SlotPicker — reserva de citas
`src/components/interactive/SlotPicker.jsx`

```jsx
import { SlotPicker } from "@elizabthpazp/intera-ui";

<SlotPicker darkMode onConfirm={({ date, slot }) => api.book(date, slot)} />
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `darkMode` | `boolean` | `false` | |
| `onConfirm` | `({date, slot}) => void` | `()=>{}` | `date: Date`, `slot: "09:00"…` |
| `className` / `style` | | | `md:grid-cols-[1fr_240px]`, apila en mobile |

> Mes navegable + botón Hoy, días pasados deshabilitados, slots `09:00–17:00`
> (`12:00` ocupado demo), confirmación con estado reservado + "Cambiar".
> Días `aspect-square` (~40px en 360px: táctil OK).

### 12. PriceForge — calculadora de pricing
`src/components/interactive/PriceForge.jsx`

```jsx
import { PriceForge } from "@elizabthpazp/intera-ui";

<PriceForge
  darkMode
  basePerSeat={12}
  summaryClassName="bg-[#0b0b12]"
  onCheckout={({ seats, annual, addons, total }) => api.checkout(...)}
/>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `darkMode` | `boolean` | `false` | |
| `basePerSeat` | `number` | `12` | $ por seat |
| `onCheckout` | `(calc) => void` | `()=>{}` | `{seats, annual, addons, total}` |
| `summaryClassName` | `string` | `""` | Override del panel total (en claro es negro por diseño) |
| `className` / `style` | | | `lg:grid-cols-[1fr_300px]` |

> Slider seats 1–200, switch mensual/anual (−20%), 3 add-ons con precio real
> (SSO $49, Soporte $99, Backup $39), desglose vivo + CTA con total.

### 13. FlowBoard — kanban drag & drop
`src/components/interactive/FlowBoard.jsx`

```jsx
import { FlowBoard } from "@elizabthpazp/intera-ui";

<FlowBoard
  darkMode
  initial={[
    { id: "t1", col: "todo", title: "Diseñar landing", tag: "Design" },
    { id: "t2", col: "doing", title: "Copy hero", tag: "Copy" },
  ]}
  onChange={(tasks) => save(tasks)}
/>
```

| Prop | Tipo | Default | Nota |
|------|------|---------|------|
| `darkMode` | `boolean` | `false` | |
| `initial` | `Array<{id, col, title, tag}>` | 4 demo | `col`: `"todo"\|"doing"\|"done"` |
| `onChange` | `(tasks) => void` | `()=>{}` | Tras crear/mover/borrar |
| `className` / `style` | | | `md:grid-cols-3` |

> Crear con Enter, drag nativo entre columnas (HTML5 DnD), borrar (visible en touch),
> conteos por columna + `x/y completadas`. 100% local, sin backend.
> ⚠️ El DnD HTML5 no funciona en mobile-touch: las tareas se crean igual y el
> estado es editable por props; para mover en móvil usa los botones de tu app
> consumiendo `onChange`.

---

## Playground local

`src/app/page.js`: sección `Intera Signature — New` (1–7) y `Useful — Pro Tools` (8–13).

```powershell
npm run dev
```
