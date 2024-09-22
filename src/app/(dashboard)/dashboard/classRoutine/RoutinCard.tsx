'use client'
import { useAuth } from "@/contextProvider/ContextProvider";
import { useForm } from "react-hook-form";

interface Formvalue{
subjectcode: number,
room: string

}


interface Card {
  teacher: string,
  subjectCode: string,
  room: string
}

const RoutinCard: React.FC<{ card: Card }> = ({ card }) => {
  const {user} = useAuth();
  const {register, handleSubmit, formState:{errors},} = useForm<Formvalue>()
  return (


<div className=" px-2 py-1 bg-green-200 rounded-xl">

  <div>
   {user?.role === "student"? ( <><h1 className="lg:text-xl text-lg text-center">{card?.subjectCode}</h1>
    <p className="text-sm text-center whitespace-nowrap">Room NO: {card?.room} </p></>):(<><form className="flex gap-2 flex-col my-2">
      <input type="number" style={{borderRadius: "5px"}} defaultValue={card?.subjectCode} className="text-black/60 px-1 outline-none  bg-transparent border-2 border-green-600" {...register("subjectcode")} />
      <input type="text" style={{borderRadius: "5px"}} defaultValue={card?.room} className="text-black/60 px-1 outline-none  bg-transparent border-2 border-green-600 " {...register("room")} />
      <input type="submit" style={{borderRadius: "5px"}}  value="Update" className=" transition duration-150 ease-in-out  cursor-pointer bg-green-400 hover:bg-green-500 "  />
      </form></>)}
  </div>
</div>

  );
};

export default RoutinCard;
