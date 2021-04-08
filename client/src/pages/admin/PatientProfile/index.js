import React, { useEffect, useState } from 'react';
import { get } from 'axios';

import { useParams } from 'react-router-dom';

import Title from '../../../components/common/Title';
import PatientDetailsForm from '../../../components/PatientDetailsForm';
import PatientTreatmentForm from '../../../components/PatientTreatmentForm';
import PatientHistory from '../../../components/PatientHistory';

function PatientProfile() {
  const [historyData, setHistoryData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [updateDate, setUpdateDate] = useState(0);
  const [balanceValue, setBalanceValue] = useState(0);
  const { patientId } = useParams();
  useEffect(() => {
    const getPatientHistory = async () => {
      const {
        data: {
          data: { profile, history, balance },
        },
      } = await get(`/api/v1/patients/${patientId}`);
      setHistoryData(history);
      setProfileData(profile);
      setBalanceValue(balance);
    };
    getPatientHistory();
  }, [patientId, updateDate]);
  return (
    <div style={{ width: '800px' }}>
      <Title text="Patient Profile" />
      <PatientDetailsForm
        profileData={{ ...profileData, balance: balanceValue }}
        patientId={patientId}
        setUpdateDate={setUpdateDate}
      />
      <PatientTreatmentForm
        patientId={patientId}
        setUpdateDate={setUpdateDate}
      />
      <PatientHistory historyData={historyData} patientId={patientId} />
    </div>
  );
}

export default PatientProfile;
