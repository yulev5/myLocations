import React from 'react';
import MainComponentContainer from 'components/ContainerComponents/MainComponentContainer';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, withStyles } from '@material-ui/core';
import Head from 'next/head';

const useStyles = makeStyles({
    table: {
        //   width: '100%',
    },
    rowHeaderStyle:{
        textAlign: 'right'
    },
});

const StyledTableCell = withStyles({
    root: {
        textAlign: 'center',
    }
})(TableCell);

function ChainSaws(props) {
    const classes = useStyles();

    function createData(generatorName, oneDayPrice, threeDaysPrice, longRentPrice) {
        return { generatorName, oneDayPrice, threeDaysPrice, longRentPrice };
    }

    const rows = [
        createData('מקדחת יהלום ידנית עד קוטר 2.5 אינצ\'', 128, 119, 105),
        createData('מקדחת יהלום עם סטנד וכוסות עד קוטר 6 אינצ\'', 280, 250, 210),
        createData('מקדחת יהלום עם סטנד וכוסות עד קוטר 12 אינצ\'', 419, 405, 380),
    ];

    return (
        <MainComponentContainer>
            <Head>
                <title>{מחירון השכרת מסורי שרשרת}</title>
                <meta name="description" content={"השכרת מקדחת יהלום עם סטנד או ידנית עם כוסות קידוח יהלום בגדלים שונים למגוון עבודות"} />
                <meta name="keywords" content={"השכרת מקדחת יהלום, השכרת מקדח יהלום, השכרת כוס קידוח יהלום, השכרת כוס יהלום, השכרת מקדח יהלום למזגן"} />
            </Head>

            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <caption style={{ textAlign: "right" }}>המחירים בש"ח ולא כוללים מע"מ</caption>
                    <caption style={{ textAlign: "right", paddingTop: '0px' }}>המחירים עבור יום השכרה אחד</caption>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>סוג מקדחת ההילום</StyledTableCell>
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

export default ChainSaws;