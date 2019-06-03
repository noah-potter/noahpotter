import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import clsx from 'clsx'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import NavLink from './common/NavLink'

import Collapse from '@material-ui/core/Collapse'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'

import Lightbox from 'react-images'

const backgroundImages = [
  {
    src:
      'https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    src:
      'https://images.unsplash.com/photo-1457364559154-aa2644600ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
  {
    src:
      'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    src:
      'https://images.unsplash.com/photo-1469980098053-382eb10ba017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    src:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80',
  },
  {
    src:
      'https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80',
  },
]

const frontstepsImages = [
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS(1).jpg',
    size: 'large',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS(2).jpg',
    size: 'large',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS(3).jpg',
    size: 'small',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS(4).jpg',
    size: 'small',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS(5).jpg',
    size: 'small',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS(6).jpg',
    size: 'small',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS(7).jpg',
    size: 'small',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS(8).jpg',
    size: 'small',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS(9).jpg',
    size: 'small',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/frontsteps/FRONTSTEPS.jpg',
    size: 'small',
  },
]

const radarImages = [
  {
    src: process.env.PUBLIC_URL + '/app_images/radar/development-1.png',
    size: 'large',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/radar/resource-1.png',
    size: 'large',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/radar/resource-2.png',
    size: 'small',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/radar/resource-4.png',
    size: 'small',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/radar/training-assignment.png',
    size: 'small',
  },
]

const booklavaImages = [
  {
    src: process.env.PUBLIC_URL + '/app_images/booklava/booklava-search.png',
    size: 'large',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/booklava/booklava-club.png',
    size: 'large',
  },
  {
    src: process.env.PUBLIC_URL + '/app_images/booklava/booklava-calendar.png',
    size: 'small',
  },
  {
    src:
      process.env.PUBLIC_URL + '/app_images/booklava/booklava-discussion.png',
    size: 'small',
  },
]

const breakerlistImages = [
  {
    src:
      process.env.PUBLIC_URL +
      '/app_images/breakerlist/breakerlist-charts-mobile.png',
    size: 'tall',
  },
  {
    src:
      process.env.PUBLIC_URL +
      '/app_images/breakerlist/breakerlist-exercise-mobile.png',
    size: 'tall',
  },
  {
    src:
      process.env.PUBLIC_URL +
      '/app_images/breakerlist/breakerlist-leaderboard-mobile.png',
    size: 'tall',
  },
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#d0d0d0',
      secondary: '#bdbdbd',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
      },
    },
  },
})

const border = '1px solid #ffffff2b'

const useStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sansSerif',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },
  app: { display: 'flex' },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    filter: 'grayscale(73%) brightness(35%)',
    zIndex: 0,
    width: '100%',
    height: '100%',
    objectPosition: 'top left',
    objectFit: 'cover',
  },
  appBody: {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    overflow: 'hidden',
    alignItems: 'stretch',
    zIndex: 1,
    gridTemplateAreas: `
    'left nav page'
    `,
    gridTemplateColumns: '160px 300px 1fr',
    [theme.breakpoints.down('md')]: {
      gridTemplateAreas: `
      'left nav right'
      'left page right'
      'bottom bottom bottom'
      `,
      gridTemplateColumns: '64px 1fr 64px',
      gridTemplateRows: '500px 1fr 40px',
      justifyItems: 'center',
      overflow: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '16px 1fr 16px',
    },
  },
  leftColumn: {
    gridArea: 'nav',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: border,
    borderRight: border,
    paddingBottom: 41,
    maxWidth: 900,
    [theme.breakpoints.down('md')]: {
      justifySelf: 'stretch',
      marginBottom: 70,
      paddingBottom: 0,
    },
  },
  page: {
    gridArea: 'page',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0px',
    justifyContent: 'flex-end',
    margin: '0 60px 60px',
    overflow: 'hidden',
    maxWidth: 900,
    [theme.breakpoints.down('md')]: {
      margin: 0,
      justifySelf: 'stretch',
      alignSelf: 'start',
      marginBottom: 64,
    },
  },
  separator: {
    flex: '1 1 0px',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'column',
    borderTop: border,
    borderBottom: border,
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'column',
    '&:not(:first-child)': {
      borderTop: border,
    },
    transition: 'background 700ms',
    background: 'transparent',
  },
  activeTabContainer: {
    background: '#0c1011d1',
  },
  tab: {
    padding: theme.spacing(2),
    justifyContent: 'flex-start',
    fontSize: '14px',
    transition: 'font-size 300ms',
    '&:not(:first-child)': {
      borderTop: border,
    },
  },
  activeTab: {
    fontWeight: 500,
    fontSize: '22px',
    '&:hover': {
      background: 'transparent',
    },
    cursor: 'initial',
  },
  activePageTab: {
    background: 'rgba(208, 208, 208, 0.17)',
  },
  source: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    objectPosition: 'center left',
  },
  thumbnailsContainer: {
    maskImage:
      'linear-gradient(90deg, rgba(0,0,0,1) calc(100% - 98px), rgba(0,0,0,0.6839110644257703) calc(100% - 63px), rgba(0,0,0,0.4682247899159664) calc(100% - 49px), rgba(0,0,0,0) calc(100% - 20px))',
  },
  thumbnails: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: 'repeat(auto-fill, 120px)',
    gridTemplateRows: 'repeat(2, 120px)',
    gridGap: '10px',
    // minHeight: 0,
    // minWidth: 0,
    width: '2000px',
  },
  thumbnail: {
    // width: 200,
    // height: 200,
    display: 'flex',
    border: '1px solid #ffffff2b',
    height: '100%',
    filter: 'grayscale(35%)',
  },
  largePic: {
    overflow: 'hidden',
    gridColumn: 'auto / span 2',
    gridRow: 'auto / span 2',
    width: '100%',
    height: '100%',
  },
  smallPic: {
    overflow: 'hidden',
  },
  tallPic: {
    gridRow: 'auto / span 2',
    overflow: 'hidden',
  },
})

const Description = (props) => (
  <Typography>
    <Box pb={2} {...props} />
  </Typography>
)

const PageTab = ({ view, currentView, label, children, canOpen }) => {
  const classes = useStyles()
  const viewIsCurrent = view === currentView

  return (
    <div
      className={clsx(
        classes.tabContainer,
        viewIsCurrent && classes.activeTabContainer
      )}
    >
      <Button
        disableRipple
        fontSize={14}
        component={NavLink}
        fullWidth
        to={`/projects/${view}`}
        className={`${classes.tab} ${viewIsCurrent ? classes.activeTab : ''}`}
      >
        {label}
      </Button>
      <Collapse in={canOpen && currentView === view} timeout={700}>
        <Box p={2} pt={0}>
          {children}
        </Box>
      </Collapse>
    </div>
  )
}

const Thumbnail = React.forwardRef(
  ({ size, children, imageIndex, ...props }, ref) => {
    const classes = useStyles()
    const [canOpen, setCanOpen] = useState(false)
    const [canFade, setCanFade] = useState(false)

    const baseDelay = 180
    const delayOffset = imageIndex * 50

    useEffect(() => {
      setTimeout(() => {
        setCanOpen(true)
      }, baseDelay + delayOffset)
    }, [baseDelay, delayOffset])

    useEffect(() => {
      setTimeout(() => {
        setCanFade(true)
      }, baseDelay + 100 + delayOffset)
    }, [baseDelay, delayOffset])

    return (
      <Slide in={canOpen} direction="up" timeout={400}>
        <Box
          ref={ref}
          className={clsx({
            [classes.largePic]: size === 'large',
            [classes.smallPic]: size === 'small',
            [classes.tallPic]: size === 'tall',
          })}
          {...props}
        >
          <Fade in={canFade}>{children}</Fade>
        </Box>
      </Slide>
    )
  }
)

const Thumbnails = ({ size, thumbnailsSource, onClickThumbnail, ...props }) => {
  const classes = useStyles()

  const thumbnails = thumbnailsSource.map((imgOb, index) => (
    <Thumbnail size={imgOb.size} key={index} imageIndex={index}>
      <a
        href={imgOb.src}
        className={clsx(classes.thumbnail)}
        onClick={(e) => {
          e.preventDefault()
          onClickThumbnail(thumbnailsSource, index)
        }}
      >
        <img src={imgOb.src} alt="." className={classes.source} />
      </a>
    </Thumbnail>
  ))

  return (
    <div className={classes.thumbnailsContainer}>
      <Box className={classes.thumbnails} {...props}>
        {thumbnails}
      </Box>
    </div>
  )
}

export default function() {
  const classes = useStyles()
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImage] = useState(0)
  const [canOpen, setCanOpen] = useState(false)
  const [lightboxImagesSrc, setLightboxImagesSrc] = useState(null)

  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const [nextBackgroundIndex, setNextBackgroundIndex] = useState(
    getRandomInt(backgroundImages.length)
  )
  const [showNextBackground, setShowNextBackground] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCanOpen(true)
    }, 80)
  }, [])

  const onClickThumbnail = (src, index) => {
    setIsLightboxOpen(true)
    setLightboxImagesSrc(src)
    setCurrentImage(index)
  }

  const onFinishedBackgroundTransition = () => {
    setBackgroundIndex(nextBackgroundIndex)
    setShowNextBackground(false)
  }

  useInterval(() => {
    setNextBackgroundIndex((backgroundIndex + 1) % backgroundImages.length)
    setShowNextBackground(true)
  }, 25000)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route
              path="/:page"
              render={({ location, match }) => (
                <div className={classes.app}>
                  <img
                    src={backgroundImages[backgroundIndex].src}
                    alt="background"
                    className={classes.background}
                  />
                  <Fade
                    in={showNextBackground}
                    timeout={2000}
                    onEntered={onFinishedBackgroundTransition}
                  >
                    <img
                      src={backgroundImages[nextBackgroundIndex].src}
                      alt="next background"
                      className={classes.background}
                    />
                  </Fade>
                  <div className={classes.appBody}>
                    <div className={classes.leftColumn}>
                      <Box mt={6} ml={2} mr={2} className={classes.title}>
                        <Typography variant="h3">Noah Potter</Typography>
                      </Box>
                      <Box mt={1} ml={2} mr={2} className={classes.email}>
                        <Typography variant="h6" color="textSecondary">
                          noah.potter@outlook.com
                        </Typography>
                      </Box>
                      <Box mt={4} ml={2} mr={2} className={classes.subTitle}>
                        <Typography variant="h4">Software.</Typography>
                      </Box>
                      <Box className={classes.separator} />

                      <Box className={classes.tabs}>
                        <Button
                          component={NavLink}
                          to="/projects"
                          className={classes.tab}
                          activeClassName={classes.activePageTab}
                        >
                          <Typography variant="h5">Projects</Typography>
                        </Button>
                        <Button
                          component={NavLink}
                          to="/about-me"
                          className={classes.tab}
                          activeClassName={classes.activePageTab}
                        >
                          <Typography variant="h5">About Me</Typography>
                        </Button>
                      </Box>
                    </div>
                    <Switch>
                      <Route
                        path="/projects/:view"
                        render={({ location, match }) => (
                          <Box className={classes.page}>
                            {isLightboxOpen && (
                              <Lightbox
                                images={lightboxImagesSrc}
                                isOpen
                                backdropClosesModal
                                currentImage={currentImageIndex}
                                onClickPrev={() =>
                                  setCurrentImage(
                                    (currentImageIndex - 1) %
                                      lightboxImagesSrc.length
                                  )
                                }
                                onClickNext={() =>
                                  setCurrentImage(
                                    (currentImageIndex + 1) %
                                      lightboxImagesSrc.length
                                  )
                                }
                                onClose={() => setIsLightboxOpen(false)}
                              />
                            )}
                            <Box
                              borderLeft={border}
                              borderRight={border}
                              className={classes.tabs}
                            >
                              <PageTab
                                view="frontsteps"
                                label="Frontsteps"
                                currentView={match.params.view}
                                canOpen={canOpen}
                              >
                                <Description>
                                  Frontsteps is an app that unifies security
                                  hardware (HID, Kantech, DoorKing, etc) into a
                                  simple interface that supports many types of
                                  users (residents, home owners, guards,
                                  community admins, Frontsteps employees,
                                  dealers, property management companies, etc).
                                  It orchestrates microservice API's, supports
                                  9+ roles, 150+ permissions, 60+ API resources,
                                  and provides support tools such as a super
                                  admin interface, onboarding wiki, and a
                                  Storybook site of core UI components.
                                </Description>
                                <Thumbnails
                                  onClickThumbnail={onClickThumbnail}
                                  thumbnailsSource={frontstepsImages}
                                />
                              </PageTab>
                              <PageTab
                                view="dish"
                                label="Dish"
                                currentView={match.params.view}
                                canOpen={canOpen}
                              >
                                <Description>
                                  Radar is a Dish internal tool used to manage
                                  the development of training modules that 8000+
                                  employees rely on. Radar allows users to
                                  request trainings, helps training developers
                                  manage the lifecycle of trainings, easily
                                  targets complex, custom audiences, and
                                  automatically stays up-to-date as roles within
                                  the company get added and removed. As the
                                  target audience for Radar grew, I helped
                                  develop features that allowed us to replace a
                                  cumbersome excel document that 40+ sites used
                                  to manage hundreds of trainers and rooms. We
                                  also developed an automated authentication
                                  system as new types of users needed to be
                                  supported.
                                </Description>
                                <Thumbnails
                                  onClickThumbnail={onClickThumbnail}
                                  thumbnailsSource={radarImages}
                                />
                              </PageTab>
                              <PageTab
                                view="booklava"
                                label="Booklava"
                                currentView={match.params.view}
                                canOpen={canOpen}
                              >
                                <Description>
                                  Booklava brings book clubs onto the internet.
                                  It supports creating, searching, and
                                  participating in book clubs. Booklava provides
                                  a structured framework for creating flexible,
                                  complex schedules for discussions and advanced
                                  management features for club owners.
                                </Description>
                                <Thumbnails
                                  onClickThumbnail={onClickThumbnail}
                                  thumbnailsSource={booklavaImages}
                                />
                              </PageTab>
                              <PageTab
                                view="breakerlist"
                                label="BreakerList"
                                currentView={match.params.view}
                                canOpen={canOpen}
                              >
                                <Description>
                                  BreakerList helps athlete coaches quickly
                                  analyze their clients' workouts. Athletes use
                                  the app to enter their workouts while at the
                                  gym and coaches can then use that information
                                  to prescribe custom regimens that are tailored
                                  to their athletes' goals. It also features a
                                  regularly updated leaderboard that users can
                                  use to compare daily, weekly, and all-time
                                  stats.
                                </Description>
                                <Thumbnails
                                  onClickThumbnail={onClickThumbnail}
                                  thumbnailsSource={breakerlistImages}
                                />
                              </PageTab>
                            </Box>
                          </Box>
                        )}
                      />
                      <Route
                        path="/about-me"
                        render={() => <Box className={classes.page} />}
                      />
                      <Redirect to="/projects/frontsteps" />
                    </Switch>
                  </div>
                </div>
              )}
            />
            <Redirect to="/projects" />
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  )
}
