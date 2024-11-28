import { QuestionCard } from "./question-card"

export function EndSection(){
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full">
                <div className=" mt-6 md:mt-28 flex flex-wrap justify-center items-center w-full">
                    <div className="md:w-1/2 p-10">
                    <span>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600"><a href="https://forms.gle/oEAdKMvGVkQR9X4d9">[Register Now] </a></h1>
                    </span>
                        <p className="font-bold mt-3 mb-2 text-slate-500">Date: 01-12-2024 to 16-12-2024</p>
                        <p>
                        Don’t miss out on the chance to be part of the
                        IDEAFORGE Hackathon! Everything we do is free,
                        but spots are limited, so make sure to register soon
                        and secure your place in this exciting journey of
                        innovation!
                        </p>
                    </div>
                    <div className="p-8 relative">
                       <QuestionCard/>
                        
                    </div>
                </div>
            </div>

            

        </>
    );
}
