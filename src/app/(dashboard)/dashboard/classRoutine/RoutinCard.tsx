interface Card {
  subject: string;
  teacher: string;
}

const RoutinCard: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="w-96 rounded-lg overflow-hidden shadow-lg bg-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl whitespace-nowrap font-semibold text-gray-800">
          {card.subject}
        </h3>
      </div>

      <p className="mt-2 text-gray-600">Room: A101</p>
      <div className="mt-4 flex items-center justify-between">
        <button className="bg-blue-500 rounded-xl text-white py-2 px-4 hover:bg-blue-600">
          Join Class
        </button>
      </div>
    </div>
  );
};

export default RoutinCard;
