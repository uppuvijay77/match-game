import './index.css'

const TabItem = props => {
  const {tabDetails, toggleTabBtn, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabBtn = () => {
    toggleTabBtn(tabId)
  }

  const activeBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="list-container">
      <button
        className={`tab-btn ${activeBtnClassName}`}
        type="button"
        onClick={onClickTabBtn}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
