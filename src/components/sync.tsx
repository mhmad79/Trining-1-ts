'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import NamePage from "./namePage";
import  { API_ENDPOINTS } from "@/API/apiSync";

// 🟢 تعريف نوع الصفة المسترجعة من الـ API
interface Category {
  valu: number;
  name: string;
}

export default function Sync() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [isAddingFather, setIsAddingFather] = useState<boolean>(false);
  const [fatherName, setFatherName] = useState<string>("");


  // 🔹 جلب البيانات من API
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get<Category[]>(API_ENDPOINTS.GET_CATEGORIES);
        
        setCategories(response.data);
        console.log("البيانات المسترجعة:", response.data); // تأكد من شكل البيانات هنا
      } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error);
      }
    }
    fetchCategories();
  }, []);

  // 🔹 دالة إرسال اسم الأب إلى API
  async function handleAddFather() {
    if (!fatherName) {
      alert("يرجى إدخال اسم الأب!");
      return;
    }

    setIsAddingFather(true);
    try {
      const response = await axios.post(API_ENDPOINTS.ADD_FATHER, { name: fatherName });
      console.log("تمت إضافة الأب:", response.data);
      alert("تمت إضافة الأب بنجاح!");
    } catch (error) {
      console.error("فشل في إضافة الأب:", error);
      alert("حدث خطأ أثناء إضافة الأب.");
    }
    setIsAddingFather(false);
  }

  // 🔹 دالة المزامنة
  async function handleSync() {
    if (!selectedCategory) {
      alert("يرجى اختيار صفة قبل المزامنة!");
      return;
    }

    setIsSyncing(true);
    try {
      const response = await axios.post(API_ENDPOINTS.SYNC_DATA, { category: selectedCategory });
      console.log("تمت المزامنة بنجاح:", response.data);
      alert("تمت المزامنة بنجاح!");
    } catch (error) {
      console.error("فشل في المزامنة:", error);
      alert("حدث خطأ أثناء المزامنة.");
    }
    setIsSyncing(false);
  }

  return (
    <div className="mt-2">
      <NamePage name={"مزامنة الموقع"} />

      <div className="flex flex-col m-auto bg-white w-full max-w-md gap-6 p-8 rounded-lg shadow-lg border border-gray-200">
        
        {/* إضافة الأب */}
        <div className="flex items-center justify-end gap-2">
          <input 
            type="checkbox" 
            id="addFather" 
            className="w-5 h-5 accent-blue-600 cursor-pointer"
            onChange={(e) => setIsAddingFather(e.target.checked)}
          />
          <label htmlFor="addFather" className="text-gray-700 font-medium cursor-pointer">إضافة الأب؟</label>
        </div>

        {/* إدخال اسم الأب */}
        {isAddingFather && (
          <div className="flex flex-col">
            <label htmlFor="fatherName" className="flex justify-end text-gray-700 font-medium mb-1">
              الأب:
            </label>
            <input 
              id="fatherName"
              type="text" 
              placeholder="اكتب اسم الأب" 
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
            />
            <button 
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300"
              onClick={handleAddFather}
              disabled={isAddingFather}
            >
              {isAddingFather ? "جاري الإضافة..." : "إضافة الأب"}
            </button>
          </div>
        )}


        {/* قائمة الفئات */}
        <div className="w-full">
          <select 
            id="options" 
            className="w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">اختر الصفة</option>
            {categories.map((category) => (
              <option key={category.valu} value={category.valu.toString()}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* زر المزامنة */}
        <div className="flex justify-center">
          <button 
            className="px-12 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300"
            onClick={handleSync}
            disabled={isSyncing}
          >
            {isSyncing ? "جاري المزامنة..." : "مزامنة"}
          </button>
        </div>
      </div>
    </div>
  );
}