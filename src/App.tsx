import React from 'react';
import Layout from './components/Layout';
import Search from './components/Search';
import VoiceArtists, { VoiceArtist } from './components/VoiceArtists';
import SearchAPI, { parseSearchAPIResponse, getPaginationInfo } from './api';
import Pagination from './components/Pagination';

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  searchTerm?: string;
}

export interface AppProps {}
export interface AppState {
  voiceArtists: VoiceArtist[];
  paginationInfo: PaginationInfo;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      voiceArtists: [],
      paginationInfo: {
        currentPage: 1,
        totalPages: 0,
      },
    };
  }
  searchAPI = new SearchAPI();

  componentDidMount() {
    this.onSearch('');
  }

  onSearch = async (searchTerm: string, page: number = 1) => {
    const response = await this.searchAPI.getVoiceArtists(searchTerm, page);
    const paginationInfo = getPaginationInfo(response);
    const voiceArtists: VoiceArtist[] = parseSearchAPIResponse(response);

    this.setState({
      voiceArtists: voiceArtists,
      paginationInfo: { ...paginationInfo, searchTerm: searchTerm },
    });
  };

  onHandlePagination = (newPage: number) => {
    const currentSearchTerm = this.state.paginationInfo.searchTerm
      ? this.state.paginationInfo.searchTerm
      : '';
    this.onSearch(currentSearchTerm, newPage);
  };

  render() {
    return (
      <Layout>
        <Search
          placeholder='Search for a Voice Artists'
          onSearchClicked={this.onSearch}
        />
        <VoiceArtists
          voiceArtists={this.state.voiceArtists}
          searchTerm={this.state.paginationInfo.searchTerm}
        />
        <Pagination
          paginationInfo={this.state.paginationInfo}
          onPageChange={this.onHandlePagination}
        />
      </Layout>
    );
  }
}

export default App;
