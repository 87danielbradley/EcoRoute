import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import EventFormContainer from './event_form_container';
import EditEventFormContainer from './edit_event_from_container'
import { connect } from 'react-redux'
import { setModalStatus, clearEditingEventId } from '../../actions/app_actions'
 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 620,
  bgcolor: '',
  boxShadow: 12,
  p: 5,
};

function TransitionsModal(props) {
  const { setModalOpenStatus, modalOpenStatus, isEditingEvent, clearEditEventId } = props
  console.log("MODAL OPEN STATUS", modalOpenStatus)
  const handleOpen = () => { 
    setModalOpenStatus(true)
  } ;
  const handleClose = () => { 
    setModalOpenStatus(false);
    clearEditingEventId()
  };

  return (
    <div>
      <Button onClick={handleOpen}>Create Event</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpenStatus}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpenStatus}>
          <Box sx={style}>
            {isEditingEvent ? 
            <EditEventFormContainer /> :
            <EventFormContainer/>
          }
        
         
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modalOpenStatus: state.appState.eventModalOpen,
  isEditingEvent: state.appState.currentEditEventId
})

const mapDispatchToProps = (dispatch) => {
  return {
    setModalOpenStatus: (status) => dispatch(setModalStatus(status)),
    clearEditEventId: () => dispatch(clearEditingEventId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransitionsModal)

