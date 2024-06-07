// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachData, updateVerb, activeTab} = props
  const {language, id} = eachData

  const onClickBtn = () => {
    updateVerb(id)
  }

  const tabStyle =
    id === activeTab ? 'selected-tab filter-btn-item' : 'filter-btn-item'

  return (
    <li className="filter-item">
      <button type="button" className={tabStyle} onClick={onClickBtn}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
