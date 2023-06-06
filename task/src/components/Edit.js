import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Restuo.css';

function Edit() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [loc, setLoc] = useState('');
  const [con, setCon] = useState('');
  const [add, setAdd] = useState('');
  const [taf, setTaf] = useState(false);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const editIndex = parseInt(localStorage.getItem('editIndex'));
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    if (editIndex >= 0 && editIndex < storedBlogs.length) {
      const { name, type, loc, con, add, taf } = storedBlogs[editIndex];
      setName(name);
      setType(type);
      setLoc(loc);
      setCon(con);
      setAdd(add);
      setTaf(taf);
      setBlogs(storedBlogs);
    }
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const editIndex = parseInt(localStorage.getItem('editIndex'));
    const updatedBlogs = blogs.map((blog, blogIndex) => {
      if (blogIndex === editIndex) {
        return { name, type, loc, con, add, taf };
      } else {
        return blog;
      }
    });
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate('/add');
  };

  const handleClose = () => {
    navigate('/add');
  };

  return (
    <div className="edit-container">
      <div className="pop">
        <h2 className="hea">Edit</h2>
        <form onSubmit={handleEdit}>
          <span>Restaurant Name:</span>
          <input className="form__input" name="name" type="text" placeholder="Restaurant name" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <span>Type:</span>
          <select className="form__input" name="type" value={type} onChange={(e) => setType(e.target.value)}>
            <option>Veg</option>
            <option>Non Veg</option>
            <option>Both</option>
          </select>
          <br />
          <span>Location:</span>
          <input className="form__input" name="loc" type="text" placeholder="Location" value={loc} onChange={(e) => setLoc(e.target.value)} />
          <br />
          <span>Contact:</span>
          <input className="form__input" name="con" type="text" placeholder="Mobile Number" value={con} onChange={(e) => setCon(e.target.value)} />
          <br />
          <span>Address:</span>
          <input className="form__input" name="add" type="url" placeholder="Url" value={add} onChange={(e) => setAdd(e.target.value)} />
          <span className="pp">The given information is shared with the public.</span>
          <br />
          <input type="checkbox" name="taf" checked={taf} onChange={(e) => setTaf(e.target.checked)} />
          <span className="pp">Agree</span>
          <br />
          <div className="edit-button-container">
            <input type="Submit" className="button" value="Update" />
            <button className="close-button" onClick={handleClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
