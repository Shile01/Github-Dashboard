import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

// images
import { ReactComponent as ArrowLeft } from "../assets/Arrow-Left2.svg";
import { ReactComponent as Togit } from "../assets/Togit.svg";
import { ReactComponent as Togit2 } from "../assets/Togit2.svg";

function SingleRepo() {
  const { id } = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(true);

  const url = "https://api.github.com";
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    fetchRepo();
  }, [id]);

  // fetch single repo
  const fetchRepo = async () => {
    const response = await fetch(`${url}/repos/Shile01/${id}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setRepo(data);
    setLoading(false);
  };

  if (loading) return <Loading />;

  console.log(id);
  return (
    <div>
      <div className="reposMain">
        <div className="top-navigation">
          <button className="back">
            <ArrowLeft />
            <Link to="/">Back to Homepage</Link>
          </button>

          <a
            target="_blank"
            rel="noreferrer"
            href={repo.html_url}
            className="togit desktop-link"
          >
            <Togit2 />
            view on github
          </a>
        </div>
        <div>
          <section className="project-page__heading">
            <div className="project-page__heading-wrapper">
              <h1 className="project__name">{repo.name}</h1>
              <p className="project__des">{repo.description}</p>
            </div>
            <div className="visibility">
              <p className="capitalize">{repo.visibility}</p>
            </div>
          </section>

          <section className="project-stats">
            <h2 className="stats-heading">Repo statistics</h2>

            <ul className="minorStats">
              <li className="statistics">
                <p>{repo.forks_count} Fork(s)</p>
              </li>
              <li className="statistics">
                <p className="watching">{repo.watchers_count} Watcher(s)</p>
              </li>
              <li className="statistics">
                <p>{repo.language}</p>
              </li>
              <li className="statistics">
                <p>{repo.size} KB</p>
              </li>
            </ul>
          </section>

          <section className="other-stats">
            <h2 className="stats-heading">Other informations</h2>
            <p>Fork: {repo.language}</p>
            <p>File Size: {repo.size}kb</p>
            <p>visibility : </p>
            <p>watchers : </p>
            <p>open issues : {repo.open_issues}</p>
            <p>created_at : {repo.created_at}</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={repo.html_url}
              className="togit mobile-link"
            >
              <Togit />
              view on github
            </a>
          </section>
        </div>
        <footer className="footer">
          <p>
            AltSchool Africa Second Semester Exam by Opoola Khalid Olayiwola{" "}
            <span className="student-id">ALT/SEO/022/5055</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default SingleRepo;
