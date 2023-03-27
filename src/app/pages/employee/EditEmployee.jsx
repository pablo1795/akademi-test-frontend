import { useNavigate, useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from '../../store/api/employeeApi';

// Components
import Layout from '../../components/Layout';
import FormEmployee from '../../components/FormEmployee';

function EditEmployee() {
  const params = useParams();

  const { data: result = { mesagge: '', result: [] } } = useGetEmployeeByIdQuery(params.id);
  const employeeToEdit = result.result;

  const navigate = useNavigate();

  const handleEditEmployee = () => {
    navigate('/employee');
  }

  return (
    <Layout
      href={`/employee/${params.id}`}
      linkIcon='◀'
      linkText='atras'
      linkTitle='volver a empleados'
      title='editar empleado'
    >
      <FormEmployee employeeData={employeeToEdit} onEdit={handleEditEmployee} />
    </Layout>
  );
}

export default EditEmployee;
