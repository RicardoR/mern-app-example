import React, { useState } from "react";
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [salary, setSalary] = useState("");

  const register = async(e) => {
      e.preventDefault();
      const newEmployee = {name, surname, salary}
      const response = await Axios.post('http://localhost:4000/api', newEmployee);
      Swal.fire({
        icon: 'success',
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      })
  }

  return (
    <div className="container mt-4 col-md-6">
      <form onSubmit={register}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required
            placeholder="name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required
            placeholder="surname"
            onChange={e => setSurname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required
            placeholder="salary"
            onChange={e => setSalary(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
