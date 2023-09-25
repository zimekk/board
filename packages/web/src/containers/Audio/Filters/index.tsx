import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { Subject, debounceTime, distinctUntilChanged, map } from "rxjs";

const INITIAL_FILTERS = {
  search: "",
};

type FiltersState = typeof INITIAL_FILTERS;

export const stringifyFilters = ({ search, ...filters }: FiltersState) =>
  JSON.stringify({
    ...filters,
    search: search.toLowerCase().trim(),
  });

export const initialQueries = () =>
  JSON.parse(stringifyFilters(INITIAL_FILTERS));

export default function Filters({
  setQueries,
}: {
  setQueries: Dispatch<SetStateAction<FiltersState>>;
}) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(map(stringifyFilters), distinctUntilChanged(), debounceTime(400))
      .subscribe((filters) =>
        setQueries((queries) => ({ ...queries, ...JSON.parse(filters) }))
      );
    return () => subscription.unsubscribe();
  }, [search$]);

  useEffect(() => {
    search$.next(filters);
  }, [filters]);

  return (
    <div>
      <input
        type="search"
        value={filters.search}
        onChange={useCallback(
          ({ target }) =>
            setFilters((filters) => ({
              ...filters,
              search: target.value,
            })),
          []
        )}
      />
    </div>
  );
}
