import {Cards} from "@/components/Cards";
import Featuredcourses from "@/components/Featuredcourses";
import Herosection from "@/components/Herosection";
import { Instructors } from "@/components/Instructors";
import { InfiniteMovingCardsDemo } from "@/components/Moving";
import { StickyScrollRevealDemo } from "@/components/Stickyscroll";
// import StickyScrollRevealDemo from "@/components/Stickyscroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.1]">
      {/* <h1 className="text-2xl text-center text-yellow-400">Uj </h1> */}
      <Herosection />
      <Featuredcourses />
      <StickyScrollRevealDemo />
      <InfiniteMovingCardsDemo />
      <Cards />
      <Instructors />
    </main>
  );
}
