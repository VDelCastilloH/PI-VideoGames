import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createVg, getGenres, getVideogames } from '../../redux/actions';
import validate from './validate'

import './create.styles.css';

function Create() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const allVg = useSelector((state) => state.allVideoGames);
  const navigate = useNavigate();

  const [error, setError] = useState({});
  const [disable, setDisable] = useState(false);

  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: 0,
    platforms: [],
    genres: [],
  });

  const platforms = [
    "PC",
    "PlayStation 5",
    "Xbox One",
    "PlayStation 4",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
  ];

  useEffect(() => {
    dispatch(getGenres());
    setDisable(true);
    //return () => {dispatch(getVideogames());}
  }, [dispatch]);
  
  function handleChange(e) {
    setDisable(false);
    setForm({
      ...form,
      [e.target.name]: e.target.value, //llena el estado local con cada propiedad
    });
    setError(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelectGenre(e) {
    //comprueba si existe un genero con el mismo nombre
    if (!form.genres.includes(e.target.value)) {
      setForm({
        ...form,
        genres: [...form.genres, e.target.value],
      });
    }
  }

  function handleSelectPlatform(e) {
    //comprueba si existe una plataforma con el mismo nombre
    if (!form.platforms.includes(e.target.value)) {
      setForm({
        ...form,
        platforms: [...form.platforms, e.target.value],
      });
    }
  }

  function handleCleanGenre(gen) {
    setForm({
      ...form,
      genres: form.genres.filter((genre) => genre !== gen),
    });
  }

  function handleCleanPlatform(plt) {
    setForm({
      ...form,
      platforms: form.platforms.filter((platform) => platform !== plt),
    });
  }

 function handleSubmit(e) {
    e.preventDefault();
    let repeted = allVg.filter((vg) => vg.name === form.name);
    if (repeted.length !== 0) {
      alert("⚠ Please choose another name, that already exists");
    } else {
      if (
        Object.keys(error).length !== 0 ||
        !form.genres.length ||
        !form.platforms.length
      ) {
        alert("All fields must be completed and without errors");
      } else {
        if (Object.keys(error).length === 0 && form.genres.length > 0) {
          //console.log(form);
          dispatch(createVg(form));
          dispatch(getVideogames());
          alert("✅ Successfully created video game");
          setForm({
            name: "",
            image: "",
            description: "",
            released: "",
            rating: "",
            platforms: [],
            genres: [],
          });
          navigate("/home");
        }
      }
    }
  }
  return (
    <div className="create">
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className='form'>
          <h1> CREATE VIDEOGAME 🎮 </h1>
          <div className='inputs'>
{/*-----------------------------------------NAME-------------------------------------------------------*/}
              <div className="div-container">
                <label className=""><b>Name: </b></label>
                <input
                  className="in-form"
                  type="text"
                  value={form.name}
                  name="name"
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                  />{" "}
                  {error.name && <p className="error">{error.name}</p>}
              </div>
{/*------------------------------------------IMAGE------------------------------------------------------*/}
              <div className="div-container">
                <label className=""><b>Add an image URL: </b></label>
                <input
                  className="in-form"
                  type="text"
                  value={form.image}
                  name="image"
                  onChange={handleChange}
                />
                {error.image && (<p className="error">{error.image}</p>)}
              </div>
{/*--------------------------------------------RELEASED----------------------------------------------------*/}
              <div className="div-container">
                <label> <b>Released: </b> </label>
                <input
                  className="in-released"
                  type="date"
                  min="1990-01-31"
                  max="2023-10-27"
                  value={form.released}
                  name="released"
                  step="1"
                  onChange={handleChange}
                  autoComplete="off"
                />
                {error.released && (<p className="error">{error.released}</p>)}
              </div>
{/*-------------------------------------------RATING-----------------------------------------------------*/}
              <div className="div-container">
                <label> <b>Rating: </b> </label>
                <input
                  className="in-rating"
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={form.rating}
                  name="rating"
                  onChange={handleChange}
                />
                {error.rating && <p className="error">{error.rating}</p>}
              </div>
{/*-------------------------------------------PLATFORMS-----------------------------------------------------*/}
              <div className="div-container">
                <label> <b>Platforms: </b> </label>
                <select onChange={(e) => handleSelectPlatform(e)} className="in-select">
                  <option disabled selected>
                    Platforms
                  </option>
                  {platforms.map((plt) => (
                    <option key={plt} value={plt}>
                      {plt}
                    </option>
                  ))}
                </select>
                {form.platforms.map((plt) => (
                  <div key={plt} className="div-pg">
                    <div>{plt}</div>
                    <button
                      className="btn-select"
                      key={plt}
                      value={plt}
                      onClick={() => handleCleanPlatform(plt)}
                    >
                      <span>x</span>
                    </button>
                  </div>
                ))}
              </div>
{/*-----------------------------------------------GENRES-------------------------------------------------*/}
              <div className="div-container">
                <label> <b>Genres: </b> </label>
                <select onChange={(e) => handleSelectGenre(e)} className="in-select">
                  <option disabled selected>
                    Genres
                  </option>
                  {genres.map((gen) => (
                    <option
                      key={gen}
                      value={gen.name}
                      name="genres"
                      >
                      {gen.name}
                    </option>
                  ))}
                </select>
                {form.genres.map((gen) => (
                  <div key={gen} className="div-pg">
                    <div>{gen}</div>
                    <button
                      className="btn-select"
                      key={gen}
                      value={gen}
                      onClick={() => handleCleanGenre(gen)}
                    >
                      <span>x</span>
                    </button>
                  </div>
                ))}
              </div>
{/*-----------------------------------------------DESCRIPTION-------------------------------------------------*/}
              <div className="div-description">
                <label> <b>Description: </b> </label>
                <textarea
                  className="in-description"
                  required
                  type="text"
                  value={form.description}
                  name="description"
                  placeholder="Your video game is about..."
                  onChange={handleChange}
                />
              </div>
                {error.description && (
                  <p className="error">{error.description}</p>
                )}
          </div>
{/*-----------------------------------------------BTN CREATE AND CANCEL-------------------------------------------------*/}
          <div className="div-btn">
            <button onSubmit={handleSubmit} className="btn" disabled={Object.keys(error).length>0||disable===true}>
              CREATE 
            </button>
            <Link
              to="/home"
            >
              <button className="btn"> CANCEL </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;