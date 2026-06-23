# Akshin — Architecture & Customization Guide

## 📁 Project Structure

```
akshin-journey-love/
├── src/
│   ├── routes/
│   │   ├── __root.tsx          ← HTML shell, fonts, meta tags
│   │   └── index.tsx           ← MAIN PAGE (all sections here)
│   ├── components/ui/          ← Shadcn UI components (auto-generated)
│   ├── styles.css              ← Design system (colors, animations)
│   ├── assets/                 ← All images go here
│   └── lib/                    ← Utilities, error handling
├── vite.config.ts              ← Vite configuration
├── tailwind.config.ts          ← Tailwind CSS settings
├── package.json                ← Dependencies & scripts
└── vercel.json                 ← Vercel deployment config
```

---

## 🖼️ Images Organization

All images stored in **`src/assets/`** (10 files):

| Image | Usage | Edit Where | Size Suggestion |
|-------|-------|-----------|-----------------|
| **hero.jpg** | Hero section background | `index.tsx` line ~320 (Hero) | 1920×1080px, <200KB |
| **y1.jpg - y5.jpg** | Timeline (2021-2025) | `index.tsx` line ~30-35 (timeline array) | 600×400px each, <100KB |
| **rose.jpg** | Moments section card | `index.tsx` line ~45 (moments array) | 500×500px, <100KB |
| **h1.jpg, h2.jpg, h3.jpg** | Special moments cards | `index.tsx` line ~45 (moments array) | 500×500px each, <100KB |

**To replace images:** Drop new JPG/PNG files into `src/assets/` with same names, then rebuild.

---

## ✏️ Customize: What Edits Go Where

### 1️⃣ **Names & Dates** → `src/routes/index.tsx` lines 25-27
```typescript
const START = new Date("2021-06-25T00:00:00");     // Edit dates here
const TARGET = new Date("2026-06-25T00:00:00");
```

### 2️⃣ **Timeline Stories** → `src/routes/index.tsx` lines 29-34
```typescript
const timeline = [
  { year: "2021", title: "The Beginning", text: "...", img: y1 },
  { year: "2022", title: "Growing Together", text: "...", img: y2 },
  // Edit story text here
];
```

### 3️⃣ **Special Moments** → `src/routes/index.tsx` lines 36-41
```typescript
const moments = [
  { date: "Jun 25, 2021", title: "First Hello", text: "..." },
  // Edit memories & dates here
];
```

### 4️⃣ **Love Letter** → Search for `LETTER` constant (bottom of file)
```typescript
const LETTER = `Dear Anish & Kinshu, ...`;  // Edit text here
```

### 5️⃣ **Music Track** → Search for `<audio src="...">`
Replace audio URL with your Spotify/YouTube/local path.

### 6️⃣ **Colors & Fonts** → `src/styles.css`
```css
--rose-gold: #e8937d;
--soft-pink: #f5c8d1;
--font-serif: "Playfair Display", serif;
/* Edit design tokens here */
```

### 7️⃣ **Hero Text & Footer Names** → `src/routes/index.tsx` Hero section (~line 320)
Search for `Anish & Kinshu` and replace with your names.

---

## 🚀 Deploy to Vercel

### **Quick Setup (5 minutes)**

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for Vercel"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click **"Add New" → "Project"**
   - Select your GitHub repo (`akshin-journey-love`)
   - Vercel auto-detects Vite + TanStack Start
   - **Framework preset:** Vite
   - **Build command:** `bun run build` (or `npm run build`)
   - **Output directory:** `dist/client`
   - Click **Deploy** ✅

3. **Set Custom Domain** (optional):
   - In Vercel dashboard: **Settings → Domains**
   - Add your domain (e.g., `anish-kinshu.com`)
   - Configure DNS at registrar

---

## 🔧 Environment & Build Details

- **Node:** 20+
- **Package manager:** Bun (or npm)
- **Framework:** TanStack Start + React 18 + Vite
- **Build output:** `dist/client/` (static files) + `dist/server/` (optional server)
- **Deployment:** SSR-ready (works on any Node.js host)

---

## 📝 Quick Edit Checklist

- [ ] Replace images in `src/assets/`
- [ ] Update names in `index.tsx` (hero, footer, letter)
- [ ] Update START/TARGET dates
- [ ] Update timeline array (5 stories)
- [ ] Update moments array (memories)
- [ ] Update love letter text
- [ ] Change music track URL
- [ ] Customize colors in `styles.css`
- [ ] Push to GitHub
- [ ] Deploy on Vercel

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check `src/assets/` folder, filenames match `index.tsx` imports |
| Build fails | Run `bun install` (clear `node_modules/` if needed) |
| Vercel build error | Check Build Logs → ensure `bun run build` or `npm run build` runs locally first |
| Music doesn't play | Verify audio URL is public & CORS-enabled |
| Dates wrong | Edit `START` and `TARGET` constants (line 25-27) |

---

**Made with ♥ for Anish & Kinshu**
