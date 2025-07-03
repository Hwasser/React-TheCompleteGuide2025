import { useCallback, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';
import { useEffect } from 'react';

// Detta körs synkront och behöver därför inte använda useEffect
// Kan du ut den ur komponenten då den inte behöver köras varje gång vi renderar
const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map(id => 
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []); 

  // // tar emot en funktion eftersom att det kan ta ett par ms innan positionen hämtats
  // navigator.geolocation.getCurrentPosition((position) => {
  //   sortPlacesByDistance(
  //     AVAILABLE_PLACES,
  //     position.coords.latitude,
  //     position.coords.longitude
  //   );

  //   // Här har vi ett problem, vi kommer få den här datan efter React renderat
  //   // Skulle vi köra useState så skulle vi uppdatera i en oändlig loop:
  //   //    setAvailablePlaces(sortedPlaces)
  // });
  
  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // Spara data lokalt som sträng
    // EXEMPEL PÅ SID-EFFEKT SOM INTE BÖR ANVÄNDA useEffect
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []; // hämta array eller tom array
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces", 
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  const handleRemovePlace = useCallback(
    function handleRemovePlace() {
      setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
      );
  
      setModalIsOpen(false);
  
      const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
      localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((id) => 
        id !== selectedPlace.current))
      );
    }, []
  );

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}> 
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
