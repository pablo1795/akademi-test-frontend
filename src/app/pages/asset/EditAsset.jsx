import { useNavigate, useParams } from 'react-router-dom';
import { useGetAssetByIdQuery } from '../../store/api/assetApi';

// Components
import Layout from '../../components/Layout';
import FormAsset from '../../components/FormAsset';

function EditAsset() {
  const params = useParams();

  const { data: result = { mesagge: '', result: [] } } = useGetAssetByIdQuery(params.id);
  const assetToEdit = result.result;

  const navigate = useNavigate();

  const handleEditAsset = () => {
    navigate('/asset');
  }

  return (
    <Layout
      href={`/asset/${params.id}`}
      linkIcon='◀'
      linkText='atras'
      linkTitle='volver a activos'
      title='editar activo'
    >
      <FormAsset assetData={assetToEdit} onEdit={handleEditAsset} />
    </Layout>
  );
}

export default EditAsset;
