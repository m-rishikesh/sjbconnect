import React from 'react';

const EventCard = ({ newest, title, venue, timing, fee, lastDate }) => {
  return (
    <div className="border-2 border-white shadow-lg p-6 hover:cursor-pointer">
      <h2 className="text-xl font-bold text-white">{!newest ? title : title + "🆕" }</h2>
      <p className="text-white mt-2">
        <strong>📍 Venue:</strong> {venue}
      </p>
      <p className="text-white">
        <strong>⏰ Timing:</strong> {timing}
      </p>
      <p className="text-white">
        <strong>💰 Participation Fee:</strong> {fee}
      </p>
      <p className="text-white font-semibold">
        <strong>⏳ Last Date:</strong> {lastDate}
      </p>
    </div>
  );
};

export default EventCard;
