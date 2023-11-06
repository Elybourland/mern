import React, { useRef } from "react";
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
  const nodeRef = useRef(null);

  const content = (
    <CSSTransition 
      nodeRef={nodeRef}
      in={props.show} 
      timeout={200} 
      classNames="slide-in-left" 
      mountOnEnter 
      unmountOnExit
    >
      <aside className="side-drawer" ref={nodeRef} onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  return createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;