import React, {
  type MouseEventHandler,
  type ReactNode,
  useCallback,
  useState,
} from "react";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  min-inline-size: auto;
`;

const StyledLegend = styled.legend``;

export function Fieldset({
  children,
  expanded: initiallyExpanded = false,
  legend,
}: {
  children: any;
  expanded?: boolean;
  legend: string;
}) {
  const [expanded, setExpanded] = useState(() => initiallyExpanded);

  const handleExpand = useCallback<MouseEventHandler>(
    (e) => (e.preventDefault(), setExpanded((expanded) => !expanded)),
    []
  );
  return (
    <StyledFieldset>
      {legend && (
        <StyledLegend>
          <a href="#" onClick={handleExpand}>{`${
            expanded ? "-" : "+"
          } ${legend}`}</a>
        </StyledLegend>
      )}
      {expanded && children}
    </StyledFieldset>
  );
}
