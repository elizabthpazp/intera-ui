"use client";

import React, { useState } from "react";
import { 
  ButtonCard, 
  CardProfile, 
  Activities, 
  TreeTriangle, 
  Tree, 
  GiftBox, 
  CatLoader, 
  BorderImage, 
  TextMasking,
  MagneticDock,
  InteractiveLens,
  MorphingSearch,
  ElasticSlider,
  GlassStack,
  MagneticButton,
  SwipeToConfirm,
  FluidTabs,
  PerspectiveCard,
  InteractiveAccordion,
  CommandPalette,
  BottomSheet,
  ImageCompare,
  BentoGrid,
  KineticMorphText,
  LiquidProgress,
  OrbitalMenu,
  SpotlightGrid
} from "../components";
import { Sun, Moon, Home, Search, Settings, User, Bell, Rocket, Zap, LayoutGrid, Sparkles, Droplet, Orbit, Eye } from "lucide-react";

export default function Playground() {
  const [darkMode, setDarkMode] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [liquidVal, setLiquidVal] = useState(64);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const Section = ({ title, children }) => (
    <section className="mb-24">
      <h2 className={`text-4xl font-black mb-12 pb-4 border-b-4 tracking-tighter uppercase ${darkMode ? 'text-white border-gray-800' : 'text-gray-900 border-gray-100'}`}>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
        {children}
      </div>
    </section>
  );

  const ComponentWrapper = ({ name, children, fullWidth = false, description = "" }) => (
    <div className={`flex flex-col gap-6 ${fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
           <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`} />
           <span className={`text-sm font-black uppercase tracking-[0.2em] ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
             {name}
           </span>
        </div>
        {description && (
          <p className={`text-xs font-medium leading-relaxed ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            {description}
          </p>
        )}
      </div>
      <div className={`p-12 rounded-[2.5rem] border transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900/40 border-gray-800 hover:border-gray-700 shadow-2xl shadow-black/50' 
          : 'bg-white border-gray-100 shadow-2xl shadow-gray-200/40 hover:shadow-gray-200/60'
      }`}>
        {children}
      </div>
    </div>
  );

  const dockItems = [
    { icon: <Home size={20} />, label: "Home", onClick: () => console.log("Home") },
    { icon: <Search size={20} />, label: "Search", onClick: () => console.log("Search") },
    { icon: <User size={20} />, label: "Profile", onClick: () => console.log("Profile") },
    { icon: <Settings size={20} />, label: "Settings", onClick: () => console.log("Settings") },
  ];

  const accordionItems = [
    { id: "1", title: "Modern Architecture", content: "Built with React 19 and Framer Motion for the best developer experience and performance." },
    { id: "2", title: "Clean Design System", content: "Every component follows a strict minimal aesthetic that adapts to your project's brand." },
    { id: "3", title: "Fully Accessible", content: "Interactive elements are designed with focus states and semantic HTML in mind." },
  ];

  const tabs = [
    { id: "design", label: "Design" },
    { id: "motion", label: "Motion" },
    { id: "code", label: "Code" },
  ];

  const glassItems = [
    { title: "Dynamic Interaction", content: "Experience fluid motion and responsive feedback with our new component suite." },
    { title: "Modern Aesthetics", content: "Clean lines, glassmorphism, and minimal design that fits any contemporary project." },
    { title: "Highly Customizable", content: "Every prop is exposed, giving you full control over behavior and visual style." },
  ];

  const paletteItems = [
    { id: "dock", label: "Open Magnetic Dock", icon: <LayoutGrid size={16}/>, shortcut: "⌘D", onSelect: () => console.log("dock") },
    { id: "palette", label: "Toggle Theme", icon: <Sparkles size={16}/>, shortcut: "⌘T", onSelect: () => setDarkMode(!darkMode) },
    { id: "sheet", label: "Open Bottom Sheet", icon: <Zap size={16}/>, shortcut: "⌘B", onSelect: () => setSheetOpen(true) },
  ];

  const bentoDemo = [
    { id: "1", title: "Revenue", content: "$42,300", colSpan: "col-span-2", color: "from-violet-500 to-purple-600" },
    { id: "2", title: "Inbox", content: "12 new", colSpan: "", rowSpan: "row-span-2", color: "from-blue-500 to-cyan-500" },
    { id: "3", title: "Tasks", content: "8 pending", color: "from-emerald-500 to-teal-600" },
    { id: "4", title: "Users", content: "1.2k", color: "from-orange-500 to-pink-500" },
  ];

  const spotlightItems = [
    { id: "1", title: "Realtime", content: "Sync en 12ms con WebSocket" },
    { id: "2", title: "Secure", content: "E2E encryption by default" },
    { id: "3", title: "Fast", content: "Edge en 35 regiones" },
    { id: "4", title: "Scalable", content: "Auto-scale a 1M rps" },
  ];

  return (
    <main className={`min-h-screen transition-colors duration-700 ${darkMode ? 'bg-black text-white' : 'bg-[#FDFDFD] text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-[100] backdrop-blur-2xl border-b transition-colors duration-500 ${
        darkMode ? 'bg-black/80 border-gray-900' : 'bg-white/80 border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xl ${
              darkMode ? 'bg-white text-black' : 'bg-black text-white shadow-lg'
            }`}>
              I
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter uppercase leading-none">InteraUI</h1>
              <p className={`text-[10px] font-bold uppercase tracking-[0.4em] mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                Premium Library v2.0
              </p>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              darkMode ? 'bg-gray-900 text-yellow-400 hover:bg-gray-800' : 'bg-gray-100 text-slate-900 hover:bg-gray-200 shadow-sm'
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-10 py-24">

        {/* SECTION: Premium Interactive v2 — 8 nuevos */}
        <Section title="Premium v2 — New">
          <ComponentWrapper name="CommandPalette" description="⌘K palette con fuzzy search y morph. Pulsa ⌘K." fullWidth>
            <div className="flex justify-center py-6">
              <CommandPalette items={paletteItems} darkMode={darkMode} />
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="BottomSheet" description="Sheet gestual con drag elástico y snap.">
            <div className="flex flex-col items-center gap-4 py-6">
              <button type="button" onClick={() => setSheetOpen(true)} className={`px-6 py-3 rounded-xl font-bold shadow-lg select-none touch-manipulation will-change-transform ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>Open Sheet</button>
              <BottomSheet open={sheetOpen} onOpenChange={setSheetOpen} title="Bottom Sheet" darkMode={darkMode}>
                <div className="space-y-4">
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Arrastra hacia abajo para cerrar. Física spring real.</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className={`h-24 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`} />
                    <div className={`h-24 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`} />
                  </div>
                </div>
              </BottomSheet>
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="ImageCompare" description="Before/After con divider draggable." fullWidth>
            <ImageCompare before="https://picsum.photos/seed/before/800/500" after="https://picsum.photos/seed/after/800/500" darkMode={darkMode} />
          </ComponentWrapper>

          <ComponentWrapper name="BentoGrid" description="Bento draggable con spring auto-layout." fullWidth>
            <BentoGrid items={bentoDemo} darkMode={darkMode} />
          </ComponentWrapper>

          <ComponentWrapper name="KineticMorphText" description="Texto cinético que morfea (blur/slide/scale)." fullWidth>
            <KineticMorphText texts={["InteraUI", "Interactive", "Modern", "Delightful"]} interval={2200} darkMode={darkMode} variant="blur" />
          </ComponentWrapper>

          <ComponentWrapper name="LiquidProgress" description="Progress líquido con onda y drag vertical.">
            <div className="flex justify-center py-4">
              <LiquidProgress value={liquidVal} onChange={setLiquidVal} darkMode={darkMode} label="Upload" />
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="OrbitalMenu" description="Menú orbital circular con items magnéticos.">
            <div className="flex justify-center py-6">
              <OrbitalMenu darkMode={darkMode} radius={80} />
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="SpotlightGrid" description="Grid con spotlight radial que sigue al mouse." fullWidth>
            <SpotlightGrid items={spotlightItems} darkMode={darkMode} />
          </ComponentWrapper>
        </Section>
        
        {/* SECTION: Next-Gen Interactions (Batch 2) */}
        <Section title="Next-Gen Interactions">
           <ComponentWrapper name="MagneticButton" description="A button that pulls towards the cursor with organic physics.">
            <div className="flex justify-center py-6">
              <MagneticButton darkMode={darkMode}>
                EXPLORE NOW
              </MagneticButton>
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="SwipeToConfirm" description="Swipe seguro para acciones críticas. Librería no hace alert por defecto — delega a tu onConfirm.">
            <div className="flex justify-center py-6">
              <SwipeToConfirm darkMode={darkMode} onConfirm={() => console.log("Confirmed!")} resetDelay={3000} />
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="FluidTabs" description="Tabs with a morphing background indicator that follows the active item.">
            <div className="flex justify-center py-6">
              <FluidTabs tabs={tabs} darkMode={darkMode} />
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="PerspectiveCard" description="A 3D tilting card that responds to mouse position with depth.">
            <div className="flex justify-center">
              <PerspectiveCard darkMode={darkMode}>
                <Rocket size={48} className={darkMode ? "text-white" : "text-black"} />
                <h3 className="text-xl font-black mt-4">3D PERSPECTIVE</h3>
                <p className="text-xs opacity-50 px-6">Hover to experience depth and light interaction</p>
              </PerspectiveCard>
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="InteractiveAccordion" description="A fluid accordion with spring animations and morphing icons." fullWidth>
            <div className="flex justify-center py-6">
              <InteractiveAccordion items={accordionItems} darkMode={darkMode} />
            </div>
          </ComponentWrapper>
        </Section>

        {/* SECTION: Premium Interactive Suite (Batch 1) */}
        <Section title="Interactive Suite">
          <ComponentWrapper name="MagneticDock" description="Magnification dock for high-end navigation." fullWidth>
            <div className="flex justify-center py-10">
              <MagneticDock items={dockItems} darkMode={darkMode} />
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="InteractiveLens" description="Follow-mouse lens to reveal hidden layers.">
            <InteractiveLens 
              darkMode={darkMode}
              background={
                <div className="w-full aspect-video bg-zinc-900 flex items-center justify-center text-zinc-800 text-6xl font-black italic">
                  DARK
                </div>
              }
            >
              <div className="w-full aspect-video bg-white flex items-center justify-center text-black text-6xl font-black italic">
                LIGHT
              </div>
            </InteractiveLens>
          </ComponentWrapper>

          <ComponentWrapper name="MorphingSearch" description="Search icon that expands into a full input field.">
            <div className="py-10">
              <MorphingSearch darkMode={darkMode} />
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="ElasticSlider" description="Numerical slider with elastic physics.">
            <div className="py-5">
              <ElasticSlider darkMode={darkMode} />
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="GlassStack" description="3D perspective card stack with smooth transitions." fullWidth>
            <div className="py-10 flex justify-center bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-3xl">
              <GlassStack items={glassItems} darkMode={darkMode} />
            </div>
          </ComponentWrapper>
        </Section>

        {/* SECTION: Classic Components */}
        <Section title="Classic Components">
          <ComponentWrapper name="CardProfile" description="Clean profile card with animated border.">
            <CardProfile darkMode={darkMode} />
          </ComponentWrapper>
          
          <ComponentWrapper name="ButtonCard" description="Interactive button that expands into a login form.">
            <ButtonCard darkMode={darkMode} principalButton="Get Started" />
          </ComponentWrapper>

          <ComponentWrapper name="Activities" description="Stackable list of items with expand/collapse logic.">
            <Activities darkMode={darkMode} />
          </ComponentWrapper>

          <ComponentWrapper name="CatLoader" description="SVG-based animation for loading states.">
            <CatLoader />
          </ComponentWrapper>

          <ComponentWrapper name="GiftBox" description="Interactive 3D gift box with reveal animation.">
            <GiftBox message="InteraUI is Awesome!" />
          </ComponentWrapper>

          <ComponentWrapper name="BorderImage" description="Avatar wrapper with animated gradient borders.">
            <div className="flex justify-center">
              <BorderImage darkMode={darkMode} image="/img/cat.png" />
            </div>
          </ComponentWrapper>
        </Section>

        {/* SECTION: Visual Effects & Decorations */}
        <Section title="Visual & Effects">
          <ComponentWrapper name="TextMasking" description="Typography with dynamic image background masking." fullWidth>
            <div className="flex justify-center py-10">
              <TextMasking 
                title="FUTURE UI" 
                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
              />
            </div>
          </ComponentWrapper>

          <ComponentWrapper name="TreeTriangle" description="Geometric particle tree for seasonal decorations." fullWidth>
             <div className="h-[450px] overflow-hidden relative bg-slate-950 rounded-[2.5rem] border border-white/5 shadow-2xl">
                <TreeTriangle />
             </div>
          </ComponentWrapper>
          
          <ComponentWrapper name="Tree" description="Complex particle system with organic movement." fullWidth>
             <div className="h-[450px] overflow-hidden relative bg-slate-950 rounded-[2.5rem] border border-white/5 shadow-2xl">
                <Tree />
             </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* Footer */}
      <footer className={`border-t py-24 transition-colors duration-500 ${
        darkMode ? 'border-gray-900 text-gray-500' : 'border-gray-100 text-gray-400'
      }`}>
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ${
              darkMode ? 'bg-white text-black' : 'bg-black text-white'
            }`}>
              I
            </div>
            <span className="text-base font-black tracking-tighter uppercase">InteraUI</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-center max-w-xs leading-loose">
            Redefining interactive design systems for the modern web.
          </p>
        </div>
      </footer>
    </main>
  );
}
