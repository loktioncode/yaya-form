# React.js npm package that handle/works with forms.


## Available Scripts

In the project directory, you can run:

 ```bash 
 
 npm i yaya-form
 
 ```

## Usage

 ```bash
import React from 'react'
import './App.css'; // Add all your classNames in stylesheets
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

```