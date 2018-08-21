import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import Immutable from "immutable";

import CopyToClipboard from "react-copy-to-clipboard";
import Button from "./components/Base/Button";
import Tooltip from "./components/Base/Tooltip";

import jss, { variables, colors } from "./components/JSS";

const milestoneHeight = 190;
const pictureWidth = 130;
const pictureMargin = 16;
const numPics = 12;

let windowHeight = window.innerHeight;

// const splashImage = "alex-lamb-771521-unsplash.jpg";
const splashImage = "asoggetti-784324-unsplash.jpg";
// const splashImage = "geoffrey-baumbach-783874-unsplash.jpg";

const styles = {
  app: {
    display: "flex",
    flex: "1 1 0px",
    flexDirection: "column",
    position: "relative",
    maxWidth: "100%",
    fontFamily: "Open Sans"
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    height: "50px",
    alignItems: "flex-start",
    zIndex: 3
  },
  headerName: {
    paddingLeft: "8px",
    background: variables.headerColor,
    fontSize: "28px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    color: "white",
    zIndex: "2",
    borderBottomRightRadius: "6px",
    "@media (max-width: 620px)": {
      paddingLeft: "4px"
    }
  },
  headerNameText: {
    "@media (max-width: 620px)": {
      fontSize: "24px"
    },
    "@media (max-width: 440px)": {
      fontSize: "18px"
    }
  },
  headerEmail: {
    display: "flex",
    flexDirection: "column",
    background: variables.headerColor,
    fontSize: "18px",
    height: "40px",
    alignItems: "center",
    color: "white",
    borderBottomLeftRadius: "6px"
  },
  emailText: {
    paddingLeft: "8px",
    paddingRight: "8px",
    fontSize: "24px",
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
    "@media (max-width: 620px)": {
      fontSize: "22px"
    },
    "@media (max-width: 440px)": {
      fontSize: "20px"
    }
  },
  headerBar: {
    display: "flex",
    flex: "1 1 auto",
    height: "40px",
    marginLeft: "-10px",
    background: variables.headerColor
  },
  body: {
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    background: "#f1f2f7"
    // height: '100%',
  },
  splash: {
    display: "flex",
    position: "relative",
    minHeight: `calc(${0.8 * windowHeight}px - 12px)`,
    flex: "0 0 auto",
    overflow: "hidden",
    "@media (max-height: 600px)": {
      minHeight: `calc(${0.7 * windowHeight}px - 12px)`
    }
  },
  splashImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: `url(/app_images/background/${splashImage})`,
    height: "100%",
    width: "2000px",
    backgroundSize: "cover",
    backgroundPosition: "50% 0%"
  },
  splashText: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "10%",
    right: 0,
    fontSize: "190px",
    color: "white",
    fontFamily: "baloo bhaina",
    lineHeight: "63px",
    paddingBottom: `${0.1 * windowHeight}px`,
    "@media (max-width: 620px)": {
      fontSize: "150px",
      left: "5%"
    },
    "@media (max-width: 440px)": {
      fontSize: "115px",
      left: "5%"
    }
  },
  section: {
    boxShadow: "inset 0px 10px 16px -10px rgba(0, 0, 0, 0.52)",
    display: "flex",
    minHeight: "64px",
    justifyContent: "center"
  },
  textSection: {
    extend: "section",
    alignItems: "center",
    fontSize: "32px",
    minHeight: `${0.2 * windowHeight}px`,
    paddingLeft: "12px",
    paddingRight: "12px",
    flexDirection: "column",
    "@media (max-height: 600px)": {
      minHeight: `calc(${0.3 * windowHeight}px)`
    }
  },
  text: {
    display: "flex",
    flex: "0 0 auto",
    alignItems: "center",
    paddingLeft: "8px"
  },
  textItems: {
    display: "flex",
    flex: "1 1 auto",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "column"
  },
  dividingSection: {
    display: "flex",
    flex: "0 0 12px",
    background: variables.dividerBackground
  },
  lightDividingSection: {
    display: "flex",
    flex: "0 0 12px",
    background: variables.lightDividerBackground
  },
  projectsSection: {
    extend: "section",
    display: "flex",
    flex: "0 0 auto",
    minHeight: "128px",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingRight: "12px",
    background: variables.projectsBackground,
    "@media (max-width: 440px)": {
      paddingRight: "0px"
    }
  },
  projectTitle: {
    marginTop: "12px",
    marginBottom: "12px",
    display: "flex",
    flex: "0 0 60px",
    fontSize: "28px",
    fontWeight: "bold",
    alignItems: "center",
    color: "white",
    "@media (max-width: 440px)": {
      marginLeft: "12px"
    }
  },
  projectList: {
    display: "flex",
    flex: "0 1 0px",
    minWidth: "146px",
    marginLeft: "12px",
    flexDirection: "column",
    "@media (max-width: 440px)": {
      marginLeft: "0px",
      flex: "1 1 auto"
    }
  },
  projectItem: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 440px)": {
      flexDirection: "column",
      paddingRight: "0px"
    }
  },
  projectListItem: {
    display: "flex",
    flex: "0 0 45px",
    alignItems: "center",
    cursor: "pointer",
    paddingLeft: "8px",
    paddingRight: "8px",
    marginBottom: "12px",
    justifyContent: "space-between",
    color: "white",
    "@media (hover)": {
      "&:hover": {
        background: "#F0F0F0",
        color: variables.textBlack
      }
    }
  },
  selectedProjectListItem: {
    extend: "projectListItem",
    background: "#f1f2f7",
    color: variables.textBlack,
    "&:hover": {
      background: "#f1f2f7"
    }
  },

  // Selected project
  selectedProject: {
    display: "flex",
    flex: "1 1 0px",
    background: "#f1f2f7",
    flexDirection: "column",
    boxShadow: "inset 0px 12px 8px -11px rgba(0, 0, 0, 0.66)",
    "@media (max-width: 440px)": {
      display: "none"
    }
  },
  selectedProjectInList: {
    extend: "project",
    display: "flex",
    flex: "1 1 auto",
    background: "white",
    flexDirection: "column",
    boxShadow: "inset 0px 12px 8px -11px rgba(0, 0, 0, 0.66)",
    display: "none",
    marginBottom: "8px",
    "@media (max-width: 440px)": {
      display: "flex"
    }
  },
  selectedProjectTitle: {
    display: "flex",
    flex: "0 0 48px",
    alignItems: "center",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "24px",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  selectedProjectTitleTextContainer: {
    display: "flex"
  },
  selectedProjectTitleText: {
    marginRight: "4px"
  },
  selectedProjectTags: {
    display: "flex",
    paddingLeft: "12px",
    marginBottom: "18px",
    marginTop: "4px",
    flexWrap: "wrap"
  },
  projectTag: {
    background: variables.tagBackground,
    border: variables.tagBorder,
    padding: "4px",
    fontSize: "12px",
    lineHeight: "11px",
    marginRight: "4px",
    marginBottom: "4px",
    borderRadius: "4px",
    color: "white"
  },
  selectedProjectDescription: {
    display: "flex",
    paddingLeft: "12px",
    marginBottom: "16px"
  },

  // Selected project pictures
  selectedProjectPictures: {
    display: "flex",
    flex: "0 0 600px",
    "@media (max-width: 440px)": {
      flex: "0 0 400px"
    }
  },
  selectedProjectSidePictureContainer: {
    display: "flex",
    flex: "0 0 auto",
    background: variables.centerPictureBackground,
    width: "7vw",
    minWidth: "28px",
    cursor: "pointer",
    paddingTop: "2px",
    paddingBottom: "2px",
    "&:hover": {
      opacity: "0.5"
    }
  },
  selectedProjectSidePicture: {
    display: "flex",
    flex: "1 1 auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  selectedProjectLeftPicture: {
    extend: "selectedProjectSidePicture",
    background: variables.centerPictureBackground,
    backgroundPosition: "100% 50%",
    marginRight: "2px"
  },
  selectedProjectRightPicture: {
    extend: "selectedProjectSidePicture",
    background: variables.centerPictureBackground,
    backgroundPosition: "0% 50%",
    marginLeft: "2px"
  },
  selectedProjectCenterPictureContainer: {
    display: "flex",
    flex: "1 1 auto",
    background: variables.centerPictureBackground,
    padding: "2px",
    paddingLeft: "2px",
    paddingRight: "2px",
    marginLeft: "8px",
    marginRight: "8px"
  },
  selectedProjectCenterPicture: {
    display: "flex",
    flex: "1 1 auto",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
  },

  // Selected picture descriptions
  selectedPictureDescription: {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "40px",
    paddingRight: "40px"
  },

  // Selected project picture counters
  selectedProjectCounters: {
    display: "flex",
    flex: "0 0 48px",
    alignItems: "center",
    justifyContent: "center"
  },
  selectedProjectCounter: {
    height: "22px",
    width: "22px",
    borderRadius: "100px",
    margin: "4px",
    cursor: "pointer",
    background: variables.nonActiveCounterBackground
  },
  selectedProjectActiveCounter: {
    extend: "selectedProjectCounter",
    background: variables.activeCounterBackground
  },

  // Picture Section
  pictureSection: {
    extend: "section",
    display: "flex",
    flex: "0 0 auto",
    overflow: "hidden"
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  pictures: {
    flexWrap: "wrap",
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "center",
    marginTop: "32px",
    marginBottom: "64px",
    marginRight: "-16px",
    maxWidth: `${(pictureWidth + pictureMargin) * (numPics / 2)}px`
  },
  picture: {
    borderRadius: "200px",
    width: `${pictureWidth}px`,
    height: `${pictureWidth}px`,
    margin: `${pictureMargin}px`,
    marginLeft: "0px",
    marginBottom: "0px",
    backgroundSize: "cover",
    boxShadow: "0px 3px 3px 1px rgba(0, 0, 0, 0.65)"
  },

  // Footer
  footer: {
    extend: "section",
    display: "flex",
    flex: "0 0 128px",
    fontSize: "18px",
    background: variables.footerBackground,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },

  link: {
    paddingLeft: "12px",
    paddingRight: "12px",
    color: "white",
    cursor: "pointer",
    borderLeft: "2px solid white",
    "&:first-child": {
      borderLeft: "none"
    },
    "&:hover": {
      textDecoration: "underline"
    }
  },
  nonClickableLink: {
    extend: "link",
    cursor: "initial",
    "&:hover": {
      textDecoration: "none"
    }
  },
  hideXs: {
    [`@media (max-width: ${(pictureWidth + pictureMargin) * 3}px)`]: {
      display: "none"
    }
  },
  hideMd: {
    [`@media (max-width: ${(pictureWidth + pictureMargin) * 4}px)`]: {
      display: "none"
    }
  },
  hideLg: {
    [`@media (max-width: ${(pictureWidth + pictureMargin) * 5}px)`]: {
      display: "none"
    }
  },
  hideXl: {
    [`@media (max-width: ${(pictureWidth + pictureMargin) * 6}px)`]: {
      display: "none"
    }
  },
  separator: {
    flex: "1 1 auto"
  },
  copyToClipboardContainer: {
    display: "flex"
  },
  emailButton: {
    display: "flex",
    alignSelf: "stretch",
    marginLeft: "8px"
  },
  techSection: {
    display: "flex",
    marginBottom: "4rem",
    alignSelf: "center"
  },
  techLevel: {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    border: `3px solid ${variables.techBackgroundColor}`,
    borderRadius: "6px",
    overflow: "hidden"
  },
  techLevelIcon: {
    display: "flex",
    color: "white",
    background: variables.techBackgroundColor,
    height: "76px",
    alignItems: "center",
    backgroundPosition: "14px",
    backgroundSize: "41px",
    backgroundRepeat: "no-repeat"
  },
  techListItems: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 2rem",
    fontSize: "24px"
  },
  techListItem: {
    display: "flex"
  },
  techColumnSeparator: {
    display: "flex",
    flex: "1 1 0px",
    justifyContent: "center",
    width: "8rem"
  }
};

const { classes } = jss.createStyleSheet(styles).attach();

class App extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      backgrounds: Immutable.List([
        "congruent_outline.png",
        "dark_embroidery.png",
        "footer_lodyas.png",
        "stardust.png",
        "stardust_@2X.png",
        "zigzagwool.png"
      ]),
      backgroundIndex: 0,
      selectedProjectId: "frontsteps",
      copyText: "Copy Email To Clipboard",
      projects: Immutable.fromJS({
        frontsteps: {
          name: "Frontsteps",
          tags: [
            "React",
            "Redux",
            "Redux Saga",
            "Reselect",
            "JSS",
            "Webpack 4",
            "Material-UI"
          ],
          startYear: "6/2017",
          endYear: "present",
          description:
            "Frontsteps is an app that unifies security hardware (HID and Kantech) into a simple interface that supports many types of users (residents, home owners, guards, community admins, Frontsteps employees, dealers, property management companies, etc). It utilizes and orchestrates microservice API's, supports 9+ roles, 150+ permissions, 60+ API resources, and provides support tools such as a super admin interface, onboarding wiki, and a Storybook site of core UI components.",
          pictures: [
            {
              url: "/app_images/frontsteps/FRONTSTEPS.jpg",
              description: ""
            },
            {
              url: "/app_images/frontsteps/FRONTSTEPS(1).jpg",
              description: ""
            },
            {
              url: "/app_images/frontsteps/FRONTSTEPS(2).jpg",
              description: ""
            },
            {
              url: "/app_images/frontsteps/FRONTSTEPS(3).jpg",
              description: ""
            },
            {
              url: "/app_images/frontsteps/FRONTSTEPS(4).jpg",
              description: ""
            },
            {
              url: "/app_images/frontsteps/FRONTSTEPS(5).jpg",
              description: ""
            },
            {
              url: "/app_images/frontsteps/FRONTSTEPS(6).jpg",
              description: ""
            },
            {
              url: "/app_images/frontsteps/FRONTSTEPS(7).jpg",
              description: ""
            },
            {
              url: "/app_images/frontsteps/FRONTSTEPS(8).jpg",
              description: ""
            },
            {
              url: "/app_images/frontsteps/FRONTSTEPS(9).jpg",
              description: ""
            }
          ],
          pictureIndex: 0
        },
        radar: {
          name: "Radar",
          tags: ["React", "JSS", "Webpack", "C#", "ASP.NET WebApi", "IIS 7"],
          startYear: "6/2016",
          endYear: "6/2017",
          description:
            "Radar is an internal tool used to manage the development of training modules that 8000+ employees rely on. Radar allows users to request trainings, helps training developers manage the lifecycle of trainings, easily targets complex, custom audiences, and automatically stays up-to-date as roles within the company get added and removed. As the target audience for Radar grew, I helped develop features that allowed us to replace a cumbersome excel document that 40+ sites used to manage hundreds of trainers and rooms. We also developed an automated authentication system as new types of users needed to be supported. ",
          pictures: [
            {
              url: "/app_images/radar/development-1.png",
              description: ""
            },
            {
              url: "/app_images/radar/resource-1.png",
              description: ""
            },
            {
              url: "/app_images/radar/resource-2.png",
              description: ""
            },
            {
              url: "/app_images/radar/resource-4.png",
              description: ""
            },
            {
              url: "/app_images/radar/training-assignment.png",
              description: ""
            }
          ],
          pictureIndex: 0
        },
        booklava: {
          name: "Booklava",
          tags: ["React", "Redux", "SCSS", "Django", "Python", "Webpack"],
          startYear: "8/2015",
          endYear: "6/2016",
          description:
            "Booklava brings book clubs onto the internet. It supports creating, searching, and participating in book clubs. Booklava provides a structured framework for creating flexible, complex schedules for discussions and advanced management features for club owners.",
          pictures: [
            {
              url: "/app_images/booklava-calendar.png",
              description:
                "The calendar shows details about upcoming discussions and allows the user to manage their clubs and subscriptions."
            },
            {
              url: "/app_images/booklava-club.png",
              description:
                "The homepage for a club displays the books they've discussed, the discussion history for each book, and gives general club details."
            },
            {
              url: "/app_images/booklava-discussion.png",
              description:
                "The discussion page allows users to post questions and monitor multiple discussions in real-time."
            },
            {
              url: "/app_images/booklava-search.png",
              description:
                "The search page provides advanced search functions such as finding books currently in/planned for discussion and selecting a book for a club you own."
            }
          ],
          pictureIndex: 0
        },
        breakerlist: {
          name: "BreakerList",
          tags: ["React", "Redux", "SCSS", "Ruby on Rails", "Grunt", "RSpec"],
          startYear: "5/2014",
          endYear: "7/2015",
          link: "https://breakerlist.com",
          description:
            "BreakerList helps athlete coaches quickly analyze their clients' workouts. Athletes use the app to enter their workouts while at the gym and coaches can then use that information to prescribe custom regimens that are tailored to their athletes' goals. It also features a regularly updated leaderboard that users can use to compare daily, weekly, and all-time stats.",
          pictures: [
            {
              url: "/app_images/breakerlist-exercise-mobile.png",
              description:
                "Exercises support complex configurations: custom order of exercises, multiple sets per exercise, and linked videos per set."
            },
            {
              url: "/app_images/breakerlist-charts-mobile.png",
              description:
                "Athletes and coaches can view historical data for specific exercises."
            },
            {
              url: "/app_images/breakerlist-leaderboard-mobile.png",
              description:
                "The leaderboard's advanced filtering means there's a high likelihood that a user is #1 at something."
            }
          ],
          pictureIndex: 0
        },
        movieViewer: {
          name: "Movie Viewer",
          tags: ["React", "SCSS", "Webpack"],
          description:
            "Mockups for a simple movie viewer. It allows a group of people to watch videos together and provides a prompt that users can use to select the next video.",
          pictures: [
            {
              url: "/app_images/movie-viewer-main.png",
              description: "Main page for discussing the video"
            },
            {
              url: "/app_images/movie-viewer-description.png",
              description: "Example page for viewing the current video"
            },
            {
              url: "/app_images/movie-viewer-vote.png",
              description: "Example voting section for next video"
            }
          ],
          pictureIndex: 0
        },
        // pureProgress: {
        //   name: "Pure Progress",
        //   tags: ["React", "Redux", "JSS", "C#", "ASP.NET WebApi", "IIS 7"],
        //   description:
        //     "Starting a new hobby can be daunting, expect to encounter new terminology, new techniques, and a plethora of opportunity. Pure Progress is an attempt to provide a comprehensive guide to all hobbies that lays the groundwork for newcomers. Anyone can add content to Pure Progress. By enforcing guidelines, all hobbies have a narrow direction, giving students a clear learning path.",
        //   pictures: [
        //     {
        //       url: "/app_images/pureprogress-login.png",
        //       description: "Register page for Pure Progress"
        //     }
        //   ],
        //   pictureIndex: 0
        // },
        noahpotter: {
          name: "NoahPotter.me",
          tags: ["React", "JSS", "Webpack 2.0"],
          description: "The site you're currently on. 😁",
          pictures: [],
          pictureIndex: 0
        }
      }),
      pictures: Immutable.OrderedMap({
        "bike-view": "lg",
        // 'IMG_3381': '',
        pony: "xs",
        "selfie-yosemite": "",
        "circle-view": "md",
        "hot-air-balloons": "xl",
        // 'IMG_4162': '',
        "selfie-beach": "",
        // 'IMG_4326': '',
        // 'IMG_4339': '',
        kayak: "xl",
        snowboard: "",
        "snow-mountains": "md",
        tunnel: "lg",
        "rock-tunnel": "xs",
        climbing: ""
      })
    };
  }

  componentWillMount = () => {};

  onSelectProject = id => {
    this.setState({ selectedProjectId: id });

    setTimeout(() => {
      if (window.innerWidth <= 440) {
        ReactDOM.findDOMNode(this.refs[id]).scrollIntoView();
        window.scrollBy(0, -45);
      }
    }, 0);
  };

  selectPictureUrl = url => {
    let index = this.state.projects
      .getIn([this.state.selectedProjectId, "pictures"])
      .findIndex(v => v.get("url") == url);

    this.setState({
      projects: this.state.projects.setIn(
        [this.state.selectedProjectId, "pictureIndex"],
        index
      )
    });
  };

  onLeftPictureClick = () => {
    let pictureCount = this.state.projects
      .getIn([this.state.selectedProjectId, "pictures"])
      .count();

    this.setState({
      projects: this.state.projects.updateIn(
        [this.state.selectedProjectId, "pictureIndex"],
        v => {
          if (v == 0) {
            return v;
          } else {
            return v - 1;
          }
        }
      )
    });
  };

  onRightPictureClick = () => {
    let pictureCount = this.state.projects
      .getIn([this.state.selectedProjectId, "pictures"])
      .count();

    this.setState({
      projects: this.state.projects.updateIn(
        [this.state.selectedProjectId, "pictureIndex"],
        v => {
          if (v == pictureCount - 1) {
            return v;
          } else {
            return v + 1;
          }
        }
      )
    });
  };

  clickLink = link => {
    window.open(link, "_blank");
  };

  resetCopyText = () => {
    this.setState({ copyText: "Copy Email To Clipboard" });
  };

  onClickEmail = () => {
    this.setState({ copyText: "Copied!" });
  };

  renderProject = (projectId, inList) => {
    let selectedProject = this.state.projects.get(projectId);

    let pictureCount = selectedProject.get("pictures").count();
    let pictureIndex = selectedProject.get("pictureIndex");
    let previousPictureIndex = pictureIndex == 0 ? null : pictureIndex - 1;
    let nextPictureIndex =
      pictureIndex == pictureCount - 1 ? null : pictureIndex + 1;

    let previousPictureUrl =
      previousPictureIndex != null
        ? selectedProject.getIn(["pictures", previousPictureIndex, "url"])
        : null;
    let nextPictureUrl =
      nextPictureIndex != null
        ? selectedProject.getIn(["pictures", nextPictureIndex, "url"])
        : null;

    let previousPictureStyle;
    let nextPictureStyle;

    if (previousPictureUrl) {
      previousPictureStyle = {
        backgroundImage: `url('${previousPictureUrl}')`
      };
    }

    if (nextPictureUrl) {
      nextPictureStyle = {
        backgroundImage: `url('${nextPictureUrl}')`
      };
    }

    let projectLink;

    if (selectedProject.has("link")) {
      projectLink = (
        <Button
          light
          noMinWidth
          padding={4}
          noMargin
          onClick={this.clickLink.bind(this, selectedProject.get("link"))}
        >
          <div className={`material-icons ${classes.projectLink}`}>launch</div>
        </Button>
      );
    }

    return (
      <div
        className={
          inList ? classes.selectedProjectInList : classes.selectedProject
        }
      >
        <div className={classes.selectedProjectTitle}>
          <div className={classes.selectedProjectTitleTextContainer}>
            <div className={classes.selectedProjectTitleText}>
              {selectedProject.get("name")}
            </div>
            {projectLink}
          </div>
          <div className={classes.year}>
            {selectedProject.get("startYear") &&
              `${selectedProject.get("startYear")} - ${selectedProject.get(
                "endYear"
              )}`}
          </div>
        </div>
        <div className={classes.selectedProjectTags}>
          {selectedProject
            .get("tags")
            .map(tag => (
              <div key={`tag_${tag}`} className={classes.projectTag}>
                {tag}
              </div>
            ))
            .valueSeq()}
        </div>
        <div className={classes.selectedProjectDescription}>
          {selectedProject.get("description")}
        </div>
        <div className={classes.selectedProjectPictures}>
          <div className={classes.selectedProjectSidePictureContainer}>
            <div
              className={classes.selectedProjectLeftPicture}
              onClick={this.onLeftPictureClick}
              style={previousPictureStyle}
            />
          </div>
          <div className={classes.selectedProjectCenterPictureContainer}>
            <div
              className={classes.selectedProjectCenterPicture}
              style={{
                backgroundImage: `url("${selectedProject.getIn([
                  "pictures",
                  pictureIndex,
                  "url"
                ])}")`
              }}
            />
          </div>
          <div className={classes.selectedProjectSidePictureContainer}>
            <div
              className={classes.selectedProjectRightPicture}
              onClick={this.onRightPictureClick}
              style={nextPictureStyle}
            />
          </div>
        </div>
        <div className={classes.selectedPictureDescription}>
          {selectedProject.getIn(["pictures", pictureIndex, "description"])}
        </div>
        <div className={classes.selectedProjectCounters}>
          {selectedProject
            .get("pictures")
            .map(picture => {
              let active =
                selectedProject.getIn([
                  "pictures",
                  selectedProject.get("pictureIndex"),
                  "url"
                ]) == picture.get("url");

              let className = classNames({
                [classes.selectedProjectCounter]: !active,
                [classes.selectedProjectActiveCounter]: active
              });

              return (
                <div
                  key={`counter_${picture.get("url")}`}
                  className={className}
                  onClick={this.selectPictureUrl.bind(this, picture.get("url"))}
                />
              );
            })
            .valueSeq()}
        </div>
      </div>
    );
  };

  renderTechColumn = ({ icon, tech } = {}) => {
    return (
      <div className={classes.techLevel}>
        <div
          className={`${classes.techLevelIcon}`}
          style={{ backgroundImage: `url("${icon}")` }}
        />
        <div className={classes.techListItems}>
          {tech.map(t => (
            <div className={classes.techListItem}>{t}</div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={classes.app}>
        {/* <div className={classes.header}>
          <div className={classes.headerName}>
            <div className={classes.headerNameText}>Noah Potter</div>
            <Button
              noPadding
              noMargin
              expand
              popoverText={this.state.copyText}
              noMinWidth
              allowManualToggle={false}
              className={classes.emailButton}
              popoverClassName={classes.copyToClipboardContainer}
            >
              <CopyToClipboard
                text="noah.potter@outlook.com"
                onCopy={this.onClickEmail}
              >
                <div
                  className={`material-icons ${classes.emailText}`}
                  onMouseEnter={this.resetCopyText}
                >
                  email
                </div>
              </CopyToClipboard>
            </Button>
          </div>
          <div className={classes.headerBar} />
        </div> */}
        <div className={classes.body}>
          <div className={classes.splash}>
            <div className={classes.splashImage} />
            <div className={classes.splashText}>hello.</div>
          </div>
          <div className={classes.dividingSection} />
          <div className={classes.textSection}>
            <div className={classes.textItems}>
              <div className={classes.text}>
                I'm Noah. I've been creating exciting frontends since 2014!
              </div>
              {/* <div className={classes.text}>Let's build something!</div> */}
            </div>
          </div>
          <div className={classes.techSection}>
            {this.renderTechColumn({
              icon: "app_images/level-icons/bars-4.png",
              tech: [
                "React",
                "Redux",
                "Redux Saga",
                "Reselect",
                "HTML",
                "CSS/JSS",
                "Webpack",
                "C#"
              ]
            })}
            <div className={classes.techColumnSeparator} />
            {this.renderTechColumn({
              icon: "app_images/level-icons/bars-3.png",
              tech: ["Material UI", "Express", ".Net Core 2+"]
            })}
            <div className={classes.techColumnSeparator} />
            {this.renderTechColumn({
              icon: "app_images/level-icons/bars-2.png",
              tech: ["Ruby on Rails", "Grunt", "RSpec"]
            })}
          </div>
          <div className={classes.projectsSection}>
            <div className={classes.projectList}>
              <div className={classes.projectTitle}>Projects</div>
              {this.state.projects
                .map((project, projectId) => {
                  let className = classNames({
                    [classes.projectListItem]:
                      this.state.selectedProjectId != projectId,
                    [classes.selectedProjectListItem]:
                      this.state.selectedProjectId == projectId
                  });

                  return (
                    <div key={projectId} className={classes.projectItem}>
                      <div
                        className={className}
                        onClick={this.onSelectProject.bind(this, projectId)}
                        ref={projectId}
                      >
                        {project.get("name")}
                        <div className={`material-icons ${classes.arrowIcon}`}>
                          keyboard_arrow_right
                        </div>
                      </div>
                      {projectId == this.state.selectedProjectId
                        ? this.renderProject(projectId, true)
                        : null}
                    </div>
                  );
                })
                .valueSeq()}
            </div>
            {this.renderProject(this.state.selectedProjectId, false)}
          </div>
          <div className={classes.dividingSection} />
          <div className={classes.pictureSection}>
            <div className={classes.pictures}>
              {this.state.pictures
                .map((size, url) => {
                  // let hideXs = index >= this.state.numPicsXs
                  // let hideMd = index >= this.state.numPicsMd
                  // let hideLg   = index >= this.state.numPicsLg
                  // let hideXl = index >= this.state.numPicsXl

                  let className = classNames({
                    [classes.picture]: true,
                    [classes.hideXs]: size == "xs",
                    [classes.hideMd]: size == "md",
                    [classes.hideLg]: size == "lg",
                    [classes.hideXl]: size == "xl"
                  });

                  return (
                    <div
                      key={url}
                      className={className}
                      style={{
                        backgroundImage: `url("/app_images/adventure/${url}.jpg")`
                      }}
                    />
                  );
                })
                .valueSeq()}
            </div>
          </div>
          <div className={classes.dividingSection} />
          <div className={classes.footer}>
            <div
              onClick={this.clickLink.bind(
                this,
                "https://github.com/noah-potter"
              )}
              className={classes.link}
            >
              Github
            </div>
            <div
              onClick={this.clickLink.bind(
                this,
                "https://bitbucket.org/noahpotter/"
              )}
              className={classes.link}
            >
              Bitbucket
            </div>
            <div
              onClick={this.clickLink.bind(
                this,
                "https://www.linkedin.com/in/noah-potter-b88b6257/"
              )}
              className={classes.link}
            >
              LinkedIn
            </div>
            <div className={classes.nonClickableLink}>
              noah.potter@outlook.com
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
