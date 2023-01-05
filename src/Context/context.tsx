import { createContext, ReactNode, useState } from "react";
import users from "../../users.json";

interface ContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  contactUsers: ContactUsers[];
  handleDelete: (id: number) => void;
}

interface ContactUsers {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}
interface ContextProps {
  children: ReactNode;
}

export const NewContext = createContext({} as ContextType);

export const Context = ({ children }: ContextProps) => {
  const [search, setSearch] = useState("");
  const [jsonImported, setJsonImported] = useState<ContactUsers[]>(users);
  const contactUsers: ContactUsers[] = jsonImported.filter((row) => {
    return Object.values(row).some((s) =>
      ("" + s).toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleDelete = (id: number) => {
    const result = jsonImported.filter((x) => x.id !== id);
    setJsonImported(result);
    console.log(id);
  };

  return (
    <NewContext.Provider
      value={{ search, setSearch, contactUsers, handleDelete }}
    >
      {children}
    </NewContext.Provider>
  );
};
