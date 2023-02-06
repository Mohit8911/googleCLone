import React, { useState } from 'react'
import "./search.css"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from "@mui/icons-material/Mic";
import { Button } from '@mui/material';
import { useStateValue } from '../StateProvider.js';
import { actionTypes } from '../reducer.js';
import { useNavigate } from 'react-router-dom'

const Search = ({ hideButtons }) => {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useNavigate();
    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term:input
        })
        history('/result');
    }
  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="btn">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button type="button" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
                  <div className="btn" style={{ display:"none"}}>
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;