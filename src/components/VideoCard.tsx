export function VideoCard (props : any) {
    return <div className="p-2 cursor-pointer">
        <img src={props.thumbnail} className="border white rounded-xl"/>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img src={props.image} className="w-12 rounded-full" />
            </div>
            <div className="col-span-11 pl-2">
                <div>
                    {props.title}
                </div>
                <div className="text-gray-400 text-base">
                    {props.author}
                </div>
                <div className="text-gray-400 text-base">
                    {props.views} | {props.time} 
                </div>
            </div>
        </div>
    </div>
}

