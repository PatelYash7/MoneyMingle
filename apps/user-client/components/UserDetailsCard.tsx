"use client";
import { Card } from "@moneymingle/ui/card";
import { TextInput } from "@moneymingle/ui/textinput";
import { User } from "../types/User";
import { useState } from "react";
import { setUsername } from "../app/lib/actions/setUserName";
import { ChangeIcon } from "./Icons";

export function UserDetailsCard({ user }: { user: User }) {
  const [editView, SeteditView] = useState(false);
  const [name, setname] = useState("");
  return (
    <Card title="User Name" width="min-w-72">
      <div className="pt-2 ">
        <div className="flex justify-between gap-2">
          {user.name ? (
            <div className="text-2xl font-bold">{user.name}</div>
          ) : (
            ""
          )}
          <button
            className=""
            onClick={() => {
              SeteditView((prev) => !prev);
            }}
          >
            <ChangeIcon />
          </button>
        </div>
        {!editView ? (
          ""
        ) : (
          <div className="flex items-center justify-center gap-2">
            <TextInput
              label=""
              placeholder={"Enter Name"}
              onChange={(value) => {
                setname(value);
              }}
            />
            <button
              className="h-full px-1 py-2 mt-4 text-center text-white rounded bg-violet-700 "
              onClick={async () => {
                await setUsername({ id: user.id, name: name });
                location.reload();
              }}
            >
              Change
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}
