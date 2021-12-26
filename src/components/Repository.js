import MultipleBars from "./MultipleBars/MultipleBars";

const Repository = (props) => {
  const repository = props.repository;

  const percentage = (amountUsed, totalSize) => {
    const percentage = (100 * amountUsed) / totalSize;
    return percentage.toFixed(2);
  };

  const languagesBars = repository.languages.list.map((language) => {
    return {
      name: language.name,
      size: percentage(language.size, repository.languages.totalSize),
      backgroundColor: language.color,
    };
  });
  return (
    <div className="tile is-parent is-3">
      <article className="tile is-child box ">
        <div className="card">
          <div className="card-image">
            <a href={repository.homepageUrl}>
              <figure className="image is-2by1">
                <img
                  src={repository.openGraphImageUrl}
                  alt={repository.homepageUrl}
                />
              </figure>
            </a>
          </div>
          <div
            className={`card-content has-background-${
              props.darkTheme
                ? "black-ter has-text-white-ter"
                : "link has-text-white-ter"
            }`}
          >
            <div className="container">
              <h6 className="title is-4 has-text-white-ter">
                {repository.name}
              </h6>
              <p>{repository.description}</p> <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              {"Last pushed: "}
              <div>{new Date(repository.pushedAt).toString()}</div>
              <MultipleBars
                className="mt-2"
                height="1rem"
                showLegend={true}
                bars={languagesBars}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Repository;
