import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const Member = (props: any) => {
    const columns = [{
        id: "avatar",
        title: "",

    }, {
        id: "name",
        title: "Name",
    },
    {
        id: "position",
        title: "Position",
    },
    {
        id: "office",
        title: "Office",
    },
    {
        id: "email",
        title: "Email",
    },
    {
        id: "phone",
        title: "Phone"
    }
    ];

    const rows = [{
        id: 1,
        cells: [
            {
                id: "avatar",
                value: "assets/images/avatars/james.jpg",
            },
            {
                id: "name",
                value: "Nedya Amrih Prakasa"
            },
            {
                id: "position",
                value: "Manager"
            },
            {
                id: "office",
                value: "Jakarta"
            },
            {
                id: "email",
                value: "prakasa@devetek.com"
            },
            {
                id: "phone",
                value: "082113468822"
            }
        ],
    },
    {
        id: 2,
        cells: [
            {
                id: "avatar",
                value: "assets/images/avatars/garry.jpg",
            },
            {
                id: "name",
                value: "Muhammad Syah Rulli"
            },
            {
                id: "position",
                value: "Creative"
            },
            {
                id: "office",
                value: "Jakarta"
            },
            {
                id: "email",
                value: "ruculss@gmail.com"
            },
            {
                id: "phone",
                value: "085885862968"
            }
        ],
    },
    {
        id: 1,
        cells: [
            {
                id: "avatar",
                value: "assets/images/avatars/andrew.jpg",
            },
            {
                id: "name",
                value: "Tumiran"
            },
            {
                id: "position",
                value: "Operational"
            },
            {
                id: "office",
                value: "Jakarta"
            },
            {
                id: "email",
                value: "gandhosxp@gmail.com"
            },
            {
                id: "phone",
                value: "082138184418"
            }
        ],
    },
    ];

    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between px-16 h-64 border-b-1">
                <Typography className="text-16">Tim</Typography>
                <Typography className="text-11 font-500 rounded-4 text-white bg-blue px-8 py-4">
                    {`${rows.length} Members`}
                </Typography>
            </div>
            <div className="table-responsive">
                <Table className="w-full min-w-full" size="small">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => {
                                switch (column.id) {
                                    case 'avatar': {
                                        return (
                                            <TableCell key={column.id} className="whitespace-no-wrap p-8 px-16">
                                                {column.title}
                                            </TableCell>
                                        );
                                    }
                                    default: {
                                        return (
                                            <TableCell key={column.id} className="whitespace-no-wrap">
                                                {column.title}
                                            </TableCell>
                                        );
                                    }
                                }
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                {row.cells.map(cell => {
                                    switch (cell.id) {
                                        case 'avatar': {
                                            return (
                                                <TableCell key={cell.id} component="th" scope="row" className="px-16">
                                                    <Avatar src={cell.value} />
                                                </TableCell>
                                            );
                                        }
                                        case 'name': {
                                            return (
                                                <TableCell
                                                    key={cell.id}
                                                    component="th"
                                                    scope="row"
                                                    className="truncate font-600"
                                                >
                                                    {cell.value}
                                                </TableCell>
                                            );
                                        }
                                        default: {
                                            return (
                                                <TableCell
                                                    key={cell.id}
                                                    component="th"
                                                    scope="row"
                                                    className="truncate"
                                                >
                                                    {cell.value}
                                                </TableCell>
                                            );
                                        }
                                    }
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}

export default Member;
