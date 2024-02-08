import {languageId, moviesGenreId} from '../Data/MoviesGenreId';

export const movieYear = (year: string) => {
  return year.slice(0, 4);
};

export const languageFilter = (language: any) => {
  return languageId.map((item: any) => {
    if (item.id == language) {
      return item.title;
    }
  });
};

export const movieGenreFilter = (id: any) => {
  return moviesGenreId.map((item: any) => {
    if (item.id == id) {
      return item.title;
    }
  });
};
