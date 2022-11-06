import { useState, useEffect, useReducer } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Repos from "../components/Repos";
import Loading from "../components/Loading";
import ErrorBack from "../components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";

// icons used
import { ReactComponent as Email } from "../assets/Message.svg";
import { ReactComponent as Location } from "../assets/Location.svg";
import { ReactComponent as User } from "../assets/User.svg";
import { ReactComponent as Gist } from "../assets/Edit.svg";
import { ReactComponent as Message } from "../assets/Document.svg";
import { ReactComponent as Portfolio } from "../assets/link.svg";
import { ReactComponent as PrivateRepo } from "../assets/FolderSimpleLock.svg";
import { ReactComponent as PublicRepo } from "../assets/FolderSimpleMinus.svg";
import { ReactComponent as Following } from "../assets/following.svg";

function Home() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(6);

  const location = useLocation();

  useEffect(() => {
    fetchUser();
    fetchRepo();
  }, []);

  const url = "https://api.github.com";
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  // fetching the user
  const fetchUser = async () => {
    const response = await fetch(`${url}/users/Shile01`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setUser(data);
    setLoading(false);
  };

  // fetching the repos
  const fetchRepo = async () => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 20,
    });
    const response = await fetch(`${url}/users/Shile01/repos?${params}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setRepos(data);
    setLoading(false);
  };

  if (loading) return <Loading />;

  // Pagination logic
  const indexOfLastNumber = currentPage * repoPerPage;
  const indexOfFirstNumber = indexOfLastNumber - repoPerPage;
  const currentRepo = repos.slice(indexOfFirstNumber, indexOfLastNumber);
  const numberOfPages = Math.ceil(repos.length / repoPerPage);

  return (
    <div className="container">
      {location.pathname === "/" ? (
        <div>
          <main className="main">
            <aside className="profile">
              {/* <p>
                <a target="_blank" rel="noreferrer" href={user.html_url}>
                  {user.html_url}
                </a>
              </p> */}
              <div className="profile-img">
                <img src={user.avatar_url} alt="" />
              </div>
              <div className="profile-info">
                <div className="bio-data">
                  <div className="first">
                    <h2 className="fullName">{user.name}</h2>
                    <p className="username">{user.login}</p>
                  </div>
                  <p className="profile_about">{user.bio}</p>
                </div>
                <ul className="other-info">
                  <li className="email items">
                    <div className="icons items">
                      <Email />
                    </div>
                    <p>{user.email}</p>
                  </li>
                  <li className="portfolio items">
                    <div className="icons">
                      <Portfolio />
                    </div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://k-opoola.netlify.app"
                      className="portfolio_link"
                    >
                      {user.blog}
                    </a>
                    {/*how to breakdown the location and get them separately */}
                  </li>
                  <li className="location items">
                    <div className="icons">
                      <Location />
                    </div>
                    <p>{user.location}</p>
                  </li>
                </ul>
                <div className="git-data">
                  <ul className="first-info">
                    <li>
                      <div>
                        <h4 className="followers">Followers</h4>
                        <p className="followers_count">{user.followers}</p>
                      </div>
                      <div className="icons">
                        <User />
                      </div>
                    </li>
                    <li>
                      <div>
                        <h4 className="private_repo">Private Repo</h4>
                        <p className="private_repo__count">
                          {user.total_private_repos}
                        </p>
                      </div>
                      <div className="icons">
                        <PrivateRepo />
                      </div>
                    </li>
                  </ul>
                  <ul className="second-info">
                    <li>
                      <div>
                        <h4 className="following">Following</h4>
                        <p className="following_count">{user.following}</p>
                      </div>
                      <div className="icons">
                        <Following />
                      </div>
                    </li>
                    <li>
                      <div>
                        <h4 className="public_re[p">Public Repos</h4>
                        <p className="public_repo__count">
                          {user.public_repos}
                        </p>
                      </div>
                      <div className="icons">
                        <PublicRepo />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            <section className="repo-side">
              <Repos currentRepo={currentRepo} />
              <Pagination
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </section>
            <footer className="footer">
              <p>
                AltSchool Africa Second Semester Exam by Opoola Khalid Olayiwola{" "}
                <span className="student-id">ALT/SEO/022/5055</span>
              </p>
            </footer>
            <div className="mobilenavigation">
              <ErrorBoundary FallbackComponent={ErrorBack}>
                <Pagination
                  numberOfPages={numberOfPages}
                  currPage={currentPage}
                  setCurrPage={setCurrentPage}
                />
              </ErrorBoundary>
            </div>
          </main>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Home;
