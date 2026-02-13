'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { trainers } from '@/lib/data/trainers';
import { formatCurrency, formatDateTime } from '@/lib/utils/format';
import { addBooking, getCurrentUserId } from '@/lib/utils/storage';
import { Calendar, Clock, CreditCard, CheckCircle } from 'lucide-react';

export default function BookPage() {
  const params = useParams();
  const router = useRouter();
  const trainerId = params.trainerId as string;
  const trainer = trainers.find((t) => t.id === trainerId);

  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [step, setStep] = useState<'select' | 'checkout' | 'confirmation'>('select');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  if (!trainer) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Trainer not found</h1>
      </div>
    );
  }

  const handleSlotSelection = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleProceedToCheckout = () => {
    if (selectedSlot) {
      setStep('checkout');
    }
  };

  const handleConfirmBooking = () => {
    const booking = addBooking({
      trainerId: trainer.id,
      athleteId: getCurrentUserId(),
      slot: selectedSlot,
      status: 'confirmed',
    });
    console.log('Booking created:', booking);
    setStep('confirmation');
  };

  if (step === 'confirmation') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your session with {trainer.name} has been successfully booked.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image src={trainer.imageUrl} alt={trainer.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{trainer.name}</h3>
                  <p className="text-gray-600">{trainer.specialty}</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-4 space-y-2 text-left">
              <div className="flex items-center text-gray-700">
                <Calendar className="mr-3" size={20} />
                <span>{formatDateTime(selectedSlot)}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="mr-3" size={20} />
                <span>60 minutes</span>
              </div>
              <div className="flex items-center font-semibold text-lg">
                <CreditCard className="mr-3" size={20} />
                <span>{formatCurrency(trainer.hourlyRate)}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/dashboard/athlete')}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => router.push('/trainers')}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Browse Trainers
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'checkout') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Checkout</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Booking Summary */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image src={trainer.imageUrl} alt={trainer.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{trainer.name}</h3>
                      <p className="text-gray-600">{trainer.specialty}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="mr-3" size={18} />
                      <span className="text-sm">{formatDateTime(selectedSlot)}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="mr-3" size={18} />
                      <span className="text-sm">60 minutes</span>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Total</span>
                        <span>{formatCurrency(trainer.hourlyRate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex space-x-4 mb-4">
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 px-4 py-3 border-2 rounded-lg font-medium transition-colors ${
                        paymentMethod === 'card'
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Credit Card
                    </button>
                    <button
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex-1 px-4 py-3 border-2 rounded-lg font-medium transition-colors ${
                        paymentMethod === 'paypal'
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      PayPal
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="text-center py-8">
                      <p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your payment</p>
                      <div className="w-32 h-32 bg-blue-50 rounded-lg flex items-center justify-center mx-auto">
                        <CreditCard className="text-blue-600" size={48} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep('select')}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleConfirmBooking}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                Confirm & Pay {formatCurrency(trainer.hourlyRate)}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Session</h1>
          <p className="text-gray-600 mb-6">Select a time slot with {trainer.name}</p>

          <div className="flex items-center mb-8 pb-8 border-b">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mr-4">
              <Image src={trainer.imageUrl} alt={trainer.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{trainer.name}</h2>
              <p className="text-blue-600">{trainer.specialty}</p>
              <p className="text-gray-600">{formatCurrency(trainer.hourlyRate)} per hour</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Available Time Slots</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {trainer.availableSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => handleSlotSelection(slot)}
                className={`p-4 border-2 rounded-lg text-left transition-colors ${
                  selectedSlot === slot
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center">
                  <Calendar className="mr-3 text-gray-600" size={20} />
                  <div>
                    <div className="font-medium">{formatDateTime(slot)}</div>
                    <div className="text-sm text-gray-600">60 minutes</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleProceedToCheckout}
            disabled={!selectedSlot}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
