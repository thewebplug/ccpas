export default function Menu({ items, onItemClick }) {
  return (
    <div className="menu">
      {items?.map((item, index) => (
        <div 
          className="menu__inner"
          onClick={() => onItemClick(item)}
          key={index}
        >
          {item?.name}
          {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L10 17L5 12" stroke="#009B07" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> */}
      </div>
      ))}
    </div>
  );
}
