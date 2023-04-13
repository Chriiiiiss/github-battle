import * as React from "react";
import PropTypes from "prop-types";
import { fetchPopularRepositories } from "../utils/api";
import Table from "./Table";

function LanguageNav({ selectedLanguage, onUpdateLanguage }) {
  const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
  return (
    <select
      onChange={(e) => onUpdateLanguage(e.target.value)}
      selected={selectedLanguage}
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
}

LanguageNav.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      repos: null,
      error: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
    });

    fetchPopularRepositories(selectedLanguage)
      .then((repos) =>
        this.setState({
          repos: repos,
          error: null,
        })
      )
      .catch((error) => {
        console.warn("Error fetching repos: ", error);
      });
  }

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <main className="stack main-stack animate-in">
        <div className="split">
          <h1>Popular</h1>
          <LanguageNav
            onUpdateLanguage={this.updateLanguage}
            selectedLanguage={selectedLanguage}
          />
        </div>
        {error ? <p className="text-center error">{error}</p> : null}

        {repos && <Table repos={repos} />}
      </main>
    );
  }
}
