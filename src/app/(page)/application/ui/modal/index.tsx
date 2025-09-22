"use client";
import React, {
  FC,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import s from "./style.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  portalId?: string;
};
// background: linear-gradient(180deg, rgba(0, 0, 0, 0) 9.11%, #000000 94.11%);

const modalOverlay =
  "absolute top-0 left-0 bottom-0 right-0 bg-g z-50 pointer-events-none";
const modalWrapper =
  "absolute top-0 left-0 bottom-0 right-0 overflow-hidden text-center md:pt-2.5 md:px-2.5 after:inline-block after:h-full after:align-middle after:-ml-px";
const modal =
  "relative outline-0 align-bottom mb-2.5 w-full text-white inline-block text-left";

export const Modal: FC<ModalProps> = ({
  isOpen = true,
  onClose,
  children,
  portalId = "modal-root",
}) => {
  const [isVisible, setVisible] = useState(isOpen);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  const handleCloseClick: MouseEventHandler = (e) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    const container = document.getElementById(portalId);
    setPortalContainer(container);
  }, [portalId]);

  useEffect(() => {
    const wWidth = window.innerWidth;
    const bWidth = document.body.clientWidth;

    if (isOpen) {
      setVisible(true);
      document.body.classList.add("overflow-hidden");
      document.body.style.paddingRight = wWidth - bWidth + "px";
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  const handleAnimated = () => {
    if (!isOpen) setVisible(false);
  };

  const isChildClick = useRef(false);

  const modalContent = isVisible ? (
    <div
      className={cn(
        modalOverlay,
        {
          [s.show]: isOpen,
          [s.hide]: !isOpen,
        },
        "bg-gradient-to-b from-transparent to-black"
      )}
      onAnimationEnd={handleAnimated}
    >
      <div
        className={cn(modalWrapper, {
          [s.show]: isOpen,
          [s.hide]: !isOpen,
        })}
        style={{
          WebkitOverflowScrolling: "touch",
        }}
        onClick={(e) => {
          if (isChildClick.current) {
            isChildClick.current = false;
            return;
          }
          handleCloseClick(e);
        }}
        onAnimationEnd={handleAnimated}
      >
        <div
          className={cn(modal)}
          onMouseDown={() => {
            isChildClick.current = true;
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="absolute -top-px -left-px -right-px -bottom-px rounded-2xl block -z-10"></div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  ) : null;

  if (portalContainer)
    return ReactDOM.createPortal(modalContent, portalContainer);
  return null;
};
