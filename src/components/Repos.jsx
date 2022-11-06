import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RepoLink } from "../assets/external-link.svg";
import { ReactComponent as Fork } from "../assets/GitFork.svg";

function Repos({ currentRepo }) {
  return (
    <div>
      <ul className="repositories">
        {currentRepo.map((repo) => (
          <Link to={`repo/${repo.name}`}>
            <li key={repo.id} className="repository">
              <div className="top">
                <div className="open">
                  <h2 className="repo__name">{repo.name}</h2>
                  <div className="open_icon">
                    <RepoLink />
                  </div>
                  position: relative;
                </div>
                <p className="about__repo">{repo.description}</p>
              </div>
              <ul className="bottom">
                <li className="git-info__glimpse">
                  <div className="small_icon">
                    <Fork />
                  </div>
                  <p className="counts">12</p>
                </li>
                <li className="git-info__glimpse">
                  <p className="counts capitalize">{repo.visibility}</p>
                </li>
                <li className="git-info__glimpse">
                  <p className="counts states">{repo.language}</p>
                </li>
              </ul>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Repos;
