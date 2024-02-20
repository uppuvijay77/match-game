import {Component} from 'react'
import TabItem from '../TabItem/index'
import ThumbnailItem from '../ThumbnailItem/index'
import './index.css'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

class MatchGame extends Component {
  state = {activeTabId: tabsList[0].tabId, score: 0, sec: 60}

  toggleTabBtn = id => {
    this.setState({activeTabId: id})
  }

  onClickThumbnail = id => {
    console.log(id)
  }

  render() {
    const {imagesList} = this.props
    console.log(imagesList)
    const {activeTabId, score, sec} = this.state

    const filteredImages = imagesList.filter(
      each => each.category === activeTabId,
    )

    return (
      <div className="bg-container">
        <div className="navbar-container">
          <div className="logo-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </div>
          <div className="score-time-container">
            <p className="score">
              Score: <span className="result-text">{score}</span>
            </p>
            <div className="time-container">
              <img
                className="clock-image"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="result-text">{sec} Sec</p>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <img
            src={imagesList[0].imageUrl}
            alt="match"
            className="match-image"
          />
          <ul className="tabs-container">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                toggleTabBtn={this.toggleTabBtn}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
          <ul className="thumbnails-container">
            {filteredImages.map(eachImage => (
              <ThumbnailItem
                key={eachImage.id}
                thumbnailDetails={eachImage}
                onClickThumbnail={this.onClickThumbnail}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MatchGame
