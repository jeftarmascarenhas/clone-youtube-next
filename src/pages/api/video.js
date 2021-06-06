import { ObjectId } from 'mongodb';
import nc from 'next-connect';
import { connectToDatabase } from '../../utils/mongodb';
import upload from '../../utils/upload';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handle = nc()
  .use(upload.single('file'))
  .post(async (req, res) => {
    try {
      const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;
      const { db } = await connectToDatabase();
      const collection = db.collection('videos');
      await collection.insertOne({
        title,
        authorId: ObjectId(authorId),
        authorName,
        authorAvatar,
        thumb: req.file.location,
        videoUrl,
        views: 0,
        updateAt: new Date(),
      });
      return res.status(200).json({
        ok: true,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ ok: false, error });
    }
  })
  .patch((req, res) => {
    throw new Error('Throw me around!');
  });

export default handle;
