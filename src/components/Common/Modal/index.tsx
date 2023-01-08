import { motion } from 'framer-motion'
import Image from 'next/image'
import { X } from 'phosphor-react'
import React, { ReactNode } from 'react'
import * as s from '../../../styles/TailwindStyles/modalStyles'
import { ModalForm } from './ModalForm'

export interface ModalProps {
  closeModal: () => void
  children?: ReactNode
  modalTitle?: string
}

export const Modal = (props: ModalProps) => {
  const { closeModal, children } = props

  return (
    <>
      <motion.div
        className={s.modalContainerStyles}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <div className={s.modalContentStyles}>
          {/*content*/}
          <div className={s.modalSemiContentStyles}>
            {/*header*/}
            <div className={s.modalHeaderContainerStyles}>
              <h3 className={s.modalHeaderTitleStyles}>Modal Title</h3>
              <button className={s.modalCloseButtonStyles} onClick={closeModal}>
                <X size={24} />
              </button>
            </div>
            {/*body*/}
            <ModalForm closeModal={closeModal} />
          </div>
        </div>
      </motion.div>
      <div className={s.modalOverlayStyles}></div>
    </>
  )
}
