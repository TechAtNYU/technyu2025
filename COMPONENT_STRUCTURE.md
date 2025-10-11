# Recommended Component Structure

## Current Structure Analysis
The current components folder has some inconsistencies and could benefit from better organization.

## Proposed Structure

```
components/
├── ui/                     # Reusable UI components
│   ├── badge.tsx
│   ├── button.tsx
│   ├── dropdown-menu.tsx
│   ├── input.tsx
│   ├── menu.tsx
│   ├── navigation-menu.tsx
│   └── sheet.tsx
├── layout/                 # Layout-related components
│   ├── navigation/
│   │   ├── navbar.tsx
│   │   ├── navbar-mobile.tsx
│   │   ├── navigation-dropdown.tsx
│   │   ├── mobile-body/
│   │   │   ├── nav-body.tsx
│   │   │   └── animations.ts
│   │   ├── animations.ts
│   │   └── styles/
│   │       ├── navigation.module.css
│   │       └── style.module.css
│   └── footer/
│       └── footer.tsx
├── sections/               # Page sections
│   ├── hero/
│   │   └── hero.tsx
│   ├── programs/
│   │   ├── program-section.tsx
│   │   └── program-card/
│   │       ├── program-card.tsx
│   │       ├── program-bar.tsx
│   │       └── styles.css
│   ├── values/
│   │   ├── values.tsx
│   │   ├── value-card.tsx
│   │   └── styles.css
│   └── team/
│       ├── team-grid.tsx
│       ├── team-search.tsx
│       ├── team-filters-desktop.tsx
│       ├── team-filters-mobile.tsx
│       └── profile-card.tsx
└── effects/                # Special effects/animations
    ├── inline-mask/
    │   ├── inline-comp-mask.tsx
    │   ├── inline-mask.tsx
    │   ├── popping-icon.tsx
    │   └── style.module.css
    └── animations/
        └── common-animations.ts
```

## Benefits of This Structure
1. **Clear separation** between UI components, layout, sections, and effects
2. **Consistent naming** (kebab-case for files, folders)
3. **Logical grouping** of related components
4. **Scalable** for future additions
5. **Easier imports** and maintenance
