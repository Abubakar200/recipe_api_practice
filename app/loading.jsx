import { Loader2 } from "lucide-react";

const Loading = () => {
    return ( 
        <div className="flex h-full items-center justify-center flex-col">
            <h1 className="text-2xl font-bold">Please Wait a while...</h1>
            <Loader2 className="size-6 animate-spin "/>
        </div>
     );
}
 
export default Loading;