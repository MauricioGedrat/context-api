import { Trash } from 'phosphor-react'
import React, { useContext } from 'react'
import { NewContext } from '../../Context/context'
import * as s from '../../styles/TailwindStyles/usersListStyles'

const UsersList = () => {
  const { contactUsers, handleDelete } = useContext(NewContext)

  return (
    <section className={s.usersListSectionStyles}>
      <div className={s.usersListMapStyles}>
        {contactUsers.map((item) => {
          return (
            <div key={item.id} className={s.userCardStyles}>
              <h1 className={s.userTitleStyles}>
                {item.id}: {item.first_name} {item.last_name}:
              </h1>
              <p>{item.email}</p>
              <div>{item.gender}</div>
              <div>{item.ip_address}</div>
              <button
                onClick={() => handleDelete(item.id)}
                className={s.deleteButtonStyle}
              >
                Delete User
                <Trash size={24} />
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default UsersList
