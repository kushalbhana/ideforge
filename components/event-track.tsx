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
                    image:"https://pbs.twimg.com/media/GNJpA-FWQAAtCfw.jpg", 
                    content:"Submit a detailed document outlining your idea. Focus on identifying the problem, proposing a solution, and detailing the implementation strategy."}}
                    />
                    <EventCard 
                    content={{title: "Round 2: Prototype", 
                    date:"December 8 - 14, 2024",
                    image:"https://pbs.twimg.com/media/GNJpA-FWQAAtCfw.jpg", 
                    content:"Develop and implement a working prototype based on your idea. Focus on the technical execution and innovation."}}
                    />
                    <EventCard 
                    content={{title: "Round 3: Presentation", 
                    date:"December 15, 2024",
                    image:"https://pbs.twimg.com/media/GNJpA-FWQAAtCfw.jpg", 
                    content:"Prepare and present your idea and prototype through a PowerPoint presentation. Showcase your development process, expected outcomes, and challenges faced."}}
                    />
                   
                </div>
            </div>
        </>
    )
}