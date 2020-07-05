import axios, { AxiosResponse } from 'axios';
import { BASE_VOICE_SEARCH_ENDPOINT } from './common/constants';
import { VoiceArtist } from './components/VoiceArtists';

export function parseSearchAPIResponse(
  searchAPIResponse: AxiosResponse
): VoiceArtist[] {
  if (searchAPIResponse.status !== 200) {
    return [];
  }
  const voiceArtists: VoiceArtist[] = searchAPIResponse.data.providers.map(
    (p: any) => ({
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
        file: 'https://voice123.com/mp3/' + p['relevant_sample']['file'],
      },
    })
  );
  return voiceArtists;
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
