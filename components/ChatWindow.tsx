import { Bot, CircleUserRound } from "lucide-react";
import { PromptInput } from "./PromptInput";

const ChatWindow = () => {
    return (
        <div className="flex flex-col justify-between h-screen  max-w-3xl mx-auto p-4 py-8">
            <div className="h-full flex gap-4 flex-col">
                <div className="flex gap-4">
                <CircleUserRound size={60}/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum minima, tempore, porro vitae molestias ducimus quasi repellat voluptate, quis cumque iusto fuga officia quaerat sunt natus eligendi nulla qui non?</p>
                </div>

                <div className="flex gap-4">
                <Bot size={60}/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum minima, tempore, porro vitae molestias ducimus quasi repellat voluptate, quis cumque iusto fuga officia quaerat sunt natus eligendi nulla qui non?</p>
                </div>
            </div>

            <PromptInput/>
            
        </div>
    );
};

export default ChatWindow;