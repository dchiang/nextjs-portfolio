const Header = (props) => {
  return (
    <section>
      <section className="hero is-small">
        <div className="hero-body"></div>
      </section>
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <div className="level">
            <div className="level-item has-text-centered">
              <img
                src="../pictures/Daniel.jpg"
                alt="https://www.linkedin.com/in/daniel-chiang-guerrero/"
                width="200"
                height="200"
              />
            </div>
            <div className="level-item">
              <p className="title">Daniel Chiang Guerrero</p>
              <p className="subtitle">portfolio</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
