import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categoriesFromData = items.map(item=>item.category);
const menuCategories = new Set(categoriesFromData).add('all');

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = category => {
      if(category === 'all') {
          setMenuItems(items);
          return
      }
      setMenuItems(items.filter(item => item.category === category))
  };


  return <main>
    <section className="menu section">
<div className="title">
  <h2>Menu</h2>
  <div className="underline"></div>
</div>
      <Categories filterItems={filterItems} menuCategories={menuCategories}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
