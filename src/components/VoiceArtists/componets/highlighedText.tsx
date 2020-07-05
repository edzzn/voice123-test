import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export interface HighlightedTextProps {
  text: string;
  searchTerm: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textHighlight: {
      backgroundColor: '#a3aff0',
      padding: 2,
    },
  })
);

function truncateText(text: string, length: number): string {
  if (text && text.length > length) return text.substring(0, length) + '...';
  else return text;
}

function getFirstMatchingParagraph(
  summary: string,
  searchTerm: string = ''
): string {
  let paragraphs = summary.split('\n');
  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    if (paragraph.includes(searchTerm)) {
      return paragraph;
    }
  }
  return summary;
}

function HighlightedText(props: HighlightedTextProps) {
  const classes = useStyles();

  if (
    props.searchTerm.trim() === '' ||
    !props.text.includes(props.searchTerm)
  ) {
    return <span>{truncateText(props.text, 200)}</span>;
  }

  const firstParagraph = getFirstMatchingParagraph(
    props.text,
    props.searchTerm
  );
  const searchTermIndex = firstParagraph.indexOf(props.searchTerm);

  const pre = <span>{firstParagraph.slice(0, searchTermIndex)}</span>;
  const highlighted = (
    <span className={classes.textHighlight}>
      {firstParagraph.slice(
        searchTermIndex,
        searchTermIndex + props.searchTerm.length
      )}
    </span>
  );
  const post = (
    <span>
      {truncateText(
        firstParagraph.slice(searchTermIndex + props.searchTerm.length),
        100
      )}
    </span>
  );

  return (
    <span>
      {pre}
      {highlighted}
      {post}
    </span>
  );
}

export default HighlightedText;
