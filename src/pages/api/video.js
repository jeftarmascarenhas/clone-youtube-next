import nc from 'next-connect';
import upload from '../../utils/upload';

const handle = nc()
  .use(upload.single('file'))
  .get((req, res) => {
    res.send('Hello World');
  })
  .post((req, res) => {
    const { title, authorId, authorName, authorAvatar, thumb, videoUrl } =
      req.body;
  })
  .patch((req, res) => {
    throw new Error('Throw me around!');
  });
