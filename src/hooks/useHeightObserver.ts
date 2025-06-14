import { useEffect, useRef, useState, useCallback } from "react";

export type HeightObserverOptions = {
  /** The ref of the element to observe */
  ref: React.RefObject<HTMLElement | null>;
  /** Whether to observe height changes reactively. Default: true */
  enabled?: boolean;
  /** Debounce delay in milliseconds for height changes. Default: 0 */
  debounceMs?: number;
  /** Whether to include border and padding in height calculation. Default: false */
  includeBorderPadding?: boolean;
};

export type HeightObserverResult = {
  /** The current height of the observed element */
  height: number;
  /** Whether the observer is currently active */
  isObserving: boolean;
};

/**
 * Custom hook that observes the height of an element and provides reactive updates
 * when the height changes. Useful for dynamic layouts and sticky header calculations.
 * 
 * @param options Configuration options for the height observer
 * @returns Object containing the current height and observer status
 */
export function useHeightObserver(
  options: HeightObserverOptions
): HeightObserverResult {
  const {
    ref: elementRef,
    enabled = true,
    debounceMs = 0,
    includeBorderPadding = false,
  } = options;
  const [height, setHeight] = useState(0);
  const [isObserving, setIsObserving] = useState(false);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const debounceTimeoutRef = useRef<number | null>(null);

  const updateHeight = useCallback(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const newHeight = includeBorderPadding
      ? element.offsetHeight
      : element.clientHeight;

    setHeight(newHeight);
  }, [includeBorderPadding, elementRef]);

  const debouncedUpdateHeight = useCallback(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (debounceMs > 0) {
      debounceTimeoutRef.current = window.setTimeout(updateHeight, debounceMs);
    } else {
      updateHeight();
    }
  }, [updateHeight, debounceMs]);

  useEffect(() => {
    if (!enabled || !elementRef.current) {
      setIsObserving(false);
      return;
    }

    const element = elementRef.current;
    
    // Initial height measurement
    updateHeight();

    // Create ResizeObserver to watch for size changes
    resizeObserverRef.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === element) {
          debouncedUpdateHeight();
        }
      }
    });

    resizeObserverRef.current.observe(element);
    setIsObserving(true);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      if (debounceTimeoutRef.current) {
        window.clearTimeout(debounceTimeoutRef.current);
        debounceTimeoutRef.current = null;
      }
      setIsObserving(false);
    };
  }, [enabled, updateHeight, debouncedUpdateHeight, elementRef]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        window.clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return {
    height,
    isObserving,
  };
}

export default useHeightObserver;