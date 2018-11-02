import { Layout, StyledAnchor, StyledListItem, StyledH1, StyledH2 } from '../components';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
  <StyledListItem>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.id}`}>
      <StyledAnchor>{props.title}</StyledAnchor>
    </Link>
  </StyledListItem>
);

const Index = props => (
  <Layout>
    <StyledH1>Game Lords</StyledH1>
    <ul>
      <PostLink id="hello-game-lords" title="Hello Game Lords" />
      <PostLink id="battlefield-5" title="Battlefield V" />
      <PostLink id="doinkerton" title="Doinkerton" />
    </ul>

    <StyledH2>Batman TV Shows</StyledH2>
    <ul>
      {props.shows.map(({ show }) => (
        <StyledListItem key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <StyledAnchor>{show.name}</StyledAnchor>
          </Link>
        </StyledListItem>
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
