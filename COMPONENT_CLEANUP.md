# Component Reorganization Plan

## Summary

I've rewritten the README to better represent tech@nyu's website and created a plan for better component organization.

## New README Features

✅ **Completed:**
- Club-focused description with mission and programs
- Modern tech stack documentation
- Proper installation and development instructions
- Contributing guidelines for team members
- Contact information and branding

## Component Structure Recommendations

### Current Issues:
1. Inconsistent naming conventions (camelCase vs kebab-case)
2. Mixed organization patterns
3. Some components could be better grouped

### Recommended Actions:

#### 1. Rename Files for Consistency
```bash
# Navigation
mv components/navigation/NavbarMobile.tsx components/navigation/navbar-mobile.tsx

# Programs  
mv components/programs/pcard/programcard.tsx components/programs/pcard/program-card.tsx
mv components/programs/pcard/programbar.tsx components/programs/pcard/program-bar.tsx

# Inline Mask
mv components/inlinemask/inlineCompmask.tsx components/inlinemask/inline-comp-mask.tsx
mv components/inlinemask/inlineMask.tsx components/inlinemask/inline-mask.tsx
mv components/inlinemask/poppingicon.tsx components/inlinemask/popping-icon.tsx
```

#### 2. Group Related Components
```bash
# Move team components under sections
mkdir -p components/sections/team
mv components/team_profiles/* components/sections/team/

# Reorganize programs under sections
mkdir -p components/sections/programs
mv components/programs/* components/sections/programs/

# Move values under sections (already done)
mkdir -p components/sections/values  
mv components/values/* components/sections/values/
```

#### 3. Clean Up Navigation Structure
```bash
# Consolidate navigation animations
mv components/navigation/mobileanim.ts components/navigation/mobile-body/animations.ts

# Rename for consistency
mv components/navigation/mobile_body components/navigation/mobile-body
```

## Benefits After Reorganization

1. **Consistent naming** - All files use kebab-case
2. **Logical grouping** - Related components are together
3. **Clearer imports** - Easier to find and import components
4. **Better scalability** - Structure supports future growth
5. **Improved maintainability** - Related files are co-located

## Implementation

The README has been updated. For the component reorganization, you can implement the changes gradually to avoid breaking existing imports, or do them all at once and update the import statements accordingly.

Would you like me to help implement any of these organizational changes?
