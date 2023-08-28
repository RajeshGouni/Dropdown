import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './App.css';


const App = () => {
  const options = [
    { label: 'React JS', value: 'ReactJs' },
    { label: 'Node Js', value: 'NodeJs' },
    { label: 'Vue Js', value: 'VueJs' },
    { label: 'Nuxt Js', value: 'NuxtJs' },
    { label: 'React Native', value: 'React Native' },
    { label: 'Next Js', value: 'MextJs' },
    
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='container-fluid'>
     <div className="row mt-4">
      <div className="col-md-12">
      <h1 className=' text-center'>React Dropdown </h1>
      </div>
     </div>
     <div className="row justify-content-center mt-4">
        <div className="col-md-6">
        <h2 className='fw-bold  text-center p-2'>Pick A Skill</h2>
        </div>
      </div>
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <div className="row justify-content-center">
        <div className="col-md-6">
        {selectedOption && <div className='myskill'><h2 className='fw-bold  text-center p-2'>My Skill = ( {selectedOption.label} )</h2></div>}
        </div>
      </div>
     
    </div>
  );
};

export default App;

