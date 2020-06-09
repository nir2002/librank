import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MDTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(packageName: string, stars: number) {
  return { packageName, stars };
}

const rows = [
  createData('React', 150103),
  createData('VueJS', 120450),
  createData('Angular', 31320),
];

export default function Table() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <MDTable className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Package</TableCell>
            <TableCell align="right">Stars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.packageName}>
              <TableCell component="th" scope="row">
                {row.packageName}
              </TableCell>
              <TableCell align="right">{row.stars}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MDTable>
    </TableContainer>
  );
}
