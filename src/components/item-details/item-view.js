import React from "react";

const ItemView = ({item, image, children}) => {
  const { name } = item;

  return (
    <React.Fragment>
      <img className="item-image"
         src={image}
         alt={`Item image`}/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
      </div>
    </React.Fragment>
  )
}

export default ItemView;