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

function Generators(props) {
    const classes = useStyles();

    function createData(generatorName, oneDayPrice, threeDaysPrice, longRentPrice) {
        return { generatorName, oneDayPrice, threeDaysPrice, longRentPrice };
    }

    const rows = [
        createData('גנרטור 1000 וואט', 98, 85, 75),
        createData('גנרטור 2200 וואט אינוורטר AVR', 137, 125, 110),
        createData('גנרטור 5500 וואט אינוורטר AVR', 248, 235, 210),
    ];

    return (
        <MainComponentContainer>
            <Head>
                <title>{"מחירון השכרת גנרטורים" + " - Power-Tools.co.il"}</title>
                <meta name="description" content={"רשימת גנרטורים ומחירון להשכרת גנרטור ל-24 שעות או יותר"} />
                <meta name="keywords" content={"מחירון השכרת גנרטור, השכרת גנרטור מחיר, מחיר שכירות גנרטור, עלות השכרת גנרטור, מחיר גנרטור"} />
            </Head>

            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <caption style={{ textAlign: "right" }}>המחירים בש"ח ולא כוללים מע"מ</caption>
                    <caption style={{ textAlign: "right", paddingTop: '0px' }}>המחירים עבור יום השכרה אחד</caption>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>גודל הגנרטור</StyledTableCell>
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

export default Generators;