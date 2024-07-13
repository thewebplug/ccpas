import { useState } from "react";

export default function Menu({ items, }) {
  const [menuModalOpenUnique, setMenuModalOpenUnique] = useState(true)
  return (
    menuModalOpenUnique && <div className="menu">
      <div className="menu__inner">
      {items?.map((item, index) => (
        <div 
          className="menu__inner__inner"
          onClick={item?.function}
          key={index}
        >
          {item?.name}
          {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L10 17L5 12" stroke="#009B07" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> */}
      </div>
      ))}
      </div>

      <div className="menu__modal"
      onClick={() => setMenuModalOpenUnique(false)}
      ></div>
      
    </div>
  );
}
