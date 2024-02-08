import { LogOut, Settings, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Account = () => {
    return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline"> <div className="flex items-center gap-4">
                <UserCircle size={30}/>
                <p>Rutwik Shinde</p>
    
            </div>
    </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 flex flex-col ">
            <Button variant="ghost" className="flex gap-4 w-full justify-start "><Settings/><p>Settings</p></Button>

            <Button variant="ghost" className="flex gap-4 w-full justify-start "><LogOut/> <p>Logout</p></Button>
          </PopoverContent>
        </Popover>
      )
};

export default Account;


