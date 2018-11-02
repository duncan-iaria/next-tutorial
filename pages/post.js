import { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import { Layout, HeaderText } from '../components';
import Markdown from 'react-markdown';

const Content = props => (
  <Fragment>
    <HeaderText>{props.show.name}</HeaderText>
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
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>

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
