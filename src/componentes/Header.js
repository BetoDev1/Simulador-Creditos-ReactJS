import React from 'react';

function Header(props){


    return(

        <div>
          <h1>{props.titulo}</h1>
          <p>{props.descripcion}</p>
        </div>
         
        
      );

}

export default Header;