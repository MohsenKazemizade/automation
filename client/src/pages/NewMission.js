import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MainMissionTableWithCheckbox from '../components/MainMissionTableWithCheckbox';
import SubMissionTable from '../components/SubMissionTable';

// const mainMissionState = {
//   name: '',
// };
const mainMissionState = {
  name: '',
  id_mainmission: '',
};
const NewMission = () => {
  //post request data store
  const [mainMission, setMainmission] = useState(mainMissionState);
  //checkbox نوع ماموریت فرعی data store
  const [show, setShow] = useState(false);
  //get request data store
  const [data, setData] = useState([]);
  //get request submission data store
  const [subData, setSubData] = useState([]);

  const { name, id_mainmission } = mainMission;

  const loadData = async () => {
    const response = await axios.get(
      'http://localhost:5000/api/get/mainmission'
    );
    setData(response.data);
  };

  const loadSubData = async () => {
    const response = await axios.get(
      'http://localhost:5000/api/get/submission'
    );
    setSubData(response.data);
  };

  useEffect(() => {
    loadData();
    loadSubData();
  }, []);

  const handleChange = e => {
    setMainmission({ ...mainMission, [id_mainmission]: e.target.id });
    console.log(mainMission);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setMainmission({ ...mainMission, [name]: value });
  };

  const hiddenTable = () => {
    setMainmission({ name: '' });
    setShow(!show);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (show) {
      subMissionChange();
    } else {
      mainMissionChange();
    }
  };

  const mainMissionChange = () => {
    for (let index = 0; index < data.length; index++) {
      if (data[index].Name === name) return alert('این ماموریت قبلا ثبت شده');

      setMainmission({ name: '' });
    }
    if (!name) {
      return alert('نام ماموریت را وارد کنید');
    } else if (name) {
      axios
        .post('http://localhost:5000/api/post/mainmission', {
          name,
        })
        .catch(err => console.log(err));
      setMainmission({ name: '' });
      alert('ماموریت با موفقیت ثبت شد');
      loadData();
    }
  };

  const subMissionChange = () => {
    console.log('submission');
    for (let index = 0; index < subData.length; index++) {
      if (subData[index].Name === name)
        return alert('این ماموریت قبلا ثبت شده');

      setMainmission({ name: '' });
    }
    if (!name) {
      return alert('نام ماموریت را وارد کنید');
    } else if (name && id_mainmission) {
      axios
        .post('http://localhost:5000/api/post/submission', {
          name,
          id_mainmission,
        })
        .catch(err => console.log(err));
      setMainmission({ name: '' });
      alert('ماموریت با موفقیت ثبت شد');
      loadSubData();
    }
  };

  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <form className='grid grid-cols-2 gap-4 p-8' onSubmit={handleSubmit}>
          <input
            type='text'
            id='missionfield'
            name='name'
            value={name}
            onChange={handleInputChange}
            placeholder='نام ماموریت'
            className='h-12 block w-full px-2 py-1 disabled:bg-gray-100 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
          />
          <div className='h-12 w-full'></div>
          <div className='h-12 w-full'>
            <div className='items-center'>
              <input
                id='default-checkbox2'
                name='default-checkbox'
                type='checkbox'
                checked={show}
                onChange={hiddenTable}
                className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                htmlFor='default-checkbox2'
                className='m-4 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                فرعی
              </label>
            </div>
          </div>
          <div className='h-12 w-full'></div>
          {show && (
            <div className='border rounded-lg overflow-y-scroll max-h-64'>
              <MainMissionTableWithCheckbox
                data={data}
                onChange={handleChange}
              />
            </div>
          )}
          <input
            type='submit'
            value='ثبت'
            className='rounded-lg col-span-2 h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
          />

          <Link
            to='/virayeshevizheghiemission'
            className='rounded-lg h-16 flex col-span-2 mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
          >
            <span className='flex items-center'>ویرایش ویژگی ها</span>
          </Link>
        </form>
        <div className='col-span-2 grid grid-cols-3 py-8 gap-4'>
          <div className='grid grid-rows-2 gap-4'>
            <div className='border rounded-lg overflow-y-scroll max-h-72'>
              <MainMissionTableWithCheckbox data={data} />
            </div>
            <div className='border rounded-lg overflow-y-scroll max-h-72'>
              <SubMissionTable data={subData} />
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-2 gap-4 p-8'>
            <form className='col-span-2 grid grid-cols-2'>
              <input
                type='text'
                placeholder='نام ماموریت'
                className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
              />
              <div className='h-12 block w-full'></div>
              <div className='grid grid-cols-3 col-span-2'>
                <div className='flex w-full item-center'>نوع ماموریت :</div>
                <div className='grid grid-cols-2 col-span-2 h-12 w-full'>
                  <div className='items-center'>
                    <input
                      id='checkbox1'
                      name='checkbox'
                      type='radio'
                      value=''
                      checked
                      className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label
                      htmlFor='checkbox1'
                      className='m-4 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      اصلی
                    </label>
                  </div>
                  <div className='items-center'>
                    <input
                      id='checkbox2'
                      name='checkbox'
                      type='radio'
                      value=''
                      className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label
                      htmlFor='checkbox2'
                      className='m-4 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      فرعی
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <div className='col-span-2 grid grid-cols-2 row-span-2 gap-2'>
              <div className='border rounded-lg overflow-y-scroll max-h-64'>
                <table className='relative min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th
                        scope='col'
                        className='px-3 py-3 text-lg  text-gray-500 text-center '
                      >
                        ویژگی های ماموریت
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 overflow-scroll'>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 1
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 2
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 3
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 4
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 5
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 6
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='border rounded-lg overflow-y-scroll max-h-64'>
                <table className='relative min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th
                        scope='col'
                        className='px-3 py-3 text-center text-lg  text-gray-500 '
                      >
                        ماموریت فرعی
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 overflow-scroll'>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 1
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 2
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 3
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 4
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 5
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 6
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewMission;
