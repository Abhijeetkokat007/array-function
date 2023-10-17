import React, { useEffect, useState } from "react";
import { phonebook } from "../../Data/Phonebook";
import "./App.css";
import ContactCard from './../../Component/ContactCard/ContactCard';


function App() {

  const [contact, setContact] = useState(phonebook);
  const [searchTerm, setSearchTerm] = useState('');
 
  useEffect(() => {

    const filteredContact = phonebook.filter((contact) => {
      const name = contact.name.toLowerCase();
      const mobail = contact.name.toString();
      const query = searchTerm.toLowerCase();
       
      return (name.includes(query) || mobail.includes(query))
    });
    setContact(filteredContact);
    console.log(filteredContact);
    console.log(searchTerm);

  }, [searchTerm]);
  return (
    <>
      <div className="container">
        <h1 className="heading">Search App </h1>
        <input type="text"
          placeholder="search"
          className="search-input"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }} />

        <h2 className="heading">Top 12 Best IT Company </h2>


        <div className="tasks-container">
          {contact.map((contact, index) => {
            const { name, mobile } = contact;
            return <ContactCard key={index} name={name} mobile={mobile} />
          })}
        </div>
        <div className="footer">
          Developed By <a className="git-footer" href="https://github.com/Abhijeetkokat007 ">@abhijeetkokat007<i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </>
  );
}
export default App;
