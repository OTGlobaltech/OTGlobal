"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AuthProvider, useAuth } from '@/components/context/AuthContext';
import { Loader2 } from 'lucide-react';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // If not logged in and not on login page, render nothing while redirecting
  if (!user && pathname !== '/admin/login') {
    return null;
  }

  return children;
}

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        {children}
      </ProtectedRoute>
    </AuthProvider>
  );
}
