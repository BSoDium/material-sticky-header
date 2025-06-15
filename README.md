# Material Sticky Header

A proof of concept implementation of Android's scroll-snap settings header behavior in React TypeScript. This project demonstrates a material sticky header that smoothly transitions between states based on scroll position, mimicking the native Android settings interface.

https://github.com/user-attachments/assets/d5ca5085-7d54-4476-b406-ba5112562082


## Features

- **Scroll-responsive header**: Header adapts to scroll position with smooth transitions
- **Android-inspired design**: Replicates the scroll behavior found in Android's settings app
- **TypeScript**: Fully typed React components for better development experience
- **Storybook integration**: Interactive component documentation and testing
- **Height observation**: Custom hook for monitoring element height changes

## Getting Started

1. **Install dependencies**:
   ```bash
   yarn
   ```

2. **View Storybook** (for component documentation):
   ```bash
   yarn storybook
   ```

## Implementation Details

The sticky header implementation uses:
- Scroll event listeners to detect scroll position
- CSS transforms with [**motion**](https://motion.dev/) for smooth animations
- Height observation to handle dynamic content
- State management for header visibility transitions

This POC demonstrates how to create fluid, native-feeling scroll interactions in web applications using modern React patterns and TypeScript.
