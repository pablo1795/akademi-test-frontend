import { useGetAllAssetsQuery } from '../../store/api/assetApi';

// Components
import ButtonLink from '../../components/ButtonLink';
import CreateTable from '../../components/common/CreateTable';
import Layout from '../../components/Layout';

function Assets() {
  const { data: result = { mesagge: '', result: [] }/*, isError, error*/ } = useGetAllAssetsQuery();
  const asset = result.result;

  const prepareRow = asset.map((value) => ([
    value._id,
    value.name,
    value.type,
    value.code,
    value.marca,
    <div className='flex items-center justify-center'>
      <ButtonLink
        icon='📄'
        href={`/asset/${value._id}`}
        title='informacion'
      >
        información
      </ButtonLink>
    </div>,
  ]));

  return (
    <Layout
      className='flex flex-col gap-4'
      href='/asset/create_asset'
      linkIcon='➕'
      linkText='nuevo'
      linkTitle='nuevo activo'
      title='lista de activos'
    >
      <CreateTable
        bodyData={prepareRow}
        headerData={['N° id', 'nombre', 'tipo', 'codigo', 'marca', 'acciones']}
        title='activos'
      />
    </Layout>
  );
}

export default Assets;
