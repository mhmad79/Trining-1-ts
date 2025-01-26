'use client'
import { FaBars } from "react-icons/fa";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

type Props = {}

export default function Header({}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // دالة لإغلاق القائمة عند الضغط على أي رابط
    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    // دالة لإغلاق القائمة عند الضغط خارجها
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && !(event.target as HTMLElement).closest('.menu-container')) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])

    return (
        <div>
            <header>
                <nav className="flex justify-between items-center p-4 bg-gray-950 text-white max-h-14">
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition">خروج</button>
                        <p className="text-lg font-semibold">! alaa مرحبا</p>
                    </div>
                    <div className="menu-container">
                        {/* القائمة للأجهزة الكبيرة */}
                        <ul className="hidden space-x-6 md:flex">
                            <li>
                                <details className="group relative">
                                    <summary className="cursor-pointer hover:text-gray-400 transition">الإعدادات</summary>
                                    <ul className="absolute bg-gray-800 text-white p-2 rounded shadow-lg hidden group-open:block">
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded">
                                            <Link href="#" onClick={handleLinkClick}>1</Link>
                                        </li>
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded">
                                            <Link href="#" onClick={handleLinkClick}>2</Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group relative">
                                    <summary className="cursor-pointer hover:text-gray-400 transition">الموقع</summary>
                                    <ul className="absolute w-32 bg-gray-800 text-white p-2 rounded shadow-lg hidden group-open:block">
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded">
                                            <Link href="/sync" onClick={handleLinkClick}>المزامنة</Link>
                                        </li>
                                        <li className="hover:bg-gray-700 px-4 py-2 rounded">
                                            <Link href="/register" onClick={handleLinkClick}>سجل المزامنة</Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>الاحصائيات</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>الحجوزات</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>نماذج</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>السجل</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>عرض التسليم</Link></li>
                        </ul>

                        {/* القائمة للأجهزة الصغيرة */}
                        {isMenuOpen && (
                            <div className="relative">
                                <ul className="flex flex-col md:hidden absolute mt-7 w-60 p-9 bg-black gap-3 rounded shadow-lg">
                                    <li>
                                        <details className="group relative">
                                            <summary className="flex cursor-pointer hover:text-gray-400 transition">الإعدادات</summary>
                                            <ul className="absolute text-white p-2 rounded shadow-lg hidden group-open:block bg-black right-48">
                                                <li className="hover:bg-gray-700 px-4 py-2 rounded">
                                                    <Link href="#" onClick={handleLinkClick}>1</Link>
                                                </li>
                                                <li className="hover:bg-gray-700 px-4 py-2 rounded">
                                                    <Link href="#" onClick={handleLinkClick}>2</Link>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details className="group relative">
                                            <summary className="cursor-pointer hover:text-gray-400 transition">الموقع</summary>
                                            <ul className="absolute w-32 text-white p-2 rounded shadow-lg hidden group-open:block bg-black right-48">
                                                <li className="hover:bg-gray-700 px-4 py-2 rounded">
                                                    <Link href="/sync" onClick={handleLinkClick}>المزامنة</Link>
                                                </li>
                                                <li className="hover:bg-gray-700 px-4 py-2 rounded">
                                                    <Link href="/register" onClick={handleLinkClick}>سجل المزامنة</Link>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>الاحصائيات</Link></li>
                                    <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>الحجوزات</Link></li>
                                    <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>نماذج</Link></li>
                                    <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>السجل</Link></li>
                                    <li><Link href="#" className="hover:text-gray-400 transition" onClick={handleLinkClick}>عرض التسليم</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* زر القائمة للأجهزة الصغيرة */}
                    <div className="md:hidden relative">
                        <button 
                            className="focus:outline-none" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <FaBars className="text-white w-7 bg-black"/>
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
