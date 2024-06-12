import { useState } from "react";

interface Props {
    name: string;
    email:string;
    age: number;
    isMarried:boolean;
    friends: string[];
    country: Country;
}

export enum Country{
    Brazil= "Brazil",
    Canada="Canada",
    France="France",
}

export const Person = (props: Props) => {
    const [name , setName] = useState<string>("")
    const {name:personName,email,age,friends,isMarried,country}  = props;
  return (
    <div>
      <h1>{personName}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <h1>This person {isMarried ? "is" : "is not"} MARRIED</h1>
      {friends.map((friend: string, idx) => (
        <h1 key={idx}>{friend}</h1>
      ))}
      <h1>Country: {country}</h1>
    </div>
  );
}

export default Person
