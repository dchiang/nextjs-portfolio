const Job = (props) => {
  const job = props.job;

  return (
    <div className={props.className}>
      <p
        className={`subtitle is-5 has-text-weight-semibold mb-0 has-text-${
          props.darkTheme ? "dark" : "link"
        }`}
      >
        {job.title}
      </p>
      <p className="is-size-7 mb-0">{`${job.when}, ${job.duration}`}</p>
      <p className="mb-0">{job.description}</p>
      <div className="content">
        {job.achievements ? (
          <>
            <p
              className={`subtitle is-6 has-text-weight-semibold mb-0 has-text-${
                props.darkTheme ? "dark" : "link"
              }`}
            >
              Greatest Achievements:
            </p>

            <ul className="mt-0">
              {job.achievements.map((element, index) => {
                return (
                  <li key={index}>
                    <p className="">{element}</p>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Job;
