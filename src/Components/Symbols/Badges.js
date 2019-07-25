import React from 'react'

class BadgesGreen extends React.Component{
    render(){
        return(
            <svg width="57px" height="27px" viewBox="0 0 57 27" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <rect width="57" height="27" id="BadgesGreen" />
                <clipPath id="clip_1">
                  <use xlinkHref="#BadgesGreen" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g id="badgesgree" clipPath="url(#clip_1)">
                <use xlinkHref="#BadgesGreen" stroke="none" fill="#FFFFFF" />
                <path d="M0 0L57 0L57 24L0 24L0 0Z" transform="translate(0 3)" id="badgesgree-bg" fill="#00D3CA" stroke="none" />
                <g id="badgesgree-sale" fill="#FFFFFF" transform="translate(7.568001 0)">
                    <text y="60%" x="40%" dominantBaseline="middle" textAnchor="middle">{this.props.text}</text>
                </g>
              </g>
            </svg>            
        )
    }
}

class BadgesOrange extends React.Component{
    render(){
        return(
            <svg width="57px" height="26px" viewBox="0 0 57 26" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <desc>Created with Lunacy</desc>
              <defs>
                <rect width="57" height="26" id="BadgesOrange" />
                <clipPath id="clip_1">
                  <use xlinkHref="#BadgesOrange" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g id="badgesoran" clipPath="url(#clip_1)">
                <use xlinkHref="#BadgesOrange" stroke="none" fill="#FFFFFF" />
                <path d="M0 0L57 0L57 24L0 24L0 0Z" transform="translate(0 2)" id="badgesoran-bg" fill="#FE5C07" stroke="none" />
                <g id="badgesoran-pop" fill="#FFFFFF" transform="translate(10.536 0)">
                    <text y="60%" x="40%" dominantBaseline="middle" textAnchor="middle">{this.props.text}</text>
                </g>
              </g>
            </svg>
        )
    }
}


class BadgesRed extends React.Component{
    render(){
        return(
            <svg width="57px" height="27px" viewBox="0 0 57 27" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <rect width="57" height="27" id="BadgesRed" />
                <clipPath id="clip_1">
                  <use xlinkHref="#BadgesRed" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g id="badgesred" clipPath="url(#clip_1)">
                <use xlinkHref="#BadgesRed" stroke="none" fill="#FFFFFF" />
                <path d="M0 0L57 0L57 24L0 24L0 0Z" transform="translate(0 3)" id="badgesred-bg" fill="#F62F5E" stroke="none" />
                <g id="badgesred-hot" fill="#FFFFFF" transform="translate(10.84 0)">
                    <text y="60%" x="40%" dominantBaseline="middle" textAnchor="middle">{this.props.text}</text>
                </g>
              </g>
            </svg>
        )
    }
}


class BadgesBlue extends React.Component{
    render(){
        return(
            <svg width="57px" height="27px" viewBox="0 0 57 27" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <rect width="57" height="27" id="BadgesBlue" />
                <clipPath id="clip_1">
                  <use xlinkHref="#BadgesBlue" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g id="badgesblue" clipPath="url(#clip_1)">
                <use xlinkHref="#BadgesBlue" stroke="none" fill="#FFFFFF" />
                <path d="M0 0L57 0L57 24L0 24L0 0Z" transform="translate(0 3)" id="badgesblue-bg" fill="#6EB2FB" stroke="none" />
                <g id="badgesblue-blue" fill="#FFFFFF" transform="translate(5.647999 0)">
                    <text y="60%" x="40%" dominantBaseline="middle" textAnchor="middle">{this.props.text}</text>
                </g>
              </g>
            </svg>
        )
    }
}




export {BadgesGreen, BadgesOrange, BadgesRed, BadgesBlue}