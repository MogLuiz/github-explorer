// -------------------------------------------------
// Styles.ts
// -------------------------------------------------
export interface FormProps {
    hasError: boolean;
}

// -------------------------------------------------
// Index.tsx
// -------------------------------------------------
export interface Repository {
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  }