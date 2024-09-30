import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/SearchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search)

  const dispatch = useDispatch();

  useEffect(() => {
    // api call cheyu maya
    // 200ms datithey apey (decline chesey).
     const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }
      else{
        getSuggestions()
      }
    }, 200);
    

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    // console.log("api call ", searchQuery);
    const api = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await api.json();
    setSuggestions(data[1]);

    dispatch(cacheResults(
      {
        [searchQuery]: data[1],  
      }
    ))
  };


  return (
    <div className="sticky top-0 z-10 bg-white">
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex  items-center col-span-1">
        <img
          onClick={() => dispatch(toggleMenu())}
          className="h-10 mr-2 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
        />

        <img
          className="h-[1.5rem]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
          alt="Youtube-logo"
        />
      </div>

      <div className="text-center pr-52 col-span-10">
        <div>
          <input
            type="text"
            className="w-1/2  border border-gray-400 py-[3.8px] px-4 rounded-l-full bg-gray-50"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-[3.5px] pl-2 pr-4 rounded-r-full bg-gray-50">
            <i className="ri-search-line"></i>
          </button>
        </div>
        
        {(suggestions.length === 0) ? null : (showSuggestions && <div className="rounded-md border border-gray-100 text-lg  fixed shadow-2xl mx-56 bg-white w-[31%]">
          <ul className="m-2 w-full">
            {
              suggestions.map((suggestion) => (
                <li key={suggestion} className="flex hover:bg-gray-200"><i className="ri-search-line pr-2"></i> {suggestion}</li>
              ))
            }
            
          </ul>
        </div>)}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user-icon"
        />
      </div>
    </div>
    </div>
  );
};

export default Head;
