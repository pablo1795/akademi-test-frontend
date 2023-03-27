import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteAssetMutation, useGetAssetByIdQuery } from '../../store/api/assetApi';

// Components
import Button from '../../components/Button';
import Layout from '../../components/Layout';

function DeleteAsset() {
  const params = useParams();
  const navigate = useNavigate();

  const [deleteAsset] = useDeleteAssetMutation();
  const { data: result = { mesagge: '', result: [] } } = useGetAssetByIdQuery(params.id);
  const assetToDelete = result.result;

  const handleDeleteAsset = () => {
    deleteAsset({ id: params.id })
    navigate('/asset');
  }

  return (
    <Layout
      href={`/asset/${params.id}`}
      linkIcon='◀'
      linkText='atras'
      linkTitle='volver a activos'
      title='eliminar activo'
    >
      <p className='text-3xl'>deseas eliminar el activo {assetToDelete.name}</p>
      
      <div className='flex gap-2'>
        <Button onClick={() => handleDeleteAsset()}>si</Button>
        <Button title='cancelar' onClick={() => navigate(`/asset/${params.id}`)}>no</Button>
      </div>
    </Layout >
  );
}

export default DeleteAsset;
