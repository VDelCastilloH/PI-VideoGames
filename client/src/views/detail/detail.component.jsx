import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getDetail, cleanDetail } from "../../redux/actions";


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
      <div className="Detail">
        <h1>DETAIL VIDEOGAME</h1>
        <Link to='/home'>
          <button className='btn'>Go Back</button>
        </Link>
        {detailVg.id && (
                <>
                <h1>{detailVg.name || "name not found"}</h1>
                <h2>RATING        | ⭐ {detailVg.rating || "rating not found"}</h2>
                <h2>RELEASED      | 📅 {detailVg.released || "released not found"}</h2>
                <h2>PLATFORMS     | 🎮 {detailVg.platforms?.map((p) => p).join(", ")|| "platforms not found"}</h2>
                <h2>GENRES        | 📝 {detailVg.genres?.map((g) => g).join(", ") || "genres not found"}</h2>
                <h2>DESCRIPTION   | 🕵️‍♂️ {detailVg.description || "description not found"}</h2>
                <img src={detailVg.image} alt="Image Videogame" width="275vh" />
                </>                
            )}
      </div>
    );
  }
  
  export default Detail;