import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SociaMediaIcon from '../../components/Icons/SociaMediaIcon';
import linkedinIconSrc from '../../assets/icons/linkedin.svg';
import githubIconSrc from '../../assets/icons/github.svg';

const useStyles = makeStyles((theme) => ({
  aside: {
    background: 'rgba(0,0,0,0.01)',
  },
  boxAvatar: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: theme.spacing(-6),
    height: 20,
  },
  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    background: 'rgba(255,255,255,0.3)',
  },
  header: {
    width: '100%',
    maxWidth: 360,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingBottom: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  title: {
    marginBottom: 0,
  },
  subtitle: {
    color: '#666',
    fontStyle: 'italic',
  },
  boxes: {
    width: '100%',
    maxWidth: 360,
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  boxProject: {
    padding: theme.spacing(1.5),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
  },
  listProjects: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&>div': {
      margin: theme.spacing(0.5),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  },
}));

export default function EmployeeAside(props) {
  const classes = useStyles();

  const { alias, role, avatar, linkedin, github } = props.data;
  return (
    <Grid item xs={3} className={classes.aside}>
      <Box className={classes.boxAvatar}>
        <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
      </Box>
      <div className={classes.header}>
        <Typography className={classes.title} variant="h6" gutterBottom>
          {alias}
        </Typography>
        <Typography className={classes.subtitle} variant="body2" gutterBottom>
          {role}
        </Typography>
      </div>
      <div className={classes.boxes}>
        {(linkedin || github) && (
          <>
            <Divider />
            <div className={classes.boxProject}>
              <Typography>Social</Typography>
              <Box className={classes.listProjects}>
                {linkedin && (
                  <SociaMediaIcon
                    width={36}
                    to={linkedin}
                    src={linkedinIconSrc}
                  />
                )}
                {github && <SociaMediaIcon to={github} src={githubIconSrc} />}
              </Box>
            </div>
          </>
        )}
        <Divider />
        <div className={classes.boxProject}>
          <Typography>Projetos</Typography>
          <Box className={classes.listProjects}>
            <Avatar>EM</Avatar>
          </Box>
        </div>
      </div>
    </Grid>
  );
}
