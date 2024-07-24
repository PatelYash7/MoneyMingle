import { useEffect, useState } from "react";
import { getFriendsDetails } from "../lib/actions/getFriendsDetails";

export const useDebouncedSearch = (value: string) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [friends, setFriends] = useState<any>();
  useEffect(() => {
    const Timeout = setTimeout(async () => {
      await setDebouncedValue(value);
      const Response = await getFriendsDetails(debouncedValue);
      setFriends(Response.Friends);
    }, 300);
    return () => {
      clearTimeout(Timeout);
    };
  }, [value]);
  return {
    friends: friends,
  };
};
