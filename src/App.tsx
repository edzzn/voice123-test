import React from 'react';
import Layout from './components/Layout';
import Search from './components/Search';
import VoiceArtists, { VoiceArtist } from './components/VoiceArtists';
import SearchAPI, { parseSearchAPIResponse } from './api';

export interface AppProps {}
export interface AppState {
  voiceArtists: VoiceArtist[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      voiceArtists: [],
    };
  }
  searchAPI = new SearchAPI();

  componentDidMount() {
    this.onSearch('');
  }

  onSearch = async (searchTerm: string) => {
    const response = await this.searchAPI.getVoiceArtists(searchTerm);
    const voiceArtists: VoiceArtist[] = parseSearchAPIResponse(response);

    this.setState({
      voiceArtists: voiceArtists,
    });
  };

  render() {
    return (
      <Layout>
        <Search
          placeholder='Search for a Voice Artists'
          onSearchClicked={this.onSearch}
        />
        <VoiceArtists voiceArtists={this.state.voiceArtists} />
        {/* <Pagination />  */}
      </Layout>
    );
  }
}

export default App;
