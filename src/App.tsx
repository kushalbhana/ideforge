import HeroSection from "../components/herosection"
import { RoundsSection } from "../components/rounds-section"
import { RoundsSectionSmall} from "../components/rounds-section-small"
import EventsTrack  from "../components/event-track"

export default function App() {
  return (
    <div>
      <HeroSection/>
      <div className="w-full bg-gradient-to-b from-gray-950 dark:to-black text-slate-200 flex flex-col">
        <div className="w-full bg-gradient-to-b from-gray-950 dark:to-black text-slate-200 flex justify-center">

          <div className="max-w-7xl hidden md:block">
            <RoundsSection/>
          </div>

          <div className="max-w-7xl md:hidden">
            <RoundsSectionSmall/>
          </div>

        </div>

        <div>
          <EventsTrack/>
        </div>

      </div>

    </div>
  )
}