import * as React from "react";

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

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
    });
  }

  render() {
    const { selectedLanguage } = this.state;
    return (
      <main>
        <LanguageNav
          onUpdateLanguage={this.updateLanguage}
          selectedLanguage={selectedLanguage}
        />
        {JSON.stringify(this.state, null, 2)}
      </main>
    );
  }
}
