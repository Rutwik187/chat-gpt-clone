"use client"
import { LogOut, Settings, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { signIn, signOut, useSession } from "next-auth/react";
const Account = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        <Button variant="outline" onClick={()=>signIn()}>
          {" "}
          <div className="flex items-center gap-4">Sign In</div>
        </Button>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              {" "}
              <div className="flex items-center gap-4">
                <UserCircle size={30} />
                <p>{session?.user?.name} </p>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 flex flex-col ">
            <Button
              variant="ghost"
              className="flex gap-4 w-full justify-start "
            >
              <Settings />
              <p>Settings</p>
            </Button>

            <Button
            onClick={()=>signOut()}
              variant="ghost"
              className="flex gap-4 w-full justify-start "
            >
              <LogOut /> <p>Logout</p>
            </Button>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

export default Account;
