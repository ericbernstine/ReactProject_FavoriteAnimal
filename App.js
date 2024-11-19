import { bears } from './data';
import { getImageUrl } from './utils';
import { useState } from 'react';
import './App.css';

function App() {
  const [filterAnimal, setFilterAnimal] = useState("Black Bear");
  const filteredBears = bears.filter((bear) => bear.animal === filterAnimal);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Bear Encyclopedia</h1>

      {/* Dropdown menu to select bear type */}
      <div className="d-flex justify-content-center mb-3">
        <select
          className="form-select w-25"
          value={filterAnimal}
          onChange={(e) => setFilterAnimal(e.target.value)}
        >
          <option value="Black Bear">Black Bear</option>
          <option value="Brown Bear">Brown Bear</option>
          <option value="Polar Bear">Polar Bear</option>
        </select>
      </div>

      {/* Display filtered bears */}
      <div className="row justify-content-center">
        {filteredBears.map((bear) => (
          <div className="col-md-5" key={bear.id}>
            <div className="card h-100">
              <img
                src={getImageUrl(bear)}
                className="card-img-top"
                alt={bear.name}
              />
              <div className="card-body">
                <h3 className="card-title">{bear.animal}</h3>
                <h5 className="card-title"><i>{bear.name}</i></h5>
                <div className="card-text">
                  <strong>Accomplishments:</strong>
                  {bear.accomplishments.map((accomplishment) => (
                    <p>{accomplishment}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
