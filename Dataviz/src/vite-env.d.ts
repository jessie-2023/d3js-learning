/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

/** The vite-env.d.ts file is essentially a TypeScript declaration file
 *  that Vite provides to define global types for your project, 
 * and you can safely add custom declarations there. */

declare module 'vega-lite-api' {
    const content: unknown; // Replace `any` with a specific type if you have more details
    export default content;

    export function markLine(...args) {
        return mark({ "type": "line" }, ...args);
    }
  
    export function markPoint(...args) {
        return mark({ "type": "point" }, ...args);
    }

    export function markCircle(...args) {
        return mark({ "type": "circle" }, ...args);
    }

    export function color(...args) {
        return new Color(...args);
    }
    export function size(...args) {
        return new Size(...args);
    }

    export function x(...args) {
        return new X(...args);
    }

    export function y(...args) {
        return new Y(...args);
    }

    export function tooltip(...args) {
        return new Tooltip(...args);
    }

}