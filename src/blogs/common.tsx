import React from 'react';

export const P: React.FC<any> = ({ children }) => {
  return <p className="mt-6">{children}</p>;
};

export const Quote: React.FC<any> = ({ children }) => {
  return (
    <p className="mt-6 pl-3 italic border-l-2 border-orange">{children}</p>
  );
};

export const A: React.FC<any> = ({ children, href }) => {
  return (
    <a className="underline" href={href} target="_blank">
      {children}
    </a>
  );
};

export const Heading2: React.FC<any> = ({ id, children }) => {
  return (
    <h2 id={id} className="mt-8 text-3xl font-bold">
      {children}
    </h2>
  );
};

export const Heading3: React.FC<any> = ({ id, children }) => {
  return (
    <h3 id={id} className="mt-10 text-2xl font-semibold">
      {children}
    </h3>
  );
};

export const SubTitle: React.FC<any> = ({ children }) => {
  return <p className="mt-1 text-gray-500 font-semibold">{children}</p>;
};

export const Heading4: React.FC<any> = ({ children }) => {
  return <h4 className="mt-6 text-lg font-semibold">{children}</h4>;
};

export const Divider: React.FC = () => {
  return <hr className="my-8 border-px border-orange" />;
};
