import React,{useState} from 'react';
import Ex from './Ex';
async function TableEx(){
    const [rows=fetch('https://api.coingecko.com/api/v3/coins/list'),setRow]=useState('');
    await(rows);
    function tenRows(props){
        var arr=[];
        for(let i=0;i<10;i++){
            arr[i]+=<tr><td>{this.state.rows[i].name}</td><td>{this.state.rows[i].id}</td></tr>;
        }
        setRow(document.getElementsByClassName("myCoins").append(arr));
        //do we need <React.Fragment><tr><td></td></tr></React.Fragment> in return????
    }
    return(
        <>
        <h3>My coins</h3>
          <table className="myCoins">
           {tenRows}
          </table>
          <button type="button" onClick={Ex.restart}>Restart</button>
        </>
    )
}
export default TableEx