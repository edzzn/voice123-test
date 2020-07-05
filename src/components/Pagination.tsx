import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { PaginationInfo } from '../App';
import Pagination from '@material-ui/lab/Pagination';

export interface PaginationProps {
  paginationInfo: PaginationInfo;
  onPageChange: (newPage: number) => void;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  })
);

function PaginationComponent(props: PaginationProps) {
  const handleChange = (_e: any, value: number) => {
    props.onPageChange(value);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={props.paginationInfo.totalPages}
        page={props.paginationInfo.currentPage}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationComponent;
