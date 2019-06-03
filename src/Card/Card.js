import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import colors from '../colors'

const useStyles = makeStyles({
  envelopeContainer: {
    position: 'relative',
    width: 300,
    height: 135,
    transform: 'perspective(400px) rotateY(0deg)',
    transition: 'transform 500ms',
  },
  promptEnvelopeContainer: {
    transform: 'perspective(400px) rotateY(-20deg)',
    cursor: 'pointer',
  },
  envelope: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 'calc(10% - 3px)',
    borderRight: 'none',
    background: colors.cardBackground,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-3px',
      right: '-10px',
      width: 10,
      bottom: '-3px',
      borderTop: `3px solid ${colors.borderColor}`,
      borderBottom: `3px solid ${colors.borderColor}`,
    },
  },
  envelopeBacking: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: colors.cardBackground,
    borderRight: `3px solid ${colors.borderColor}`,
  },
  envelopeTop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: '10%',
    background: 'transparent',
    border: `3px solid ${colors.foldColor}`,
    borderRight: 'none',
    borderRadius: '9px 0 0 9px',
  },
  envelopeFold: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: '10%',
    height: '3px',
    background: colors.foldColor,
  },
  envelopeFlap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '100%',
    width: '15%',
    background: colors.cardBackground,
    borderTop: `3px solid ${colors.foldColor}`,
    borderRight: `3px solid ${colors.foldColor}`,
    borderBottom: `3px solid ${colors.foldColor}`,
    borderTopRightRadius: '95% 20px',
    borderBottomRightRadius: '95% 20px',
    transform: 'perspective(400px) rotateY(-180deg)',
    transformOrigin: 'center left',
    transition: 'transform 500ms, z-index 500ms',
    zIndex: 0,
  },
  promptEnvelopeFlap: {
    transform: 'perspective(400px) rotateY(45deg)',
    zIndex: -1,
  },
  card: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'white',
    borderRadius: '8px',
    display: 'flex',
    padding: '8px',
    margin: '3px',
    transform: 'translateX(0px)',
    transition: 'transform 500ms',
  },
  cardContent: {
    flex: '1 1 0px',
  },
  promptCardFlyOut: {
    transform: 'translateX(10px)',
  },
  cardFlyOut: {
    animation: '$cardFlyOut 500ms cubic-bezier(.56,1.04,.47,.04) 0s 1 both',
  },
  '@keyframes cardFlyOut': {
    '0%': {
      transform: 'translateX(0px)',
      animationTimingFunction: 'ease-out',
    },
    '49%': {
      zIndex: 0,
    },
    '50%': {
      transform: 'translateX(110%)',
      zIndex: 5,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      animationTimingFunction: 'ease-out',
    },
    '100%': {
      transform: 'translateX(0px)',
      top: -100,
      bottom: -200,
      left: -200,
      right: -200,
      zIndex: 5,
    },
  },
})

export default function Card(props) {
  const classes = useStyles()
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const card = (
    <div
      className={`${classes.card} ${hasBeenClicked &&
        classes.cardFlyOut} ${isHovering &&
        !hasBeenClicked &&
        classes.promptCardFlyOut}`}
    >
      <div className={classes.cardContent}>This is additional Text</div>
    </div>
  )

  return (
    //
    <div
      className={`${classes.envelopeContainer} ${isHovering &&
        !hasBeenClicked &&
        classes.promptEnvelopeContainer}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setHasBeenClicked(true)}
    >
      <div className={classes.envelopeBacking} />
      {card}
      <div className={classes.envelope} />
      <div className={`${classes.envelopeTop}`} />
      <div className={classes.envelopeFold} />
      <div
        className={`${classes.envelopeFlap} ${isHovering &&
          classes.promptEnvelopeFlap}`}
      />
    </div>
  )
}
