'use client'
import { useState } from "react";
import { User } from "../types/User";
import { UserCard } from "./UserCard";
import { useDebouncedSearch } from "../hooks/useDebouncedSearch";

export const FindUser =() => {
    const[value,setValue]=useState('')
    const {friends} = useDebouncedSearch(value)
  return (
    <div className="flex flex-col items-center h-[262px] bg-white overflow-y-scroll">
      <div className="">
        <div className="py-2 text-xl font-medium text-center ">
          Find Your Friends
        </div>
        <input
          type="text"
          className="h-8 px-2 my-4 border-none rounded "
          placeholder="Enter Number"
          onChange={(e)=>{setValue(e.target.value)}}
        ></input>
      </div>
      <div className="flex flex-col w-2/3 gap-2 my-4">
        {
            friends? friends.map((friend)=> <UserCard friends={friend}/> ) : <div></div>   
        }
      </div>

    </div>
  );
};
