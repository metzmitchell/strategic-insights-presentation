# Presentation Design Prompt

**Create stunning presentation-style webpages that look like they were designed by a graphic designer.**

---
**Tech Stack**: React, Vite, TailwindCSS v4, ShadCN UI, Lucide Icons  
**Goal**: Transform presentation scripts into visually striking, interactive web experiences  
**Style**: Bold, modern, graphic-designer quality with dramatic visual impact  
---

## Core Design Philosophy

Create presentations that command attention through:
- **Dramatic typography**: Single words taking up entire screens
- **High contrast visuals**: Stark light/dark combinations that pop
- **Interactive storytelling**: Clickable, hoverable, animated elements
- **Smooth animations**: Trigger engaging motions that support the narrative
- **Professional polish**: Every detail refined like a design agency project

## Essential Design Patterns

### 1. Impact Typography
```
Full-screen statements: text-[20vw] font-black tracking-tighter
Section headers: text-8xl font-bold with dramatic line-height
Emphasized words: Gradient text, oversized, centered positioning
Contrast mixing: Dark backgrounds + bright text, or vice versa
```

### 2. Visual Hierarchy Techniques
```
Size contrasts: Massive headlines vs tiny supporting text
Color emphasis: Single accent color against monochrome base
Spacing drama: Generous whitespace to isolate key elements
Alignment shifts: Mix centered and off-center layouts strategically
```

### 3. Interactive Animation Triggers
```
Click reveals: Button clicks unveil hidden content sections
Hover transformations: Elements morph on mouse interaction
Scroll choreography: Content animates in as user scrolls
Progressive disclosure: Information reveals in logical sequence
```

### 4. Professional Layout Patterns
```
Full-viewport sections: Each major point gets screen real estate
Asymmetric grids: Break traditional layouts for visual interest
Layered depth: Use shadows, borders, z-index for dimensionality
Negative space: Strategic emptiness to focus attention
```

## Component Implementation Guide

### Hero Statements (Full-Screen Impact)
```jsx
<section className="min-h-screen flex items-center justify-center bg-black">
  <h1 className="text-[20vw] font-black text-white text-center leading-none">
    WORD
  </h1>
</section>
```

### Contrast Reveals (Interactive Content)
```jsx
<div className="bg-white text-black transition-all hover:bg-black hover:text-white">
  <Button onClick={() => setRevealed(!revealed)}>
    Click to transform
  </Button>
  {revealed && <AnimatedContent />}
</div>
```

### Progressive Information Display
```jsx
// Use ShadCN Progress, Card, Button components
// Animate counters, reveal statistics, show/hide details
// Layer information from simple to complex
```

### Animated Diagrams
```jsx
// Create stark, high-contrast visuals
// Use CSS transforms for smooth motion
// Implement click/hover triggers for movement
// Keep animations purposeful, not decorative
```

## Visual Design Standards

### Color Strategy
```
Monochromatic base: Black, white, grays for foundation
Single accent: One vibrant color for emphasis (brand color)
High contrast: Ensure 7:1+ contrast ratios for drama
Gradient touches: Subtle gradients on key elements only
```

### Typography Hierarchy
```
Mega text: text-[20vw] for single-word statements
Large headers: text-8xl to text-9xl for section titles
Body emphasis: text-2xl for important supporting copy
Details: text-base for necessary smaller information
```

### Spacing & Layout
```
Generous margins: Use viewport units (20vh, 10vw) liberally
Section breaks: Clear visual separators between ideas
Center-stage focus: Important content gets prime real estate
Breathing room: Resist cramming, embrace whitespace
```

## Animation Implementation

### Scroll-Based Reveals
```css
/* Use Intersection Observer + CSS transitions */
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Click-Triggered Animations
```jsx
// State-based transformations
// Scale, rotate, color, position changes
// Use ShadCN components with custom animations
// Keep interactions intuitive and purposeful
```

### Hover Micro-Interactions
```css
/* Subtle but noticeable feedback */
.interactive-element {
  transition: all 0.3s ease;
}

.interactive-element:hover {
  transform: scale(1.05) translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
```

## Content Presentation Strategy

### Information Architecture
1. **Hook**: Massive visual statement that stops scrolling
2. **Context**: Smaller supporting information to frame the topic
3. **Core Content**: Key points with dramatic visual separation
4. **Details**: Interactive reveals for deeper information
5. **Action**: Clear, prominent next steps

### Visual Storytelling
```
One concept per screen: Don't overcrowd viewport
Progressive complexity: Start simple, add nuance
Visual metaphors: Use design to reinforce meaning
Emotional pacing: Balance intensity with breathing room
```

## Technical Requirements

### Performance Targets
- First Contentful Paint < 1.5s
- Smooth 60fps animations
- Responsive across all devices
- Accessible keyboard navigation

### Browser Support
- Modern evergreen browsers
- Graceful degradation for older browsers
- Touch-friendly on mobile devices
- Respect reduced-motion preferences

### Code Quality
- Clean, semantic HTML structure
- Logical component architecture
- Consistent naming conventions
- Well-commented animation code

## Implementation Checklist

**Visual Impact**
- [ ] At least one full-screen typographic statement
- [ ] High contrast color combinations throughout
- [ ] Generous whitespace and dramatic sizing
- [ ] Professional polish on all interactive elements

**Interactivity**
- [ ] Click-triggered content reveals or animations
- [ ] Hover effects on interactive elements
- [ ] Scroll-based progressive disclosure
- [ ] Smooth transitions between all states

**Technical Excellence**
- [ ] Responsive design working perfectly
- [ ] Fast loading and smooth performance
- [ ] Accessibility standards met
- [ ] Cross-browser compatibility verified

**Content Presentation**
- [ ] Clear information hierarchy established
- [ ] Each major point gets appropriate visual weight
- [ ] Supporting details available but not overwhelming
- [ ] Logical flow from introduction to conclusion

---

**Remember**: The goal is presentations that look professionally designed, not just functional. Every element should feel intentional, polished, and visually striking. Think like a graphic designer, not just a developer.