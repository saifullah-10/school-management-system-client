
interface Card {
  teacher: string,
  subjectCode: string,
  room: string
}

const RoutinCard: React.FC<{ card: Card }> = ({ card }) => {
  return (


<div className=" px-2 py-1 bg-green-200 rounded-xl">

  <div>
    <h1 className="lg:text-xl text-lg text-center">{card?.subjectCode}</h1>
    <p className="text-sm text-center whitespace-nowrap">Room NO: {card?.room}</p>
  </div>
</div>

  );
};

export default RoutinCard;
