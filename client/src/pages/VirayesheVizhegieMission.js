import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DropDownMainMission from '../components/DropDownMainMission';
import DropDownSubMission from '../components/DropDownSubMission';
import RequermentsTableWithCheckbox from '../components/RequermentsTableWithCheckbox';

const requirementsState = {
  ids: [],
  subId: '',
};

// const addId = [];
const VirayesheVizhegieMission = () => {
  const [data, setData] = useState([]);
  const [subData, setSubData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [subByMainIdData, setSubByMainIdData] = useState([]);
  const [requirements, setRequirements] = useState(requirementsState);
  const [requirementsText, setRequirementsText] = useState('');
  const { ids, subId } = requirements;
  let idArray = [];

  const loadData = async () => {
    const response = await axios.get(
      'http://localhost:5000/api/get/mission_requerments'
    );
    setData(response.data);
  };
  const loadSubData = async () => {
    const response = await axios.get(
      'http://localhost:5000/api/get/submission'
    );
    setSubData(response.data);
  };
  const loadMainData = async () => {
    const response = await axios.get(
      'http://localhost:5000/api/get/mainmission'
    );
    setMainData(response.data);
  };
  useEffect(() => {
    loadData();
    loadSubData();
    loadMainData();
  }, []);

  const addIdData = e => {
    const { name, id } = e.target;
    let idds = requirements[name].map(x => parseInt(x));
    if (requirements[name].includes(id)) return;
    idds.push(parseInt(id));
    let addId = { ...requirements, [name]: idds };
    setRequirements(addId);
  };
  const clearIdData = e => {
    const { name, id } = e.target;
    let idds = requirements[name].map(x => parseInt(x));
    if (requirements[name].includes(parseInt(id))) {
      idds = idds.filter(item => item !== parseInt(id));
      let addId = { ...requirements, [name]: idds };
      setRequirements(addId);
    }
  };
  const handleMainSelect = e => {
    const { value } = e.target;
    const subByMainId = [];
    for (let index = 0; index < subData.length; index++) {
      if (subData[index].id_mainmission == value) {
        subByMainId.push({
          name: subData[index].Name,
          id: subData[index].ID,
        });
        setSubByMainIdData(subByMainId);
      }
    }
  };
  const handleSubSelect = e => {
    const { name, value } = e.target;
    setRequirements({ ...requirements, [name]: value });
    const requirementsBySubId = [];
    for (let index = 0; index < subData.length; index++) {
      if (subData[index].ID == value) {
        requirementsBySubId.push({
          id: subData[index].id_requirements,
        });
      }
    }
    idArray = JSON.parse(requirementsBySubId[0].id);
    handleTextBar(idArray);
  };
  const updateRequirements = () => {
    axios
      .put('http://localhost:5000/api/update/submission', {
        ids,
        subId,
      })
      .catch(err => console.log(err));

    setRequirements(requirementsState);

    alert('ویژگی های این ماموریت با موفقیت ثبت شد');
    loadSubData();
  };
  const handleSubmit = e => {
    e.preventDefault();
    updateRequirements();
  };
  const handleTextBar = array => {
    let text = '';
    if (array) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[j].ID == array[i]) {
            text += '   ' + data[j].requerment_name + ' ,';
          }
        }
      }
      setRequirementsText(text);
    } else {
      setRequirementsText('');
    }
  };

  return (
    <div>
      <Header />

      <div className='grid grid-cols-2 gap-4'>
        <form
          className='grid grid-cols-2 gap-4 py-8 px-4'
          onSubmit={handleSubmit}
        >
          <div className='grid grid-cols-2 rounded-lg h-16 text-center justify-center'>
            <span className='items-center'>ماموریت اصلی :</span>
            <DropDownMainMission
              mainData={mainData}
              handleMainSelect={handleMainSelect}
            />
          </div>
          <div className='grid grid-cols-2 rounded-lg h-16 text-center justify-center'>
            <span className='items-center'>ماموریت فرعی :</span>
            <DropDownSubMission
              subData={subData}
              subByMainIdData={subByMainIdData}
              handleSubSelect={handleSubSelect}
            />
          </div>

          <div className='h-12 block w-full'>ویژگی های ماموریت :</div>
          <div className='h-12 block w-full'></div>
          <div className='col-span-2 h-24 overflow-y-scroll'>
            <input
              id='default-text'
              type='text'
              disabled
              defaultValue={requirementsText}
              className='w-full h-full text-gray-700 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
          </div>
          <div className='border rounded-lg overflow-y-scroll'>
            <RequermentsTableWithCheckbox
              data={data}
              addIdData={addIdData}
              clearIdData={clearIdData}
            />
          </div>

          <input
            type='submit'
            value='ثبت'
            className='rounded-lg col-span-2 h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
          />
        </form>
        <div></div>
      </div>

      <Footer />
    </div>
  );
};

export default VirayesheVizhegieMission;
