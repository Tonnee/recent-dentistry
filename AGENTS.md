# AGENTS.md

## Repository Instructions & Agent Guidelines

This repository is built using Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript. All AI agents operating in this workspace must adhere strictly to the rules and standards defined below and in [.antigravityrules](./.antigravityrules).

### 1. Framework & Architecture Standards
- Default to **Server Components** in the `app/` directory. Use `"use client"` selectively only when client interactivity is required.
- Check local Next.js docs and package definitions in `node_modules/next/dist/docs/` for version-specific Next.js 16 behavior when needed.
- Enforce strict `kebab-case` naming for all files and directories.
- Separate presentational UI components from logic, custom hooks (`/hooks`), and data services (`/services`).

### 2. Strict Scope Boundary Rules
- **No Scope Creep**: Perform only the specific task requested by the user.
- **No Unrequested Refactoring**: Do not alter existing components, styles, or logic unless explicitly instructed by the user.
- **Clean Implementation**: Produce concise, production-ready TypeScript code following all `.antigravityrules` guardrails.

Refer to [.antigravityrules](./.antigravityrules) for full technical requirements regarding TypeScript, Tailwind CSS, SEO, and coding standards.
