import axios, { AxiosResponse } from 'axios';
import { BASE_VOICE_SEARCH_ENDPOINT } from './common/constants';
import { VoiceArtist } from './components/VoiceArtists';
import { PaginationInfo } from './App';

export function parseSearchAPIResponse(
  searchAPIResponse: AxiosResponse
): VoiceArtist[] {
  if (searchAPIResponse.status !== 200) {
    return [];
  }

  const voiceArtists: VoiceArtist[] = searchAPIResponse.data.providers.map(
    (p: any) => {
      let audioFile: string = p['relevant_sample']['file'];

      if (!audioFile.includes('http')) {
        audioFile = 'https://voice123.com/mp3/' + audioFile;
      }

      return {
        id: p['id'],
        name: p['user']['name'],
        username: p['user']['username'],
        image: p['user']['picture_medium'],
        headline: p['headline'],
        summary: p['summary'],
        description: p['description'],
        additionalDetails: p['additional_details'],
        relevantSample: {
          name: p['relevant_sample']['name'],
          file: audioFile,
        },
      };
    }
  );
  return voiceArtists;
}

export function getPaginationInfo(
  searchAPIResponse: AxiosResponse
): PaginationInfo {
  return {
    currentPage: parseInt(searchAPIResponse['headers']['x-list-current-page']),
    totalPages: parseInt(searchAPIResponse['headers']['x-list-total-pages']),
  };
}

export default class SearchAPI {
  api = axios.create({
    baseURL: BASE_VOICE_SEARCH_ENDPOINT,
  });

  async getVoiceArtists(
    searchTerm: string,
    page: number = 1
  ): Promise<AxiosResponse> {
    let query = `?service=voice_over&page=${page}`;
    if (searchTerm && searchTerm !== '') {
      query += `&keywords=${searchTerm}`;
    }
    const response = await this.api.get(query);
    return response;
  }
}
