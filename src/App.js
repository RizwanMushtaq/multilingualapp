import './App.scss';
import React , { useState, useEffect } from 'react';
import StudentModule from './components/student-module/StudentModule';

function App() {

  let [language, setLanguage] = useState('English')

  useEffect( () => {
    console.log('Rendering App Component')
  })

  const updateLanguagePreference = (e) => {
    console.log(e.target.value)
    setLanguage(e.target.value)
  }


  return (
    <div className="App">
      My Multi Lingual App
      <select defaultValue='English' onChange={updateLanguagePreference}>
        <option value='English'>English</option>
        <option value='Deutsch'>Deutsch</option>
        <option value='French'>French</option>
      </select>
      <StudentModule language={language}></StudentModule>
    </div>
  );
}

export default App;
