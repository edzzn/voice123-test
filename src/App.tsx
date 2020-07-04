import React from 'react';
import Layout from './components/Layout';
import Search from './components/Search';
import VoiceArtists from './components/VoiceArtists';

function App() {
  return (
    <Layout>
      <Search placeholder='Search for a Voice Artists' value='' />
      <VoiceArtists />
      {/* <Pagination />  */}
    </Layout>
  );
}

export default App;
