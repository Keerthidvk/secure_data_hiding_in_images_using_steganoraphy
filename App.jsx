import { useState } from 'react'
import "./App.css"
function App() {
  const [users,setUsers] = useState([]);
  const [name,setName] = useState('');
  const [email,setEmail]=useState('');
  const [editingIndex,setEditingIndex] = useState(null);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[a-zA-Z]+$/;

  const nameChange =(e)=>setName(e.target.value)
  const emailChange =(e)=>setEmail(e.target.value)

  const handleAddUser=()=>{
    if(name && email){
      if(!namePattern.test(name)){
        alert("invalid name");
        return;
      }
      if(!emailPattern.test(email)){
        alert("invalid email");
        return;
      }
      setUsers([...users,{name,email}]);
      setEmail('');
      setName('');
    }
    else{
      alert('enter valid name or email')
    }
  };
  const handleDeleteUser=(index)=>{
   
    setUsers(users.filter((_,i)=> i !== index));
  }
  const handleEditUser=(index)=>{
    const usertoedit=users[index];
    setName(usertoedit.name)
    setEmail(usertoedit.email)
    setEditingIndex(index);
  }

  const handleUpdateUser =()=>{
    if(name && email && editingIndex!== null){
      if(!namePattern.test(name)){
        alert("invalid name");
        return;
      }
      if(!emailPattern.test(email)){
        alert("invalid email");
        return;
      }
      const updateduser = users.map((user,index)=>(index === editingIndex ? {name,email}:user))
      setUsers(updateduser);
      setEmail('');
      setName('');
      setEditingIndex(null);
    }
  }
  return (
    <div className='crud'>
      <div className='container'>
      <h3>CRUD</h3>
      <input
      type='text'
      value={name}
      onChange={nameChange}
      placeholder='enter name'
      />
      <input
      type='email'
      value={email}
      onChange={emailChange}
      placeholder='enter email'
      />
      {editingIndex === null ?(<button className="add" onClick={handleAddUser}>Add user</button>):(<button className="update" onClick={handleUpdateUser}>Update User</button>)}
      </div>
      <ul>
      {
          users.map((user,index) => (
            <li key={index}>
              <span>{user.name} - {user.email}</span>
              <button className="edit" onClick={()=>handleEditUser(index)}>edit</button>
              <button className="delete" onClick={()=>handleDeleteUser(index)}>delete</button>
              </li>
              ))
      }
      </ul>
      </div>
      );
    }

export default App
