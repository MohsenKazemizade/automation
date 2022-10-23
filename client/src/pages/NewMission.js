//جدول ویژگی ها کار نمیکنه هنوز درستش نکردی
////باید دیتارو از جدولش تو دیتابیس بگیری و تو جدولش بچینی حالا میخوای یه کامپوننت بسازی یا نسازی
// این باشه برای بعدها : کلیک کردن روی دوتا ماموریت اصلی تو جدولش کاری نمیکنه که ماموریت فرعی برای ماموریت های اصلی انتخاب شده ثبت بشه
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MainMissionTableWithCheckbox from '../components/MainMissionTableWithCheckbox';
import SubMissionTable from '../components/SubMissionTable';
import MainMissionTable from '../components/MainMissionTable';
import SubMissionDetailsTable from '../components/SubMissionDetailsTable';

const mainMissionState = {
  name: '',
  id: '',
};
const NewMission = () => {
  //post request data store
  const [mainMission, setMainmission] = useState(mainMissionState);
  //checkbox نوع ماموریت فرعی data store
  const [show, setShow] = useState(false);
  const [missionName, setMissionName] = useState('');
  const [subDetails, setSubDetails] = useState([]);
  //get request data store
  const [data, setData] = useState([]);
  //get request submission data store
  const [subData, setSubData] = useState([]);

  const { name, id } = mainMission;
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
  const handleInputChange = e => {
    const { name, value } = e.target;
    setMainmission({ ...mainMission, [name]: value });
  };
  const addIdData = e => {
    console.log('addIdData');
    setMainmission({ ...mainMission, id: '' });
    const { name, id } = e.target;
    setMainmission({ ...mainMission, [name]: id });
  };
  const clearIdData = e => {
    console.log('clearIdData');
    const { name } = e.target;
    setMainmission({ ...mainMission, [name]: '' });
  };
  const hiddenTable = () => {
    setShow(!show);
    if (show) setMainmission({ ...mainMission, id: '' });
  };
  const mainMissionChange = () => {
    console.log('mainMission');
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
    for (let index = 0; index < subData.length; index++) {
      if (subData[index].Name === name)
        return alert('این ماموریت قبلا ثبت شده');

      setMainmission({ name: '' });
    }
    if (!name) {
      return alert('نام ماموریت را وارد کنید');
    } else if (name && id) {
      axios
        .post('http://localhost:5000/api/post/submission', {
          name,
          id,
        })
        .catch(err => console.log(err));
      setMainmission({ name: '' });
      alert('ماموریت با موفقیت ثبت شد');
      loadSubData();
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (show) {
      subMissionChange();
    } else {
      mainMissionChange();
    }
  };

  const selectMainMission = e => {
    const { id } = e.target;
    const subMissions = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].ID == id) {
        let name = data[index].Name;
        setMissionName(name);
      }
    }
    for (let index = 0; index < subData.length; index++) {
      if (subData[index].id_mainmission == id) {
        subMissions.push({
          name: subData[index].Name,
          id: subData[index].ID,
        });
        setSubDetails(subMissions);
      }
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
                addIdData={addIdData}
                clearIdData={clearIdData}
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
              <MainMissionTable
                data={data}
                selectMainMission={selectMainMission}
              />
            </div>
            <div className='border rounded-lg overflow-y-scroll max-h-72'>
              <SubMissionTable data={subData} />
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-2 gap-4 p-8'>
            <form className='col-span-2 grid grid-cols-2'>
              <span className='h-12  w-full px-2 py-1 text-sm'>
                {missionName}
              </span>
              <div className='h-12 block w-full'></div>
              <div className='grid grid-cols-3 col-span-2'></div>
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
                <SubMissionDetailsTable subDetails={subDetails} />
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
