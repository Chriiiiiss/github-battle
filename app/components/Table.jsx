import * as React from "react";
import propTypes from "prop-types";
import { hashtag } from "./icons";

function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ width: "5%" }}>{hashtag}</th>
        <th style={{ width: "50%" }}>Repository</th>
        <th style={{ width: "15%" }}>Stars</th>
        <th style={{ width: "15%" }}>Forks</th>
        <th style={{ width: "15%" }}>Open Issue</th>
      </tr>
    </thead>
  );
}

function TableRow({
  index,
  owner,
  stargazers_count,
  forks,
  open_issues,
  name,
}) {
  const { login, avatar_url } = owner;

  return (
    <tr>
      <td>{index.index + 1}</td>
      <td>
        <div className="row gap-md">
          <img
            width={32}
            height={32}
            className="avatar"
            src={avatar_url}
            alt={`Avatar for ${login}`}
          />
          <a href={`https://github.com/${login}/${name}`}>{name}</a>
        </div>
      </td>
      <td>{stargazers_count}</td>
      <td>{forks}</td>
      <td>{open_issues}</td>
    </tr>
  );
}

export default function Table({ repos }) {
  return (
    <table>
      <TableHead />
      <tbody>
        {repos.map((repo, index) => {
          return <TableRow key={index} index={index} {...repo} />;
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  repos: propTypes.array.isRequired,
};
