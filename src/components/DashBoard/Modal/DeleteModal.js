import React from "react";
import Modal from "react-modal";
import "./modal.css";
import { connect } from "react-redux";
import { removeExpense } from "../../../redux/actions/expenses";

const DeleteModal = ({ modalSwitch, switchHandle, dispatch, id }) => (
   <div>
      <Modal
         isOpen={modalSwitch}
         onRequestClose={switchHandle}
         contentLabel="random option"
         closeTimeoutMS={600}
         className="modal shadow-2"
      >
         <h3 className="modal-header"> Are you sure?</h3>
         <div className="modal-container">
            <button className="modal-btn cancel-btn" onClick={switchHandle}>
               {" "}
               Cancel{" "}
            </button>
            <button
               className="modal-btn delete-btn"
               onClick={() => {
                  dispatch(removeExpense({ id }));
                  switchHandle();
               }}
            >
               Delete
            </button>
         </div>
      </Modal>
   </div>
);

export default connect()(DeleteModal);
