import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/slices/employees/employeesSlice';

import { useNavigate } from 'react-router-dom';

// Components
import FormEmployee from '../../components/FormEmployee';
import Layout from '../../components/Layout';

function NewEmployee() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddEmployee = (data) => {
    dispatch(addEmployee(data));
    navigate('/employee');
  }

  return (
    <Layout
      href='/employee'
      linkIcon='◀'
      linkText='atras'
      linkTitle='volver a empleados'
      title='nuevo empleado'
    >
      <FormEmployee onCreate={handleAddEmployee} />
    </Layout>
  );
}

export default NewEmployee;
