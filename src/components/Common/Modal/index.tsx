import Image from "next/image";
import React, { ReactNode } from "react";

interface ModalProps {
  movieThumb?: JSX.Element;
  movieTitle?: string;
  movieDescription?: string;
  movieId?: number;
  closeModal: () => void;
  children?: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const {
    movieDescription,
    movieId,
    movieTitle,
    movieThumb,
    closeModal,
    children,
  } = props;
  return (
    <div className="fixed flex justify-between items-center flex-col z-[100] bg-slate-900 top-0 bottom-0 right-0 left-0">
      <div>
        <button onClick={closeModal}>Close</button>
      </div>
      {children}
      <span>{movieId}</span>
      <h1>{movieTitle}</h1>
      <p>{movieDescription}</p>
    </div>
  );
};
