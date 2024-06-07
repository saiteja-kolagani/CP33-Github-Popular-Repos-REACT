// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachData} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = eachData

  return (
    <li className="repo-container">
      <img src={avatarUrl} alt={name} className="repo-avatar" />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="repo-icons"
        />
        <p className="repo-count">{`${starsCount} stars`}</p>
      </div>
      <div className="repo-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="repo-icons"
        />
        <p className="repo-count">{`${forksCount} forks`}</p>
      </div>
      <div className="repo-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="repo-icons"
        />
        <p className="repo-count">{`${issuesCount} open issues`}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
