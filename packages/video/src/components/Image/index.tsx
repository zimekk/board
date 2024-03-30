import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";
import { Subject, mergeMap, tap } from "rxjs";
import styled from "styled-components";

const StyledImage = styled.img`
  position: relative;
`;

interface SubjectType {
  src: string;
  resolve: (value: unknown) => void;
}

const Context = createContext<Subject<SubjectType>>(null);

const createImage = async (src: string) =>
  new Promise((resolve) => {
    const img = new Image();
    Object.assign(img, {
      onload: () => resolve(src),
      onerror: () => resolve(src),
      src,
    });
  });

export function LazyImageProvider({ children }: { children: ReactNode }) {
  const subject$ = useMemo(() => new Subject<SubjectType>(), []);

  useLayoutEffect(() => {
    const subscription = subject$
      .pipe(
        tap(console.log),
        mergeMap(
          ({ src, resolve }) =>
            new Promise((resolve) => setTimeout(resolve, 500, src))
              .then(createImage)
              .then(resolve),
          3,
        ),
      )
      .subscribe(console.log);
    return () => subscription.unsubscribe();
  }, []);

  return <Context.Provider value={subject$}>{children}</Context.Provider>;
}

export function LazyImage({ src, width, height }: ComponentProps<"img">) {
  const [visible, setVisible] = useState(false);
  const subject$ = useContext(Context);

  useEffect(() => {
    new Promise((resolve) => {
      subject$.next({ src, resolve });
    }).then(() => setVisible(true));
    return () => {};
  }, []);

  return visible ? (
    <StyledImage
      src={src}
      width={width}
      height={height}
      referrerPolicy="no-referrer"
    />
  ) : null;
}
