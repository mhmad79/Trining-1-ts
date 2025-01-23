import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <div >
            <header>
                <nav className="flex justify-between items-center p-4 bg-gray-950 text-white max-h-14">
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition">خروج</button>
                        <p className="text-lg font-semibold">! alaa مرحبا</p>
                    </div>
                    <div>
                        <ul className="flex space-x-6">
                            <li>
                                <details className="group relative">
                                    <summary className="cursor-pointer hover:text-gray-400 transition">الإعدادات</summary>
                                    <ul className="absolute bg-gray-800 text-white p-2 rounded shadow-lg hidden group-open:block">
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded"><Link href="#">1</Link></li>
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded"><Link href="#">2</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group relative ">
                                    <summary className="cursor-pointer hover:text-gray-400 transition">الموقع</summary>
                                    <ul className="absolute w-32  bg-gray-800 text-white p-2 rounded shadow-lg hidden group-open:block">
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded "><Link href="/sync">المزامنة</Link></li>
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded"><Link href="/register">سجل المزامنة</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group relative">
                                    <summary className="cursor-pointer hover:text-gray-400 transition">الجرد</summary>
                                    <ul className="absolute bg-gray-800 text-white p-2 rounded shadow-lg hidden group-open:block">
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded"><Link href="#">1</Link></li>
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded"><Link href="#">2</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link href="#" className="hover:text-gray-400 transition">الاحصائيات</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition">الحجوزات</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition">نماذج</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition">السجل</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition">عرض التسليم </Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
  )
}