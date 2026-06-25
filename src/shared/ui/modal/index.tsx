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
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "lg" | "md" | "sm";
  isTransparent?: boolean;
  isMedia?: boolean;
  isRestricted?: boolean;
  portalId?: string;
};

const modalOverlay = "fixed top-0 left-0 bottom-0 right-0 bg-black/60  z-50";
const modalWrapper =
  "fixed top-0 left-0 bottom-0 right-0 overflow-hidden text-center md:pt-2.5 md:px-2.5 after:inline-block after:h-full after:align-middle after:-ml-px";
const modal =
  "relative outline-0 align-middle mb-2.5 w-full bg-green text-white inline-block rounded-2xl text-left";

export const Modal: FC<ModalProps> = ({
  isOpen = true,
  onClose,
  children,
  size = "md",
  isTransparent = false,
  isMedia,
  isRestricted,
  portalId = "modal-root",
}) => {
  const [isVisible, setVisible] = useState(isOpen);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
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
      className={cn(modalOverlay, {
        [s.show]: isOpen,
        [s.hide]: !isOpen,
      })}
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
          className={cn(modal, {
            "max-w-3xl": size === "lg",
            "max-w-md": size === "md",
            "max-w-96": size === "sm",
            "!bg-transparent": isTransparent,
            "max-w-full md:max-w-[780px] md:mx-auto": isMedia,
          })}
          onMouseDown={() => {
            isChildClick.current = true;
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="absolute -top-px -left-px -right-px -bottom-px rounded-2xl block bg-gradient-to-r from-blue-light to-green -z-10"></div>
          <div className={cn("modal-header", { relative: isRestricted })}>
            <button
              type="button"
              onClick={handleCloseClick}
              className={cn(
                "w-10 h-10 fixed z-10 ",
                { absolute: isRestricted },
                {
                  "top-3 right-3 rounded-full bg-white bg-opacity-10": !isMedia,
                },
                {
                  "top-0 left-0 md:top-9 md:right-6 pt-3 pl-3 md:p-0 md:left-auto md:bg-white md:bg-opacity-10 md:rounded-full w-14 h-14":
                    isMedia,
                },
              )}
            >
              {isMedia ? (
                <>
                  <Image
                    src="/assets/icons/back.svg"
                    alt="close"
                    width={28}
                    height={28}
                    unoptimized
                    className="md:hidden"
                  />
                  <span className="md:block hidden">⨉</span>
                </>
              ) : (
                "⨉"
              )}
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  ) : null;

  if (portalContainer)
    return ReactDOM.createPortal(modalContent, portalContainer);
  return null;
};
