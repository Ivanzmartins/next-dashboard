'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '../components/Dashboard/Dashboard';


export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [router]);

  return (
    <div>
      <Dashboard />
    </div>
  );
}
