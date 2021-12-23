import MultipleBars from "./MultipleBars/MultipleBars";

const Repository = (props) => {
  const repository = props.repository;

  const backgroundThemeClasses = {
    dark: [
      "has-background-light",
      "has-background-primary",
      "has-background-info",
      "has-background-grey-light",
      "has-background-success",
      "has-background-warning",
      "has-background-danger",
      "has-background-link",
    ],
    light: [
      "has-background-light",
      "has-background-primary",
      "has-background-dark",
      "has-background-grey-light",
      "has-background-success",
      "has-background-warning",
      "has-background-danger",
      "has-background-black",
    ],
  };
  const percentage = (amountUsed, totalSize) => {
    const percentage = (100 * amountUsed) / totalSize;
    return percentage.toFixed(2);
  };

  const bars = Object.entries(repository.languages.list).map(
    ([key, value], index) => {
      const backgroundClass = props.darkTheme
        ? backgroundThemeClasses.dark[index]
        : backgroundThemeClasses.light[index];
      return {
        name: key,
        size: percentage(value, repository.languages.totalSize),
        backgroundClass: backgroundClass,
      };
    }
  );
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
                bars={bars}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Repository;
