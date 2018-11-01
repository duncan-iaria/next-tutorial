import fetch from 'isomorphic-unfetch';
import { Layout } from '../components';

const Content = props => (
  <div>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </div>
);

const Post = props => (
  <Layout>
    <Content {...props} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log('fetched show: — ', show.name);

  return { show };
};

export default Post;
