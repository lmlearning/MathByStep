# Math By Step - Project Guide

## Tech Stack
- **Framework**: Next.js 15.0.0 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Runtime**: Node.js 20+

## Project Structure
```
/app         - Next.js app directory (pages, layouts)
/public      - Static assets
/components  - React components (to be added)
```

## Common Commands
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Code Style
- Use TypeScript for all files
- Use functional components with hooks (no class components)
- Use ES modules (import/export), not CommonJS
- Follow Next.js App Router conventions
- Use Tailwind utility classes for styling

## Testing Protocols

### Unit Testing
**Setup Requirements:**
- Install testing dependencies first: `npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom`
- Create `jest.config.js` with Next.js preset
- Add test script: `"test": "jest --watch"`

**Standards:**
- Place test files next to source: `component.tsx` → `component.test.tsx`
- Use React Testing Library for component tests
- Test user interactions, not implementation details
- Aim for meaningful test coverage on business logic
- Mock external dependencies and API calls

**Example test structure:**
```typescript
describe('ComponentName', () => {
  it('should render correctly', () => { ... })
  it('should handle user interaction', () => { ... })
})
```

### UX Testing
**Manual Testing Checklist:**
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test mobile responsive views (320px, 768px, 1024px)
- [ ] Verify keyboard navigation (Tab, Enter, Escape)
- [ ] Check accessibility with screen reader
- [ ] Validate form inputs and error states
- [ ] Test loading states and error boundaries
- [ ] Verify page transitions and routing

**Automated UX Testing:**
- Use Playwright or Cypress for E2E tests (install separately)
- Test critical user flows (navigation, form submission)
- Verify visual regression with screenshots
- Test across different viewport sizes

**Accessibility Standards:**
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Add alt text to all images
- Maintain color contrast ratio ≥ 4.5:1
- Include ARIA labels for interactive elements

## Repository Etiquette
- Branch format: `feature/description` or `fix/description`
- Commit format: Conventional Commits (feat:, fix:, docs:, etc.)
- Always run lint before committing
- Test locally before pushing

## Notes
- No test framework configured yet - follow setup instructions above
- Project deployed on Vercel
- Always verify build passes before deploying: `npm run build`
