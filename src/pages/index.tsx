import { Header } from '../components/Header'
import UsersList from '../components/UsersList'

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <UsersList />
    </div>
  )
}
