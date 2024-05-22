import React, { useEffect, useState } from "react";
import "./AddPokemonForm.scss";
import { v4 as uuidv4 } from "uuid";


//dodawanie poksów formularz
const AddPokemonForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    HP: 0,
    ATK: 0,
    DEF: 0,
    RES: 0,
  });

//usestaty dla wpisu, błędu, edycji i id edytowanego
  const [entries, setEntries] = useState([]);
  //errMessage
  const [errMsg, setErrMsg] = useState("");

// wpisy z localstorage
  useEffect(() => {
    const storedEntries = localStorage.getItem("entries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

//walidajca
    if (
      formData.type === "" ||
      formData.HP === "" ||
      formData.ATK === "" ||
      formData.DEF === "" ||
      formData.RES === ""
    ) {
      setErrMsg("Dr. Oak needs more info!");
    } else {
      setErrMsg("");


      //nowy poks
      {
        const newEntry = { ...formData, id: uuidv4() };

        setEntries((prevState) => [...prevState, newEntry]);

        localStorage.setItem("entries", JSON.stringify([...entries, newEntry]));
      }
//reset formularza
      setFormData({
        name: "",
        type: "",
        HP: 0,
        ATK: 0,
        DEF: 0,
        RES: 0,
      });
    }
  };

  //usuwanie wpisu
  const handleDelete = (id) => {
    const newEntries = entries.filter((entry) => entry.id !== id);
    setEntries(newEntries);
    localStorage.setItem("entries", JSON.stringify(newEntries));
  };
  //struktura

  return (
    <div className='AddPokemonMain'>
      <div className='Pokedex-Form'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='PokeScreen'>
            <div className='PokeForm'>
              <div className='text'>
                <label>Name</label>
              </div>

              <input
                type='text'
                className='pokeinput'
                value={formData.name}
                onChange={handleChange}
                name='name'
              />
              <div className='pokefield'>
                <label>Type</label>
                <input
                  type='text'
                  className='pokeinput'
                  value={formData.type}
                  onChange={handleChange}
                  name='type'
                />
              </div>

              <div className='pokefield'>
                <label>Hp</label>
                <input
                  type='number'
                  className='pokeinput'
                  value={formData.HP}
                  onChange={handleChange}
                  name='HP'
                />
              </div>

              <div className='pokefield'>
                <label>Atk</label>
                <input
                  type='number'
                  className='pokeinput'
                  value={formData.ATK}
                  onChange={handleChange}
                  name='ATK'
                />
              </div>

              <div className='pokefield'>
                <label>Def</label>
                <input
                  type='number'
                  className='pokeinput'
                  value={formData.DEF}
                  onChange={handleChange}
                  name='DEF'
                />
              </div>

              <div className='pokefield'>
                <label>Res</label>
                <input
                  type='number'
                  className='pokeinput'
                  value={formData.RES}
                  onChange={handleChange}
                  name='RES'
                />
              </div>
              {errMsg && <p className='err_msg'>{errMsg}</p>}
              <div className='form_buttons'>
                <button type='submit' className='btns btn_add'>
                  Add
                </button>
              </div>
            </div>

            <div className='entered'>
              {entries.map((entry) => (
                <div className='entered-data2' key={entry.id}>
                  <div>
                    <span>Name</span>
                    <span>{entry.name}</span>
                  </div>
                  <div>
                    <span>Type</span>
                    <span>{entry.type}</span>
                  </div>
                  <div>
                    <span>HP</span>
                    <span>{entry.HP}</span>
                  </div>
                  <div>
                    <span>Attack</span>
                    <span>{entry.ATK}</span>
                  </div>
                  <div>
                    <span>Defense</span>
                    <span>{entry.DEF}</span>
                  </div>
                  <div>
                    <span>Resistance</span>
                    <span>{entry.RES}</span>
                  </div>

                  <button
                    onClick={() => handleDelete(entry.id)}
                    className='BTNX'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 384 512'
                    >
                      <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
export default AddPokemonForm;
