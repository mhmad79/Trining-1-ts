import React from 'react'
import NamePage from './namePage'

type Props = {}

export default function Sync({}: Props) {
  return (
    <div className="  py-10">
        {/* عنوان الصفحة */}
        <NamePage name={'مزامنة الموقع'} />

        {/* بطاقة النموذج */}
        <div className="flex flex-col  m-auto  bg-white w-96 gap-4 p-8 rounded-lg shadow-lg border border-gray-200">
            
            {/* إضافة الأب */}
            <div className="flex items-center justify-end gap-2 w-full">
                <input type="checkbox" id="addFather" className="w-5 h-5 accent-blue-600" />
                <label htmlFor="addFather" className="text-gray-700 font-medium">إضافة الأب؟</label>
            </div>

            {/* حقل اسم الأب */}
            <div className="flex flex-col ">
                <label className=" flex justify-end text-gray-700 font-medium mb-1">الأب:</label>
                <input 
                    type="text" 
                    placeholder="اكتب اسم الأب" 
                    className=""
                />
            </div>

            {/* قائمة الخيارات */}
            <div className="w-full">
                <select 
                    id="options" 
                    className="w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 "
                >
                    <option value="option1">الخيار 1</option>
                    <option value="option2">الخيار 2</option>
                    <option value="option3">الخيار 3</option>
                    <option value="option4">الخيار 4</option>
                    <option value="option5">الخيار 5</option>
                    <option value="option6">الخيار 6</option>
                    <option value="option7">الخيار 7</option>
                    <option value="option8">الخيار 8</option>
                    <option value="option9">الخيار 9</option>
                    <option value="option10">الخيار 10</option>
                    <option value="option11">الخيار 11</option>
                    <option value="option12">الخيار 12</option>
                </select>
            </div>

            {/* مزامنة التحديث */}
            <div className="flex items-center gap-2 w-full  justify-end">
                <input type="checkbox" id="syncUpdate" className="w-5 h-5 accent-blue-600" />
                <label htmlFor="syncUpdate" className="text-gray-700 font-medium">مزامنة التحديث؟</label>
            </div>

            {/* زر المزامنة */}
            <div className="flex justify-center w-full">
                <button className=" px-12 py-2">
                    مزامنة
                </button>
            </div>
        </div>
    </div>
  )
}