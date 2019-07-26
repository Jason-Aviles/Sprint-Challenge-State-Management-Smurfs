import React from 'react';
import DeleteButton from './DeleteButton '

import { Link}  from 'react-router-dom'
const SmurfItem = (props) => {
  const {name,age,height,id}=props.smurf

    return (
        <div style={{marginBottom:'3%', marginTop:'5%'}}  className="ui cards">
        <div className="card">
           <h1 className="header"> NAME: {name}</h1>
           <h3 className="meta">AGE: {age}</h3>
           <h4 className="description">HEIGHT: {height}</h4>
           <p className="description">id:{id}</p>
           <div className="ui two buttons">
           <Link  to='/'>

              <DeleteButton  smurfIds={id} history={props.history.history}/>  
           </Link>
          
           <Link style={{marginLeft:'20%', borderRadius:'5px'}} className="ui basic green button"  to={`/smurfs/${id}`}>Edit</Link>
           
          </div> </div>
        </div>
    );
}

export default SmurfItem;
