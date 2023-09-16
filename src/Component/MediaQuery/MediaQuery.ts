const screen = {
    laptop: "1250px",
    tablet: "765px"
}

const mediaQuery = {
   desktop: `(min-width: ${screen.laptop})`,
  tablet : `(min-width:${screen.tablet})`
}

export default mediaQuery;