import React, {useState} from 'react';

//heirorder component receives as prop the whole comp and returns a whole comp with change
//קומפ מסוג פונק שמקבלת פונק שמקבלת קלאס בתור פרופ
/*fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))*/
async function Ex(){
    const [list=fetch('https://api.coingecko.com/api/v3/coins/list'),setList]=useState('');
    await('https://api.coingecko.com/api/v3/coins/list');
    
    function tenList(props){
      var arr=[];
      for(let i=0;i<10;i++){
           arr[i]+=
           <li>Coin's name: {this.state.list[i].userId} coin's id: {this.state.list[i].id}  symbol: {this.state.list[i].symbol}</li>;
      }
      setList(document.getElementsByClassName("myCoins").append(arr));
    }
    function restart(props){
      document.getElementsByClassName("myCoins").replaceWith=null;
    }
    return(
      <>
      <ul className="myCoins">
       {tenList}
      </ul>
      <button type="button" onClick={restart}>Restart</button>
      </>
    );
}
export default Ex