import HeroSection from "../components/herosection"
import { RoundsSection } from "../components/rounds-section"
import { RoundsSectionSmall} from "../components/rounds-section-small"
import EventsTrack  from "../components/event-track"
import { RulesAndTechnical } from "../components/rules-section"
import { EndSection } from "../components/end-section"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { ThemesSection } from "../components/themes-section"

export default function App() {
  return (
    <div>
      <SpeedInsights/>
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
        <div className=" w-full flex justify-center items-center">
          <div className="max-w-7xl">
              <ThemesSection/>
            </div>
        </div>

        <div>
          <EventsTrack/>
        </div>

        <div className="flex justify-center w-full">
          <div className="max-w-7xl flex flex-col justify-center items-center">
            <RulesAndTechnical/>
          </div>
        </div>
          
        <div className="w-full bg-gradient-to-b from-gray-950 dark:to-black text-slate-200 flex justify-center">

          <div className="max-w-7xl">
            <EndSection/>
          </div>

        </div>

      </div>

    </div>
  )
}