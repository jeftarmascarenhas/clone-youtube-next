import { Box, Avatar, Typography, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const useStyle = makeStyles((theme) => ({
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
  },
}));

const Video = ({ item }) => {
  const classes = useStyle();
  return (
    <Box>
      <img alt={item.title} src={item.thumb} className={classes.img} />
      <Box display="flex" mt={1}>
        <Box>
          <Avatar alt={item.authorName} src={item.authorAvatar} />
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} • ${dayjs(item.updateAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Video;
