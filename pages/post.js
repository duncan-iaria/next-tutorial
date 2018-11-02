import { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import { Layout, StyledH1 } from '../components';
import Markdown from 'react-markdown';

const Content = props => (
  <Fragment>
    <StyledH1>{props.show.name}</StyledH1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Fragment>
);

const Post = props => (
  <Layout>
    <div className="markdown">
      <Markdown
        source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content:
     `}
      />
    </div>

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
