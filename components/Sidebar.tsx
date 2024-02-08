import Account from "./Account";
import History from "./History";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between py-8">
      <div className="font-bold flex items-center text-3xl text-gray-700 dark:text-white">
        BubblSpace
      </div>{" "}
      <Separator className="my-4" />
      <History />
      <Separator className="my-4" />
      <Account />
    </div>
  );
};

export default Sidebar;
