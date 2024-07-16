import { useState } from "react";
import DataFile from "./DataFile";
import { useEffect } from "react";

const Home = () => {
    const [data, setData] = useState([]);
    const [item, setItem] = useState(data)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(d => {

            setData(d)
            setItem(d);
        }
        )
    },[])

    const search = e =>{
        setItem(data.filter(f => f.name.toLowerCase().includes(e.target.value)))
    }

    return (
        <div>
        <div className=" grid justify-items-center my-5">
        <input
            onChange={search}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-2/4 " />
        </div>
<div className="overflow-x-auto">
  <table className="table table-xs">
    <thead className="text-xl text-orange-300">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>location</th>
        <th>Website</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
        {item.map(user => <DataFile
        key={user.id}
        user ={user}
        ></DataFile>)}
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Home;