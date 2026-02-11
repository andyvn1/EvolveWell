'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export default function QRCodeCard({ url, title }: { url: string; title: string }) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    QRCode.toDataURL(url, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      width: 200,
      margin: 1,
    })
      .then((url: string) => setQrCodeUrl(url))
      .catch((err: Error) => console.error('QR Code Error:', err));
  }, [url]);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
      <h4 className="font-semibold text-gray-900">{title}</h4>

      {qrCodeUrl && (
        <div className="mt-4 flex justify-center">
          <img src={qrCodeUrl} alt={`QR Code for ${title}`} className="h-48 w-48" />
        </div>
      )}

      <p className="mt-4 text-sm text-gray-600">Scan to view profile</p>

      <button
        onClick={() => {
          const link = document.createElement('a');
          link.href = qrCodeUrl;
          link.download = `${title}-qr-code.png`;
          link.click();
        }}
        className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Download QR Code
      </button>
    </div>
  );
}
