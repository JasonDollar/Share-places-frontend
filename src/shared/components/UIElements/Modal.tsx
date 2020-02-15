import React, { SyntheticEvent } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import Backdrop from './Backdrop'

import styles from './Modal.module.scss'

interface OverlayProps {
  children?: React.ReactNode
  footer?: React.ReactNode
  classNameProp?: string
  headerClass?: string
  contentClass?: string
  footerClass?: string
  header?: string
  style?: React.CSSProperties
  onSubmitHandler?: () => void
}

interface ModalProps extends OverlayProps {
  show: boolean
  onCancel: () => void
}

const ModalOverlay: React.FC<OverlayProps> = ({
  classNameProp, style, headerClass, header, onSubmitHandler, contentClass, children, footerClass, footer,
}) => {
  const content = (
    <div className={`${styles.modal} ${classNameProp}`} style={style}>
      <header className={`${styles.header} ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmitHandler || ((e: SyntheticEvent) => {
        e.preventDefault()
      })}
      >
        <div className={`${styles.content} ${contentClass}`}>
          {children}
        </div>
        <footer className={`${styles.footer} ${footerClass}`}>
          {footer}
        </footer>
      </form>
    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook') as Element)
}

const Modal: React.FC<ModalProps> = props => {
  's'

  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  )
}

export default Modal
