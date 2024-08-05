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
      width: '70%',
      height: '50%',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: 'rgb(185 255 230)',
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
    <table>
        <tbody>
            <tr>
                <th>Id</th>
                <td>{drone.id}</td>
            </tr>
            <tr>
                <th>Status</th>
                <td>{drone.status}</td>
            </tr>
            <tr>
                <th>Flight Hours</th>
                <td>{drone.flight_hours}</td>
            </tr>
            <tr>
                <th>Battery Status</th>
                <td>{drone.battery_status}</td>
            </tr>
            <tr>
                <th>Last Known Location</th>
                <td>{`(${drone.last_known_location[0]}, ${drone.last_known_location[1]})`}</td>
            </tr>
            <tr>
                <th>Current Mission</th>
                <td>{drone.current_mission}</td>
            </tr>
        </tbody>
    </table>
</div>

       <div className='maintenance'>
       <h2>Maintenance Logs</h2>
       <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Technician</th>
            </tr>
        </thead>
        <tbody>
            {drone.maintenance_logs.map((log, index) => (
                <tr key={index}>
                    <td>{log.date}</td>
                    <td>{log.description}</td>
                    <td>{log.technician}</td>
                </tr>
            ))}
        </tbody>
    </table>
       </div>

        </div>
      </div>
    </Modal>
  );
};

export default DroneModal;
