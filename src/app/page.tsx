import DashboardButton from './components/DashboardButton'
import LandingPage from './components/LandingPage'

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4">
      <DashboardButton />
      <LandingPage />
    </div>
  )
}
