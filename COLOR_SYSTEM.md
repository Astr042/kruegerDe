# Color System Documentation

This document explains the custom color system implemented in the Tailwind configuration to make the website easily rebrandable.

## Brand Colors

All brand colors are defined in `tailwind.config.ts` under the `brand` namespace. This allows for easy rebranding by simply changing the color values in one place.

### Primary Brand Color (`brand-primary-*`)

The main brand color used throughout the site (currently orange).

```typescript
brand: {
  primary: {
    50: '#fff7ed',   // Very light shade
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',  // Used for hover states and accents
    400: '#fb923c',  // Used for text highlights
    500: '#f97316',  // Main brand color
    600: '#ea580c',  // Used for hover states on buttons
    700: '#c2410c',  // Darker variant
    800: '#9a3412',  // Very dark variant
    900: '#7c2d12',
    950: '#431407',
  }
}
```

**Usage Examples:**

- `bg-brand-primary-500` - Main brand background
- `text-brand-primary-400` - Brand text color
- `hover:bg-brand-primary-600` - Button hover states
- `border-brand-primary-500` - Brand borders

### Secondary Brand Color (`brand-secondary-*`)

The secondary brand color used for gradients and accents (currently pink).

```typescript
secondary: {
  50: '#fdf2f8',
  100: '#fce7f3',
  200: '#fbcfe8',
  300: '#f9a8d4',  // Light accent
  400: '#f472b6',  // Medium accent
  500: '#ec4899',  // Main secondary color
  // ... (full range 600-950)
}
```

**Usage Examples:**

- `bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500` - Brand gradients
- `text-brand-secondary-400` - Secondary text highlights

### Accent Colors (`brand-accent-*`)

Additional accent colors for variety and visual interest.

#### Purple Accent

- `brand-accent-purple-300` - Light purple
- `brand-accent-purple-400` - Medium purple (main)
- `brand-accent-purple-500` - Dark purple

#### Indigo Accent

- `brand-accent-indigo-300` - Light indigo
- `brand-accent-indigo-400` - Medium indigo
- `brand-accent-indigo-500` - Dark indigo (main)

#### Cyan Accent

- `brand-accent-cyan-300` - Light cyan
- `brand-accent-cyan-400` - Medium cyan
- `brand-accent-cyan-500` - Dark cyan (main)

## Migration Examples

### Before (using default Tailwind colors):

```jsx
<button className="bg-orange-500 hover:bg-orange-600 text-white">
  Click me
</button>

<div className="bg-gradient-to-r from-orange-500 to-pink-500">
  Gradient background
</div>

<span className="text-orange-400">Highlighted text</span>
```

### After (using brand colors):

```jsx
<button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-white">
  Click me
</button>

<div className="bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500">
  Gradient background
</div>

<span className="text-brand-primary-400">Highlighted text</span>
```

## How to Rebrand

To change the entire site's color scheme:

1. Open `tailwind.config.ts`
2. Modify the color values in the `brand` object
3. The changes will automatically apply site-wide

### Example: Changing to a Blue/Green Theme

```typescript
brand: {
  primary: {
    // Replace orange values with blue
    300: '#93c5fd', // blue-300
    400: '#60a5fa', // blue-400
    500: '#3b82f6', // blue-500 - main brand
    600: '#2563eb', // blue-600
    // ... etc
  },
  secondary: {
    // Replace pink values with green
    300: '#86efac', // green-300
    400: '#4ade80', // green-400
    500: '#22c55e', // green-500
    // ... etc
  }
}
```

## Components Updated

The following components have been updated to use the new brand color system:

- ✅ `VideoPlayer.tsx` - Fully migrated
- 🔄 `AudioPlayer.tsx` - Needs migration
- 🔄 `Header.tsx` - Needs migration
- 🔄 `Footer.tsx` - Needs migration
- 🔄 `Downloads.tsx` - Needs migration
- 🔄 `ServiceTags.tsx` - Needs migration
- 🔄 `MailtoLink.tsx` - Needs migration

## Color Usage Patterns

### Buttons

- Primary: `bg-brand-primary-500 hover:bg-brand-primary-600`
- Secondary: `bg-brand-secondary-500 hover:bg-brand-secondary-600`

### Text

- Headers: `text-brand-primary-400` or gradients
- Highlights: `text-brand-primary-400`
- Links: `text-brand-primary-400 hover:text-brand-primary-300`

### Backgrounds

- Cards: `bg-slate-800` (neutral)
- Accents: `bg-brand-primary-500/10` (with opacity)
- Gradients: `from-brand-primary-500 to-brand-secondary-500`

### Borders

- Default: `border-slate-700`
- Hover: `hover:border-brand-primary-500/30`
- Focus: `focus:ring-brand-primary-500`

## Best Practices

1. **Always use brand colors for brand-related elements** (buttons, highlights, etc.)
2. **Keep neutral colors (slate) for backgrounds and UI elements**
3. **Use opacity variants** (`/20`, `/30`, `/50`) for subtle effects
4. **Maintain contrast ratios** for accessibility
5. **Test color changes** across all components before deployment

## Future Improvements

- [ ] Create CSS custom properties for even easier theme switching
- [ ] Add dark/light mode variants
- [ ] Create a theme preview tool
- [ ] Add semantic color names (e.g., `success`, `warning`, `error`)
