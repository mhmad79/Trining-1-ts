'use client'
import ArrowUpRight from '@/icons/arrow-up-right'
import ArrowPointingIn from '@/icons/arrows-pointing-in'
import BarsArrowDown from '@/icons/bars-arrow-down'
import Delete from '@/icons/delete'
import DocumentArrowDown from '@/icons/document-arrow-down'
import React, { useState } from 'react'

export default function Register() {
    const [showDetails, setShowDetails] = useState(false)

    const handleDetailsClick = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div className="p-6 bg-gray-50">
            <div className="flex gap-5 w-full">
                <button className="px-12 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">بحث</button>
                <input className="border p-2 rounded focus:ring-2 focus:ring-blue-400" type="text" placeholder="من" />
                <input className="border p-2 rounded focus:ring-2 focus:ring-blue-400" type="text" placeholder="إلى" />
            </div>

            {/* أيقونات */}
            <div className="flex gap-3 justify-end my-5">
                <ArrowUpRight className="re-icon text-blue-600" />
                <BarsArrowDown className='re-icon text-blue-600' />
                <DocumentArrowDown className='re-icon text-blue-600' />
                <ArrowPointingIn className='re-icon text-blue-600' />
                <Delete className='re-icon text-red-600' />
            </div>

            {/* الجدول */}
            <div className='overflow-x-auto'>
                <table className="w-full text-center border-collapse border border-gray-300 bg-white shadow-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">النزع</th>
                            <th className="p-2 border">الحالة</th>
                            <th className="p-2 border">مزامنة آلية</th>
                            <th className="p-2 border">وقت البدء</th>
                            <th className="p-2 border">وقت الانتهاء</th>
                            <th className="p-2 border">إجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(6).fill(0).map((_, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-2 border">نوع {index + 1}</td>
                                <td className="p-2 border text-green-600 font-semibold">ناجح</td>
                                <td className="p-2 border">نعم</td>
                                <td className="p-2 border">12:00 PM</td>
                                <td className="p-2 border">12:30 PM</td>
                                <td className="p-2 border">
                                    <button
                                        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                        onClick={handleDetailsClick}
                                    >
                                        التفاصيل  
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showDetails && (
                <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-sm text-center border border-gray-300 bg-white shadow-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">رسالة الخطأ</th>
                                <th className="p-2 border">نوع الخطأ</th>
                                <th className="p-2 border">الرمز</th>
                                <th className="p-2 border">الوقت</th>
                                <th className="p-2 border">الرسالة</th>
                                <th className="p-2 border">الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(5).fill(0).map((_, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="p-2 border">Unknown WooCommerce Restful API.version</td>
                                    <td className="p-2 border">خطأ</td>
                                    <td className="p-2 border">10337009</td>
                                    <td className="p-2 border">1:13:25 30/12/2024 PM</td>
                                    <td className="p-2 border">حصل خطأ خلال مزامنة المادة 1256800250</td>
                                    <td className="p-2 border text-red-600 font-semibold">فشل</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between mt-6 items-center">
                        <div>
                            <p>الظاهر 1 إلى 10 من 344 سجل 
                                <select 
                                    id="options" 
                                    className="p-2 border border-gray-300 rounded-md bg-white focus:ring-2 ml-2"
                                >
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select> 
                                لكل صفحة
                            </p>
                        </div>
                        <ul className="flex space-x-2">
                            <li className="px-3 py-1 border rounded bg-blue-600 text-white">1</li>
                            <li className="px-3 py-1 border rounded">2</li>
                            <li className="px-3 py-1 border rounded">3</li>
                            <li className="px-3 py-1 border rounded">4</li>
                            <li className="px-3 py-1 border rounded">5</li>
                            <li className="px-3 py-1 border rounded">...</li>
                            <li className="px-3 py-1 border rounded">35</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}
