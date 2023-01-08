import { createContext, ReactNode, useState } from 'react'
import users from '../../users.json'

interface ContextType {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  contactUsers: ContactUser[]
  handleDelete: (id: number) => void
  handleCreate: (user: ContactUser) => void
}

export interface ContactUser {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  ip_address: string
}
interface ContextProps {
  children: ReactNode
}

export const NewContext = createContext({} as ContextType)

export const Context = ({ children }: ContextProps) => {
  const [search, setSearch] = useState('')
  const [jsonImported, setJsonImported] = useState<ContactUser[]>(users)

  const contactUsers: ContactUser[] = jsonImported
    .filter((row) => {
      return Object.values(row).some((s) =>
        ('' + s).toLowerCase().includes(search.toLowerCase())
      )
    })
    .sort((x, y) => (x.id > y.id ? 1 : -1))

  const handleDelete = (id: number) => {
    const result = jsonImported.filter((x) => x.id !== id)
    setJsonImported(result)
    console.log(id)
  }

  const handleCreate = (user: ContactUser) => {
    users.push(user)
  }

  return (
    <NewContext.Provider
      value={{ search, setSearch, contactUsers, handleDelete, handleCreate }}
    >
      {children}
    </NewContext.Provider>
  )
}
