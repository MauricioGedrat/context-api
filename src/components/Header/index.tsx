import { Plus } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { NewContext } from '../../Context/context'
import * as s from '../../styles/TailwindStyles/headerStyles'
import { Modal } from '../Common/Modal'

export const Header = () => {
  const [show, setShow] = useState(false)
  const { setSearch } = useContext(NewContext)

  const handleShow = () => {
    setShow(true)
  }

  return (
    <>
      <div className={s.headerContainerStyles}>
        <h1 className={s.headerLogoStyles}>IUsers</h1>
        <div className={s.inputButtonContainerStyles}>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className={s.headerInputStyles}
            placeholder="Search for you user..."
          />
          <button onClick={handleShow} className={s.headerAddUserButtonStyles}>
            Add User <Plus size={24} />
          </button>
        </div>
      </div>
      {show && (
        <Modal closeModal={() => setShow(false)}>
          <h1>Adicionar Usuário</h1>
        </Modal>
      )}
    </>
  )
}
