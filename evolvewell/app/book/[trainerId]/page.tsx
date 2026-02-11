'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trainers } from '@/lib/mockData';
import { notFound } from 'next/navigation';

type BookingStep = 'time' | 'checkout' | 'confirmation';

interface Booking {
  trainerId: string;
  selectedDate: string;
  selectedTime: string;
  timestamp: number;
}

export default function BookingPage({ params }: { params: Promise<{ trainerId: string }> }) {
  const { trainerId } = use(params);
  const trainer = trainers.find((t) => t.id === trainerId);
  const [step, setStep] = useState<BookingStep>('time');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingConfirmed, setBookingConfirmed] = useState<Booking | null>(null);

  if (!trainer) {
    notFound();
  }

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and time.');
      return;
    }
    setStep('checkout');
  };

  const handlePayment = () => {
    // Simulate payment processing
    const booking: Booking = {
      trainerId: trainer.id,
      selectedDate,
      selectedTime,
      timestamp: Date.now(),
    };

    // Save to localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    setBookingConfirmed(booking);
    setStep('confirmation');
  };

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          {/* Progress */}
          <div className="mb-12 flex items-center justify-center gap-4">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white ${step === 'time' || step === 'checkout' || step === 'confirmation' ? 'bg-blue-600' : 'bg-gray-300'}`}>
              1
            </div>
            <div className={`h-1 flex-1 ${step === 'checkout' || step === 'confirmation' ? 'bg-blue-600' : 'bg-gray-300'}`} />
            <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white ${step === 'checkout' || step === 'confirmation' ? 'bg-blue-600' : 'bg-gray-300'}`}>
              2
            </div>
            <div className={`h-1 flex-1 ${step === 'confirmation' ? 'bg-blue-600' : 'bg-gray-300'}`} />
            <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white ${step === 'confirmation' ? 'bg-blue-600' : 'bg-gray-300'}`}>
              3
            </div>
          </div>

          {/* Step 1: Select Time */}
          {step === 'time' && (
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-900">Select a Time</h1>
              <p className="mt-2 text-gray-600">
                Book a session with <span className="font-semibold">{trainer.name}</span>
              </p>

              <div className="mt-8">
                <h2 className="font-semibold text-gray-900">Pick a date</h2>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="mt-3 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                >
                  <option value="">Select a date...</option>
                  {Array.from(new Set(trainer.availability.map((slot) => slot.date))).map((date) => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </option>
                  ))}
                </select>
              </div>

              {selectedDate && (
                <div className="mt-6">
                  <h2 className="font-semibold text-gray-900">Pick a time</h2>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {trainer.availability
                      .filter((slot) => slot.date === selectedDate)
                      .map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`rounded-lg py-2 font-medium transition-colors ${
                            selectedTime === slot.time
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* Summary */}
              {selectedDate && selectedTime && (
                <div className="mt-8 rounded-lg bg-blue-50 p-6">
                  <h3 className="font-semibold text-gray-900">Session Details</h3>
                  <div className="mt-3 space-y-2 text-gray-700">
                    <p>
                      <span className="font-semibold">Trainer:</span> {trainer.name}
                    </p>
                    <p>
                      <span className="font-semibold">Date:</span>{' '}
                      {new Date(selectedDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p>
                      <span className="font-semibold">Time:</span> {selectedTime}
                    </p>
                    <p>
                      <span className="font-semibold">Duration:</span> 1 hour
                    </p>
                    <p className="border-t border-blue-200 pt-2 text-lg font-bold">
                      <span className="font-semibold">Price:</span> ${trainer.hourlyRate}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 flex gap-4">
                <Link
                  href="/trainers"
                  className="flex-1 rounded-lg border border-gray-300 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </Link>
                <button
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Checkout */}
          {step === 'checkout' && (
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-900">Confirm Booking</h1>

              {/* Order Summary */}
              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h2 className="font-semibold text-gray-900">Order Summary</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-gray-900">
                    <span className="text-gray-700">{trainer.name} - 1 hour session</span>
                    <span className="font-semibold text-gray-900">${trainer.hourlyRate}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-lg text-gray-900">${trainer.hourlyRate}</span>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="mt-8">
                <h2 className="font-semibold text-gray-900">Payment Information</h2>
                <p className="mt-2 text-sm text-gray-600">
                  This is a demo. No actual payment will be processed.
                </p>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Expiry</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">CVC</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setStep('time')}
                  className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handlePayment}
                  className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Complete Booking
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 'confirmation' && bookingConfirmed && (
            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <div className="text-6xl">✅</div>
              <h1 className="mt-4 text-3xl font-bold text-gray-900">Booking Confirmed!</h1>
              <p className="mt-2 text-gray-600">Your session has been scheduled.</p>

              <div className="mt-8 rounded-lg bg-green-50 p-6 text-left">
                <h2 className="font-semibold text-gray-900">Booking Details</h2>
                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Trainer:</span> {trainer.name}
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span>{' '}
                    {new Date(bookingConfirmed.selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p>
                    <span className="font-semibold">Time:</span> {bookingConfirmed.selectedTime}
                  </p>
                  <p>
                    <span className="font-semibold">Booking ID:</span> #{String(bookingConfirmed.timestamp).slice(-6)}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                A confirmation email has been sent. You can message your trainer to discuss any details.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/messages"
                  className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-center"
                >
                  Message Trainer
                </Link>
                <Link
                  href="/"
                  className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
