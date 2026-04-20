import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div>
            <p>Name : {country.name.common}</p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        </div>
    );
};

export default Country;