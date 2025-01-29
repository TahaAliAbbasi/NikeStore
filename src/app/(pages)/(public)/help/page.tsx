import Image from "next/image"
export default function Help(){
    return(
        <div>
           <div className="w-full flex justify-center items-center px-4 py-7">
                <Image
                    className="w-full max-w-[95%]  h-auto"
                    src="/Helppage.png"
                    alt="image of help page there is no time to make it"
                    height={1280}
                    width={1428}
                />
            </div> 
        </div>
    )
}