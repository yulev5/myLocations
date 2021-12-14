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

function ConcreteTools(props) {
    const classes = useStyles();

    function createData(generatorName, oneDayPrice, threeDaysPrice, longRentPrice) {
        return { generatorName, oneDayPrice, threeDaysPrice, longRentPrice };
    }

    const rows = [
        createData('מערבל בטון 150 ליטר', 154 ,145, 135),
        createData('הליקופטר לבטון',325, 305, 280),
        createData('ויברטור לבטון', 128, 119, 105),
        createData('מהדק אדמה ג\'בקה',220, 210, 190),
    ];

    return (
        <MainComponentContainer>
            <Head>
                <title>{"מחירון השכרת מהדק אדמה, מערבל בטון, הליקופטר לבטון ועוד" + " - Power-Tools.co.il"}</title>
                <meta name="description" content={"צפה במחירון המלא להשכרת ציוד וכלי עבודה לבטון כמו מהדק אדמה, הליקופטר לבטון, מערבל בטון, השכרת ויברטור לבטון ועוד"} />
                <meta name="keywords" content={"השכרת מערבל בטון, השכרת טפלה, השכרת מהדק אדמה, השכרת הליקופטר לבטון, השכרת ויברטור לבטון, השכרת ג'בקה להידוק אדמה"} />
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

export default ConcreteTools;