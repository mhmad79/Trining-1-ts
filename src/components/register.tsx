'use client'
import ArrowUpRight from '@/icons/arrow-up-right'
import ArrowPointingIn from '@/icons/arrows-pointing-in'
import BarsArrowDown from '@/icons/bars-arrow-down'
import Delete from '@/icons/delete'
import DocumentArrowDown from '@/icons/document-arrow-down'
import React, { useState } from 'react'

type Props = {}

export default function Register({}: Props) {
    const [shoDetails, setShowDetails] = useState(false)

    const handleDetailsClick = () => {
        setShowDetails(!shoDetails);
    }
    return (
        <div className=" ">
            <div className=" flex gap-5 w-full ">
                <button className="px-12 py-2">بحث</button>
                <input className="hover:bg-gray-100 focus:ring-0 " type="text" placeholder="from" />
                <input className="hover:bg-gray-100 focus:ring-0 " type="text" placeholder="To" />
            </div>
                {/* icon */}
            <div className=" flex gap-3 justify-end my-5">
                <ArrowUpRight  />
                <BarsArrowDown />
                <DocumentArrowDown />
                <ArrowPointingIn />
                <Delete />
            </div>

            <div >
                <table className=" w-full m-auto">
                    <thead className=" bg-gray-100">
                        <tr>
                            <th className=" p-2 border">النزع</th>
                            <th className=" p-2 border">الحالة</th>
                            <th className=" p-2 border">مزامنة الية</th>
                            <th className=" p-2 border">وقت البدء</th>
                            <th className=" p-2 border">وقت النتهاء</th>
                            <th className=" p-2 border">اجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {shoDetails && (
                <div className=" mt-6 overflow-x-auto">
                 <table className=" w-full text-sm text-center border-gray-300">
                     <thead className="bg-gray-100">
                         <tr>
                             <th className=" p-2 border">رسالة الخطأ</th>
                             <th className=" p-2 border">نوع الخطأ</th>
                             <th className=" p-2 border">الرمز</th>
                             <th className=" p-2 border">الوقت</th>
                             <th className=" p-2 border">الرسالة</th>
                             <th className=" p-2 border">الحالة</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td className=" p-2 border">Unknown WooCommerce Restful API.version</td>
                             <td className=" p-2 border">معلومات</td>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">1:13:25 30/12/2024 PM</td>
                             <td className="p-2 border"> عدد الموارد التي سوف يتم مزامنتها 343</td>
                             <td className=" p-2 border">ناجح</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">Unknown WooCommerce Restful API.version</td>
                             <td className=" p-2 border">خطء</td>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">1:13:25 30/12/2024 PM</td>
                             <td className="p-2 border"> حصل خطء خلال مزامنة المادة 1256800250</td>
                             <td className=" p-2 border">فشل</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">Unknown WooCommerce Restful API.version</td>
                             <td className=" p-2 border">خطء</td>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">1:13:25 30/12/2024 PM</td>
                             <td className="p-2 border"> حصل خطء خلال مزامنة المادة 1256800250</td>
                             <td className=" p-2 border">فشل</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">Unknown WooCommerce Restful API.version</td>
                             <td className=" p-2 border">خطء</td>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">1:13:25 30/12/2024 PM</td>
                             <td className="p-2 border"> حصل خطء خلال مزامنة المادة 1256800250</td>
                             <td className=" p-2 border">فشل</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">Unknown WooCommerce Restful API.version</td>
                             <td className=" p-2 border">خطء</td>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">1:13:25 30/12/2024 PM</td>
                             <td className="p-2 border"> حصل خطء خلال مزامنة المادة 1256800250</td>
                             <td className=" p-2 border">فشل</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">Unknown WooCommerce Restful API.version</td>
                             <td className=" p-2 border">خطء</td>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">1:13:25 30/12/2024 PM</td>
                             <td className="p-2 border"> حصل خطء خلال مزامنة المادة 1256800250</td>
                             <td className=" p-2 border">فشل</td>
                         </tr>
                     </tbody>
                 </table>
                 <div className=" flex justify-between mt-6">
                 <div>
                    <p>الظاهر 1 ال 10 من 344 سجل <select 
                        id="options" 
                        className=" p-2 border border-gray-300 rounded-md bg-white focus:ring-2 "
                        >
                        <option value="option1">1</option>
                        <option value="option2">2</option>
                        <option value="option3">3</option>
                        <option value="option4">4</option>
                        <option value="option5">5</option>
                        <option value="option6">6</option>
                        <option value="option7">7</option>
                        <option value="option8">8</option>
                        <option value="option9">9</option>
                        <option value="option10"> 10</option>
                        <option value="option11"> 11</option>
                        <option value="option12"> 12</option>
                    </select> لكل صفحه</p>
                </div>
                    <ul className=" li-register flex justify-end">
                        <li>1</li>
                        <li className=" bg-blue-600">2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>...</li>
                        <li>35</li>
                    </ul>
            </div>
             </div>
            )}
        </div>
  )
}