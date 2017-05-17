var bel = require('bel')
var csjs = require('csjs-inject')

module.exports = profile

/* --------------------------------------------------------
FONTS
---------------------------------------------------------- */

var fonts             = ['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', 'https://fonts.googleapis.com/css?family=Ubuntu']
var fontAwesome       = bel`<link href=${fonts[0]} rel='stylesheet' type='text/css'>`
var fontUbuntu        = bel`<link href=${fonts[1]} rel="stylesheet">`
var font_ubuntu       = 'Ubuntu, sans-serif'
document.head.appendChild(fontAwesome)
document.head.appendChild(fontUbuntu)

// COLORS
var cardBackground    = '#f6f6f6'
var cardBorder        = '#fafafa'
var cardDetails       = '#2a9c6d'
var green             = '#2a9c6d'
var red               = '#d41304'
var white             = '#f6f6f6'

var css = csjs`
  body {
    margin: 0;
  }
  .profileContainer {
    font-family: ${font_ubuntu};
    padding-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profileBanner {
    background-image: url(https://avatars2.githubusercontent.com/u/1076427?v=3&s=400);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    filter: opacity(0.9);
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profileTitle {
    margin-top: 1em;
    font-weight: bold;
    font-size: 2em;
    color: ${white};
  }
  .profileSubtitle {
    margin-top: .3em;
    font-size: 1.3em;
    color: ${green};
    font-weight: bold;
  }
  .profileDescription {
    margin-top: 1em;
    font-size: 1em;
    line-height: 120%;
    text-weight: bold;
    border: 2px dotted ${red};
    border-radius: 5px;
    padding: 1em;
    text-align: center;
    width: 60%;
  }
  .profileLocation {
    display: flex;
    align-items: baseline;
    margin-top: 1em;
    font-size: 1.3em;
  }
  .profileLocationIcon {
    margin-right: 2px;
    color: ${white};
  }
  .profileLocationCity {
    color: ${white};
    font-weight: bold;
  }
  .profileSocialLinks {
    margin-top: 1em;
  }
  .profileSocialLinks a {
    padding: .3em;
    text-decoration: none;
    color: ${green};
    font-size: 1.2em;
  }
  .profileSocialLinks a:hover {
    opacity: 0.8;
  }
  .profileSocialLinksIcon {
    text-decoration: none;
  }
`

function profile () {
  var name              = 'Nina'
  var username          = 'ninabreznik'
  var description       = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru'
  var imageUrl          = 'https://nomadlist.com/assets/img/cities/phuket-thailand-500px.jpg'
  var city              = 'Berlin'
  var twitter           = `https://twitter.com/${username}`
  var github            = `https://github.com/${username}`
  var codepen           = `https://codepen.io/${username}`

  var el = bel`
    <div class=${css.profileContainer}>
    <div class=${css.profileBanner}>
    <div class=${css.profileTitle}>${name}</div>
    <div class=${css.profileSubtitle}>${username}</div>
    <div class=${css.profileLocation}>
    <i class="${css.profileLocationIcon} fa fa-map-marker" aria-hidden="true"></i>
    <div class=${css.profileLocationCity}>${city}</div>
    </div>
    </div>
    <div class=${css.profileDescription}>${description}</div>
    <div class=${css.profileSocialLinks}>
    <a href=${twitter} target='_blank'>
    <i class="${css.profileSocialLinksIcon} fa fa-twitter" aria-hidden="true"></i></a>
    <a href='${github}' target='_blank'>
    <i class="${css.profileSocialLinksIcon} fa fa-github" aria-hidden="true"></i>
    </a>
    <a href=${codepen} target='_blank'>
    <i class="${css.profileSocialLinksIcon} fa fa-codepen" aria-hidden="true"></i>
    </a>
    </div>
    </div>
  `
  return el
}
