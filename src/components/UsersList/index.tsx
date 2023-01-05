import { Trash } from "phosphor-react";
import React, { useContext } from "react";
import { NewContext } from "../../Context/context";
import {
  deleteButtonStyle,
  userCardStyles,
  usersListMapStyles,
  usersListSectionStyles,
  userTitleStyles,
} from "../../styles/TailwindStyles/usersListStyles";

const UsersList = () => {
  const { contactUsers, handleDelete } = useContext(NewContext);

  return (
    <section className={usersListSectionStyles}>
      <div className={usersListMapStyles}>
        {contactUsers.map((item) => {
          return (
            <div key={item.id} className={userCardStyles}>
              <h1 className={userTitleStyles}>
                {item.id}: {item.first_name} {item.last_name}:
              </h1>
              <p>{item.email}</p>
              <div>{item.gender}</div>
              <div>{item.ip_address}</div>
              <button
                onClick={() => handleDelete(item.id)}
                className={deleteButtonStyle}
              >
                Delete User
                <Trash size={24} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UsersList;
