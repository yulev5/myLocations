import React from 'react';
import MainComponentContainer from 'components/ContainerComponents/MainComponentContainer';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, withStyles } from '@material-ui/core';
import Head from 'next/head';

const useStyles = makeStyles({
    table: {
        //   width: '100%',
    },
    rowHeaderStyle: {
        textAlign: 'right'
    },
});

const StyledTableCell = withStyles({
    root: {
        textAlign: 'center',
    }
})(TableCell);

function WaterPressureCleaners(props) {
    const classes = useStyles();

    function createData(generatorName, oneDayPrice, threeDaysPrice, longRentPrice) {
        return { generatorName, oneDayPrice, threeDaysPrice, longRentPrice };
    }

    const rows = [
    ];

    return (
        <MainComponentContainer >
            <Head>
            </Head>

            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <caption style={{ textAlign: "right" }}>המחירים בש"ח ולא כוללים מע"מ</caption>
                    <caption style={{ textAlign: "right", paddingTop: '0px' }}>המחירים עבור יום השכרה אחד</caption>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>סוג הכלי</StyledTableCell>
                            <StyledTableCell>השכרה ל-24 שעות</StyledTableCell>
                            <StyledTableCell>השכרה ל-2 עד 4 ימים</StyledTableCell>
                            <StyledTableCell>השכרה ל-5 ימים או יותר</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.generatorName}>
                                <TableCell component="th" scope="row" className={classes.rowHeaderStyle}>
                                    {row.generatorName}
                                </TableCell>
                                <StyledTableCell>{row.oneDayPrice}</StyledTableCell>
                                <StyledTableCell>{row.threeDaysPrice}</StyledTableCell>
                                <StyledTableCell>{row.longRentPrice}</StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>

        </MainComponentContainer>
    );
}

export default WaterPressureCleaners;