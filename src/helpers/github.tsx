import {ISSUES_PER_PAGE} from '../../App';
import {SortDirection, SortType} from '../components/Controlls';

export const getIssues = async (
  owner: string,
  repo: string,
  direction: SortDirection = SortDirection.DEC,
  sort: SortType = SortType.CREATED,
  page: number,
) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues?direction=${direction}&sort=${sort}&page=${page}&per_page=${ISSUES_PER_PAGE}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
