import {ISSUES_PER_PAGE} from '../../App';
import {SortDirection, SortType} from '../components/Controlls';
import {IssueInterface} from '../components/Issue';

export const getIssues = async (
  owner: string,
  repo: string,
  direction: SortDirection = SortDirection.DEC,
  sort: SortType = SortType.CREATED,
  page: number,
): Promise<Array<IssueInterface>> => {
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
    const data = await response.json();
    if (data?.message !== 'Not Found') {
      return data;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
