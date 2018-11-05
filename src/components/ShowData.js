import React from 'react';
const ShowData = ({onShowData}) => {
    return (
        <ul>
            {
                onShowData.map( (data, id) =><li key={id}> {data} </li> )
            }
        </ul>
    );
}
 
export default ShowData;