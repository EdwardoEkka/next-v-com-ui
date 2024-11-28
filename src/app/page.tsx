import Hero from '@/components/home/hero'
import Assurance from '@/components/home/assurance'
import Action from '@/components/home/action'
import FitnessStore from '@/components/home/fitness-store'
import TrainYourself from '@/components/home/train-yourself'
import Blog from '@/components/home/blog'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <TrainYourself/>
      <Action/>
      <FitnessStore/>
      <Assurance/>
      <Blog/>
    </main>
  )
}
