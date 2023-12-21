import clsx from "clsx";

export default function Item ({text, onDelete}){
    return(
        <article className={clsx("border border-white/5 rounded", "flex justify-between items-center", "p-1", {"bg-yellow-300 text-black" : text === "lavar"})}>
            <span >{text}</span>
            <span className="bg-red-600/50 rounded p-1 cursor-pointer hover:bg-red-600/80" onClick={onDelete}>
                Delete
            </span>
        </article>
    )
}