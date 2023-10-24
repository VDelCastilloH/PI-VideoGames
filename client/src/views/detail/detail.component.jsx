import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getDetail, cleanDetail } from "../../redux/actions";

import './detail.styles.css';


function Detail() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const detailVg = useSelector((state)=>state.detail);
  //console.log(detailVg);

  useEffect(()=>{
    dispatch(getDetail(id));
    return ()=>{
        dispatch(cleanDetail());
      };
  },[dispatch,id]);

  return (
      <div className="detail">
        <h1>DETAIL VIDEOGAME</h1>
        <Link to='/home'>
          <button className='btn'>Go Back</button>
        </Link>
        {detailVg.id && (
          <div className="detail-cont">
            <div className="img-detail">
              <img src={detailVg.image} alt="Img Videogame" width="400vh" />  
            </div>    
            <div className="info-detail">
              <h1>{detailVg.name || "name not found"}</h1>
              <h2>RATING ⭐       |  {detailVg.rating || "rating not found"}</h2>
              <h3>RELEASED 📅     |  {detailVg.released || "released not found"}</h3>
              <h3>PLATFORMS 🎮    |  {detailVg.platforms?.map((p) => p).join(", ")|| "platforms not found"}</h3>
              <h3>GENRES 📝       |  {detailVg.genres?.map((g) => g).join(", ") || "genres not found"}</h3>
              <h3>DESCRIPTION 🕵️‍♂️  |  <h6>{detailVg.description || "description not found"}</h6></h3>
            </div>
          </div>
            )}
      </div>
    );
  }
  
  export default Detail;