
import ChatWindow from "@/components/ChatWindow";
import Sidebar from "@/components/Sidebar";
import { ModeToggle } from "@/components/ui/ModeToggle";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
 

export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw] ">
       <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20}>
        <Sidebar/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel><ChatWindow/></ResizablePanel>
    </ResizablePanelGroup>
    <ModeToggle />
    </main>
  );
}
