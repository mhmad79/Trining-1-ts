import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className=" flex justify-center items-center flex-col mb-2">
            <div className=" line "></div>
            <div>
                <p><span className=" text-blue-600">Bareek Media</span>-2025 &copy;</p>
            </div>
    </div>
  )
}