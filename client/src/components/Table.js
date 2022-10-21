import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from '../img/1.png';
import moreIcon from '../img/more-information.png';
import image1 from '../img/1.png';

const Table = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get('http://localhost:5000/api/get');
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='border rounded-lg'>
      <table className='relative min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th scope='col' className='py-3 pr-4'>
              <div className='flex items-center h-5'>
                <input
                  id='checkbox-all'
                  type='checkbox'
                  className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                />
                <label htmlFor='checkbox' className='sr-only'>
                  Checkbox
                </label>
              </div>
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              درجه
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              کد ملی
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              نام و نام خانوادگی
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              نام پدر
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              کد سازمانی
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              محل خدمت
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              مدت خدمت
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              تاریخ شروع خدمت
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              درجه مصوب
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              جنسیت
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              عضویت
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              کد خدمت
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              کد مدرک تحصیلی
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              کد عضویت
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              جایگاه
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              شماره تماس
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              Expr1
            </th>

            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            >
              Expr2
            </th>
            <th
              scope='col'
              className='px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase '
            ></th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {data.map(item => {
            return (
              <tr key={item.codep_int}>
                <td className='py-3 pr-4'>
                  <div className='flex items-center h-5'>
                    <input
                      type='checkbox'
                      className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                    />
                    <label htmlFor='checkbox' className='sr-only'>
                      Checkbox
                    </label>
                  </div>
                </td>

                <td className='px-3 py-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0 h-10 w-10'>
                      <img
                        className='h-10 w-6  rounded max-h-full'
                        src={image1}
                        alt=''
                      />
                    </div>
                  </div>
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.CodeMelli}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.Name + ' ' + item.Famil}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.NamePedar}
                </td>

                <td className='px-3 py-4 text-sm text-right whitespace-nowrap'>
                  {item.codep_int}
                  {/* <a className='text-green-500 hover:text-green-700' href='#'>
                      Edit
                    </a> */}
                </td>

                <td className='px-3 py-4 text-sm text-right whitespace-nowrap'>
                  {item.Name_Kdmat}
                  {/* <a className='text-red-500 hover:text-red-700' href='#'>
                      Delete
                    </a> */}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.SanavatKhedmati}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.DVorud}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.DarajehMosavab}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  مرد
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.Name_Ozvit}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.Code_Kdmat}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.MadrakTahsili}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.Ozvieat}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.Jaygah}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.TELEFON}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.Expr1}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {item.Expr2}
                </td>

                <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  <button className='shadow-sm hover:items-shadow-lg focus:shadow-none'>
                    <img src={moreIcon} alt='' className='h-6 w-6' />
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className='py-3 pr-4'>
              <div className='flex items-center h-5'>
                <input
                  type='checkbox'
                  className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                />
                <label htmlFor='checkbox' className='sr-only'>
                  Checkbox
                </label>
              </div>
            </td>

            <td className='px-3 py-4 whitespace-nowrap'>
              <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                  <img
                    className='h-10 w-6 rounded max-h-full'
                    src={image}
                    alt=''
                  />
                </div>
              </div>
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              123456789
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              اَرسلان تهرانی مقدم
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              حسن
            </td>

            <td className='px-3 py-4 text-sm text-right whitespace-nowrap'>
              123546
              {/* <a className='text-green-500 hover:text-green-700' href='#'>
                      Edit
                    </a> */}
            </td>

            <td className='px-3 py-4 text-sm text-right whitespace-nowrap'>
              خراسان رضوی
              {/* <a className='text-red-500 hover:text-red-700' href='#'>
                      Delete
                    </a> */}
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              12345
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              12345678
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              12
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              1
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              ثابت نظامی
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              123456789
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              22
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              12
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              12
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              9123456789
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              123456
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              فرمانده قرارگاه
            </td>

            <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
              <button className='shadow-sm hover:items-shadow-lg focus:shadow-none'>
                <img src={moreIcon} alt='' className='h-6 w-6' />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
