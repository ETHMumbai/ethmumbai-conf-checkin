import { useState } from 'react';

type CheckInByEmailProps = {
  name?: string | null;
};

export default function CheckInByEmail({ name }: CheckInByEmailProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState<any>(null);
  const [verifyResult, setVerifyResult] = useState<any>(null);

  const handleCheckInByEmail = async (email: string) => {
    try {
      setLoading(true);

      const url = `${process.env.NEXT_PUBLIC_API_URL}/t/details/${encodeURIComponent(email)}`;
      const res = await fetch(url);

      if (!res.ok) throw new Error('Not found');

      const data = await res.json();
      setTicket(data); // ✅ ticket fetched

    } catch (err) {
      alert('No ticket found for this email');
      setTicket(null);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyTicket = async (ticketCode: string) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/t/${ticketCode}?checkedInBy=${encodeURIComponent(name || 'team')}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
      });

      if (!res.ok) throw new Error('Verification failed');

      const data = await res.json();
      setVerifyResult(data); // ✅ verified

    } catch (err) {
      alert('Ticket verification failed');
      setVerifyResult(null);
    }
  };

  const resetForNextParticipant = () => {
  setEmail('');
  setTicket(null);
  setVerifyResult(null);
  setLoading(false);
};


  return (
    <div className="space-y-4">

      {/* ✅ INPUT + SUBMIT (only before ticket is fetched) */}
      {!ticket && !verifyResult && (
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded-lg w-64 text-black"
          />

          <button
            onClick={() => handleCheckInByEmail(email)}
            disabled={loading || !email}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Submit'}
          </button>
        </div>
      )}

      {/* ✅ TICKET DETAILS (hidden after verify) */}
      {ticket && !verifyResult && (
        <div className="p-4 border rounded-lg bg-gray-50 text-black space-y-2">
          <h3 className="text-lg font-semibold">🎟️ Ticket Details</h3>

          <div><strong>Ticket Code:</strong> {ticket.ticketCode}</div>
          <div><strong>Name:</strong> {ticket.participant}</div>
          <div><strong>Email:</strong> {ticket.participantEmail}</div>
          <div><strong>Checked In:</strong> {ticket.checkedIn ? '✅ Yes' : '❌ No'}</div>

          <a
            href={ticket.qrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 underline"
          >
            View Ticket QR
          </a>
        </div>
      )}

      {/* ✅ VERIFY BUTTON (hidden after verify) */}
      {ticket && !verifyResult && (
        <button
          onClick={() => handleVerifyTicket(ticket.ticketCode)}
          disabled={ticket.checkedIn}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {ticket.checkedIn ? 'Already Checked In' : 'Verify & Check-in'}
        </button>
      )}

      {/* ✅ VERIFICATION SUCCESS MESSAGE */}
      {verifyResult?.ok && (
  <div className="space-y-3">
    <div className="p-4 border-l-4 border-green-600 bg-green-50 text-black rounded-lg space-y-1">
      <h3 className="text-lg font-semibold text-green-700">
        ✅ Check-in Successful
      </h3>

      <p>
        Hi <strong>{verifyResult.participantName}</strong>, welcome to
        <strong> ETHMumbai</strong>!
      </p>

      <p>
        🎟️ Ticket Type: <strong>{verifyResult.ticketType}</strong>
      </p>

      <p>
        🧾 Ticket Code: <strong>{verifyResult.ticketCode}</strong>
      </p>

      <p>
        💳 Paid by: <strong>{verifyResult.buyerName}</strong>
      </p>
    </div>

    {/* ✅ NEXT PARTICIPANT BUTTON */}
    <button
      onClick={resetForNextParticipant}
      className="px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-100"
    >
      Check in next participant
    </button>
  </div>
)}

    </div>
  );
}
