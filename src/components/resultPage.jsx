import React from "react";
import Search from "./search";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MapIcon from "@mui/icons-material/Map";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./resultPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";

const ResultPage = ({ hideButtons }) => {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google.png"
          />
        </Link>
        <div className="header-body">
          <Search hideButtons />

          <div className="options">
            <div className="options-left">
              <div className="option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="option">
                <NewspaperIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="option">
                <YouTubeIcon />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="option">
                <MapIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="options-right">
              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="page-results">
          <p className="result-count">
            About {data?.searchInformation.formattedTotalResults} (
            {data?.searchInformation.formattedSearchTime}) results for {term}
          </p>
          {data?.items.map((item) => (
            <div className="result">
              
              <a href={item.link} className="result-link">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="result"
                      className="result-img"
                    />
                  )}

                {item.displayLink}
              </a>
              <a href={item.link} className="result-title">
                <h2>{item.title}</h2>
              </a>
              <p className="result-desc">{item.snippet}</p>
            </div>
          ))}
          ;
        </div>
      )}
    </div>
  );
};

export default ResultPage;
