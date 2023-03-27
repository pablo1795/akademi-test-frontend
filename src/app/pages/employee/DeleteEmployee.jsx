import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteEmployeeMutation, useGetEmployeeByIdQuery } from '../../store/api/employeeApi';

// Components
import Button from '../../components/Button';
import Layout from '../../components/Layout';

function DeleteEmployee() {
  const params = useParams();
  const navigate = useNavigate();

  const [deleteEmployee] = useDeleteEmployeeMutation();
  const { data: result = { mesagge: '', result: [] } } = useGetEmployeeByIdQuery(params.id);
  const employeeToDelete = result.result;

  const handleDeleteEmployee = () => {
    deleteEmployee({ id: params.id })
    navigate('/employee');
  }

  return (
    <Layout
      href={`/employee/${params.id}`}
      linkIcon='◀'
      linkText='atras'
      linkTitle='volver a empleados'
      title='eliminar empleado'
    >
      <p className='text-3xl'>deseas eliminar el empleado {employeeToDelete.first_name}</p>

      <div className='flex gap-2'>
        <Button onClick={() => handleDeleteEmployee()}>si</Button>
        <Button title='cancelar' onClick={() => navigate(`/employee/${params.id}`)}>no</Button>
      </div>
    </Layout >
  );
}

export default DeleteEmployee;
