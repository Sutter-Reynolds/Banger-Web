import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getSearch } from '../../utils/getData.js';
import SearchArticles from './SearchArticles.js';
import '../../styles/utils/imgFitter.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewArticles, setViewArticles] = useState([]);
  const [isInputFocused, setInputFocused] = useState(false);
  const searchContainerRef = useRef(null);
  const articleRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSearch(searchTerm);
      let updatedArticles = [];
      let k = 0;
      if (data.length !== 0) {
        for (let j = 0; j < data.length; j++) {
          updatedArticles.push(
            <p key={(j + 1) * 10} className="Search-Table">
              {data[j][0].table_name}
            </p>
          );
          for (let i = 0; i < data[j].length; i++) {
            (function (index) {
              updatedArticles.push(
                <SearchArticles
                  key={index}
                  data={data[j][i]}
                  table={data[j][0].table_name}
                  ref={(el) => {
                    if (el !== null) {
                      articleRefs.current[index] = el;
                    }
                  }}
                />
              );
            })(k);
            k++;
          }
        }
      }
      setViewArticles(updatedArticles);
    };
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      let isOutside = true;

      if (
        searchContainerRef.current &&
        searchContainerRef.current.contains(event.target)
      ) {
        isOutside = false;
      }

      articleRefs.current.forEach((ref) => {
        if (ref && ref.contains(event.target)) {
          isOutside = false;
        }
      });

      if (isOutside) {
        setInputFocused(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if(searchTerm !== ""){
      setSearchTerm("");
    }
  }, [location]);

  return (
    <>
      <form className="Search-Form" onSubmit={handleSubmit} ref={searchContainerRef}>
        <input
          type="search"
          value={searchTerm}
          placeholder="Search"
          className="Search-Input"
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setInputFocused(true)}
        />
        <button type="submit" className="Search-Button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      {isInputFocused && searchTerm !== '' && (
        <div className="Search-Container">
          <div className="Search-Constraint">
            <div className="Search-Table-Container">{viewArticles}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;