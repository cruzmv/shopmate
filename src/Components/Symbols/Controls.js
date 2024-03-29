import React from 'react'

class NumberRed extends React.Component{
    render(){
        return(
            <div id="numbag" className="numberCircle numberCircle-red">{this.props.number}</div>
        )
    }
}
 /*
            <svg width="24px" height="27px" viewBox="0 0 24 27" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="numbag">
              <defs>
                <rect width="24" height="27" id="NumberRed" />
                <clipPath id="clip_1">
                  <use xlinkHref="#NumberRed" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g id="ccontrolsnuRed" clipPath="url(#clip_1)">
                <use xlinkHref="#NumberRed" stroke="none" fill="transparent" />
                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" transform="translate(0 3)" id="ccontrolsnuRed-bg" fill="#F62F5E" stroke="none" />
                <g id="ccontrolsnuRed-a" fill="#FFFFFF" transform="translate(8.864 0)">
                <text x={this.props.number>9 ? "-20%": "0%"} y="75%">{this.props.number}</text>
                </g>
              </g>
            </svg>
*/
class NumberWhite extends React.Component{
    render(){
        return(
            <div id="numbag" className="numberCircle numberCircle-white">{this.props.number}</div>
        )
    }
}
/* 
            <svg width="24px" height="27px" viewBox="0 0 24 27" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="numbag">
              <desc>Created with Lunacy</desc>
              <defs>
                <rect width="24" height="27" id="NumberWhite" />
                <clipPath id="clip_1">
                  <use xlinkHref="#NumberWhite" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g id="controlsnuWhite" clipPath="url(#clip_1)">
                <use xlinkHref="#NumberWhite" stroke="none" fill="transparent" />
                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" transform="translate(0 3)" id="controlsnuWhite-bg" fill="#FFFFFF" stroke="none" />
                <g id="controlsnuWhite-a" fill="#F62F5E" transform="translate(6.904 0)">
                    <text x={this.props.number>9 ? "-20%": "0%"} y="75%">{this.props.number}</text>
                </g>
              </g>
            </svg>

*/

class NumberPagingLight extends React.Component{
    render(){
        return(
            <svg width="76px" height="12px" viewBox="0 0 76 12" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" id="#controlspaLight-a1" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(16 0)" id="#controlspaLight-a2" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(32 0)" id="#controlspaLight-a2" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(48 0)" id="#controlspaLight-a2" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(64 0)" id="#controlspaLight-a2" />
                <rect width="76" height="12" id="NumberPagingLight" />
                <clipPath id="clip_1">
                  <use xlinkHref="#NumberPagingLight" clipRule="evenodd" />
                </clipPath>
                <clipPath id="clip_2">
                  <use xlinkHref="#path_1" />
                </clipPath>
                <clipPath id="clip_3">
                  <use xlinkHref="#path_2" />
                </clipPath>
                <clipPath id="clip_4">
                  <use xlinkHref="#path_3" />
                </clipPath>
                <clipPath id="clip_5">
                  <use xlinkHref="#path_4" />
                </clipPath>
                <clipPath id="clip_6">
                  <use xlinkHref="#path_5" />
                </clipPath>
              </defs>
              <g id="controlspa" clipPath="url(#clip_1)">
                <use xlinkHref="#NumberPagingLight" stroke="none" fill="#FFFFFF" />
                <g id="controlspaLight-a1">
                  <g clip-path="url(#clip_2)">
                    <use xlinkHref="#path_1" fill="none" stroke="#FFFFFF" stroke-width="4" />
                  </g>
                </g>
                <g id="active">
                  <use stroke="none" fill="#FFFFFF" xlinkHref="#path_2" />
                  <g clip-path="url(#clip_3)">
                    <use xlinkHref="#path_2" fill="none" stroke="#FFFFFF" stroke-width="4" />
                  </g>
                </g>
                <g id="#controlspaLight-a2">
                  <g clip-path="url(#clip_4)">
                    <use xlinkHref="#path_3" fill="none" stroke="#FFFFFF" stroke-width="4" />
                  </g>
                </g>
                <g id="#controlspaLight-a2">
                  <g clip-path="url(#clip_5)">
                    <use xlinkHref="#path_4" fill="none" stroke="#FFFFFF" stroke-width="4" />
                  </g>
                </g>
                <g id="#controlspaLight-a2">
                  <g clip-path="url(#clip_6)">
                    <use xlinkHref="#path_5" fill="none" stroke="#FFFFFF" stroke-width="4" />
                  </g>
                </g>
              </g>
            </svg>
        )
    }
}

class NumberPagingDark extends React.Component{
    render(){
        return(
            <svg width="76px" height="12px" viewBox="0 0 76 12" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" id="controlspaDark-a" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(32 0)" id="controlspaDark-a" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(48 0)" id="controlspaDark-a" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(64 0)" id="controlspaDark-a" />
                <rect width="76" height="12" id="NumberPagingDark" />
                <clipPath id="clip_1">
                  <use xlinkHref="#NumberPagingDark" clipRule="evenodd" />
                </clipPath>
                <clipPath id="clip_2">
                  <use xlinkHref="#path_1" />
                </clipPath>
                <clipPath id="clip_3">
                  <use xlinkHref="#path_2" />
                </clipPath>
                <clipPath id="clip_4">
                  <use xlinkHref="#path_3" />
                </clipPath>
                <clipPath id="clip_5">
                  <use xlinkHref="#path_4" />
                </clipPath>
              </defs>
              <g id="controlspa" clipPath="url(#clip_1)">
                <use xlinkHref="#NumberPagingDark" stroke="none" fill="#FFFFFF" />
                <g id="controlspaDark-a">
                  <g clipPath="url(#clip_2)">
                    <use xlinkHref="#path_2" fill="none" stroke="#000000" strokeOpacity="0.2" strokeWidth="4" />
                  </g>
                </g>
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(16 0)" id="controlspaDark-active" fill="#000000" fillOpacity="0.4" stroke="none" />
                <g id="controlspaDark-a">
                  <g clipPath="url(#clip_3)">
                    <use xlinkHref="#path_3" fill="none" stroke="#000000" strokeOpacity="0.2" strokeWidth="4" />
                  </g>
                </g>
                <g id="controlspaDark-a">
                  <g clipPath="url(#clip_4)">
                    <use xlinkHref="#path_4" fill="none" stroke="#000000" strokeOpacity="0.2" strokeWidth="4" />
                  </g>
                </g>
                <g id="controlspaDark-a">
                  <g clipPath="url(#clip_5)">
                    <use xlinkHref="#path_5" fill="none" stroke="#000000" strokeOpacity="0.2" strokeWidth="4" />
                  </g>
                </g>
              </g>
            </svg>
        )
    }
}

class CheckOn extends React.Component{
    render(){
        return(
            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path d="M4 0L12 0Q12.205 0 12.4069 0.0186425Q12.6087 0.037285 12.8057 0.0744179Q13.0028 0.111551 13.1934 0.166871Q13.384 0.222192 13.5667 0.295249Q13.7493 0.368306 13.9225 0.458503Q14.0957 0.5487 14.258 0.655303Q14.4203 0.761905 14.5704 0.884043Q14.7205 1.00618 14.8571 1.14286Q14.9938 1.27953 15.116 1.42964Q15.2381 1.57974 15.3447 1.74204Q15.4513 1.90434 15.5415 2.07752Q15.6317 2.2507 15.7048 2.43334Q15.7778 2.61598 15.8331 2.8066Q15.8885 2.99721 15.9256 3.19425Q15.9627 3.39129 15.9814 3.59314Q16 3.79499 16 4L16 12.0645Q16 12.2696 15.9814 12.4714Q15.9627 12.6733 15.9256 12.8703Q15.8884 13.0673 15.8331 13.2579Q15.7778 13.4486 15.7048 13.6312Q15.6317 13.8138 15.5415 13.987Q15.4513 14.1602 15.3447 14.3225Q15.2381 14.4848 15.116 14.6349Q14.9938 14.785 14.8571 14.9217Q14.7205 15.0584 14.5704 15.1805Q14.4203 15.3026 14.258 15.4092Q14.0957 15.5158 13.9225 15.606Q13.7493 15.6962 13.5667 15.7693Q13.384 15.8423 13.1934 15.8977Q13.0028 15.953 12.8058 15.9901Q12.6087 16.0273 12.4069 16.0459Q12.205 16.0645 12 16.0645L4 16.0645Q3.79499 16.0645 3.59314 16.0459Q3.39129 16.0273 3.19425 15.9901Q2.99721 15.953 2.8066 15.8977Q2.61598 15.8423 2.43334 15.7693Q2.2507 15.6962 2.07752 15.606Q1.90434 15.5158 1.74204 15.4092Q1.57974 15.3026 1.42964 15.1805Q1.27953 15.0584 1.14286 14.9217Q1.00618 14.785 0.884043 14.6349Q0.761905 14.4848 0.655303 14.3225Q0.5487 14.1602 0.458503 13.987Q0.368306 13.8138 0.295249 13.6312Q0.222192 13.4486 0.166871 13.2579Q0.111551 13.0673 0.0744179 12.8703Q0.037285 12.6733 0.0186425 12.4714Q0 12.2696 0 12.0645L0 4Q0 3.79499 0.0186425 3.59314Q0.037285 3.39129 0.0744179 3.19425Q0.111551 2.99721 0.166871 2.8066Q0.222192 2.61598 0.295249 2.43334Q0.368306 2.2507 0.458503 2.07752Q0.5487 1.90434 0.655303 1.74204Q0.761905 1.57974 0.884043 1.42964Q1.00618 1.27953 1.14286 1.14286Q1.27953 1.00618 1.42964 0.884043Q1.57974 0.761905 1.74204 0.655303Q1.90434 0.5487 2.07752 0.458503Q2.2507 0.368306 2.43334 0.295249Q2.61598 0.222192 2.8066 0.166871Q2.99721 0.111551 3.19425 0.0744179Q3.39129 0.037285 3.59314 0.0186425Q3.79499 0 4 0Z" id="path_1" />
                <rect width="16" height="16" id="CheckOn" />
                <clipPath id="clip_1">
                  <use xlinkHref="#CheckOn" clipRule="evenodd" />
                </clipPath>
                <clipPath id="clip_2">
                  <use xlinkHref="#CheckOn" />
                </clipPath>
              </defs>
              <g id="controlschOn" clipPath="url(#clip_1)">
                <use xlinkHref="#artboard_1" stroke="none" fill="#FFFFFF" />
                <g id="controlschOn-bg">
                  <use stroke="none" fill="#6EB2FB" xlinkHref="#path_1" />
                  <g clip-path="url(#clip_2)">
                    <use xlinkHref="#path_1" fill="none" stroke="#6EB2FB" strokeWidth="2" />
                  </g>
                </g>
                <path d="M0 1.9615L3.00918 4.98663L8.02928 0" transform="translate(4.04275 6.057743)" id="controlschOn-check" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>
        )
    }
}

class CheckOff extends React.Component{
    render(){
        return(
            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <rect width="16" height="16" id="CheckOff" />
                <clipPath id="clip_1">
                  <use xlinkHref="#CheckOff" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g id="controlschOff" clipPath="url(#clip_1)">
                <use xlinkHref="#CheckOff" stroke="none" fill="#FFFFFF" />
                <path d="M4 0L12 0Q12.205 0 12.4069 0.0186425Q12.6087 0.037285 12.8057 0.0744179Q13.0028 0.111551 13.1934 0.166871Q13.384 0.222192 13.5667 0.295249Q13.7493 0.368306 13.9225 0.458503Q14.0957 0.5487 14.258 0.655303Q14.4203 0.761905 14.5704 0.884043Q14.7205 1.00618 14.8571 1.14286Q14.9938 1.27953 15.116 1.42964Q15.2381 1.57974 15.3447 1.74204Q15.4513 1.90434 15.5415 2.07752Q15.6317 2.2507 15.7048 2.43334Q15.7778 2.61598 15.8331 2.8066Q15.8885 2.99721 15.9256 3.19425Q15.9627 3.39129 15.9814 3.59314Q16 3.79499 16 4L16 11.9357Q16 12.1407 15.9814 12.3426Q15.9627 12.5444 15.9256 12.7415Q15.8884 12.9385 15.8331 13.1291Q15.7778 13.3197 15.7048 13.5024Q15.6317 13.685 15.5415 13.8582Q15.4513 14.0314 15.3447 14.1937Q15.2381 14.356 15.116 14.5061Q14.9938 14.6562 14.8571 14.7929Q14.7205 14.9295 14.5704 15.0517Q14.4203 15.1738 14.258 15.2804Q14.0957 15.387 13.9225 15.4772Q13.7493 15.5674 13.5667 15.6405Q13.384 15.7135 13.1934 15.7689Q13.0028 15.8242 12.8058 15.8613Q12.6087 15.8984 12.4069 15.9171Q12.205 15.9357 12 15.9357L4 15.9357Q3.79499 15.9357 3.59314 15.9171Q3.39129 15.8984 3.19425 15.8613Q2.99721 15.8242 2.8066 15.7689Q2.61598 15.7135 2.43334 15.6405Q2.2507 15.5674 2.07752 15.4772Q1.90434 15.387 1.74204 15.2804Q1.57974 15.1738 1.42964 15.0517Q1.27953 14.9295 1.14286 14.7929Q1.00618 14.6562 0.884043 14.5061Q0.761905 14.356 0.655303 14.1937Q0.5487 14.0314 0.458503 13.8582Q0.368306 13.685 0.295249 13.5024Q0.222192 13.3197 0.166871 13.1291Q0.111551 12.9385 0.0744179 12.7415Q0.037285 12.5444 0.0186425 12.3426Q0 12.1407 0 11.9357L0 4Q0 3.79499 0.0186425 3.59314Q0.037285 3.39129 0.0744179 3.19425Q0.111551 2.99721 0.166871 2.8066Q0.222192 2.61598 0.295249 2.43334Q0.368306 2.2507 0.458503 2.07752Q0.5487 1.90434 0.655303 1.74204Q0.761905 1.57974 0.884043 1.42964Q1.00618 1.27953 1.14286 1.14286Q1.27953 1.00618 1.42964 0.884043Q1.57974 0.761905 1.74204 0.655303Q1.90434 0.5487 2.07752 0.458503Q2.2507 0.368306 2.43334 0.295249Q2.61598 0.222192 2.8066 0.166871Q2.99721 0.111551 3.19425 0.0744179Q3.39129 0.037285 3.59314 0.0186425Q3.79499 0 4 0Z" id="controlschOff-bg" fill="#EFEFEF" stroke="none" />
              </g>
            </svg>
        )
    }
}

class RadioOn extends React.Component{
    render(){
        return(
            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path d="M8 0L8 0Q8.20491 0 8.40845 0.009326Q8.61198 0.018652 8.81373 0.037285Q9.01548 0.055918 9.21502 0.0838199Q9.41457 0.111722 9.6115 0.148836Q9.80844 0.18595 10.0024 0.2322Q10.1963 0.27845 10.3868 0.333743Q10.5773 0.389035 10.7641 0.453256Q10.9508 0.517478 11.1333 0.590497Q11.3159 0.663517 11.4939 0.745186Q11.6719 0.826855 11.845 0.917006Q12.0181 1.00716 12.1859 1.10561Q12.3537 1.20406 12.5159 1.31061Q12.6781 1.41715 12.8344 1.53158Q12.9907 1.64601 13.1407 1.76809Q13.2908 1.89016 13.4342 2.01963Q13.5777 2.14911 13.7143 2.28571Q13.8509 2.42232 13.9804 2.56578Q14.1098 2.70925 14.2319 2.85927Q14.354 3.0093 14.4684 3.16558Q14.5828 3.32186 14.6894 3.48408Q14.7959 3.6463 14.8944 3.81412Q14.9928 3.98195 15.083 4.15504Q15.1731 4.32813 15.2548 4.50613Q15.3365 4.68413 15.4095 4.86668Q15.4825 5.04923 15.5467 5.23595Q15.611 5.42268 15.6663 5.61319Q15.7216 5.80371 15.7678 5.99764Q15.8141 6.19157 15.8512 6.3885Q15.8883 6.58544 15.9162 6.78498Q15.9441 6.98453 15.9627 7.18627Q15.9813 7.38802 15.9907 7.59155Q16 7.79509 16 8L16 8Q16 8.20491 15.9907 8.40845Q15.9813 8.61198 15.9627 8.81373Q15.9441 9.01548 15.9162 9.21502Q15.8883 9.41457 15.8512 9.6115Q15.8141 9.80844 15.7678 10.0024Q15.7216 10.1963 15.6663 10.3868Q15.611 10.5773 15.5467 10.7641Q15.4825 10.9508 15.4095 11.1333Q15.3365 11.3159 15.2548 11.4939Q15.1731 11.6719 15.083 11.845Q14.9928 12.0181 14.8944 12.1859Q14.7959 12.3537 14.6894 12.5159Q14.5828 12.6781 14.4684 12.8344Q14.354 12.9907 14.2319 13.1407Q14.1098 13.2908 13.9804 13.4342Q13.8509 13.5777 13.7143 13.7143Q13.5777 13.8509 13.4342 13.9804Q13.2908 14.1098 13.1407 14.2319Q12.9907 14.354 12.8344 14.4684Q12.6781 14.5828 12.5159 14.6894Q12.3537 14.7959 12.1859 14.8944Q12.0181 14.9928 11.845 15.083Q11.6719 15.1731 11.4939 15.2548Q11.3159 15.3365 11.1333 15.4095Q10.9508 15.4825 10.764 15.5467Q10.5773 15.611 10.3868 15.6663Q10.1963 15.7216 10.0024 15.7678Q9.80844 15.8141 9.6115 15.8512Q9.41457 15.8883 9.21502 15.9162Q9.01548 15.9441 8.81373 15.9627Q8.61198 15.9813 8.40845 15.9907Q8.20491 16 8 16L8 16Q7.79509 16 7.59155 15.9907Q7.38802 15.9813 7.18627 15.9627Q6.98453 15.9441 6.78498 15.9162Q6.58544 15.8883 6.3885 15.8512Q6.19157 15.8141 5.99764 15.7678Q5.80371 15.7216 5.6132 15.6663Q5.42268 15.611 5.23595 15.5467Q5.04923 15.4825 4.86668 15.4095Q4.68413 15.3365 4.50613 15.2548Q4.32813 15.1731 4.15504 15.083Q3.98195 14.9928 3.81412 14.8944Q3.6463 14.7959 3.48408 14.6894Q3.32186 14.5828 3.16558 14.4684Q3.0093 14.354 2.85927 14.2319Q2.70925 14.1098 2.56578 13.9804Q2.42232 13.8509 2.28571 13.7143Q2.14911 13.5777 2.01963 13.4342Q1.89016 13.2908 1.76809 13.1407Q1.64601 12.9907 1.53158 12.8344Q1.41715 12.6781 1.31061 12.5159Q1.20406 12.3537 1.10561 12.1859Q1.00716 12.0181 0.917006 11.845Q0.826855 11.6719 0.745186 11.4939Q0.663517 11.3159 0.590497 11.1333Q0.517478 10.9508 0.453256 10.764Q0.389035 10.5773 0.333743 10.3868Q0.27845 10.1963 0.2322 10.0024Q0.18595 9.80844 0.148836 9.6115Q0.111722 9.41457 0.0838199 9.21502Q0.055918 9.01548 0.037285 8.81373Q0.018652 8.61198 0.009326 8.40845Q0 8.20491 0 8L0 8Q0 7.79509 0.009326 7.59155Q0.018652 7.38802 0.037285 7.18627Q0.055918 6.98453 0.0838199 6.78498Q0.111722 6.58544 0.148836 6.3885Q0.18595 6.19157 0.2322 5.99764Q0.27845 5.80371 0.333743 5.6132Q0.389035 5.42268 0.453256 5.23595Q0.517478 5.04923 0.590497 4.86668Q0.663517 4.68413 0.745186 4.50613Q0.826855 4.32813 0.917006 4.15504Q1.00716 3.98195 1.10561 3.81412Q1.20406 3.6463 1.31061 3.48408Q1.41715 3.32186 1.53158 3.16558Q1.64601 3.0093 1.76809 2.85927Q1.89016 2.70925 2.01963 2.56578Q2.14911 2.42232 2.28571 2.28571Q2.42232 2.14911 2.56578 2.01963Q2.70925 1.89016 2.85927 1.76809Q3.0093 1.64601 3.16558 1.53158Q3.32186 1.41715 3.48408 1.31061Q3.6463 1.20406 3.81412 1.10561Q3.98195 1.00716 4.15504 0.917006Q4.32813 0.826855 4.50613 0.745186Q4.68413 0.663517 4.86668 0.590497Q5.04923 0.517478 5.23595 0.453256Q5.42268 0.389035 5.61319 0.333743Q5.80371 0.27845 5.99764 0.2322Q6.19157 0.18595 6.3885 0.148836Q6.58544 0.111722 6.78498 0.0838199Q6.98453 0.055918 7.18627 0.037285Q7.38802 0.018652 7.59155 0.009326Q7.79509 0 8 0Z" id="path_1" />
                <rect width="16" height="16" id="RadioOn" />
                <clipPath id="clip_1">
                  <use xlinkHref="#RadioOn" clipRule="evenodd" />
                </clipPath>
                <clipPath id="clip_2">
                  <use xlinkHref="#path_1" />
                </clipPath>
              </defs>
              <g id="controlsraOn" clipPath="url(#clip_1)">
                <use xlinkHref="#RadioOn" stroke="none" fill="#FFFFFF" />
                <g id="controlsraOn-bg">
                  <use stroke="none" fill="#6EB2FB" xlinkHref="#path_1" />
                  <g clip-path="url(#clip_2)">
                    <use xlinkHref="#path_1" fill="none" stroke="#fff" strokeWidth="4" />
                  </g>
                </g>
              </g>
            </svg>
        )
    }
}

class RadioOff extends React.Component{
    render(){
        return(
            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <rect width="16" height="16" id="RadioOff" />
                <clipPath id="clip_1">
                  <use xlinkHref="#RadioOff" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g id="controlsraOff" clipPath="url(#clip_1)">
                <use xlinkHref="#RadioOff" stroke="none" fill="#FFFFFF" />
                <path d="M8 0L8 0Q8.20491 0 8.40845 0.009326Q8.61198 0.018652 8.81373 0.037285Q9.01548 0.055918 9.21502 0.0838199Q9.41457 0.111722 9.6115 0.148836Q9.80844 0.18595 10.0024 0.2322Q10.1963 0.27845 10.3868 0.333743Q10.5773 0.389035 10.7641 0.453256Q10.9508 0.517478 11.1333 0.590497Q11.3159 0.663517 11.4939 0.745186Q11.6719 0.826855 11.845 0.917006Q12.0181 1.00716 12.1859 1.10561Q12.3537 1.20406 12.5159 1.31061Q12.6781 1.41715 12.8344 1.53158Q12.9907 1.64601 13.1407 1.76809Q13.2908 1.89016 13.4342 2.01963Q13.5777 2.14911 13.7143 2.28571Q13.8509 2.42232 13.9804 2.56578Q14.1098 2.70925 14.2319 2.85927Q14.354 3.0093 14.4684 3.16558Q14.5828 3.32186 14.6894 3.48408Q14.7959 3.6463 14.8944 3.81412Q14.9928 3.98195 15.083 4.15504Q15.1731 4.32813 15.2548 4.50613Q15.3365 4.68413 15.4095 4.86668Q15.4825 5.04923 15.5467 5.23595Q15.611 5.42268 15.6663 5.61319Q15.7216 5.80371 15.7678 5.99764Q15.8141 6.19157 15.8512 6.3885Q15.8883 6.58544 15.9162 6.78498Q15.9441 6.98453 15.9627 7.18627Q15.9813 7.38802 15.9907 7.59155Q16 7.79509 16 8L16 8Q16 8.20491 15.9907 8.40845Q15.9813 8.61198 15.9627 8.81373Q15.9441 9.01548 15.9162 9.21502Q15.8883 9.41457 15.8512 9.6115Q15.8141 9.80844 15.7678 10.0024Q15.7216 10.1963 15.6663 10.3868Q15.611 10.5773 15.5467 10.7641Q15.4825 10.9508 15.4095 11.1333Q15.3365 11.3159 15.2548 11.4939Q15.1731 11.6719 15.083 11.845Q14.9928 12.0181 14.8944 12.1859Q14.7959 12.3537 14.6894 12.5159Q14.5828 12.6781 14.4684 12.8344Q14.354 12.9907 14.2319 13.1407Q14.1098 13.2908 13.9804 13.4342Q13.8509 13.5777 13.7143 13.7143Q13.5777 13.8509 13.4342 13.9804Q13.2908 14.1098 13.1407 14.2319Q12.9907 14.354 12.8344 14.4684Q12.6781 14.5828 12.5159 14.6894Q12.3537 14.7959 12.1859 14.8944Q12.0181 14.9928 11.845 15.083Q11.6719 15.1731 11.4939 15.2548Q11.3159 15.3365 11.1333 15.4095Q10.9508 15.4825 10.764 15.5467Q10.5773 15.611 10.3868 15.6663Q10.1963 15.7216 10.0024 15.7678Q9.80844 15.8141 9.6115 15.8512Q9.41457 15.8883 9.21502 15.9162Q9.01548 15.9441 8.81373 15.9627Q8.61198 15.9813 8.40845 15.9907Q8.20491 16 8 16L8 16Q7.79509 16 7.59155 15.9907Q7.38802 15.9813 7.18627 15.9627Q6.98453 15.9441 6.78498 15.9162Q6.58544 15.8883 6.3885 15.8512Q6.19157 15.8141 5.99764 15.7678Q5.80371 15.7216 5.6132 15.6663Q5.42268 15.611 5.23595 15.5467Q5.04923 15.4825 4.86668 15.4095Q4.68413 15.3365 4.50613 15.2548Q4.32813 15.1731 4.15504 15.083Q3.98195 14.9928 3.81412 14.8944Q3.6463 14.7959 3.48408 14.6894Q3.32186 14.5828 3.16558 14.4684Q3.0093 14.354 2.85927 14.2319Q2.70925 14.1098 2.56578 13.9804Q2.42232 13.8509 2.28571 13.7143Q2.14911 13.5777 2.01963 13.4342Q1.89016 13.2908 1.76809 13.1407Q1.64601 12.9907 1.53158 12.8344Q1.41715 12.6781 1.31061 12.5159Q1.20406 12.3537 1.10561 12.1859Q1.00716 12.0181 0.917006 11.845Q0.826855 11.6719 0.745186 11.4939Q0.663517 11.3159 0.590497 11.1333Q0.517478 10.9508 0.453256 10.764Q0.389035 10.5773 0.333743 10.3868Q0.27845 10.1963 0.2322 10.0024Q0.18595 9.80844 0.148836 9.6115Q0.111722 9.41457 0.0838199 9.21502Q0.055918 9.01548 0.037285 8.81373Q0.018652 8.61198 0.009326 8.40845Q0 8.20491 0 8L0 8Q0 7.79509 0.009326 7.59155Q0.018652 7.38802 0.037285 7.18627Q0.055918 6.98453 0.0838199 6.78498Q0.111722 6.58544 0.148836 6.3885Q0.18595 6.19157 0.2322 5.99764Q0.27845 5.80371 0.333743 5.6132Q0.389035 5.42268 0.453256 5.23595Q0.517478 5.04923 0.590497 4.86668Q0.663517 4.68413 0.745186 4.50613Q0.826855 4.32813 0.917006 4.15504Q1.00716 3.98195 1.10561 3.81412Q1.20406 3.6463 1.31061 3.48408Q1.41715 3.32186 1.53158 3.16558Q1.64601 3.0093 1.76809 2.85927Q1.89016 2.70925 2.01963 2.56578Q2.14911 2.42232 2.28571 2.28571Q2.42232 2.14911 2.56578 2.01963Q2.70925 1.89016 2.85927 1.76809Q3.0093 1.64601 3.16558 1.53158Q3.32186 1.41715 3.48408 1.31061Q3.6463 1.20406 3.81412 1.10561Q3.98195 1.00716 4.15504 0.917006Q4.32813 0.826855 4.50613 0.745186Q4.68413 0.663517 4.86668 0.590497Q5.04923 0.517478 5.23595 0.453256Q5.42268 0.389035 5.61319 0.333743Q5.80371 0.27845 5.99764 0.2322Q6.19157 0.18595 6.3885 0.148836Q6.58544 0.111722 6.78498 0.0838199Q6.98453 0.055918 7.18627 0.037285Q7.38802 0.018652 7.59155 0.009326Q7.79509 0 8 0Z" id="controlsraOff-bg" fill="#EFEFEF" stroke="none" />
              </g>
            </svg>
        )
    }
}

class RadioPagingBlue extends React.Component{
    render(){
        return(
            <svg width="76px" height="12px" viewBox="0 0 76 12" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" id="controlspaBlue-a" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(32 0)" id="controlspaBlue-a" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(48 0)" id="controlspaBlue-a" />
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(64 0)" id="controlspaBlue-a" />
                <rect width="76" height="12" id="RadioPagingBlue" />
                <clipPath id="clip_1">
                  <use xlinkHref="#RadioPagingBlue" clipRule="evenodd" />
                </clipPath>
                <clipPath id="clip_2">
                  <use xlinkHref="#path_1" />
                </clipPath>
                <clipPath id="clip_3">
                  <use xlinkHref="#path_2" />
                </clipPath>
                <clipPath id="clip_4">
                  <use xlinkHref="#path_3" />
                </clipPath>
                <clipPath id="clip_5">
                  <use xlinkHref="#path_4" />
                </clipPath>
              </defs>
              <g id="controls/paging/blue" clipPath="url(#clip_1)">
                <use xlinkHref="#RadioPagingBlue" stroke="none" fill="#FFFFFF" />
                <g id="controlspaBlue-a">
                  <g clip-path="url(#clip_2)">
                    <use xlinkHref="#path_1" fill="none" stroke="#6EB2FB" strokeWidth="4" />
                  </g>
                </g>
                <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" transform="translate(16 0)" id="controlspaBlue-active" fill="#6EB2FB" stroke="none" />
                <g id="controlspaBlue-a">
                  <g clip-path="url(#clip_3)">
                    <use xlinkHref="#path_2" fill="none" stroke="#6EB2FB" strokeWidth="4" />
                  </g>
                </g>
                <g id="controlspaBlue-a">
                  <g clip-path="url(#clip_4)">
                    <use xlinkHref="#path_3" fill="none" stroke="#6EB2FB" strokeWidth="4" />
                  </g>
                </g>
                <g id="controlspaBlue-a">
                  <g clip-path="url(#clip_5)">
                    <use xlinkHref="#path_4" fill="none" stroke="#6EB2FB" strokeWidth="4" />
                  </g>
                </g>
              </g>
            </svg>
        )
    }
}

export {NumberRed, NumberWhite, 
        NumberPagingLight, NumberPagingDark, RadioPagingBlue,
        CheckOn, CheckOff, RadioOn, RadioOff }