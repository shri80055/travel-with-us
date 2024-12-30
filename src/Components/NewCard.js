import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewCard(props) {
  const { imageSrc, title, headline, description } = props;
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/BlogPage'); // Adjust the path to match your routing setup
  };

  return (  
    <div className="max-w-screen-xl mx-auto p-5 sm:p-1 md:p-1">
      <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
        <p >
          <img className="w-full h-60" src={imageSrc} alt={title} />
        </p>
        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
          <h3 className="crdhedline">{title}</h3>
          <p
            className="font-semibold text-xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            {headline}
          </p>
          <p className="font-semibold font-serif italic text-sm mb-2">
            {description}
          </p>
          <button
          onClick={handleRedirect}
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewCard;
