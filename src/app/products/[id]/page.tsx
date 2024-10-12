import React from 'react';

const productSinglePage = ({params}) => {
    const {id}=params;
    console.log('id', id);
    
    return (
        <div>
            <h1>Single page</h1>
        </div>
    );
};

export default productSinglePage;