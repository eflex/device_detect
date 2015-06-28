module.exports = {
  device: {
    "iPhone": "iPhone",
    "iPad": "iPad",
    "iPod": "iPod",
    "Mobile": "mobi|tablet",
    "TV": "GoogleTV|SmartTV|Internet TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML|Xbox|PLAYSTATION 3|Wii",
    "Crawler": "(googlebot)|(mediapartners)|(facebot)|(adsbot)|(msnbot)|(bingbot)|(Yo(u)?daoBot)|(Ya)(andex|DirectBot)|(baiduspider)|(duckduckbot)|(slurp)|(blekkobot)|(scribdbot)|(asterias)|(DoCoMo)|(Sogou)|(ichiro)|(moget)|(NaverBot)|(MJ12bot)",
  },
  os: {
    "AndroidOS": "Android",
    "iOS": "iPhone|iPod|iPad",
    "MacOS": "Macintosh|PowerPC",
    "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
    "WindowsPhoneOS": "Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
    "Windows": "Windows(NT|XP|ME|9)?",
    "Linux": "Linux|X11",
    "BlackBerryOS": "blackberry|BB10|rim tablet os"
  },
  browsers: {
    "Chrome": "Chrome|CrMo|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
    "Safari": "Safari|Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
    "Firefox": "Firefox",
    "Opera": "Opera(.*Mini|.*Mobi)?",
    "IE": "MSIE|IEMobile"
  }
}
