import NamePage from "@/components/namePage";
import CustomTable from "@/components/Table";
import React from "react";

const data = [
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  {id: 1, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'فشل', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط لا'},
  
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  {id: 2, endTime: 'pm 1:13:26 12/4/2024', startTime: 'pm 2:13:26 12/4/2024', sync: 'لا', status: 'نجح', type: 'مزامنة الاسعار مع  الموقع-رقم الاب: 10337 الحديث فقط نعم'},
  

];

const columns = [
  { accessorKey: "endTime", header: "وقت الانتهاء" },
  { accessorKey: "startTime", header: "وقت البدء" },
  { accessorKey: "sync", header: "مزامنة الية" },
  { accessorKey: "status", header: "الحالة" },
  { accessorKey: "type", header: "النوع", },
];

// بيانات وأعمدة جدول التفاصيل (لا تحتاج إلى 'id' في هذا الجدول)
const detailColumns = [
  { accessorKey: "messageOfError", header: "رسالة الخطء" },
  { accessorKey: "typeOfError", header: "نوع الخطء" },
  { accessorKey: "symbol", header: "الرمز" },
  { accessorKey: "time", header: "الوقت" },
  { accessorKey: "message", header: "الرسالة" },
  { accessorKey: "status", header: "الحالة" },
];

const detailData = [
  {id: 1,  status: "نجح", message: "عدد المواد سوف يتم مزامنتها :343", time: "1:13:25 12/30/20205", symbol: '',  typeOfError: 'معلومات', messageOfError: ''  },
  {id: 2,  status: "فشل", message: "حصل خطء خلال مزامنة 10205222   ", time: "1:13:25 12/30/20205", symbol: '10205222', typeOfError: 'خطء', messageOfError: ' unknown WooCommerce Restful API'  },
];

export default function Home() {
  return (
    <div className="flex flex-col py-10">
      <NamePage name={"Home Page"} />
      <CustomTable
        columns={columns}
        data={data}
        title="User Data"
        detailColumns={detailColumns}
        detailData={detailData}
      />
    </div>
  );
}
