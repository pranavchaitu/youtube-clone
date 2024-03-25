export function BarElement(props :any) {
    return <div className="rounded-xl bg-slate-950 hover:bg-gray-700 flex p-2 m-2 cursor-pointer">
        <div className="pr-2">
            {props.svg}
        </div>
        <div>
            {props.title}
        </div>
    </div>
}