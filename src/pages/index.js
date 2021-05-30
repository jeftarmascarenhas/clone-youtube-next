import { Box, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import Video from '../components/Video';

function Home({ data }) {
  return (
    <div>
      <Layout title="Youtube">
        <Box p={2}>
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
                <Video item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'NEXT JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER',
      authorId: 1,
      authorName: 'Jeff Mascarenhas',
      authorAvatar: '',
      thumb: '/thumbs/next01.jpeg',
      videoUrl: '',
      updateAt: new Date(),
    },
    {
      id: 2,
      title: 'NEXT JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER',
      authorId: 2,
      authorName: 'Jeff Mascarenhas',
      authorAvatar: '',
      thumb: '/thumbs/next02.jpeg',
      videoUrl: '',
      updateAt: new Date(),
    },
    {
      id: 3,
      title: 'NEXT JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER',
      authorId: 3,
      authorName: 'Jeff Mascarenhas',
      authorAvatar: '',
      thumb: '/thumbs/next03.jpeg',
      videoUrl: '',
      updateAt: new Date(),
    },
    {
      id: 4,
      title: 'NEXT JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER',
      authorId: 4,
      authorName: 'Jeff Mascarenhas',
      authorAvatar: '',
      thumb: '/thumbs/next03.jpeg',
      videoUrl: '',
      updateAt: new Date(),
    },
  ];
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Home;
