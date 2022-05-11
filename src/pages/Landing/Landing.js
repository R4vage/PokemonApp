import React, { useEffect, useState } from "react";
import { ListCard  , Footer, NavBar } from "../../components";
import arrow from "../../assets/arrow.png"
import "./Landing.css"



function Login () {
    const [page , setPage] = useState(1); // Podria haver usado los parametros de next y previous que ya vienen dados por pokeapi para la creación de listas, pero me pinto hacer la mas complicada. Este número indica la cantidad de items actualmente en display. Ademas permite usar atributos dados por el pokemon dentro de la lista, como el color, e inclusive tenia una idea para usar el habitat, pero no llego ni a gancho con el tiempo.
    const totalPages = Math.round(800/10) // Podria hacerse un fecth para buscar la cantidad de páginas totales. Por ahora puse el numero total
    const [pageList, setPageList] = useState([])

    

        
    function listPage(){
        const list = []
        for (var i = page-5; i < page+5; i++) {
        list.push(i);
        }
        setPageList(list)
        }

        

    useEffect(() => {
        listPage()
        
      },[page]);
    
    return (  
    <>
        <NavBar/>
            <div className="Landing">
                <div className="landing--listContainer">
                    <ListCard index={page}/>
                </div>
                <div className="landing--listButtons">
                <img src={arrow} className={(page<2)?"hidden":"landing--listButtons__arrows leftArrow"} onClick={() =>(page>1) && setPage(page-1)}/>
                
                {pageList.map((i) => (<button onClick={() => setPage(i)} className={(i===page)?"landing--listButtons__numbers landing--listButtons__numbers__selected":(i<1 || i>totalPages)? "hidden" : "landing--listButtons__numbers"} >{i}</button>))}
                <img src={arrow} className={(page >= totalPages)?"hidden":"landing--listButtons__arrows rightArrow"} onClick={() =>(page<totalPages) && setPage(page+1)}/>
                </div>
            </div>
        <Footer/>
    </>
    );
}

export default Login;