# Event App Coding Standards & Refactoring Guide
# React Native (Expo) + TypeScript + Supabase + GraphQL + TRAE

## Basic Interaction Rules
1. Respond, comment, and document in English only.
2. When providing code, include concise English comments for complex logic.
3. For code blocks exceeding 20 lines, evaluate if abstraction or splitting is needed.

## General Coding Standards
1. Prefer functional components and React Hooks over class components.
2. Avoid unnecessary cloning or spreading of objects.
3. Avoid deep nesting; use early returns to simplify control flow.
4. Use GraphQL fragments to avoid query duplication.
5. Validate all external data using Zod + Supabase Row Types.
6. Place constants, enums, queries, and utility functions in dedicated folders.

## Project Architecture (Recommended Structure)
src/
  components/
  screens/
  graphql/
    queries/
    mutations/
    fragments/
    types.ts
  services/
    supabase/
    graphql-client.ts
  state/
    hooks/
    stores/
  utils/
  constants/
  navigation/

- Keep UI, business logic, and data fetching separated.
- Avoid business logic inside components—use custom hooks for that.
- Use service layers to abstract Supabase and GraphQL logic.

## Code Smell Identification & Treatment

### 1. Mysterious Names
- Problem: Names don't convey meaning.
- Solution: Use descriptive names like `fetchEventDetails()` instead of `getData()`.

### 2. Duplicate Code
- Problem: Repeated logic in screens or services.
- Solution: Extract common logic into shared hooks, services, or GraphQL fragments.

### 3. Long Functions
- Problem: Functions with too many responsibilities.
- Solution: Extract into smaller functions or hooks following the Single Responsibility Principle.

### 4. Large Class/Module
- Problem: One file handles too many responsibilities.
- Solution: Split into specialized modules such as `events.create.ts`, `events.fetch.ts`, etc.

### 5. Long Parameter Lists
- Problem: Too many arguments in functions.
- Solution: Introduce parameter objects.
  Example:
    createEvent({ title, description, dateRange, location, visibility })

### 6. Divergent Change
- Problem: One module changes for multiple unrelated reasons.
- Solution: Separate modules based on event, poll, rsvp, and photo logic.

### 7. Shotgun Surgery
- Problem: One change requires modifying many files.
- Solution: Centralize shared types, GraphQL fragments, and form schemas.

### 8. Feature Envy
- Problem: Function relies heavily on another module’s data.
- Solution: Move the function to the module where the data belongs.

### 9. Data Clumps
- Problem: Certain fields always travel together.
- Solution: Extract into objects (e.g., `DateRange` with `{ start, end }`).

### 10. Primitive Obsession
- Problem: Using raw strings for domain-specific values.
- Solution: Use enums such as `EventVisibility.PRIVATE` or `RsvpStatus.GOING`.

## Refactoring Process Principles

### 1. Small Step Refactoring
- Make small changes, test, then proceed.
- Commit frequently with small diffs.

### 2. Test Safety Net
- Write unit tests for service logic.
- Use snapshot tests for reusable UI components.
- Validate GraphQL responses with Zod.

### 3. Code Review
- Mandatory reviews for:
  - GraphQL schema changes
  - Supabase table modifications
  - Navigation changes
- Use pull request templates.

## Code Readability Optimization

### 1. Naming Conventions
- Components: PascalCase
- Hooks: useCamelCase
- Variables: camelCase
- Enums: PascalCase
- Avoid unclear names like “obj”, “tmp”, “info”.

### 2. Code Organization
- Screens should handle UI only.
- Business logic should live in hooks.
- Shared logic in /services or /utils.

### 3. Comments & Documentation
- Explain “why,” not “what.”
- Add comments for GraphQL queries explaining purpose and important fields.
- Update comments when the code changes.

## Performance-Related Refactoring

### 1. Memory Optimization
- Use React Query or Apollo Cache for caching.
- Avoid inline objects in JSX loops.
- Reuse memoized functions with useCallback.

### 2. Computation Optimization
- Do not compute heavy values during render—use useMemo or precompute.
- Use FlatList/SectionList with proper optimization props.

### 3. Parallelization Optimization
- Use Promise.all for parallel fetching:
    const [events, polls, rsvps] = await Promise.all([...])
- Avoid long synchronous blocks.

## GraphQL-Specific Rules

### 1. Use Fragments
- Avoid repeating field selections across multiple queries.

### 2. Avoid Over-fetching
- Always select only required fields.
- Do not use `query { events { ... } }` without selecting fields.

### 3. Centralize Queries
- Store all queries/mutations/fragments under /src/graphql.

### 4. Typed Operations
- Use GraphQL Codegen to create fully typed hooks and operations.
- Validate responses using Zod schemas.

### 5. Error Handling
- Use a global GraphQL error handler.
- Translate GraphQL errors into user-friendly messages.

## Supabase-Specific Rules

### 1. Use Supabase Row Types
- Always use the auto-generated `Database` type to avoid string-based typing errors.

### 2. Centralized CRUD
- All CRUD operations should flow through `/services/supabase/` handlers.

### 3. Storage Rules
- Generate public URLs via Supabase Storage service layer only.
- Avoid hardcoding bucket names—use enums.

## TRAE Routing Rules
1. Forward `/api/*` to Supabase with secure headers.
2. Forward `/storage/*` to Supabase Storage.
3. Forward `/auth/*` to Supabase Auth.
4. Route `/e/*` (event share pages) to `index.html`.
5. Apply strict security headers (HSTS, CSP, no sniff, XSS protection).
6. Enable CORS for Expo + Web + deep links.
