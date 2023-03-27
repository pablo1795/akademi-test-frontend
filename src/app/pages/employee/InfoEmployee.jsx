import { useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from '../../store/api/employeeApi';

// Components
import ButtonLink from '../../components/ButtonLink';
import Layout from '../../components/Layout';

function InfoEmployee() {
  const params = useParams();
  const { data: result = { mesagge: '', result: [] }, isError, error } = useGetEmployeeByIdQuery(params.id);
  const employee = result.result;

  return (
    <Layout
      href='/employee'
      linkIcon='◀'
      linkText='atras'
      linkTitle='volver a empleados'
      title='informacion del empleado'
    >
      <ul>
        <li className='flex justify-between'>
          <span>Apellido y nombre:</span>
          <span>{employee.last_name + ' ' + employee.first_name}</span>
        </li>
        <li className='flex justify-between'>
          <span>CUIT:</span>
          <span>{employee.cuit || 'no definido'}</span>
        </li>
        <li className='flex justify-between'>
          <span>Comision</span>
          <span>{employee.team_id || 'no definido'}</span>
        </li>
        <li className='flex justify-between'>
          <span>Fecha de ingreso</span>
          <span>{employee.join_date || 'no definido'}</span>
        </li>
        <li className='flex justify-between'>
          <span>Rol</span>
          <span>{employee.rol || 'no definido'}</span>
        </li>
      </ul>

      <div className="flex gap-2 justify-end">
        <ButtonLink
          href={`/employee/update_employee/${employee._id}`}
          icon='🖍'
          title='editar'
        >
          editar
        </ButtonLink>

        <ButtonLink
          href={`/employee/delete_employee/${employee._id}`}
          icon='🗑'
          title='eliminar'
        >
          eliminar
        </ButtonLink>
      </div>
    </Layout>
  );
}

export default InfoEmployee;
