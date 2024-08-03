import React, { useState } from 'react';
import './listCard.scss';
import { Data } from '../../Data/data';
import DroneModal from '../../Modal/DroneModal';

const ListCard = ({drones}) => {
  const [data] = useState(Data);
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState(null);
  

  const handleDroneModal = (drone) => {
    setSelectedDrone(drone);
    setIsDroneModalOpen(true);
  };

  const handleCloseDroneModal = () => {
    setIsDroneModalOpen(false);
    setSelectedDrone(null);
  };

  return (
    <>
      <section className="list-container">
        <div className="lists">
          {drones.map((drone,index) => (
            <div className="drone-card" key={index} onClick={() => handleDroneModal(drone)}>
              <h2>{drone.id}</h2>
              <p>Status - {drone.status}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedDrone && (
        <DroneModal  
          isOpen={isDroneModalOpen}
          onClose={handleCloseDroneModal}
          drone={selectedDrone}
        />
      )}
    </>
  );
};

export default ListCard;
