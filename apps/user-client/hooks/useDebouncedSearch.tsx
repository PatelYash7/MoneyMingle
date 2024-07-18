import { useEffect, useState } from "react";
import { User } from "../types/User";
import { getFriendsDetails } from "../app/lib/actions/getFriendsDetails";

export const useDebouncedSearch = (value: string) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [friends, setFriends] = useState<any>();
  useEffect(() => {
    console.log("Value" + value);
    const Timeout = setTimeout(async () => {
      await setDebouncedValue(value);
      console.log("Debounced Value " + debouncedValue);
      const Response = await getFriendsDetails(debouncedValue);
      setFriends(Response.Friends);
    }, 2000);
    return () => {
      clearTimeout(Timeout);
    };
  }, [value]);
  return {
    friends: friends,
  };
};
