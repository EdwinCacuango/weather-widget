import React from "react";

const CardInfo = ({ title, country, urlImage, textIcon, temp, lon, lat }) => {
  return (
    <div className="py-6">
      <h1>{title}</h1>
      <p className="text-2xl my-2">{country}</p>
      <div className="flex items-center justify-around px-3 py-2">
        <img src={`http:${urlImage}`} alt={textIcon} />
        <div>
          <p className="text-lg">{textIcon}</p>
          <p>{temp}°C</p>
        </div>
      </div>
      <div>
        <iframe
          title="map"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${lon}5!3d${lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
          width="350"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default CardInfo;
