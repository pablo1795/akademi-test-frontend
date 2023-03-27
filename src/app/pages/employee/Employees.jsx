import { useGetAllEmployeesQuery } from '../../store/api/employeeApi';

// Components
import ButtonLink from '../../components/ButtonLink';
import CreateTable from '../../components/common/CreateTable';
import Layout from '../../components/Layout';

function Employees() {
  const { data: result = { mesagge: '', result: [] }/*, isError, error*/ } = useGetAllEmployeesQuery();
  const employees = result.result;

  const prepareRow = employees.map((value) => ([
    value._id,
    value.first_name,
    value.last_name,
    value.team_id,
    <div className='flex items-center justify-center'>
      <ButtonLink
        icon='📄'
        href={`/employee/${value._id}`}
        title='abrir perfil'
      >
        información
      </ButtonLink>
    </div>,
  ]));

  return (
    <Layout
      className='flex flex-col gap-4'
      href='/employee/create_employee'
      linkIcon='➕'
      linkText='nuevo'
      linkTitle='nuevo empleado'
      title='lista de empleados'
    >
      <CreateTable
        bodyData={prepareRow}
        headerData={['N° id', 'apellido/s', 'nombre/s', 'comisión', 'acciones']}
        title='empleados'
      />
    </Layout>
  );
}

export default Employees;
