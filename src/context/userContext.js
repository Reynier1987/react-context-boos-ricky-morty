import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [character, setcharacter] = useState([]);
  const [CountResults, setCountResults] = useState(0);
  const [countPages, setCountPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((resp) => {
      if (resp.status === 200) {
        setcharacter(resp.data.results);
        setCountResults(resp.data.info.count);
        setCountPages(resp.data.info.pages);
        setNextPage(resp.data.info.next);
        setPrevPage(resp.data.info.prev);
      }
    });
  }, []);

  const GotoPage = (pages, e) => {
    const type = e.target.dataset.type;// captura el nombre del boton

    switch (type) {
      case "next":
        setActualPage(actualPage + 1);
        break;
      case "prev":
        setActualPage(actualPage - 1);
        break;
       case 'goto':
       const number = Number(e.target.value) ;
       pages = "https://rickandmortyapi.com/api/character?page="+ number;
       setActualPage(number);
       break;
      default:
        return;
    }

    console.log(type);
    axios.get(pages).then((resp) => {
      if (resp.status === 200) {
        setcharacter(resp.data.results);
        //setCountResults(resp.data.info.count);
        //setCountPages(resp.data.info.pages);
        setNextPage(resp.data.info.next);
        setPrevPage(resp.data.info.prev);
        //setActualPage(actualPage + 1);
      }
    });
  };
  // se puede hacer con funciones diferentes o con swicth
  /*
    const PrevPage = (pages) => {
      axios.get(pages).then((resp) => {
        if (resp.status === 200) {
          setcharacter(resp.data.results);
          //setCountResults(resp.data.info.count);
          //setCountPages(resp.data.info.pages);
          setNextPage(resp.data.info.next);
          setPrevPage(resp.data.info.prev);
          setActualPage(actualPage - 1);
        }
      });
    };*/

  return (
    <UserContext.Provider
      value={{
        character,
        CountResults,
        countPages,
        actualPage,
        nextPage,
        prevPage,
        GotoPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
