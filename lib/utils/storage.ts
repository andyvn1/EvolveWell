export type UserRole = 'athlete' | 'trainer';

export interface Booking {
  id: string;
  trainerId: string;
  athleteId: string;
  slot: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface ProgramPurchase {
  id: string;
  programId: string;
  userId: string;
  purchasedAt: string;
  progress: number;
}

export interface ClassEnrollment {
  id: string;
  classId: string;
  userId: string;
  enrolledAt: string;
}

// User Role Management
export function getUserRole(): UserRole {
  if (typeof window === 'undefined') return 'athlete';
  const role = localStorage.getItem('userRole');
  return (role as UserRole) || 'athlete';
}

export function setUserRole(role: UserRole): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('userRole', role);
}

// Current User ID (mock)
export function getCurrentUserId(): string {
  if (typeof window === 'undefined') return 'user-1';
  let userId = localStorage.getItem('currentUserId');
  if (!userId) {
    userId = 'user-' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('currentUserId', userId);
  }
  return userId;
}

// Bookings Management
export function getBookings(): Booking[] {
  if (typeof window === 'undefined') return [];
  const bookings = localStorage.getItem('bookings');
  return bookings ? JSON.parse(bookings) : [];
}

export function addBooking(booking: Omit<Booking, 'id' | 'createdAt'>): Booking {
  const bookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: 'booking-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
  };
  bookings.push(newBooking);
  localStorage.setItem('bookings', JSON.stringify(bookings));
  return newBooking;
}

export function updateBooking(id: string, updates: Partial<Booking>): void {
  const bookings = getBookings();
  const index = bookings.findIndex(b => b.id === id);
  if (index !== -1) {
    bookings[index] = { ...bookings[index], ...updates };
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }
}

export function getUserBookings(userId: string): Booking[] {
  const bookings = getBookings();
  return bookings.filter(b => b.athleteId === userId || b.trainerId === userId);
}

// Messages Management
export function getMessages(): Message[] {
  if (typeof window === 'undefined') return [];
  const messages = localStorage.getItem('messages');
  return messages ? JSON.parse(messages) : [];
}

export function addMessage(message: Omit<Message, 'id' | 'timestamp'>): Message {
  const messages = getMessages();
  const newMessage: Message = {
    ...message,
    id: 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
  };
  messages.push(newMessage);
  localStorage.setItem('messages', JSON.stringify(messages));
  return newMessage;
}

export function getUserMessages(userId: string): Message[] {
  const messages = getMessages();
  return messages.filter(m => m.senderId === userId || m.receiverId === userId);
}

export function markMessageAsRead(messageId: string): void {
  const messages = getMessages();
  const message = messages.find(m => m.id === messageId);
  if (message) {
    message.read = true;
    localStorage.setItem('messages', JSON.stringify(messages));
  }
}

// Program Purchases Management
export function getProgramPurchases(): ProgramPurchase[] {
  if (typeof window === 'undefined') return [];
  const purchases = localStorage.getItem('programPurchases');
  return purchases ? JSON.parse(purchases) : [];
}

export function addProgramPurchase(purchase: Omit<ProgramPurchase, 'id' | 'purchasedAt'>): ProgramPurchase {
  const purchases = getProgramPurchases();
  const newPurchase: ProgramPurchase = {
    ...purchase,
    id: 'purchase-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    purchasedAt: new Date().toISOString(),
  };
  purchases.push(newPurchase);
  localStorage.setItem('programPurchases', JSON.stringify(purchases));
  return newPurchase;
}

export function getUserProgramPurchases(userId: string): ProgramPurchase[] {
  const purchases = getProgramPurchases();
  return purchases.filter(p => p.userId === userId);
}

export function updateProgramProgress(purchaseId: string, progress: number): void {
  const purchases = getProgramPurchases();
  const purchase = purchases.find(p => p.id === purchaseId);
  if (purchase) {
    purchase.progress = progress;
    localStorage.setItem('programPurchases', JSON.stringify(purchases));
  }
}

// Class Enrollments Management
export function getClassEnrollments(): ClassEnrollment[] {
  if (typeof window === 'undefined') return [];
  const enrollments = localStorage.getItem('classEnrollments');
  return enrollments ? JSON.parse(enrollments) : [];
}

export function addClassEnrollment(enrollment: Omit<ClassEnrollment, 'id' | 'enrolledAt'>): ClassEnrollment {
  const enrollments = getClassEnrollments();
  const newEnrollment: ClassEnrollment = {
    ...enrollment,
    id: 'enrollment-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    enrolledAt: new Date().toISOString(),
  };
  enrollments.push(newEnrollment);
  localStorage.setItem('classEnrollments', JSON.stringify(enrollments));
  return newEnrollment;
}

export function getUserClassEnrollments(userId: string): ClassEnrollment[] {
  const enrollments = getClassEnrollments();
  return enrollments.filter(e => e.userId === userId);
}

export function isUserEnrolledInClass(userId: string, classId: string): boolean {
  const enrollments = getClassEnrollments();
  return enrollments.some(e => e.userId === userId && e.classId === classId);
}
