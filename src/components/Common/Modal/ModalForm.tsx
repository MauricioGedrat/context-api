import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { NewContext, ContactUser } from '../../../Context/context'
import * as s from '../../../styles/TailwindStyles/modalStyles'
import { ModalProps } from './index'

export const ModalForm = ({ closeModal }: ModalProps) => {
  const { handleCreate } = useContext(NewContext)
  const { register, handleSubmit } = useForm<ContactUser>()

  const onSubmit = (data: ContactUser) => {
    handleCreate({ ...data, id: 0, ip_address: '0' })
    closeModal()
  }
  return (
    <form className={s.modalBodyStyles} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="First Name"
          className={s.modalInputsStyles}
          {...register('first_name', { required: true })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          className={s.modalInputsStyles}
          {...register('last_name', { required: true })}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          className={s.modalInputsStyles}
          {...register('email', { required: true })}
        />
      </div>
      <div>
        <input
          list="task-suggestions"
          placeholder="Gender"
          className={s.modalInputsStyles}
          {...register('gender', { required: true })}
        />
      </div>
      <datalist id="task-suggestions">
        <option value="Male" />
        <option value="Female" />
        <option value="Genderqueer" />
        <option value="Bigender" />
        <option value="Agender" />
        <option value="Polygender" />
      </datalist>

      {/*footer*/}

      <button className={s.modalSaveButton} type="submit">
        Save Changes
      </button>
    </form>
  )
}
