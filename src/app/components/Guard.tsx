import { Navigate } from 'react-router';
import type { ReactNode } from 'react';

export default function Guard({ children }: { children: ReactNode }) {

    const ok = true;

    if (!ok) return <Navigate to="/" replace />;

    return children
}
