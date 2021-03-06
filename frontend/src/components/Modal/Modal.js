import React from 'react';

import './Modal.css';

const modal = props => (
     <div className="modal">
          <header>{props.title}</header>
          <section className="modal__content">
              {props.children}
          </section>
          <section className="modal__actions">
              {props.canCancel && <button>Cancel</button>}
              {props.canConfirm && <button>Confirm</button>}
          </section>
     </div>

);

export default modal;


