import NaviBtn from "../../common/NaviBtn";
import "./Header.scss";

const btnStyle = {
  '&::hover': {
    color: '#456bd9'
  }
};

export const Header = () => {
  return (
    <header className='header__nav'>
      <div className='all-led'>
        <NaviBtn to='/'>
          <div className='circle blue'></div>
        </NaviBtn>
        <div className='header-led'>
          <div className='circle red'></div>
          <div className='circle yellow'></div>
          <div className='circle green'></div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <NaviBtn to='/AddPokemonForm/AddPokemonForm' customStyle={btnStyle}>
              Add New Pokemon
            </NaviBtn>
          </li>
          <li>
            <NaviBtn to='ListPokemons' customStyle={btnStyle}>ListPokemons</NaviBtn>
          </li>
        </ul>
      </nav>
    </header>
  );
};
