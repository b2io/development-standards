# Javascript Style and Conventions

- [Start here by setting up ESLint and Prettier for VS Code](/ide/vs-code/README.md/#eslint-plugin-prettier)

- ESLint uses Airbnb's ESLint configurations for styles and conventions, the [full style guide from Airbnb can be read here](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-).
  - Additional linting configurations are available in [here](/javascript/.eslintrc)
  - Additional linting rules are available [here](/javascript/.jscsrc)

## React

### Component Structure:

- Organize React components using a consistent folder structure.

- Use meaningful, file, folder, and variable names.

### Functional Components

- Prefer functional components with hooks (e.g., `useState`, `useEffect`) over class components when possible.

### Component Reusability

- Design components to be reusable and single-responsibility.
- Implement component composition to combine small components into larger ones.
- Any shared components can be extracted into a "Common Component"

### Props

- Document prop types using PropTypes or TypeScript for type safety.
- Avoid mutating props directly within components.

### State Management

- Keep component state localized whenever possible.

### Conditional Rendering

- Use ternary operators or conditional statements for legibility and clarity.

### Security

- Be cautious with the use of `dangerouslySetInnerHTML`.
