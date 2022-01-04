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
  const getLinkUrl = () => {
    const homepageUrl = new String(repository.homepageUrl);
    return homepageUrl.toLowerCase().includes("portfolio") ||
      homepageUrl == "null"
      ? ""
      : `./embedded?page=${repository.homepageUrl}`;
  };
  return (
    <div className="tile is-parent is-3">
      <a href={getLinkUrl()} className="tile is-child box ">
        <article>
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
                <img
                  src={repository.openGraphImageUrl}
                  alt={repository.homepageUrl}
                />
              </figure>
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
                <p>{repository.description}</p>
                <div>{`Last pushed: ${new Date(
                  repository.pushedAt
                ).toLocaleDateString()}`}</div>
                <MultipleBars
                  className="mt-2"
                  height="0.5rem"
                  showLegend={true}
                  bars={languagesBars}
                />
              </div>
            </div>
          </div>
        </article>
      </a>
    </div>
  );
};

export default Repository;
