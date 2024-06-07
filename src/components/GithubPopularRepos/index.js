import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {popularRepos: [], verb: 'ALL', isLoading: true, activeTab: 'ALL'}

  componentDidMount() {
    this.getReposList()
  }

  updateVerb = id => {
    this.setState(
      {
        verb: id,
        isLoading: true,
        activeTab: id,
      },
      this.getReposList,
    )
  }

  getReposList = async () => {
    const {verb} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${verb}`
    const response = await fetch(url)
    const data = await response.json()
    const popularReposList = data.popular_repos

    const formatedPopularReposList = popularReposList.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))

    this.setState({
      popularRepos: formatedPopularReposList,
      isLoading: false,
    })
  }

  render() {
    const {popularRepos, isLoading, activeTab} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="tab-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              eachData={each}
              activeTab={activeTab}
              key={each.id}
              updateVerb={this.updateVerb}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" width={50} height={50} color="#0284c7" />
          </div>
        ) : (
          <ul className="repos-container">
            {popularRepos.map(each => (
              <RepositoryItem eachData={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
