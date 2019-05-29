import React from 'react';
import {getPermissions} from './Auth'

function PermissionCheck(props) {

    return class extends React.Component {
        render() {
            const Component = props.children;
            const Dummie = props.dummieComponent
            if(getPermissions().includes(props.permission))
            return <Component/>;
            else
            return Dummie ? <Dummie/>:null
        }
      }
    
    


};

export default PermissionCheck