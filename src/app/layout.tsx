import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page at the root level, we need to have
// a root layout as well. Otherwise, you'll get an error.
export default function RootLayout({ children }: Props) {
  return children;
}
