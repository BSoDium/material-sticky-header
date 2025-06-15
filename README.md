# Advanced Sticky Header

A proof of concept implementation of Android's scroll-snap settings header behavior in React TypeScript. This project demonstrates an advanced sticky header that smoothly transitions between states based on scroll position, mimicking the native Android settings interface.

## Features

- **Scroll-responsive header**: Header adapts to scroll position with smooth transitions
- **Android-inspired design**: Replicates the scroll behavior found in Android's settings app
- **TypeScript**: Fully typed React components for better development experience
- **Storybook integration**: Interactive component documentation and testing
- **Height observation**: Custom hook for monitoring element height changes

## Project Structure

```
src/
├── components/
│   ├── headers/
│   │   ├── StaticHeader.tsx         # Basic header component
│   │   ├── StickyHeader.tsx         # Advanced sticky header with scroll behavior
│   │   └── *.stories.tsx            # Storybook stories for components
│   └── Page.tsx                     # Demo page component
├── hooks/
│   └── useHeightObserver.ts         # Custom hook for height observation
└── ...
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **View Storybook** (for component documentation):
   ```bash
   npm run storybook
   ```

## Implementation Details

The sticky header implementation uses:
- Scroll event listeners to detect scroll position
- CSS transforms with [**motion**](https://motion.dev/) for smooth animations
- Height observation to handle dynamic content
- State management for header visibility transitions

This POC demonstrates how to create fluid, native-feeling scroll interactions in web applications using modern React patterns and TypeScript.
