import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject, debounceTime, distinctUntilChanged, skip, tap } from "rxjs";

const useId = () => "volume-list";

export default function Volume() {
  const [volume, setVolume] = useState(NaN);

  useEffect(() => {
    fetch("api/audio/volume")
      .then((res) => res.json())
      .then(({ volume }) => volume)
      .then(setVolume);
  }, []);

  const volume$ = useMemo(() => new Subject<number>(), []);

  useEffect(() => {
    const subscription = volume$
      .pipe(
        skip(1),
        tap(console.log),
        distinctUntilChanged(),
        debounceTime(400),
      )
      .subscribe((volume) =>
        fetch(`api/audio/volume/${volume}`)
          .then((res) => res.json())
          .then(console.log),
      );
    return () => subscription.unsubscribe();
  }, [volume$]);

  useEffect(() => {
    if (!Number.isNaN(volume)) {
      volume$.next(volume);
    }
  }, [volume]);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setVolume(Number(target.value)),
    [],
  );

  const listId = useId();

  return (
    <div>
      {!Number.isNaN(volume) && (
        <input
          type="range"
          list={listId}
          min="0"
          max="100"
          value={volume}
          onChange={handleChange}
        />
      )}
      <datalist id={listId}>
        {[...Array(10 + 1)].map((_, index, array) => (
          <option
            key={index}
            value={(100 / (array.length - 1)) * index}
          ></option>
        ))}
      </datalist>
    </div>
  );
}
