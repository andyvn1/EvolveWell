'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type UserRole = 'athlete' | 'trainer' | null;

export default function Navbar() {
  const [role, setRole] = useState<UserRole>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedRole = localStorage.getItem('userRole') as UserRole;
    setRole(savedRole);
  }, []);

  const handleRoleChange = (newRole: UserRole) => {
    if (newRole === null) {
      localStorage.removeItem('userRole');
    } else {
      localStorage.setItem('userRole', newRole);
    }
    setRole(newRole);
    setMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-300 bg-[#f2f2f2] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="EvolveWell Logo" width={120} height={44} className="object-contain" unoptimized />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/trainers" className="text-sm font-medium text-gray-700 hover:text-lime-600">
              Meet Trainers
            </Link>
            <Link href="/programs" className="text-sm font-medium text-gray-700 hover:text-lime-600">
              Programs
            </Link>
            <Link href="/classes" className="text-sm font-medium text-gray-700 hover:text-lime-600">
              Classes
            </Link>
            <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-lime-600">
              Equipment
            </Link>
          </div>

          {/* Role Selector & Auth */}
          <div className="hidden items-center gap-3 md:flex">
            {!role ? (
              <>
                <button
                  onClick={() => handleRoleChange('athlete')}
                  className="rounded-full border border-gray-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Sign in as Athlete
                </button>
                <button
                  onClick={() => handleRoleChange('trainer')}
                  className="rounded-full bg-lime-500 px-4 py-2 text-sm font-medium text-white hover:bg-lime-600"
                >
                  Trainer Login
                </button>
              </>
            ) : (
              <>
                <span className="text-sm font-medium text-gray-700">
                  {role === 'athlete' ? '🏃 Athlete' : '🏋️ Trainer'}
                </span>
                <Link
                  href={role === 'athlete' ? '/dashboard/athlete' : '/dashboard/trainer'}
                  className="rounded-full border border-lime-500 px-4 py-2 text-sm font-medium text-lime-600 hover:bg-lime-500 hover:text-white"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => handleRoleChange(null)}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-300 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link href="/trainers" className="text-sm font-medium text-gray-700 hover:text-lime-600" onClick={() => setMobileMenuOpen(false)}>
                Meet Trainers
              </Link>
              <Link href="/programs" className="text-sm font-medium text-gray-700 hover:text-lime-600" onClick={() => setMobileMenuOpen(false)}>
                Programs
              </Link>
              <Link href="/classes" className="text-sm font-medium text-gray-700 hover:text-lime-600" onClick={() => setMobileMenuOpen(false)}>
                Classes
              </Link>
              <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-lime-600" onClick={() => setMobileMenuOpen(false)}>
                Equipment
              </Link>
              <hr className="my-2 border-gray-300" />
              {!role ? (
                <>
                  <button
                    onClick={() => { handleRoleChange('athlete'); setMobileMenuOpen(false); }}
                    className="rounded-full border border-gray-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                  >
                    Sign in as Athlete
                  </button>
                  <button
                    onClick={() => { handleRoleChange('trainer'); setMobileMenuOpen(false); }}
                    className="rounded-full bg-lime-500 px-4 py-2 text-sm font-medium text-white hover:bg-lime-600"
                  >
                    Trainer Login
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={role === 'athlete' ? '/dashboard/athlete' : '/dashboard/trainer'}
                    className="rounded-full border border-lime-500 px-4 py-2 text-sm font-medium text-lime-600 hover:bg-lime-500 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { handleRoleChange(null); setMobileMenuOpen(false); }}
                    className="text-sm font-medium text-gray-500 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
