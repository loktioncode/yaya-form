import React from 'react'
import './App.css';
import YayaForm from 'yaya-form';


const InputFields = [
  {
      id: 'email',
      name: "email",
      type: "text",
      placeholder: "Email",
      defaultValue: "",
      label: 'Email',
      inputClass: "input",
      required: true,
      labelClass: "labelClass"
  },
  {
    id: 'password',
    name: "password",
    type: "password",
    placeholder: "password",
    defaultValue: "",
    label: 'Passwor',
    inputClass: "input",
    required: true,
    labelClass: "labelClass"
  },
]



function App() {
  return (
    <div className="App">
      <YayaForm fields={InputFields} url={'localhost:3000/'} buttonType={"submit"} buttonText={"Submit Form"}  />
    </div>
  );
}

export default App;
