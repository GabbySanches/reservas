import React, {useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import salasService from '../services/salaService';

function ComboSalas({ onSelectChange }) {

  const [selectData, setSelectData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    async function fetchSelectData () {
        
      try {
        const response = await salasService.getSalas();
        setSelectData(response.data);
      } catch (error) {
        console.error(error);
      }

      };
      fetchSelectData();

  },[]); 

const handleChange = (event) => {
  const value = event.target.value;    
  setSelectedValue(value);
  onSelectChange(value);
};

return (
  <Form>
    
      <Form.Label>Salas</Form.Label>
      <Form.Control as = 'select' value={selectedValue} onChange={handleChange}>
          {selectData.map(item => (
              <option key={item._id} value={item._id}>
                {item.numero} - {item.tipo}
              </option>
            ))}
      </Form.Control>
    
  </Form>
);
}
  
  export default ComboSalas;