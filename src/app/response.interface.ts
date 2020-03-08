export interface apiResponse {
    results: any[]
}

export interface dataResponse  {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: nameUrl,
    location: nameUrl,
    image: string,
    episode: string[],
    url: string,
}

export interface nameUrl {
    name: string;
    url: string;
}