import React from 'react';
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";
import "./droneModal.scss"


const DroneModal = ({ isOpen, onClose, drone }) => {
  const customStyles = {
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      width: '70%',
      height: '50%',
      borderRadius: '10px',
      padding: '20px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  if (!drone) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Drone Modal"
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <div className="drone-modal-container">
        <div className='close'>
            <p><IoMdClose onClick={onClose}/></p>
        </div>
        <div className='wrapper'>
       <div className='details'>
        <h2>Details</h2>
        <ol>
            <li><p><strong>Id:</strong> {drone.id}</p></li>
            <li><p><strong>Status:</strong> {drone.status}</p></li>
            <li><p><strong>Flight Hours:</strong> {drone.flight_hours}</p></li>
            <li><p><strong>Battery Status:</strong> {drone.battery_status}</p></li>
            <li> <p><strong>Last Known Location:</strong> {`(${drone.last_known_location[0]}, ${drone.last_known_location[1]})`}</p></li>
            <li> <p><strong>Current Mission:</strong> {drone.current_mission}</p></li>
        </ol>
       </div>
       <div className='maintenance'>
       <h2>Maintenance Logs</h2>
       <ol>
          {drone.maintenance_logs.map((log, index) => (
            <li key={index}>
              <p><strong>Date:</strong> {log.date}</p>
              <ul>
                <li><p><strong>Description:</strong> {log.description}</p></li>
                <li><p><strong>Technician:</strong> {log.technician}</p></li>
              </ul>
            </li>
          ))}
        </ol>
       </div>

        </div>
      </div>
    </Modal>
  );
};

export default DroneModal;
