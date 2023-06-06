import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Edit from'./Home'

function Add() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  const handleDelete = (blogIndex) => {
    const updatedBlogs = blogs.filter((_, index) => index !== blogIndex);
    console.log(updatedBlogs);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const handleEdit = (blogIndex) => {
    setIsEdit(true)
    
    localStorage.setItem('editIndex', blogIndex);
    
  };

  return (
    <>
      <div className="App-header">
        <h2 className="hea">Near me</h2>
        <div className="center1">
          <button onClick={() => navigate('/')} variant="contained">
            Click Me To Add Your Restaurant
          </button>
          <h6>Restaurant List</h6>
          <div>
            <table border="1">
              <thead>
                <tr>
                  <th>name</th>
                  <th>type</th>
                  <th>location</th>
                  <th>contact</th>
                  <th>address</th>
                </tr>
              </thead>
              <tbody>
                {blogs && blogs.length > 0 ? (
                  blogs.map((blog, blogIndex) => (
                    <tr key={blogIndex}>
                      <td>{blog?.name}</td>
                      <td>{blog?.type}</td>
                      <td>{blog?.loc}</td>
                      <td>{blog?.con}</td>
                      <td>
                        <a href={blog?.add}>click here for google map</a>
                      </td>
                      <td>
                        <button key={`delete-${blogIndex}`} onClick={() => handleDelete(blogIndex)}>
                          DELETE
                        </button>
                      </td>
                      <td>
                        <button key={`edit-${blogIndex}`} onClick={() => handleEdit(blogIndex)}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">no data</td>
                  </tr>
                )}
              </tbody>

            </table>
            <Popup open={isEdit} onClose={() => setIsEdit(false)}>
        <div className="popup-content">
          <div className="popup-content">
            <Edit   setIsEdit={setIsEdit} />
          </div>
        </div>
      </Popup>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
