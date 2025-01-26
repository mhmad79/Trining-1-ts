import NamePage from '@/components/namePage'
import DynamicTable from '@/components/table'
import React from 'react'

type Props = {}

export default function RegisterPage({}: Props) {
  return (
    <div className=" py-10">
            <NamePage name={'سجل المزامنة'} />
            <DynamicTable />
    </div>
  )
}