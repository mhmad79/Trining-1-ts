import NamePage from '@/components/namePage'
import Register from '@/components/register'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className=" py-10">
            <NamePage name={'سجل المزامنة'} />
            <Register />
    </div>
  )
}