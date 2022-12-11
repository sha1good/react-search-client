
import { useEffect, useState } from "react";
import "./app.css";
//import { Users } from "./users"
import Table from "./Table";
import axios from "axios"

const App = () => {

  // const [query, setQuery] = useState("")
  // return <div className="app">
  //    <input
  //       className="search"
  //       placeholder="Search..."
  //       onChange={e=> setQuery(e.target.value)}
  //      />
  //      <ul className="list">
  //         {Users.filter(user=> user.first_name.toLowerCase().includes(query)).map(user =>(
  //           <li key={user.id} className="listItem">{user.first_name}</li>
  //         ))}
  //      </ul>
  // </div>;

//const [query, setQuery] = useState("")

//Alternatively

//const keys = ["first_name", "last_name", "email"];

//console.log(Users[0])

// const  Search =(data) =>{
//    return data.filter(item => 
//     keys.some(key => item[key].toLowerCase().includes(query)))
    // item.first_name.toLowerCase().includes(query)
    // || item.last_name.toLowerCase().includes(query)
    // || item.email.toLowerCase().includes(query))
//}

const [query, setQuery] = useState("")

//Now let us fetching the data from server

const [data, setData] = useState([])

useEffect(() =>{
    const fetchUsers = async () =>{
       const response = await axios.get(`http://localhost:5000?q=${query}`)
       setData(response.data)
    }
 if(query.length ===0 || query.length > 1) fetchUsers();
}, [query])


return <div className="app">
   <input
      className="search"
      placeholder="Search..."
      onChange={e=> setQuery(e.target.value)}
     />
    {/* <Table data={Search(Users)}/> */}
    <Table  data={data}/>
</div>;
};

export default App;