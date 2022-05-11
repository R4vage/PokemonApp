import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";


function ListCard(props) {
    const index = props.index
    const [cardList, setCardList] = useState([])
    const navigate = useNavigate();
    
    function listCard(){
        const list = [];
        for (var i = index*11-10; i < index*11; i++) {
        list.push(i);
        }
        setCardList(list)
        }
        
    function handleClick(id){
        return () => {
            navigate(`/pokemon/${id}`);
          }
    }

    useEffect(() => {
        listCard()
    }, [index])
    return ( 
            <>
            {cardList.map((i) => (<div className="cardList--Card" onClick={handleClick(i)}><Card index={i} extended={false}/></div>))}
            </>
     );
}

export default ListCard;