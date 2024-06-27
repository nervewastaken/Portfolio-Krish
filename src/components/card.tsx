import React from 'react';

interface CardProps {
  title: string;
  body: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, body, link }) => {
  return (
    <div className="card flex items-center justify-center">
      <h2>{title}</h2>
      <p>{body}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
}

export default Card;
