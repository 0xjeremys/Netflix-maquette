const Section = (props) => {
  return (
    <section key={props.elem.category}>
      <h2>{props.elem.category}</h2>
      <div className="img-container">
        {props.elem.images.map((url) => {
          //   console.log(url);
          return <img src={url} alt="images des films/series" key={url} />;
        })}
      </div>
    </section>
  );
};

export default Section;
