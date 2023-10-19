import React from 'react';

const Categories = ({filterItems, menuCategories}) => {

    return (
        <div className='btn-container'>
            {[...menuCategories].map(category => {
                return <button
                    key={category}
                    className='filter-btn'
                    onClick={() => filterItems(category)}
                >{category}</button>

            })}
        </div>
    );
};

export default Categories;
