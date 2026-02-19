'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Calendar, MessageSquare, LayoutDashboard, BookOpen, Dumbbell, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getUserRole, setUserRole, type UserRole } from '@/lib/utils/storage';

export default function Navigation() {
  const pathname = usePathname();
  const [role, setRole] = useState<UserRole>('athlete');

  useEffect(() => {
    setRole(getUserRole());
  }, []);

  const handleRoleChange = (newRole: UserRole) => {
    setUserRole(newRole);
    setRole(newRole);
  };

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/trainers', label: 'Trainers', icon: Users },
    { href: '/programs', label: 'Programs', icon: BookOpen },
    { href: '/classes', label: 'Classes', icon: Dumbbell },
    { href: '/shop', label: 'Shop', icon: ShoppingBag },
    { href: '/messages', label: 'Messages', icon: MessageSquare },
    {
      href: role === 'trainer' ? '/dashboard/trainer' : '/dashboard/athlete',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
  ];

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EvolveWell
              </span>
            </Link>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={role}
              onChange={(e) => handleRoleChange(e.target.value as UserRole)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="athlete">Athlete</option>
              <option value="trainer">Trainer</option>
            </select>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden border-t">
        <div className="flex justify-around py-2">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center space-y-1 p-2 ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
