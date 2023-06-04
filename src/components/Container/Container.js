import './Container.css';

export const Container = ({ children, title }) => {
  return (
    <section className="container">
      <p className="title">{title}</p>
      {children}
    </section>
  );
};
