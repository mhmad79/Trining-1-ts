import React from 'react'
import NamePage from './namePage'

export default function Sync() {
  return (
    <div className="mt-2">
      {/* عنوان الصفحة */}
      <NamePage name={'مزامنة الموقع'} />

      {/* بطاقة النموذج */}
      <div className="flex flex-col m-auto bg-white w-full max-w-md gap-6 p-8 rounded-lg shadow-lg border border-gray-200">
        
        {/* إضافة الأب */}
        <div className="flex items-center justify-end gap-2">
          <input type="checkbox" id="addFather" className="w-5 h-5 accent-blue-600 cursor-pointer" />
          <label htmlFor="addFather" className="text-gray-700 font-medium cursor-pointer">إضافة الأب؟</label>
        </div>

        {/* حقل اسم الأب */}
        <div className="flex flex-col">
          <label htmlFor="fatherName" className="flex justify-end text-gray-700 font-medium mb-1">
            الأب:
          </label>
          <input 
            id="fatherName"
            type="text" 
            placeholder="اكتب اسم الأب" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
          />
        </div>

        {/* قائمة الخيارات */}
        <div className="w-full">
          <select 
            id="options" 
            className="w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={`option${i + 1}`}>{`الخيار ${i + 1}`}</option>
            ))}
          </select>
        </div>

        {/* مزامنة التحديث */}
        <div className="flex items-center justify-end gap-2">
          <input type="checkbox" id="syncUpdate" className="w-5 h-5 accent-blue-600 cursor-pointer" />
          <label htmlFor="syncUpdate" className="text-gray-700 font-medium cursor-pointer">مزامنة التحديث؟</label>
        </div>

        {/* زر المزامنة */}
        <div className="flex justify-center">
          <button 
            className="px-12 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            مزامنة
          </button>
        </div>
      </div>
    </div>
  )
}
