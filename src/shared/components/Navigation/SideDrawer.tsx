import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import styles from './SideDrawer.module.scss'

interface Props {
  children: React.ReactNode
  show: boolean
  onClickHandler: () => void
}

const SideDrawer: React.FC<Props> = ({ show, onClickHandler, children }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={styles.sideDrawer} onClick={onClickHandler} role="menu">{children}</aside>
    </CSSTransition>
  )

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook') as Element)
}

export default SideDrawer

