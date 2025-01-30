'use client';

import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  MRT_GlobalFilterTextField,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
} from 'material-react-table';
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useState, useMemo } from 'react';

interface MyData {
  id: number;
  endTime?: string;
  startTime?: string;
  sync?: string;
  status?: string;
  type?: string;
  state?: string;
  messageOfError?: string;
  typeOfError?: string;
  symbol?: string;
  time?: string;
  message?: string;
}

interface CustomTableProps<T extends MyData> {
  columns: MRT_ColumnDef<T>[];
  data: T[];
  title?: string;
  detailColumns?: MRT_ColumnDef<T>[];
  detailData?: T[];
}

const CustomTable = <T extends MyData>({
  columns,
  data,
  detailColumns,
  detailData,
}: CustomTableProps<T>) => {
  const [showDetails, setShowDetails] = useState(false);
  const [detailsRowData, setDetailsRowData] = useState<T | null>(null);

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: false,
    enableMultiRowSelection: false,
    enableGlobalFilter: true,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
  });

  const handleDetailsClick = (rowData: T) => {
    setDetailsRowData(rowData);
    setShowDetails(true);
  };

  const handleBackClick = () => {
    setShowDetails(false);
    setDetailsRowData(null);
  };

  const filteredDetailData = useMemo(() => {
    return detailData?.filter((row) => row.id === detailsRowData?.id) || [];
  }, [detailData, detailsRowData]);

  const updatedColumns = useMemo(() => [
    ...columns,
    {
      id: 'actions', // 
      header: '',
      Cell: ({ row }) => (
        <Button variant="contained"  className='bg-red-600' onClick={() => handleDetailsClick(row.original)}>
          تفاصيل
        </Button>
      ),
    },
  ], [columns]);

  return (
    <Stack sx={{ m: '2rem 0' }}>
      {!showDetails ? (
        // <TableContainer sx={{ border: '1px solid #ccc', borderRadius: '4px' }}>
          <MaterialReactTable
            columns={updatedColumns}
            data={data}
            muiTableProps={{
              sx: {
                '& .MuiTableRow-root': {
                  textAlign: 'center',
                  border: '1px solid #eee'  ,  // إضافة حدود حول الصف
                },
                '& .MuiTableCell-root': {
                  textAlign: 'center', 
                  border: '1px solid #ccc', // إضافة حدود حول الخلايا داخل الصفوف
                },
              },
            }}
            muiTableHeadCellProps={{
              sx: {
                textAlign: 'center', // محاذاة النص في وسط الرأس
                bgcolor: '#ddd'
              },
            }}
          />
        // </TableContainer>
      ) : (
        <Stack sx={{ m: '2rem 0' }}>
          <Button variant="contained" className='bg-red-600' onClick={handleBackClick} sx={{ mb: 2 }}>
            الرجوع الى الجدول الرئيسي
          </Button>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , padding: '20px 0' }}>
            <MRT_GlobalFilterTextField table={table} />
            <MRT_TablePagination table={table} />
          </Box>

          <TableContainer>
            <Table sx={{ border: '1px solid #ccc', borderRadius: '4px' }}>
              <TableHead className=' bg-gray-200'>
                <TableRow>
                  {detailColumns?.map((column) => (
                    <TableCell
                      key={column.accessorKey}
                      align="center"
                      sx={{
                        border: '1px solid #ccc',
                        padding: '8px',
                      }}
                    >
                      {column.header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredDetailData.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {detailColumns?.map((column) => (
                      <TableCell
                        key={column.accessorKey}
                        align="center"
                        sx={{
                          border: '1px solid #ccc',
                          padding: '8px',
                        }}
                      >
                        {row[column.accessorKey as keyof T] != null
                          ? String(row[column.accessorKey as keyof T])
                          : ''}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
        </Stack>
      )}
    </Stack>
  );
};

export default CustomTable;
