import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'

ReactDOM.render( 
    <div>
        <Pai nome="Paulo" sobrenome="Vieira" >
            <Filho nome="Pedro" />
        </Pai>
    </div>
    , document.getElementById('root'))