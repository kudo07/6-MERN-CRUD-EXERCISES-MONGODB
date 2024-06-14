import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/Home/BackButton';
import Spinner from '../components/Spinner';
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleClick = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete a book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col item-center border-2 border-sky-500 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl"> Wanna delete this</h3>
        <button
          className="p-4 bg-orange-300 text-white m-3 w-full"
          onClick={handleClick}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
