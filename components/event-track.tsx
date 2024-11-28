import { EventCard } from "./ui/event-card"

export default function EventsTrack(){
    return(
        <>
            <div className=" flex flex-col justify-center items-center mt-16 md:mt-44">
                <div>
                    <h1 className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600">Our Event Track</h1>
                </div>

                <div className="flex flex-wrap justify-center items-center md:gap-2 p-4">
                    <EventCard 
                    content={{title: "Round 1: Ideation", 
                    date:"December 1 - 7, 2024",
                    image:"https://media.istockphoto.com/id/1416797815/photo/golden-number-one.jpg?s=612x612&w=0&k=20&c=A1AOP7RZK8Rkk2yxEumTlWmhQE-0nGfxVz3Ef39Dzxc=", 
                    content:"Submit a detailed document outlining your idea. Focus on identifying the problem, proposing a solution, and detailing the implementation strategy."}}
                    />
                    <EventCard 
                    content={{title: "Round 2: Prototype", 
                    date:"December 8 - 14, 2024",
                    image:"https://media.gettyimages.com/id/1447117571/video/number-2-glitch-text-animation-effect-on-old-interference-screen-4k-video.jpg?s=640x640&k=20&c=3hQgRx3MuA3iCJAllnQDxQINE_F9P7IRbvXGHSMLaag=", 
                    content:"Develop and implement a working prototype based on your idea. Focus on the technical execution and innovation."}}
                    />
                    <EventCard 
                    content={{title: "Round 3: Presentation", 
                    date:"December 15, 2024",
                    image:"https://t4.ftcdn.net/jpg/05/48/34/63/360_F_548346339_RsQL9gnRHvm9FJ2Z32wucq26kcIniG7H.jpg", 
                    content:"Prepare and present your idea and prototype through a PowerPoint presentation. Showcase your development process, expected outcomes."}}
                    />
                   
                </div>
            </div>
        </>
    )
}