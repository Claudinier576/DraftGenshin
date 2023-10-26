import { useEffect, useRef, useState } from 'react';
import './App.css';
import CardSelectCharacter from './components/CardSelectCharacter/CardSelectCharacter';
import CharacterListJSON from './json/characters.json';
function App() {
  //states
  const [dataCharacter, setData] = useState({});
  const [lastIdSelected, setLastIdSelected] = useState();
  const [idSelected, setIdSelected] = useState();
  const [CharacterList, setCharacterList] = useState([...CharacterListJSON]);
  const [Filter, setFilter] = useState("*");
  //refs
  const picks = useRef([]);
  const bans = useRef();
  picks.current = [
    useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null)
  ]

  useEffect(() => {
    if (Filter !== "*") {
      const newList = CharacterListJSON.filter((character) => character.element === Filter || character.element === "*");
      setCharacterList([...newList]);
    } else {
      setCharacterList([...CharacterListJSON]);
    }
  }, [Filter]);


  useEffect(() => {
    if (idSelected !== lastIdSelected) {
      picks.current[lastIdSelected]?.current.classList.remove("Selected");
      setLastIdSelected(idSelected);
    }

  }, [idSelected]);


  const pickCharacter = () => {
    if (picks.current[idSelected]) {
      picks.current[idSelected].current.firstChild.src = "/assets/characters/" + dataCharacter.img;
      picks.current[idSelected].current.childNodes[1].innerText = dataCharacter.name;
    }
  }

  const removePickBan = (e) => {
    e.currentTarget.parentNode.remove();
  }
  
  const banCharacter = () => {
    const banCard = document.createElement('div');
    banCard.className = 'BanCardCharacter';

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'Remove';
    removeButton.innerText = 'X';
    removeButton.addEventListener('click', removePickBan);

    const img = document.createElement('img');
    img.src = "/assets/characters/" + dataCharacter.img;
    img.alt = '';
    img.draggable = false;

    banCard.appendChild(removeButton);
    banCard.appendChild(img);

    bans.current.appendChild(banCard);
  }
  const alterCharacterSelected = () => {
    var oldSelected = document.querySelector(".SelectedCharacter");
    oldSelected?.classList.remove("SelectedCharacter");
  }
  return (

    <div className="App">

      <div className='pickBanButtons'>
        <button className="Cpick" onClick={() => {
          pickCharacter();
        }}>Pick</button>
        <button className="Cban" onClick={(e) => {
          banCharacter();
        }}>Ban</button>
      </div>
      <div className="container">
        <div className="Name1">
          <input type="text" className='inputName' />
        </div>
        <div className="ElementChoise">
          <div onClick={() => {
            if (Filter === "Pyro") {
              setFilter("*");
            } else {
              setFilter("Pyro");
            }
          }}>
            <img src="/assets/elements/Pyro.png" alt="" />
          </div>
          <div onClick={() => {
            if (Filter === "Hydro") {
              setFilter("*");
            } else {
              setFilter("Hydro");
            }
          }}>
            <img src="/assets/elements/Hydro.png" alt="" />
          </div>
          <div onClick={() => {
            if (Filter === "Anemo") {
              setFilter("*");
            } else {
              setFilter("Anemo");
            }
          }}>
            <img src="/assets/elements/Anemo.png" alt="" />
          </div>
          <div onClick={() => {
            if (Filter === "Electro") {
              setFilter("*");
            } else {
              setFilter("Electro");
            }
          }}>
            <img src="/assets/elements/Electro.png" alt="" />
          </div>
          <div onClick={() => {
            if (Filter === "Dendro") {
              setFilter("*");
            } else {
              setFilter("Dendro");
            }
          }}>
            <img src="/assets/elements/Dendro.png" alt="" />
          </div>
          <div onClick={() => {
            if (Filter === "Cryo") {
              setFilter("*");
            } else {
              setFilter("Cryo");
            }
          }}>
            <img src="/assets/elements/Cryo.png" alt="" />
          </div>
          <div onClick={() => {
            if (Filter === "Geo") {
              setFilter("*");
            } else {
              setFilter("Geo");
            }
          }}>
            <img src="/assets/elements/geo.png" alt="" />
          </div>
        </div>
        <div className="Name2"> <input type="text" className='inputName' /> </div>
        <div className="Picks1">
          <CardSelectCharacter classname={'CardSelectCharacter'} setId={setIdSelected} id={0} img={""} name={""} refPick={picks.current[0]} />
          <CardSelectCharacter classname={'CardSelectCharacter'} setId={setIdSelected} id={1} img={""} name={""} refPick={picks.current[1]} />
          <CardSelectCharacter classname={'CardSelectCharacter'} setId={setIdSelected} id={2} img={""} name={""} refPick={picks.current[2]} />
          <CardSelectCharacter classname={'CardSelectCharacter'} setId={setIdSelected} id={3} img={""} name={""} refPick={picks.current[3]} />
          <CardSelectCharacter classname={'CardSelectCharacter'} setId={setIdSelected} id={4} img={""} name={""} refPick={picks.current[4]} />
          <CardSelectCharacter classname={'CardSelectCharacter'} setId={setIdSelected} id={5} img={""} name={""} refPick={picks.current[5]} />
          <CardSelectCharacter classname={'CardSelectCharacter'} setId={setIdSelected} id={6} img={""} name={""} refPick={picks.current[6]} />
          <CardSelectCharacter classname={'CardSelectCharacter'} setId={setIdSelected} id={7} img={""} name={""} refPick={picks.current[7]} />

        </div>
        <div class="Picks2">
          <CardSelectCharacter classname={'CardSelectCharacter2'} setId={setIdSelected} id={8} img={""} name={""} refPick={picks.current[8]} />
          <CardSelectCharacter classname={'CardSelectCharacter2'} setId={setIdSelected} id={9} img={""} name={""} refPick={picks.current[9]} />
          <CardSelectCharacter classname={'CardSelectCharacter2'} setId={setIdSelected} id={10} img={""} name={""} refPick={picks.current[10]} />
          <CardSelectCharacter classname={'CardSelectCharacter2'} setId={setIdSelected} id={11} img={""} name={""} refPick={picks.current[11]} />
          <CardSelectCharacter classname={'CardSelectCharacter2'} setId={setIdSelected} id={12} img={""} name={""} refPick={picks.current[12]} />
          <CardSelectCharacter classname={'CardSelectCharacter2'} setId={setIdSelected} id={13} img={""} name={""} refPick={picks.current[13]} />
          <CardSelectCharacter classname={'CardSelectCharacter2'} setId={setIdSelected} id={14} img={""} name={""} refPick={picks.current[14]} />
          <CardSelectCharacter classname={'CardSelectCharacter2'} setId={setIdSelected} id={15} img={""} name={""} refPick={picks.current[15]} />
        </div>
        <div class="CharactersWeapons">
          {CharacterList.map((character) => {
            return (<div className='cardCharacter' onClick={(e) => {
              setData(character);
              alterCharacterSelected();
              e.currentTarget.classList.add("SelectedCharacter");
            }}>
              <img src={"/assets/characters/" + character.img} alt='' draggable="false" />
            </div>)
          })}
        </div>
        <div class="Bans" ref={bans}>

        </div>
      </div>
    </div>
  );
}

export default App;
