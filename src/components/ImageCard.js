import React from "react";

const ImageReact = (props) => {
  const { name, base_experience, abilities, image_url, error } = props.pokemon_data;
  let txt = "";
  abilities.forEach((a) => {
    txt += a.ability.name + ", ";
  });

  if (base_experience === 0) {
    return <div></div>;
  }
  if (error) {
    return (
      <div>
        <p className=''>
          no pokemon matches for keyword <strong>{props.input}</strong>
        </p>
      </div>
    );
  }

  return (
    <div className='ui centered card'>
      <div className='image'>
        <img src={image_url} alt={name} />
      </div>
      <div className='content'>
        <p className='header'>{name}</p>
        <div className='meta'>
          <div className='date'>{txt}</div>
        </div>
        <div className='description'>{base_experience}</div>
      </div>
    </div>
  );
};

export default ImageReact;
