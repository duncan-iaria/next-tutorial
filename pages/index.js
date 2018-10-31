import { Layout } from '../components';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = props => (
  <Layout>
    <p>Game Lords</p>
    <ul>
      <PostLink id="hello-game-lords" title="Hello Game Lords" />
      <PostLink id="battlefield-5" title="Battlefield V" />
      <PostLink id="doinkerton" title="Doinkerton" />
    </ul>

    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  };
};

export default Index;
