import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {IssueList} from './src/components/IssueList';
import {Controls, SortDirection, SortType} from './src/components/Controlls';
import {getIssues} from './src/helpers/github';
import {IssueInterface} from './src/components/Issue';

export const ISSUES_PER_PAGE = 5;

const App = () => {
  const [owner, setOwner] = useState<string>('');
  const [repo, setRepo] = useState<string>('');
  const [direction, setDirection] = useState<SortDirection>(SortDirection.DEC);
  const [sort, setSort] = useState<SortType>(SortType.CREATED);
  const [page, setPage] = useState<number>(1);
  const [issues, setIssues] = useState<IssueInterface[]>([]);
  const [fetch, setFetch] = useState<boolean>(false);

  useEffect(() => {
    if (fetch) {
      getIssues(owner, repo, direction, sort, page).then(
        (value: IssueInterface[]) => setIssues(value),
      );
    }
  }, [direction, owner, page, repo, sort, fetch]);

  return (
    <SafeAreaView>
      <Controls
        issueCount={issues.length}
        page={page}
        currentSortDirection={direction}
        owner={owner}
        repo={repo}
        pageChange={setPage}
        fetchIssues={setFetch}
        setSortType={setSort}
        setSortDirection={setDirection}
        setNewOwner={setOwner}
        setNewRepo={setRepo}
      />
      <IssueList issues={issues} />
    </SafeAreaView>
  );
};

export default App;
