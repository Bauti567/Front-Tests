import React, { useEffect, useState } from "react";

function Search() {
  // setear los use state
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // funcion para traer datos
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);

    }

    fetchData();
  }, []);
  // fucion de busqueda
  const searcher = (event)=>{
    setSearch(event.target.value);
    //console.log(event.target.value)
    
  }
  // metodos para el filtrado de datos
  // let results = [];
  // if(!search){
  //   results = users;
  // } else {
  //   users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()));

  // }
  
  // renderizado de la vista del componente


  return (
    <div>
      <input value={search} type="text" placeholder="search" className="form-control"/>
      <h2>Tabla con filtros</h2>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text-white">
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {
            results.map((user)=>{
              return(
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            )})
          }
        </tbody>
      </table>
    </div>
  );
}

export default Search;
