import { Trash } from "phosphor-react";
import React, { useContext } from "react";
import { NewContext } from "../../Context/context";

const UsersList = () => {
  const { contactUsers, handleDelete } = useContext(NewContext);

  return (
    <div className="flex justify-center">
      <div className="pt-32 grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-10 p-10">
        {contactUsers.map((item) => {
          return (
            <div
              key={item.id}
              className="text-gray-700 border-2 border-gray-500 py-5 rounded-lg mb-5 text-center "
            >
              <h1 className="text-4xl font-bold">
                {item.id}: {item.first_name} {item.last_name}:
              </h1>
              <p>{item.email}</p>
              <div>{item.gender}</div>
              <div>{item.ip_address}</div>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 p-2 mt-3 rounded-md hover:scale-105 text-white duration-300 hover:bg-red-700 flex items-center gap-2 justify-center m-auto"
              >
                Delete User
                <Trash size={24} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
