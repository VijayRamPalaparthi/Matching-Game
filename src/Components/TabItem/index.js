import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onActiveTabChange} = props
  const {displayText, tabId} = tabDetails
  const activeStyle = isActive ? 'add-active' : ''
  const changeTab = () => {
    onActiveTabChange(tabId)
  }

  return (
    <li className="tab-list-container">
      <button
        type="button"
        className={`tab-button ${activeStyle}`}
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
