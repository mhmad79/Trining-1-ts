'use client';
import { useState, useMemo } from "react";
import { FaFilter, FaTrashAlt, FaPlus, FaInfoCircle, FaEdit } from "react-icons/fa";

interface RowData {
  id: number;
  type: string;
  status: string;
  sync: string;
  startTime: string;
  endTime: string;
}

export default function DynamicTable() {
  const initialData: RowData[] = [
    { id: 1, type: "نوع 1", status: "ناجح", sync: "نعم", startTime: "12:00 PM", endTime: "12:30 PM" },
    { id: 2, type: "نوع 2", status: "فشل", sync: "لا", startTime: "01:00 PM", endTime: "01:30 PM" },
    { id: 3, type: "نوع 3", status: "ناجح", sync: "نعم", startTime: "02:00 PM", endTime: "02:15 PM" },
  ];

  const [data, setData] = useState<RowData[]>(initialData);
  const [filter, setFilter] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [newRow, setNewRow] = useState<RowData>({
    id: 0,
    type: "",
    status: "",
    sync: "",
    startTime: "",
    endTime: ""
  });

  const [showDetails, setShowDetails] = useState<number | null>(null);
  const [editingRow, setEditingRow] = useState<RowData | null>(null);

  // تصفية البيانات باستخدام useMemo لتجنب إعادة التصفية غير الضرورية
  const filteredData = useMemo(() => {
    return data.filter(row => row.type.includes(filter));
  }, [data, filter]);

  // تفعيل أو إلغاء إضافة صف جديد
  const toggleAddRow = () => {
    setIsAdding(!isAdding);
    if (isAdding) {
      setNewRow({ id: 0, type: "", status: "", sync: "", startTime: "", endTime: "" });
    }
  };

  // إضافة صف جديد
  const addRow = () => {
    setData(prev => [
      ...prev,
      { ...newRow, id: prev.length + 1 }
    ]);
    setIsAdding(false);
    setNewRow({ id: 0, type: "", status: "", sync: "", startTime: "", endTime: "" });
  };

  // التعامل مع التغيير في الحقول
  const handleChange = (field: keyof RowData, value: string) => {
    setNewRow(prev => ({ ...prev, [field]: value }));
  };

  // تعديل الصف
  const handleEdit = (row: RowData) => {
    setEditingRow(row);
  };

  // حفظ التعديلات
  const saveEdit = () => {
    setData(prev => prev.map(row => row.id === editingRow?.id ? editingRow! : row));
    setEditingRow(null);
  };

  // إلغاء التعديل
  const cancelEdit = () => {
    setEditingRow(null);
  };

  // حذف الصف
  const deleteRow = (id: number) => {
    setData(prev => prev.filter(row => row.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex gap-3 justify-end mb-5">
        <input
          type="text"
          placeholder="ابحث حسب النوع"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={() => setFilter("")} className="bg-red-500 text-white p-2 rounded">
          <FaFilter /> إعادة ضبط
        </button>
      </div>

      <div className=" flex justify-end">
        <button onClick={toggleAddRow} className=" flex justify-end bg-green-500 text-white p-2 rounded mb-4">
          <FaPlus /> {isAdding ? "إلغاء إضافة" : "إضافة صف جديد"}
        </button>
      </div>

      {isAdding && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2 flex justify-start">إضافة صف جديد</h3>
          <div className="flex gap-3 mb-3">
            <input
              type="text"
              placeholder="النوع"
              value={newRow.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="الحالة"
              value={newRow.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="مزامنة"
              value={newRow.sync}
              onChange={(e) => handleChange('sync', e.target.value)}
              className="p-2 border rounded"
            />
          </div>
          <div className="flex gap-3 mb-3">
            <input
              type="text"
              placeholder="وقت البدء"
              value={newRow.startTime}
              onChange={(e) => handleChange('startTime', e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="وقت الانتهاء"
              value={newRow.endTime}
              onChange={(e) => handleChange('endTime', e.target.value)}
              className="p-2 border rounded"
            />
          </div>
          <div className=" flex justify-end">
            <button onClick={addRow} className=" bg-blue-500 text-white p-2 rounded ">
              إضافة الصف
            </button>
          </div>
        </div>
      )}

      <table className="w-full border-collapse border border-gray-200 mb-5">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">النوع</th>
            <th className="p-2 border">الحالة</th>
            <th className="p-2 border">مزامنة</th>
            <th className="p-2 border">وقت البدء</th>
            <th className="p-2 border">وقت الانتهاء</th>
            <th className="p-2 border">الإجراء</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{editingRow && editingRow.id === row.id ? (
                <input
                  type="text"
                  value={editingRow.type}
                  onChange={(e) => setEditingRow({ ...editingRow, type: e.target.value })}
                  className="p-2 border rounded"
                />
              ) : row.type}</td>
              <td className="p-2 border">{editingRow && editingRow.id === row.id ? (
                <input
                  type="text"
                  value={editingRow.status}
                  onChange={(e) => setEditingRow({ ...editingRow, status: e.target.value })}
                  className="p-2 border rounded"
                />
              ) : row.status}</td>
              <td className="p-2 border">{editingRow && editingRow.id === row.id ? (
                <input
                  type="text"
                  value={editingRow.sync}
                  onChange={(e) => setEditingRow({ ...editingRow, sync: e.target.value })}
                  className="p-2 border rounded"
                />
              ) : row.sync}</td>
              <td className="p-2 border">{editingRow && editingRow.id === row.id ? (
                <input
                  type="text"
                  value={editingRow.startTime}
                  onChange={(e) => setEditingRow({ ...editingRow, startTime: e.target.value })}
                  className="p-2 border rounded"
                />
              ) : row.startTime}</td>
              <td className="p-2 border">{editingRow && editingRow.id === row.id ? (
                <input
                  type="text"
                  value={editingRow.endTime}
                  onChange={(e) => setEditingRow({ ...editingRow, endTime: e.target.value })}
                  className="p-2 border rounded"
                />
              ) : row.endTime}</td>
              <td className="p-2 border">
                <div className="flex gap-2 justify-center">
                  {editingRow && editingRow.id === row.id ? (
                    <>
                      <button onClick={saveEdit} className="bg-blue-500 text-white p-2 rounded mx-1">
                        حفظ
                      </button>
                      <button onClick={cancelEdit} className="bg-gray-500 text-white p-2 rounded mx-1">
                        إلغاء
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(row)} className="bg-yellow-500 text-white p-2 rounded mx-1">
                        <FaEdit /> تعديل
                      </button>
                      <button onClick={() => deleteRow(row.id)} className="bg-red-500 text-white p-2 rounded mx-1">
                        <FaTrashAlt /> حذف
                      </button>
                    </>
                  )}
                  <button onClick={() => setShowDetails(row.id === showDetails ? null : row.id)} className="bg-blue-500 text-white p-2 rounded mx-1">
                    <FaInfoCircle /> تفاصيل
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDetails !== null && (
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
              {filteredData
                .filter(row => row.id === showDetails)
                .map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="p-2 border">{row.status === "فشل" ? "Unknown WooCommerce Restful API.version" : "No Errors"}</td>
                    <td className="p-2 border">{row.status === "فشل" ? "خطأ" : "لا يوجد"}</td>
                    <td className="p-2 border">{row.status === "فشل" ? "10337009" : "N/A"}</td>
                    <td className="p-2 border">{row.status === "فشل" ? "1:13:25 30/12/2024 PM" : "N/A"}</td>
                    <td className="p-2 border">{row.status === "فشل" ? "حصل خطأ خلال مزامنة المادة 1256800250" : "مزامنة ناجحة"}</td>
                    <td className="p-2 border text-red-600 font-semibold">{row.status === "فشل" ? "فشل" : "ناجح"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
